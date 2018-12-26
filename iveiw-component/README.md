# template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### webpack4 配置文件
```
vue.config.js
```

目录
```
├── src
│  ├─assets
│  │  ├─ajax  封装的Vue请求
│  │  ├─api   请求后台接口 通过promise方式返回
│  │  ├─config   项目配置相关
│  │  ├─css  公共样式处理
│  │  ├─images  图片位置
│  │  ├─interceptors   路由请求链接处理
│  │  └─js   静态js、公共js处理
│  │
│  ├─components    公共基础组件  
│  │  └─lang   语言组件
│  │
│  ├─iview  按需引入iview
│  │  ├─index 组件的封装
│  │  └─theme.less 消息核心类库
│  │
│  ├─locale
│  │  ├─lang 各种语言文件处理，跟iveiw国际级文件命名保持一致
│  │  ├─index 语言类型封装
│  │  └─languages 支持的语言
│  │
│  ├─router
│  │  └─modules 子模块的封装，内部写各个子模块
│  │  └─index  路由模块封装
│  │
│  ├─store
│  │  └─modules子模块的封装，内部写各个子模块
│  │  └─index  模块封装
│  │
│  └─views
│  │   └─a  a业务层  router、store安装这种方式处理
│  │   └─a  a业务层  router、store安装这种方式处理
│  │
│  ├─APP 挂载页面
│  │
│  ├─main  webpack加载页面
```
