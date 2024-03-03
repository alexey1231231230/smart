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

    div.append(div_bg)
}

function showPhones( phone ) {
    addSmartphoneToDiv(phone, product_div)
}

phones.forEach( showPhones )