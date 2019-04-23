export const getData = async (url) => (await fetch(url)).json();
export const randomDarkColor = () => "hsl(" + Math.random() * 360 + ", 100%, 20%)";
export const drawBar = (ctx, upperLeftCornerX, upperLeftCornerY, width, height, offset, name) => {
    //элемент
    ctx.fillStyle = randomDarkColor();
    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width - offset, height);
    //подпись
    ctx.font = "20px Verdana";
    ctx.fillStyle = "white";
    ctx.fillText(name, upperLeftCornerX + offset, ctx.canvas.height - offset);
};
export const setAttributes = (el, attrs) => {
    for (var key in attrs)(key != "text") ? el.setAttribute(key, attrs[key]) : el.textContent = attrs[key]
    return el;
};