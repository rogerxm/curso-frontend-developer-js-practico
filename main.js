const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productoDetailCloseIcon = document.querySelector('.product-info-detail-close');
const burguerMenu= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-info-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productoDetailCloseIcon.addEventListener('click', closeProductDetailInfo);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    productDetailContainer.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailInfo() {
    productDetailContainer.classList.remove('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetailInfo() {
    productDetailContainer.classList.add('inactive');
}


// Productos del cátalogo 

const adidasJersey = [];

adidasJersey.push({
    name: "JERSEY LOCAL SELECCIÓN NACIONAL DE MÉXICO",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d728c2f055d461da079aec101474139_9366/Authentic_Jersey_Local_Seleccion_Nacional_de_Mexico_Verde_HD6898_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE VISITANTE MANCHESTER UNITED 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2700b53701664eb8b277ae2f00df6e5d_9366/Jersey_Uniforme_de_Visitante_Manchester_United_22-23_Blanco_H13880_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE LOCAL MANCHESTER UNITED 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/49808757050946de8bedae29011926b5_9366/Jersey_Uniforme_de_Local_Manchester_United_22-23_Rojo_H13881_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE VISITANTE REAL MADRID 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/910b2808403447feabeaaec401056696_9366/Jersey_Uniforme_de_Visitante_Real_Madrid_22-23_Violeta_H18489_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE LOCAL REAL MADRID 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aa1b019f4d9648ac87e6adde01234edd_9366/Jersey_Local_Real_Madrid_22-23_Blanco_HF0291_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE LOCAL BAYERN 21/22",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/84752835107f4bfa8972ad3400cb50d5_9366/Jersey_Local_FC_Bayern_21-22_Rojo_GM5313_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE VISITANTE JUVENTUS 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0191f3dde5b246b0814fae2a0131ccec_9366/Jersey_Uniforme_de_Visitante_Juventus_22-23_Negro_HD2015_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE LOCAL TIGRES 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50c39e9b6f944925a1e3aebe01246e98_9366/Jersey_Uniforme_de_Local_Tigres_UANL_22-23_Amarillo_HD3840_21_model.jpg",
})
adidasJersey.push({
    name: "JERSEY UNIFORME DE VISITANTE ARSENAL 22/23",
    price: 1799,
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50d597bf601d41c7b2c9adde013c3036_9366/Jersey_Uniforme_de_Visitante_Arsenal_22-23_Negro_H35902_21_model.jpg",
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailInfo);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(adidasJersey);

const nikeJersey = [];

nikeJersey.push({
    name: "Pumas UNAM local 2022/23 Match",
    price: 2599,
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a84febb8-20d1-4fa6-ab30-12c1b282d090/jersey-de-f%C3%BAtbol-dri-fit-adv-pumas-unam-local-2022-23-match-17tkvM.png",
})
nikeJersey.push({
    name: "Liverpool FC local 2022/23 Stadium",
    price: 1799,
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ebe8ee3-3e91-49a5-bd4c-2ff0ed44c383/jersey-de-f%C3%BAtbol-de-dri-fit-del-liverpool-fc-local-2022-23-stadium-B97R1n.png",
})
nikeJersey.push({
    name: "Club América visitante 2022/23 Stadium",
    price: 1699,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/25b568c1-5a55-4b5c-80e0-ec4cbace0d66/jersey-de-f%C3%BAtbol-dri-fit-club-am%C3%A9rica-visitante-2022-23-stadium-Nvxcmg.png",
})
nikeJersey.push({
    name: "Inter de Milán local 2022/23 Stadium",
    price: 1699,
    image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3b049c32-9984-4c60-b1ca-b9eb2d7aadae/jersey-de-f%C3%BAtbol-dri-fit-inter-de-mil%C3%A1n-local-2022-23-stadium-zcMqDN.png",
})

renderProducts(nikeJersey);
