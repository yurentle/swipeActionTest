本 demo 旨在复现 taro-ui 的组件 SwipeAction 在手机端会导致页面无法滚动的[问题](https://github.com/NervJS/taro-ui/issues/1722)，电脑浏览器没有问题。手机浏览器，微信浏览器都有问题。

出现问题的手机型号有：mate20pro（鸿蒙2.0.0）、一加 Ace 竞速版（ColorOS 13.1）

复现视频在项目的 screenShots 目录下（mate20pro）

### 项目依赖的部分说明
```
@tarojs/cli: 3.6.19

nodejs: v16.20.2
```

### 安装
```
yarn install
```

### 启动
```
yarn dev:h5
```
