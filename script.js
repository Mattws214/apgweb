```javascript
/* =====================================================
   APGMC - SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       CATEGORÍAS DE LA TIENDA
    ================================================= */

    const categoryButtons =
        document.querySelectorAll(".shop-menu button");

    const categories =
        document.querySelectorAll(".shop-category");


    function showCategory(categoryId) {

        /* Ocultar todas */

        categories.forEach(category => {
            category.classList.remove("active");
        });


        /* Desactivar todos los botones */

        categoryButtons.forEach(button => {
            button.classList.remove("active");
        });


        /* Buscar categoría */

        const selected =
            document.getElementById(categoryId);

        if (!selected) {
            return;
        }


        /* Mostrar categoría */

        selected.classList.add("active");


        /* Activar botón */

        categoryButtons.forEach(button => {

            if (button.dataset.category === categoryId) {
                button.classList.add("active");
            }

        });

    }


    /* =================================================
       CONFIGURAR BOTONES DE CATEGORÍA
    ================================================= */

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const categoryId =
                button.dataset.category;

            if (categoryId) {
                showCategory(categoryId);
            }

        });

    });


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


    function paymentMessage() {

        if (!paymentModal) {
            return;
        }

        paymentModal.classList.add("show");

        document.body.style.overflow = "hidden";

    }


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

    const buyButtons =
        document.querySelectorAll(".product-card button");


    buyButtons.forEach(button => {

        button.addEventListener("click", event => {

            event.preventDefault();

            paymentMessage();

        });

    });


    /* =================================================
       BOTÓN X
    ================================================= */

    const closeButtonX =
        document.querySelector(".close-payment");


    if (closeButtonX) {

        closeButtonX.addEventListener("click", () => {
            closePayment();
        });

    }


    /* =================================================
       BOTÓN ENTENDIDO
    ================================================= */

    const closeButton =
        document.querySelector(".close-button");


    if (closeButton) {

        closeButton.addEventListener("click", () => {
            closePayment();
        });

    }


    /* =================================================
       CLIC FUERA DEL MODAL
    ================================================= */

    if (paymentModal) {

        paymentModal.addEventListener("click", event => {

            if (event.target === paymentModal) {
                closePayment();
            }

        });

    }


    /* =================================================
       TECLA ESC
    ================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closePayment();
        }

    });

});
```
