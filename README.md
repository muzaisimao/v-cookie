
## v-cookie

一个用于操作cookie的Vue插件,使用简单,无依赖

如果使用中遇到问题请联系: muzaisimao@163.com

## 安装

```bash
npm i v-cookie -S
```

## 使用

```js
import Vue from 'vue'

// 导入插件
import VCookie from 'v-cookie'

// 使用插件
Vue.use(VCookie);

```

## 简单示例

```js

// 设置一个时效为8小时的cookie
this.$cookie.set('userID','xxx123',8)

// 获取一个cookie
let userID = this.$cookie.get('userID')

// 删除一个cookie
this.$cookie.del('userID')

// 设置一个自定义域名的cookie 
//设置cookie时加了域名和路径，删除时也要加上一模一样的，否则无法删除
this.$cookie.set('user','jack',48,'.baidu.com','/')

//删除这个域名
this.$cookie.del('user','.baidu.com','/')

```

## 方法

**1. 设置cookie**

```js
/**
 * set cookie
 * @param {string} cname cookie名
 * @param {string} cvalue cookie值
 * @param {number} ctime 过期时间(单位:小时)默认值1天
 * @param {string} domain 域名 (默认为当前的域名)
 * @param {string} path   路径 (默认为 / )
 * 
 */

  VCookie.set(cname,cvalue,ctime,domain,path)
```

**2. 获取cookie**

```js
    /**
     * get cookie
     * @param {string} cname 要获取的coolie名
     * @returns {string || null} 返回找到的cookie值,如果找不到,返回null
     */

    VCookie.get(cname)
```

**3. 删除cookie**

```js
    /**
     * del cookie
     * @param {string} cname 要删除的cookie名
     * @param {string} domain 要删除cookie的域名
     * @param {string} path 要删除cookie的路径
     * 
     * ! tips: 设置域名是如果没有传域名和路径，删除时可以不传。 设置时传了，删除时就要传一模一样的，否则无法删除
     */

    VCookie.del(cname,domain,path)
```

## 作者

```json

{
    "Nickname" : "木仔四毛",
    "Emial" : "muzaisimao@163.com",
    "Github" : "https://github.com/muzaisimao"
}

```
