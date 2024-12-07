document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        es: {
            "sobre-mi": "Sobre Mi",
            "habilidades-tecnicas": "Habilidades Técnicas",
            "proyectos": "Proyectos",
            "ingeniera-software": "Ingeniera de Software",
            "contacto": "CONTACTO",
            "sobre-mi-titulo": "SOBRE MI",
            "sobre-mi-frase": "Llevando la luz de la innovación y la calidad al código",
            "sobre-mi-descripcion": "Apasionada en el Desarrollo de Software con enfoque en front-back end usando JavaScript, HTML y CSS. Me entusiasma la industria y estoy comprometida con aprender y crecer profesionalmente. Soy una persona positiva, y me gusta comunicarme en trabajo de equipo para la solución de diversos trabajos tecnológicos.",
            "educacion": "Educación",
            "universidad": "Universidad CENFOTEC",
            "titulo": "Bachillerato de Ingeniería de Software",
            "curriculum": "Curriculum",
            "habilidades-tecnicas-titulo": "Habilidades Técnicas",
            "proyectos-titulo": "Proyectos",
            "proyecto-1": "Creación de una plataforma web para pacientes y empleados de un hospital, orientada a la gestión de citas y registros médicos.",
            "proyecto-2": "Desarrollar de una plataforma web para la administración eficiente de paquetes y envíos en una empresa de distribución.",
            "copyright": "© 2024. Todos los derechos reservados."
        },
        en: {
            "sobre-mi": "About Me",
            "habilidades-tecnicas": "Programming Skills",
            "proyectos": "Projects",
            "ingeniera-software": "Software Engineering",
            "contacto": "CONTACT",
            "sobre-mi-titulo": "ABOUT ME",
            "sobre-mi-frase": "Bringing the light of innovation and quality to code",
            "sobre-mi-descripcion": "Passionate Software Development student with a special focus on creating exceptional user interfaces and experiences. Enthusiast in software, committed to learning and growing in this exciting field.",
            "educacion": "Education",
            "universidad": "Universidad CENFOTEC",
            "titulo": "Software Engineering Bachelor's",
            "curriculum": "Curriculum",
            "habilidades-tecnicas-titulo": "Programming Skills",
            "proyectos-titulo": "Projects",
            "proyecto-1": "Created a web platform for managing patients and employees' appointments and medical records in a hospital.",
            "proyecto-2": "Developed a web platform for efficient package and shipment management in a distribution company.",
            "copyright": "© 2024. All rights reserved."
        }
    };

    const languageSwitcher = document.getElementById("languageSwitcher");

    function translatePage(language) {
        const elements = document.querySelectorAll("[data-translate]");
        elements.forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    languageSwitcher.addEventListener("change", (e) => {
        const selectedLanguage = e.target.value;
        translatePage(selectedLanguage);
    });

    translatePage('es');  // Default to Spanish
});

