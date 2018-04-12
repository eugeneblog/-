function loadXML(urlName){
    var xmlDoc;
    try{ //IE
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    }catch(e){ //firefox,opera
    xmlDoc = document.implementation.createDocument("","",null);
    }
    try{
    xmlDoc.asyc = false; //是否异步调用
    xmlDoc.load(urlName); //文件路径
    }catch(e){ //chrome
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.open("GET",urlName,false); //创建一个新的http请求，并指定此请求的方法、URL以及验证信息
    xmlDoc = xmlhttp.responseXML;
    }
    return xmlDoc;
    }

    function getOs() 
    { 
         var OsObject = ""; 
        if(navigator.userAgent.indexOf("MSIE")>0) { 
             return "MSIE";  
        } 
        if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
             return "Firefox"; 
        } 
        if(isSafari=navigator.userAgent.indexOf("Safari")>0) { 
             return "Safari"; 
        }  
        if(isCamino=navigator.userAgent.indexOf("Camino")>0){ 
             return "Camino"; 
        } 
        if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){ 
             return "Gecko"; 
        } 
    }