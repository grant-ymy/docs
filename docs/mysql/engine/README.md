# 存储引擎

MySQL 支持多种存储引擎，一般常用到的是 InnoDB、MyISAM。

```sql
mysql> show engines;
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| Engine             | Support | Comment                                                        | Transactions | XA   | Savepoints |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
| InnoDB             | DEFAULT | Supports transactions, row-level locking, and foreign keys     | YES          | YES  | YES        |
| MRG_MYISAM         | YES     | Collection of identical MyISAM tables                          | NO           | NO   | NO         |
| MEMORY             | YES     | Hash based, stored in memory, useful for temporary tables      | NO           | NO   | NO         |
| BLACKHOLE          | YES     | /dev/null storage engine (anything you write to it disappears) | NO           | NO   | NO         |
| MyISAM             | YES     | MyISAM storage engine                                          | NO           | NO   | NO         |
| CSV                | YES     | CSV storage engine                                             | NO           | NO   | NO         |
| ARCHIVE            | YES     | Archive storage engine                                         | NO           | NO   | NO         |
| PERFORMANCE_SCHEMA | YES     | Performance Schema                                             | NO           | NO   | NO         |
| FEDERATED          | NO      | Federated MySQL storage engine                                 | NULL         | NULL | NULL       |
+--------------------+---------+----------------------------------------------------------------+--------------+------+------------+
9 rows in set (0.00 sec)
```

:::tip
本地测试环境版本为 5.7.26
:::

可以看到默认的存储引擎是 InnoDB，它的主要特点是支持事物、行锁、外键，默认的事务隔离级别为repeatable-read（可重复读），采用 MVCC（Multiversion Concurrency Control，多版本并发控制），可以支持更高的并发。一般不使用它的外键，因为增加了表之间的耦合度，而是通过业务代码做关联。采用 InnoDB 引擎的表，其数据存储结构为聚簇表，所有的数据按照主键来阻止，数据和索引放在一块，都位于 B+ 树的叶子节点上。

MyISAM 存储引擎不支持事物，但其读写速度要好于 InnoDB。支持表级锁，写操作并发较低。使用非聚簇索引，索引文件和数据文件分别存储。


<Vssue />
