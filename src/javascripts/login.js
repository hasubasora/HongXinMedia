const logins = {
    tel: document.querySelector('#tel'), //电话
    cq_Btn: document.querySelector('.cq_Btn'), //验证码按钮
    cq_Msg: document.querySelector('.cq_Msg'), //验证码
    login_btn: document.querySelector('.login_btn'), //登陆按钮
    login_close: document.querySelector('.login_close'), //关闭登陆X
    init() {


      //点击获取
      $('.loginBox').on('click', '.cq_Btn', () => {
        if (this.tel.value) {
          if (filter.verificationPhone(this.tel.value)) {
            //发送验证码
            $.ajax({
              type: 'post',
              cache: false,
              contentType: "application/json; charset=utf-8",
              url: "/WeiXin/SendMsg",
              data: JSON.stringify({
                Mobile: this.tel.value
              }),
              dataType: "json",
              error: function (a, b) {
                console.log(a)
              },
              success: function (data) {
                console.info(data)
                if (data.Status == 1) {
                  filter.countdowns(logins.cq_Btn);
                  //提示
                  layer.open({
                    content: '验证码已发送',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                  });
                } else {
                  layer.open({
                    content: data.Msg,
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                  });
                }

              }
            });

          } else {
            //提示
            layer.open({
              content: '请输入正确手机号',
              skin: 'msg',
              time: 2 //2秒后自动关闭
            });
          }

        } else {

          //提示
          layer.open({
            content: '请输入手机号',
            skin: 'msg',
            time: 2 //2秒后自动关闭
          });
        }

      });
      //点击登陆
      $('.login_btn').on('click', (e) => {
        if (this.cq_Msg.value && this.tel.value) {
          if (filter.verificationPhone(this.tel.value)) {
            //验证码验证
            //登陆请求
            var bid = $("#Bid").val();
            console.log(bid);
            $.ajax({
              type: 'post',
              cache: false,
              contentType: "application/json; charset=utf-8",
              url: "/FunUser/Register",
              data: JSON.stringify({
                Mobile: this.tel.value,
                Code: this.cq_Msg.value,
                Bid: bid,

              }),
              dataType: "json",
              error: function (a, b) {
                console.log(a)
              },
              success: function (data) {
                layer.open({
                  content: data.Msg,
                  skin: 'msg',
                  time: 2 //2秒后自动关闭
                });
                if (data.Status == 1) {
                  setTimeout(function () {
                    location.reload()
                  }, 2000);
                  $("#IsRegister").val("True");
                }

              }
            });
          }
        } else {
          if (!this.tel.value) {
            //提示
            layer.open({
              content: '请输入手机号',
              skin: 'msg',
              time: 2 //2秒后自动关闭
            });
          } else if (!this.cq_Msg.value) {
            //提示
            layer.open({
              content: '请输入验证码',
              skin: 'msg',
              time: 2 //2秒后自动关闭
            });
          }
        }
      })
      $(this.login_close).on('click', (e) => {
        $('.loginBox').addClass('scale');
        e.stopPropagation()
        //关闭登陆窗口
      })
    },
  }