import $ from 'jquery';
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import './styles/main.css';
import CategoryCard, { CategoryCardProps } from './components/category-card';
import InfoCard, { InfoCardProps } from './components/info-card';



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

const categoryCards = new Array<HTMLElement>();
categoriesData.forEach(data => {
    categoryCards.push(CategoryCard(data));
});

$('.brief-catalog').append(categoryCards);



const infoCardsData: InfoCardProps[] = [
    {
        header: 'Самые выгодные \n и низкие цены',
        text: 'В наличии широкий ассортимент, \n а также доступные цены \n на ноутбуки Dell',
        iconSrc: '/icons/info-cards/card-pos.svg',
    },
    {
        header: 'Авторизованный \n сервисный центр DELL',
        text: 'Сертифицированный сервисный \n центр по ремонту техники Dell \n в России и странах СНГ',
        iconSrc: '/icons/info-cards/tick.svg',
    },
    {
        header: 'Высокий уровень \n технической экспертизы',
        text: 'Мы прошли аттестацию в виде \n тестирования, где показали \n высокий уровень знаний',
        iconSrc: '/icons/info-cards/people.svg',
    },
    {
        header: 'Официальный партнер \n DELL',
        text: 'Официальный поставщик \n продукции DELL в России \n и странах СНГ',
        iconSrc: '/icons/info-cards/3dcube.svg',
    },
];

const infoCards = new Array<HTMLElement>();
infoCardsData.forEach(data => {
    infoCards.push(InfoCard(data));
});

$('.advantages-cards').append(infoCards);