document.getElementById("searchForm").addEventListener('submit', function (e) {
    e.preventDefault();
    Lahetys()
});
document.getElementById("searchWriter").addEventListener('submit', function (e) {
    e.preventDefault();
    Lahetys()
});
function Lahetys() {
    let genre = ""
    let hintaRange = `${hintaMin}–${hintaMax}`
    let selected = document.querySelectorAll('input[name="genre"]:checked');
    if (selected.length > 0) {
        selected.forEach(selectedE => {
            genre += selectedE.value + "-";
        });
        //console.log(document.querySelectorAll('input[name="genre"]:checked'), genre)
    }
    const julkaisuvuosi = `${vuosiMin}–${vuosiMax}`
    const query = document.getElementById('searchInput').value.trim();
    const writerQuery = document.getElementById('kirjailijaInput').value.replace(/[-_\.]/g, "");
    window.location.href = '../kirjahaku.html?q=' + encodeURIComponent(genre) + encodeURIComponent("_") + encodeURIComponent(hintaRange) + encodeURIComponent("_") + encodeURIComponent(julkaisuvuosi) + encodeURIComponent("_") + encodeURIComponent(writerQuery) + encodeURIComponent("_") + encodeURIComponent(query);
}