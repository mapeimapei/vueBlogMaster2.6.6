// 4.配置时钟源
// MOD ClkSwitch : ClkSrcSelectSwitch = "UserConfig" , ClockSrc = "Gnss" , ClkOffsetCoarAdj = 0 , ClkOffsetPreciAdj = 0 , HoldOverThreshold = 2 ; 
export default {
	"title": "配置时钟源",
	"type": "mod",
	"params": [
		{
			"labelName": "eNodeb标识",
			"key": "ClockSrc",
			"value": null,
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "FreeRun",
					"label": "FreeRun"
				},
				{
					"value": "Gnss",
					"label": "Gnss"
				},
				{
					"value": "PTP",
					"label": "PTP"
				}
			]
		}
	]
}



