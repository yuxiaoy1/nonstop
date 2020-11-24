(function() {
    'use strict'
    // this is for zhihu, weibo
    let link = document.querySelector('.link')
    if (link) {
        window.location.href = link.textContent
        console.log(link.textContent)
        return
    }
    // this is for jianshu 
    function getParams(field) {
        let href = window.location.href;
        let urlObject = new URL(href);
        let res = urlObject.searchParams.get(field);
        return res;
    }
    let url = getParams('url');
    console.log(url)
    window.location.href = url
})();