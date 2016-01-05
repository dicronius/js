$(document).ready(function () {
    //the variable to be appended here
    $("#titulos").append("<ul></ul>");
    var socket = io();
});
$.ajax({
    type: "GET",
    url: "https://cdn.rawgit.com/dicronius/js/master/xml.xml",
    dataType: "xml",
    success: function (xml) {
        
        $(xml).find("Articles").each(function () {
            var Titles = $("title").text();           
            ////////////////////////////////

            socket.on('message', function (Titles) {
                console.log(Titles);
                socket.send( "<span>" + Titles + "</span><br />");
            });    

        });
        
    }
    
});
