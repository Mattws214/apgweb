/* =====================================================
   APGMC - SCRIPT.JS
   CATEGORÍAS + CARRITO
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       CATEGORÍAS
    ================================================= */

    const buttons = document.querySelectorAll(".shop-menu button");
    const categories = document.querySelectorAll(".shop-category");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const categoryId = this.dataset.category;

            categories.forEach(function (category) {
                category.classList.remove("active");
                category.style.display = "none";
            });

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            const category = document.getElementById(categoryId);

            if (!category) {
                console.error("No se encontró la categoría:", categoryId);
                return;
            }

            category.classList.add("active");

            if (category.classList.contains("coming-soon")) {
                category.style.display = "flex";
            } else {
                category.style.display = "block";
            }

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
       CARRITO
    ================================================= */

    let cart = JSON.parse(
        localStorage.getItem("apgmc_cart")
    ) || [];


    /* =================================================
       ELEMENTOS DEL CARRITO
    ================================================= */

    const cartModal =
        document.getElementById("cart-modal");

    const addedModal =
        document.getElementById("added-modal");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    const cartCount =
        document.getElementById("cart-count");

    const checkoutButton =
        document.querySelector(".checkout-button");


    /* =================================================
       GUARDAR CARRITO
    ================================================= */

    function saveCart() {

        localStorage.setItem(
            "apgmc_cart",
            JSON.stringify(cart)
        );

    }


    /* =================================================
       TOTAL DEL CARRITO
    ================================================= */

    function getCartTotal() {

        return cart.reduce(function (total, item) {

            return total +
                (item.price * item.quantity);

        }, 0);

    }


    /* =================================================
       CANTIDAD TOTAL
    ================================================= */

    function getCartCount() {

        return cart.reduce(function (total, item) {

            return total + item.quantity;

        }, 0);

    }


    /* =================================================
       ACTUALIZAR CONTADOR
    ================================================= */

    function updateCartCount() {

        if (!cartCount) {
            return;
        }

        const count = getCartCount();

        cartCount.textContent = count;

        if (count > 0) {
            cartCount.style.display = "inline-flex";
        } else {
            cartCount.style.display = "none";
        }

    }


    /* =================================================
       RENDERIZAR CARRITO
    ================================================= */

    function renderCart() {

        if (!cartItems || !cartTotal) {
            return;
        }

        cartItems.innerHTML = "";

        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    🛒
                    <h3>Tu carrito está vacío</h3>
                    <p>Añade productos de la tienda para comenzar.</p>
                </div>
            `;

            cartTotal.textContent = "$0.00";

            updateCartCount();

            return;
        }


        cart.forEach(function (item, index) {

            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.category}
                    </p>

                    <strong>
                        $${item.price.toFixed(2)}
                    </strong>

                </div>


                <div class="cart-item-controls">

                    <button
                        class="quantity-button"
                        data-action="decrease"
                        data-index="${index}">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="quantity-button"
                        data-action="increase"
                        data-index="${index}">
                        +
                    </button>

                </div>


                <div class="cart-item-total">

                    <strong>
                        $${(item.price * item.quantity).toFixed(2)}
                    </strong>

                    <button
                        class="remove-cart-item"
                        data-index="${index}">
                        🗑️
                    </button>

                </div>

            `;


            cartItems.appendChild(cartItem);

        });


        cartTotal.textContent =
            "$" + getCartTotal().toFixed(2);


        updateCartCount();

    }


    /* =================================================
       AÑADIR PRODUCTO
    ================================================= */

    const buyButtons =
        document.querySelectorAll(".product-card button");


    buyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                this.closest(".product-card");

            if (!card) {
                return;
            }


            const name =
                card.querySelector("h3")?.textContent.trim();


            const priceText =
                card.querySelector("strong")?.textContent.trim();


            if (!name || !priceText) {
                return;
            }


            const price =
                parseFloat(
                    priceText
                        .replace("$", "")
                        .replace(",", "")
                );


            const categoryElement =
                card.closest(".shop-category");


            let category = "Tienda";


            if (categoryElement) {

                const title =
                    categoryElement.querySelector("h2");

                if (title) {
                    category =
                        title.textContent.trim();
                }

            }


            const productId =
                category + "-" + name;


            const existingProduct =
                cart.find(function (item) {

                    return item.id === productId;

                });


            if (existingProduct) {

                existingProduct.quantity++;

            } else {

                cart.push({

                    id: productId,

                    name: name,

                    price: price,

                    category: category,

                    quantity: 1

                });

            }


            saveCart();

            renderCart();


            /* =========================================
               MOSTRAR VENTANA "AÑADIDO"
            ========================================= */

            if (addedModal) {

                const addedProduct =
                    document.getElementById(
                        "added-product"
                    );

                if (addedProduct) {

                    addedProduct.textContent =
                        name;

                }

                addedModal.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }

        });

    });


    /* =================================================
       CERRAR VENTANA "AÑADIDO"
    ================================================= */

    const addedClose =
        document.querySelector(".added-close");


    if (addedClose) {

        addedClose.addEventListener(
            "click",
            function () {

                if (addedModal) {

                    addedModal.classList.remove(
                        "show"
                    );

                    document.body.style.overflow =
                        "";

                }

            }
        );

    }


    /* =================================================
       ABRIR CARRITO
    ================================================= */

    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                renderCart();

                if (cartModal) {

                    cartModal.classList.add("show");

                    document.body.style.overflow =
                        "hidden";

                }

            }
        );

    }


    /* =================================================
       CONTROLES DEL CARRITO
    ================================================= */

    if (cartItems) {

        cartItems.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest("button");

                if (!button) {
                    return;
                }


                const index =
                    parseInt(
                        button.dataset.index
                    );


                if (isNaN(index)) {
                    return;
                }


                const action =
                    button.dataset.action;


                /* =====================================
                   AUMENTAR
                ===================================== */

                if (action === "increase") {

                    cart[index].quantity++;

                }


                /* =====================================
                   DISMINUIR
                ===================================== */

                if (action === "decrease") {

                    cart[index].quantity--;

                    if (cart[index].quantity <= 0) {

                        cart.splice(index, 1);

                    }

                }


                /* =====================================
                   ELIMINAR
                ===================================== */

                if (
                    button.classList.contains(
                        "remove-cart-item"
                    )
                ) {

                    cart.splice(index, 1);

                }


                saveCart();

                renderCart();

            }
        );

    }


    /* =================================================
       VACIAR CARRITO
    ================================================= */

    const clearCartButton =
        document.getElementById("clear-cart");


    if (clearCartButton) {

        clearCartButton.addEventListener(
            "click",
            function () {

                cart = [];

                saveCart();

                renderCart();

            }
        );

    }


    /* =================================================
       CERRAR CARRITO
    ================================================= */

    const closeCartButton =
        document.querySelector(".close-cart");


    function closeCart() {

        if (cartModal) {

            cartModal.classList.remove("show");

            document.body.style.overflow =
                "";

        }

    }


    if (closeCartButton) {

        closeCartButton.addEventListener(
            "click",
            closeCart
        );

    }


    /* =================================================
       CERRAR AL HACER CLIC FUERA
    ================================================= */

    if (cartModal) {

        cartModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === cartModal
                ) {

                    closeCart();

                }

            }
        );

    }


    if (addedModal) {

        addedModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === addedModal
                ) {

                    addedModal.classList.remove(
                        "show"
                    );

                    document.body.style.overflow =
                        "";

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

                closeCart();

                if (addedModal) {

                    addedModal.classList.remove(
                        "show"
                    );

                }

                document.body.style.overflow =
                    "";

            }

        }
    );


    /* =================================================
       CONTINUAR CON TEBEX
    ================================================= */

    const tebexButton =
        document.getElementById(
            "continue-tebex"
        );


    if (tebexButton) {

        tebexButton.addEventListener(
            "click",
            function () {

                /*
                 * ======================================
                 * AQUÍ PONDREMOS LA URL REAL DE TEBEX
                 * ======================================
                 */

                const tebexUrl = "#";


                if (tebexUrl === "#") {

                    alert(
                        "El checkout de Tebex todavía no está configurado."
                    );

                    return;

                }


                window.location.href =
                    tebexUrl;

            }
        );

    }


    /* =================================================
       INICIO
    ================================================= */

    renderCart();

    updateCartCount();

});
