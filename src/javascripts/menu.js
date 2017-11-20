class footerflex {
    constructor(a, u) {
        this.home = a,
            this.url = u
    }
    app_menu() {
        var art='';
        console.info(this.home)
        console.info(this.home.t)
        const odiv = document.createElement('menu'); //创建一个菜单
        const oul = document.createElement('ul'); //创建一个菜单
        odiv.className = 'bottom_menu'; //添加class
        oul.className = 'menu'; //添加class
        document.body.appendChild(odiv); //添加到body里面
        odiv.appendChild(oul);
        this.home.forEach(v => {
            art+=`<li class="menu-li" data-key="${v.n}"><i class="iconfont ${v.i}"></i> <p>${v.t}</p></li>`
        })
        oul.innerHTML = art;
    }
    app_url() {
        document.querySelectorAll(".menu-li").forEach((x) => {
            console.info(this.url)
            x.addEventListener("click", (e) => {
                // if ($("#IsRegister").val() == "False") {
                // $('.loginBox').removeClass('scale');
                // $('.loginBox').removeAttr('style');
                // e.stopPropagation()
                // } else {
                var key = x.getAttribute("data-key");
                location.href = `${this.url}${key}`;
                // }

            }, false)

        })
    }
    app_for() {

    }
    init() {
        this.app_menu();
        this.app_url();
        this.app_for();
    }

}



// window.onload = function () {
//     var footerfle = new footerflex([{
//         't': '首页',
//         'n': 'home',
//         'i': 'icon-icon-test'
//     }, {
//         't': '钱包',
//         'n': 'wallet', 
//         'i': 'icon-QIAOBAO'
//     }, {
//         't': '团队',
//         'n': 'team',
//         'i': 'icon-duidui'
//     }, {
//         't': '我的',
//         'n': 'my',        
//         'i': 'icon-wode'
//     }], '/Game/')
//     footerfle.init()
// }