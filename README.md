1.配色自定义
2.layout 布局 配合动态路由 后期易于布局切换

3.配置格式化问题
package.json，里面应该有 配置属性 type: module 于是 .js 被默认为使用了 ES module 规范，如果自动生成的配置文件使用了 CommonJS，就会出错。.cjs 的 js 会告诉 node.js 它使用了 CommonJS 规范，所以就不会出错。
