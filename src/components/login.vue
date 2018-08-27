<template>
<div class="login-box">
    <el-form :model="account" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username" :error="account.e_username">
            <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" :error="account.e_password">
            <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="handleReset">重置</el-button>-->
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import {login} from '@/api/dataset'
import {setCookie} from '@/util/cookie'
export default {
    data () {
        return {
            logining: false,
            account: {
                username: '',
                e_username: '',
                password: '',
                e_password: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                ]
            },
            checked: true
        }
    },
    methods: {
        handleSubmit () {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.logining = true

                    login({
                        username: this.account.username,
                        password: this.account.password
                    }).then((response) => {
                        console.log(response)
                        setCookie('token', response.data.token)
                        setCookie('username', this.account.username)
                        this.logining = false
                        this.$router.push('index')
                    }).catch((error) => {
                        console.log(error)
                        this.logining = false
                        if ('non_field_errors' in error) {
                            this.$message.error(error.non_field_errors[0])
                        }

                        if ('username' in error) {
                            this.account.e_username = error.username[0]
                        }

                        if ('password' in error) {
                            this.account.e_password = error.password[0]
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto 0px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
}
</style>

