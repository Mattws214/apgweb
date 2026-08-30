/* =====================================================
APGMC - SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

```
/* =================================================
   TIENDA - CATEGORÍAS
================================================= */

const categoryButtons =
    document.querySelectorAll(".shop-menu button");

const categories =
    document.querySelectorAll(".shop-category");


function showCategory(categoryId) {

    /* Ocultar TODAS las categorías */

    categories.forEach(function (category) {

        category.style.display = "none";
        category.classList.remove("active");

    });


    /* Quitar estado activo de todos los botones */

    categoryButtons.forEach(function (button) {

        button.classList.remove("active");

    });


    /* Mostrar solamente la categoría seleccionada */

    const selected =
        document.getElementById(categoryId);

    if (selected) {

        selected.style.display =
            selected.classList.contains("coming-soon")
                ? "flex"
                : "block";

        selected.classList.add("active");

    }

}


/* Hacer la función accesible desde onclick="" */

window.showCategory = showCategory;


/* Eventos de los botones */

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const onclick =
            button.getAttribute("onclick");

        if (!onclick) {
            return;
        }


        const match =
            onclick.match(
                /showCategory\(['"]([^'"]+)['"]/
            );


        if (!match) {
            return;
        }


        showCategory(match[1]);

        button.classList.add("active");

    });

});


/* =================================================
   MOSTRAR SOLO LA PRIMERA CATEGORÍA AL ENTRAR
================================================= */

if (
    categories.length > 0 &&
    categoryButtons.length > 0
) {

    const firstCategory =
        categories[0];

    const firstButton =
        categoryButtons[0];


    categories.forEach(function (category) {

        category.style.display = "none";
        category.classList.remove("active");

    });


    firstCategory.style.display =
        firstCategory.classList.contains("coming-soon")
            ? "flex"
            : "block";

    firstCategory.classList.add("active");

    firstButton.classList.add("active");

}


/* =================================================
   MODAL DE PAGO
================================================= */

const paymentModal =
    document.getElementById("payment-modal");


window.paymentMessage = function () {

    if (!paymentModal) {
        return;
    }

    paymentModal.classList.add("show");

    paymentModal.style.display = "flex";

    document.body.style.overflow = "hidden";

};


/* =================================================
   CERRAR MODAL
================================================= */

window.closePayment = function () {

    if (!paymentModal) {
        return;
    }

    paymentModal.classList.remove("show");

    paymentModal.style.display = "none";

    document.body.style.overflow = "";

};


/* =================================================
   BOTONES COMPRAR
================================================= */

const buyButtons =
    document.querySelectorAll(".product-card button");


buyButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        window.paymentMessage();

    });

});


/* =================================================
   BOTÓN X
================================================= */

const closePaymentButton =
    document.querySelector(".close-payment");


if (closePaymentButton) {

    closePaymentButton.addEventListener(
        "click",
        function () {

            window.closePayment();

        }
    );

}


/* =================================================
   BOTÓN ENTENDIDO
================================================= */

const closeButton =
    document.querySelector(".close-button");


if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            window.closePayment();

        }
    );

}


/* =================================================
   CLIC FUERA DEL MODAL
================================================= */

if (paymentModal) {

    paymentModal.addEventListener(
        "click",
        function (event) {

            if (event.target === paymentModal) {

                window.closePayment();

            }

        }
    );

}


/* =================================================
   ESC PARA CERRAR
================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            window.closePayment();

        }

    }
);
```

});
