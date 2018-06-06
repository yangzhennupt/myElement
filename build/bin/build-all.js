'use strict';

const components = require('../../components.json');
const execSync = require('child_process').execSync; // 创建同步进程，阻塞Node.js的事件循环
const existsSync = require('fs').existsSync;
const path = require('path');

let componentPaths = [];

delete components.index;
delete components.font;

Object.keys(components).forEach(key => {
  const filePath = path.join(__dirname, `../../packages/${key}/cooking.conf.js`);

  if (existsSync(filePath)) {
    componentPaths.push(`packages/${key}/cooking.conf.js`);
  }
});
/**
 * cooking 是一个基于 webpack 但是提供更简单的配置项，同时内置了许多常用配置的构建工具。同时搭配

  命令行工具可以将常用开发环境的依赖 (devDependencies) 安装全局，并且提供的脚手架功能能快速搭建

 基于 Vue 或 React 的项目。
 node_modules/.bin/cooking build

 部分组件才有，组件可单独打包无依赖？ 直接可以npm i element-componentName 安装
 */
const paths = componentPaths.join(',');
const cli = path.join('node_modules', '.bin', 'cooking') + ` build -c ${paths} -p`;

execSync(cli, {
  stdio: 'inherit'
});
