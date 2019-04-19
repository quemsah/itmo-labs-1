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
                    source.connect(ctx.destination);
                    // подключаемся к выходному узлу (колонкам)
                    source.start();
                    // воспроизводим
                });
        });
}