// Scroll

const $headerPage = document.querySelector('#header__page')
window.addEventListener('scroll', () => {
    if(window.scrollY > 100)
        $headerPage.classList.add('fixed')
    else
        $headerPage.classList.remove('fixed')
})

// Click