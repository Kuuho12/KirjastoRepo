const suodattimetButton = document.querySelector(".suodattimet-button")
const suodattimet = document.querySelector(".suodattimet")

suodattimetButton.addEventListener("click", () => {
    if (document.getElementById("suodattimet").style.display !== "flex") {
        document.getElementById("suodattimet").style.display = "flex";
        document.getElementById("suodattimet").style.justifyContent = "center";
        //document.getElementById("suodattimet").style.alignItems = "center";
    } else {
        document.getElementById("suodattimet").style.display = "none";
    }
})