// 20.配置扇区
/*
ADD SECTOR : sectorID = 0 , sectorMode = "HubTpy" , hubTpyId = 0 , antGroupNum = "4ANTG" , antGroup1 = 1 , antGroup2 = 2 , 
antGroup3 = 3 , antGroup4 = 4 , antGroup5 = 255 , antGroup6 = 255 , antGroup7 = 255 , 
antGroup8 = 255 , carrierNum = 1 , maxBandwidth = "BW_N_NULL" ; 

*/

export default {
	"title": "配置扇区",
	"type": "add",
	"params": [
		{
			"labelName": "扇区号",
			"key": "sectorID",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "扇区模式",
			"key": "sectorMode",
			"value": "HubTpy",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "HubTpy",
					"label": "HubTpy"
				},
				{
					"value": "AntGroup",
					"label": "AntGroup"
				}
			]
		},
		{
			"labelName": "HUB拓扑编号",
			"key": "hubTpyId",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线组数",
			"key": "antGroupNum",
			"value": "4ANTG",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": [
				{
					"value": "1ANTG",
					"label": "1ANTG"
				},
				{
					"value": "2ANTG",
					"label": "2ANTG"
				},
				{
					"value": "3ANTG",
					"label": "3ANTG"
				},
				{
					"value": "4ANTG",
					"label": "4ANTG"
				},
				{
					"value": "5ANTG",
					"label": "5ANTG"
				},
				{
					"value": "6ANTG",
					"label": "6ANTG"
				},
				{
					"value": "7ANTG",
					"label": "7ANTG"
				},
				{
					"value": "8ANTG",
					"label": "8ANTG"
				}
			]
		},
		{
			"labelName": "天线组1编号",
			"key": "antGroup1",
			"value": 1,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线组2编号",
			"key": "antGroup2",
			"value": 2,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线组3编号",
			"key": "antGroup3",
			"value": 3,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线组4编号",
			"key": "antGroup4",
			"value": 4,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}