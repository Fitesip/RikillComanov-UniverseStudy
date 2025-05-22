function addToCart(productName) {
    const qty = document.getElementById('qty').value
    const button = document.querySelector('.button')
    localStorage.setItem(productName, qty)
    button.innerText = 'В корзине'
    button.setAttribute('class', 'button inCart')
    button.setAttribute('onclick', `removeFromCart('${productName}')`)
}
function removeFromCart(productName) {
    console.log(productName)
    localStorage.removeItem(productName)
    const button = document.querySelector('.button')
    button.innerText = 'В корзину'
    button.setAttribute('class', 'button')
    button.setAttribute('onclick', `addToCart('${productName}')`)
}

const qty = document.getElementById('qty')
qty.addEventListener('input', function () {
    changeQTY()
})
function changeQTY() {
    const buttonValue = document.querySelector('.button').attributes[1].value.replace(/[^а-яА-Я\s]/g, '')
    const buttonClass = document.querySelector('.button').attributes[0].value
    const qty = document.getElementById('qty').value
    if (buttonClass === 'button inCart') {
        let a = localStorage.getItem(buttonValue)
        console.log(buttonValue)
        console.log(a)
        localStorage.setItem(buttonValue, qty)
    }
}