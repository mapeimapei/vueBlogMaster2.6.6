// 8.配置LBP配置
// ADD LBPCfg : slNum = 1 , cpriClockSrc = "REC_CLOCK" , partnerId = "GR" , rruType = "CPRI_RRU_TYPE_PARTNER" , fiber0IQMode = "BIT15" , fiber0AxCInterPut = "LOOSING" , fiber0AxCExterPut = "LOOSING" , fiber0CpriMode = "MASTER" , fiber0CpriRate = "G10" , fiber0IQCps = "Normal" , fiber1IQMode = "BIT15" , fiber1AxCInterPut = "LOOSING" , fiber1AxCExterPut = "LOOSING" , fiber1CpriMode = "MASTER" , fiber1CpriRate = "G10" , fiber1IQCps = "Normal" , fiber2IQMode = "BIT15" , fiber2AxCInterPut = "LOOSING" , fiber2AxCExterPut = "LOOSING" , fiber2CpriMode = "MASTER" , fiber2CpriRate = "G10" , fiber2IQCps = "Normal" , fiber3IQMode = "BIT15" , fiber3AxCInterPut = "LOOSING" , fiber3AxCExterPut = "LOOSING" , fiber3CpriMode = "MASTER" , fiber3CpriRate = "G10" , fiber3IQCps = "Normal" ; 
// cpriClockSrc  partnerId  rruType
export default {
	"title": "配置LBP配置",
	"type": "add",
	"params": [
		{
			"labelName": "cpri参考时钟源",
			"key": "cpriClockSrc",
			"value": "REC_CLOCK",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "BACK_BOARD",
					"label": "BACK_BOARD"
				},
				{
					"value": "REC_CLOCK",
					"label": "REC_CLOCK"
				}
			]
		},
		{
			"labelName": "合作方ID",
			"key": "partnerId",
			"value": "GR",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "RJ",
					"label": "RJ"
				},
				{
					"value": "STS",
					"label": "STS"
				},
				{
					"value": "XHS",
					"label": "XHS"
				},
				{
					"value": "LX",
					"label": "LX"
				},
				{
					"value": "GR",
					"label": "GR"
				},
				{
					"value": "HYT",
					"label": "HYT Server"
				}
			]
		},
		{
			"labelName": "RRU类型",
			"key": "rruType",
			"value": "CPRI_RRU_TYPE_PARTNER",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "CPRI_RRU_TYPE_PARTNER",
					"label": "CPRI_RRU_TYPE_PARTNER"
				},
				{
					"value": "CPRI_RRU_TYPE_HYT",
					"label": "CPRI_RRU_TYPE_HYT"
				}
			]
		}
	]
}