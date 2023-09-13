<template>
  <div class="articleBox formBox">
    <el-form 
      v-if="setDefaultValDone"
      ref="form" 
      :model="allParams" 
      label-width="136px" 
      label-position="right"
    >
      <el-row class="mb20" :gutter="20" v-for="(rowName,index) in Object.keys(allParams)" :key="'rowName'+index">
        <el-col :span="24">
          <h3 class="title">
            {{allParams[rowName].title}}：
            <el-button 
              v-if="!!allParams[rowName].add" 
              class="btnCls"
              type="primary" 
              icon="el-icon-plus" 
              size="mini"
              @click="addData(rowName)"
            ></el-button>
            <el-button 
              v-if="!!allParams[rowName].add && allParams[rowName].data.length > 1" 
              class="btnCls"
              type="primary" 
              icon="el-icon-minus" 
              size="mini"
              @click="removeData(rowName)"
            ></el-button>
          </h3>
        </el-col>
        <template v-if="!!allParams[rowName].add">
          <el-col :span="24" class="addRowCls" v-for="(item,i) in allParams[rowName].data" :key="'item'+i">
            <el-col :span="6" v-for="(params,ii) in item" :key="'params'+ii">
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
          </el-col>
        </template>
        <template v-else>
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
        </template>
      </el-row>

      <el-form-item class="submitBox">
        <el-button type="primary" :loading="loading" @click="onSubmit">导出数据</el-button>
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
      allParams:null,
      allContent:"",
      setDefaultValDone:false,
      loading:false
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
    onSubmit(){
      this.loading = true
      setTimeout(async()=>{
        await this.replaceParmas()
        await this.writeLocal()
        this.loading = false
      })
    },

    // 替换mod类的数据
    replaceModParams(paramsContents,key){
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
    },

    // 替换add类的数据
    replaceAddParams(paramsContents,key){
      let obj = this.allParams[key]
      let str = ""
      for(let i=0; i<obj.data.length;i++){
        let paramsArr = obj.data[i]
        let oldStr = paramsContents[0]
        paramsArr.forEach(item =>{
          let label = item["key"]
          let val = item.dataType ==="string" ? `"${item.value}"`: item.value

          let prefix = key
          let reg =  new RegExp(`(?<=${prefix}.*?)${label} = .*?(?= )`,'g')
          let newStr = ` ${label} = ${val} `
          oldStr = oldStr.replace(reg,newStr)
        })
        str += oldStr + "\n"
      }
    
      let reg = new RegExp(`${key} :.*?\; `,'g')
      this.allContent = this.allContent.replace(reg,"#")
      this.allContent = this.allContent.replace(/#[\r\n]/g, "#")
      this.allContent = this.allContent.replace(/#+/g,str.replaceAll("  "," "))
    },

    //替换val 
    replaceParmas(){
      Object.keys(this.allParams).forEach(key =>{
        let paramsContents = this.getParamsContents(key)
        if(!paramsContents || paramsContents.length === 0) {
          console.log("setDefaultVal: "+ key + "未匹配到信息")
          return
        }
        if(!this.allParams[key].add){
          this.replaceModParams(paramsContents,key)
        }else{
          this.replaceAddParams(paramsContents,key)
        }
      })
    },

    // 获取参数行信息
    getParamsContents(key){
      let reg = new RegExp(`${key} :.*?\; `,'g')
      let res = this.allContent.match(reg)
      return res
    },

    // 获取参数默认值
    getParamDefaultVal(paramKey,str){
      let reg =  new RegExp(`${paramKey} = .*?\ `,'g')
      let res = str.match(reg)
      if(!res || res.length === 0) {
        console.log("getDefaultVal: " + paramKey + "未匹配到信息")
        return
      }
      let val = res[0].replace(paramKey,'').replace("=","").replaceAll('"','').trim()
      return val
    },

    // 处理mod 参数
    modParams(key){
      // 这里只做修改
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

    },

    // 删除按钮
    removeData(key){
      this.allParams[key].data.pop()
    },

    // 新增按钮
    addData(key){
      let item = deepClone(this.allParams[key].data[0]) 
      this.allParams[key].data.push(item)
    },

    // 添加参数
    addParams(key){
      let reg =  new RegExp(`${key} :.*?\;`,'g')
      let res = this.allContent.match(reg)
      res.forEach(curStr =>{
        let paramsArr = deepClone(this.allParams[key].params)
        paramsArr.forEach(item =>{
          let label = item["key"]
          item.value = this.getParamDefaultVal(label,curStr)
        })
        this.allParams[key].data.push(paramsArr)
      })
    },

    // 设置allParams默认值
    setDefaultVal(){
      this.allParams = deepClone(allParams)
      Object.keys(this.allParams).forEach(key =>{
        if(!this.allParams[key].add){
          this.modParams(key)
        }else{
          this.addParams(key)
        }
      })
      this.setDefaultValDone = true
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

.addRowCls{ margin-top: 10px; padding-top: 10px; background-color: #f1f1f1;}
.btnCls{padding: 7px;}
.mt20 { margin-top: 20px;}
.mb20 { margin-bottom: 20px;}
</style>

