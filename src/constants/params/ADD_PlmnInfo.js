// 13.配置PLMN信息
// ADD PlmnInfo : PlmnIdx = 0 , mcc = "460" , mnc = "00" , CellReservedForOperatorUse = "NOT_RESERVED_FOR_OPERATOR" ; 
export default {
	"title": "配置PLMN信息",
	"type": "add",
	"params": [
		{
			"labelName": "PLMN索引",
			"key": "PlmnIdx",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "移动国家码",
			"key": "mcc",
			"value": "460",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "移动网络码",
			"key": "mnc",
			"value": "00",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}



