let $cookie = {
    /**
     * 设置cookie
     * @param {string} cname  cookie名
     * @param {string} cvalue cookie值
     * @param {number} ctime  过期时间 (单位:小时)默认值1天
     * @param {string} domain 域名 (默认为当前的域名)
     * @param {string} path   路径 (默认为 /)
     */
    set(cname, cvalue, ctime = 24, domain = null, path = '/') {
        let data = `${cname}=${cvalue}`;
        let cpath = `path=${path}`;
        let cdomain = `domain=${domain}`;

        let time = new Date();
        time.setTime(time.getTime() + (ctime * 1000 * 60 * 60));
        let expires = `expires=${time.toGMTString()}`

        let cookie = `${data};${expires};${cpath};${domain == null ? '' : cdomain}`
        document.cookie = cookie;
    },
    /**
     * 获取cookie
     * @param {string} cname 要获取的coolie名
     * @returns {string || null} 返回找到的cookie值,如果找不到,返回null
     */
    get(cname) {
        let cookies = document.cookie.split(';');
        let cookieData = {};
        cookies.forEach(v => {
            let arr = v.trim().split('=');
            cookieData[arr[0]] = arr[1];
        });

        let value = cookieData[cname]

        if (value) {
            return value;
        } else {
            return null;
        }
    },
    /**
     * 删除cookie
     * @param {string} cname 要删除的cookie名
     * @param {string} domain 要删除cookie的域名
     * @param {string} path 要删除cookie的路径
     * 
     * ! tips: 设置域名是如果没有传域名和路径，删除时可以不传。 设置时传了，删除时就要传一模一样的，否则无法删除
     */
    del(cname, domain = null, path = '/') {
        let data = `${cname}=''`;
        let expires = 'expires=Thu, 18 Dec 1998 12:00:00 GM';
        let cpath = `path=${path}`;
        let cdomain = `domain=${domain}`;
        let cookie = `${data};${expires};${cpath};${domain == null ? '' : cdomain}`
        document.cookie = cookie;
    }

}


module.exports = $cookie;