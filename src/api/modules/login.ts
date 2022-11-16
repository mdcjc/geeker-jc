import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api"
/**
 *@name 登录模块
 */
// 用户登录接口
export const loginApi= (params:Login.ReqLoginForm)=>{
    debugger
    return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }); // 正常 post json 请求  ==> 
}