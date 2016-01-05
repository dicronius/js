    type: "GET",
    url: "https://cdn.rawgit.com/dicronius/js/master/xml.xml",
    dataType: "xml",
    success: function (xml) {
        
        $(xml).find("Articles").each(function () {
            var Titles = $("title").text();           

            var socket = io();
            $('form').submit(function () {
                socket.emit('chat message', $(Titles).val());
                return false;
            });

            socket.on('chat message', function (msg) {
                $('#titulos').append($('<li>').text(msg));
            });

        });
        
    }
    
});
