/**
 * Created by kf on 2018/10/17.
 */

function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
    var sales = JSON.parse(responseText);
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold" + sale.sales + " gumballs";
        salesDiv.appendChild(div);
    }
}
function initlevel1() {//IE8 Opera10一下兼容
    var url="http://localhost:63343/webstormspace/test/json/sale.json"//localhost/;
    var request=new XMLHttpRequest();
    request.onreadystatechange=function () {
        if(request.readyState==4&&request.status==200){
            updateSales(request.responseText);
        }
    }
    request.open("GET",null);
    request.send(null);
}