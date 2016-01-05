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
            
            var socket = io();

            socket.emit('chat message', $("title").val());
            return false;


            socket.on('chat message', function (msg) {
                $('#titulos').append($('<li>').text($("title").val()));
            });

        });
        
    }
    
});
