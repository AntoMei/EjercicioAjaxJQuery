$(document).ready(function() {
    $("#click").click(function() {
        if ($(this).prop("checked")) {
            var creacioncontenedor = "<div id='contenedor'></div>";
            $("body").append(creacioncontenedor);
            $("#contenedor").append("<input type='text' id='campo'>");
             $("#campo").val(parseInt($("#num1").val()) + parseInt($("#num2").val()));
        }else{
            $("#campo").remove();
        }
    })
})