// 15.配置S1接口
// ADD S1Interface : S1InterfaceId = 0 , S1AssocId = 1 ; 
export default {
	"title": "配置S1接口",
	"type": "add",
	"params": [
		{
			"labelName": "S1接口标识",
			"key": "S1InterfaceId",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "S1偶联标识",
			"key": "S1AssocId",
			"value": 1,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}



