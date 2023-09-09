import $ from 'jquery';
import 'normalize.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import './styles/main.css';
import CategoryCard, { CategoryCardProps } from './components/category-card';
import InfoCard, { InfoCardProps } from './components/info-card';
import NewsCard, { NewsCardProps } from './components/news-card';



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
        header: 'Самые выгодные и низкие цены',
        text: 'В наличии широкий ассортимент, а также доступные цены на ноутбуки Dell',
        iconSrc: '/icons/info-cards/card-pos.svg',
    },
    {
        header: 'Авторизованный сервисный центр DELL',
        text: 'Сертифицированный сервисный центр по ремонту техники Dell в России и странах СНГ',
        iconSrc: '/icons/info-cards/tick.svg',
    },
    {
        header: 'Высокий уровень технической экспертизы',
        text: 'Мы прошли аттестацию в виде тестирования, где показали высокий уровень знаний',
        iconSrc: '/icons/info-cards/people.svg',
    },
    {
        header: 'Официальный партнер DELL',
        text: 'Официальный поставщик продукции DELL в России и странах СНГ',
        iconSrc: '/icons/info-cards/3dcube.svg',
    },
];

const infoCards = new Array<HTMLElement>();
infoCardsData.forEach(data => {
    infoCards.push(InfoCard(data));
});

$('.advantages-cards').append(infoCards);



const newsCardsData: NewsCardProps[] = [
    {
        title: 'GE использует технологии Dell',
        text: 'Вы можете посмотреть ещё больше интересных',
        link: '#',
        imageSrc: '/images/news/card1.png',
        date: new Date('11 sep 2023'),
    },
    {
        title: 'GE использует технологии Dell',
        text: 'Вы можете посмотреть ещё больше интересных',
        link: '#',
        imageSrc: '/images/news/card2.png',
        date: new Date('27 jan 2023'),
    },
    {
        title: 'GE использует технологии Dell',
        text: 'Вы можете посмотреть ещё больше интересных',
        link: '#',
        imageSrc: '/images/news/card3.png',
        date: new Date('15 march 2023'),
    },
    {
        title: 'GE использует технологии Dell',
        text: 'Вы можете посмотреть ещё больше интересных',
        link: '#',
        imageSrc: '/images/news/card4.png',
        date: new Date('11 sep 2023'),
    },
    {
        title: 'GE использует технологии Dell',
        text: 'Вы можете посмотреть ещё больше интересных',
        link: '#',
        imageSrc: '/images/news/card5.png',
        date: new Date('24 feb 2023'),
    },
    {
        title: 'GE использует технологии Dell',
        text: 'Вы можете посмотреть ещё больше интересных',
        link: '#',
        imageSrc: '/images/news/card6.png',
        date: new Date('2023-09-23'),
    },
];

const newsCards = new Array<HTMLElement>();
newsCardsData.forEach(data => {
    newsCards.push(NewsCard(data));
});

$('.latest-news__cards').append(newsCards);