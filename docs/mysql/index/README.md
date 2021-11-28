# 索引优化

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



<Vssue />
