# Git

[[toc]]

## 在本地忽略已被 Git 追踪的文件

通常情况下我们使用 `.gitignore` 文件指定需要被 Git 忽略的文件，但是有时会遇到以下场景：

- 在多人项目开发时，文件已经被版本控制。
- 想要忽略某个文件的本地变更并且又不希望提交到远程，例如在应用的配置文件或者代码中加入了方便本地调试的代码。

在这种情况下可以使用以下命令来阻止改文件的变更被 Git 追踪：

```sh
git update-index --skip-worktree path/to/file
```

使用此方式忽略后，本地仓库中就可以变得非常 clean。当需要恢复时使用 `--no-skip-worktree` 即可。

查看工作树中的文件追踪状态：

```sh
git ls-files -v | grep ^S
```

`ls-files` 查看文件 Git 追踪状态。 `-v` 表示检查包括被忽略的文件。`--skip-worktree` 后的文件状态展示为 `S`。

reference：

- [git update-index](https://git-scm.com/docs/git-update-index)
- [git ls-files](https://git-scm.com/docs/git-ls-files)

<Vssue  />
