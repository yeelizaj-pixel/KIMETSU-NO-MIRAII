// ========================================
// KIMETSU NO MIRAI
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Kimetsu no Mirai cargado correctamente 💜");


    // ========================================
    // ANIMACIÓN DE LAS TARJETAS
    // ========================================

    const tarjetas = document.querySelectorAll(".tarjeta");


    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener("mouseenter", function () {

            tarjeta.style.transform = "translateY(-8px)";

        });


        tarjeta.addEventListener("mouseleave", function () {

            tarjeta.style.transform = "translateY(0)";

        });

    });

});