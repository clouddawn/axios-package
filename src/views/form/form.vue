<template>
  <div class="kunForm">
    <div class="formContent">
      <div class="fillInfo">
        <div class="everyInfo">
          <div class="left"><span>*</span> 来昆方式</div>
          <div class="right" @click="toTypeSel = true">
            <input type="text" placeholder="请选择" readonly v-model="toType" />
            <img src="~assets/images/arrowright.png" alt="" />
          </div>
        </div>
        <div class="everyInfo" v-show="toType == '火车、高铁'">
          <div class="left"><span>*</span> 车次号</div>
          <div class="right">
            <input
              type="text"
              placeholder="请输入"
              v-model="checiNum"
              maxlength="10"
            />
          </div>
        </div>
        <div class="everyInfo" v-show="toType == '私家车'">
          <div class="left"><span>*</span> 车牌号</div>
          <div class="right">
            <input type="text" placeholder="请输入" v-model="chepaiNum" />
          </div>
        </div>
        <div class="everyInfo" v-show="toType == '其他'">
          <div class="left"><span>*</span> 其他来昆方式</div>
          <div class="right">
            <input type="text" placeholder="请输入" v-model="otherType" />
          </div>
        </div>
        <div class="everyInfo last">
          <div class="left"><span>*</span> 来昆时间</div>
          <div class="right" @click="toTimeSel = true">
            <input type="text" placeholder="请选择" readonly v-model="toTime" />
            <img src="~assets/images/arrowright.png" alt="" />
          </div>
        </div>
      </div>
      <div class="fillInfo personInfo">
        <div class="everyInfo">
          <div class="left"><span>*</span> 姓名</div>
          <div class="right">
            <input
              maxlength="16"
              type="text"
              placeholder="请输入真实姓名"
              v-model="name"
              readonly
            />
          </div>
        </div>
        <div class="everyInfo">
          <div class="left"><span>*</span> 证件类型</div>
          <div class="right">
            <input
              type="text"
              placeholder="填写证件类型"
              readonly
              v-model="cardType"
            />
          </div>
        </div>
        <div class="everyInfo">
          <div class="left"><span>*</span> 证件号码</div>
          <div class="right">
            <input
              type="text"
              placeholder="请输入证件号码"
              maxlength="20"
              v-model="certNo"
              readonly
            />
          </div>
        </div>
        <div class="everyInfo last">
          <div class="left"><span>*</span> 手机号码</div>
          <div class="right">
            <input
              type="text"
              placeholder="请输入手机号码"
              maxlength="11"
              v-model="phone"
            />
          </div>
        </div>
      </div>
      <div class="fillInfo huji">
        <div class="everyInfo last">
          <div class="left"><span>*</span> 户籍地</div>
          <div class="right" @click="hujiSel = true">
            <input
              type="text"
              placeholder="选择省市县"
              readonly
              v-model="huji"
            />
            <img src="~assets/images/arrowright.png" alt="" />
          </div>
        </div>
      </div>
      <div class="fillInfo address">
        <div class="addressType">
          <ul>
            <li @click="showScan">二维码门牌扫码</li>
            <li @click="showAdd">手动添加</li>
          </ul>
          <div class="word" :class="{ showSel: !isShowAddAddr }">
            提示：请通过扫二维码门牌或手动方式添加在昆地址
          </div>
        </div>
        <div v-show="isShowAddAddr">
          <div class="everyInfo">
            <div class="left"><span>*</span> 在昆住址</div>
            <div class="right" @click="liveAreaSel = true">
              <input
                type="text"
                placeholder="选择区镇"
                readonly
                v-model="liveArea"
              />
              <img src="~assets/images/arrowright.png" alt="" />
            </div>
          </div>
          <div class="everyInfo">
            <div class="left"><span>*</span> 所在小区</div>
            <div class="right">
              <input
                type="text"
                placeholder="请输入小区名称/酒店名称"
                maxlength="30"
                v-model="liveAddr"
              />
            </div>
          </div>
          <div class="everyInfo last">
            <div class="left"><span>*</span> 门牌房间</div>
            <div class="right">
              <input
                type="text"
                placeholder="请输入具体门牌号/房间号"
                maxlength="30"
                v-model="liveNum"
              />
            </div>
          </div>
        </div>
        <div v-show="isScan">
          <div class="everyInfo">
            <div class="left"><span>*</span> 在昆住址</div>
            <div class="right">
              <input type="text" readonly v-model="scanArea" />
            </div>
          </div>
          <div class="everyInfo">
            <div class="left"><span>*</span> 详细地址</div>
            <div class="right">
              <input type="text" v-model="scanAddr" readonly />
            </div>
          </div>
          <div class="everyInfo last">
            <div class="left">补充地址</div>
            <div class="right">
              <input
                type="text"
                placeholder="请输入补充地址"
                maxlength="30"
                v-model="scanBuchong"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="fillInfo danweiInfo">
        <div class="everyInfo last">
          <div class="left"><span>*</span> 单位名称</div>
          <div class="right">
            <input
              type="text"
              placeholder="请输入单位名称"
              maxlength="20"
              v-model="danweiName"
              @input="searchDanweiList(danweiName)"
            />
          </div>
        </div>
      </div>
      <div class="awayInfo">
        <div class="addrInfo last">
          <div class="top">
            <div class="left"><span>*</span> 出发地</div>
            <div class="right" @click="tujinSel = true">
              <input
                type="text"
                placeholder="选择省市县"
                readonly
                v-model="tujinArea"
              />
              <img src="~assets/images/arrowright.png" alt="" />
            </div>
          </div>
          <div class="bottom">
            <input
              type="text"
              placeholder="请输入出发地详细信息"
              v-model="tujinAddr"
              maxlength="40"
            />
          </div>
        </div>
      </div>
      <div class="awayInfo">
        <div id="nucleicAcid">
          <div class="top">
            <span>*</span> 近两周内是否接触过发热咳嗽的人员？
          </div>
          <van-radio-group
            v-model="isContact"
            direction="horizontal"
            class="hesuan"
          >
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
        <div id="nucleicAcid">
          <div class="top"><span>*</span> 是否有发热或咳嗽乏力等症状？</div>
          <van-radio-group
            v-model="isIll"
            direction="horizontal"
            class="hesuan"
          >
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
        <div class="zhengzhuangSel" v-show="isIll == 1">
          <van-checkbox-group v-model="illList" direction="horizontal">
            <van-checkbox name="发热">发热</van-checkbox>
            <van-checkbox name="咳嗽">咳嗽</van-checkbox>
            <van-checkbox name="咽痛">咽痛</van-checkbox>
          </van-checkbox-group>
          <van-checkbox-group v-model="illList" direction="horizontal">
            <van-checkbox name="流涕">流涕</van-checkbox>
            <van-checkbox name="胸闷">胸闷</van-checkbox>
            <van-checkbox name="胸痛">胸痛</van-checkbox>
          </van-checkbox-group>
          <van-checkbox-group v-model="illList" direction="horizontal">
            <van-checkbox name="乏力">乏力</van-checkbox>
            <van-checkbox name="眼干">眼干</van-checkbox>
            <van-checkbox name="呼吸困难">呼吸困难</van-checkbox>
          </van-checkbox-group>
          <van-checkbox-group v-model="illList" direction="horizontal">
            <van-checkbox name="肠胃不适">肠胃不适</van-checkbox>
          </van-checkbox-group>
        </div>
        <div class="everyInfo last">
          <div class="left"><span>*</span> 体温</div>
          <div class="right">
            <input
              maxlength="16"
              type="text"
              placeholder="33~45"
              v-model="temp"
            />℃
          </div>
        </div>
      </div>
      <div class="awayInfo isYimiao">
        <div id="nucleicAcid">
          <div class="top"><span>*</span> 疫苗接种情况？</div>
          <van-radio-group v-model="yimiao" direction="horizontal">
            <van-radio name="0">未接种</van-radio>
            <van-radio name="1">一针</van-radio>
            <van-radio name="2">两针</van-radio>
            <van-radio name="3">三针</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="awayInfo hesuan">
        <div id="nucleicAcid">
          <div class="top"><span>*</span> 是否持有48小时内核酸阴性证明？</div>
          <van-radio-group
            v-model="hasHesuan"
            direction="horizontal"
            class="hesuan"
          >
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
          <div class="bottom" v-show="hasHesuan == 0">
            <img src="~assets/images/attention.png" alt="" />
            <div class="word">请根据防疫政策，尽快完成核酸检测</div>
          </div>
        </div>
        <div class="upLoadImg" v-show="hasHesuan == 1">
          <div class="head">
            <span style="color: #ff0f0f">*</span> 核酸检测阴性报告 <br /><span>
              (图片小于2M,支持jpg、png等格式）</span
            >
          </div>
          <div class="sendPic">
            <van-uploader
              v-model="hesuanList"
              multiple
              :max-count="1"
              :after-read="afterReadHesuan"
              :before-read="beforeRead"
              @delete="delHesuan"
            />
          </div>
        </div>
      </div>
      <div class="upLoadImg">
        <div class="head">
          <span style="color: #ff0f0f">*</span> 苏康码截图 <br /><span>
            (图片小于2M,支持jpg、png等格式）</span
          >
        </div>
        <div class="sendPic">
          <van-uploader
            v-model="sumaList"
            multiple
            :max-count="1"
            :after-read="afterReadSuma"
            :before-read="beforeRead"
            @delete="delSuma"
          />
        </div>
      </div>
      <div class="upLoadImg">
        <div class="head">
          <span style="color: #ff0f0f">*</span> 14天行程码截图 <br /><span>
            (图片小于2M,支持jpg、png等格式）</span
          >
        </div>
        <div class="sendPic">
          <van-uploader
            v-model="xinchenList"
            multiple
            :max-count="1"
            :after-read="afterReadXinchen"
            :before-read="beforeRead"
            @delete="delXinchen"
          />
        </div>
      </div>
    </div>
    <div class="submitBtn">
      <button @click="submit">确认提交</button>
    </div>
    <van-popup v-model="toTypeSel" position="bottom">
      <van-picker
        show-toolbar
        :columns="toTypeConlumn"
        @confirm="confirmtoType"
        @cancel="toTypeSel = false"
      />
    </van-popup>
    <van-popup v-model="toTimeSel" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择时间"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirmToTime"
        @cancel="toTimeSel = false"
      />
    </van-popup>
    <van-popup v-model="hujiSel" position="bottom">
      <van-area
        title="请选择省市县"
        :area-list="areaList"
        @confirm="confirmHuji"
        @cancel="hujiSel = false"
      />
    </van-popup>
    <van-popup v-model="liveAreaSel" position="bottom">
      <van-picker
        show-toolbar
        :columns="liveAreaConlumn"
        @confirm="confirmliveArea"
        @cancel="liveAreaSel = false"
      />
    </van-popup>
    <van-popup v-model="danweiAreaSel" position="bottom">
      <van-picker
        show-toolbar
        :columns="danweiAreaConlumn"
        @confirm="confirmdanweiArea"
        @cancel="danweiAreaSel = false"
      />
    </van-popup>
    <van-popup v-model="danweiNameSel" position="bottom">
      <van-picker
        show-toolbar
        :columns="danweiNameConlumn"
        @confirm="confirmdanweiName"
        @cancel="danweiNameSel = false"
      />
    </van-popup>
    <van-popup v-model="tujinSel" position="bottom">
      <van-area
        title="请选择省市县"
        :area-list="areaList"
        @confirm="confirmTujin"
        @cancel="tujinSel = false"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
import { Picker } from "vant";
import { Dialog } from "vant";
import { DatetimePicker } from "vant";
import { Toast } from "vant";
import doImg from "@/utils/doImg.js";
import { areaList } from "@vant/area-data";
import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Toast);
Vue.use(DatetimePicker);
import { Area } from "vant";

Vue.use(Area);
Vue.use(Picker);
Vue.use(Popup);
export default {
  mounted() {
    this.getScanInfo();
    this.name = sessionStorage.getItem("name");
    this.cardType = sessionStorage.getItem("certNoType");
    this.certNo = sessionStorage.getItem("certNo");
    this.phone = sessionStorage.getItem("phone");
    this.getInfo();
    if (this.$route.query.isAll == 1) {
      this.getAllInfo();
    }
    if (this.$route.query.isAll == 0) {
      this.getHalfInfo();
    }
  },
  data() {
    return {
      toTypeConlumn: ["火车、高铁", "私家车", "其他"],
      toTypeSel: false,
      toType: "",
      checiNum: "",
      chepaiNum: "",
      otherType: "",
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      toTimeSel: false,
      toTime: "",
      name: "",
      cardType: "",
      certNo: "",
      phone: "",
      areaList,
      hujiSel: false,
      huji: "",
      hujiProvince: "",
      hujiCity: "",
      hujiCounty: "",
      isShowAddAddr: false,
      isScan: false,
      liveAreaSel: false,
      scanArea: "",
      scanAddr: "",
      scanBuchong: "",
      liveAreaConlumn: [
        "经济技术开发区",
        "高新技术产业开发区",
        "花桥经济开发区",
        "张浦镇",
        "周市镇",
        "陆家镇",
        "巴城镇",
        "千灯镇",
        "淀山湖镇",
        "周庄镇",
        "锦溪镇",
      ],
      liveArea: "",
      liveAddr: "",
      liveNum: "",
      danweiAreaSel: false,
      danweiAreaConlumn: [],
      danweiAreaList: [],
      danweiArea: "",
      danweiAreaId: "",
      danweiName: "",
      danweiNameId: "",
      danweiNameSel: false,
      danweiNameList: [],
      danweiNameConlumn: [],
      tujinArea: "",
      tujinProvince: "",
      tujinCity: "",
      tujinCounty: "",
      tujinAddr: "",
      tujinSel: false,
      isContact: "",
      isIll: "",
      illList: [],
      temp: "",
      yimiao: "",
      hasHesuan: "",
      sumaList: [],
      hesuanList: [],
      xinchenList: [],
      allDanweiList: [],
      hesuanFile: "",
      sumaFile: "",
      xinchenFile: "",
      comedetail: "",
      localaddressarea: "",
      scanStreet: "",
    };
  },
  methods: {
    //删除核酸照片
    delHesuan() {
      this.hesuanFile = "";
    },
    delSuma() {
      this.sumaFile = "";
    },
    delXinchen() {
      this.xinchenFile = "";
    },
    beforeRead(file) {
      if (file.type != "image/jpeg" && file.type != "image/png") {
        Toast("请上传jpg格式或者png格式图片");
        return false;
      }
      return true;
    },
    //调用扫码接口
    getScanAddr(res) {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      let params = {
        qrcode: res,
      };
      this.$axios
        .get("/client/scanCodeInfo", { params })
        .then((res) => {
          console.log(res);
          if (res.data.success == false) {
            Toast.clear();
            Dialog.alert({
              message: res.data.message,
            }).then(() => {
              this.$router.replace("/");
            });
            return;
          }
          if (res.data.success == true) {
            this.scanArea = res.data.result.qzmc;
            this.scanAddr = res.data.result.address;
            if (res.data.result.sqmc) {
              this.scanStreet = res.data.result.sqmc;
            }
            Toast.clear();
            this.isScan = true;
            this.isShowAddAddr = false;
          }
        })
        .catch((err) => {
          Toast.clear();
          console.error(err);
          Dialog.alert({
            message: "接口调用失败",
          }).then(() => {});
          return;
        });
    },
    //获取扫码返回值
    getScanInfo() {
      let that = this;
      let ua = navigator.userAgent;
      let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isiOS) {
        this.$bridge.registerhandler(
          "getIOSQrResult",
          (data, responseCallback) => {
            var res = JSON.parse(data);
            console.log(res.key);
            responseCallback(data);
            that.getScanAddr(res.key);
          }
        );
      }
      let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
      if (isAndroid) {
        window["getResult"] = function (res) {
          console.log(res);
          that.getScanAddr(res);
        };
      }
    },
    //吊起相机扫码
    showScan() {
      this.liveArea = "";
      this.liveAddr = "";
      this.liveNum = "";
      this.scanAddr = "";
      this.scanStreet = "";
      this.scanBuchong = "";
      let ua = navigator.userAgent;
      let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      if (isiOS) {
        this.$bridge.callhandler("setIOSQr", (data) => {
          // 处理返回数据
          console.log(data, "我走了这里");
        });
      } else {
        JSON.parse(window.ServiceAddrInterface.setScanQr());
      }
    },
    //获取全量赋值
    async getAllInfo() {
      let res = await this.$axios.get("/client/getPassAllInfo");
      console.log(res);
      if (res.data.success == false) {
        Toast.clear();
        Dialog.alert({
          message: res.data.message,
        }).then(() => {});
        return;
      }
      if (res.data.success == true) {
        this.toType = res.data.result.comeway;
        this.checiNum = res.data.result.comedetail;
        this.chepaiNum = res.data.result.comedetail;
        this.otherType = res.data.result.comedetail;
        this.toTime = this.getYMDHMS(res.data.result.backtime);
        this.phone = res.data.result.telnum;
        this.hujiProvince = res.data.result.householdprovince;
        this.hujiCity = res.data.result.householdcity;
        this.hujiCounty = res.data.result.householdcounty;
        this.huji =
          res.data.result.householdprovince +
          res.data.result.householdcity +
          res.data.result.householdcounty;
        if (res.data.result.address != "") {
          this.isScan = true;
          this.scanArea = res.data.result.localaddressarea;
          this.scanAddr = res.data.result.address;
          this.scanBuchong = res.data.result.addressAdded;
        }
        if (res.data.result.address == "") {
          this.isShowAddAddr = true;
          this.liveArea = res.data.result.localaddressarea;
          this.liveAddr = res.data.result.localaddress;
          this.liveNum = res.data.result.localaddressinfo;
        }
        this.danweiAreaId = res.data.result.unitareaid;
        this.danweiName = res.data.result.unitname;
        this.danweiNameId = res.data.result.unitid;
        this.tujinProvince = res.data.result.routeprovince;
        this.tujinCity = res.data.result.routecity;
        this.tujinCounty = res.data.result.routecounty;
        this.tujinArea =
          res.data.result.routeprovince +
          res.data.result.routecity +
          res.data.result.routecounty;
        this.tujinAddr = res.data.result.routeinfo;
        this.isContact = res.data.result.riskexposure;
        this.isIll = res.data.result.malaise;
        this.temp = res.data.result.temperature;
        this.yimiao = res.data.result.yimiao;
        this.hasHesuan = res.data.result.hesuan;
        this.illList = res.data.result.malaiseinfo.split(",");
      }
    },
    //获取半量赋值
    async getHalfInfo() {
      let res = await this.$axios.get("/client/getPassAllInfo");
      console.log(res);
      if (res.data.success == false) {
        Toast.clear();
        Dialog.alert({
          message: res.data.message,
        }).then(() => {});
        return;
      }
      if (res.data.success == true) {
        this.toType = res.data.result.comeway;
        this.checiNum = res.data.result.comedetail;
        this.chepaiNum = res.data.result.comedetail;
        this.otherType = res.data.result.comedetail;
        this.toTime = this.getYMDHMS(res.data.result.backtime);
        this.phone = res.data.result.telnum;
        this.hujiProvince = res.data.result.householdprovince;
        this.hujiCity = res.data.result.householdcity;
        this.hujiCounty = res.data.result.householdcounty;
        this.huji =
          res.data.result.householdprovince +
          res.data.result.householdcity +
          res.data.result.householdcounty;
        console.log(this.huji);
        if (res.data.result.address != "") {
          this.isScan = true;
          this.scanArea = res.data.result.localaddressarea;
          this.scanAddr = res.data.result.address;
          this.scanBuchong = res.data.result.addressAdded;
        }
        if (res.data.result.address == "") {
          this.isShowAddAddr = true;
          this.liveArea = res.data.result.localaddressarea;
          this.liveAddr = res.data.result.localaddress;
          this.liveNum = res.data.result.localaddressinfo;
        }
        this.danweiAreaId = res.data.result.unitareaid;
        this.danweiName = res.data.result.unitname;
        this.danweiNameId = res.data.result.unitid;
        this.tujinProvince = res.data.result.routeprovince;
        this.tujinCity = res.data.result.routecity;
        this.tujinCounty = res.data.result.routecounty;
        this.tujinArea =
          res.data.result.routeprovince +
          res.data.result.routecity +
          res.data.result.routecounty;
        this.tujinAddr = res.data.result.routeinfo;
      }
    },

    //查询单位列表
    searchDanweiList(nameLike) {
      this.danweiNameConlumn = [];
      this.danweiNameList = this.allDanweiList.filter((v) => {
        if (v.enterprisename.includes(nameLike)) {
          this.danweiNameConlumn.push(v.enterprisename);
          return v;
        }
      });
      if (this.danweiNameConlumn.length != 0) {
        this.danweiNameSel = true;
      } else {
        this.danweiName = "";
        this.danweiNameSel = false;
      }
    },
    //获取信息
    async getInfo() {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        overlay: true,
      });
      // await this.getdanweiInfo();
      await this.getqiyeiInfo();
      Toast.clear();
    },

    //获取单位区镇信息
    async getdanweiInfo() {
      this.danweiAreaConlumn = [];
      let res = await this.$axios.post("/client/getEnterpriseArea");
      if (res.data.success == false) {
        Toast.clear();
        Dialog.alert({
          message: res.data.message,
        }).then(() => {});
        return;
      }
      if (res.data.success == true) {
        this.danweiAreaList = res.data.result;
        this.danweiAreaList.forEach((item) => {
          this.danweiAreaConlumn.push(item.depname);
        });
      }
    },
    //获取企业单位信息
    async getqiyeiInfo() {
      let res = await this.$axios.post("/client/getEnterpriserInfo");
      if (res.data.success == false) {
        Toast.clear();
        Dialog.alert({
          message: res.data.message,
        }).then(() => {});
        return;
      }
      if (res.data.success == true) {
        this.allDanweiList = res.data.result;
      }
    },
    //选择来昆方式
    confirmtoType(value) {
      this.toType = value;
      this.checiNum = "";
      this.chepaiNum = "";
      this.otherType = "";
      this.toTypeSel = false;
    },
    //选择来昆时间
    confirmToTime(value) {
      this.toTime = this.getYMDHMS(value);
      this.toTimeSel = false;
    },
    //选择户籍地
    confirmHuji(value) {
      if (value[2]) {
        this.hujiProvince = value[0].name;
        this.hujiCity = value[1].name;
        this.hujiCounty = value[2].name;
        this.huji = value[0].name + value[1].name + value[2].name;
      } else {
        this.hujiProvince = "海外";
        this.hujiCity = "海外";
        this.hujiCounty = "海外";
        this.huji = "海外";
      }
      this.hujiSel = false;
    },
    //点击手动添加
    showAdd() {
      this.liveArea = "";
      this.liveAddr = "";
      this.liveNum = "";
      this.scanAddr = "";
      this.scanStreet = "";
      this.scanBuchong = "";
      this.isScan = false;
      this.isShowAddAddr = true;
    },
    //选择居住区镇
    confirmliveArea(value) {
      this.liveArea = value;
      this.liveAreaSel = false;
    },
    //选择单位区镇
    confirmdanweiArea(value, index) {
      this.danweiArea = value;
      this.danweiAreaId = this.danweiAreaList[index].depid;
      this.danweiAreaSel = false;
    },
    //选择单位名称
    confirmdanweiName(value, index) {
      this.danweiName = value;
      this.danweiNameId = this.danweiNameList[index].enterpriseid;
      this.danweiAreaId = this.danweiNameList[index].deptid;
      this.danweiNameSel = false;
    },
    //选择途径
    confirmTujin(value) {
      console.log(value);
      if (value[2]) {
        this.tujinProvince = value[0].name;
        this.tujinCity = value[1].name;
        this.tujinCounty = value[2].name;
        this.tujinArea = value[0].name + value[1].name + value[2].name;
      } else {
        this.tujinProvince = "海外";
        this.tujinCity = "海外";
        this.tujinCounty = "海外";
        this.tujinArea = "海外";
      }

      this.tujinSel = false;
    },
    async afterReadHesuan(file) {
      let newFile = await doImg.compress(file.file, 300);
      this.hesuanFile = newFile.compressFile;
    },
    async afterReadSuma(file) {
      let newFile = await doImg.compress(file.file, 300);
      this.sumaFile = newFile.compressFile;
    },
    async afterReadXinchen(file) {
      let newFile = await doImg.compress(file.file, 300);
      this.xinchenFile = newFile.compressFile;
    },
    //格式化日期
    getYMDHMS(timestamp) {
      let time = new Date(timestamp);
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let date = time.getDate();
      let hours = time.getHours();
      let minute = time.getMinutes();
      let second = time.getSeconds();

      if (month < 10) {
        month = "0" + month;
      }
      if (date < 10) {
        date = "0" + date;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      return year + "-" + month + "-" + date;
    },

    confirmhuAddr(value) {
      this.liveAddr = value;
      this.huAddrSel = false;
    },
    
    submit() {
      let regPhone = /^1[3-9]\d{9}$/;
      var creg =
        /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
      //新能源车
      var xreg =
        /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
      if (this.toType == "") {
        this.$toast("请选择来昆方式");
        return;
      }
      if (this.toType == "火车、高铁" && this.checiNum == "") {
        this.$toast("请填写车次号");
        return;
      }
      if (this.toType == "私家车") {
        if (!creg.test(this.chepaiNum) && !xreg.test(this.chepaiNum)) {
          this.$toast("请填写正确的车牌号");
          return;
        }
      }
      if (this.toType == "其他") {
        if (this.otherType == "") {
          this.$toast("请填写具体其他来昆方式");
          return;
        }
      }

      if (this.toTime == "") {
        this.$toast("请选择来昆时间");
        return;
      }
      if (!regPhone.test(this.phone)) {
        this.$toast("请填写正确的手机号码");
        return;
      }
      if (this.huji == "") {
        this.$toast("请选择户籍地");
        return;
      }
      if (!this.isShowAddAddr && !this.isScan) {
        this.$toast("请选择门牌扫码或手动添加地址");
        return;
      }
      if (this.isShowAddAddr == true) {
        if (this.liveArea == "") {
          this.$toast("请选择在昆住址");
          return;
        }
        if (this.liveAddr == "") {
          this.$toast("请填写所在小区或酒店名称");
          return;
        }
        if (this.liveNum == "") {
          this.$toast("请填写门牌或者房间号");
          return;
        }
      }
      if (this.danweiNameConlumn.length == 0) {
        if (this.danweiName == "") {
          this.$toast("请填写并选择单位名称");
          return;
        }
      }

      if (this.tujinArea == "") {
        this.$toast("请选择出发地");
        return;
      }
      if (this.tujinAddr == "") {
        this.$toast("请输入出发地详细信息");
        return;
      }
      if (this.isContact == "") {
        this.$toast("请选择近两周内是否接触过发热咳嗽的人员？");
        return;
      }
      if (this.isIll == "") {
        this.$toast("请选择是否有发热或咳嗽乏力等症状？");
        return;
      }
      if (this.isIll == 1 && this.illList.length == 0) {
        this.$toast("请选择至少一种具体症状");
        return;
      }

      if (Number(this.temp) > 46) {
        this.$toast("请填写正确的体温");
        return;
      }
      if (Number(this.temp) < 34) {
        this.$toast("请填写正确的体温");
        return;
      }
      if (this.yimiao == "") {
        this.$toast("请选择疫苗接种情况");
        return;
      }
      if (this.hasHesuan == "") {
        this.$toast("请选择是否持有48小时内核酸证明");
        return;
      }
      if (this.hasHesuan == 1) {
        if (this.hesuanFile == "") {
          this.$toast("请上传核酸检测阴性报告");
          return;
        }
      }
      if (this.sumaFile == "") {
        this.$toast("请上传苏康码截图");
        return;
      }
      if (this.xinchenFile == "") {
        this.$toast("请上传14天行程码截图");
        return;
      }
      if (this.cardType == "身份证") {
        this.cardType = 1;
      }
      if (this.cardType == "护照") {
        this.cardType = 2;
      }
      if (this.cardType == "港澳通行证") {
        this.cardType = 3;
      }
      if (this.cardType == "台胞证") {
        this.cardType = 4;
      }
      if (this.toType == "火车、高铁") {
        this.comedetail = this.checiNum;
      }
      if (this.toType == "私家车") {
        this.comedetail = this.chepaiNum;
      }
      if (this.toType == "其他") {
        this.comedetail = this.otherType;
      }

      if (this.isShowAddAddr == true) {
        this.localaddressarea = this.liveArea;
      }
      if (this.isScan == true) {
        this.localaddressarea = this.scanArea;
      }

      Toast.loading({
        message: "正在提交，请耐心等待...",
        forbidClick: true,
        overlay: true,
      });
      let formdata = new FormData();
      console.log(sessionStorage.getItem("sex"));
      if (sessionStorage.getItem("sex") == "男") {
        formdata.append("sex", 1);
      }
      if (sessionStorage.getItem("sex") == "女") {
        formdata.append("sex", 0);
      }
      formdata.append("fullname", this.name);
      formdata.append("idtype", this.cardType);
      formdata.append("idcard", this.certNo);
      formdata.append("telnum", this.phone);
      formdata.append("unitarea", this.danweiArea);
      formdata.append("unitareaid", this.danweiAreaId);
      formdata.append("unitid", this.danweiNameId);
      formdata.append("unitname", this.danweiName);
      formdata.append("householdprovince", this.hujiProvince);
      formdata.append("householdcity", this.hujiCity);
      formdata.append("householdcounty", this.hujiCounty);
      formdata.append("routeprovince", this.tujinProvince);
      formdata.append("routecity", this.tujinCity);
      formdata.append("routecounty", this.tujinCounty);
      formdata.append("routeinfo", this.tujinAddr);
      formdata.append("localaddressarea", this.localaddressarea);
      formdata.append("localaddress", this.liveAddr);
      formdata.append("localaddressinfo", this.liveNum);
      formdata.append("comeway", this.toType);
      formdata.append("comedetail", this.comedetail);
      formdata.append("riskexposure", this.isContact);
      formdata.append("malaise", this.isIll);
      formdata.append("malaiseinfo", this.illList.join(","));
      formdata.append("temperature", this.temp);
      formdata.append("yimiao", this.yimiao);
      formdata.append("hesuan", this.hasHesuan);
      formdata.append("sukangmaImg", this.sumaFile);
      formdata.append("xingchengmaImg", this.xinchenFile);
      if (this.hesuanFile != "") {
        formdata.append("hesuanImg", this.hesuanFile);
      }

      formdata.append("address", this.scanAddr);
      formdata.append("localaddressstreet", this.scanStreet);
      formdata.append("addressAdded", this.scanBuchong);
      formdata.append(
        "backtime",
        this.toTime + " " + "00" + ":" + "00" + ":" + "00"
      );
      this.$axios
        .post("/client/saveRegisterInfo", formdata, {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary = " + new Date().getTime(),
          },
        })
        .then((resPic) => {
          console.log(resPic);
          if (resPic.data.success == false) {
            Toast.clear();
            Dialog.alert({
              message: resPic.data.message,
            }).then(() => {});
            return;
          }
          if (resPic.data.success == true) {
            Toast.clear();
            this.$router.push({
              name: "checkPending",
            });
          }
        })
        .catch((err) => {
          Toast.clear();
          console.error(err);
          Dialog.alert({
            message: "接口调用失败",
          }).then(() => {});
          return;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./form.scss";
</style>