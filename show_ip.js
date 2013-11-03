chrome.runtime.onMessage.addListener(function(message){
    setInterval(function(){
        show(message)
    },1000)
});

function show(message){
    if($('#show_ip').size() == 0) { 
        div="<div id='show_ip' class='show_left'>"+message.ip+"</div>"
        $('body').append(div);

        $('#show_ip').mouseover(function(){
            $(this).toggleClass('show_left').toggleClass('show_right')
        });

    }
}
