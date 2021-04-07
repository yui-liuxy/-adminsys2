// 引入axios
import axios from "axios";
//引入message
import { Message } from 'element-ui';

const service =axios.create({
    baseURL:"http://10.36.136.83:8001/index/Api",
    timeout:60*1000,
    });
service.interceptors.request.use((config)=>{
    config.headers.Authorization="token"
    return config
},(err)=>{
    return Promise.reject(err)
})
service.interceptors.response.use((res)=>{
    const  data=res.data
    if(data.status !=200){
        console.log(data.status)
        Message({
            type:"error",
            message:data.msg,
            duration:2000
        })
    }else {
        return data
    }

},(err)=>{
    Message({
        type:"error",
        message:err,
        duration:2000
    })
})
export default service
