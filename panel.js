var backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    c='<div class="c clearfix">' +
            '<ul>' +
                '<li>' + message.details.url +'</li>' +
                '<li>' + message.details.ip + '</li>' +
            '</ul>' +
        '</div>';

    $('body').append(c);
});


chrome.devtools.network.onRequestFinished.addListener(function(request){
    chrome.devtools.network.getHAR(function(harLog){
        console.log(JSON.stringify(harLog))
    })
})

$(function(){
    $('body').delegate('div.c', 'mouseover', function() {
        $(this).addClass('h');
    });
    $('body').delegate('div.c', 'mouseout', function() {
        $(this).removeClass('h');
    });
    $('.btn').click(function(){
        $('.c').remove();
    });
})

