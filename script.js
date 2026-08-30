/* =========================================
APGMC - SCRIPT.JS
========================================= */

/* =========================================
CATEGORÍAS
========================================= */

function showCategory(categoryId, button) {

```
const categories =
    document.querySelectorAll(".shop-category");

const buttons =
    document.querySelectorAll(".shop-menu button");


categories.forEach(function(category) {

    category.classList.remove("active");

});


const selectedCategory =
    document.getElementById(categoryId);

if (selectedCategory) {

    selectedCategory.classList.add("active");

}


buttons.forEach(function(categoryButton) {

    categoryButton.classList.remove("active");

});


if (button) {

    button.classList.add("active");

}
```

}

/* =========================================
ABRIR MODAL DE PAGO
========================================= */

function paymentMessage() {

```
const modal =
    document.getElementById("payment-modal");

if (!modal) {
    return;
}

modal.classList.add("show");

document.body.style.overflow = "hidden";
```

}

/* =========================================
CERRAR MODAL
========================================= */

function closePayment() {

```
const modal =
    document.getElementById("payment-modal");

if (!modal) {
    return;
}

modal.classList.remove("show");

document.body.style.overflow = "";
```

}

/* =========================================
INICIO
========================================= */

document.addEventListener(
"DOMContentLoaded",
function () {

```
    const categories =
        document.querySelectorAll(".shop-category");

    const buttons =
        document.querySelectorAll(".shop-menu button");


    /*
     * Si estamos en la tienda,
     * mostrar la primera categoría.
     */

    if (
        categories.length > 0 &&
        buttons.length > 0
    ) {

        let activeCategory =
            document.querySelector(
                ".shop-category.active"
            );


        if (!activeCategory) {

            categories[0].classList.add("active");

        }


        let activeButton =
            document.querySelector(
                ".shop-menu button.active"
            );


        if (!activeButton) {

            buttons[0].classList.add("active");

        }

    }


    /* =====================================
       CLIC EN CATEGORÍAS
    ===================================== */

    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const code =
                    button.getAttribute("onclick");

                if (!code) {
                    return;
                }


                const match =
                    code.match(
                        /showCategory\(['"]([^'"]+)['"]/
                    );


                if (!match) {
                    return;
                }


                showCategory(
                    match[1],
                    button
                );

            }
        );

    });


    /* =====================================
       CLIC EN COMPRAR
    ===================================== */

    const buyButtons =
        document.querySelectorAll(
            ".product-card button"
        );


    buyButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                paymentMessage();

            }
        );

    });


    /* =====================================
       CERRAR CON X
    ===================================== */

    const closeButton =
        document.querySelector(
            ".close-payment"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePayment
        );

    }


    /* =====================================
       BOTÓN ENTENDIDO
    ===================================== */

    const understoodButton =
        document.querySelector(
            ".close-button"
        );


    if (understoodButton) {

        understoodButton.addEventListener(
            "click",
            closePayment
        );

    }


    /* =====================================
       CLIC FUERA DEL MODAL
    ===================================== */

    const modal =
        document.getElementById(
            "payment-modal"
        );


    if (modal) {

        modal.addEventListener(
            "click",
            function(event) {

                if (event.target === modal) {

                    closePayment();

                }

            }
        );

    }


    /* =====================================
       ESC
    ===================================== */

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Escape") {

                closePayment();

            }

        }
    );

}
```

);
