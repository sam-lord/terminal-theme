// Gallery ratio fix
const images = document.querySelectorAll('.kg-gallery-image img')
images.forEach(image => {
    const container = image.closest('.kg-gallery-image')
    const width = image.attributes.width.value
    const height = image.attributes.height.value
    const ratio = width / height
    container.style.flex = ratio + ' 1 0%'
})

// Tags displayed with hyphens
const tags = document.querySelectorAll('.tag')
tags.forEach(tag => {
    tag.textContent = tag.textContent.replaceAll(' ', '-')
})

// Navigation menu
let menuOpen = false
const navToggle = document.querySelector('.menu-link')
const menuState = document.querySelector('.menu-state')
const navMenu = document.querySelector('nav')
const numberOfNavLinks = document.querySelectorAll('nav ul > li').length
navToggle.onclick = () => {
    menuOpen = !menuOpen
    menuState.textContent = menuOpen ? '-' : '+'
    if (menuOpen) {
        navMenu.style.maxHeight = `calc(var(--line-height) * ${3 + numberOfNavLinks})`
    } else {
        navMenu.style.maxHeight = '0'
    }
}
