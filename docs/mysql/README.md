# MySQL

## 存储引擎

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

## B- 树和 B+ 树

- [漫画：什么是B-树？](https://zhuanlan.zhihu.com/p/54084335)
- [漫画：什么是B+树？](https://zhuanlan.zhihu.com/p/54102723)

B 树相比二叉树，每个节点可以储存多个元素，降低了树的高度，减少了磁盘 IO 次数，所以也就提升了性能。

B+ 树是在 B 树基础上进一步优化，使其更适合实现存储索引结构。InnoDB存储引擎就是用B+Tree实现其索引结构。
B+ 树每个非叶子节点只存储 key 值信息，所有的 data 都按照键值大小存放在同一层的叶子节点，并且这些节点通过双向链表按顺序一次连接。

## 索引优化

数据库最常规的功能就是管理数据的增删改查，而实际业务场景中，对已有数据的提取（查询）是其中使用最频繁的。随着数据量的增长，对数据检索的效率问题也随之浮现，好在发明数据库的大叔们早就想到了这一点，设计了强有力的工具 -- 索引（index），大多数情况下它可以很好地解决问题。

> The best way to improve the performance of SELECT operations is to create indexes on one or more of the columns that are tested in the query. The index entries act like pointers to the table rows, allowing the query to quickly determine which rows match a condition in the WHERE clause, and retrieve the other column values for those rows. All MySQL data types can be indexed.

> Although it can be tempting to create an indexes for every possible column used in a query, unnecessary indexes waste space and waste time for MySQL to determine which indexes to use. Indexes also add to the cost of inserts, updates, and deletes because each index must be updated. You must find the right balance to achieve fast queries using the optimal set of indexes.

使用索引的主意事项：

主键一定要选择自增。由于 B+ 树的特性，非递增的主键会造成在插入数据时树节点的调整，影响效率。

当表数据较少时，根据实际情况决定是否创建索引。因为即使有索引，查询时 MySQL 查询优化器也有可能放弃使用该索引。

选择区分度高的字段。区分度是指该索引不重复值与总数的比值 count(distinct 列名)/count(*)。

业务上唯一的字段，或者联合字段，创建唯一索引保证其唯一性。（靠代码层面不一定能 100% 保证唯一）。

对于 varchar 类型字段上建立索引时，指定索引长度使用前缀索引。可以使用 count(distinct left(列名, 索引长度))/count(*) 来确定区分度。

当查询语句的 where 条件或 group by、order by 含多列时，可根据实际情况优先考虑联合索引，这样可以减少单列索引的个数，有助于高效查询。

当查询条件中存在等号和非等号时，应该将等号条件放在前面。

**如果 where a=? and b=?，如果 a 列的几乎接近于唯一值，那么只需要建立单列索引 idx_a 即可**

创建联合索引时，需满足最左匹配原则。区分度最高的字段建议放左边。

范围查询无法完全利用索引。例如 a > 100 order by b，即使有 a_b 联合索引，也只能利用索引 a 部分。

order by 和 group by 时要使用索引，否则就会严重影响查询效率。

大表分页优化：先取出目标数据的主键 id 字段，再以此关联获取源数据。

```sql
select * from t (select id from t where xxx limit 100000, 20) as tmp where t.id = tmp.id;
```

或者

```sql
select * from t inner join (select id from t where xxx limit 100000, 20) as tmp on t.id = tmp.id;
```

多表 join 时，关联字段的数据类型必须一致，必须有索引。

查询时尽量避免 select *，而是仅选择需要的字段，尽量利用覆盖索引，避免回表增加 I/O 消耗。

小表驱动大表原则：使用 in 和 exists 时，总是用小的数据表去驱动大的数据表

- 当 a 表的数据集大于 b 表时，in 优于 exists

```sql
select * from a where id in (select id from b)
```

- 当 a 表的数据集小于 b 表时， exists 优于 in

```sql
select * from a where exists (select 1 from b where a.id = b.id)
```

like 模糊匹配使用左前缀，不能使用左模糊或全模糊。

## 阿里开发手册之 MySQL 编程规范借鉴

:::tip
站在巨人的肩膀上，你会少走很多弯路。--鲁迅
:::

### 建表规约

表名，字段名必须使用全**小写**字母，下划线，数字。禁止出现数字开头，禁止两个下划线中间中出现数字。

表名使用单数形式。

字段名不能使用 MySQL 保留字。如 asc, desc, match 等。

主键索引名为 pk_字段名;唯一索引名为 uk_字段名;普通索引名则为 idx_字段名。

数据库字段修改的代价很大，无法进行预发布，所以建表时需认真对待，慎重考虑。

表达是否或者开关等概念的字段，必须使用 `is_xxx` 的命名方式。数据类型使用 unsigned tinyint(1)。

比如软删除字段: `is_deleted` 1 表示删除（正向，肯定）；2 表示未删除（负向，否定）。

小数使用 decimal

  - float 和 double 类型的列，在做计算时，可能丢失精度，而 decimal 会精确计算。
  - float 和 double 在设置超过定义长度的数值时，会自动四舍五入，decimal会截断，并给出一条警告。

如果存储的字符串长度几乎相等，使用 char 定长字符串类型。

varchar 是可变长字符串，不预先分配存储空间，长度不要超过 5000，如果存储长 度大于此值，定义字段类型为 text，独立出来一张表，用主键来对应，避免影响其它字段索 引效率。

MySQL5.0 以上版本，varchar 最大可以存储 65535 字节数据（其中1-2个字节存储长度信息，还有 null 标志位）。此外，还受到行大小的限制，行长度不能超过 65535 字节。

在 UTF-8 编码下，一个汉字占 3 个字节，那么最大字符数不能超过 21845.

表定义中的 varchar(10) 表示的是 10 个字符，而不是字节数。

通用字段：

- id: 类型为 bigint unsigned，自增，步长 1
- ~~gmt_create~~
- ~~gmt_modified~~
- is_deleted

个人觉得创建时间和更新时间还是 created_at 和 updated_at 更好些，简单易理解。

表名命名采用 “业务名称+表的作用”形式。如 alipay_task。

库名与应用名称尽量一致。

如果更新表字段含义或对状态字段追加枚举值时，需要更新字段注释。

字段允许适当冗余，以提高查询性能，但必须考虑数据一致性，冗余字段应遵循：

- 不是频繁修改的字段。
- 不能是 varchar 超长字段，更不能是 text 类型字段。正例： 商品类目名称使用频率高，字段长度短，名称基本一成不变，可在相关联的表中冗余存储类目名称，避免关联查询。

单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。

合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。例如年龄字段或者状态枚举字段，在明确知道其范围的情况下，完全可以限定其类型长度。

### 索引规约

业务上具有唯一性的字段，即使是多字段的组合，也必须建成唯一索引。

  - 说明：唯一索引是保证业务数据唯一性的强有力保障，单纯靠应用层代码控制，很难做到 100% 唯一性。虽然索引会影响 insert 速度，但几乎可以忽略，它提高查询的速度更明显。

禁止超过 3 个表 join，需要 join 关联的字段，数据类型必须一致，必须有索引。

对 varchar 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度。

对于blob,text,varchar的列必须使用前缀索引。

禁止左模糊或全模糊匹配。如果有需要，请走搜索引擎解决。

  - 说明：索引文件具有 B-Tree 的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引。

如果有 order by 的场景，注意索引的有序性，避免出现 file sort 的情况影响查询性能。

  - 说明：where a=? and b=? order by c; 可以用到索引 a_b_c。如果索引中有范围查找，那么索引有序性无法利用，









<Vssue />
