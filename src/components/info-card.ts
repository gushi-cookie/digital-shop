export interface InfoCardProps {
    header: string;
    text: string;
    iconSrc: string;
};


export default function createElement(props: InfoCardProps): HTMLDivElement {
    let background = `background: url('${props.iconSrc}') center / 36px no-repeat, #343A41`;

    let markdown = `
    <div class="info-card">
        <div style="${background}" class="info-card__icon"></div>
        <div class="info-card__main">
            <div class="info-card__header">${props.header}</div>
            <div class="info-card__text">${props.text}</div>
        </div>
    </div>
    `;

    let el = document.createElement('div');
    el.innerHTML = markdown;
    return el.children[0] as HTMLDivElement;
};