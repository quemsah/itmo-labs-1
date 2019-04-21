const drawBuffer = (width, height, context, buffer) => {
    let data = buffer.getChannelData(0);
    let step = Math.ceil(data.length / width);
    let amp = height / 2;
    for (let i = 0; i < width; i++) {
        let min = 1.0;
        let max = -1.0;
        for (let j = 0; j < step; j++) {
            let datum = data[(i * step) + j];
            if (datum < min)
                min = datum;
            if (datum > max)
                max = datum;
        }
        context.fillRect(i, (1 + min) * amp, 1, Math.max(1, (max - min) * amp));
    }
}

function Clicked() {
    let ctx = new window.AudioContext();
    console.log(ctx);
    // создаем контекст
    let source = ctx.createBufferSource();
    console.log(source);
    // создаем createBufferSource – обьект,
    // который используется для 
    // воспроизведения звукового потока
    // В отличие от createMediaElementSource(), он
    // не ассоциируется с каким-либо хтмл-элементом
    // теги <видео> <аудио>
    fetch("https://wavesurfer-js.org/example/media/demo.wav")
        .then(response => response.arrayBuffer())
        // response – ReadableStream
        // промис разрешается обьектом ArrayBuffer 
        // сырые двоичные данные
        .then(data => {
            ctx.decodeAudioData(data).then(buffer => {
                // decodeAudioData используется для 
                // декодирования этих двоичные данных 
                source.buffer = buffer;
                // аудиобуфер
                // let canvas = document.getElementById("vis");
                // drawBuffer(canvas.width, canvas.height, canvas.getContext('2d'), buffer);
                let wavesurfer = WaveSurfer.create({
                    container: document.querySelector('#waveform'),
                    waveColor: 'white',
                    progressColor: 'red',
                    backend: 'MediaElement'
                });
                wavesurfer.load('https://wavesurfer-js.org/example/media/demo.wav');
                // визуализируем
                source.connect(ctx.destination);
                // подключаемся к выходному узлу (колонкам)
                source.start();
                // воспроизводим
            });
        });
}