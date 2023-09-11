// 10.配置信令面本端IP （默认一条，可增加，但先只做修改）
// ADD SIGPLANEHOST : SPHOSTID = 0 , LOCIP = "172.28.3.77" , SECLOCIP = "0.0.0.0" , PORTNUM = 36422 , HBINTER = 2000 , MAXPATHRETR = 5 , MAXASSOCRETR = 6 , RTOINIT = 200 , RTOMAX = 1000 , RTOMIN = 200 , COOKIELIFE = 60000 , INITMAXATTEMPTS = 8 , INITMAXTIMEO = 0 , MAXINSTREAM = 10 , MAXOUTSTREAM = 10 ; 
// SPHOSTID  LOCIP  PORTNUM

export default {
	"title": "配置信令面本端IP",
	"type": "mod",
	"params": [
		{
			"labelName": "信令面本端标识",
			"key": "SPHOSTID",
			"value": 0,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "信令面本端IP1",
			"key": "LOCIP",
			"value": "172.28.3.77",
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "信令面本端端口",
			"key": "PORTNUM",
			"value": 36422,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	]
}