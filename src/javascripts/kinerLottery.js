/**
 * 注意：本插件运用了rem屏幕适配方案，一律采用rem作为单位，若项目中不是采用这种方案的，请在kinerTreeMenu.css中修改样式，此段代码不会影响功能使用，仅会影响控件样式
 */

(function (win, doc, $) {
    
        var defaultOpt = {
    
            rotateNum: 5, //转盘转动圈数
            body: "", //大转盘整体的选择符或zepto对象
    
    
            disabledHandler: function () {}, //禁止抽奖时回调
    
            clickCallback: function () {}, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
    
            KinerLotteryHandler: function (deg) {} //抽奖结束回调
    
    
        };
    
    
    
        function KinerLottery(opts) {
    
            this.opts = $.extend(true, {}, defaultOpt, opts);
    
            this.doing = false;
    
    
            this.init();
    
        }
    
        KinerLottery.prototype.setOpts = function (opts) {
    
    
            this.opts = $.extend(true, {}, defaultOpt, opts);
    
            this.init();
    
        };
    
        KinerLottery.prototype.init = function () {
    
            var self = this;
            this.CanPlayCount = 0;
    
            this.defNum = this.opts.rotateNum * 360; //转盘需要转动的角度 5圈*360
            // console.log(this.defNum);
    
    
            // alert(this.defNum);
            $.ajax({
                async: false,
                type: "POST",
                url: '/RedBag/PlayRedBag',
                // url:'http://rapapi.org/mockjsdata/28289/RedBag/PlayRedBag',
                data: {
                    bid: 2
                },
                dataType: "json",
                success: function (data) {
                    console.info(data)
                    self.CanPlayCount = data.Result.CanPlayCount
                    
                 
                    if (data.Status==1) {
                        $('.CanPlayCount').html(data.Result.CanPlayCount)
                        self.CanPlayCount = data.Result.CanPlayCount
                    } else {
                        console.info(data)
                    }
                }
    
            })
            //点击抽奖
            console.info(self.CanPlayCount)
                $('.redz').on('click', ".KinerLotteryBtn", function () {
                    if (self.CanPlayCount != 0) {
                        
                    if ($(this).hasClass('start') && !self.doing) {
                        console.log('点击');
    
                        self.opts.clickCallback.call(self);
    
                    } else {
    
                        var key = $(this).hasClass('no-start') ? "noStart" : $(this).hasClass('completed') ? "completed" : "illegal";
    
                        self.opts.disabledHandler(key);
    
                    }
                }else{
                    alert('你没有抽奖机会！')
                }
                
    
                });
    
    
            $(this.opts.body).find('.KinerLotteryContent').get(0).addEventListener('webkitTransitionEnd', function () {
    
                self.doing = false;
    
                var deg = $(self.opts.body).attr('data-deg');
    
                if (self.opts.direction == 0) {
                    $(self.opts.body).attr('data-deg', 360 - deg);
                    $(self.opts.body).find('.KinerLotteryContent').css({
                        '-webkit-transition': 'none',
                        'transition': 'none',
                        '-webkit-transform': 'rotate(' + (deg) + 'deg)',
                        'transform': 'rotate(' + (deg) + 'deg)'
                    });
                    self.opts.KinerLotteryHandler(360 - deg);
                } else {
                    $(self.opts.body).attr('data-deg', deg);
                    $(self.opts.body).find('.KinerLotteryContent').css({
                        '-webkit-transition': 'none',
                        'transition': 'none',
                        '-webkit-transform': 'rotate(' + (-deg) + 'deg)',
                        'transform': 'rotate(' + (-deg) + 'deg)'
                    });
                    self.opts.KinerLotteryHandler(deg);
                }
    
    
    
            }, false);
    
    
    
        };
    
    
        KinerLottery.prototype.goKinerLottery = function (_deg) {
    
            if (this.doing) {
                return;
            }
    
            var deg = _deg + this.defNum;
            var realDeg = this.opts.direction == 0 ? deg : -deg;
            this.doing = true;
            $(this.opts.body).find('.KinerLotteryBtn').addClass('doing');
    
            $(this.opts.body).find('.KinerLotteryContent').css({
                '-webkit-transition': 'all 5s',
                'transition': 'all 5s',
                '-webkit-transform': 'rotate(' + (realDeg) + 'deg)',
                'transform': 'rotate(' + (realDeg) + 'deg)'
    
    
            });
            $(this.opts.body).attr('data-deg', _deg);
    
        };
    
    
    
        win.KinerLottery = KinerLottery;
    
    })(window, document, $);
    //能玩的次数
    
    
    
    
    /**
     * 根据转盘旋转角度判断获得什么奖品
     * @param deg
     * @returns {*}
     */
    var whichAward = function (deg) {
        console.log(deg)
        if ((deg > 45 && deg <= 90) || (deg > 225 && deg <= 270)) {
            return "1.8元";
        } else if ((deg > 90 && deg <= 135) || (deg >= 0 && deg <= 45)) {
            return "8元";
        } else if ((deg > 135 && deg <= 180) || (deg > 270 && deg <= 315)) {
            return "10元";
        } else if ((deg > 180 && deg <= 225 || (deg > 180 && deg <= 360))) {
            return "2元";
        }
    }
    var KinerLottery = new KinerLottery({
        rotateNum: 8, //转盘转动圈数
        body: "#hbbox", //大转盘整体的选择符或zepto对象
        direction: 0, //0为顺时针转动,1为逆时针转动
        disabledHandler: function (key) {
            switch (key) {
                case "noStart":
                    alert("活动尚未开始");
                    break;
                case "completed":
                    alert("活动已结束");
                    break;
            }
        }, //禁止抽奖时回调
        clickCallback: function () {
            //此处访问接口获取奖品
            $.ajax({
                async: false,
                type: "POST",
                url: '/RedBag/RedBagResult',
                data: {
                    bid: $("#Bid").val()
                },
                dataType: "json",
                success: (data) => {
                    console.info(data)
                    console.info(data.Result)
                    if (data.Status == 1) {
                        switch (data.Result) {
                            case 0:
                                //2元
                                //    console.info(Math.floor(Math.random()*(44-1)+1))
                                this.goKinerLottery(Math.floor(Math.random() * (45 - 0) + 0));
                                break;
                            case 1:
                                //10元
                                this.goKinerLottery(Math.floor(Math.random() * (90 - 45) + 45));
                                break;
                            case 2:
                                //1.8元
                                //   console.info(Math.floor(Math.random() * (135-90)+90))
                                this.goKinerLottery(Math.floor(Math.random() * (135 - 90) + 90));
                                break;
                            case 3:
                                //2元
                                this.goKinerLottery(Math.floor(Math.random() * (180 - 135) + 135));
                                break;
                            case 4:
                                //10元
                                this.goKinerLottery(Math.floor(Math.random() * (225 - 180) + 180));
                                break;
                            case 5:
                                //8元
                                this.goKinerLottery(Math.floor(Math.random() * (270 - 225) + 225));
                                break;
                            case 6:
                                //1.8元
                                this.goKinerLottery(Math.floor(Math.random() * (315 - 270) + 270));
                                break;
                            case 7:
                                //8元
                                this.goKinerLottery(Math.floor(Math.random() * (360 - 315) + 315));
                                break;
                        }
                    } else {
                        console.info(data)
                    }
                },
                error(data) {
                    alert(data.Msg)
                }
            })
            //    function random(params) {
            //        console.info(Math.random())
            //        console.info(Math.random() * 360)
            //        console.info(Math.floor(Math.random() * 360))
            //        console.info(Math.floor(1 * 360))
            //        return Math.floor(Math.random() * 360);
            //        //   return Math.floor(1 * 360);
            //    }
            //   return Math.floor(Math.random() * 360);
            //    console.info(random())
            //    this.goKinerLottery(random());
        }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
        KinerLotteryHandler: function (deg) {
            console.info('有' + whichAward(deg))
            // alert("恭喜您获得:" + whichAward(deg));
            $('.redBox').css({
                transform: 'scale(1)',
                transition: '.3s'
            });
            $('.redBox-m').text(whichAward(deg))
        } //抽奖结束回调
    });