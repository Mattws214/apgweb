```javascript
/* =====================================================
   APGMC - SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       TIENDA - CATEGORÍAS
    ================================================= */

    const categoryButtons =
        document.querySelectorAll(".shop-menu button");

    const categories =
        document.querySelectorAll(".shop-category");


    /* =================================================
       FUNCIÓN PARA CAMBIAR CATEGORÍA
    ================================================= */

    function showCategory(categoryId) {

        /* Ocultar todas las categorías */

        categories.forEach(function (category) {
            category.classList.remove("active");
        });


        /* Quitar activo de todos los botones */

        categoryButtons.forEach(function (button) {
            button.classList.remove("active");
        });


        /* Buscar la categoría */

        const selectedCategory =
            document.getElementById(categoryId);


        if (!selectedCategory) {
            return;
        }


        /* Mostrar categoría */

        selectedCategory.classList.add("active");


        /* Buscar el botón correspondiente */

        const selectedButton =
            document.querySelector(
                '.shop-menu button[data-category="' +
                categoryId +
                '"]'
            );


        /* Activarlo */

        if (selectedButton) {
            selectedButton.classList.add("active");
        }

    }


    /* =================================================
       BOTONES DE CATEGORÍA
    ================================================= */

    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const categoryId =
                button.getAttribute("data-category");


            if (!categoryId) {
                return;
            }


            showCategory(categoryId);

        });

    });


    /* =================================================
       CATEGORÍA INICIAL
    ================================================= */

    if (categories.length > 0) {

        const firstCategory =
            categories[0];

        showCategory(firstCategory.id);

    }


    /* =================================================
       MODAL DE PAGO
    ================================================= */

    const paymentModal =
        document.getElementById("payment-modal");


    const buyButtons =
        document.querySelectorAll(".product-card button");


    const closePaymentButton =
        document.querySelector(".close-payment");


    const closeButton =
        document.querySelector(".close-button");


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

        button.addEventListener("click", function (event) {

            event.preventDefault();

            openPayment();

        });

    });


    /* =================================================
       BOTÓN X
    ================================================= */

    if (closePaymentButton) {

        closePaymentButton.addEventListener(
            "click",
            closePayment
        );

    }


    /* =================================================
       BOTÓN ENTENDIDO
    ================================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePayment
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
