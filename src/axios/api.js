
/**
 * 解析api文件下所有的js,合并内容输出
*/
const apisContext = require.context('./modules/',true,/.js$/)
const apis = {}
apisContext.keys().forEach(api =>{
    let apiObj = apisContext(api).default
    Object.assign(apis,apiObj)
})
export default apis










