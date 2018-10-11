/**
 * Created by kf on 2018/10/11.
 */

window.onload = init;
function init() {//initialization banding event
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
}
function handleButtonClick() {//点击事件
    var textInput = document.getElementById("songTextInput");
    var value = textInput.value;
    if (value == "") {
        alert("please enter a song");
    } else {
        addSongs(value);
        alert("adding " + value);
        save(value);
    }
    function addSongs(songName) {
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);
    }
}

