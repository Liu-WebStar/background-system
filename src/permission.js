import router from "./router";
import {getUserInfo} from './api/login.js';

router.beforeEach((to,from,next)=>{
  var token=localStorage.getItem('msm-token');
  var path=to.path;
  if(!token){
    if(path!='/login'){
      next({ path:'/login' });
    }else{
      next();
    }
  }else{
    if(path=='/login'){
      next();
    }else{
      const userInfo=localStorage.getItem('msm-user');
      console.log(userInfo);
      if(userInfo){
        next();
      }else{
        getUserInfo(token).then(res=>{
          var resp=res.data;
          if(resp.flag){
            localStorage.setItem('msm-user',JSON.stringify(resp.data));
            next();
          }else{
            next('/login');
          }
        })
      }
    }
  }
})