function initMap(){createMap(),setMapEvent(),addMapControl(),addMarker()}function createMap(){var n=new BMap.Map("dituContent"),e=new BMap.Point(118.115205,24.540608);n.centerAndZoom(e,18),window.map=n}function setMapEvent(){map.enableDragging(),map.enableScrollWheelZoom(),map.enableDoubleClickZoom(),map.enableKeyboard()}function addMapControl(){var n=new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});map.addControl(n);var e=new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});map.addControl(e);var o=new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});map.addControl(o)}function addMarker(){for(var n=0;n<markerArr.length;n++){var e=markerArr[n],o=e.point.split("|")[0],a=e.point.split("|")[1],t=new BMap.Point(o,a),i=createIcon(e.icon),r=new BMap.Marker(t,{icon:i}),p=(createInfoWindow(n),new BMap.Label(e.title,{offset:new BMap.Size(e.icon.lb-e.icon.x+10,-20)}));r.setLabel(p),map.addOverlay(r),p.setStyle({borderColor:"#808080",color:"#333",cursor:"pointer"}),function(){var o=createInfoWindow(n),a=r;a.addEventListener("click",function(){this.openInfoWindow(o)}),o.addEventListener("open",function(){a.getLabel().hide()}),o.addEventListener("close",function(){a.getLabel().show()}),p.addEventListener("click",function(){a.openInfoWindow(o)}),e.isOpen&&(p.hide(),a.openInfoWindow(o))}()}}function createInfoWindow(n){var e=markerArr[n],o=new BMap.InfoWindow("<b class='iw_poi_title' title='"+e.title+"'>"+e.title+"</b><div class='iw_poi_content'>"+e.content+"</div>");return o}function createIcon(n){var e=new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png",new BMap.Size(n.w,n.h),{imageOffset:new BMap.Size(-n.l,-n.t),infoWindowOffset:new BMap.Size(n.lb+5,1),offset:new BMap.Size(n.x,n.h)});return e}var markerArr=[{title:"云创智谷",content:"厦门市湖里区高殿路8号<br/>#E409-2&nbsp;#C102",point:"118.114275|24.541109",isOpen:1,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}];