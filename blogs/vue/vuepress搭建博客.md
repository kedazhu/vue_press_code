---
title: vuepress搭建博客
date: 2022-12-29
tags:
 - vue
 - vue_press
categories:
 - 技术随笔
 -  vue
sticky: 1
---

::: tip 介绍
如何使用vuepress搭建博客<br>
:::

<!-- more -->


## 突发奇想

我一直都想拥有有一个自己的博客，来帮助自己记录学习的过程以及学习的笔记，可奈何技术不够一直没有去实现。前几天因为疫情居家，自己学了一点前端vue的知识，然后在了解与其相关知识的时候发现了vue-press这个框架，这个框架可以快速的搭建博客页面。我就马上过了一遍vue的知识，就来尝试搭建自己的博客。

## 博客说明

 使用vue-press搭建需要配置大量的参数这是一件非常痛苦的事情，so我尝试去找别人配置，再寻找的过程中，发现了vuepress-theme-reco这个主题框架它是根据vue-press二次封装的框架，下载使用指定命令就可以立即搭建，但是使用vuepress-theme-recos搭建出来的页面是一个官方提供的页面并没有特别华丽，也没有达到我想要的私人定制的感觉。
![官网图片](https://kedazhu.github.io/mkimage/20221229/gw.png)

但是要我从头开始去改页面样式我觉对我来说还是太艰巨了（懒）。于是我就去了vue-theme-recos的官网，在[案列](https://vuepress-theme-reco.recoluan.com/views/other/theme-example.html "案列")查看那些大佬自己改动的样式。然后就发现了[zealsay](https://www.zealsay.com/)这位大佬，他所改动的页面样式很符合我的胃口，于是我去瞄了一眼他的内容，好巧不巧大佬把自己博客的内容全部开源了，so我就直接git clone 拉下来，在上面进行修改了。
![网络图片地址](https://kedazhu.github.io/mkimage/20221229/dl.png)


## 建立博客

首先需要安装nodejs（VuePress的使用依赖Node.js>=8.6的版本），再使用nodejs去安装[vue](https://cn.vuejs.org/)与[vue-press](http://caibaojian.com/vuepress/)这里就不多介绍直接去官网查看，当然也可以百度。

1.拉取[zealsay](https://www.zealsay.com/)大佬代码
```
git clone https://gitee.com/GodLikeZeal/vuepress_blog.git
```
2.进入到.vuepress目录下运行dev

```
 # 进入到.vuepress目录
 cd .vuepress

 #安装依赖
 yarn install  # or npm install
 
 # 运行项目
 yarn run dev # or npm run dev
```
3.打开浏览器 localhost:8080就能访问了
![我的图片](https://kedazhu.github.io/mkimage/20221229/wd.png)



### 目录结构

如需自定义开发请安照以下目录结构进行修改
```
.
├── vuepress_blog
│   ├── .vuepress 
│   │   ├── components 
│   │   ├── theme 
│   │   │   └── Layout.vue
│   │   ├── public 
│   │   ├── styles 
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates 
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (重要)
│   │   └── enhanceApp.js 
│   │ 
│   ├── README.md
│   ├── blogs
│   │   └── README.md
│ 
└── package.json
```
然后就是一些简单的配置这边可以直接取去大佬[写的博客](https://www.zealsay.com/blogs/tec/2020/20201223.html)上去看。



### 我的改动
```
我就自己定义了一些图片，添加了一些音乐，动态图的插件(踩了一堆坑)，以后有空再介绍。如果你有前端基础，也可尝试搭建一套属于自己的静态博客，bye！
```