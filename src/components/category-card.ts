
export interface CategoryCardProps {
    name: string;
    listNumber: number;
    imageSrc: string;
    inStock: number;
    link: string,
};


export default function createElement(props: CategoryCardProps): HTMLDivElement {
    let markdown = `
    <div class="category-card">
        <a class="category-card__wrap" href="${props.link}">
            <span class="category-card__number">${('0' + props.listNumber).slice(-2)}</span>
            <img class="category-card__img" src="${props.imageSrc}">
        
            <div class="category-card__info">
                <div class="category-card__stock">${props.inStock} товаров</div>
                <div class="category-card__name">${props.name}</div>
            </div>
        </a>
    </div>
    `;

    let el = document.createElement('div');
    el.innerHTML = markdown;
    return el.children[0] as HTMLDivElement;
};