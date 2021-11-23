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

- `$n`: $0 代表命令本身，$1-$9 代表第 1 个到第 9 个参数，10及以上需要使用花括号，${10}。
- `$*`: 命令行的所有参数，且把所有参数仓做一个整体。
- `$@`: 命令行的所有参数，且把每个参数独立对待。
- `$#`: 参数个数。

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

预定义变量：

- `$$`: 当前进程 pid。
- `$!`: 后台运行的最后一个进程 pid。
- `$?`: 最后一次命令执行的结果返回值，0 为成功，非 0 为失败。


## 运算符

语法格式：

- $((运算式)) 或 $[]。
- `expr 运算式` （注意运算符间要有空格, * 前需要加 `\` 转义符）。

    ```sh
    echo $((1+(2*3))) // 7
    echo $[1+(2*3)] // 7
    echo `expr 1 + 2 \* 3` // 7
    ```

## 条件判断

语法格式：

`[ condition ]`（注意条件表达式前后要要空格；0 为真，其他为假）

```sh
#!/bin/bash

if [ 1>0 ]
then
     echo 'y'
else
    echo 'n'
fi
```

```sh
#!/bin/bash

score=70
echo $score

if [ $score -gt 90 ]
then
     echo '优秀'
elif [ $score -gt 60 ]
then
    echo '良好'
else
    echo '不及格'
fi
```

## case 分支

语法格式：

```sh
#!/bin/bash

case $1 in
"1")
#code
;;
esac
```

测试：

```sh
#!/bin/bash

case $1 in
"1")
echo 周一
;;
"2")
echo 周二
;;
*)
echo 其它
;;
esac
```

## for 循环

语法格式：

```sh
# 语法1
for 变量名 in 值1 值2 值3...
do
    # code
done

# 语法2
for ((初始值;循环控制条件;变量变化))
do
    # code
done
```

打印命令行输入参数：

```sh
#!/bin/bash

for i in "$*"
do
    echo $i
done

for j in "$@"
do
    echo $j
done
```

执行结果：

```sh
./test.sh a b c
a b c
a
b
c
```

## while 循环

语法格式：

```sh
while [ 条件判断式 ]
do
    # code
done
```

测试输出前 10 个数：

```sh
#!/bin/bash
a=0
while [ $a -lt 10 ]
do
    echo $a
    a=$[$a+1]
done
```

## 读取控制台输入参数

read [选项] 参数

- -p：指定读取值时的提示符
- -t：指定读取值时等待的时间（秒），如果没有在指定时间内输入，就不再等待了。
```sh
#!/bin/bash

read -p "请输入一个数num1=" NUM1
echo "你输入num1的值是：$NUM1"

read -t 10 -p "请在10秒内输入一个数num2=" NUM2
echo "你输入num2的值是：$NUM2"
```

## 函数

语法格式：

```sh
[ function ] funname[()]
{
    Action;
    [return int;]
}

# 调用
funname 参数1 参数2...
```

计算输入两个参数的和:

```sh
#!/bin/bash

function getSum(){
    SUM=$[$n1+$n2]
    echo "sum=$SUM"
}

read -p "请输入第一个参数n1：" n1
read -p "请输入第二个参数n2：" n2

# 调用 getSum 函数
getSum $n1 $n2
```

<Vssue />
