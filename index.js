const $cookie = require('./src/cookie');
const gtCookie = {
    install(Vue){
        Vue.prototype.$cookie = $cookie
    }
}

export default gtCookie;