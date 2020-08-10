<template>
  <div class="header">
    <a href="#/">
      <img class="logo" src="@/assets/logo.png" width="25px" alt="">
      <span class="company">会员管理系统</span>
    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {logOut} from '@/api/login';
export default {
  methods:{
    handleCommand(command){
      switch(command){
        case 'a':
          this.$message(`点击了修改密码`);
          break;
        case 'b':
          logOut(localStorage.getItem('msm-token')).then(res=>{
            var resp=res.data;
            if(resp.flag){
              this.$message({
                message:resp.message,
                type:'success',
                duration:2000
              })
              localStorage.removeItem('msm-token');
              localStorage.removeItem('msm-user');
              this.$router.push('/login');
            }else{
              this.$message({
                message:resp.message,
                type:'warning',
                duration:2000
              })
            }
          })
          break;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  position:absolute;
  line-height:50px;
  background-color:#2d3a4b;
  top:0;
  left:0;
  right:0;
  .logo{
    vertical-align: middle;
    padding:0 10px 0 40px;
  }
  .company{
    color:#fff;
    position:absolute;
  }
  .el-dropdown{
    float:right;
    margin-right:40px;
  }
  .el-dropdown-link{
    color:#fff;
    cursor:pointer;
  }
}
</style>