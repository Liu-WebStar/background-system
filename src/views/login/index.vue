<template>
    <div class="login-container">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
            <h2 class="login-title">会员管理系统</h2>
            <el-form-item label="帐号" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import {login,getUserInfo} from "@/api/login"

export default {
    data() {
        return {
            form: {
                username: "",
                password: ""
            },
            rules:{
                username:[
                    {required:true,message:'账号不能为空',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'密码不能为空',trigger:'blur'}
                ]
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(valid=>{
                if(valid){
                    login(this.form.username,this.form.password).then(res=>{
                        var dd=res.data;
                        if(dd.flag){
                            getUserInfo(dd.token).then(res=>{
                                var resUser=res.data
                                localStorage.setItem('msm-user',JSON.stringify(resUser.data));
                                localStorage.setItem('msm-token',dd.token);
                                this.$router.push('/')
                            });
                        }
                    })
                }else{
                    this.$message({
                        message:'用户名、密码不能为空',
                        type:'warning'
                    })
                }
            })
        }
    },
    created(){
    }
};
</script>

<style scoped lang="scss">
    .login-container{
        position:absolute;
        width:100%;
        height:100%;
        background:url('../../assets/bg.jpg');
        background-size:100% 100%;
        .login-title{
            text-align: center;
        }
        .login-form{
            width:350px;
            margin:160px auto;
            background-color:rgba(255,255,255,.8);
            padding:30px;
            border-radius:20px;
        }
    }
</style>