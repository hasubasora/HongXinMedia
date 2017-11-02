const logins = {
    tel: document.querySelector('#tel'), //电话
    cq_Btn: document.querySelector('.cq_Btn'), //验证码按钮
    cq_Msg: document.querySelector('.cq_Msg'), //验证码
    login_btn: document.querySelector('.login_btn'), //登陆按钮
    init() {
        //点击获取
        this.cq_Btn.addEventListener('touchstart', () => {
            if (this.tel.value) {
                if (filter.verificationPhone(this.tel.value)) {
                    //发送验证码
                    alert('发送验证码!')
                    filter.countDowns(this.cq_Btn);
                   
                } else {
                    alert('请输入正确手机号!')
                }

            } else {
                alert('请输入手机号!')
            }
            return false;
        });
        //点击登陆
        this.login_btn.addEventListener('touchstart', () => {
            if (!this.cq_Msg.value&&!this.tel.value) {
                alert('请输入登陆信息！')
            }
            if (!this.cq_Msg.value) {
                alert('请输入验证码')
            }
            if (!this.cq_Msg.value) {
                alert('请输入验证码')
            }
        })


    },



}