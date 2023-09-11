// 18.配置天线组
/*
ADD ANTGROUP : antGroupNo = 1 , antCount = "2ANT" , ant1shNum = 0 , ant1chNum = 60 , ant1slNum = 0 , ant1Port = "R0A" , ant1TRXMode = "TXRX_MODE" , ant2shNum = 0 ,
 ant2chNum = 60 , ant2slNum = 0 , ant2Port = "R0B" , ant2TRXMode = "TXRX_MODE" , ant3shNum = 0 , ant3chNum = 255 , ant3slNum = 0 , ant3Port = "R0C" , 
 ant3TRXMode = "TXRX_MODE" , ant4shNum = 0 , ant4chNum = 255 , ant4slNum = 0 , ant4Port = "R0D" , ant4TRXMode = "TXRX_MODE" , ant5shNum = 0 , ant5chNum = 255 , 
 ant5slNum = 0 , ant5Port = "R0E" , ant5TRXMode = "TXRX_MODE" , ant6shNum = 0 , ant6chNum = 255 , ant6slNum = 0 , ant6Port = "R0F" , ant6TRXMode = "TXRX_MODE" , 
 ant7shNum = 0 , ant7chNum = 255 , ant7slNum = 0 , ant7Port = "R0G" , ant7TRXMode = "TXRX_MODE" , ant8shNum = 0 , ant8chNum = 255 , ant8slNum = 0 , ant8Port = "R0H" , 
 ant8TRXMode = "TXRX_MODE" ; 

antGroupNo  天线组号
antCount 天线数
ant1chNum 天线1关联RRU框号
ant2chNum  天线2关联RRU框号


*/
export default {
	"title": "配置天线组",
	"type": "add",
	"params": [
		{
			"labelName": "天线组号",
			"key": "antGroupNo",
			"value": 1,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线数",
			"key": "antCount",
			"value": "4ANT",
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "1ANT",
					"label": "1ANT"
				},
				{
					"value": "2ANT",
					"label": "2ANT"
				},
				{
					"value": "3ANT",
					"label": "3ANT"
				},
				{
					"value": "4ANT",
					"label": "4ANT"
				},
				{
					"value": "5ANT",
					"label": "5ANT"
				},
				{
					"value": "6ANT",
					"label": "6ANT"
				},
				{
					"value": "7ANT",
					"label": "7ANT"
				},
				{
					"value": "8ANT",
					"label": "8ANT"
				}
			]
		},
		{
			"labelName": "天线1关联RRU框号",
			"key": "ant1chNum",
			"value": 60,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "天线2关联RRU框号",
			"key": "ant2chNum",
			"value": 60,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}