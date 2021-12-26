# Git

[[toc]]

## Git Flow

![](./pics/git-model.png)

参考：[a-successful-git-branching-model](https://nvie.com/posts/a-successful-git-branching-model/)

## Git merge 时 --no-ff 参数的作用

ff: fast-forward 快进式合并，直接改变指针指向。

```
          A---B---C feature
         /
D---E---F master
```

当我们使用 merge 命令合并两个分支时，如果 Git 判断合并两个分支之间的差异部分可以通过直接移动指针指向实现的话，默认会使用快进式合并。即：

```
          A---B---C feature
         /          master
D---E---F
```

而使用 --no-ff 表示不希望快进式合并，而是将被合并分支生成一个新的提交，并且保留分支提交变化历史：

```
          A---B---C feature
         /         \
D---E---F-----------G master
```

从合并结果看两种方式并无差异。区别是快进式合并会把被合并分支上的提交混入合并分支上，可能会影响提交历史的整洁性，另外对版本回退也有影响。建议使用 --no-ff 参数以保留历史分支信息，而且方便管理被合并分支的提交。

![](./pics/merge-ff.png)

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

<Vssue />
