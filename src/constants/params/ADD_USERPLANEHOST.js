// 11.配置用户面本端IP
// ADD USERPLANEHOST : UPHOSTID = 0 , UPIPADDR = "172.28.3.77" , mode = "DEFAULT_MODE" ; 

export default {
	"title": "配置用户面本端IP",
	"type": "add",
	"params": [
		{
			"labelName": "用户面本端标识",
			"key": "UPHOSTID",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "用户面本端IP",
			"key": "UPIPADDR",
			"value": "172.28.3.77",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}



