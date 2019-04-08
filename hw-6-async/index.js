/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, seconds * 1000)
    })

    return promise;
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    return new Promise((rs, rj) =>
        fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
            .then(response => response.json())
            .then(y => y.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
            .then(result => rs(result))
            .catch(() => console.log('Can’t access ' + url + ' response. Blocked by browser?')));
}

export {
    delayPromise,
    loadAndSortTowns
};