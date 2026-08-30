/* =========================================
APGMC
SCRIPT.JS
========================================= */

/* =========================================
CAMBIAR CATEGORÍA
========================================= */

function showCategory(categoryId, button) {

```
const categories = document.querySelectorAll(".shop-category");

categories.forEach(function(category) {

    category.classList.remove("active");

});


const selectedCategory =
    document.getElementById(categoryId);


if (selectedCategory) {

    selectedCategory.classList.add("active");

}


const buttons =
    document.querySelectorAll(".shop-menu button");


buttons.forEach(function(categoryButton) {

    categoryButton.classList.remove("active");

});


if (button) {

    button.classList.add("active");

}
```

}

/* =========================================
VENTANA DE PAGO
========================================= */

function paymentMessage() {

```
const modal =
    document.getElementById("payment-modal");


if (!modal) {
    return;
}


modal.classList.add("show");
```

}

/* =========================================
CERRAR PAGO
========================================= */

function closePayment() {

```
const modal =
    document.getElementById("payment-modal");


if (!modal) {
    return;
}


modal.classList.remove("show");
```

}

/* =========================================
INICIALIZACIÓN
========================================= */

document.addEventListener(
"DOMContentLoaded",
function() {

```
    const categories =
        document.querySelectorAll(".shop-category");

    const buttons =
        document.querySelectorAll(".shop-menu button");


    /*
     * Solo ejecutamos esto si estamos
     * realmente en la página de la tienda.
     */

    if (
        categories.length > 0 &&
        buttons.length > 0
    ) {

        let activeCategory =
            document.querySelector(
                ".shop-category.active"
            );


        /*
         * Si no existe una categoría activa,
         * mostramos la primera.
         */

        if (!activeCategory) {

            activeCategory =
                categories[0];

            activeCategory.classList.add("active");

        }


        /*
         * Si ningún botón tiene active,
         * activamos el botón correspondiente
         * a la categoría que está visible.
         */

        let activeButton =
            document.querySelector(
                ".shop-menu button.active"
            );


        if (!activeButton) {

            buttons[0].classList.add("active");

        }

    }

}
```

);

/* =========================================
CERRAR MODAL CON ESCAPE
========================================= */

document.addEventListener(
"keydown",
function(event) {

```
    if (event.key === "Escape") {

        closePayment();

    }

}
```

);

/* =========================================
CERRAR MODAL HACIENDO CLIC AFUERA
========================================= */

document.addEventListener(
"click",
function(event) {

```
    const modal =
        document.getElementById("payment-modal");


    if (!modal) {
        return;
    }


    if (
        modal.classList.contains("show") &&
        event.target === modal
    ) {

        closePayment();

    }

}
```

);
