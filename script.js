function showCategory(category) {

    const categories = document.querySelectorAll(".shop-category");

    categories.forEach(function(element) {
        element.classList.remove("active");
    });

    const selected = document.getElementById(category);

    if (selected) {
        selected.classList.add("active");
    }
}


function paymentMessage() {

    const modal = document.getElementById("payment-modal");

    if (modal) {
        modal.classList.add("show");
    }

}


function closePayment() {

    const modal = document.getElementById("payment-modal");

    if (modal) {
        modal.classList.remove("show");
    }

}


document.addEventListener("DOMContentLoaded", function() {

    showCategory("survival");

});
