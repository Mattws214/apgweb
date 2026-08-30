/* =========================================
APGMC
SCRIPT.JS
========================================= */

/* =========================================
CAMBIAR CATEGORÍA DE LA TIENDA
========================================= */

function showCategory(categoryId, button) {

```
/* Ocultar todas las categorías */

const categories = document.querySelectorAll(".shop-category");

categories.forEach(category => {

    category.classList.remove("active");

});


/* Mostrar la categoría seleccionada */

const selectedCategory = document.getElementById(categoryId);

if (selectedCategory) {

    selectedCategory.classList.add("active");

}


/* Quitar estado activo de todos los botones */

const categoryButtons = document.querySelectorAll(".shop-menu button");

categoryButtons.forEach(categoryButton => {

    categoryButton.classList.remove("active");

});


/* Activar el botón seleccionado */

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
const modal = document.getElementById("payment-modal");

if (!modal) {
    return;
}

modal.classList.add("show");
```

}

/* =========================================
CERRAR VENTANA DE PAGO
========================================= */

function closePayment() {

```
const modal = document.getElementById("payment-modal");

if (!modal) {
    return;
}

modal.classList.remove("show");
```

}

/* =========================================
CERRAR AL HACER CLIC FUERA
========================================= */

document.addEventListener("click", function(event) {

```
const modal = document.getElementById("payment-modal");

if (!modal) {
    return;
}


if (
    modal.classList.contains("show") &&
    event.target === modal
) {

    closePayment();

}
```

});

/* =========================================
CERRAR CON ESCAPE
========================================= */

document.addEventListener("keydown", function(event) {

```
if (event.key === "Escape") {

    closePayment();

}
```

});

/* =========================================
CATEGORÍA INICIAL
========================================= */

document.addEventListener("DOMContentLoaded", function() {

```
const firstCategory = document.querySelector(
    ".shop-category.active"
);

const firstButton = document.querySelector(
    ".shop-menu button.active"
);


/*
   Si existe una categoría activa pero
   ningún botón está activo, activamos
   automáticamente el primer botón.
*/

if (firstCategory && !firstButton) {

    const button = document.querySelector(
        ".shop-menu button"
    );

    if (button) {

        button.classList.add("active");

    }

}


/*
   Si no hay ninguna categoría activa,
   mostramos la primera.
*/

if (!firstCategory) {

    const category = document.querySelector(
        ".shop-category"
    );

    const button = document.querySelector(
        ".shop-menu button"
    );

    if (category) {

        category.classList.add("active");

    }

    if (button) {

        button.classList.add("active");

    }

}
```

});
