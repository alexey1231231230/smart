'use strict'

const product_div = document.body

function addSmartphoneToDiv(smartphone, div){
    let div_bg = document.createElement('div')
    div_bg.className = 'phone-bg'

    let div_img = document.createElement('div')
    div_img.className = 'phone-img'
    div_bg.append(div_img)

    let image = document.createElement('img')
    image.src = smartphone.image
    div_img.append(image)

    let div_description = document.createElement('div')
    div_description.className = 'phone-description'
    div_bg.append(div_description)

    let name = document.createElement('h3')
    name.innerHTML = `${smartphone.name} <span>${smartphone.model}</span>`
    div_description.append(name)

    let ROM = document.createElement('p')
    ROM.innerHTML = `встроенная память: <span>${smartphone.ROM} Гб</span>`
    div_description.append(ROM)

    let RAM = document.createElement('p')
    RAM.innerHTML = `оперативная память: <span>${smartphone.RAM} Гб</span>`
    div_description.append(RAM)

    let battery = document.createElement('p')
    battery.innerHTML = `батарея: <span>${smartphone.battery} Мл/ч</span>`
    div_description.append(battery)

    let weight = document.createElement('p')
    weight.innerHTML = `вес: <span>${smartphone.weight} Г</span>`
    div_description.append(weight)

    let camera = document.createElement('p')
    camera.innerHTML = `камера: <span>${smartphone.camera} Мп</span>`
    div_description.append(camera)

    let screen = document.createElement('p')
    screen.innerHTML = `экран: <span>${smartphone.weight} "</span>`
    div_description.append(screen)

    let order = document.createElement('div')
    order.className = 'order'
    div_description.append(order)

    let price = document.createElement('div')
    price.innerHTML = `${smartphone.price} $`
    order.append(price)

    let button = document.createElement('button')
    button.innerText = 'Купить'
    order.append(button)

    div.append(div_bg)
}

function showPhones( phone ) {
    addSmartphoneToDiv(phone, product_div)
}

phones.forEach( showPhones )