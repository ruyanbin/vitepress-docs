# git 

::: tip
`git`:Git 是一个分布式版本控制系统，用于跟踪计算机文件的更改，并协调多个用户之间的协作工作。
以下是 Git 的一些基本概念和特点
- 版本控制：Git 可以记录每次对项目所做的修改，使得回溯到之前的版本变得简单。
- 分支管理：Git 提供了非常强大的分支管理功能，允许开发者轻松地创建、合并和删除分支。
- 分布式架构：每个开发者的本地仓库都是服务器仓库的一个完整副本，包含了所有提交历史和分支。
- 高效性能：Git 被设计为高速高效，适合管理从很小到非常大的项目版本。
对于 JSON 和 YAML 这样的配置文件，使用 Git 管理可以带来以下好处：
1. 变更追踪：可以查看谁在何时修改了哪些内容。
2. 协同编辑：多个人可以同时编辑同一个文件的不同部分，通过 Git 合并这些更改。
3. 备份与恢复：由于 Git 仓库分散在各个开发者的本地，即使服务器上的仓库丢失，也可以从其他地方恢复。
:::

## 安装

  <el-tabs type="border-card">
    <el-tab-pane label="window">
<div>

1. 前往 [Git for Windows](https://gitforwindows.org/) 下载安装包。
2. 安装时选择 `Use Git from the Windows Command Prompt` 选项。
    <el-alert title="注意" type="warning">
      <p>安装完成后，在命令行中输入 `git --version` 验证安装是否成功。</p>
    </el-alert>
3. 配置 在安装完成之后，你需要进行Git的基本配置。打开命令行窗口（Win+R，输入cmd），输入以下命令
```
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
将 "Your Name" 和 "your_email@example.com" 替换成你自己的用户名和邮箱地址。这里的用户名和邮箱地址将会被作为Git提交的作者和邮箱信息。如果你想修改这些信息，可以重新执行上述命令进行修改。
```
ssh-keygen -t rsa -f ~/.ssh/fileName_id_rsa -C "youremail@example.com"

```
在 .ssh 文件中生成一个公钥和私钥对，并将公钥添加到 GitHub 上的账户中。
  </div>
    </el-tab-pane>
    <el-tab-pane label="macOS">
    在 Mac 上安装 Git 有多种方式。 最简单的方法是安装 Xcode Command Line Tools。 Mavericks （10.9） 或更高版本的系统中，在 Terminal 里尝试首次运行 'git' 命令即可。
    </el-tab-pane>
  </el-tabs>


## 常用命令

1. 初始化仓库：`git init`
2. 添加文件到暂存区：`git add <file>` 或 `git add .`
3. 提交更改：`git commit -m "commit message"`
4. 撤销更改 `git reset -- <file>`
5. 删除文件 `git rm <file>`

6. 查看提交历史：`git log`
7. 查看修改过的文件：`git status`

8. 列出所有分支 `git branch`
9. 切换分支：`git checkout -- <file>`
10. 创建分支：`git branch <branch-name>`
11. 合并分支：`git merge <branch-name>`
12. 删除分支：`git branch -d <branch-name>`
13。 切换远程分支：`git checkout -b <branch-name> origin/<branch-name>`
14. 推送到远程仓库：`git push origin <branch-name>`

15. 添加远程仓库 `git remote add origin <repository-url>`
16. 拉取远程仓库：`git pull origin <branch-name>`
17. 推送本地仓库：`git push origin <branch-name>`
18。 查看远程仓库：`git remote -v`
19. 查看远程分支：`git ls-remote --heads origin`
20. 创建并推送远程分支：`git push origin -u <branch-name>`

21. 克隆仓库：`git clone <repository-url>`
22. 克隆指定分支的仓库：`git clone -b <branch-name> <repository-url>`

- 解决冲突

1. 查看冲突：`git diff`
2. 解决冲突： `git mergetool`
3. 重置到特定版本 `git reset --hard [commit-hash]`
4. 标签管理 `git tag [tag-name] [commit-hash]`
5. 查看标签 ·`git tag`
6. 推送到远程仓库 `git push origin [tag-name]`
