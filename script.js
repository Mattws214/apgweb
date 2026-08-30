/* =========================================
APGMC
SCRIPT.JS
========================================= */

/* =========================================
CAMBIAR CATEGORÍA
========================================= */

function showCategory(categoryId, button) {

```
const categories =
    document.querySelectorAll(".shop-category");

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
ABRIR MÉTODOS DE PAGO
========================================= */

function paymentMessage() {

```
const modal =
    document.getElementById("payment-modal");

if (!modal) {
    return;
}

modal.style.display = "flex";

modal.classList.add("show");
```

}

/* =========================================
CERRAR MÉTODOS DE PAGO
========================================= */

function closePayment() {

```
const modal =
    document.getElementById("payment-modal");

if (!modal) {
    return;
}

modal.classList.remove("show");

modal.style.display = "none";
```

}

/* =========================================
INICIAR TIENDA
========================================= */

document.addEventListener(
"DOMContentLoaded",
function() {

```
    const categories =
        document.querySelectorAll(".shop-category");

    const buttons =
        document.querySelectorAll(".shop-menu button");


    if (
        categories.length === 0 ||
        buttons.length === 0
    ) {
        return;
    }


    /*
     * Buscar categoría activa.
     */

    let activeCategory =
        document.querySelector(
            ".shop-category.active"
        );


    /*
     * Si ninguna está activa,
     * mostramos la primera.
     */

    if (!activeCategory) {

        activeCategory =
            categories[0];

        activeCategory.classList.add("active");

    }


    /*
     * Activar el primer botón si
     * ninguno tiene la clase active.
     */

    let activeButton =
        document.querySelector(
            ".shop-menu button.active"
        );


    if (!activeButton) {

        buttons[0].classList.add("active");

    }

}
```

);

/* =========================================
ESC PARA CERRAR
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
CLIC FUERA DEL MODAL
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
        event.target === modal &&
        modal.classList.contains("show")
    ) {

        closePayment();

    }

}
```

);
