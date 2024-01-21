    //Redirecciones usando js en vez de con hrefs en html
    function redireccionar(ruta) {
        window.location.href = ruta;
    }

    document.getElementById("terminos").addEventListener("click", () => { redireccionar("https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad") })

    document.getElementsByClassName("landing")[0].addEventListener("click", function () {
        redireccionar("index.html");
    })

    document.getElementsByClassName("landing")[1].addEventListener("click", function () {
        redireccionar("index.html");
    })

    document.getElementById("contacto").addEventListener("click", function () {
        redireccionar("contacto.html");
    })

    document.getElementById("catalogo").addEventListener("click", function () {
        redireccionar("catalogo.html");
    })

    document.getElementById("logo_footer").addEventListener("click", function () {
        redireccionar("index.html");
    })