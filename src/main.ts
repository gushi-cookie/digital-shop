import $ from 'jquery';
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import './styles/main.css';



$('#main-carousel').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false as any,
    nextArrow: `<span class="main-carousel__next-arrow"></span>`,
});