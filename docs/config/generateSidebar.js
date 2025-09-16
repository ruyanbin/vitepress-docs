// config/generateSidebar.js
const { log } = require("console");
const fs = require("fs");
const path = require("path");

function getTitleFromFile(filePath) {
	try {
		const content = fs.readFileSync(filePath, "utf-8");
		// 提取 Markdown 标题
		const titleMatch = content.match(/^#\s+(.*)$/m);
		return titleMatch
			? titleMatch[1]
			: path.basename(filePath, path.extname(filePath));
	} catch (e) {
		return path.basename(filePath, path.extname(filePath));
	}
}

function generateSidebar() {
	const sidebar = {};

	// 确保 views 目录存在
	const viewsPath = path.join(__dirname, "../views");
	if (!fs.existsSync(viewsPath)) {
		console.log("views directory does not exist, creating empty sidebar");
		const configContent = `export default {}`;
		fs.writeFileSync(path.join(__dirname, "autoSidebar.ts"), configContent);
		return;
	}

	function processDirectory(dirPath) {
		const entries = fs.readdirSync(dirPath, { withFileTypes: true });
		const files = entries.filter(
			(e) => e.isFile() && (e.name.endsWith(".md") || e.name.endsWith(".vue"))
		);
		const dirs = entries.filter((e) => e.isDirectory());

		if (files.length > 0) {
			// 使用相对于 docs 目录的路径
			const relativeDir = path
				.relative(path.join(__dirname, "../views"), dirPath)
				.replace(/\\/g, "/");
			console.log(relativeDir, "relativeDir");
			const sidebarKey = relativeDir;
			console.log(sidebarKey, "sidebarKey");
			sidebar[sidebarKey] = files.map((file) => {
				const fileName = path.basename(file.name, path.extname(file.name));
				const filePath = path.join(dirPath, file.name);
				const link = relativeDir + "/" + fileName;

				return {
					text: fileName === "index" ? "介绍" : getTitleFromFile(filePath),
					link: link,
				};
			});
		}

		// 递归处理子目录
		dirs.forEach((dir) => {
			processDirectory(path.join(dirPath, dir.name));
		});
	}

	processDirectory(viewsPath);

	// 确保写入路径正确
	const outputPath = path.join(__dirname, "autoSidebar.ts");
	const configContent = `export default ${JSON.stringify(sidebar, null, 2)}`;

	try {
		fs.writeFileSync(outputPath, configContent);
		console.log("Sidebar generated successfully at:", outputPath);
	} catch (error) {
		console.error("Error writing sidebar file:", error);
		// 尝试创建目录
		try {
			fs.mkdirSync(path.dirname(outputPath), { recursive: true });
			fs.writeFileSync(outputPath, configContent);
			console.log("Sidebar generated successfully after creating directory");
		} catch (retryError) {
			console.error("Failed to generate sidebar even after retry:", retryError);
		}
	}
	console.log(sidebar, "sidebar");
}

generateSidebar();
