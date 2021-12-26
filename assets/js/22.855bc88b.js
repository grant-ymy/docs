(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{267:function(s,t,a){"use strict";a.r(t);var r=a(5),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"存储引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[s._v("#")]),s._v(" 存储引擎")]),s._v(" "),a("p",[s._v("MySQL 支持多种存储引擎，一般常用到的是 InnoDB、MyISAM。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" engines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--------------------+---------+----------------------------------------------------------------+--------------+------+------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Engine")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Support "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Comment")]),s._v("                                                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Transactions")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" XA   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Savepoints "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--------------------+---------+----------------------------------------------------------------+--------------+------+------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("InnoDB")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Supports "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transactions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" locking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("foreign")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("keys")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" MRG_MYISAM         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Collection "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" identical MyISAM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" MEMORY             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Hash")]),s._v(" based"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stored "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" memory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useful "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("temporary")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" BLACKHOLE          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("anything you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("write")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" it disappears"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" MyISAM             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" MyISAM storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v("                                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CSV                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" CSV storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v("                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ARCHIVE            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Archive storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v("                                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PERFORMANCE_SCHEMA "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Performance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Schema")]),s._v("                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" FEDERATED          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("NO")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Federated MySQL storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),s._v("                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--------------------+---------+----------------------------------------------------------------+--------------+------+------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("本地测试环境版本为 5.7.26")])]),s._v(" "),a("p",[s._v("可以看到默认的存储引擎是 InnoDB，它的主要特点是支持事物、行锁、外键，默认的事务隔离级别为repeatable-read（可重复读），采用 MVCC（Multiversion Concurrency Control，多版本并发控制），可以支持更高的并发。一般不使用它的外键，因为增加了表之间的耦合度，而是通过业务代码做关联。采用 InnoDB 引擎的表，其数据存储结构为聚簇表，所有的数据按照主键来阻止，数据和索引放在一块，都位于 B+ 树的叶子节点上。")]),s._v(" "),a("p",[s._v("MyISAM 存储引擎不支持事物，但其读写速度要好于 InnoDB。支持表级锁，写操作并发较低。使用非聚簇索引，索引文件和数据文件分别存储。")]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);t.default=e.exports}}]);