document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showNextSlide() {
        slides[currentSlide].style.display = "none"; // Ocultar la imagen actual
        currentSlide = (currentSlide + 1) % slides.length; // Pasar a la siguiente imagen
        slides[currentSlide].style.display = "block"; // Mostrar la nueva imagen
    }
    
    slides.forEach(slide => slide.style.display = "none"); // Ocultar todas las imágenes al inicio
    slides[0].style.display = "block"; // Mostrar la primera imagen al cargar
    setInterval(showNextSlide, 4000);

    document.getElementById("showGame").addEventListener("click", function() {
        document.querySelector(".game").classList.remove("hidden");
    });

    document.getElementById("checkAnswer").addEventListener("click", function() {
        let answer = document.getElementById("question").value.trim().toLowerCase();
        if (answer === "leire lopez-marrufo curtido") {
            document.getElementById("result").textContent = "¡Correcto! Te amo mucho 💕";
        } else {
            document.getElementById("result").textContent = "Inténtalo de nuevo, mi amor 😊";
        }
    });

    // Intentar reproducir la música tras la interacción del usuario
    let audio = document.getElementById("music");
    audio.volume = 0.5; // Ajusta el volumen si es necesario
    
    function playAudio() {
        audio.play().catch(error => {
            console.log("La reproducción automática fue bloqueada.");
        });
    }
    
    document.body.addEventListener("click", playAudio, { once: true }); // Reproducir tras la primera interacción del usuario
});
