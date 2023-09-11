<template>
  <div class="articleBox fx-f1">

    <div>
      <input type="file" style="display: none" ref="input" @input="upload" >
      <el-button type="primary" @click="$refs.input.click()">上传文件</el-button>
    </div>
   



    <a :href="fileUrl">下载原始文件</a>

    <el-button type="primary" @click="readFile2">读取文件</el-button>
    <el-button type="primary" @click="writeLocal">writeLocal</el-button>

    <el-input v-model="labelName"></el-input>

    <el-button type="primary" @click="getLineName">getLineName</el-button>

    <div>{{curStr}}</div>

    <el-button type="primary" @click="getOldVal">getOldVal</el-button>
    


    <el-button type="primary" @click="replaceParmas">replaceParmas</el-button>


  </div>
</template>
<script>
import FileSaver from 'file-saver'; //注意大小写


import {loadFile,unicodeToUtf8,obj2Param} from "@/constants/myFs.js"


export default {
  name: "demo1",
  data() {
    return {
      fileUrl: "/static/244hublte",
      allContent:"",

      labelName:"ADD BPB",
      demoStr:`
ADD BPB : ShNum = 0 , ChNum = 0 , SlNum = 1 , Poweron = "PowerOn" , ConfigState = "Configured" , AdminState = "UnLocked" , BPBType = "LBP" , tempNcThreshd = 95 , tempCrThreshd = 100 , tempNrThreshd = 105 ; 
ADD LBPCfg : slNum = 1 , cpriClockSrc = "REC_CLOCK" , partnerId = "GR" , rruType = "CPRI_RRU_TYPE_PARTNER" , fiber0IQMode = "BIT15" , fiber0AxCInterPut = "LOOSING" , fiber0AxCExterPut = "LOOSING" , fiber0CpriMode = "MASTER" , fiber0CpriRate = "G10" , fiber0IQCps = "Normal" , fiber1IQMode = "BIT15" , fiber1AxCInterPut = "LOOSING" , fiber1AxCExterPut = "LOOSING" , fiber1CpriMode = "MASTER" , fiber1CpriRate = "G10" , fiber1IQCps = "Normal" , fiber2IQMode = "BIT15" , fiber2AxCInterPut = "LOOSING" , fiber2AxCExterPut = "LOOSING" , fiber2CpriMode = "MASTER" , fiber2CpriRate = "G10" , fiber2IQCps = "Normal" , fiber3IQMode = "BIT15" , fiber3AxCInterPut = "LOOSING" , fiber3AxCExterPut = "LOOSING" , fiber3CpriMode = "MASTER" , fiber3CpriRate = "G10" , fiber3IQCps = "Normal" ; 
ADD RRULINK : rruCN = 0 , TT = "CHAIN" , backMode = "COLD" , hShNum = 0 , hChNum = 0 , hSlNum = 1 , hPN = 1 , tShNum = 0 , tChNum = 0 , tSlNum = 1 , tPN = 1 , cpriRate = "G9G" , rruNum = 4 , actOptRecoverSwitch = "OFF" ; 
`,

    curStr:"" ,


    obj:{
      omch:{
        title:"配置omch",
        params:[
          {
            "labelName": "标识",
            "key": "",
            "value": 11,
            "dataType": "number,string",
            "inputType": "input,select",
            "reg": "0000000",
            "type": "mod,add",
            "option": [
              {
                "value": "选项1",
                "label": "黄金糕"
              }
            ]
          }
        ]
      }
    }
      



    }
  },

  methods: {


    upload(){
		  let blob= this.$refs.input.files[0]
		  console.log(blob)//文件对象到手

      let reader = new FileReader()
      //将上传的文件读取成text
      reader.onload = function () {
        console.log(reader.result,'reader');
      }
        
      reader.readAsText(blob)


	  },



    getLineName(){

      let reg =  new RegExp(`${this.labelName} :.*?\;`,'g')
      let res = this.demoStr.match(reg)
     

      this.curStr = res[0]

      console.log(this.curStr)
    },


    getOldVal(){

      let key = "ShNum"
      let reg =  new RegExp(`${key} = .*?\ `,'g')
      let res = this.curStr.match(reg)

      let str = res[0]

      let val = str.replace(key,'').replace("=","").replaceAll('"','').trim()
      console.log(typeof val)
    },




    replaceParmas(){

      let obj = {
        tempNrThreshd:91115,
        BPBType:"LBP"
      }

      let reg =  new RegExp(`tempNrThreshd = .*?\ `,'g')

      // let res = this.curStr.match(reg)
      // console.log(res)

      let newStr = `tempNrThreshd = ${obj.tempNrThreshd} `
      this.curStr = this.curStr.replace(reg,newStr)


    }, 







    replace(str){
      let reg =  new RegExp(`${this.labelName} :.*?\;`,'g')
      let result = this.demoStr.replace(reg,str)
      console.log(result)
    },




    readFile2() {
      const file = loadFile(this.fileUrl)
      this.allContent = unicodeToUtf8(file)
    },

    writeLocal() {
      let blob = new Blob([this.allContent], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(blob, 'open.text');
    },



  },

  mounted() {
  }

}
</script>
