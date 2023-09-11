// 读取文件
export const loadFile = (name)=> {
  const xhr = new XMLHttpRequest()
  const okStatus = document.location.protocol === 'file:' ? 0 : 200
  xhr.open('GET', name, false)
  xhr.overrideMimeType('text/html;charset=utf-8')
  // 默认为utf-8
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}
// unicode转utf-8
export const unicodeToUtf8 = (data)=> {
  data = data.replace(/\\/g, '%')
  return unescape(data)
}


export function obj2Param(params) {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = propName + "=";
    if (value !== null && value !== "" && typeof (value) !== "undefined") {
      result +=" , "+ part +'"'+ value+'"'
    }
  }
  result = result.replace(" , ","") + " ;"
  return result
}


/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}


export function formatDate() {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return year + month + day + hours + minutes + seconds
}





