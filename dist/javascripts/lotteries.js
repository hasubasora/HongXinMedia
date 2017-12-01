"use strict";

//宝箱抽奖
var lotteries = {
    init: function init() {
        var _this = this;
        var CanPlayCount = 0;
        $.ajax({
            async: false,
            type: "POST",
            // url: '/RedBag/PlayRedBag',
            url: 'http://rap.taobao.org/mockjsdata/28289/RedBag/PlayRedBag',
            dataType: "json",
            success: function success(data) {
                _this.CanPlayCount = data.Result.CanPlayCount;
                if (data.Status == 1) {
                    $('#NewMoneySum').html(data.Result.CanPlayCount);
                    $('.NewMoneySum').html('您还有 ' + data.Result.CanPlayCount + ' 次机会');
                    _this.CanPlayCount = data.Result.CanPlayCount;
                    _this.opens(data.Result.CanPlayCount); //抽奖次数
                } else {
                    //提示
                    layer.open({
                        content: '网络错误，请刷新页面！',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            }
        });

        $('.lotteryBtn').on('touchstart', function () {
            $('.openBox').removeClass('none');
        });
        $('.close').on('touchstart', function () {
            $('.openBox').addClass('none');
            _this.closes();
        });
    },
    redBagLog: function redBagLog(params) {
        var _data = '',
            RedBagLog = '',
            drawRecord = document.querySelector('.drawRecord');
        $.ajax({
            async: false,
            type: "POST",
            url: "RedBag/RedBagLog",
            dataType: "json",
            success: function success(data) {
                _data = data.Result;
            },
            error: function error(data) {
                //提示
                layer.open({
                    content: '网络错误，请刷新页面！',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
        });
        _data.Result.forEach(function (element) {
            console.info(element.Amount);
            RedBagLog += "<article class=\"drawRecordList\"> <span>" + element.Date + "</span><span>" + element.Time + "</span><span>" + element.Type + "</span><span class=\"reds\">+" + element.Amount + "</span></article>";
        });
        drawRecord.innerHTML = RedBagLog;
    },
    opens: function opens(num) {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).on('touchstart', function (e) {
                e.preventDefault();
                if (num > 0) {
                    $('.boxList li').eq(i).addClass('open');
                    $.ajax({
                        async: false,
                        type: "POST",
                        url: '/RedBag/RedBagResult',
                        dataType: "json",
                        success: function success(data) {
                            console.info(data);
                            switch (data.Result) {
                                case 0:
                                    //2元
                                    //询问框
                                    layer.open({
                                        content: '恭喜你获得2元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    break;
                                case 1:
                                    layer.open({
                                        content: '恭喜你获得10元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //10元
                                    break;
                                case 2:
                                    layer.open({
                                        content: '恭喜你获得1.8元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //1.8元
                                    break;
                                case 3:
                                    layer.open({
                                        content: '恭喜你获得2元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //2元
                                    break;
                                case 4:
                                    layer.open({
                                        content: '恭喜你获得10元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {

                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    }); // alert('恭喜你获得红包 10元');
                                    // setTimeout(location.reload(), 3000)

                                    //10元
                                    break;
                                case 5:
                                    layer.open({
                                        content: '恭喜你获得8元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {

                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    }); //8元
                                    break;
                                case 6:
                                    layer.open({
                                        content: '恭喜你获得1.8元红包！',
                                        btn: ['继续抽奖', '去竞猜'],
                                        shadeClose: false,
                                        yes: function yes(index) {
                                            location.reload();
                                            layer.close(index);
                                        },
                                        no: function no(index) {
                                            layer.close(index);
                                            window.location.href = '/Game/Start';
                                        }
                                    });
                                    //1.8元
                                    break;
                                case 7:
                                    _this.redHub(8);
                                    //8元
                                    break;
                            }
                        }
                    });
                } else {
                    //信息框
                    layer.open({
                        content: '您没有抽奖的机会！',
                        btn: '我知道了'
                    });
                }
            });
        });
    },
    closes: function closes() {
        $.each($('.boxList li'), function (i, it) {
            $('.boxList li').eq(i).removeClass('open');
        });
    },
    redHub: function redHub(argument) {
        layer.open({
            content: '恭喜你获得' + argument + '元红包！',
            btn: ['继续抽奖', '去竞猜'],
            shadeClose: false,
            yes: function yes(index) {
                location.reload();
                layer.close(index);
            },
            no: function no(index) {
                layer.close(index);
                window.location.href = '/Game/Start';
            }
        });
    }
};
lotteries.init();