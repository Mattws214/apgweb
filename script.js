/* =========================================
APGMC - SCRIPT.JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

```
/* =========================================
   CATEGORÍAS DE LA TIENDA
========================================= */

const categoryButtons =
    document.querySelectorAll(".shop-menu button");

const categories =
    document.querySelectorAll(".shop-category");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /*
         * Obtener el ID desde el onclick existente.
         * Ejemplo:
         * showCategory('survival', this)
         */

        const onclickCode =
            button.getAttribute("onclick");

        if (!onclickCode) {
            return;
        }

        const match =
            onclickCode.match(/showCategory\(['"]([^'"]+)['"]/);

        if (!match) {
            return;
        }

        const categoryId = match[1];


        /* Ocultar todas */

        categories.forEach(function (category) {

            category.classList.remove("active");

        });


        /* Mostrar seleccionada */

        const selected =
            document.getElementById(categoryId);

        if (selected) {

            selected.classList.add("active");

        }


        /* Cambiar botón activo */

        categoryButtons.forEach(function (otherButton) {

            otherButton.classList.remove("active");

        });

        button.classList.add("active");

    });

});


/* =========================================
   CATEGORÍA INICIAL
========================================= */

if (
    categories.length > 0 &&
    categoryButtons.length > 0
) {

    categories.forEach(function (category) {

        category.classList.remove("active");

    });

    categoryButtons.forEach(function (button) {

        button.classList.remove("active");

    });


    categories[0].classList.add("active");
    categoryButtons[0].classList.add("active");

}


/* =========================================
   BOTONES COMPRAR
========================================= */

const buyButtons =
    document.querySelectorAll(".product-card button");


buyButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        openPaymentModal();

    });

});


/* =========================================
   MODAL
========================================= */

const modal =
    document.getElementById("payment-modal");

const closeButton =
    document.querySelector(".close-payment");

const understoodButton =
    document.querySelector(".close-button");


function openPaymentModal() {

    if (!modal) {
        return;
    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closePaymentModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Botón X */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            closePaymentModal();

        }
    );

}


/* Botón Entendido */

if (understoodButton) {

    understoodButton.addEventListener(
        "click",
        function () {

            closePaymentModal();

        }
    );

}


/* =========================================
   CLIC FUERA DEL MODAL
========================================= */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                closePaymentModal();

            }

        }
    );

}


/* =========================================
   ESC
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePaymentModal();

        }

    }
);
```

});
