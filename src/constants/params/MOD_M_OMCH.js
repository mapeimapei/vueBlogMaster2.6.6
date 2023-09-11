// 24.配置omch
/*
MOD M_OMCH : id = 1 , portType = "static" , mOmchIp = "0.0.0.0" , port = 5740 ; 

*/
export default {
	"title": "配置omch",
	"type": "set",
	"params": [
		{
			"labelName": "标识",
			"key": "id",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "端口类型",
			"key": "portType",
			"value": null,
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "static",
					"label": "static"
				},
				{
					"value": "dhcp",
					"label": "dhcp"
				}
			]
		},
		{
			"labelName": "mOmch Ip地址",
			"key": "mOmchIp",
			"value": null,
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "端口号",
			"key": "port",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}