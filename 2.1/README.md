# Mac 系统下的开发环境搭建

## 1、安装模拟器
  - iOS， Xcode 自带 iOS 模拟器
  - Android 模拟器
    - Android Studio 自带的 AVD, AVD = Android Virtual Device
    - 夜神模拟器, https://www.yeshen.com/, 国内的。
## 2、 安装 Nodejs
  - 安装 nvm, https://github.com/creationix/nvm
 ```bash
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
 ```
  - 使用 nvm 安装 node
  Nodejs 会自带 npm 包管理器

  ```
  nvm install node
  ```

  
## 3、安装 Expo 命令行工具
```bash
npm install -g expo-cli
```
## 4、初始化项目
```bash  
expo init just-eat
```
选 blank.
## 5、进入项目，打开 Dev Tools, 开发者工具
```bash
cd just-eat
npm start
```

若使用 yarn, https://yarnpkg.com/lang/en/

```
brew install yarn
```


## 需要帮助

- 曹宗飞(Felix Cao)
- 服务QQ: 47572020（草上飞，备注RN课程）
- QQ群: 645656358（EBRN, Expo-Based React Native）