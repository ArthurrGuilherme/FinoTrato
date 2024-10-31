function scrollto(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#historia").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#Containerhistoria")

    console.log("go to up")
})
document.querySelector("#unidades").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#containersalao")

    console.log("go to up")
})
document.querySelector("#servico").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("#containerservico")

    console.log("go to up")
})
document.querySelector("#contato").addEventListener("click", function (event) {
    event.preventDefault();

    scrollto("footer")

    console.log("go to up")
})