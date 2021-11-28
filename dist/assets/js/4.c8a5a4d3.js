(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(s,t,a){s.exports=a.p+"assets/img/clash.11e0e933.png"},243:function(s,t,a){s.exports=a.p+"assets/img/get-win-ip.1bb4e101.png"},244:function(s,t,a){s.exports=a.p+"assets/img/verify-proxy.9a836327.png"},270:function(s,t,a){"use strict";a.r(t);var e=a(5),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),e("h2",{attrs:{id:"科学冲浪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#科学冲浪"}},[s._v("#")]),s._v(" 科学冲浪")]),s._v(" "),e("p",[s._v("之前一直用 SS + ，感觉很久没有人维护了，自带的转发规则也不是很好用。后来发现了 Clash 这个工具，功能强大，颜值高，支持多平台。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.cfw.lbyczf.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clash"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Dreamacro/clash",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github仓库"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("img",{attrs:{src:a(242),alt:""}})]),s._v(" "),e("p",[s._v("配置 WSL2 终端网络走代理：")]),s._v(" "),e("p",[s._v("WSL2 使用了 Hyper-V 技术，可以理解为子系统相当于与宿主机在同一局域网下的一台独立的主机，它通过一张虚拟的网卡与宿主机进行网络通信，所以与宿主机不共享 localhost。我们的代理通常是运行在 Windows 系统中的，想让子系统也被代理，主要步骤如下：")]),s._v(" "),e("ul",[e("li",[s._v("代理允许局域网内的设备连接（Allow LAN）。")]),s._v(" "),e("li",[s._v("找到 Windows 的 ip。")]),s._v(" "),e("li",[s._v("设置代理")])]),s._v(" "),e("h3",{attrs:{id:"获取主机-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取主机-ip"}},[s._v("#")]),s._v(" 获取主机 ip")]),s._v(" "),e("p",[s._v("WSL2 每次启动时会在 /etc/resolv.con 中生成主机的 ip 作为域名解析。可以通过以下命令获取该地址：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/resolv.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nameserver "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(243),alt:""}})]),s._v(" "),e("h3",{attrs:{id:"设置代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置代理"}},[s._v("#")]),s._v(" 设置代理")]),s._v(" "),e("p",[s._v("在终端中执行：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL_PROXY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://172.19.48.1:7890"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("由于这个 ip 在每次重启后都会变化，所以可以稍作优化，将以下代码加入终端配置(~/.zshrc)中：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clash proxy")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("host_ip")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/resolv.conf "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nameserver"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL_PROXY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://'),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host_ip")]),s._v(':7890"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("这样每次启动终端时就会自动设置代理。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("如果无法连接这个代理 ip，有可能是 Windows 防火墙的问题。")]),s._v(" "),e("p",[s._v("以管理员身份在 PowerShell 中执行以下命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("New-NetFirewallRule -DisplayName "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WSL"')]),s._v(" -Direction Inbound -InterfaceAlias "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vEthernet (WSL)"')]),s._v(" -Action Allow\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://github.com/microsoft/WSL/issues/4585",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),e("OutboundLink")],1)])]),s._v(" "),e("h3",{attrs:{id:"验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),e("p",[s._v("访问谷歌能够返回响应数据即成功。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(244),alt:""}})]),s._v(" "),e("Vssue")],1)}),[],!1,null,null,null);t.default=r.exports}}]);