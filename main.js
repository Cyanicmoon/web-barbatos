/*function goBlog(){
    window.location.href = 'https://blog.naver.com/aiden-1234';
}

function clicked_submit(){
    var textarea = document.getElementById('submit');
    console.log(typeof(textarea.value));
}
*/

var URLString = top.location.href + "/";
tURLString = URLString.split("/");
iii = tURLString.length > 2 ? (tURLString[3].length > 0 ? false:true) : false
if(!iii){
    document.cookie = "UrlString=" + top.window.location.href + "; path=/;";
    top.window.location.href = "http://"+top.window.location.host;
}

function clicked_venti(){
    window.location.href = "./character-info/venti.html";
}
function clicked_hutao(){
    window.location.href = "./character-info/hutao.html";
}