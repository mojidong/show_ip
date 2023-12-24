chrome.webRequest.onCompleted.addListener(function(details){
    chrome.webNavigation.onCompleted.addListener(function(details1){
        if(details1.url == details.url){
            chrome.tabs.sendMessage(details1.tabId, {"url" : details.url, "ip" : details.ip})
        }
    });
},{urls: ["<all_urls>"],types: ["main_frame"]});
