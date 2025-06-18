const slider = document.querySelector('#hintaSlider');
const slider2 = document.querySelector('#vuosiSlider');
const priceRange = document.querySelector('#priceRange');
const vuosiRange = document.querySelector('#vuosiRange')
let labelTekstit = [["Hinta", "Vuosiväli"], ["Price", "Time frame"]]
let kieli = 0
let hintaMin = 0
let hintaMax = 60
let vuosiMin = 1997
let vuosiMax = 2027
noUiSlider.create(slider, {
    start: [hintaMin, hintaMax],
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
    start: [vuosiMin, vuosiMax],
    connect: true,
    range: {
        'min': 1997,
        'max': 2027
    },
    step: 1,
    format: {
        to: value => Math.round(value),
        from: value => Number(value)
    }
});

// Reagoi arvon muutokseen
slider.noUiSlider.on('update', function (values) {
    hintaMin = parseInt(values[0]);
    hintaMax = parseInt(values[1]);
    priceRange.textContent = `${labelTekstit[kieli][0]}: ${hintaMin}–${hintaMax} €`;
});
slider2.noUiSlider.on('update', function (values) {
    vuosiMin = parseInt(values[0]);
    vuosiMax = parseInt(values[1]);
    vuosiRange.textContent = `${labelTekstit[kieli][1]}: ${vuosiMin}–${vuosiMax}`;
});