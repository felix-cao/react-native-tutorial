# Git 及 Github 使用简介

## 一、Git 的安装及配置

```
brew install git
```

**配置 GIT 用户**

```
git config --global user.name 'Felix Cao'
git config --global user.email 'czf2008700@163.com'
```

**查看配置**

```
git config --list 
git config --list --global
```



## 二、在 Github 上创建一个自己的仓库

Github.com 点击右上角加号  ->  点击 New repositroy 

## 三、向远程仓库中添加我的代码

### 3.1 添加 SSH key 到 github 上

```
ssh-keygen -t rsa -C "czf2008700@163.com"
```

### 3.2 git init 初始化 仓库

​          熟练使用 git status 

### 3.3 Push 到远程仓库的三步走

- git add

  ```
  git add * 
  git add .
  ```

- git commit -m 'init the repo'
- git push <远程仓库名> 本地版本库分支：远程版本库分支
  - 查看远程仓库 git remote
  - 添加远程仓库 git remote add <远程仓库名称>



### 3.4 git clone

```
git clone git@github.com:felix-cao/react-native-tutorial.git
```



## 获取帮助

- 曹宗飞(Felix Cao)
- 服务QQ: 47572020（草上飞，备注RN课程）
- QQ群: 645656358（EBRN, Expo-Based React Native）