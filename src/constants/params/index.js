import MOD_EnodebCfg from './MOD_EnodebCfg'
import MOD_ClkSwitch from './MOD_ClkSwitch'
import ADD_LBPCfg from './ADD_LBPCfg'
import ADD_DEVIP from './ADD_DEVIP'
import ADD_SIGPLANEHOST from './ADD_SIGPLANEHOST'
import ADD_USERPLANEHOST from './ADD_USERPLANEHOST'
import ADD_SCTPLINK from './ADD_SCTPLINK'
import ADD_PlmnInfo from './ADD_PlmnInfo'
import ADD_Ta from './ADD_Ta'
import ADD_S1Interface from './ADD_S1Interface'
import ADD_RRULINK from './ADD_RRULINK'
import ADD_RRU from './ADD_RRU'
import ADD_ANTGROUP from './ADD_ANTGROUP'
import ADD_HUBTpy from './ADD_HUBTpy'
import ADD_SECTOR from './ADD_SECTOR'
import ADD_Cell from './ADD_Cell'
import MOD_DeviceLogMgmt from './MOD_DeviceLogMgmt'
import MOD_M_OMCH from './MOD_M_OMCH'

const allParams = {
	"MOD EnodebCfg":MOD_EnodebCfg, // 3.配置基站配置
	"MOD ClkSwitch":MOD_ClkSwitch, // 4.配置时钟源
	"ADD LBPCfg":ADD_LBPCfg, // 8.配置LBP配置
	"ADD DEVIP":ADD_DEVIP, // 9.配置设备IP地址
	"ADD SIGPLANEHOST":ADD_SIGPLANEHOST, // 10.配置信令面本端IP
	"ADD USERPLANEHOST":ADD_USERPLANEHOST, // 11.配置用户面本端IP
	"ADD SCTPLINK":ADD_SCTPLINK, // 12.配置SCTP链路  ++
	"ADD PlmnInfo":ADD_PlmnInfo, // 13.配置PLMN信息
	"ADD Ta":ADD_Ta, // 14.配置TA信息
	"ADD S1Interface":ADD_S1Interface, // 15.配置S1接口
	"ADD RRULINK":ADD_RRULINK, // 16.配置RRU链环
	"ADD RRU":ADD_RRU, // 17.配置RRU配置
	"ADD ANTGROUP":ADD_ANTGROUP, // 18.配置天线组
	"ADD HUBTpy":ADD_HUBTpy, // 19.配置HUB拓扑
	"ADD SECTOR":ADD_SECTOR, // 20.配置扇区
	"ADD Cell":ADD_Cell, // 21.配置小区
	"MOD DeviceLogMgmt":MOD_DeviceLogMgmt, // 22.配置tr069交互参数
	"MOD M_OMCH":MOD_M_OMCH, // 24.配置omch
}

const version = "OeNB_V3.0.09.08d"
// console.log(allParams)
export {version,allParams} 