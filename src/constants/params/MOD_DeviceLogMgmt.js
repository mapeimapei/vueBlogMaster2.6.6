// 22.配置tr069交互参数
/*
MOD DeviceLogMgmt : PeriodicUploadEnable = "Disable" , URL = "0.0.0.0" , Username = "username" , Password = "password" , PeriodicUploadInterval = 3600 ; 

URL 网管服务器URL
PeriodicUploadEnable 连接使能开关 Enable Disable
Username 连接用户名
Password 连接密码
PeriodicUploadInterval 周期上报时间间隔

*/
export default {
	"title": "配置RRU链环",
	"type": "set",
	"params": [
		{
			"labelName": "网管服务器URL",
			"key": "URL",
			"value": "",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "连接使能开关",
			"key": "PeriodicUploadEnable",
			"value": "Disable",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "Enable",
					"label": "Enable"
				},
				{
					"value": "Disable",
					"label": "Disable"
				}
			]
		},
		{
			"labelName": "连接用户名",
			"key": "Username",
			"value": "",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "连接密码",
			"key": "Password",
			"value": "",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "周期上报时间间隔",
			"key": "PeriodicUploadInterval",
			"value": 3600,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}