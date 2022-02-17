$(document).ready(function() {

    var cost = $("#Cost").text();
    var price = "";
    for (var i in cost){
        if(cost[i] != "$"){
            price += cost[i];
        }
    }
    price = parseInt(price);
    var total = price;
    $(".TotalValue").text(total);
    $("#quantity").change(function(){
        var quantity = parseInt($("#quantity").val());
        total = price * quantity;
        $(".TotalValue").text(total);
    })
});
