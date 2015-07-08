var viewwidth;
var viewheight;
var totalheight;
var totalwidth;
var avheight;
var avwidth;
var windowSW;

function widthheight() {
   // alert(sUserAgent);
 viewwidth = document.body.clientWidth;
 viewheight = document.body.clientHeight;
    totalheight = document.body.availHeight;
    totalwidth = document.body.availWidth;
    avheight = window.screen.availHeight;
    avwidth = window.screen.availWidth;
   windowSW= window.screen.width;
     //alert('vw:'+viewwidth +"vh:"+ viewheight +"\n" + 'tw:'+totalwidth+'th:'+totalheight);
   /* 
 var s = "网页可见区域宽：" + document.body.clientWidth;
 s += "\r\n网页可见区域高：" + document.body.clientHeight;
 s += "\r\n网页可见区域高：" + document.body.offsetWeight + "  (包括边线的宽)";
 s += "\r\n网页可见区域高：" + document.body.offsetHeight + "  (包括边线的宽)";
 s += "\r\n网页正文全文宽：" + document.body.scrollWidth;
 s += "\r\n网页正文全文高：" + document.body.scrollHeight;
 s += "\r\n网页被卷去的高：" + document.body.scrollTop;
 s += "\r\n网页被卷去的左：" + document.body.scrollLeft;
 s += "\r\n网页正文部分上：" + window.screenTop;
 s += "\r\n网页正文部分左：" + window.screenLeft;
 s += "\r\n屏幕分辨率的高：" + window.screen.height;
 s += "\r\n屏幕分辨率的宽：" + window.screen.width;
 s += "\r\n屏幕可用工作区高度：" + window.screen.availHeight;
 s += "\r\n屏幕可用工作区宽度：" + window.screen.availWidth;
 alert(s);
 */
}