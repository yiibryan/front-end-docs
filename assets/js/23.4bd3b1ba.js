(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{182:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("在单行代码块中使用空格")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("当命名变量时，主流分为驼峰式命名（variableName）和下划线命名（variable_name）两大阵营。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("在 ECMAScript5 里面，对象字面量中的拖尾逗号是合法的，但在 IE8（非 IE8 文档模式）下，当出现拖尾逗号，则会抛出错误。")]),t._v(" "),a("p",[t._v("拖尾逗号的例子：")]),t._v(" "),t._m(14),a("p",[t._v("拖尾逗号的好处是，简化了对象和数组添加或删除元素，我们只需要修改新增的行即可，并不会增加差异化的代码行数。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),a("p",[t._v("逗号分隔列表时，在 JavaScript 中主要有两种逗号风格：")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("团队约定在对象的计算属性内，禁止使用空格")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),a("p",[t._v("为了避免语法错误，团队约定在函数调用时，禁止使用空格")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),a("p",[t._v("团队约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格")]),t._v(" "),t._m(49),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._m(57),t._v(" "),t._m(58),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),t._m(62),t._m(63),t._v(" "),t._m(64),t._m(65),t._v(" "),a("p",[t._v("链式调用如果放在同一行，往往会造成代码的可读性差，但有些时候，短的链式调用并不会影响美观。所以本规范约定一行最多只能有四个链式调用，超过就要求换行。")]),t._v(" "),t._m(66),t._v(" "),a("p",[t._v("空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。团队约定最大连续空行数为 2")]),t._v(" "),t._m(67),t._v(" "),t._m(68),t._m(69),t._v(" "),t._m(70),t._m(71),t._v(" "),a("p",[t._v("链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值")]),t._v(" "),t._m(72),t._v(" "),t._m(73),t._m(74),t._v(" "),t._m(75),t._m(76),t._v(" "),a("p",[t._v("JavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量")]),t._v(" "),t._m(77),t._v(" "),t._m(78),t._m(79),t._v(" "),t._m(80),t._m(81),t._v(" "),a("p",[t._v("JavaScript 在所有类 C 语言中是比较独特的，它不需要在每个语句的末尾有分号。在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。此特征被称为 自动分号插入 (ASI)，被认为是 JavaScript 中较为有争议的特征。")]),t._v(" "),a("p",[t._v("团队中对于是否应该使用分号，也有许多争论，本规范推荐不使用分号，因为我们认为好的工程师应该知道什么时候该加，什么时候不该加。")]),t._v(" "),a("p",[t._v("相关参考 ："),a("a",{attrs:{href:"http://eslint.org/docs/rules/semi",target:"_blank",rel:"noopener noreferrer"}},[t._v("semi"),a("OutboundLink")],1)]),t._v(" "),t._m(82),t._v(" "),a("p",[t._v("一致性是任何风格指南的重要组成部分。虽然在哪里放置块的开括号纯属个人偏好，但在整个项目中应该保持一致。不一致的风格将会分散读者阅读代码的注意力。")]),t._v(" "),t._m(83),t._v(" "),t._m(84),t._v(" "),t._m(85),t._m(86),t._v(" "),t._m(87),t._m(88),t._v(" "),a("p",[t._v("当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数要求函数名和 function 关键字之间有空格，但是匿名函数要求不加空格。")]),t._v(" "),t._m(89),t._v(" "),t._m(90),t._v(" "),t._m(91),t._m(92),t._v(" "),t._m(93),t._m(94),t._v(" "),a("p",[t._v("团队约定操作符前后都需要添加空格")]),t._v(" "),t._m(95),t._v(" "),t._m(96),t._m(97),t._v(" "),t._m(98),t._m(99),t._v(" "),a("p",[t._v("Unicode 字节顺序标记 (BOM) 用来指定代码单元是高字节序还是低字节序。也就是说，是高位在前还是低位在前。UTF-8 不需要 BOM 来表明字节顺序，因为单个字节并不影响字节顺序。")]),t._v(" "),a("p",[t._v("相信不少同学遇到过 BOM 的坑，这里不多说了，切记不要使用 windows 的记事本改代码！")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"代码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"编码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编码规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 编码规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("统一团队的编码规范，有助于代码的维护。本章是传统意义上的 "),s("code",[this._v("Style Guideline")]),this._v("，目的是统一一些相对主观化的代码风格。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"单行代码块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单行代码块","aria-hidden":"true"}},[this._v("#")]),this._v(" 单行代码块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"大括号风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大括号风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 大括号风格")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[a("strong",[t._v("One True Brace Style")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("baz")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Stroustrup")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("baz")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Allman")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("bar")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("baz")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们团队约定使用 "),s("code",[this._v("One True Brace Style")]),this._v(" 风格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"变量命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量命名","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量命名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("团队约定使用驼峰式命名")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"拖尾逗号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拖尾逗号","aria-hidden":"true"}},[this._v("#")]),this._v(" 拖尾逗号")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'22'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("因为拖尾逗号有好也有不好，所以团队约定允许在最后一个元素或属性与闭括号 "),s("code",[this._v("]")]),this._v(" 或 "),s("code",[this._v("}")]),this._v(" 在不同行时，可以（但不要求）使用拖尾逗号。当在同一行时，禁止使用拖尾逗号。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"逗号空格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逗号空格","aria-hidden":"true"}},[this._v("#")]),this._v(" 逗号空格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"逗号风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逗号风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 逗号风格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("标准风格，逗号放置在当前行的末尾")]),this._v(" "),s("li",[this._v("逗号前置风格，逗号放置在下一行的开始位置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("团队约定使用标准风格")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nbar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'name'")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'age'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'name'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v("'age'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"计算属性的空格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#计算属性的空格","aria-hidden":"true"}},[this._v("#")]),this._v(" 计算属性的空格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("obj"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nobj"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("obj"),s("span",{attrs:{class:"token punctuation"}},[this._v("[")]),s("span",{attrs:{class:"token string"}},[this._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"拖尾换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拖尾换行","aria-hidden":"true"}},[this._v("#")]),this._v(" 拖尾换行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在非空文件中，存在拖尾换行是一个常见的 "),s("code",[this._v("UNIX")]),this._v(" 风格，它的好处是可以方便在串联和追加文件时不会打断 "),s("code",[this._v("Shell")]),this._v(" 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 此处是新的一行")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("可以通过 .editorconfig 添加 EOL")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数调用","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数调用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("fn")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("fn")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("fn")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"缩进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缩进","aria-hidden":"true"}},[this._v("#")]),this._v(" 缩进")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("代码保持一致的缩进，是作为工程师的职业素养。但缩进用两个空格，还是四个空格，是用 "),s("code",[this._v("Tab")]),this._v(" 还是空格呢？这样的争论太多了，也得不出答案。本规范结合了市面上优秀的开源项目，姑且约定使用 "),s("code",[this._v("空格")]),this._v(" 来缩进，而且缩进使用两个空格。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("那是不是不能使用 "),s("code",[this._v("Tab")]),this._v(" 进行缩进了？我们可以通过配置 "),s("code",[this._v(".editorconfig")]),this._v(" ，将 "),s("code",[this._v("Tab")]),this._v(" 自动转换为空格。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"对象字面量的键值缩进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量的键值缩进","aria-hidden":"true"}},[this._v("#")]),this._v(" 对象字面量的键值缩进")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'haha'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'haha'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"构造函数首字母大写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数首字母大写","aria-hidden":"true"}},[this._v("#")]),this._v(" 构造函数首字母大写")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 JavaScript 中 "),s("code",[this._v("new")]),this._v(" 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 "),s("code",[this._v("new")]),this._v(" 来调用。所以我们团队约定构造函数的首字母要大小，以此来区分构造函数和普通函数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fooItem "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fooItem "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"构造函数的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造函数的参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 构造函数的参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 JavaScript 中，通过 "),s("code",[this._v("new")]),this._v(" 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以团队约定使用圆括号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Person")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"链式调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链式调用","aria-hidden":"true"}},[this._v("#")]),this._v(" 链式调用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"空行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空行","aria-hidden":"true"}},[this._v("#")]),this._v(" 空行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"链式赋值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链式赋值","aria-hidden":"true"}},[this._v("#")]),this._v(" 链式赋值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"变量声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量声明","aria-hidden":"true"}},[this._v("#")]),this._v(" 变量声明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("var")]),this._v(" a"),s("span",{attrs:{class:"token punctuation"}},[this._v(",")]),this._v(" b"),s("span",{attrs:{class:"token punctuation"}},[this._v(",")]),this._v(" c\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("var")]),this._v(" a\n"),s("span",{attrs:{class:"token keyword"}},[this._v("var")]),this._v(" b\n"),s("span",{attrs:{class:"token keyword"}},[this._v("var")]),this._v(" c\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"分号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分号","aria-hidden":"true"}},[this._v("#")]),this._v(" 分号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码块空格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块空格","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码块空格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("团队约定代码块前要添加空格")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("b")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("a")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("b")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("a")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"函数声明的空格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数声明的空格","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数声明的空格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("团队约定函数括号前要加空格")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"操作符的空格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作符的空格","aria-hidden":"true"}},[this._v("#")]),this._v(" 操作符的空格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("不推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("推荐")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"bom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom","aria-hidden":"true"}},[this._v("#")]),this._v(" BOM")])}],!1,null,null,null);e.options.__file="code.md";s.default=e.exports}}]);