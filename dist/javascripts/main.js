"use strict";

var capital = {
    init: function init() {
        ranking.tabs(".sub", ".lately", 'active');
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
                $('.transaction_detail').eq(i).toggle(300);
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
'use strict';

var filter = {
    /** 将text中的html字符转义， 仅转义  ', ", <, > 四个字符
     * @param  { String } str 需要转义的字符串
     * @returns { String }     转义后的字符串 
     */
    unhtml: function unhtml(str) {
        return str ? str.replace(/[<">']/g, function (a) {
            return {
                '<': '&lt;',
                '"': '&quot;',
                '>': '&gt;',
                "'": '&#39;'
            }[a];
        }) : '';
    },

    /**
     * 匹配电话号码的正则
     * @param {String} tel 传入的电话号码
     * @param {String} reg 正则
     * @returns {bool} true false
     */
    verificationPhone: function verificationPhone(tel, reg) {
        return tel ? reg || /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(tel) : '';
        // console.log(reg.test(tel))
    },

    /**
     * 去除多余空格
     * @param { String } str 需要去空格的字符串 
     */
    unBlank: function unBlank(str) {
        return str ? str.replace(/\s/ig, '') : '';
    },

    /**
     * 检查输入字符
     * @param char
     * @param reg
     */
    character: function character(char, reg) {
        return char ? reg || /[\{\}\[\]|、\\:;：；‘’\'\"“”\<\>?《》？，。、$*￥#~`!！@\%\^\…\&\*\(\)\_\+\-\=【】]/g.test(char) : '';
    },

    /**
     * 是否为表情包
     * @param {*} substring 
     */
    isEmoji: function isEmoji(substring) {
        for (var i = 0; i < substring.length; i++) {
            var hs = substring.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (substring.length > 1) {
                    var ls = substring.charCodeAt(i + 1);
                    var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (substring.length > 1) {
                var ls = substring.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030 || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b || hs == 0x2b50) {
                    return true;
                }
            }
        }
    },

    /**
     * 倒计时
     * @param {*} codebtn 
     */
    countDown: function countDown(codebtn) {
        var a = 60;
        timer = setInterval(function () {
            if (a > 0) {
                codebtn.attr("disabled", true).val("(" + a + ")倒计时").css("background", "#ccc");
                a--;
            } else {
                clearInterval(timer);
                codebtn.attr("disabled", false).val("获取验证码").css("background", "#eeeeee");
                a = 60;
            }
        }, 1000);
    },
    countDowns: function countDowns(btn) {
        var times = 10;
        timer = setInterval(function () {
            if (times > 0) {
                btn.setAttribute('disabled', 'disabled');
                btn.value = times + 's';
                times--;
            } else {
                clearInterval(timer);
                btn.removeAttribute('disabled');
                btn.value = '获取验证码';
                times = 60;
            }
        }, 1000);
    }
};
'use strict';

var logins = {
    tel: document.querySelector('#tel'), //电话
    cq_Btn: document.querySelector('.cq_Btn'), //验证码按钮
    cq_Msg: document.querySelector('.cq_Msg'), //验证码
    login_btn: document.querySelector('.login_btn'), //登陆按钮
    init: function init() {
        var _this = this;

        //点击获取
        this.cq_Btn.addEventListener('touchstart', function () {
            if (_this.tel.value) {
                if (filter.verificationPhone(_this.tel.value)) {
                    //发送验证码
                    alert('发送验证码!');
                    filter.countDowns(_this.cq_Btn);
                } else {
                    alert('请输入正确手机号!');
                }
            } else {
                alert('请输入手机号!');
            }
            return false;
        });
        //点击登陆
        this.login_btn.addEventListener('touchstart', function () {
            if (!_this.cq_Msg.value && !_this.tel.value) {
                alert('请输入登陆信息！');
            }
            if (!_this.cq_Msg.value) {
                alert('请输入验证码');
            }
            if (!_this.cq_Msg.value) {
                alert('请输入验证码');
            }
        });
    }
};
"use strict";

;
(function () {
    var ft = document.getElementsByTagName("html")[0]; //获取到html标签
    var s = window.screen.width; //获取屏幕的宽度
    window.onresize = function () {
        //屏幕尺寸改变触发
        var w = document.body.offsetWidth; //获取浏览器内容的宽度
        ft.style.fontSize = w / s * 16 + "px";
    };
})();