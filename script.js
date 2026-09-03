/* =====================================================
   APGMC - SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       CATEGORÍAS DE LA TIENDA
    ================================================= */

    const buttons = document.querySelectorAll(".shop-menu button");
    const categories = document.querySelectorAll(".shop-category");


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const categoryId = this.dataset.category;

            console.log("Categoría seleccionada:", categoryId);


            /* Ocultar todas las categorías */

            categories.forEach(function (category) {

                category.classList.remove("active");

                category.style.display = "none";

            });


            /* Quitar estado activo de los botones */

            buttons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Buscar la categoría seleccionada */

            const category = document.getElementById(categoryId);


            if (!category) {

                console.error(
                    "No se encontró la categoría:",
                    categoryId
                );

                return;

            }


            /* Mostrar categoría */

            category.classList.add("active");


            if (category.classList.contains("coming-soon")) {

                category.style.display = "flex";

            } else {

                category.style.display = "block";

            }


            /* Activar botón */

            this.classList.add("active");

        });

    });


    /* =================================================
       CATEGORÍA INICIAL
    ================================================= */

    if (categories.length > 0) {

        categories.forEach(function (category) {

            category.classList.remove("active");

            category.style.display = "none";

        });


        categories[0].classList.add("active");

        categories[0].style.display = "block";


        if (buttons.length > 0) {

            buttons[0].classList.add("active");

        }

    }


    /* =================================================
       VENTANA DE COMPRAR
    ================================================= */

    const paymentModal =
        document.getElementById("payment-modal");


    const buyButtons =
        document.querySelectorAll(".product-card button");


    buyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Botón Comprar funcionando");


            if (!paymentModal) {

                console.error(
                    "No existe #payment-modal"
                );

                return;

            }


            paymentModal.classList.add("show");

            document.body.style.overflow = "hidden";

        });

    });


    /* =================================================
       CERRAR VENTANA DE PAGO
    ================================================= */

    function closePayment() {

        if (!paymentModal) {
            return;
        }


        paymentModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* Botón X */

    const closeButton =
        document.querySelector(".close-payment");


    /* Botón Entendido */

    const understoodButton =
        document.querySelector(".close-button");


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePayment
        );

    }


    if (understoodButton) {

        understoodButton.addEventListener(
            "click",
            closePayment
        );

    }


    /* =================================================
       CERRAR HACIENDO CLIC FUERA
    ================================================= */

    if (paymentModal) {

        paymentModal.addEventListener(
            "click",
            function (event) {

                if (event.target === paymentModal) {

                    closePayment();

                }

            }
        );

    }


    /* =================================================
       CERRAR CON ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closePayment();

            }

        }
    );

});
