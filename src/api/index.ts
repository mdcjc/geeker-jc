import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ResultData } from "@/api/interface";
import { ResultEnum } from "@/enums/httpEnum";

const config = {
 	// 默认地址请求地址，可在 .env 开头文件中修改
     baseURL: import.meta.env.VITE_API_URL as string,
     // 设置超时时间（10s）
     timeout: ResultEnum.TIMEOUT as number,
     // 跨域时候允许携带凭证
     withCredentials: true
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
  }

  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
}

export default new RequestHttp(config);
