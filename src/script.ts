type Style = {
    name: string;
    file: string;
};

// Массив стилей, включая новый стиль
const styles: Style[] = [
    { name: "Styl 1", file: "css/page1.css" },
    { name: "Styl 2", file: "css/page2.css" },
    { name: "Styl 3", file: "css/page3.css" }  // Новый стиль
];

// Функция для изменения стиля
function changeStyle(styleFile: string): void {
    const stylesheet = document.getElementById("stylesheet") as HTMLLinkElement;
    stylesheet.href = styleFile;
}

// Функция для генерации кнопок для переключения стилей
function generateStyleLinks(): void {
    const linksContainer = document.getElementById("links")!;

    styles.forEach(style => {
        const button = document.createElement("button");
        button.textContent = style.name;
        button.onclick = () => changeStyle(style.file);
        linksContainer.appendChild(button);
    });
}

// Запуск функции при загрузке страницы
document.addEventListener("DOMContentLoaded", generateStyleLinks);
