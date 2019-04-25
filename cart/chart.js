import {
    drawBar
} from "./funcs.js";
export default class Chart {
    constructor(options) {
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        //ищем максимум
        let data = this.options.data;
        var maxValue = Math.max.apply(null, Object.keys(data).map((key) => data[key]));
        //рисуем
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (this.canvas.width) / numberOfBars;
        Object.entries(data).forEach(([key, value], i) => {
            console.log(key + ' = ' + value);
            var barHeight = Math.round(this.canvas.height * value / maxValue);
            drawBar(this.ctx, i * barSize, this.canvas.height - barHeight, barSize, barHeight, this.canvas.offset, key);
        })
    }
}