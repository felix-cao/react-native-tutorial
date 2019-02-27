# JavaScript 基础 Promise

## 一、Promise 概述
`Promise` 是 `ES6` 提供的一种新的异步编程解决方案，完全改变了 `JavaScript` 异步编程的写法，让异步编程变得简洁优雅自然可读！

## 二、Promise 状态及状态改变
三种状态：
- `pending`
- `resolved`(又称 `fullFilled`)
- `rejected`

两种状态变化：
- `pending` -> `resolved`
- `pending` -> `rejected`

## 三、使用 Promise 的流程

```js
const getRequest = function(url) {
  return new Promise(function(resolve, reject) {
	
    const handler = function() {
      if(this.readyState !== 4) {
        return;
      }

      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }

    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.onreadystatechange = handler;
    client.send();
  })
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
getRequest(url);
```



### 3.2、Promise.prototype.then()

```js
getRequest(url).then(function(res) {
  console.log('contents:', res)
 },
 function(err) {
  console.log('error:', err)
 }
);
```



### 3.3、Promise.prototype.catch()

```js
getRequest(url).then(function(res) {
  console.log('contents:', res)
}).catch(function(err) {
  console.log('err:', err)
});
```





## 联系我

- 曹宗飞(Felix Cao)
- 服务QQ: 47572020（草上飞，备注RN课程）
- QQ群: 645656358（EBRN, Expo-Based React Native）