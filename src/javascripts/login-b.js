class login {
    constructor(url, url2) {
        this.url = url
        this.url2 = url2
        this.tel = document.querySelector('#n_login_tel') //电话
        this.cq_Btn = document.querySelector('#n_login_cq_btn') //验证码按钮
        this.cq_Msg = document.querySelector('#n_login_cq') //验证码
        this.login_btn = document.querySelector('#n_login_submit') //登陆按钮
        this.login_close = document.querySelector('.n_login_close') //关闭登陆X
    }
    init() {
        this.login_close.addEventListener('click', () => {
            alert('关闭')
        }, false)
        this.cq_Btn.addEventListener('click', () => {
            this.login_phone(this.cq_Btn);
        }, false)
        this.login_btn.addEventListener('click', () => {
            this.login_submit();
        }, false)
        this.cq_Msg.addEventListener('input', e => {
            this.login_btn.removeAttribute('disabled')
            this.login_btn.classList.add('n_login_submit_red')
        })
    }
    login_phone(m_this) {
        if (this.tel.value) {
            if (filter.verificationPhone(this.tel.value)) {
                //发送验证码
                $.ajax({
                    type: 'post',
                    cache: false,
                    contentType: "application/json; charset=utf-8",
                    url: this.url,
                    data: JSON.stringify({
                        Mobile: this.tel.value
                    }),
                    dataType: "json",
                    error(a, b) {
                        console.log(a);
                    },
                    success(data) {
                        console.info(data);
                        if (data.Status == 1) {
                            filter.countdowns(m_this);
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
    }
    login_submit() {
        if (this.cq_Msg.value && this.tel.value) {
            if (filter.verificationPhone(this.tel.value)) {
                //验证码验证
                //登陆请求
                $.ajax({
                    type: 'post',
                    cache: false,
                    contentType: "application/json; charset=utf-8",
                    url: this.url2,
                    data: JSON.stringify({
                        Mobile: this.tel.value,
                        Code: this.cq_Msg.value,
                    }),
                    dataType: "json",
                    error(a, b) {
                        console.log(a);
                    },
                    success(data) {
                        layer.open({
                            content: data.Msg,
                            skin: 'msg',
                            time: 2 //2秒后自动关闭
                        });
                        if (data.Status == 1) {
                            setTimeout(function () {
                                location.reload();
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

    }
}