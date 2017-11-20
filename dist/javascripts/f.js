"use strict";

var capital = {
    init: function init() {
        ranking.tabs(".sub", ".lately", 'active');
        // var url = "http://rapapi.org/mockjsdata/28289/FunUser/UserBalanceLog"
        var url = "http://192.168.168.46/FunUser/UserBalanceLog";
        $.ajax({
            type: "POST",
            url: url,
            data: {
                'bid': 2,
                'type': 1
            },
            dataType: "json",
            success: function success(data) {
                console.info(data.DrawItems); //提款
                console.info(data.RechargeItems); //充值
                console.info(data.RechargeTotal); //提款
                console.info(data.TotalItems); //汇总
                console.info(data.WithdrawalsTotal); //提款
                console.info(data); //提款
            }
        });
    },
    list: function list(TotalItems) {
        var list = "<div class=\"payUp\"><div class=\"dates\">" + Date + "<img src=\"../images/dade.png\" alt=\"\"></div><div class=\"payMsg\"><span>" + Time + "</span><span data-s=" + Typeid + ">" + Type + "</span><span class=\"greens\">-11.22</span></div></div>";
    }
};

var ranking = {
    init: function init() {
        this.tabs(".sub", ".ran_list", 'act');
    },
    tabs: function tabs(c1, c2, c3) {
        var abox = document.querySelectorAll(c1);
        var lately = document.querySelectorAll(c2);

        for (var i = 0; i < abox.length; i++) {
            abox[i].addEventListener('touchstart', function () {
                for (var i = 0; i < abox.length; i++) {
                    abox[i].index = i;
                    abox[i].classList.remove(c3);
                    lately[i].classList.add('none');
                }
                this.classList.add(c3);
                lately[this.index].classList.remove('none');
            });
        }
    }
};

var payMsgs = {
    init: function init() {
        $.each($('.payMsg'), function (i, it) {
            $('.payMsg').eq(i).on('touchstart', function () {
                $('.transaction_detail').eq(i).slideToggle();
                if ($('.rightPic').eq(i).hasClass('transform90')) {
                    $('.rightPic').eq(i).removeClass('transform90');
                } else {
                    $('.rightPic').eq(i).addClass('transform90');
                }
            });
        });
    }
};

//宝箱抽奖
var lotteries = {
    init: function init() {
        var _this = this;
        this.opens(1); //抽奖次数
        $('.lotteryBtn').on('touchstart', function () {
            $('.openBox').removeClass('none');
        });
        $('.close').on('touchstart', function () {
            $('.openBox').addClass('none');
            _this.closes();
        });
    },
    opens: function opens(num) {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).on('touchstart', function () {
                if (num > 0) {
                    $('.boxList li').eq(i).addClass('open');
                } else {
                    alert('您没有抽奖的机会！');
                }
            });
        });
    },
    closes: function closes() {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).removeClass('open');
        });
    }
};

//攻略的功能