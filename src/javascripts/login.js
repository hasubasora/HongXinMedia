const logins = {
    tel: document.querySelector('#tel'), //电话
    cq_Btn: document.querySelector('.cq_Btn'), //验证码按钮
    cq_Msg: document.querySelector('.cq_Msg'), //验证码
    login_btn: document.querySelector('.login_btn'), //登陆按钮
    login_close: document.querySelector('.login_close'), //关闭登陆X
    init() {
        //点击获取
        this.cq_Btn.addEventListener('touchstart', () => {
            if (this.tel.value) {
                if (filter.verificationPhone(this.tel.value)) {
                    //发送验证码

                    filter.countdowns(this.cq_Btn);
                    //提示
                    layer.open({
                        content: '验证码已发送',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
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

        },false);
        //点击登陆
        this.login_btn.addEventListener('touchstart', () => {
            if (this.cq_Msg.value && this.tel.value) {
                if (filter.verificationPhone(this.tel.value)) {
                    //验证码验证
                    //登陆请求
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
        this.login_close.addEventListener('touchstart', () => {
            //关闭登陆窗口
        },false)


    },



}