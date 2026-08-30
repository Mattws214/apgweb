alert("SCRIPT.JS FUNCIONA");
```javascript
/* =====================================================
   APGMC - SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       CATEGORÍAS DE LA TIENDA
    ================================================= */

    const categoryButtons = document.querySelectorAll(
        ".shop-menu button"
    );

    const categories = document.querySelectorAll(
        ".shop-category"
    );


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /* Obtener la categoría */

            const categoryId =
                this.getAttribute("data-category");


            if (!categoryId) {
                console.error(
                    "El botón no tiene data-category."
                );

                return;
            }


            /* Ocultar todas las categorías */

            categories.forEach(function (category) {

                category.classList.remove("active");

                category.style.display = "none";

            });


            /* Quitar activo de todos los botones */

            categoryButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Buscar categoría */

            const selected =
                document.getElementById(categoryId);


            if (!selected) {

                console.error(
                    "No existe la categoría: " +
                    categoryId
                );

                return;

            }


            /* Mostrar categoría */

            selected.classList.add("active");


            if (
                selected.classList.contains(
                    "coming-soon"
                )
            ) {

                selected.style.display = "flex";

            } else {

                selected.style.display = "block";

            }


            /* Activar botón */

            this.classList.add("active");

        });

    });


    /* =================================================
       MOSTRAR SODA AL CARGAR
    ================================================= */

    if (categories.length > 0) {

        categories.forEach(function (category) {

            category.classList.remove("active");

            category.style.display = "none";

        });


        const firstCategory =
            categories[0];

        firstCategory.classList.add("active");

        firstCategory.style.display = "block";


        if (categoryButtons.length > 0) {

            categoryButtons[0].classList.add("active");

        }

    }


    /* =================================================
       MODAL DE PAGO
    ================================================= */

    const paymentModal =
        document.getElementById("payment-modal");


    const buyButtons =
        document.querySelectorAll(
            ".product-card button"
        );


    const closePaymentButton =
        document.querySelector(
            ".close-payment"
        );


    const closeButton =
        document.querySelector(
            ".close-button"
        );


    /* =================================================
       ABRIR MODAL
    ================================================= */

    function openPayment() {

        if (!paymentModal) {
            return;
        }

        paymentModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    /* =================================================
       CERRAR MODAL
    ================================================= */

    function closePayment() {

        if (!paymentModal) {
            return;
        }

        paymentModal.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* =================================================
       BOTONES COMPRAR
    ================================================= */

    buyButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openPayment();

            }
        );

    });


    /* =================================================
       X
    ================================================= */

    if (closePaymentButton) {

        closePaymentButton.addEventListener(
            "click",
            closePayment
        );

    }


    /* =================================================
       ENTENDIDO
    ================================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePayment
        );

    }


    /* =================================================
       CLIC FUERA
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
       ESC
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
```
