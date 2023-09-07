export interface NewsCardProps {
    imageSrc: string;
    title: string;
    text: string;
    date: Date;
    link: string;
};


const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


export default function createElement(props: NewsCardProps): HTMLDivElement {
    let markdown = `
    <div class="news-card">
        <a class="news-card__wrap" href="${props.link}">
            <img class="news-card__img" src="${props.imageSrc}">
            
            <div class="news-card__body">
                <div class="news-card__title">${props.title}</div>
                <div class="news-card__text">${props.text}</div>
            </div>

            <div class="news-card__button round-button round-button-grey"></div>

            <div class="news-card__date">
                <div class="news-card__day">${props.date.getDate()}</div>
                <div class="news-card__month">${months[props.date.getMonth()]}</div>
            </div>
        </a>
    </div>
    `;

    let el = document.createElement('div');
    el.innerHTML = markdown;
    return el.children[0] as HTMLDivElement;
};