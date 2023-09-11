<template>
  <div class="articleBox formBox">
    <el-form ref="form" :model="allParams" label-width="150px" label-position="right">
      <el-row :gutter="20" v-for="(rowName,index) in Object.keys(allParams)" :key="'rowName'+index">
        <el-col :span="24">
          <h3 class="title">{{allParams[rowName].title}}：</h3>
        </el-col>
        <el-col :span="6" v-for="(params,ii) in allParams[rowName].params" :key="'params'+ii">
          <el-form-item :label="params.labelName">
            <el-input 
              v-if="params.inputType ==='input'"
              v-model="params.value" 
              :type="params.dataType"
              class="inputCss" 
              size="small"
            >
            </el-input>
            <el-select 
              v-if="params.inputType ==='select'"
              v-model="params.value" 
              class="selectCss" 
              size="small"
              placeholder="请选择"
            >
              <el-option
                v-for="item in params.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item class="submitBox">
        <el-button type="primary" @click="onSubmit">导出数据</el-button>
        <!-- <el-button type="primary" @click="replaceFn">replaceFn</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import FileSaver from 'file-saver'; //注意大小写


import { loadFile, unicodeToUtf8, obj2Param,formatDate,deepClone } from "@/constants/myFs.js"

import {version,allParams}  from "@/constants/params/index.js"

export default {
  name: "demo1",
  data() {
    return {
      fileUrl: `/static/${version}`,
      allParams: deepClone(allParams),
      allContent:"",
    }
  },

  methods: {

    // 写文件 并导出
    writeLocal() {
      let blob = new Blob([this.allContent], { type: 'text/plain;charset=utf-8' })
      let fileName = `${version}_${formatDate()}`
      FileSaver.saveAs(blob, fileName)
    },

    // 导出
    async onSubmit(){
      await this.replaceParmas()
      this.writeLocal()
    },

    //替换val 
    replaceParmas(){
      Object.keys(this.allParams).forEach(key =>{
        let paramsContents = this.getParamsContents(key)
        if(!paramsContents || paramsContents.length === 0) {
          console.log("setDefaultVal: "+ key + "未匹配到信息")
          return
        }
        let obj = this.allParams[key]
        let paramsArr = obj.params
        for(let i=0; i<paramsContents.length; i++){
          paramsArr.forEach(item =>{
            let label = item["key"]
            let val = item.dataType ==="string" ? `"${item.value}"`: item.value

            let prefix = key
            let reg =  new RegExp(`(?<=${prefix}.*?)${label} = .*?(?= )`,'g')
            let newStr = ` ${label} = ${val} `
            this.allContent = this.allContent.replace(reg,newStr)
          })
        }
      })
    },

    // 获取参数行信息
    getParamsContents(key){
      let reg = new RegExp(`${key} :.*?\;`,'g')
      let res = this.allContent.match(reg)
      return res
    },

    // 获取参数默认值
    getParamDefaultVal(ParamKey,str){
      let reg =  new RegExp(`${ParamKey} = .*?\ `,'g')
      let res = str.match(reg)
      if(!res || res.length === 0) {
        console.log("getDefaultVal: " + ParamKey + "未匹配到信息")
        return
      }
      let val = res[0].replace(ParamKey,'').replace("=","").replaceAll('"','').trim()
      return val
    },

    // 设置allParams默认值
    setDefaultVal(){
      Object.keys(this.allParams).forEach(key =>{
        let paramsContents = this.getParamsContents(key)

        if(!paramsContents || paramsContents.length === 0) {
          console.log("setDefaultVal: "+ key + "未匹配到信息")
          return
        }
        let curStr= paramsContents[0]
        let obj = this.allParams[key]
        let paramsArr = obj.params
        paramsArr.forEach(item =>{
          let label = item["key"]
          item.value = this.getParamDefaultVal(label,curStr)
        })
      })
    },

    // 读取文件，获取文件内容
    readFile() {
      const file = loadFile(this.fileUrl)
      this.allContent = unicodeToUtf8(file)
    },
    
    replaceFn(){
      let label = "ChNum"
      let prefix = "ADD BPB :"
      let reg =  new RegExp(`(?<=${prefix}.*?)${label} = .*?(?= )`,'g')
      // let res = this.demoStr.match(reg)
      // console.log(res)  
      // return 
      let val = 1212
      let newStr = `${label} = ${val}`
      this.demoStr = this.demoStr.replace(reg,newStr)
      console.log(this.demoStr)
    },


  },


  async mounted() {
    await this.readFile()
    this.setDefaultVal()

  }

}
</script>
<style scoped >
.formBox{ padding: 30px; background-color: #fff;}
.formBox .title{ font:normal 20px/30px "微软雅黑"; margin-bottom: 10px;}
.selectCss{ display: block;}



</style>

