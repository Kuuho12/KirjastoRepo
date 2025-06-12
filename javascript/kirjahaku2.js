document.getElementById("searchForm").addEventListener('submit', function (e) {
    e.preventDefault();
    Lahetys()
});
document.getElementById("searchWriter").addEventListener('submit', function (e) {
    e.preventDefault();
    Lahetys()
});
function Lahetys() {
    //e.preventDefault(); // Estetään lomakkeen normaali lähetys
    let genre = "null"
    let hintaRange = `${hintaMin}–${hintaMax}`
    if (document.querySelector('input[name="genre"]:checked')) {
        genre = document.querySelector('input[name="genre"]:checked').value
    }
    //const julkaisuvuosi = document.querySelector('select[name="year"]').value
    const julkaisuvuosi = `${vuosiMin}–${vuosiMax}`
    const query = document.getElementById('searchInput').value.trim();
    const writerQuery = document.getElementById('kirjailijaInput').value.replace(/[-_\.]/g, "");
    //if (query) {
    window.location.href = '../kirjahaku.html?q=' + encodeURIComponent(genre) + encodeURIComponent("_") + encodeURIComponent(hintaRange) + encodeURIComponent("_") + encodeURIComponent(julkaisuvuosi) + encodeURIComponent("_") + encodeURIComponent(writerQuery) + encodeURIComponent("_") + encodeURIComponent(query);
    //}
}