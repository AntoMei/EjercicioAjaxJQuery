window.onload = function () {

var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

    if(XMLHttpRequestObject) {
    var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "datos.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
    }
    
}
    XMLHttpRequestObject.send(null);
    }
}

$(document).ready(function(){
    $("#contenedor").animate({'font-size':"40px"})
})