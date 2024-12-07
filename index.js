document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        es: {
            "bienvenida": "Bienvenidos",
            "sobre-mi": "Sobre Mi",
            "español": "Español",
            "ingles": "Inglés",
            "habilidades-tecnicas": "Habilidades Técnicas",
            "proyectos": "Proyectos",
            "ingeniera-software": "Ingeniera de Software",
            "contacto": "CONTACTO",
            "sobre-mi-vision": "Visión",
            "sobre-mi-dVision": "Fusionar creatividad y tecnología para desarrollar soluciones de software que no solo resuelvan problemas, sino que inspiren innovación, fomenten la eficiencia y mejoren la experiencia de las personas en un mundo digital.",
            "sobre-mi-mision": "Misión",
            "sobre-mi-dMision": "Utilizar mis habilidades en ingeniería de software para crear soluciones innovadoras y eficientes que mejoren la vida de las personas y optimicen los procesos en diversas industrias",
            "sobre-mi-titulo": "SOBRE MI",
            "sobre-mi-frase": "Llevando la luz de la innovación y la calidad al código",
            "sobre-mi-descripcion": "Apasionada en el Desarrollo de Software con enfoque en front-back end usando JavaScript, HTML y CSS. Me entusiasma la industria y estoy comprometida con aprender y crecer profesionalmente. Soy una persona positiva, y me gusta comunicarme en trabajo de equipo para la solución de diversos trabajos tecnológicos.",
            "educacion": "Educación",
            "SCRUMstududy": "SCRUMstududy",
            "universidad": "Universidad CENFOTEC - 2026",
            "certificado": "Certificación en Fundamentals de Scrum",
            "titulo": "Bachillerato de Ingeniería de Software",
            "curriculum": "Descargar CV",
            "habilidades-tecnicas-titulo": "Habilidades Técnicas",
            "proyectos-titulo": "Proyectos",
            "habilidades-tecnicas-desc": "Estas son las tecnologías con las que más disfruto trabajar",
            "proyecto-1": "Creación de una plataforma web para pacientes y empleados de un hospital, orientada a la gestión de citas y registros médicos.",
            "proyecto-2": "Desarrollar de una plataforma web para la administración eficiente de paquetes y envíos en una empresa de distribución.",
            "copyright": "© 2024. Todos los derechos reservados."
        },
        en: {
            "bienvenida": "Welcome",
            "sobre-mi": "About Me",
            "español": "Spanish",
            "ingles": "English",
            "habilidades-tecnicas": "Programming Skills",
            "proyectos": "Projects",
            "ingeniera-software": "Software Engineering",
            "contacto": "CONTACT",
            "sobre-mi-vision": "Vision",
            "sobre-mi-dVision": "To merge creativity and technology to develop software solutions that not only solve problems but inspire innovation, foster efficiency, and improve people's experiences in a digital world.",
            "sobre-mi-mision": "Mission",
            "sobre-mi-dMision": "To use my skills in software engineering to create innovative and efficient solutions that improve people's lives and optimize processes in various industries.",
            "sobre-mi-titulo": "ABOUT ME",
            "sobre-mi-frase": "Bringing the light of innovation and quality to code",
            "sobre-mi-descripcion": "Passionate Software Development student with a special focus on creating exceptional user interfaces and experiences. Enthusiast in software, committed to learning and growing in this exciting field.",
            "educacion": "Education",
            "SCRUMstududy": "SCRUMstududy",
            "universidad": "Universidad CENFOTEC - 2026",
            "certificado": "Certificated in Scrum Fundamentals",
            "titulo": "Software Engineering Bachelor's",
            "curriculum": "Download CV",
            "habilidades-tecnicas-titulo": "Programming Skills",
            "proyectos-titulo": "Projects",
            "habilidades-tecnicas-desc": "These are the technologies I enjoy working with the most.",
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

