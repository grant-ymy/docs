# Shell 编程

## Hello world!

```sh
#! /bin/bash

echo 'hello world!'
```

```sh
./test.sh // 输出 hello world!
```

#! 声明此脚本使用的 shell

注意需要赋予执行权限。`sudo chmod +x xxx.sh`

## 变量

Shell 变量分为系统变量和自定义变量，系统变量有 $HOME、$PWD 等。查看所有变量：`set`

变量定义：变量名=变量值。

:::warning
等号左右不能有空格。
:::

获取变量：$变量名。

删除变量：unset 变量名。

将命令返回值赋给变量：

- 反引号：VAR=`command`
- $符：VAR=$(`command`)

环境变量：

export 变量名=变量值（通常配置在 .bashrc 或 .zshrc 中）
记得使用 source 使配置立即生效。通过 echo $变量名检查是否生效。

位置参数变量：

- $n: $0 代表命令本身，$1-$9 代表第 1 个到第 9 个参数，10及以上需要使用花括号，${10}。
- $*: 命令行的所有参数，且把所有参数仓做一个整体。
- $@: 命令行的所有参数，且把每个参数独立对待。
- $#: 参数个数。

```sh
#! /bin/bash

echo $0 $1 $2
echo $*
echo $@
echo $#
```

运行测试：

```sh
./test.sh a b c

./test.sh a b
a b c // 此处看不出区别，但循环遍历时此处只有一个元素
a b c
3
```
