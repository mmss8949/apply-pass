<template>
  <v-app>
    <v-main class="pa-3">
      <!--overlay-->
      <v-overlay :value="overlay">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
      <v-stepper
        alt-labels
        v-model="step"
      >
        <v-stepper-header>
          <v-stepper-step
            step="1"
            :complete="step > 1"
          >
            可申請車輛
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="2"
            :complete="step > 2"
          >
            同意書
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="3"
            :complete="step > 3"
          >
            申請項目
          </v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-step
            step="4"
            :complete="step > 4"
          >
            填寫資料
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <!--action-->
            <v-row
              no-gutters
              class="mb-2"
            >
              <v-spacer></v-spacer>
              <v-btn
                v-if="passData.button && passData.button.restrict_btn.rules.vshow==1"
                class="mr-2"
                color="error"
                outlined
                :disabled="passData.button && passData.button.restrict_btn.rules.disabled==1"
                @click="controllDialog(true,1,'','')"
              >
                違規紀錄
              </v-btn>
              <v-btn
                v-if="passData.button && passData.button.test_btn.rules.vshow==1"
                color="primary"
                :disabled="passData.button && passData.button.test_btn.rules.disabled==1"
                @click="nextStep(1)"
              >
                交通安全測驗
              </v-btn>
            </v-row>
            <!--data-->
            <v-hover
              v-slot="{ hover }"
              v-for="(item,index) in passData.vehicle_license_list"
              :key="index"
            >
              <v-row
                no-gutters
                class="row-border hover-bd-l-color py-lg-4 pr-lg-0 py-md-2 pr-md-0 py-5 pr-2 pl-2 mr-3"
              >
                <!-- plate number-->
                <v-col
                  lg="3"
                  md="3"
                  cols="12"
                >
                  <div :style="{'font-size':'30px','line-height':'40px','font-weight':hover?'bold':'normal'}">
                    {{item.info.plate_number}}
                  </div>
                </v-col>
                <!--info-->
                <v-col
                  lg="2"
                  md="2"
                  cols="4"
                >
                  <div
                    style="font-size: 23px;line-height:40px;"
                    class="d-flex pa-0 pr-3"
                  > {{item.info.brand }}</div>
                </v-col>
                <v-col
                  lg="1"
                  md="1"
                  cols="4"
                >
                  <div
                    style="font-size: 23px;line-height:40px;"
                    class="d-flex pa-0 pr-3"
                  > {{item.info.color }}</div>
                </v-col>
                <!--state-->
                <v-col
                  lg="1"
                  md="1"
                  cols="4"
                >
                  <div
                    style="font-size: 23px;line-height:40px;"
                    class="d-flex pa-0 pr-3"
                  > {{changeCategoryToString(item.info.vehicle_category) }}</div>
                </v-col>

                <!--action-->
                <v-col
                  lg="5"
                  md="5"
                  cols="12"
                  class="d-flex justify-end"
                >
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        size="35"
                        class="mr-7"
                        v-bind="attrs"
                        v-on="on"
                        :color="hover
                        ?item.app_restrictions.driver_license_pass=='1'
                          ?'black'
                          :'grey'
                        :'grey'"
                        @click="applyPassData(index,item)"
                        :style="item.app_restrictions.driver_license_pass=='1'
                        ?'cursor:pointer'
                        :'cursor:not-allowed'"
                      >mdi-clipboard-edit-outline </v-icon>
                    </template>
                    <span>申請</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-hover>
            <v-alert
              type="info"
              text
              v-if="passData && passData.vehicle_license_list && passData.vehicle_license_list.length==0"
            >
              無資料
            </v-alert>
          </v-stepper-content>
          <v-stepper-content step="2">
            <div v-if="passData.vehicle_license_list && passData.vehicle_license_list.length!=0">
              <div
                v-for="(item,index) in passData.vehicle_license_list[currentPassDataIndex].app_step"
                :key="index"
              >
                <div
                  v-if="index==currentPDFIndex"
                  class="mb-12"
                >
                  <v-card-title class="text-h5">
                    {{item.title}}
                  </v-card-title>
                  <v-card-text>
                    <v-row
                      no-gutters
                      justify="center"
                    >
                      <embed
                        width="100%"
                        height="800"
                        :src="testMode?'https://drive.google.com/viewerng/viewer?embedded=true&url=https://dev.dyu.edu.tw/dyupass/main/'+item.src:item.src"
                      >
                    </v-row>
                  </v-card-text>
                </div>
              </div>
            </div>
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="nextStep(1)"
              >
                上一步
              </v-btn>
              <v-btn
                color="primary"
                @click="nextPDF(currentPDFIndex)"
              >
                我已詳閱，並且同意
              </v-btn>

            </v-row>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-row
              no-gutters
              justify="space-between"
              align="center"
              class="mt-2"
            >
              <v-col
                class="d-flex"
                cols="5"
                sm="5"
              >
                <v-select
                  :items="years"
                  item-text="canapp_smye"
                  item-value="canapp_smye"
                  v-model="form.app_smye"
                  label="申請學年"
                  outlined
                ></v-select>
              </v-col>
              <v-col
                class="d-flex"
                cols="5"
                sm="5"
              >
                <v-select
                  :items="passes"
                  item-text="text"
                  item-value="value"
                  v-model="form.app_pass_type"
                  label="通行證類別"
                  outlined
                  :disabled="form.app_smye.length==0"
                ></v-select>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="prePDF()"
              >
                上一步
              </v-btn>
              <v-btn
                color="primary"
                @click="nextForm()"
              >
                下一步
              </v-btn>
            </v-row>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-row
              no-gutters
              class="text-h6 mb-2"
            >請確認申請項目</v-row>
            <v-form
              v-if="passData.vehicle_license_list && passData.vehicle_license_list.length!=0"
              lazy-validation
              readonly
              class="mt-2"
            >
              <v-row
                no-gutters
                justify="space-between"
              >
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-text-field
                    v-model="form.plate_number"
                    label="車號"
                    outlined
                    class="readonly-field"
                  ></v-text-field>
                </v-col>
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-select
                    :items="info.vehicle_category"
                    item-text="code_value"
                    item-value="code_no"
                    v-model="passData.vehicle_license_list[currentPassDataIndex].info.vehicle_category"
                    label="車子類別"
                    outlined
                    class="readonly-field"
                  ></v-select>

                </v-col>
              </v-row>
              <v-row
                no-gutters
                justify="space-between"
              >
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-select
                    :items="years"
                    item-text="canapp_smye"
                    item-value="canapp_smye"
                    v-model="form.app_smye"
                    label="申請學年"
                    outlined
                    class="readonly-field"
                  ></v-select>

                </v-col>
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-select
                    :items="passes"
                    item-text="text"
                    item-value="value"
                    v-model="form.app_pass_type"
                    label="通行證類別"
                    outlined
                    class="readonly-field"
                  ></v-select>
                </v-col>
              </v-row>
            </v-form>
            <v-row
              no-gutters
              class="text-h6 mb-2"
            >請填寫聯絡人資料</v-row>

            <v-form lazy-validation>
              <v-row
                no-gutters
                justify="space-between"
              >
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-text-field
                    v-model="form.app_uname"
                    label="*聯絡人姓名"
                    outlined
                    :rules="[form.rules.required]"
                  ></v-text-field>
                </v-col>
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-text-field
                    v-model="form.app_umail"
                    label="*聯絡人mail"
                    outlined
                    :rules="[form.rules.required,form.rules.email]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row
                no-gutters
                justify="space-between"
              >
                <v-col
                  lg="5"
                  cols="12"
                >
                  <v-text-field
                    v-model="form.app_cellphone"
                    label="*聯絡人手機"
                    outlined
                    :rules="[form.rules.required]"
                    maxlength="10"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="nextStep(3)"
              >
                上一步
              </v-btn>
              <v-btn
                color="primary"
                @click="postPassData"
              >
                送出
              </v-btn>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

      <v-dialog
        v-model="dialog.show"
        max-width="400"
      >
        <v-card v-if="dialog.index==0">
          <v-card-title class="text-h5">
            {{dialog.title}}
          </v-card-title>

          <v-card-text class="text-h6">
            {{dialog.msg}}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog.show = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card v-else-if="dialog.index==1">
          <v-card-title class="text-h5">
            違規紀錄
          </v-card-title>
          <v-card-text>
            <v-list-item
              class="px-0"
              three-line
              v-for="(item,index) in passData.button.restrict_btn.vr_data"
              :key="item+index"
            >
              <v-list-item-content>
                <v-list-item-title>{{item.vr_smye}}{{item.vr_smty}} - {{item.vr_penalty}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{item.vr_date}}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  {{item.vr_note}}
                </v-list-item-subtitle>

              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="controllDialog(false,0,'','')"
              >
                close
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
// import pdf from 'vue-pdf'

export default {
  name: "App",

  components: {},
  data: () => ({
    testMode: false,
    target: `gGroups_i=${gGroups}&gSys_s=${gSys_s}&gFunc_s=${gFunc_s}`,
    themeColor: "",
    overlay: false,
    step: 1,
    valid: true,
    passData: [],
    currentPassDataIndex: 0,
    currentPDFIndex: 0,
    completedData: [],
    notCompletedData: [],
    form: {
      app_smye: "",
      app_pass_type: "",
      plate_number: "",
      vehicle_category: "",
      app_uname: "",
      app_umail: "",
      app_cellphone: "",
      rules: {
        required: (value) => !!value || "Required.",
        symbol: (value) =>
          !/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(value) || "請不要輸入符號",
        upAndNumber: (value) => /^[A-Z\d]*$/.test(value) || "請輸入大寫與數字",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    },
    info: {
      app_pass_type: [],
      vr_data: [],
      vehicle_category: [],
      approval_status: [],
      violation_msg: [],
      alert_msg: [],
      driver_license_pass_msg: [],
    },
    dialog: {
      index: 0,
      show: false,
      title: "",
      msg: "",
    },
  }),
  created() {
    const self = this;
    if (location.href.indexOf("localhost") != -1 || location.href.indexOf("mmss8949") != -1) self.testMode = true;
    else self.testMode = false;
  },
  mounted() {
    const self = this;
    var getColor = () => {
      //text to hex
      var getHex = function (text) {
        var hex;
        switch (text) {
          case "blue":
            hex = "#3b5998";
            break;
          case "green":
            hex = "#098c6e";
            break;
          case "red":
            hex = "#b72e4a";
            break;
          case "highway":
            hex = "#c60";
            break;
          case "violet":
            hex = "#8b00ff";
            break;
        }
        return hex;
      };
      //conditional
      if (window.localStorage.getItem("_client_color")) {
        self.themeColor = getHex(window.localStorage.getItem("_client_color"));
      } else {
        self.themeColor = getHex(window.localStorage.getItem("_default_color"));
      }
    };
    //first call
    getColor();

    //add listener to local storage
    window.addEventListener("storage", () => {
      getColor();
    });

    //main porcess
    self.mainProcess();
  },
  updated() {
    const self = this;
    self.updateHeight();
  },
  computed: {
    years: function () {
      const self = this;
      var list = [];
      var currentTime = Date.now();
      if (
        self.passData.vehicle_license_list &&
        self.passData.vehicle_license_list.length != 0
      ) {
        //inital
        var restrictions =
          self.passData.vehicle_license_list[self.currentPassDataIndex]
            .app_restrictions;
        //list add
        restrictions.rules.forEach((element) => {
          var startTime = Date.parse(element.canapp_date_b);
          var endTime = Date.parse(element.canapp_date_e);
          if (startTime <= currentTime && endTime >= currentTime)
            list.push(element);
        });
      }
      return list;
    },
    passes: function () {
      const self = this;
      var list = [];
      var currentTime = Date.now();
      if (
        self.passData.vehicle_license_list &&
        self.passData.vehicle_license_list.length != 0 &&
        self.form.app_smye.length != 0
      ) {
        //list add
        self.years.forEach((element) => {
          var startTime = Date.parse(element.canapp_date_b);
          var endTime = Date.parse(element.canapp_date_e);
          if (
            startTime <= currentTime &&
            endTime >= currentTime &&
            element.canapp_smye == self.form.app_smye
          ) {
            var item = {};
            item.value = element.canapp_pass_type;
            var text = self.changePassTypeToString(element.canapp_pass_type);
            item.text = text.code_value;
            list.push(item);
          }
        });
      }
      return list;
    },
  },
  methods: {
    mainProcess: async function () {
      const self = this;
      try {
        var passInfo;
        var urlInfo;

        self.overlay = true;
        urlInfo = self.checkURL();
        passInfo = await self.getPassInfo();
        self.setPassInfo(passInfo);

        //get passData
        var passDataResult = await self.getPassData();
        if (passDataResult.result == 1) self.passData = passDataResult.data;
        else if (self.testMode) self.passData = passDataResult;
        else parent.sysDisplayMessage("", -1, "", "", null, passDataResult.msg);

        if (!self.testMode && urlInfo.state) {
          var index;

          self.changeMenu();
          index = self.passData.vehicle_license_list.findIndex(
            (element) => element.info.plate_number == urlInfo.value
          );
          if (index != -1)
            self.applyPassData(
              index,
              self.passData.vehicle_license_list[index]
            );
          else parent.sysDisplayMessage("", -1, "", "", null, "無相符車牌號碼");
        }
        self.overlay = false;
      } catch (error) {
        throw new Error(error);
      }
    },
    /**
     * stepper
     */
    nextStep: function (n) {
      const self = this;
      self.step = n;
    },
    prePDF: function () {
      const self = this;
      self.currentPDFIndex = 0;
      self.nextStep(2);
    },
    nextPDF: function (index) {
      const self = this;
      if (
        index <
        self.passData.vehicle_license_list[self.currentPassDataIndex].app_step
          .length -
          1
      )
        self.currentPDFIndex += 1;
      else {
        self.nextStep(3);
      }
    },
    nextForm: function () {
      const self = this;
      var state = false;
      state = self.checkApplyItem();
      if (!state) {
        self.controllDialog(true, 0, "Message", "請選擇申請項目");
      } else {
        self.setForm();
        self.nextStep(4);
      }
    },
    /**
     * dialog
     */

    controllDialog: function (state, index, title, msg) {
      const self = this;
      self.dialog.show = state;
      self.dialog.index = index;
      self.dialog.title = title;
      self.dialog.msg = msg;
    },
    /**
     * URL
     */
    getFullURL: function (url) {
      var fullURL = "";
      var googleURL =
        "https://drive.google.com/viewerng/viewer?embedded=true&url=";
      var path = window.location.href;
      var page = path.split("/").pop();
      var newPath = "";
      newPath = path.replace(page, "");
      fullURL = googleURL + newPath + url;
      return fullURL;
    },
    checkURL: function () {
      var url = new URL(location.href);
      var param = url.searchParams;
      var renewState = param.has("plate_number");
      var value = "";

      if (renewState) value = param.get("plate_number");

      return { state: renewState, value: value };
    },
    changeMenu: function () {
      var text = "通行證 > 我要申請";
      var element = parent.document.getElementsByClassName("locationText")[0];
      element.innerText = text;
    },
    /**
     * change text
     */
    changeCategoryToString: function (number) {
      const self = this;
      var index;
      var text = "";

      index = self.info.vehicle_category.findIndex(
        (item) => item.code_no == parseInt(number)
      );
      text = self.info.vehicle_category[index].code_value;
      return text;
    },
    changePassTypeToString: function (number) {
      const self = this;
      var text = "";
      text = self.info.app_pass_type.find((data) => number == data.code_no);
      return text;
    },

    /**
     * form
     */
    getForm: function () {
      const self = this;
      //inital
      var form = self.form;
      var item = {};
      item.plate_number = form.plate_number;
      item.vehicle_category = form.vehicle_category;
      item.app_smye = form.app_smye;
      item.app_pass_type = form.app_pass_type;
      item.app_uname = form.app_uname;
      item.app_umail = form.app_umail;
      item.app_cellphone = form.app_cellphone;
      return item;
    },
    setForm: function () {
      //inital
      const self = this;
      var form = self.form;
      var data = self.passData.vehicle_license_list[this.currentPassDataIndex];
      //data process
      form.plate_number = data.info.plate_number;
      form.vehicle_category = data.info.vehicle_category;
      form.app_uname = data.info.app_uname;
      form.app_umail = data.info.app_umail;
      form.app_cellphone = data.info.app_cellphone;
    },
    clearForm: function () {
      const self = this;
      var form = self.form;
      form.app_smye = "";
      form.app_pass_type = "";
      form.plate_number = "";
      form.vehicle_category = "";
      form.app_uname = "";
      form.app_umail = "";
      form.app_cellphone = "";
    },

    /**
     * check reule
     */
    checkApplyItem: function () {
      const self = this;
      var state = false;
      state =
        self.form.app_smye.length != 0 && self.form.app_pass_type.length != 0;
      return state;
    },
    checkForm: function () {
      //inital
      const self = this;
      var form = self.form;
      var requireState = false;
      var symbolState = false;
      var emailState = false;
      var rules = self.form.rules;

      requireState =
        rules.required(form.app_smye) == true &&
        rules.required(form.app_pass_type) == true &&
        rules.required(form.app_uname) == true &&
        rules.required(form.app_umail) == true &&
        rules.required(form.app_cellphone) == true;

      symbolState =
        rules.symbol(form.app_smye) == true &&
        rules.symbol(form.app_pass_type) == true &&
        rules.symbol(form.app_uname) == true &&
        rules.symbol(form.app_cellphone) == true;

      emailState = rules.email(form.app_umail) == true;
      console.log(requireState, symbolState, emailState);
      return requireState && symbolState && emailState;
    },
    /**
     * Data process
     */
    getPassData: function () {
      const self = this;
      return new Promise((resovle, reject) => {
        if (self.testMode)
          axios
            .get(
              "./dyupass_app/tools/json/dyupass_list_oci.json?" + Math.random()
            )
            .then((respones) => {
              resovle(respones.data.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-102"
              );
              reject(e);
            });
        else
          axios
            .get("../kernel/dyupass_app_list_oci.php?" + self.target)
            .then((respones) => {
              resovle(respones.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-102"
              );
              reject(e);
            });
      });
    },
    postPassData: function () {
      const self = this;
      self.overlay = true;
      var item;

      // save
      var checkState = self.checkForm();
      item = self.getForm();

      if (self.testMode) {
        if (checkState) console.log(item);
        else alert("field can't be empty or symbol");
        self.overlay = false;
      } else {
        if (checkState) {
          axios
            .post("../kernel/dyupass_appfrom_save.php?" + self.target, item)
            .then(async (respones) => {
              if (respones.data.result == 1) {
                parent.sysDisplayMessage("", 0, "", "", null, "新增成功");
                location.href = "./dyupass_apped_list.php?" + self.target;
              } else {
                parent.sysDisplayMessage(
                  "",
                  -1,
                  "",
                  "",
                  null,
                  "新增失敗: " + respones.data.msg
                );
              }
              self.overlay = false;
            })
            .catch((e) => console.log(e));
        } else {
          parent.sysDisplayMessage("", -1, "", "", null, "欄位有誤");
          self.overlay = false;
        }
      }
    },
    getPassInfo: function () {
      const self = this;
      return new Promise((resovle, reject) => {
        if (self.testMode)
          axios
            .get("./dyupass_app/tools/json/dyupass_tw.json?" + Math.random())
            .then((respones) => {
              resovle(respones.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-101"
              );
              reject(e);
            });
        else
          axios
            .get("../json/tw/dyupass_tw.json?" + Math.random())
            .then((respones) => {
              resovle(respones.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-101"
              );
              reject(e);
            });
      });
    },
    setPassInfo: function (data) {
      const self = this;
      self.info.app_pass_type = data.app_pass_type;
      self.info.vr_data = data.vr_data;
      self.info.vehicle_category = data.vehicle_category;
      self.info.approval_status = data.approval_status;
      self.info.violation_msg = data.violation_msg;
      self.info.alert_msg = data.alert_msg;
      self.info.driver_license_pass_msg = data.driver_license_pass_msg;
    },
    applyPassData: function (index, item) {
      const self = this;
      if (item.app_restrictions.driver_license_pass == "1") {
        self.currentPassDataIndex = index;
        self.nextStep(2);
      } else {
        if (item.app_restrictions.driver_license_pass_msg) {
          var text = "";
          var msg = "";
          msg = self.info.driver_license_pass_msg.find(
            (el) =>
              parseInt(item.app_restrictions.driver_license_pass_msg) ==
              el.code_no
          );
          text = msg.code_value;
          self.controllDialog(true, 0, "Message", text);
        }
      }
    },
    /**
     * others
     * */
    //更新視窗高度
    updateHeight: function () {
      const self = this;
      self.$nextTick(() => {
        setTimeout(() => {
          if (document.getElementById("app").scrollHeight > 900) {
            var windowHeight = document.body.scrollHeight + 1;
            window.parent.postMessage(
              '{"event": "changeHeight", "value": ' + windowHeight + "}",
              "*"
            );
          }
        }, 1000);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.row-border {
  height: var(--test);
  border-bottom: 1px solid #d8d8d8;
  position: relative;
  &:hover {
    -webkit-box-shadow: 4px 4px 8px #5a5a5a;
    box-shadow: 4px 4px 8px #5a5a5a;
    background-color: #fff;
    color: #000 !important;
    border-left: 5px solid red;
    transition: 400ms;
    .process-state {
      font-weight: bold;
    }
  }
  .icon {
    color: grey;
    &:hover {
      color: black;
    }
  }
}

.readonly-field {
  ::v-deep .v-input__slot {
    cursor: not-allowed !important;
  }
  ::v-deep input {
    cursor: not-allowed !important;
  }
}
</style>