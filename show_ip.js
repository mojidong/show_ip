chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    setInterval(function(){
        show(request)
    },1000)
});

function show(message){
    console.log("rr")
    if($('#show_ip').size() == 0 && message.ip != undefined) { 
        div="<div id='show_ip' class='show_right'>"+message.ip+"</div>"
        $('body').append(div);

        $('#show_ip').mouseover(function(){
            $(this).toggleClass('show_left').toggleClass('show_right')
        });
    }
}
