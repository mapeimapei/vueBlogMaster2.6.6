import axios from 'axios'
//import $ut from "../constants/utils"
//import router from '@/router'
import { Loading } from 'element-ui'
import { Notification } from 'element-ui'

export default (params) => {
  return new Promise((resolve, reject) => {
    let loadingMask
    if (!!params.loading) {
      loadingMask = Loading.service({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      })
    }

    // if(!!params.cancelToken && !!params.source){
    //   params.source.cancel()
    //   params.source = null
    // }
    // params.source = axios.CancelToken.source() //这里初始化source对象
    // let token = {cancelToken:params.source.token},

    let arr = []
    if (params.method === "post") {
      arr = [params.url, params.data]
    } else {
      let param = ""
      if (!!params.data) {
        for (let attr in params.data) {
          param += `&${attr}=${params.data[attr]}`
        }
        param = param.replace("&", "?")
      }
      arr = [params.url + param]
    }

    //debugger
    axios[params.method](...arr).then((data) => {
      //params.source = null
      if (!!loadingMask) { loadingMask.close() }
      if (!!data) {
        if (data.resultCode == "20000") {
          if (params.successTips) {
            Notification.success({
              message: `${params.desc} 成功`,
            })
          }
          resolve(data)
        } else {
          if (params.faildTips) {
            Notification.warning({
              message: `${params.desc} 失败`,
            })
          }
          reject(data)
        }
      } else {
        Notification.warning({
          message: `${params.desc} api error`,
        })
        reject(`${params.desc} api error`)
      }
    }).catch((err) => {
      //params.source = null
      if (!!loadingMask) { loadingMask.close() }
      if (!params.cancelToken) {
        Notification.error({
          message: `${params.desc} ${err.message}`,
        })
      }
      reject(err)
    });
  })
}