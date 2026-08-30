/* =====================================================
APGMC - SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

```
/* =================================================
   ELEMENTOS DE LA TIENDA
================================================= */

const categoryButtons =
    document.querySelectorAll(".shop-menu button");

const categories =
    document.querySelectorAll(".shop-category");


/* =================================================
   CAMBIAR CATEGORÍA
================================================= */

window.showCategory = function (categoryId) {

    /* Ocultar absolutamente todas las categorías */

    categories.forEach(category => {

        category.classList.remove("active");

        category.style.display = "none";

    });


    /* Quitar activo de todos los botones */

    categoryButtons.forEach(button => {

        button.classList.remove("active");

    });


    /* Buscar la categoría seleccionada */

    const selected =
        document.getElementById(categoryId);


    if (!selected) {
        return;
    }


    /* Mostrar únicamente la seleccionada */

    selected.classList.add("active");

    if (selected.classList.contains("coming-soon")) {

        selected.style.display = "flex";

    } else {

        selected.style.display = "block";

    }


    /* Activar el botón correspondiente */

    categoryButtons.forEach(button => {

        const onclick =
            button.getAttribute("onclick");

        if (
            onclick &&
            onclick.includes("'" + categoryId + "'")
        ) {

            button.classList.add("active");

        }

    });

};


/* =================================================
   CATEGORÍA INICIAL
================================================= */

if (categories.length > 0) {

    showCategory(categories[0].id);

}


/* =================================================
   MODAL DE PAGO
================================================= */

const paymentModal =
    document.getElementById("payment-modal");


/* Abrir ventana */

window.paymentMessage = function () {

    if (!paymentModal) {
        return;
    }

    paymentModal.classList.add("show");

    document.body.style.overflow = "hidden";

};


/* =================================================
   CERRAR VENTANA
================================================= */

window.closePayment = function () {

    if (!paymentModal) {
        return;
    }

    paymentModal.classList.remove("show");

    document.body.style.overflow = "";

};


/* =================================================
   BOTONES DE COMPRAR
================================================= */

const buyButtons =
    document.querySelectorAll(
        ".product-card button"
    );


buyButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        window.paymentMessage();

    });

});


/* =================================================
   BOTÓN X
================================================= */

const closePayment =
    document.querySelector(".close-payment");


if (closePayment) {

    closePayment.addEventListener("click", () => {

        window.closePayment();

    });

}


/* =================================================
   BOTÓN "ENTENDIDO"
================================================= */

const closeButton =
    document.querySelector(".close-button");


if (closeButton) {

    closeButton.addEventListener("click", () => {

        window.closePayment();

    });

}


/* =================================================
   CERRAR AL HACER CLIC FUERA
================================================= */

if (paymentModal) {

    paymentModal.addEventListener("click", event => {

        if (event.target === paymentModal) {

            window.closePayment();

        }

    });

}


/* =================================================
   CERRAR CON ESC
================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        window.closePayment();

    }

});
```

});
