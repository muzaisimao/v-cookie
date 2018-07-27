
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

## 示例

```js

// 设置一个失效为8个小时的cookie
this.$cookie.set('userID','xxx123',8)

// 获取一个cookie
let userID = this.$cookie.get('userID')

// 删除一个cookie
this.$cookie.del('userID')

```

## 方法

**1. 设置cookie**

```js
/**
 * set cookie
 * @param {string} cname cookie名
 * @param {string} cvalue cookie值
 * @param {number} ctime 过期时间(单位:小时)默认值1天
 * 
 */

  VCookie.set(cname,cvalue,ctime)
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
     */

    VCookie.del(cname)
```

## 作者

```json

{
    "Nickname" : "木仔四毛",
    "Emial" : "muzaisimao@163.com",
    "Github" : "https://github.com/muzaisimao"
}

```
