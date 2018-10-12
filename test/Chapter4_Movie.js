/**
 * Created by kf on 2018/10/12.
 */

window.onload = init;//使用init把值赋给window.onload 加载网以后调用 使用init()window.onload调用函数 立即执行
var movie1 = {//对象首字母可以是小写
    title: "Plan 9-from Outer space",
    genre: "cult Classic",
    rating: 5,
    showtimes: ["3:00pm", "7:00pm", "11:00pm"],
    getNextShowing: function () {//匿名内部类
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return "Next showing of " + this.title + " is " + this.showtimes[i];
            }
        }
        return null;
    }
};
var movie2 = {
    title: "Forbidden Planet",
    genre: "Classic Sci-fi",
    rating: 5,
    showtimes: ["5:00pm", "9:00pm"]
};
function getNextShowing(movie) {
    var now = new Date().getTime();
    for (var i = 0; i < movie.showtimes.length; i++) {
        var showtime = getTimeFromString(movie.showtimes[i]);
        if ((showtime - now) > 0) {
            return "Next showing of " + movie.title + " is " + movie.showtimes[i];
        }
    }
    return null;
}
function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.math(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1] + time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}
// var nextShowing=getNextShowing(movie1);
// alert(nextShowing);
// nextShowing=getNextShowing(movie2);
// alert(nextShowing)

function init() {
    // var handleClick = document.getElementById("click");
    // handleClick.onclick = clickEvent;
    alert("ddddd");
}
function clickEvent() {
    // var nextShowing = getNextShowing(movie1);
    // alert(nextShowing);
    alert("ddddd" + movie1.getNextShowing());
}
//构造函数
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {//构造对象包含bark方法，将bark属性初始化为一个函数值
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}
//调用构造函数
var fido = new Dog("Fido", "Mixed", 38);
fido.bark();