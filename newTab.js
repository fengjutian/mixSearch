// chrome.system.cpu.getInfo(function(info){
//     console.log(info);
// });

// chrome.system.memory.getInfo(function(info){
//     console.log(info);
// });

// chrome.system.storage.getInfo(function(info){
//     console.log(info);
// });

// chrome.contextMenus.create({
//     type: 'normal',
//     title: 'My Menu',
//     contexts: ['link']
// });

chrome.history.search({
    text: 'Java',
    startTime: new Date().getTime()-24*3600*1000,
    endTime: new Date().getTime(),
    maxResults: 20
}, function(historyItemArray){
    console.log(historyItemArray);
});