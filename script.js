console.log("a"+"px");

function myFunction() {
    var a = parseInt(document.getElementById("input").value);
    var div = document.createElement("div");
    div.style.width = a+"px";
    div.style.height = "50px";
    var b = document.getElementById("color").value;
    var low = b.toLowerCase();
    console.log(b);
    div.style.background = low;
    div.style.color = "white";
    div.innerHTML = document.getElementById("name").value;


document.getElementById("Graph").appendChild(div);
}