import $ from 'jquery';
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import './styles/main.css';
import CategoryCard, { CategoryCardProps } from './components/category-card';



const categoriesData: CategoryCardProps[] = [
    {
        name: 'Ноутбуки',
        inStock: 105,
        listNumber: 1,
        imageSrc: '/images/categories/laptop.png',
        link: '#',
    },
    {
        name: 'Персональные компьютеры',
        inStock: 65,
        listNumber: 2,
        imageSrc: '/images/categories/desktop.png',
        link: '#',
    },
    {
        name: 'Серверы',
        inStock: 13,
        listNumber: 3,
        imageSrc: '/images/categories/server.png',
        link: '#',
    },
    {
        name: 'Dell EMC',
        inStock: 2345,
        listNumber: 4,
        imageSrc: '/images/categories/emc.png',
        link: '#',
    },
    {
        name: 'Запасные части к Dell EMC',
        inStock: 195,
        listNumber: 5,
        imageSrc: '/images/categories/emc-spare.png',
        link: '#',
    },
];



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



const categoryCards = new Array<HTMLElement>();
categoriesData.forEach(data => {
    categoryCards.push(CategoryCard(data));
});

$('.brief-catalog').append(categoryCards);