const slider = document.querySelector('#hintaSlider');
const slider2 = document.querySelector('#vuosiSlider');
const priceRange = document.querySelector('#priceRange');
const vuosiRange = document.querySelector('#vuosiRange')
let hintaMin = 0
let hintaMax = 60
let vuosiMin = 1900
let vuosiMax = 2025
noUiSlider.create(slider, {
    start: [0, 60],
    connect: true,
    range: {
        'min': 0,
        'max': 60
    },
    step: 1,
    format: {
        to: value => Math.round(value),
        from: value => Number(value)
    }
});
noUiSlider.create(slider2, {
    start: [1900, 2025],
    connect: true,
    range: {
        'min': 1900,
        'max': 2025
    },
    step: 2,
    format: {
        to: value => Math.round(value),
        from: value => Number(value)
    }
});

// Reagoi arvon muutokseen
slider.noUiSlider.on('update', function (values) {
    hintaMin = parseInt(values[0]);
    hintaMax = parseInt(values[1]);
    priceRange.textContent = `Hinta: ${hintaMin}–${hintaMax} €`;
});
slider2.noUiSlider.on('update', function (values) {
    vuosiMin = parseInt(values[0]);
    vuosiMax = parseInt(values[1]);
    vuosiRange.textContent = `Vuosiväli: ${vuosiMin}–${vuosiMax}`;
});