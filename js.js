$(document).ready(function () {
    //the variable to be appended here
    $("#titulos").append("<ul></ul>");
});
$.ajax({
    type: "GET",
    url: "https://cdn.rawgit.com/dicronius/js/master/xml.xml",
    dataType: "xml",
    success: function (xml) {
        
    $(xml).find("Article").each(function () {
    var Titles = $("Title").text();
    $("<li></li>").html(Titles).appendTo("#titulos ul");
     
    });
        
    }
    
});
