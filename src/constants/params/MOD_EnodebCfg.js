// 3.配置基站配置
// MOD EnodebCfg : EnodebId = 24 , EnodebName = "Bingo24" ; 
export default {
	"title": "配置基站配置",
	"type": "mod",
	"params": [
		{
			"labelName": "eNodeb标识",
			"key": "EnodebId",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "eNodeb名字",
			"key": "EnodebName",
			"value": null,
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}