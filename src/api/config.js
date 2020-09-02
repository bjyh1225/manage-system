import axios from 'axios';

//创建一个axios实例
const service = axios.create({
  //请求时间
  timeout: 3000
})

//请求拦击器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
  }
)
//响应拦击器
service.interceptors.response.use(
  response => {
    let res = {}
    res.status = Response.status
    res.data = response.data
    return res
  },
  err => console.log(err)
)

export default service
 