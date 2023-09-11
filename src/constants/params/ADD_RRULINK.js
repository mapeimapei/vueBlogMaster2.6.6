// 16.配置RRU链环
// ADD RRULINK : rruCN = 0 , TT = "CHAIN" , backMode = "COLD" , hShNum = 0 , hChNum = 0 , hSlNum = 1 , hPN = 1 , tShNum = 0 , tChNum = 0 , tSlNum = 1 , tPN = 1 , cpriRate = "G9G" , rruNum = 4 , actOptRecoverSwitch = "OFF" ; 

export default {
	"title": "配置RRU链环",
	"type": "add",
	"params": [
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
			"labelName": "RRU个数",
			"key": "rruNum",
			"value": 4,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}


