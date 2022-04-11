import {Dialog, Toast} from 'vant';
import qs from 'qs';

export default {
  // post 调用方式
  axiosPost(url,param,resolve) {
    // url 地址
    // resolve 调用接口成功后执行的函数
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    let params = qs.stringify(param);
    this.$axios.post(url,params)
        .then((res) => {
          Toast.clear()
          if (res.data.result === 1) {
            resolve();
          } else {
            Dialog.alert({
              message:res.data.reason,
            }).then(()=>{
              // 点击确定后执行的函数
            })
          }
        })
        .catch((err)=>{
          Toast.clear();
          console.error(err);
          Dialog.alert({
            message:'调用接口失败',
          }).then(()=>{
            // 点击确定后执行的函数
          })
        });
  },
  // get 调用方式
  axiosGet(url,param,resolve) {
    // url 地址
    // resolve 调用接口成功后执行的函数
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    this.$axios.get(url,{param})
        .then((res) => {
          Toast.clear()
          if (res.data.result === 1) {
            resolve();
          } else {
            Dialog.alert({
              message:res.data.reason,
            }).then(()=>{
              // 点击确定后执行的函数
            })
          }
        })
        .catch((err)=>{
          Toast.clear();
          console.error(err);
          Dialog.alert({
            message:'调用接口失败',
          }).then(()=>{
            // 点击确定后执行的函数
          })
        });
  },
  // 登录
};