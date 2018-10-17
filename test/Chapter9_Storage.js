/**
 * Created by kf on 2018/10/17.
 */
window.onload = init;
function init() {
    localStorage.setItem("sticky1", "webstorage key1");
    var showString = localStorage.getItem("key1");//
    var showString2 = localStorage["key1"];//
    if (showString2 != null) {
        alert(showString2);//如果为空打印信息为null
    }
    // for (var i = 0; i < localStorage.length; i++) {//length获取wetstorage存储内容
    //     var key = localStorage.key(i);//通过.key获取存储关键字key
    //     var content = localStorage.getItem("key");//通过key获取存储内容
    //     alert(content);
    // }

    var button = document.getElementById("add_button");
    button.onclick = createSticky;
    //使用stickyArray数组
    // var stickiesArray = localStorage["stickiesArray"];
    // if (!stickiesArray) {
    //     stickiesArray = [];
    //     localStorage.setItem("stickiesArray", stickiesArray);
    // }
    //
    var stickiesArray=getStickiesArray();
    for (var i = 0; i < stickiesArray.length; i++) {
        var key = stickiesArray.key(i);
        if (key.substring(0, 6) == "sticky") {
            var value = stickiesArray.getItem(key);
            addStickyToDCM(value);
        }
    }

}
function addStickyToDCM(value) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
}
function createSticky() {
    var value = document.getElementById("note_text").value;
    var time = new Date().getTime();
    var key = "sticky_" + time;
    var stickiesArrays = getStickiesArray();

    localStorage.setItem(key, value);
    stickiesArrays.push(key);
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArrays));
    addStickyToDCM(value)
}
function getStickiesArray() {
    var stickiesArray = localStorage.getItem("stickiesArray");
    if (!stickiesArray) {
        stickiesArray = [];
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    } else {
        stickiesArray = JSON.parse(stickiesArray);
    }
    return stickiesArray;
}

//if(window["localStorage"]){//通过此方法判断web是否支持缓存
// alert("ture");
// }else {
//     alert("false");
// }
// 467
function shellGame() {


}