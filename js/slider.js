const slider = document.querySelector('.imgWrapper')
const sliderImg = document.getElementById("img1")
const dots = document.querySelectorAll('.dot')
let currPage = 0
function slideLeft() {
    if (currPage === 0) {
        return
    }
    let width = parseFloat(sliderImg.offsetWidth)
    let pos = parseFloat(slider.style.transform.replace('translateX(', '').replace('px)', ''))
    slider.style.transform = `translateX(${pos + width}px)`
    currPage = currPage - 1
    dots[currPage].setAttribute('id', 'selected')
    dots[currPage+1].removeAttribute('id')
}
function slideRight() {
    if (currPage === 2) {
        return
    }
    let width = parseFloat(sliderImg.offsetWidth)
    let pos = parseFloat(slider.style.transform.replace('translateX(', '').replace('px)', ''))
    slider.style.transform = `translateX(${pos - width}px)`
    currPage += 1
    dots[currPage].setAttribute('id', 'selected')
    dots[currPage-1].removeAttribute('id')
}