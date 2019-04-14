//define order for create item id
var order = 1;
//click on trash to delete Todo
$("ul").on("click", ".trash", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
//click on check to send Todo item to checked list
$("ul").on("click", ".check", function (event) {
    var todoText = $(this).parent().attr("id");
    var inputId = "#"+todoText;
    var word = $(inputId).children("[type=text]").val();
    if(word != ""){
        $("#checkpoint").append("<li class='completed'><span class='trash'><i class='fa fa-trash'></i></span>" + word + "</li>");
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();
    }
});

//click to add new item
$(".fa-plus").click(function(){
    $("#todo").append("<li id='list" + order + "'><span class='check'><i class='fas fa-check'></i></span><span class='trash'><i class='fa fa-trash'></i></span><input type='text' placeholder='Add New Todo Item'></li>");
    order++;
});