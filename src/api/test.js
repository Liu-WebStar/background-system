import request from "@/utils/request";

export default {
  getLogin(){
    return  request({
      method:'post',
      url:'/user/login'
    });
  }
}