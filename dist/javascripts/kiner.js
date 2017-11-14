   /**
    * 根据转盘旋转角度判断获得什么奖品
    * @param deg
    * @returns {*}
    */
   var whichAward = function (deg) {
       if ((deg > 45 && deg <= 90) || (deg > 225 && deg <= 270)) {
           return "1.8元";
       } else if ((deg > 90 && deg <= 135) || (deg > 0 && deg <= 45)) {
           return "8元";
       } else if ((deg > 135 && deg <= 180) || (deg > 270 && deg <= 315)) {
           return "10元";
       } else if ((deg > 180 && deg <= 225 || (deg > 180 && deg <= 360))) {
           return "2元";
       }

   }


   var KinerLottery = new KinerLottery({
       rotateNum: 8, //转盘转动圈数
       body: "#box", //大转盘整体的选择符或zepto对象
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
           function random() {
               return Math.floor(Math.random() * 360);
           }


           this.goKinerLottery(random());

       }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面

       KinerLotteryHandler: function (deg) {

           // alert("恭喜您获得:" + whichAward(deg));
           $('.redBox').css({
               transform: 'scale(1)',
               transition: '.3s'
           });
           $('.redBox-m').text(whichAward(deg))

       } //抽奖结束回调
   });

   $('#goQuiz').on('click', function () {
       window.location.href = 'quiz.html';
   })