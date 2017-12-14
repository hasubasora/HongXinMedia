'use strict';

window.onload = function (params) {
    outMoney.init();
};

var outMoney = {
    init: function init() {
        self = this;
        var moneys = document.querySelector('.moneys');
        var outMoney = document.querySelector('.outMoney');
        var outMoneyNum = document.querySelector('.outMoneyNum');
        var rep = /\d+\.\d+/ig;
        outMoney.addEventListener('click', function (params) {
            moneys.value = outMoneyNum.textContent.match(rep);
            // console.info( outMoneyNum.textContent.match(rep))
            self.moneys();
        }, false);

        self.getPay(); //获取支付

        //验证码发送
        $('#cqBtn').on('click', function () {
            self.getCode(this);
        });
        //关闭窗口
        $('.close').on('click', function () {
            window.history.go(-1);
        });
        //检测输入动态码
        $('.releCq').on('input', function () {
            if ($('.releCq').val()) {
                $('.GoPay').removeClass('pointer').addClass('blues');
            } else {
                $('.GoPay').removeClass('blues').addClass('pointer');
            }
        });
        //检测金额
        $('.moneys').on('input', function () {
            self.moneys();
        });
        //支付宝的确定按钮
        $('.GoPay').on('click', function () {
            var releCq = filter.unBlank($('.releCq').val());
            var zfbPay = filter.unBlank($('.zfbPay').val());
            if (releCq && zfbPay) {
                //检测都存在，就发送ajax
                layer.open({
                    content: '请检查你的支付账号是否正确“' + zfbPay + '”',
                    btn: ['正确', '不正确'],
                    yes: function yes(index) {
                        self.goPay($('.tel').val(), releCq, zfbPay);
                        layer.close(index);
                    }
                });
            } else {
                //提示
                layer.open({
                    content: '请输入支付宝号',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        });
        //确定提款
        $('#tx').on('click', function () {
            self.Withdraw($('.moneys').val(), $('#userNum').val());
        });
    },
    moneys: function moneys() {
        if ($('.moneys').val()) {
            $('#tx').removeClass('pointer').addClass('blue');
        } else {
            $('#tx').removeClass('blue').addClass('pointer');
        }
    },
    getPhone: function getPhone() {
        //获取手机号
        console.info('获取手机号');
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                name: "John",
                location: "Boston"
            },
            dataType: 'json'
        }).done(function (data, textStatus, jqXHR) {
            //success
            console.info(data);
            if (data.Status == 1) {
                $('.tel').val(data); //手机号放置页面上
            } else {
                layer.open({
                    content: '获取手机号失败',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
            // alert("success")
        }).fail(function (jqXHR, textStatus, errorThrown) {//error
            // alert("error");
        });
    },
    getCode: function getCode(btn) {
        //发送验证码
        console.info('发送验证码');
        //loading层
        layer.open({
            type: 2,
            shadeClose: false
        });
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                tel: "John"
            },
            dataType: 'json'
        }).done(function (data, textStatus, jqXHR) {
            //success
            if (data.Status == 1) {
                layer.open({
                    content: '发送成功',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                filter.countdowns(btn);
                setTimeout(function () {
                    layer.closeAll();
                }, 2000);
            } else {
                layer.open({
                    content: '发送失败',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                setTimeout(function () {
                    layer.closeAll();
                }, 2000);
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '发送失败',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
            setTimeout(function () {
                layer.closeAll();
            }, 2000);
        });
    },
    goPay: function goPay(t, c, p) {
        //点击确定！验证！验证码！
        // console.info(t);//手机号
        // console.info(c);//验证码
        // console.info(p);//支付宝
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                tel: "John"
            },
            dataType: 'json'
        }).done(function (data) {
            //success
            console.info(data);
            if (data.Status == 1) {
                $('.userNameBox').hide(); //成功后隐藏验证卡
                $('#userNum').val(p);
            } else {
                layer.open({
                    content: '网络异常',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '网络异常',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        });
    },
    getPay: function getPay() {
        //获取支付宝
        console.info('获取支付宝');
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            dataType: 'json'
        }).done(function (data) {
            //success
            console.info(data);
            if (data.Status == 1) {
                //判断返回的支付宝是否为空
                if (!data) {
                    $('.userNameBox').show();
                    self.getPhone();
                } else if (data) {
                    //支付宝账号存在的话，直接填入
                    $('#userNum').val(data);
                }
            } else {
                layer.open({
                    content: '网络异常',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '网络异常',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
        });
    },
    Withdraw: function Withdraw(m, p) {
        //提款操作
        // console.info(m);//提款金额
        // console.info(p);//支付宝
        //loading层
        layer.open({
            type: 2,
            shadeClose: false
        });
        $.ajax({
            type: "POST",
            url: "http://rap.taobao.org/mockjsdata/28289/Draw/SaveAliPayAccount",
            data: {
                name: "John",
                location: "Boston"
            },
            dataType: 'json'
        }).done(function (data, textStatus, jqXHR) {
            //success
            console.info(data);
            if (data.Status == 1) {
                layer.open({
                    content: '提交成功',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                filter.countdowns(btn);
                setTimeout(function () {
                    //或许需要跳连接？
                    //window.location.href = '';
                    layer.closeAll();
                }, 2000);
            } else {
                layer.open({
                    content: '提交失败',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
                setTimeout(function () {
                    //或许需要跳连接？
                    layer.closeAll();
                }, 2000);
            }
            // alert("success")
        }).fail(function (jqXHR, textStatus, errorThrown) {
            //error
            layer.open({
                content: '提交失败',
                skin: 'msg',
                time: 2 //2秒后自动关闭
            });
            setTimeout(function () {
                //或许需要跳连接？
                layer.closeAll();
            }, 2000);
        });
    }
};