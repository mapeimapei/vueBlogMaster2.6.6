<template>
  <div class="articleBox fx-f1">


    <a :href="fileUrl">下载原始文件</a>

    <el-button type="primary" @click="readFile2">读取文件</el-button>
    <el-button type="primary" @click="writeLocal">writeLocal</el-button>

    <el-input v-model="labelName"></el-input>

    <el-button type="primary" @click="getLineName">getLineName</el-button>

    <el-button type="primary" @click="getParams">getParams</el-button>


    <el-button type="primary" @click="replaceFn">replaceFn</el-button>


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
ADD BPB : ShNum = 0 , ChNum = 0 , SlNum = 1 , Poweron = "PowerOn" , ConfigState = "Configured" , AdminState = "UnLocked" , BPBType = "LBP" , tempNcThreshd = 95 , tempCrThreshd = 100 , tempNrThreshd = 105 ; 
ADD XXX : ShNum = 0 , ChNum = 0 , SlNum = 1 , Poweron = "PowerOn" , ConfigState = "Configured" , AdminState = "UnLocked" , BPBType = "LBP" , tempNcThreshd = 95 , tempCrThreshd = 100 , tempNrThreshd = 105 ; 
ADD LBPCfg : slNum = 1 , cpriClockSrc = "REC_CLOCK" , partnerId = "GR" , rruType = "CPRI_RRU_TYPE_PARTNER" , fiber0IQMode = "BIT15" , fiber0AxCInterPut = "LOOSING" , fiber0AxCExterPut = "LOOSING" , fiber0CpriMode = "MASTER" , fiber0CpriRate = "G10" , fiber0IQCps = "Normal" , fiber1IQMode = "BIT15" , fiber1AxCInterPut = "LOOSING" , fiber1AxCExterPut = "LOOSING" , fiber1CpriMode = "MASTER" , fiber1CpriRate = "G10" , fiber1IQCps = "Normal" , fiber2IQMode = "BIT15" , fiber2AxCInterPut = "LOOSING" , fiber2AxCExterPut = "LOOSING" , fiber2CpriMode = "MASTER" , fiber2CpriRate = "G10" , fiber2IQCps = "Normal" , fiber3IQMode = "BIT15" , fiber3AxCInterPut = "LOOSING" , fiber3AxCExterPut = "LOOSING" , fiber3CpriMode = "MASTER" , fiber3CpriRate = "G10" , fiber3IQCps = "Normal" ; 
ADD RRULINK : rruCN = 0 , TT = "CHAIN" , backMode = "COLD" , hShNum = 0 , hChNum = 0 , hSlNum = 1 , hPN = 1 , tShNum = 0 , tChNum = 0 , tSlNum = 1 , tPN = 1 , cpriRate = "G9G" , rruNum = 4 , actOptRecoverSwitch = "OFF" ; 
`,

    curStr:"" 
      



    }
  },

  methods: {

    replaceFn(){
      let label = "ChNum"
      let prefix = "ADD BPB :"
      //let reg =  new RegExp(`(${cc} .*? )${label} = .*?\ `,'g')
      let reg =  new RegExp(`(?<=${prefix}.*?)${label} = .*?(?= )`,'g')



      // let res = this.demoStr.match(reg)
      // console.log(res)
      
      // return 
      let val = 1212
      let newStr = `${label} = ${val}`
      this.demoStr = this.demoStr.replace(reg,newStr)

      console.log(this.demoStr)



    },



    getLineName(){

      //console.log(this.demoStr)

      //let reg = /\ADD LBPCfg :.*?\;/g

      let reg =  new RegExp(`${this.labelName} :.*?\;`,'g')
      let res = this.demoStr.match(reg)
      console.log(res)

      this.curStr = res[0].replace(`${this.labelName} :`,"").replace(';',"").replaceAll(" ","").replaceAll('"',"")

      this.getParams(this.curStr)


    },

    getParams(str){
      const searchArr = str.split(',')
      console.log(searchArr)
      const obj = {}
      searchArr.forEach(v => {
        //let v = vv.replaceAll(" ","").replaceAll('"',"")
        const index = v.indexOf('=')
        if (index !== -1) {
          const name = v.substring(0, index)
          const val = v.substring(index + 1, v.length)
          obj[name] = val
        }
      })
      obj["ccccccccccccc"] = 1212121212

      console.log("obj",obj)


      this.replace(obj2Param(obj))
    },


    replace(str){


      console.log("str",str)

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
