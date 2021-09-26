//公共方法
//环境切换
// process.env.NODE_ENV == 'production'
// process.env.NODE_ENV == 'debug'
// process.env.NODE_ENV == 'development'
const dev = process.env.NODE_ENV != 'production' ? true : false
const TYPE_ARRAY =  [
  "Undefined",
  "Null",
  "Boolean",
  "Number",
  "String",
  "Symbol",
  "Function",
  "Array",
  "Object"
]
const getDataType = ()=> {
	const result = {}
	TYPE_ARRAY.forEach(item =>{
		result[`is${item}`] = value =>{
			return Object.prototype.toString.call(value) === `[object ${item}]`
		}
	})
	return result 
}

const utils = {
  dev: dev,
  api: dev ? "/proxyApi/api" : "/api",
  srcUrl: dev ? "/proxyApi/resources/images/" : "/resources/images/",
  //深拷贝
  clone(object) {
    return JSON.parse(JSON.stringify(object))
  },

  htmlDecode(text) {
    let temp = document.createElement("div")
    temp.innerHTML = text
    let output = temp.innerText || temp.textContent
    temp = null
    return output
  },

  formatData(obj) {
    if (typeof (obj) === "object") {
      if (Object.prototype.toString.call(obj) === "[object Object]") {
        for (let key of Object.keys(obj)) {
          if (typeof (obj[key]) === 'object') {
            this.formatData(obj[key])
          } else if (typeof (obj[key]) === 'string') {
            obj[key] = this.htmlDecode(obj[key])
          }
        }
      } else if (Object.prototype.toString.call(obj) === "[object Array]") {
        obj.forEach((item, index) => {
          if (typeof (item) === 'object') {
            this.formatData(item)
          } else if (typeof (obj[index]) === 'string') {
            obj[index] = this.htmlDecode(item)
          }
        })
      }
    }
    return obj
  },

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },

  // 数组排重
  getFilterArray(array) {
    let res = [];
    let json = {};
    for (let i = 0; i < array.length; i++) {
      let _self = array[i];
      if (!json[_self]) {
        res.push(_self);
        json[_self] = 1;
      }
    }
    return res;
  },

  //对象数组逆序
  arrayReverse(proArr) {
    let arr = []
    let length = proArr.length
    for (let i = length - 1; i >= 0; i--) {
      arr.push(proArr[i])
    }
    return arr
  },

  //并集
  union(arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    return [...new Set([...a, ...b])]
  },

  //交集
  intersect(arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    return [...new Set([...a].filter(x => b.has(x)))]
  },

  //差集
  diff(arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    return [...new Set([...a].filter(x => !b.has(x)))]
  },

  //二进制流下载
  //type为下载文件的类型
  blobDownloadFn(res, type) {
    var disp = res.request.getResponseHeader('Content-Disposition')
    var fileName = ""
    if (disp && disp.search('attachment') != -1) {
      var index = disp.indexOf("")
      var lastlndex = disp.lastlndexOf("")
      fileName = disp.substring(index + 1, lastlndex)
    }
    var eleLink = document.createElement('a')
    eleLink.download = fileName
    eleLink.style.display = 'none'
    //字符内容转变成blob地址
    if (!!type) {
      var blob = new Blob([res.data], { type: "application/" + type })
    } else {
      var blob = new Blob([res.data])
    }
    eleLink.href = URLcreateObjectURL(blob)
    //触发点击
    document.body.appendChild(eleLink)
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      window.navigator.msSaveOrOpenBlob(blob, eleLink.download)
    } else {
      eleLink.click()
    }
    //然后移除
    document.body.removeChild(eleLink)
  },


  blobDownloadFn2(url, tempName, paramsName = "") {
    /**
     * url 下载地址
     * paramsName 传参
     * tempName 下载模板名称
     * eg. blobDownloadFn2(url,"file_type=charging_rate_model","charging_rate_model")
     */
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded") //不加这句，那么后台Request.Form获取不到参数值
    if (!!paramsName) {
      xhr.send(paramsName)
    } else {
      xhr.send()
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          let res = xhr.response;
          let nowTime = formatData()
          let a = document.createElement("a")
          a.href = URL.createObjectURL(res)
          a.download = `${tempName}_${nowTime}`
          $("body").append(a)
          //触发点击
          document.body.appendChild(a)
          if (!!window.ActiveXObject || "ActiveXObject" in window) {
            window.navigator.msSaveOrOpenBlob(res, a.download)
          } else {
            eleLink.click()
          }
          //然后移除nih
          document.body.removeChild(a)
        }
      }
    }
  },


  //判断数据类型
  ...getDataType(),

  //判断字符长度
  lengthOf(str){
    if(!str) return 0
    const length = str.length
    let count = 0
    for (let i=0;i<length; i++){
      if(str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255){
        count += 2 //汉子2个字符
      }else{
        count +=1
      }
    }
    return count
  },

  //抽取数组里obj的key,组成arr，unique是否去重
	pluck(array,key,unique){
		if(Array.isArray(array)){
			let brr = array.map(item => item?item[key]:undefined )
			if(!!unique) return Array.from(new Set(brr))
			return brr
		}else{
			return []
		}
	}


}

export default utils;
