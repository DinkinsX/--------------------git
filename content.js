chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            try {
                let videoId = $('.video_box_wrap:first')[0].id.replace('video_box_wrap','video');
                console.log(videoId);

                chrome.runtime.sendMessage({"message": "open_new_tab", "url": `https://m.vk.com/${videoId}`});
            } catch (err) {
                console.log(err);
            }
            
        }
    }
);

let sourceUrl, downloadItem;
window.onload =
    sourceUrl = $('[source], [type="video/mp4"]:first')[0].src;
    if (sourceUrl) {
        downloadItem = $('<a>', {
            text: 'Скачать видео',
            href: sourceUrl,
            class: 'item_share'
        })
        .appendTo('div.like_wrap');
        console.log(sourceUrl, downloadItem);
    }

