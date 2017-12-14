$(function(){
    $.ajax({
        type: "POST",
        url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
        data: {
            name: "John",
            location: "Boston"
        },
        dataType: 'json', 
    }).done(function (data) { //success
        console.info(data);
        timeout();
    }).fail(function (data) { //error
        console.info(data);
    });
    //微信内部刷新需要重新跳页面
    $('.reload').on('click',function (params) {
        if(isWeiXin()){
            window.location.href='';
        }
       
    })
})

function timeout() {
    setTimeout(() => {
        $('.wx_mb').show();
    }, 99999);
}

function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}









