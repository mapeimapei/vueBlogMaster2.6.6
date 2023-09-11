// 19.配置HUB拓扑
/*
ADD HUBTpy : hubTpyId = 0 , slNum = 1 , antMode = "2T2R" , hubCount = "4HUB" , hub1FiberNo = 0 , hub1Inx = 0 , hub2FiberNo = 1 , hub2Inx = 0 , hub3FiberNo = 2 , 
hub3Inx = 0 , hub4FiberNo = 3 , hub4Inx = 0 ; 

HUB拓扑索引 hubTpyId
slNum 槽号
antMode 天线模式  2T2R  4T4R
hubCount 单小区HUB数目


HUB1所在光口号 hub1FiberNo 
HUB1索引号 hub1Inx


*/
export default {
	"title": "配置HUB拓扑",
	"type": "add",
	"params": [
		{
			"labelName": "HUB拓扑索引",
			"key": "hubTpyId",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "槽号",
			"key": "slNum",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线模式",
			"key": "antMode",
			"value": null,
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "2T2R",
					"label": "2T2R"
				},
				{
					"value": "4T4R",
					"label": "4T4R"
				}
			]
		},
		{
			"labelName": "单小区HUB数目",
			"key": "hubCount",
			"value": null,
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "1HUB",
					"label": "1HUB"
				},
				{
					"value": "2HUB",
					"label": "2HUB"
				},
				{
					"value": "3HUB",
					"label": "3HUB"
				},
				{
					"value": "4HUB",
					"label": "4HUB"
				}
			]
		},
		{
			"labelName": "HUB1所在光口号",
			"key": "hub1FiberNo",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB1索引号",
			"key": "hub1Inx",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB2所在光口号",
			"key": "hub2FiberNo",
			"value": 1,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB2索引号",
			"key": "hub2Inx",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB3所在光口号",
			"key": "hub3FiberNo",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB3索引号",
			"key": "hub3Inx",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB4所在光口号",
			"key": "hub4FiberNo",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "HUB4索引号",
			"key": "hub4Inx",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}