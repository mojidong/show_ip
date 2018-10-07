chrome.runtime.onMessage.addListener(function(message){
    setInterval(function(){
        show(message)
    },1000)
});

function show(message){
    if($('#show_ip').size() == 0 && message.ip != undefined) { 
        // div="<div id='show_ip' class='show_left'>"+message.ip+"</div>"
        div="<div id='show_ip' class='show_left'>ABCD:EF01:2345:6789:ABCD:EF01:2345:6789</div>"
        $('body').append(div);

        $('#show_ip').mouseover(function(){
            $(this).toggleClass('show_left').toggleClass('show_right')
        });
    }
}
