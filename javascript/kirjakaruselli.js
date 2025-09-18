const Books = [ // Laita genret tärkeysjärjestyksessä. Muista päivittää myös kirjahaku.html
    ["Sapiens - Ihmisen lyhyt historia", "SapiensIhmisenLyhytHistoria.webp", "tietokirjat/Sapiens-Ihmisen_lyhyt_historia.html", "Yuval Noah Harari", ["tieto"], 13.95, 2024],
    ["Let Them Theory", "TheLetThemTheory.webp", "tietokirjat/Let_Them_Theory.html", "Mel Robbins", ["tieto", "english"], 34.95, 2024],
    ["5 Types of Wealth: A Transformative Guide to Design Your Dream Life", "The5TypesOfWealth.webp", "tietokirjat/5_Types_Of_Wealth.html", "Sahil Bloom", ["tieto", "english"], 29.95, 2025],
    ["Kylmä Krematorio", "KylmaKrematorio.webp", "tietokirjat/Kylma_krematorio.html", "József Debreczeni", ["tieto"], 31.95, 2025],
    ["Sinun tähtesi täällä", "SinunTahtesiTaalla.webp", "tietokirjat/Sinun_tahtesi_taalla.html", "Jenni Haukio", ["tieto"], 30.95, 2023],
    ["Sun Tzu's The Art of War", "SunTzu'sTheArtOfWar.avif", "tietokirjat/SunTzu'sTheArtOfWar.html", "Sun Tzu", ["tieto", "english"], 19.95, 2009],
    ["Murha! - 100 mysteeriä nojatuolietsiville", "Murha100Mysteeria.webp", "tietokirjat/Murha!-100_mysteeria_nojatuolietsiville.html", "G. T. Karber", ["tieto", "kauno"], 20.95, 2024],
    ["Taru Sormusten Herrasta", "TaruSormustenHerrasta.webp", "fantasiakirjat/Taru_Sormusten_Herrasta.html", "J. R. R. Tolkien", ["fantasia", "kauno"], 56.95, 2023],
    ["Winds Of Winter", "WindsOfWinter.webp", "uutuudet/The_winds_of_winter.html", "George R. R. Martin", ["fantasia", "kauno", "english"], 34.95, 2027],
    ["Ratkomme murhia", "RatkommeMurhia.PNG", "uutuudet/Ratkomme_murhia.html", "Richard Osman", ["nuorten", "kauno"], 31.95, 2025],
    ["Onyx Storm", "OnyxStorm.PNG", "uutuudet/Onyx_storm.html", "Rebecca Yarros", ["fantasia", "kauno", "english"], 19.95, 2025],
    ["Heikki Silvennoinen Nousut ja laskut", "HeikkiSilvennoinenNousutJaLaskut.PNG", "uutuudet/Heikki_Silvennoinen_Nousut_ja_laskut.html", "Tommi Saarela", ["tieto"], 30.95, 2024],
    ["Toivoa versovat päivät", "ToivoaVersovatPäivät.PNG", "uutuudet/Toivoa_versovat_paivat.html", "Melissa Da Costa", ["kauno"], 31.95, 2025],
    ["Elämän lyhyydestä", "ElamanLyhyydesta.webp", "tietokirjat/Elaman_lyhyydesta.html", "Seneca", ["tieto"], 18.95, 2018],
    ["Kielipäiväkirja", "kielipäiväkirja.webp", "tietokirjat/Kielipaivakirja.html", "Mauri Kunnas", ["tieto"], 15.95, 2016],
    ["Laadullinen tutkimus ja sisällönanalyysi", "LaadullinenTutkimus.webp", "tietokirjat/Laadullinen_tutkimis_ja_sisallonanalyysi.html", "Jouni Tuomi / Anneli Sarajärvi", ["tieto"], 51.95, 2024],
    ["Vauva - omistajan opas", "VauvaOmistajanOpas.webp", "tietokirjat/Vauva-omistajan_opas.html", "Louis Borgenicht / Joe Borgenicht", ["tieto"], 13.95, 2020],
    ["Punainen verkko", "PunainenVerkko.PNG", "uutuudet/Punainen_verkko.html", "Aamos Honka", ["kauno"], 29.95, 2025],
    ["The JFK conspiracy", "TheJFKConspiracy.PNG", "uutuudet/The_JFK_conspiracy.html", "Brad Meltzer", ["tieto", "english"], 36.95, 2025],
    ["Sadan vuoden yksinäisyys", "SadanVuodenYksinäisyys.PNG", "uutuudet/Sadan_vuoden_yksinaisyys.html", "Gabriel Garcia Marquez", ["kauno"], 31.95, 2021],
    ["Pimeyden sydän", "PimeydenSydän.PNG", "suosituimmat/Pimeyden_sydan.html", "Ilkka Remes", ["kauno"], 29.95, 2023],
    ["Suon villi laulu", "SuonVilliLaulu.PNG", "suosituimmat/Suon_villi_laulu.html", "Delia Owens", ["kauno"], 29.95, 2021],
    ["Sota ja rauha", "SotaJaRauha.PNG", "suosituimmat/Sota_ja_rauha.html", "Leo Tolstoi", ["kauno"], 33.95, 2025],
    ["And then there were none", "AndThenThereWereNone.PNG", "suosituimmat/And_then_there_were_none.html", "Agatha Christie", ["kauno", "english"], 24.95, 2019],
    ["Sinuhe egyptiläinen", "SinuheEgyptiläinen.PNG", "suosituimmat/Sinuhe_egyptilainen.html", "Mika Waltari", ["kauno"], 30.95, 2025],
    ["Tuntematon sotilas", "TuntematonSotilas.PNG", "suosituimmat/Tuntematon_sotilas.html", "Väinö Linna", ["kauno"], 30.95, 2019],
    ["Harry Potter ja viisasten kivi", "HarryPotterJaViisastenKivi.PNG", "suosituimmat/Harry_Potter_ja_viisasten_kivi.html", "J. K. Rowling", ["nuorten", "lasten", "kauno"], 25.95, 2000],
    ["Täällä Pohjantähden alla", "TäälläPohjantähdenAlla.PNG", "suosituimmat/Taalla_pohjantahden_alla.html", "Väinö Linna", ["kauno"], 28.95, 2018],
    ["The Lord of the Rings", "TheLordOfTheRings.PNG", "suosituimmat/The_lord_of_the_rings.html", "J. R. R. Tolkien", ["fantasia", "kauno", "english"], 33.95, 2005],
    ["Hohto", "Hohto.PNG", "suosituimmat/Hohto.html", "Stephen King", ["kauhu", "kauno"], 33.95, 2013],
    ["Edgar Allan Poe's Classic Tales of Horror", "EdgarAllanPoeClassicTalesOfHorror.webp", "kauhukirjat/EdgarAllanPoesClassicTalesOfHorror.html", "Edgar Allan Poe", ["kauhu", "kauno", "english"], 17.60, 2023],
    ["Myöhemmin", "Myohemmin.webp", "kauhukirjat/Myohemmin.html", "Stephen King", ["kauhu", "kauno"], 12.95, 2023],
    ["Hoivakoti", "Hoivakoti.webp", "kauhukirjat/Hoivakoti.html", "Mats Strandberg", ["kauhu", "kauno"], 12.95, 2018],
    ["Frankenstein", "Frankenstein.webp", "kauhukirjat/Frankenstein.html", "Mary Shelley", ["kauhu", "kauno"], 14.95, 2024],
    ["Ne muut", "NeMuut.webp", "kauhukirjat/Ne_muut.html", "C. J. Tudor", ["kauhu", "kauno"], 28.95, 2021],
    ["Kuokkamummo", "Kuokkamummo.webp", "kauhukirjat/Kuokkamummo.html", "Marko Hautala", ["kauho", "kauno"], 12.95, 2023],
    ["Holly", "Holly.webp", "kauhukirjat/Holly.html", "Stephen King", ["kauho", "kauno"], 34.95, 2024],
    ["On Suurten Muinaisten aika", "OnSuurtenMuinastenAika.webp", "kauhukirjat/OnSuurtenMuinaistenAika.html", "Juri Nummelin", ["kauhu", "kauno"], 12.95, 2023],
    ["Dracula", "Dracula.webp", "kauhukirjat/Dracula.html", "Bram Stoker", ["kauhu", "kauno"], 14.95, 2010],
    ["Pimeällä puolella", "PimeallaPuolella.webp", "kauhukirjat/Pimealla_puolella.html", "Stephen King", ["kauhu", "kauno"], 33.95, 2025],
    ["H. P. Lovecraftin parhaat", "H.P.Lovecraft.webp", "kauhukirjat/H_P_Lovecraftin_parhaat.html", "H. P. Lovecraft", ["kauhu", "kauno"], 35.95, 2025],
    ["Gwendy", "Gwendy.webp", "kauhukirjat/Gwendy.html", "Stephen King", ["kauhu", "kauno"], 16.95, 2024],
    ["Atomic Habits", "AtomicHabits.webp", "englanninkieliset/Atomic_Habits.html", "James Clear", ["tieto", "english"], 27.95, 2018],
    ["Sunrise on the Reaping", "SunriseOnTheReaping.webp", "englanninkieliset/SunriseOnTheReaping.html", "Suzanne Collins", ["fantasia", "kauno", "english"], 23.95, 2025],
    ["The Picture of Dorian Gray", "PictureOfDorianGray.webp", "englanninkieliset/PictureOfDorianGray.html", "Oscar Wilde", ["kauno", "english"], 15.95, 2012],
    ["The Strawberry Patch Pancake House", "StrawberryPatchPancakeHouse.webp", "englanninkieliset/StrawberryPatchPancakeHouse.html", "Laurie Gilmore", ["kauno", "english"], 18.95, 2025],
    ["The Great Gatsby", "TheGreatGatsby.webp", "englanninkieliset/GreatGatsby.html", "F Scott Fitzgeral", ["kauno", "english"], 29.95, 2025],
    ["A Court of Wings and Ruin", "CourtOfWingsAndRuin.webp", "fantasiakirjat/A_Cuort_of_Wings_and_Ruin", "Sarah J. Maas", ["fantasia", "kauno", "english"], 18.95, 2020],
    ["Luvattu maa", "LuvattuMaaObama.jpg", "tietokirjat/Luvattu_maa.html", "Barack Obama", ["tieto"], 15.95, 2022],
    ["Myrksynsilmä", "MyrskynSilma.webp", "fantasiakirjat/Myrskynsilma.html", "Rebecca Yarros", ["fantasia", "kauno"], 29.95, 2025],
    ["Kohtalon miekka - The Witcher - Noituri 2", "WitcherKohtalonMiekka.webp", "fantasiakirjat/Kohtalon_miekka.html", "Andrzej Sapkowski", ["fantasia", "kauno"], 25.95, 2020],
    ["Rautaliekki", "RautaLiekki.webp", "fantasiakirjat/Rautaliekki.html", "Rebecca Yarros", ["fantasia", "kauno"], 29.95, 2024],
    ["On Wings of Blood", "81mnU-2VyYL._SY522_.jpg", "fantasiakirjat/OnWingsOfBlood.html", "Briar Boleyn", ["fantasia", "kauno", "english"], 29.95, 2024],
    ["Liekkien valtakunta", "LiekkienValtakunta.webp", "fantasiakirjat/Liekkien_valtakunta.html", "Jennifer L. Armentrout", ["fantasia", "kauno"], 22.95, 2025],
    ["Kahden veren tytär", "KahdenVerenTytär.webp", "fantasiakirjat/Kahden_veren_tytar.html", "S K Rostedt", ["fantasia", "kauno"], 29.95, 2024],
    ["Raivoisa laiva", "RaivoisaLaiva.webp", "fantasiakirjat/Raivoisa_Laiva.html", "Robin Hobb", ["fantasia", "kauno"], 35.95, 2025],
    ["Nälkäpeli: Balladi laululinnuista ja käärmeistä", "NalkapeliBalladiLaululinnustaJaKaarmeista.webp", "fantasiakirjat/Balladi_laululinnusta_ja_kaarmeesta.html", "Suzanne Collins", ["fantasia", "kauno"], 22.95, 2025],
    ["Tatu ja Patu Helsingissä", "TatuJaPatuHelsingissä.jpg", "lastenkirjat/TatuJaPatuHelsingissa.html", "Aino Havukainen; Sami Toivonen", ["lasten"], 14.95, 2012],
    ["Rambon talli: Kultaharjan salaisuus ", "rambon-talli-kultaharjan-salaisuus.webp", "lastenkirjat/RambonTalliKultaharjanSalaisuus.html", "Venny Helén", ["lasten"], 22.95, 2025],
    ["Tatu ja Patu kesäleirillä", "TatuJaPatuKesaleirilla.webp", "lastenkirjat/TatuJaPatuKesaleirilla.html", "Aino Havukainen; Sami Toivonen", ["lasten"], 20.95, 2021],
    ["Paqpan maailma. Väritä jännät reissut!", "PaqpanMaailma.webp", "lastenkirjat/PaqpanMaailma.html", "Beata (Paqpa) Rodas", ["lasten", "nuorten"], 19.95, 2025],
    ["Pikku Prinssi", "PikkuPrinssi.webp", "lastenkirjat/PikkuPrinssi.html", "Antoine de Saint-Exupéry", ["lasten"], 13.95, 1997],
    ["Tatun ja Patun päivitetty Suomi", "TatunJaPatunPäivitettySuomi.webp", "lastenkirjat/TatunJaPatunPaivitettySuomi.html", "Aino Havukainen; Sami Toivonen", ["lasten"], 19.95, 2025],
    ["Rambon talli: Kadonneiden hevosten mysteeri", "RambonTalliKadonneidenHevostenMysteeri.webp", "lastenkirjat/RambonTalliKadonneidenHevostenMysteeri.html", "Venny Helén", ["lasten"], 22.95, 2024],
    ["Suomen lasten iltasadut", "SuomenLastenIltasadut.webp", "lastenkirjat/SuomenLastenIltasadut.html", "Emmi Jormalainen", ["lasten"], 20.95, 2023],
    ["Soiva laulukirja", "SoivaLaulukirja.webp", "lastenkirjat/SoivaLaulukirja.html", "Soili Perkiö", ["lasten"], 27.95, 2013],
    ["Minecraft: Kartanon oliot (helppolukuinen)", "MinecraftKartanonOliot.webp", "lastenkirjat/MinecraftKartanonOliot.html", "Nick Eliopulos", ["lasten"], 11.95, 2025],
    ["Sudenpentujen käsikirja", "SudenpentujenKasikirja.webp", "lastenkirjat/SudenpentujenKasikirja.html", "Disney", ["lasten"], 18.95, 2020],
    ["Vitsipitsa – täytteenä Tinke ja Nedde", "VitsipitsaTaytteenaTinkeJaNedde.webp", "lastenkirjat/VitsipitsaTaytteenaTinkeJaNedde.html", "Juhana Salakari", ["lasten"], 21.95, 2025],
    ["Kadonnut perintö", "KadonnutPerinto.webp", "kaunokirjallisuus/Kadonnut_perinto.html", "Virpi Hämeen-Anttila", ["kauno"], 31.95, 2025],
    ["Tex Willer Kirjasto 79: Pidättäkää Tex Willer!", "PidattakaaTexWiller.webp", "kaunokirjallisuus/Pidattakaa_Tex_Willer.html", "Gianluig Bonelli", ["kauno"], 26.95, 2025],
    ["Hobitti", "Hobitti.webp", "nuortenkirjat/Hobitti.html", "J. R. R. Tolkien", ["nuorten", "lasten", "kauno"], 26.95, 2020],
    ["Skutsi", "Skutsi.webp", "nuortenkirjat/Skutsi.html", "Päivi Lukkarila", ["nuorten", "lasten", "kauno"], 26.95, 2024],
    ["The Inheritance Games: Viimeinen siirto", "InheritanceGamesViimeinenSiirto.webp", "nuortenkirjat/InheritanceGamesViimeinenSiirto.html", "Jennifer Lynn Barnes", ["nuorten"], 26.95, 2025],
    ["Kuudes kuolee", "KuudesKuolee.webp", "nuortenkirjat/Kuudes_kuolee.html", "Holly Jackson", ["nuorten", "kauno"], 29.95, 2025],
    ["Meren koskettamat", "MerenKoskettamat.webp", "nuortenkirjat/Meren_koskettamat.html", "Leena Paasio", ["nuorten", "kauno"], 25.95, 2024],
    ["Percy Jackson – Kolmoisjumalattaren raivo", "PercyJacksonKolmoisjumalattarenRaivo.webp", "nuortenkirjat/PercyJacksonKolmoisjumalattarenRaivo.html", "Rick Riordan", ["nuorten"], 28.95],
    ["Taivaansinisen meren tuolla puolen", "TaivaansinisenMerenTuollaPuolen.webp", "nuortenkirjat/Taivaansinisen_meren_tuolla_puolen.html", "TJ Klune", ["nuorten", "kauno"], 31.95, 2025],
    ["Unohdettujen kirja", "UnohdettujenKirja.webp", "nuortenkirjat/Unohdettujen_kirja.html", "Anne-Maija Aalto", ["nuorten", "kauno"], 30.95, 2024],
    ["One Piece 104", "OnePiece104.webp", "nuortenkirjat/One_Piece_104.html", "Eiichiro Oda", ["nuorten"], 10.95, 2025],
    ["Kvanttikilpajuoksu", "Kvanttikilpajuoksu.webp", "e-kirjat/Kvanttikilpajuoksu.html", "Tommi Tenkanen", ["ekirjat", "tieto"], 15.95, 2025],
    ["Jumalan synty - Isän ja Pojan kätketty historia", "JumalanSynty.webp", "e-kirjat/Jumalan_synty.html", "Ville Mäkipelto / Juha Pakkala / Raimo Hakola", ["ekirjat", "tieto"], 19.95, 2025],
    ["Vaikene kuin muuri", "VaikeneKuinMuuri.webp", "e-kirjat/Vaikene_kuin_muuri.html", "Maria Adolfsson", ["ekirjat", "kauno"], 14.95, 2025],
    ["Ctrl+Alt+Kaaos", "Ctrl+Alt+Kaaos.webp", "e-kirjat/Ctrl+Alt+Kaaos.html", "Joe Tidy", ["ekirjat", "tieto"], 21.95, 2025],
    ["Haltiain verta - The Witcher - Noituri 3", "HaltianVerta.webp", "e-kirjat/HaltianVerta.html", "Andrzej Sapkowski", ["ekirjat", "fantasia", "kauno"], 10.95, 2015],
    ["Jakob", "Jakob.webp", "e-kirjat/Jakob.html", "Satu Rämö", ["ekirjat", "kauno"], 14.95, 2023],
    ["Myrskynsilmä", "MyrskynSilma.webp", "e-kirjat/Myrskynsilma.html", "Rebecca Yarros", ["ekirjat", "fantasia", "kauno"], 14.95, 2025],
    ["Erikoisjoukoissa – Janne Lehtosen tarina", "Erikoisjoukoissa–JanneLehtosenTarina.webp", "e-kirjat/Erikoisjoukoissa-JanneLehtosenTarina.html", "Kati Pukki / Janne Lehtonen", ["ekirjat", "tieto"], 14.95, 2025],
    ["Kadonnut perintö", "KadonnutPerinto.webp", "e-kirjat/Kadonnut_perinto.html", "Virpi Hämeen-Anttila", ["ekirjat", "kauno"], 19.95, 2025],
    ["Lehmä synnyttää yöllä", "LehmaSynnyttaaYolla.webp", "e-kirjat/Lehma_synnyttaa_yolla.html", "Pajtim Statovci", ["ekirjat", "kauno"], 15.95, 2024],
    ["Viikinkien valtakunta", "ViikinkienValtakunta.webp", "e-kirjat/Viikinkien_valtakunta.html", "Tonny Gulløv", ["ekirjat", "kauno"], 14.95, 2025],
    ["Zeus", "Zeus.webp", "e-kirjat/Zeus.html", "Ilkka Remes", ["ekirjat", "kauno"], 14.95, 2024],
    ["Rakel", "Rakel.webp", "aanikirjat/Rakel.html", "Satu Rämö", ["aanikirjat", "kauno"], 15.95, 2024],
    ["Sinuhe egyptiläinen osa 1", "SinuheEgyptilainenAanikirja.webp", "aanikirjat/Sinuhe_egyptilainen_osa_1.html", "Mika Waltari", ["aanikirjat", "kauno"], 13.95, 2010],
    ["Nexus - Tietoverkkojen lyhyt historia", "Nexus.webp", "aanikirjat/Nexus.html", "Yuval Noah Harari", ["aanikirjat", "tieto"], 20.95, 2024],
    ["Helmeilevä kuolema", "HelmeileväKuolema.webp", "aanikirjat/HelmeilevaKuolema.html", "Agatha Christie", ["aanikirjat", "kauno"], 15.95, 2025],
    ["Heikki Silvennoinen Nousut ja laskut", "HeikkiSilvennoinenAanikirja.webp", "aanikirjat/HeikkiSilvennoinenNousutJaLaskut.html", "Tommi Saarela", ["aanikirjat", "tieto"], 15.95, 2024],
    ["Laukku-Leena", "Laukku-Leena.webp", "aanikirjat/Laukku-Leena.html", "Päivi Ketolainen", ["aanikirjat", "tieto"], 15.95, 2025],
    ["Taru Sormusten herrasta: Sormuksen ritarit", "TaruSormustenHerrastaSormuksenRitarit.webp", "aanikirjat/TaruSormustenHerrastaSormuksenRitarit.html", "J. R. R. Tolkien", ["aanikirjat", "kauno"], 16.95, 2020],
    ["Merkitty", "Merkitty.webp", "aanikirjat/Merkitty.html", "Max Seeck", ["aanikirjat", "kauno"], 15.95, 2024],
    ["10 askelta mielen mestaruuteen", "10AskeltaMielenMestaruuteen.webp", "aanikirjat/10askelta_mielen_mestaruuteen.html", "Harri Gustafsberg", ["aanikirjat", "tieto"], 16.95, 2024],
    ["Kiehtova katala Venäjä Arja Paanasen silmin", "KiehtovaKatalaVenajaArjaPaanasenSilmin.webp", "aanikirjat/Kiehtova_katala_Venaja_Arja_Paanasen_silmin.html", "Anu Kuistiala / Arja Paananen", ["aanikirjat", "tieto"], 19.95],
    ["Rafael", "Rafael.webp", "aanikirjat/Rafael.html", "Christian Rönnbacka", ["aanikirjat", "kauno"], 20.95, 2024],
    ["Unissakävelijä", "Unissakavelija.webp", "aanikirjat/Unissakavelija.html", "Lars Kepler", ["aanikirjat", "kauno"], 15.95, 2024]
]
const visibleCount = 4;

function nextSlide(id, event) {
    event.preventDefault(); // Estä linkkien aiheuttama sivun scrollaus
    const track = document.getElementById(id);
    if (!track) return;

    const totalItems = track.children.length;
    const currentIndex = parseInt(track.getAttribute('data-index')) || 0;
    const totalSlides = Math.ceil(totalItems / visibleCount);
    const nextIndex = (currentIndex + 1) % totalSlides;
    track.style.transform = `translateX(-${nextIndex * 100}%)`;
    track.setAttribute('data-index', nextIndex);
}

function prevSlide(id, event) {
    event.preventDefault(); // Estä linkkien aiheuttama sivun scrollaus
    const track = document.getElementById(id);
    if (!track) return;

    const totalItems = track.children.length;
    const currentIndex = parseInt(track.getAttribute('data-index')) || 0;
    const totalSlides = Math.ceil(totalItems / visibleCount);
    const nextIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${nextIndex * 100}%)`;
    track.setAttribute('data-index', nextIndex);
}

// ---------------------------------------------------------------------------------------
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}
function countSharedItems(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item)).length;
}
// Initial setup
window.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.carousel-track');
    tracks.forEach(track => {
        track.setAttribute('data-index', '0');
    });
});
function getCurrentBookUrl() {
    // Get everything after the second-to-last slash
    const parts = window.location.pathname.split('/');
    if (parts.length < 2) return '';
    // Get the last two parts and join them
    return parts.slice(-2).join('/');
}

const currentBookUrl = getCurrentBookUrl();
//const currentBookTitle = document.title.trim();
const currentBook = Books.find(book => book[2] === currentBookUrl);

const currentGenres = currentBook ? currentBook[4] : [];

// Filter books by prioritized genre, exclude current book, limit to 12
let genreBooks = [];
for (let j = 0; j < Books.length; j++) {
    const book = Books[j];
    if (book[2] !== currentBookUrl &&
        book[4].every(genre => currentGenres.includes(genre)) &&
        currentGenres.length === book[4].length) {
        genreBooks.push(book);
    }
}
genreBooks = shuffleArray(genreBooks).slice(0, 12);
console.log(genreBooks)
let i = 0;
while (genreBooks.length < 12 && currentGenres.length > i) {
    let extraBooks = [];
    for (let j = 0; j < Books.length; j++) {
        const book = Books[j];
        if (book[2] !== currentBookUrl && !genreBooks.includes(book) && (book[4].every(genre => currentGenres[i] == genre) || (countSharedItems(book[4], currentGenres) > 1) && book[4].length/2 < countSharedItems(book[4], currentGenres))) {
            extraBooks.push(book);
        }
    }
    genreBooks = genreBooks.concat(shuffleArray(extraBooks));
    if(genreBooks.length > 12) { 
        break;
    }
    extraBooks = [];
    for (let j = 0; j < Books.length; j++) {
        const book = Books[j];
        if (book[2] !== currentBookUrl && !genreBooks.includes(book) &&
            book[4].some(genre => currentGenres[i] == genre)) {
            extraBooks.push(book);
        }
    }
    genreBooks = genreBooks.concat(shuffleArray(extraBooks));
    i++;
}
genreBooks = genreBooks.slice(0, 12);
console.log(genreBooks)
// Render carousel items
const track = document.getElementById('genre-carousel-track');
if (track) {
    genreBooks.forEach(book => {
        const a = document.createElement('a');
        a.href = "../" + book[2];
        const img = document.createElement('img');
        img.src = "../kuvat/" + book[1];
        img.alt = book[0];
        a.appendChild(img);
        track.appendChild(a);
    });

    // Carousel logic (reuse your existing functions)
    track.setAttribute('data-index', '0');
    document.getElementById('genre-carousel-left').onclick = function (e) {
        prevSlide('genre-carousel-track', e);
    };
    document.getElementById('genre-carousel-right').onclick = function (e) {
        nextSlide('genre-carousel-track', e);
    };
}
/* Vanha tehokkaampi algoritmi, joka ei sekoita kirjoja
let genreBooks = [];
for (let j = 0; j < Books.length; j++) {
    const book = Books[j];
    if (book[2] !== currentBookUrl &&
        book[4].every(genre => currentGenres.includes(genre)) &&
        currentGenres.length === book[4].length) {
        genreBooks.push(book);
        if (genreBooks.length >= 12) break;
    }
}
let i = 0;
while (genreBooks.length < 12 && i < Books.length && currentGenres.length > i) {
    for (let j = 0; j < Books.length; j++) {
        const book = Books[j];
        if (
            book[2] !== currentBookUrl &&
            !genreBooks.includes(book) &&
            book[4].some(genre => currentGenres[i] == genre)) {
            genreBooks.push(book);
            if (genreBooks.length >= 12) break;
        }
    }
    i++;
}
*/