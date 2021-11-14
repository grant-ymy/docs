# 常用命令

## awk

一个强大的文本分析工具。

```sh
awk [] 'script' input-file(s)
```

-F 指定分隔符，默认空格或 tab。
-f 从脚本文件中读取命令。

```sh
echo "monkey see monkey do" | awk '{print $0}' # monkey see monkey do
echo "monkey see monkey do" | awk '{print $1}' # monkey
echo "monkey see monkey do" | awk '{print $1,$2}' # monkey see
echo "monkey see monkey do" | awk '{print $1 $2}' # monkeysee
```

- 内置变量

  - NR 当前记录数（行数）
  - NF 字段个数（列数）

  ```sh
  # 输出
  # 1-4-monkey
  # 2-2-Hello
  echo "monkey see monkey do" | awk '{print NR "-" NF "-" $1}'
  ```
- 支持函数

  - length
  - toupper
  - tolower
  - substr

- 条件操作，正则匹配

  ```sh
  awk -F ':' '{ if ($1 > "d") { print $1 } else { print "-" } }' /etc/passwd
  ```

  ```sh
  awk '${n} ~ /pattern/ {print ${}}' file
  ```
