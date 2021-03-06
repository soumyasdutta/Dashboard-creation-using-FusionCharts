
    var dc1_1 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol1-1',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "TODAY",
                "captionFontColor": "#00e6b8",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "numberPrefix": "$",                
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "5,201 Steps",
                "centerLabel": "5,201 Steps", 
                "centerLabelColor":"#00e6b8",  
                "centerLabelFontSize":"48",             
                "theme": "fint",
                "doughnutRadius":"110",
                "enableSmartLabels":"0",
                "chartLeftMargin":"5",
                "chartRightMargin":"5",
                "chartBottomMargin":"40",
                "canvasBorderAlpha":"80",
                "showToolTip":"0"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#00e6b8"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],

            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-label-bg",
                              "type": "text",
                              "text" : "2,799 STEPS TO GO",
                              "color" : "#00e6b8",
                              "fontSize" : "14",
                              //"showBorder": "1",
                              //"borderColor": "#00e6b8",
                              "x": "$canvasEndX-200",
                              "y": "$canvasEndY"
                          },{
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#00e6b8",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc1_2 = new FusionCharts({
        type: 'column2d',
        renderAt: 'cont-vcol1-2',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "outCnvBaseFontColor": "#33ffff",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
                "showYAxisLine":"0",
                "showYAxisValues":"0",
                "showValues":"0",
                "plotSpacePercent":"80",
                "bgAlpha":"100",
                "canvasBgAlpha":"0",
                "canvasBgColor":"#0d0d0d",
                "divLineAlpha":"80",
                "divLineColor":"#0d0d0d",
                "canvasBorderAlpha":"80"
            },            
            "data": [
           
                {
                  "label": "01/04/2016",
                  "value": "420",
                   "color":"#45BDCE"
                  
              }, 
              {
                  "label": "02/04/2016",
                  "value": "810",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "03/04/2016",
                  "value": "720",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "04/04/2016",
                  "value": "550",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "05/04/2016",
                  "value": "910",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "06/04/2016",
                  "value": "510",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "07/04/2016",
                  "value": "680",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "08/04/2016",
                  "value": "620",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "09/04/2016",
                  "value": "610",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "10/04/2016",
                  "value": "290",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "11/04/2016",
                  "value": "900",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "12/04/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "13/04/2016",
                  "value": "734",
                   "color":"#aee3ea"
              },
{
                  "label": "14/04/2016",
                  "value": "700",
                   "color":"#aee3ea"
              },
{
                  "label": "15/04/2016",
                  "value": "710",
                   "color":"#aee3ea"
              },
{
                  "label": "16/04/2016",
                  "value": "911",
                   "color":"#aee3ea"
              },
{
                  "label": "17/04/2016",
                  "value": "764",
                   "color":"#aee3ea"
              },
{
                  "label": "18/04/2016",
                  "value": "239",
                   "color":"#45BDCE"
              },
{
                  "label": "19/04/2016",
                  "value": "198",
                   "color":"#45BDCE"
              },
{
                  "label": "20/04/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "21/04/2016",
                  "value": "778",
                   "color":"#aee3ea"
              },
{
                  "label": "22/04/2016",
                  "value": "567",
                   "color":"#45BDCE"
              },
{
                  "label": "23/04/2016",
                  "value": "444",
                   "color":"#45BDCE"
              },
{
                  "label": "24/04/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "25/04/2016",
                  "value": "123",
                   "color":"#45BDCE"
              },
{
                  "label": "26/04/2016",
                  "value": "987",
                   "color":"#aee3ea"
              },
{
                  "label": "27/04/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "28/04/2016",
                  "value": "345",
                   "color":"#45BDCE"
              },
{
                  "label": "29/04/2016",
                  "value": "667",
                   "color":"#45BDCE"
              },
{
                  "label": "30/04/2016",
                  "value": "530",
                   "color":"#45BDCE"
              },
              {
                  "label": "01/05/2016",
                  "value": "420",
                   "color":"#45BDCE"
                  
              }, 
              {
                  "label": "02/05/2016",
                  "value": "810",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "03/05/2016",
                  "value": "720",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "05/05/2016",
                  "value": "550",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "05/05/2016",
                  "value": "910",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "06/05/2016",
                  "value": "510",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "07/05/2016",
                  "value": "680",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "08/05/2016",
                  "value": "620",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "09/05/2016",
                  "value": "610",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "10/05/2016",
                  "value": "290",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "11/05/2016",
                  "value": "900",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "12/05/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "13/05/2016",
                  "value": "734",
                   "color":"#aee3ea"
              },
{
                  "label": "14/05/2016",
                  "value": "700",
                   "color":"#aee3ea"
              },
{
                  "label": "15/05/2016",
                  "value": "710",
                   "color":"#aee3ea"
              },
{
                  "label": "16/05/2016",
                  "value": "911",
                   "color":"#aee3ea"
              },
{
                  "label": "17/05/2016",
                  "value": "764",
                   "color":"#aee3ea"
              },
{
                  "label": "18/05/2016",
                  "value": "239",
                   "color":"#45BDCE"
              },
{
                  "label": "19/05/2016",
                  "value": "198",
                   "color":"#45BDCE"
              },
{
                  "label": "20/05/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "21/05/2016",
                  "value": "778",
                   "color":"#aee3ea"
              },
{
                  "label": "22/05/2016",
                  "value": "567",
                   "color":"#45BDCE"
              },
{
                  "label": "23/05/2016",
                  "value": "444",
                   "color":"#45BDCE"
              },
{
                  "label": "24/05/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "25/05/2016",
                  "value": "123",
                   "color":"#45BDCE"
              },
{
                  "label": "26/05/2016",
                  "value": "987",
                   "color":"#aee3ea"
              },
{
                  "label": "27/05/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "28/05/2016",
                  "value": "345",
                   "color":"#45BDCE"
              },
{
                  "label": "29/05/2016",
                  "value": "667",
                   "color":"#45BDCE"
              },
{
                  "label": "30/05/2016",
                  "value": "530",
                   "color":"#45BDCE"
              }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "700",
                            "color": "#1aaf5d",
                            "valueOnRight": "1",
                            "displayvalue": "Monthly Target"
                        }
                    ]
                }
            ]
        }
    });

    var dc2_1 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol2-1',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Steps",
                "captionFontColor" : "#45BDCE",
                //"captionHorizontalPadding": "20",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "numberPrefix": "$",                
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "5,201 Steps",
                "centerLabel": "5,201 Steps", 
                "centerLabelColor" :"#45BDCE",
                "centerLabelFontSize":"20",             
                "theme": "fint",
                "doughnutRadius":"54",
                "enableSmartLabels":"0",
                "canvasBorderAlpha":"80",
                "showToolTip":"0"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#45BDCE"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#45BDCE",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc2_2 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol2-2',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "DISTANCE",
                "captionFontColor" : "#e68a00",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                          
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "3.12 Km",
                "centerLabel": "3.12 Km",                
                "centerLabelColor":"#e68a00",
                "centerLabelFontSize":"20",
                "doughnutRadius":"54",
                "enableSmartLabels":"0",
                "canvasBorderAlpha":"80",
                "showToolTip":"0"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#e68a00"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#e68a00",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc2_3 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol2-3',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "ACTIVE CALORIES",
                "captionFontColor" : "#ff4d4d",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                           
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "347 Kcl",
                "centerLabel": "347 Kcl",                
                "centerLabelColor":"#ff4d4d",
                "centerLabelFontSize":"20",
                "doughnutRadius":"54",
                "enableSmartLabels":"0",
                "canvasBorderAlpha":"80",
                "showToolTip":"0"

               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#ff4d4d"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#ff4d4d",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc2_4 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol2-4',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "FOOD",
                "captionFontColor" : "#00e600",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",        
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "1,500 Kcl",
                "centerLabel": "1,500 Kcl",                
               "centerLabelColor":"#00e600",
               "centerLabelFontSize":"20",
               "showToolTip":"0",
                "doughnutRadius":"54",
                "enableSmartLabels":"0",
                "canvasBorderAlpha":"80"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#00e600"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#00e600",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc2_5 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol2-5',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "WEIGHT",
                "captionFontColor" : "#1a1aff",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "numberPrefix": "$",                
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "65.5 KG",
                "centerLabel": "65.5 KG",  
                "centerLabelColor":"#1a1aff",
                "centerLabelFontSize":"20",
                "showToolTip":"0",              
                "theme": "fint",
                "doughnutRadius":"54",
                "enableSmartLabels":"0",
                "canvasBorderAlpha":"80"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#1a1aff",
                "alpha": "80"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#1a1aff",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc2_6 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol2-6',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "BODY FAT",
                "captionFontColor" : "#45BDCE",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                          
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "21.6 %",
                "centerLabel": "21.6 %",                
               "centerLabelColor":"#45BDCE",
               "centerLabelFontSize":"20",
               "showToolTip":"0",
                "doughnutRadius":"54",
                "enableSmartLabels":"0",
                "canvasBorderAlpha":"80"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#45BDCE"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#45BDCE",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc3_1 = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'cont-vcol3-1',
        width: '100%',
        height: '100%',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "TODAY",
                "captionFontColor" : "#00e6b8",
                "showLabels": "0",
                "showValues": "0",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "numberPrefix": "$",                
                "startingAngle": "190",
                "decimals": "0",                
                "defaultCenterLabel": "65.5 KG",
                "centerLabel": "65.5 Kg",
                "centerLabelColor":"#00e6b8",
                "centerLabelFontSize":"48",
                "showToolTip":"0",                
                "theme": "fint",
                "doughnutRadius":"110",
                "enableSmartLabels":"0",
                "chartBottomMargin":"40",
                "canvasBorderAlpha":"80"
               
            },
            "data": [{
                "label": "Food",
                "value": "28504",
                "color":"#00e6b8"
            }, {
                "label": "Apparels",
                "value": "14633",
                "color":"#3d5c5c",
                "alpha": "50"
            }],
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-label-bg",
                              "type": "text",
                              "text" : "This is a text annotation.",
                              "color" : "#00e6b8",
                              "fontSize" : "14",
                              //"showBorder": "1",
                              //"borderColor": "#00e6b8",
                              "x": "$canvasEndX-200",
                              "y": "$canvasEndY"
                          },{
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#00e6b8",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            },
            "annotations": {
                  "showBelow" : "0",
                  "width": "500",
                  "height": "100",
                  "autoScale": "1",
                  "groups": [
                  {
                      "id": "user-images",
                      "items": [
                          {
                              "id": "dyn-line",
                              "type": "line",
                              "color" : "#00e6b8",
                              "x": "$canvasStartX",
                              "y": "$chartStartY+10",
                              "toX": "$canvasEndX",
                              "toY": "$chartStartY+10"
                          }
                      ]
                  }
              ]
            }
        }
    });

    var dc3_2= new FusionCharts({
        "type": "spline",
        "dataFormat": "json",
        "renderAt": "cont-vcol3-2",
        "width": "100%",
        "height": "100%",
        "dataSource": {
            "chart": {
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "outCnvBaseFontColor": "#33ffff",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
                "showYAxisLine":"0",
                "showYAxisValues":"0",
                "showValues":"0",
                "plotSpacePercent":"80",
                "bgAlpha":"100",
                "canvasBgAlpha":"0",
                "canvasBgColor":"#0d0d0d",
                "divLineAlpha":"80",
                "divLineColor":"#0d0d0d",
                "showAnchors":"0",
                "canvasBorderAlpha":"80"
            },
            "data": [
                {
                  "label": "01/04/2016",
                  "value": "420",
                   "color":"#45BDCE"
                  
              }, 
              {
                  "label": "02/04/2016",
                  "value": "810",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "03/04/2016",
                  "value": "720",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "04/04/2016",
                  "value": "550",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "05/04/2016",
                  "value": "910",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "06/04/2016",
                  "value": "510",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "07/04/2016",
                  "value": "680",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "08/04/2016",
                  "value": "620",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "09/04/2016",
                  "value": "610",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "10/04/2016",
                  "value": "290",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "11/04/2016",
                  "value": "900",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "12/04/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "13/04/2016",
                  "value": "734",
                   "color":"#aee3ea"
              },
{
                  "label": "14/04/2016",
                  "value": "700",
                   "color":"#aee3ea"
              },
{
                  "label": "15/04/2016",
                  "value": "710",
                   "color":"#aee3ea"
              },
{
                  "label": "16/04/2016",
                  "value": "911",
                   "color":"#aee3ea"
              },
{
                  "label": "17/04/2016",
                  "value": "764",
                   "color":"#aee3ea"
              },
{
                  "label": "18/04/2016",
                  "value": "239",
                   "color":"#45BDCE"
              },
{
                  "label": "19/04/2016",
                  "value": "198",
                   "color":"#45BDCE"
              },
{
                  "label": "20/04/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "21/04/2016",
                  "value": "778",
                   "color":"#aee3ea"
              },
{
                  "label": "22/04/2016",
                  "value": "567",
                   "color":"#45BDCE"
              },
{
                  "label": "23/04/2016",
                  "value": "444",
                   "color":"#45BDCE"
              },
{
                  "label": "24/04/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "25/04/2016",
                  "value": "123",
                   "color":"#45BDCE"
              },
{
                  "label": "26/04/2016",
                  "value": "987",
                   "color":"#aee3ea"
              },
{
                  "label": "27/04/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "28/04/2016",
                  "value": "345",
                   "color":"#45BDCE"
              },
{
                  "label": "29/04/2016",
                  "value": "667",
                   "color":"#45BDCE"
              },
{
                  "label": "30/04/2016",
                  "value": "530",
                   "color":"#45BDCE"
              },
              {
                  "label": "01/05/2016",
                  "value": "420",
                   "color":"#45BDCE"
                  
              }, 
              {
                  "label": "02/05/2016",
                  "value": "810",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "03/05/2016",
                  "value": "720",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "05/05/2016",
                  "value": "550",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "05/05/2016",
                  "value": "910",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "06/05/2016",
                  "value": "510",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "07/05/2016",
                  "value": "680",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "08/05/2016",
                  "value": "620",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "09/05/2016",
                  "value": "610",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "10/05/2016",
                  "value": "290",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "11/05/2016",
                  "value": "900",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "12/05/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "13/05/2016",
                  "value": "734",
                   "color":"#aee3ea"
              },
{
                  "label": "14/05/2016",
                  "value": "700",
                   "color":"#aee3ea"
              },
{
                  "label": "15/05/2016",
                  "value": "710",
                   "color":"#aee3ea"
              },
{
                  "label": "16/05/2016",
                  "value": "911",
                   "color":"#aee3ea"
              },
{
                  "label": "17/05/2016",
                  "value": "764",
                   "color":"#aee3ea"
              },
{
                  "label": "18/05/2016",
                  "value": "239",
                   "color":"#45BDCE"
              },
{
                  "label": "19/05/2016",
                  "value": "198",
                   "color":"#45BDCE"
              },
{
                  "label": "20/05/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "21/05/2016",
                  "value": "778",
                   "color":"#aee3ea"
              },
{
                  "label": "22/05/2016",
                  "value": "567",
                   "color":"#45BDCE"
              },
{
                  "label": "23/05/2016",
                  "value": "444",
                   "color":"#45BDCE"
              },
{
                  "label": "24/05/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "25/05/2016",
                  "value": "123",
                   "color":"#45BDCE"
              },
{
                  "label": "26/05/2016",
                  "value": "987",
                   "color":"#aee3ea"
              },
{
                  "label": "27/05/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "28/05/2016",
                  "value": "345",
                   "color":"#45BDCE"
              },
{
                  "label": "29/05/2016",
                  "value": "667",
                   "color":"#45BDCE"
              },
{
                  "label": "30/05/2016",
                  "value": "530",
                   "color":"#45BDCE"
              },
            ],

            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "700",
                            "color": "#1aaf5d",
                            "valueOnRight": "1",
                            "displayvalue": "Monthly{br}Target"
                        }
                    ]
                }
            ]
        }
    });

    var daily = {
            "chart": {
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "outCnvBaseFontColor": "#33ffff",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
                "showYAxisLine":"0",
                "showYAxisValues":"0",
                "showValues":"0",
                "plotSpacePercent":"80",
                "bgAlpha":"100",
                "canvasBgAlpha":"0",
                "canvasBgColor":"#0d0d0d",
                "divLineAlpha":"80",
                "divLineColor":"#0d0d0d",
                "showAnchors":"0"
            },            
            "data": [
           
                {
                  "label": "01/04/2016",
                  "value": "420",
                   "color":"#45BDCE"
                  
              }, 
              {
                  "label": "02/04/2016",
                  "value": "810",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "03/04/2016",
                  "value": "720",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "04/04/2016",
                  "value": "550",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "05/04/2016",
                  "value": "910",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "06/04/2016",
                  "value": "510",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "07/04/2016",
                  "value": "680",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "08/04/2016",
                  "value": "620",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "09/04/2016",
                  "value": "610",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "10/04/2016",
                  "value": "290",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "11/04/2016",
                  "value": "900",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "12/04/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "13/04/2016",
                  "value": "734",
                   "color":"#aee3ea"
              },
{
                  "label": "14/04/2016",
                  "value": "700",
                   "color":"#aee3ea"
              },
{
                  "label": "15/04/2016",
                  "value": "710",
                   "color":"#aee3ea"
              },
{
                  "label": "16/04/2016",
                  "value": "911",
                   "color":"#aee3ea"
              },
{
                  "label": "17/04/2016",
                  "value": "764",
                   "color":"#aee3ea"
              },
{
                  "label": "18/04/2016",
                  "value": "239",
                   "color":"#45BDCE"
              },
{
                  "label": "19/04/2016",
                  "value": "198",
                   "color":"#45BDCE"
              },
{
                  "label": "20/04/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "21/04/2016",
                  "value": "778",
                   "color":"#aee3ea"
              },
{
                  "label": "22/04/2016",
                  "value": "567",
                   "color":"#45BDCE"
              },
{
                  "label": "23/04/2016",
                  "value": "444",
                   "color":"#45BDCE"
              },
{
                  "label": "24/04/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "25/04/2016",
                  "value": "123",
                   "color":"#45BDCE"
              },
{
                  "label": "26/04/2016",
                  "value": "987",
                   "color":"#aee3ea"
              },
{
                  "label": "27/04/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "28/04/2016",
                  "value": "345",
                   "color":"#45BDCE"
              },
{
                  "label": "29/04/2016",
                  "value": "667",
                   "color":"#45BDCE"
              },
{
                  "label": "30/04/2016",
                  "value": "530",
                   "color":"#45BDCE"
              },
              {
                  "label": "01/05/2016",
                  "value": "420",
                   "color":"#45BDCE"
                  
              }, 
              {
                  "label": "02/05/2016",
                  "value": "810",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "03/05/2016",
                  "value": "720",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "05/05/2016",
                  "value": "550",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "05/05/2016",
                  "value": "910",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "06/05/2016",
                  "value": "510",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "07/05/2016",
                  "value": "680",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "08/05/2016",
                  "value": "620",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "09/05/2016",
                  "value": "610",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "10/05/2016",
                  "value": "290",
                   "color":"#45BDCE"
              }, 
              {
                  "label": "11/05/2016",
                  "value": "900",
                   "color":"#aee3ea"
              }, 
              {
                  "label": "12/05/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "13/05/2016",
                  "value": "734",
                   "color":"#aee3ea"
              },
{
                  "label": "14/05/2016",
                  "value": "700",
                   "color":"#aee3ea"
              },
{
                  "label": "15/05/2016",
                  "value": "710",
                   "color":"#aee3ea"
              },
{
                  "label": "16/05/2016",
                  "value": "911",
                   "color":"#aee3ea"
              },
{
                  "label": "17/05/2016",
                  "value": "764",
                   "color":"#aee3ea"
              },
{
                  "label": "18/05/2016",
                  "value": "239",
                   "color":"#45BDCE"
              },
{
                  "label": "19/05/2016",
                  "value": "198",
                   "color":"#45BDCE"
              },
{
                  "label": "20/05/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "21/05/2016",
                  "value": "778",
                   "color":"#aee3ea"
              },
{
                  "label": "22/05/2016",
                  "value": "567",
                   "color":"#45BDCE"
              },
{
                  "label": "23/05/2016",
                  "value": "444",
                   "color":"#45BDCE"
              },
{
                  "label": "24/05/2016",
                  "value": "234",
                   "color":"#45BDCE"
              },
{
                  "label": "25/05/2016",
                  "value": "123",
                   "color":"#45BDCE"
              },
{
                  "label": "26/05/2016",
                  "value": "987",
                   "color":"#aee3ea"
              },
{
                  "label": "27/05/2016",
                  "value": "876",
                   "color":"#aee3ea"
              },
{
                  "label": "28/05/2016",
                  "value": "345",
                   "color":"#45BDCE"
              },
{
                  "label": "29/05/2016",
                  "value": "667",
                   "color":"#45BDCE"
              },
{
                  "label": "30/05/2016",
                  "value": "530",
                   "color":"#45BDCE"
              },
              
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "700",
                            "color": "#1aaf5d",
                            "valueOnRight": "1",
                            "displayvalue": "Monthly{br}Target"
                        }
                    ]
                }
            ]
        };

        var weekly = {
            "chart": {
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "outCnvBaseFontColor": "#33ffff",
                "bgColor": "#26374a",
                "bgAlpha": "92",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placevaluesInside": "1",
                "rotatevalues": "1",
                "valueFontColor": "#ffffff",                
                "showXAxisLine": "1",
                "xAxisLineColor": "#999999",
                "divlineColor": "#999999",               
                "divLineIsDashed": "1",
                "showAlternateHGridColor": "0",
                "subcaptionFontBold": "0",
                "subcaptionFontSize": "14",
                "showYAxisLine":"0",
                "showYAxisValues":"0",
                "showValues":"0",
                "plotSpacePercent":"80",
                "bgAlpha":"100",
                "canvasBgAlpha":"0",
                "canvasBgColor":"#0d0d0d",
                "divLineAlpha":"80",
                "divLineColor":"#0d0d0d",
                "showAnchors":"0"
            },            
            "data": [
           
                {
                    "label": "Week1",
                    "value": "420",
                     "color":"#45BDCE"
                    
                }, 
                {
                    "label": "Week2",
                    "value": "920",
                     "color":"#45BDCE"
                }, 
                {
                    "label": "Week3",
                    "value": "290",
                     "color":"#45BDCE"
                }, 
                {
                    "label": "Week4",
                    "value": "650",
                     "color":"#45BDCE"
                }, 
                {
                    "label": "Week5",
                    "value": "110",
                     "color":"#45BDCE"
                }, 
                {
                    "label": "Week6",
                    "value": "900",
                     "color":"#45BDCE"
                }, 
                {
                    "label": "Week7",
                    "value": "380",
                     "color":"#45BDCE"
                }, 
                {
                    "label": "Week8",
                    "value": "830",
                     "color":"#45BDCE"
                }
            ],
            "trendlines": [
                {
                    "line": [
                        {
                            "startvalue": "700",
                            "color": "#1aaf5d",
                            "valueOnRight": "1",
                            "displayvalue": "Monthly Target"
                        }
                    ]
                }
            ]
        };

        function setDataDailyColumn() {
            dc1_2.setChartData(daily,"json");
        }

        function setDataWeeklyColumn() {
            dc1_2.setChartData(weekly,"json");
        }

        function setDataDailySpline() {
            dc3_2.setChartData(daily,"json");
        }

        function setDataWeeklySpline() {
            dc3_2.setChartData(weekly,"json");
        }

    FusionCharts.ready(function(){

        dc1_1.render();
        dc1_2.render();
        dc2_1.render();
        dc2_2.render();
        dc2_3.render();
        dc2_4.render();
        dc2_5.render();
        dc2_6.render();

        dc3_1.render();
        dc3_2.render();
    });
