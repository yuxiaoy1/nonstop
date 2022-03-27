;(function () {
  'use strict'
  const href = location.href

  // close zhihu login page when not logged in
  if (href.indexOf('www.zhihu.com/question/') != -1) {
    window.onload = () => {
      const btn = document.querySelector(
        '.Button.Modal-closeButton.Button--plain'
      )
      btn && btn.click()
    }
    return
  }

  const getParams = (field) => {
    const urlObject = new URL(href)
    const res = urlObject.searchParams.get(field)
    return res
  }

  // get real URL
  let url =
    getParams('target') ||
    getParams('url') ||
    getParams('q') ||
    getParams('gourl')

  if (!url) {
    // get real URL for weibo site
    const link = document.querySelector('.desc')
    link && (url = link.textContent)
  }

  location.href = url
})()
