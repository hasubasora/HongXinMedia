'use strict';

window.onload = function () {
    //hongbao weizhi
    var s_h = window.screen.height / 2;
    var list_h = window.screen.height;
    $('.redBox-m').css({
        marginTop: s_h - 70
    });
    // document.querySelector('.CanPlayCountText').style.transform = "translateY(" + (list_h - 150) + "px)"
    if (localStorage.onload == "true") {
        $('.openAminates').addClass('none');
        $('.openAminates').remove();
        $('.loginBox').load('/Views/Game/login.html');
        console.info('已经存在用户1');
        addStart();
    }
    $.each($('.openAminatesList>li'), function (i, n) {
        //初始化界面导航
        if (localStorage.onload != "true") {
            $('.openAminates').removeClass('none');
            if ($(this).hasClass('GoToPlay')) {
                localStorage.onload = "true";
                // hrefs('.GoToPlay', "/Game/Home"); //抽完红包跳转到游戏界面
                return false;
            } else {
                var bid = $("#Bid").val();
                n.addEventListener('touchstart', function () {
                    n.classList.add('none');
                    if ($('.openAminatesList>li').size() - 1 == i) {
                        // 这里导入登陆页面login.html
                        $('.loginBox').load('/Views/Game/login.html');
                        addStart();
                        localStorage.onload = "true";
                        $('.openAminates').addClass('none');
                        // $('.openAminates').remove();
                        hrefs('.GoToPlay', "/Game/Home"); //抽完红包跳转到游戏界面
                    }
                });
            }
            //已经初始化过了
        }
    });
    //判断登陆的 复制过来
    /*
     * 底部菜单控制
     */
    document.querySelectorAll(".menu-li").forEach(function (x) {
        x.addEventListener("click", function (e) {
            console.log($("#IsRegister").val());
            if ($("#IsRegister").val() == "False") {
                $('.loginBox').removeClass('scale');
                $('.loginBox').removeAttr('style');
                e.stopPropagation();
            } else {
                var key = x.getAttribute("data-key");
                location.href = "/Game/" + key;
            }
        }, false);
    });

    function addStart() {
        //阻止默认事件
        $('body').on('touchmove', function (e) {
            e.preventDefault();
        });
        //新手教程
        $('.q_a').on('click', function () {
            localStorage.removeItem('onload');
            location.reload();
        });
        if ($("#IsRegister").val() == 'False') {
            console.log($("#IsRegister").val());
            $('body').on('touchstart', function (e) {
                e.stopPropagation();
                $('.loginBox').removeClass('scale');
                $('.loginBox').removeAttr('style');
            });
        } else {
            //跳转红包
            hrefs('.new_money', "/Game/lotteries"); //红包活动
            hrefs('.mock_trading', ""); //模拟交易
            hrefs('.billboard', "/game/Ranking"); //排行榜
            hrefs('.home_footer', "/Game/Start"); //开始竞猜
            hrefs('.m_pay', "/Game/Start"); //开始竞猜
            hrefs('.m_play', "/Views/Game/appdownload.html"); //充值
            hrefs('.home_wx_draw_money', "/Views/Game/appdownload.html"); //微信提款
            hrefs('#playBtn', "/Views/Game/strategy.html"); //抽奖攻略
        }
    }
};

function hrefs(id, url) {
    $(id).on('click', function () {
        window.location.href = url;
    });
}