// 21.配置小区
/*
ADD Cell : CellId = 1 , SectorId = "0" , PhyCellId = 66 , DuplexingMode = "Fdd" , SubFrameAssignment = "SA1" , SpecialSubframePatterns = "SSP7" , 
FrameEdgeOffset = 0 , BandInd = 3 , UlEarfcn = 19350 , DlEarfcn = 1350 , MaxNumRRC = 400 , Bandwidth = "BW_N_100" , AntennaPortsCount = "AN2" , 
AntennaMode = "2T2R" , CellActiveState = "ACTIVE" , plmnidx = "0" , TaIdx = 0 , TimeAlignmentTimerCommon = "sf1920" , BusinessType = "Normal_Mode" , 
MaxUeNum = "UE_NUM400" , RruMode = "CHAIN_MODE" , DRXEnable = "FALSE" , RlfDelayTimer = 2000 , HoDelayTimer = 2000 ; 


*/
export default {
	"title": "配置小区",
	"type": "add",
	"params": [
		{
			"labelName": "RRU模式",
			"key": "RruMode",
			"value": "CHAIN_MODE",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "NORMAL_MODE",
					"label": "NORMAL_MODE"
				},
				{
					"value": "CHAIN_MODE",
					"label": "CHAIN_MODE"
				},
				{
					"value": "SPLIT_MODE",
					"label": "SPLIT_MODE"
				},
				{
					"value": "CHAIN_SPLIT_MODE",
					"label": "CHAIN_SPLIT_MODE"
				}
			]
		}
	]
}