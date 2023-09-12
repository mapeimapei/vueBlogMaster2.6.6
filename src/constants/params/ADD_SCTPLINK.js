// 12.配置SCTP链路  增加多
/* 
ADD SCTPLINK : SCTPID = 1 , LINKTYPE = "ASSOC_TYPE_S1_MASTER" , LOCIP = "172.28.3.77" , SECLOCIP = "0.0.0.0" , PEERIP = "172.28.3.219" ,
 SECPEERIP = "0.0.0.0" , PEERPORT = 36412 ,
 HBINTER = 1000 , MAXPATHRETR = 5 , MAXASSOCRETR = 6 , RTOINIT = 200 , RTOMAX = 400 , RTOMIN = 200 ,
 COOKIELIFE = 60000 , INITMAXATTEMPTS = 8 , INITMAXTIMEO = 0 , MAXINSTREAM = 10 , MAXOUTSTREAM = 10 , DESCRIPTION = "SCTPLINK" , 
 ACTIVESTATE = "ENABLE" ; 
*/

/**
SCTPID SCTP链路号

LINKTYPE  链路类型
LOCIP  本端第一个IP地址
PEERIP   对端第一个IP地址
SECPEERIP 对端第二个IP地址
PEERPORT  对端端口号
**/




export default {
	"title": "配置SCTP链路",
	"type": "add",
	"add": true,
	"params": [
		{
			"labelName": "SCTP链路号",
			"key": "SCTPID",
			"value": null,
			"dataType": "number",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "链路类型",
			"key": "LINKTYPE",
			"value": null,
			"dataType": "string",
			"inputType": "select",
			"reg": "0",
			"options": [
				{
					"value": "ASSOC_TYPE_S1_MASTER",
					"label": "ASSOC_TYPE_S1_MASTER"
				},
				{
					"value": "ASSOC_TYPE_S1_BACKUP",
					"label": "ASSOC_TYPE_S1_BACKUP"
				},
				{
					"value": "ASSOC_TYPE_S1_IOPS",
					"label": "ASSOC_TYPE_S1_IOPS"
				},
				{
					"value": "ASSOC_TYPE_X2",
					"label": "ASSOC_TYPE_X2"
				},
				{
					"value": "ASSOC_TYPE_M2_RRC",
					"label": "ASSOC_TYPE_M2_RRC"
				},
				{
					"value": "ASSOC_TYPE_M2_MCE",
					"label": "ASSOC_TYPE_M2_MCE"
				},
				{
					"value": "ASSOC_TYPE_M3_MCE",
					"label": "ASSOC_TYPE_M3_MCE"
				}
			]
		},
		{
			"labelName": "本端第一个IP地址",
			"key": "LOCIP",
			"value": null,
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "对端第一个IP地址",
			"key": "PEERIP",
			"value": null,
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "对端第二个IP地址",
			"key": "SECPEERIP",
			"value": null,
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		},
		{
			"labelName": "对端端口号",
			"key": "PEERPORT",
			"value": null,
			"dataType": "string",
			"inputType": "input",
			"reg": "0",
			"options": []
		}
	],
	"data":[]
}




