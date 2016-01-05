$(document).ready(function () {
    //the variable to be appended here
    $("#titulos").append("<ul></ul>");
});
$.ajax({
    type: "GET",
    url: "https://cdn.rawgit.com/dicronius/js/master/xml.xml",
    dataType: "xml",
    success: function (xml) {
        
    $(xml).find("Articles").each(function () {
    var Titles = $(this).find("title").text();
    $("<li></li>").html(Titles).appendTo("#titulos ul");
     
    });
        
    }
    
});
