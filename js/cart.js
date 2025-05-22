function setCart() {

    for (let i = 0; i < localStorage.length; i ++) {
        let productName = localStorage.key(i)
        let cartProduct = document.createElement('div')
        cartProduct.setAttribute('class', 'cartProduct')
        cartProduct.setAttribute('id', productName + 'Container')
        let productImage = document.createElement('img')
        let XAndQTY = document.createElement('div')
        XAndQTY.setAttribute('class', 'XAndQTY')
        let x = document.createElement('img')
        x.setAttribute('src', '../res/img/x.svg')
        x.setAttribute('onclick', `deleteProduct('${productName}Container')`)
        let productNameAndPrice = document.createElement('div')
        productNameAndPrice.setAttribute('class', 'productNameAndPrice')
        let h2 = document.createElement('h2')
        h2.innerText = productName
        let p = document.createElement('p')
        p.innerText = "20.00 руб"
        p.setAttribute('class', 'productPriceCart')
        productImage.setAttribute('src', `../res/img/${productName}.png`)
        let qtySelectorCart = document.createElement('div')
        qtySelectorCart.setAttribute('class', 'qtySelectorCart')
        let qty = document.createElement('p')
        qty.innerText = 'Количество :'
        let inputContainer = document.createElement('div')
        inputContainer.setAttribute('class', 'inputContainer')
        let qtyButtonCart1 = document.createElement('button')
        qtyButtonCart1.setAttribute('class', 'qtyButtonCart')
        qtyButtonCart1.setAttribute('onclick', `${productName}.stepDown(); changeQTY('${productName}')`)
        let qtyButtonCart1Image = document.createElement('img')
        qtyButtonCart1Image.setAttribute('src', '../res/img/minus.svg')
        let input = document.createElement('input')
        input.setAttribute('id', `${productName}`)
        input.setAttribute('name', `${productName}`)
        input.setAttribute('type', 'number')
        input.setAttribute('min', '1')
        input.setAttribute('class', 'qtyInputCart')
        input.setAttribute('value', localStorage.getItem(productName))
        let qtyButtonCart2 = document.createElement('button')
        qtyButtonCart2.setAttribute('class', 'qtyButtonCart')
        qtyButtonCart2.setAttribute('onclick', `${productName}.stepUp(); changeQTY('${productName}')`)
        let qtyButtonCart2Image = document.createElement('img')
        qtyButtonCart2Image.setAttribute('src', '../res/img/plus.svg')
        const cartProducts = document.querySelector('.cartProducts')
        cartProducts.appendChild(cartProduct)
        cartProduct.appendChild(productImage)
        cartProduct.appendChild(productNameAndPrice)
        productNameAndPrice.appendChild(h2)
        productNameAndPrice.appendChild(p)
        cartProduct.appendChild(XAndQTY)
        XAndQTY.appendChild(x)
        XAndQTY.appendChild(qtySelectorCart)
        qtySelectorCart.appendChild(qty)
        qtySelectorCart.appendChild(inputContainer)
        inputContainer.appendChild(qtyButtonCart1)
        inputContainer.appendChild(input)
        inputContainer.appendChild(qtyButtonCart2)
        qtyButtonCart1.appendChild(qtyButtonCart1Image)
        qtyButtonCart2.appendChild(qtyButtonCart2Image)

    }
    change()
    changeTotalPrice()
}
setCart()
function change() {
    const inputs = document.querySelectorAll('.qtyInputCart')
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i]
        input.addEventListener('change', function () {
            changeQTY(`${input.id}`)
        })
    }
}

function changeQTY(inputID) {
    let input = document.getElementById(inputID)
    localStorage.setItem(inputID, input.value)
    changeTotalPrice()
}
function changeTotalPrice() {
    const price = document.getElementById('price')
    const products = document.querySelectorAll('.qtyInputCart')
    const productPrices = document.querySelectorAll('.productPriceCart')
    let total = 0
    for (let i = 0; i < products.length; i++) {
        let product = products[i].value
        let productPrice = parseFloat(productPrices[i].innerText.replace(' руб', ''))
        total += productPrice * product
    }
    price.innerText = total + ' руб'
}
function deleteProduct(productName) {

    const cartProducts = document.querySelector('.cartProducts')
    cartProducts.removeChild(document.getElementById(productName))
    productName = productName.replace('Container', '')
    localStorage.removeItem(productName)
    changeTotalPrice()
}
