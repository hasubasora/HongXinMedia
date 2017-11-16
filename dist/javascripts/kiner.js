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
               url: 'http://192.168.168.46/RedBag/RedBagResult',
               data: {
                   bid: 2
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
   //hongbao weizhi
   var s_h = window.screen.height / 2;
   var list_h = window.screen.height;
   $('.redBox-m').css({
       marginTop: (s_h - 70)
   });


   document.querySelector('.CanPlayCountText').style.transform = "translateY(" + (list_h - 150) + "px)"


   $.each($('.openAminatesList>li'), function (i, n) {
       if (localStorage.onload == "true") {
           n.classList.add('none');
       }
       //初始化界面导航
       if (localStorage.onload != "true") {
           if ($(this).hasClass('redz')) {
               return false;
           } else {
               n.addEventListener('click', function () {
                   n.classList.add('none');
                   if (($('.openAminatesList>li').size() - 2) == i) {
                          localStorage.onload = "true"
                       //这里导入登陆页面login.html
                   }
               })
           }
           //已经初始化过了
       }
   });


   hrefs('#goQuiz', "连接地址"); //抽完红包跳转到游戏界面
   hrefs('.new_money', "连接地址"); //红包活动
   hrefs('.mock_trading', "连接地址"); //模拟交易
   hrefs('.billboard', "连接地址");//排行榜
   hrefs('.q_a', "连接地址");//新手教程
   hrefs('.home_footer', "连接地址");//开始竞猜
   hrefs('.m_pay', "连接地址");//开始竞猜
   hrefs('.m_play', "连接地址");//充值
   hrefs('.home_wx_draw_money', "连接地址");//微信提款
   hrefs('#playBtn', "连接地址");//抽奖攻略



   function hrefs(id, url) {
       $(id).on('click', function () {
           window.location.href = url;
       })
   }


   //判断登陆的 复制过来






