window.onload = function () {
    //createHolels

    // Iframe


    let srcArray = [
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12822.582045958052!2d-93.2818185!3d36.5385457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf045be251a223%3A0xc2db6bd283670854!2sWilderness%20Club%20At%20Big%20Cedar!5e0!3m2!1sru!2sua!4v1681756711394!5m2!1sru!2sua",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12822.238959447739!2d-93.2874833254395!3d36.540614509090624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cee28d30e4d851%3A0xe6471cb861e6bfcd!2sBluegreen%20Vacations%20Paradise%20Point%20Resort!5e0!3m2!1sru!2sua!4v1681757063402!5m2!1sru!2sua",
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12822.976586125427!2d-93.27263461633308!3d36.536166501114685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cee2c441b00809%3A0xc782f9b084a3db80!2sFalls%20Lodge%20At%20Big%20Cedar!5e0!3m2!1sru!2sua!4v1681757117826!5m2!1sru!2sua"
    ];

    let wrapper = document.querySelector(".wrapper")
    let hotelMenu = document.querySelector(".hotelMenu");
    let btnHotels = document.querySelectorAll(".showMap");

    btnHotels.forEach(btn => btn.addEventListener("click", function (e) {
        let contr = document.querySelector('.iframe');
        if (contr) {
            contr.remove();
            showIframe(e.target.dataset.hotel);
        }
        else {
            showIframe(e.target.dataset.hotel);
        }
    }));

    function showIframe(hotelName) {
        switch (hotelName) {
            case "Wilderness Club at Big Ceddar":
                hotelMenu.append(createIframe(0));
                break;
            case "Bluegreen Vacations Paradise Point":
                hotelMenu.append(createIframe(1));
                break;
            case "Falls Lodge At Big Cedar":
                hotelMenu.append(createIframe(2));
                break;
        }
    }

    function createIframe(index) {
        let div = document.createElement("div");
        div.classList.add("iframeDiv");
        let iframe = document.createElement("iframe");
        iframe.src = srcArray[index];
        iframe.allowFullscreen = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.classList.add("iframe");
        let button = document.createElement("button");
        button.textContent = "X";
        button.onclick = closeIframe;
        button.classList.add("btnCloseIframe");
        div.append(button);
        div.append(iframe);
        return div;
    }

    function closeIframe(e) {
        e.target.parentElement.style.display = "none";
    }


    // Carousel


    document.querySelector(".next").addEventListener("click", function () {
        moveImgCarousel(1);
    });
    document.querySelector(".prev").addEventListener("click", function () {
        moveImgCarousel(-1)
    });


    function moveImgCarousel(value) {
        let activImg = document.querySelector("[data-active]");
        let allSlides = [...document.querySelectorAll(".slide")];
        let index = allSlides.indexOf(activImg);
        let newIndex = index + value;

        if (newIndex < 0) newIndex = allSlides.length - 1;
        if (newIndex >= allSlides.length) newIndex = 0;
        allSlides[newIndex].dataset.active = true;
        delete activImg.dataset.active
    }

}

document.querySelectorAll(".slide").forEach(slide => slide.addEventListener("click", function () {
    let activImg = document.querySelector("[data-active]");
    if (activImg.firstElementChild.className == "img") activImg.firstElementChild.className = "bigPhoto";
    else if (activImg.firstElementChild.className == "bigPhoto") activImg.firstElementChild.className = "img";

}));

// img

let firstHotel = ["img/slider/1.jpg", "img/slider/2.jpg", "img/slider/3.jpg", "img/slider/4.jpg", "img/slider/5.jpg", "img/slider/6.jpg"];
let secondHotel = ["img/slider/2/1.jpg", "img/slider/2/2.jpg", "img/slider/2/3.jpg", "img/slider/2/4.jpg", "img/slider/2/5.jpg"];
let thirstHotel = ["img/slider/3/1.jpg", "img/slider/3/2.jpg", "img/slider/3/3.jpg", "img/slider/3/4.jpg", "img/slider/3/5.jpg"];

let imgBtns= document.querySelectorAll(".showImg");
imgBtns.forEach(img => img.addEventListener("click", function (e) {
    document.querySelector(".carousel").scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
    switch (e.target.dataset.hotel) {
        case "Wilderness Club at Big Ceddar":
            givNewImg(firstHotel);
            break;
        case "Bluegreen Vacations Paradise Point":
            givNewImg(secondHotel);
            break;
        case "Falls Lodge At Big Cedar":
            givNewImg(thirstHotel);
            break;
    }
}));

function givNewImg(array) {
    let imgArr = document.querySelectorAll(".img");
    for (let index = 0; index < imgArr.length; index++){
        if(!imgArr[index] || !array[index]) return;
        imgArr[index].src = array[index];
    }
}


//  video

let videoArr = document.querySelectorAll(".showVideo");
videoArr.forEach(video => video.addEventListener("click", function (e) {
    let videoIframe = document.querySelector(".videoIframe");
    videoIframe.scrollIntoView({
        block: "center",
        behavior: "smooth",
    });
    switch (e.target.dataset.hotel) {
        case "Wilderness Club at Big Ceddar":
            videoIframe.src = "https://www.youtube.com/embed/NDqkW3KLjaw";
            break;
        case "Bluegreen Vacations Paradise Point":
            videoIframe.src = "https://www.youtube.com/embed/XPd9fYzp9VQ";
            break;
        case "Falls Lodge At Big Cedar":
            videoIframe.src = "https://www.youtube.com/embed/JiyEbEYPjWA";
            break;
    }
}));
