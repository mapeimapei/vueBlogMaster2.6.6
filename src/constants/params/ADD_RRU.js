// 17.配置RRU配置
/* ADD RRU : shNum = 0 , chNum = 60 , slNum = 0 , rruName = "60" , rruType = "rru" , powerState = "PowerOn" , configState = "Configured" ,
 adminState = "UnLocked" , boardDesc = "60" , vswr1Thrhld = 30 , vswr2Thrhld = 20 , tempUPTHRHLD = 95 , tempDownTHRHLD = -40 , cpuCalcPriod = 120 , cascadeID = 1 , 
 rruCN = 0 , rruWorkMode = "FDD_LTE" , rxChNum = 2 , txChNum = 2 , accessDirection = "CONNECTHEAD" , transPwrLimit = 32767 , ch1BlockSwitch = "UNBLOCK" , 
 ch2BlockSwitch = "UNBLOCK" , ch3BlockSwitch = "UNBLOCK" , ch4BlockSwitch = "UNBLOCK" , ch5BlockSwitch = "UNBLOCK" , ch6BlockSwitch = "UNBLOCK" , 
 ch7BlockSwitch = "UNBLOCK" , ch8BlockSwitch = "UNBLOCK" ; 

chNum 框号
cascadeID 级联号
rruCN RRU链/环编号
rruWorkModeRRU 当前工作制式
PDT
TETRA
DMR
TDD_LTE
FDD_LTE
*/

export default {
	"title": "配置RRU配置",
	"type": "add",
	"params": [
		{
			"labelName": "框号",
			"key": "chNum",
			"value": 60,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "级联号",
			"key": "cascadeID",
			"value": 1,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "RRU链/环编号",
			"key": "rruCN",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "RRU当前工作制式",
			"key": "rruWorkMode",
			"value": "FDD_LTE",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "PDT",
					"label": "PDT"
				},
				{
					"value": "TETRA",
					"label": "TETRA"
				},
				{
					"value": "DMR",
					"label": "DMR"
				},
				{
					"value": "TDD_LTE",
					"label": "TDD_LTE"
				},
				{
					"value": "FDD_LTE",
					"label": "FDD_LTE"
				}
			]
		}
	]
}



