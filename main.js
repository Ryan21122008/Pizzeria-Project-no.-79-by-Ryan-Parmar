menulist = ["Paneer Tikka Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", 
            "Veg Margherita Pizza", "Deluxe Veggie Pizza", "Veg Extravaganza Pizza"];

function getmenu(){
var htmldata;
menulist.sort();
htmldata = "<ol class='menulist'>";
for(var i = 0; i<menulist.length; i++){
    htmldata = htmldata + '<li>' + menulist[i] + '</li>'
}
htmldata = htmldata + "</ol>"
console.log(htmldata);
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menulist.sort();
htmldata = "<section class='cardsformat'>"
for(var i = 0; i<menulist.length; i++){
htmldata = htmldata + '<div class="cards">' + '<img src="images/pizzaImg.png"/>'
                    + menulist[i] + '</div>'
}
htmldata = htmldata + "</section>"
console.log(htmldata);
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
function add_top(){
var item=document.getElementById("add_item").value;
menulist.push(item);
add_item(); 
}