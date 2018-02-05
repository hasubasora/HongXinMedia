$(function () {
    // var rnumber = Math.floor(Math.random()*1000);
    var rnumber = new Date().getTime();
    var n = 360 % 60; //秒
    var t = Math.floor(360 / 60); //分
    $('.wx_timeout_h').text(t);
    $('.wx_timeout_s').text(fullZero(n, 2))
    console.log(n + '秒')
    console.log(t + '分')

    timer(n, t)
    //微信内部刷新需要重新跳页面
    $('.reload').on('click', function (params) {
        // if(isWeiXin()){
        //     window.location.href = window.location.href+'?'+rnumber;
        // }else{
        location.reload();
        // }
    })


})

function timer(n, t) {
    var setTime = setTimeout(() => {
        if (t != 0&&n == 0) {
        console.log('n')
            n = 60;
            t -= 1;
            $('.wx_timeout_h').text(t)
        }
        n -= 1;
        
        console.log(n)
        if (n >= 0) {
            $('.wx_timeout_s').text(fullZero(n, 2))
        }
        if (t == 0) {
            if (n == 0) {
                $('.wx_mb').show()
                return;
            }
        }
       
        timer(n, t);
    }, 1000);
}

function fullZero(time, n) { //(3s ,不能少于2位)
    var ste = "" + time; //变成字符串
    while (ste.length < n) {
        ste = "0" + ste;
    }
    return ste;
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}