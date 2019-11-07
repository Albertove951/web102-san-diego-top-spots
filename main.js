$(document).ready(function() {
    $.getJSON("data.json", function(result){
        $.each(result, function(item){
            $("table").append("<tr><td>" + item.name + "</td><td>" + item.description + "</td><td><a href=\"https://www.google.com/maps?q=" + item.location + "\">Open in Google Maps</a></td></tr>");
        });
    });
});