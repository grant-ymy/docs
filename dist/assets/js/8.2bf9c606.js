(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{239:function(t,e,s){t.exports=s.p+"assets/img/git-model.f3ecc3cf.png"},240:function(t,e,s){t.exports=s.p+"assets/img/merge-ff.84832910.png"},258:function(t,e,s){"use strict";s.r(e);var a=s(5),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#git-flow"}},[t._v("Git Flow")])]),a("li",[a("a",{attrs:{href:"#git-merge-时-no-ff-参数的作用"}},[t._v("Git merge 时 --no-ff 参数的作用")])]),a("li",[a("a",{attrs:{href:"#在本地忽略已被-git-追踪的文件"}},[t._v("在本地忽略已被 Git 追踪的文件")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"git-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-flow"}},[t._v("#")]),t._v(" Git Flow")]),t._v(" "),a("p",[a("img",{attrs:{src:s(239),alt:""}})]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"}},[t._v("a-successful-git-branching-model"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"git-merge-时-no-ff-参数的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-时-no-ff-参数的作用"}},[t._v("#")]),t._v(" Git merge 时 --no-ff 参数的作用")]),t._v(" "),a("p",[t._v("ff: fast-forward 快进式合并，直接改变指针指向。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("          A---B---C feature\n         /\nD---E---F master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("当我们使用 merge 命令合并两个分支时，如果 Git 判断合并两个分支之间的差异部分可以通过直接移动指针指向实现的话，默认会使用快进式合并。即：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("          A---B---C feature\n         /          master\nD---E---F\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("而使用 --no-ff 表示不希望快进式合并，而是将被合并分支生成一个新的提交，并且保留分支提交变化历史：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("          A---B---C feature\n         /         \\\nD---E---F-----------G master\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("从合并结果看两种方式并无差异。区别是快进式合并会把被合并分支上的提交混入合并分支上，可能会影响提交历史的整洁性，另外对版本回退也有影响。建议使用 --no-ff 参数以保留历史分支信息，而且方便管理被合并分支的提交。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(240),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"在本地忽略已被-git-追踪的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在本地忽略已被-git-追踪的文件"}},[t._v("#")]),t._v(" 在本地忽略已被 Git 追踪的文件")]),t._v(" "),a("p",[t._v("通常情况下我们使用 "),a("code",[t._v(".gitignore")]),t._v(" 文件指定需要被 Git 忽略的文件，但是有时会遇到以下场景：")]),t._v(" "),a("ul",[a("li",[t._v("在多人项目开发时，文件已经被版本控制。")]),t._v(" "),a("li",[t._v("想要忽略某个文件的本地变更并且又不希望提交到远程，例如在应用的配置文件或者代码中加入了方便本地调试的代码。")])]),t._v(" "),a("p",[t._v("在这种情况下可以使用以下命令来阻止改文件的变更被 Git 追踪：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-index --skip-worktree path/to/file\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("使用此方式忽略后，本地仓库中就可以变得非常 clean。当需要恢复时使用 "),a("code",[t._v("--no-skip-worktree")]),t._v(" 即可。")]),t._v(" "),a("p",[t._v("查看工作树中的文件追踪状态：")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-files -v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" ^S\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("ls-files")]),t._v(" 查看文件 Git 追踪状态。 "),a("code",[t._v("-v")]),t._v(" 表示检查包括被忽略的文件。"),a("code",[t._v("--skip-worktree")]),t._v(" 后的文件状态展示为 "),a("code",[t._v("S")]),t._v("。")]),t._v(" "),a("p",[t._v("reference：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/docs/git-update-index",target:"_blank",rel:"noopener noreferrer"}},[t._v("git update-index"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/docs/git-ls-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("git ls-files"),a("OutboundLink")],1)])]),t._v(" "),a("Vssue")],1)}),[],!1,null,null,null);e.default=r.exports}}]);