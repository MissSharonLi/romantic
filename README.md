# romantic
浪漫一番 uniapp小程序

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

hbuild 导入项目 - 运行 - 运行到小程序模拟器 - 微信开发者工具


### Compiles and minifies for production

微信开发者工具 - 上传代码至微信开发者后台 - 提交审核 - 发布上线


### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## git 提交代码

本项目配置了 gitHook 与 git 规范，所以在执行执行 commit 的时候，执行`git cz`

如果执行`git cz`不成功的话，需要全局安装 cz-customizable、cz-conventional-changelog、commitizen

`npm i cz-customizable cz-conventional-changelog commitizen -g`

```sh

# 错误做法
git commit -m "xxx"

# 正确做法
git cz
```

