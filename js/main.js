'use strict'

let smartphone_1 = {
    name:'Iphone',
    image:'./src/images/52ae53268d51c10531162a005f525054.jpg',
    model:'XR',
    price:999,
    battery:5200,
    RAM:16,
    ROM:512,
    weight:450,
    camera:35,
}

let smartphone_2 = {
    name:'Iphone',
    image:'./src/images/52ae53268d51c10531162a005f525054.jpg',
    model:'XXXXR',
    price:999,
    battery:5200,
    RAM:32,
    ROM:512,
    weight:450,
    camera:35,
}

const product_div = document.body

function addSmartphoneToDiv(smartphone, div){
    let div_bg = document.createElement('div')
    let div_description = document.createElement('div')
    let image = document.createElement('img')
    image.src = smartphone.image

    let name = document.createElement('h3')
    name.innerText = smartphone.name

    div_bg.append(image)
    div_bg.append(div_description)

    div_description.append(name)

    div.append(div_bg)
}

addSmartphoneToDiv(smartphone_1, product_div)