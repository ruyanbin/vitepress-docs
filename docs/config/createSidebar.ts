import fs from 'fs';
import path from 'path';

const docsPath = path.resolve(__dirname, '../docs');
type sidebarConfigType = {
  text?: string,
  link?: string,
  items?: Array<sidebarConfigType | string>,
}
export function generateSidebarConfig(docsPath: string, link = '', index = 0) {
  const files = fs.readdirSync(docsPath);
  const sidebarConfig: sidebarConfigType = {};

  console.log(files, 'files')
  files.forEach(file => {
    if (file.startsWith('.')) return;

    const filePath = path.join(docsPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {// 如果是文件夹 递归生成子级sidebar 配置
      if (index === 0) {
        const config = generateSidebarConfig(filePath, `/${file}/`, index + 1);
        if (!sidebarConfig[`/${file}/`]) {
          sidebarConfig[`/${file}/`] = [config];
        }
      } else {
        if (!sidebarConfig.items) {
          sidebarConfig.items = [];
        }
        sidebarConfig.items.push(generateSidebarConfig(filePath, `${link}${file}/`, index + 1))
      }

    } else {// 如果是文件
      const extname = path.extname(file);
      const basename = path.basename(file, extname);
      if (file === 'index.md' && index > 0) {
        const menuPath = path.dirname(file);
        const menuName = path.basename(menuPath)
        sidebarConfig.text = menuName;
        sidebarConfig.link = link;
      }

      if (extname === '.md' && file !== 'index.md') {
        if (!sidebarConfig.items) {
          sidebarConfig.items = [];
        }
        sidebarConfig.items.push({
          text: basename,
          link: `${link}${basename}`,
        });
      }

    }

  });
  console.log(sidebarConfig, 'sidebar')
  return sidebarConfig;

}