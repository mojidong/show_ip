chrome.webRequest.onCompleted.addListener(function(details){
    chrome.webNavigation.onCompleted.addListener(function(details1){
        chrome.pageAction.show(details1.tabId)
        if(details1.url == details.url){
            chrome.tabs.sendMessage(details1.tabId, {"url" : details.url, "ip" : details.ip})
        }
    });
},{urls: ["<all_urls>"],types: ["main_frame"]});

chrome.runtime.onConnect.addListener(function(devToolsConnection) {
    chrome.webRequest.onCompleted.addListener(function(details){
        message={'type':1,'details':details}
        devToolsConnection.postMessage(message)
    },{urls: ["<all_urls>"]});

   //  chrome.webNavigation.onBeforeNavigate.addListener(function(details){
   //      message={'type':0}
   //      devToolsConnection.postMessage(message)
   //  })

    devToolsConnection.onDisconnect(function() {
    });
})



