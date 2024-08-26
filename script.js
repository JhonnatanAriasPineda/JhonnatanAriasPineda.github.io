window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        var dropdowns = document.getElementsByClassName("menu-contenido");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function handleFormSubmit() {
    var name = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensaje").value;

    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    alert("Gracias, " + name + ". Hemos recibido tu mensaje.");
    return true;
}

function handleFormSubmit() {
    var name = document.getElementById("nombre").value;
    var phone = document.getElementById("Número Telefonico").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("Direccion").value;
    var message = document.getElementById("mensaje").value;

    if (name === "" || phone === "" || email === "" || address === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    alert("Gracias, " + name + ". Hemos recibido tu mensaje.");
    return true;
}

var cancelButton = document.getElementById("cancelButton");

cancelButton.onclick = function() {
    window.location.href = 'index.html';
}