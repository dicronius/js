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

            var socket = io();
            $('form').submit(function () {
                socket.emit('chat message', $(Titles).val());
                return false;
            });

            socket.on('chat message', function (msg) {
                $('#titulos ul').append($('<li>').text(msg));
            });

        });
        
    }
    
});
