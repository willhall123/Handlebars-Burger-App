$(".devour").on("click", function() {
    var id = $(this).attr("data-id");
    alert("YUM!");
    $.ajax({
        url: "/api/burgers/" + id,
        method: "put", 
    }).then(function() {
        location.reload()
    });
});