/**
 * Created by kf on 2018/10/17.
 */
var lastTime = "0";
function updateSalesJsonPs(sales) {
    var salesDiv = document.getElementById("sales");
    // var sales = JSON.parse(salestr);
    for (var i = 0; i < sales.length; i++) {
        var sale = sales[i];
        var div = document.createElement("div");
        div.setAttribute("class", "saleItem");
        div.innerHTML = sale.name + " sold" + sale.sales + " gumballs";
        salesDiv.appendChild(div);
    }
    if (sales.length > 0) {
        lastTime = sales[sales.length - 1].time;
    }
}
window.onload = function () {
    var count = setInterval(handleRefresh, 2000);//循环返回一个标记通过标记值取消循环
    // alert(count);
    // clearInterval(count);//取消定时
}
function handleRefresh() {
    var url = "http://gumball.wickedlysmart.com/?callback=updateSalesJsonPs&random=" + new Date().getTime()+"&lastTime="+lastTime;
    var newScriptElement = document.createElement("script");
    newScriptElement.setAttribute("src", url);
    newScriptElement.setAttribute("id", "jsonp");

    var oldScriptElement = document.getElementById("jsonp");
    var head = document.getElementsByTagName("head")[0];
    if (oldScriptElement == null) {//查看是否有jsonp
        head.appendChild(newScriptElement)
    } else {//若存在，直接替换
        head.replaceChild(newScriptElement, oldScriptElement);
    }
}

//document.getElementsByTagName("指定标签");返回匹配数组
//head.replaceChild("child1","child2");替换一个元素的子元素
//head.replaceChild(newScriptElement(新的),oldScriptElement(已有的));
//反复调用一个URL浏览器会进行缓存
//"http://gumball.wickedlysmart.com/?callback=updateSalesJsonPs&random="+new Date().getTime();添加一个随机时间是浏览器忽略