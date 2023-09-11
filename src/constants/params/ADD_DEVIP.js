// 9.配置设备IP地址
// ADD DEVIP : CN = 0 , SRN = 0 , PT = "ETHTRK" , PN = 1 , IP = "172.28.3.77" , MASK = "255.255.0.0" , VLAN = 1 ; 
export default {
	"title": "配置设备IP地址",
	"type": "add",
	"params": [
		{
			"labelName": "IP地址",
			"key": "IP",
			"value": "172.28.3.77",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "子网掩码",
			"key": "MASK",
			"value": "255.255.0.0",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}




