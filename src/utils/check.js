// 基于 vant 组件开发

import {Toast} from 'vant';

export default {
  phoneNumber(pn) { // pn 手机号码
    if (!pn) {
      Toast('请输入您的手机号');
      return false;
    } else {
      let str = pn.replace(/[ ]/g, '');
      let reg = /^1[3456789]\d{9}$/;
      let result = reg.test(str);
      if (!result) {
        Toast('请输入正确的11位手机号码');
      }
      return result;
    }
  },
  chineseName(cn) { // 只能输入2到16位中文字符
    if (!cn) {
      Toast('请输入您的姓名');
      return false;
    } else {
      let str = cn.replace(/[ ]/g, '');
      let reg = /^[\u4e00-\u9fa5]{2,16}$/;
      let result = reg.test(str);
      if (!result) {
        Toast('请输入正确的姓名');
      }
      return result;
    }
  },
  englishName(en) { // 只能输入2到16位英文字符
    if (!en) {
      Toast('Please enter your English name');
      return false;
    } else {
      let reg = /^[a-zA-Z\s]{2,16}$/;
      let result = reg.test(en);
      if (!result) {
        Toast('Please enter your correct English name');
      }
      return result;
    }

  },
  realName(rn) { // 真实姓名，中英文都可以
    if (!rn) {
      Toast('请输入您的姓名');
      return false;
    } else {
      let reg = /^([\u4e00-\u9fa5]{2,16}|[a-zA-Z\s]{2,16})$/;
      let result = reg.test(rn);
      if (!result) {
        Toast('请输入正确的姓名');
      }
      return result;
    }
  },
  idCardNumber(idCard) { // 身份证
    if (!idCard) {
      Toast('请输入您的身份证号');
      return false;
    } else {
      let strArr = [...idCard];
      let numArr = [...idCard].map(Number);
      let sum =
          numArr[0] * 7 +
          numArr[1] * 9 +
          numArr[2] * 10 +
          numArr[3] * 5 +
          numArr[4] * 8 +
          numArr[5] * 4 +
          numArr[6] * 2 +
          numArr[7] +
          numArr[8] * 6 +
          numArr[9] * 3 +
          numArr[10] * 7 +
          numArr[11] * 9 +
          numArr[12] * 10 +
          numArr[13] * 5 +
          numArr[14] * 8 +
          numArr[15] * 4 +
          numArr[16] * 2;
      //remainder 余数
      let remainder = sum % 11;
      if (remainder === 0) {
        if (numArr[17] === 1) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 1) {
        if (numArr[17] === 0) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 2) {
        if (strArr[17] === "X") {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 3) {
        if (numArr[17] === 9) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 4) {
        if (numArr[17] === 8) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 5) {
        if (numArr[17] === 7) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 6) {
        if (numArr[17] === 6) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 7) {
        if (numArr[17] === 5) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 8) {
        if (numArr[17] === 4) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 9) {
        if (numArr[17] === 3) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else if (remainder === 10) {
        if (numArr[17] === 2) {
          return true;
        } else {
          Toast("请输入正确的身份证号");
          return false;
        }
      } else {
        Toast("请输入正确的身份证号");
        return false;
      }
    }
  },
  foreignerId(id) {
    if (!id) {
      Toast('请输入您的证件号码');
      return false;
    } else {
      let reg = /^[A-Za-z0-9]{2,16}$/;
      if (!reg.test(id)) {
        Toast("请输入正确的证件号码");
        return false;
      } else {
        return true;
      }
    }
  },
};