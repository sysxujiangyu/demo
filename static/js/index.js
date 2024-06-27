// 解决iframe自适应高度问题
function iframe_onload() {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        var iframeWin = iframes[i].contentWindow || iframes[i].contentDocument.parentWindow;
        iframes[i].style.height = (iframeWin.document.body.scrollHeight + 20) + 'px'
        iframes[i].style.overflowX = 'hidden';
        iframes[i].style.overflowY = 'hidden';
    }
}