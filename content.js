chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            let videoId = $('.video_box_wrap:first')[0].id.replace('video_box_wrap','video');
                console.log(videoId);

            chrome.runtime.sendMessage({"message": "open_new_tab", "url": `https://m.vk.com/${videoId}`});
        }
    }
);

let sourceUrl, downloadItem;
window.onload =
sourceUrl = $('source:first')[0].src;
    if (sourceUrl) {
        downloadItem = $('<a>', {
            text: 'Скачать видео',
            title: 'download video',
            href: sourceUrl,
            class: 'item_share'
        })
        .appendTo('div.like_wrap');
        console.log(sourceUrl, downloadItem);
    }

