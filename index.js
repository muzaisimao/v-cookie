const $cookie = require('./src/cookie');
const VCookie = {
    install(Vue){
        Vue.prototype.$cookie = $cookie
    }
}

export default VCookie;