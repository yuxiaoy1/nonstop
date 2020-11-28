(function() {
    'use strict'
    // redirect for zhihu, weibo sites
    let link = document.querySelector('.link')
    let url = link ? link.textContent : ''
    if (url) {
        window.location.href = url
        return
    }

    // redirect for jianshu site
    function getParams(field) {
        let href = window.location.href
        let urlObject = new URL(href)
        let res = urlObject.searchParams.get(field)
        return res
    }
    url = getParams('url')
    if (url) {
        window.location.href = url
        return
    }

    // show alert message if there is not valid url
    alert('Nonstop提醒：没有合法的外链，请重试或手动跳转')

    // let body = document.body
    // let ele = document.createElement('div')
    // ele.innerHTML = `<p style="text-align:center;color:red;">
    // 没有合法的外链，请重试或手动跳转</p>`
    // body.insertBefore(ele, body.firstChild)
})();