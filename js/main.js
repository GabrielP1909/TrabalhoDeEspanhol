document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar ul li a');
    const body = document.body;

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'var(--navbar-bg)'; // Usar variável CSS
            navbar.style.boxShadow = '0 4px 15px var(--shadow-light)';
        } else {
            navbar.style.backgroundColor = 'var(--navbar-bg)'; // Manter opacidade inicial
            navbar.style.boxShadow = '0 4px 15px var(--shadow-light)';
        }
    });

    // Add 'active' class to current page link
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Basic form submission (for contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            alert('Mensagem enviada com sucesso! (Funcionalidade de envio real não implementada)');

            // Clear the form
            contactForm.reset();
        });
    }

    // --- Novas Funcionalidades e Melhorias ---

    // 1. Modo Claro/Escuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        // Carregar preferência do usuário
        const currentMode = localStorage.getItem('theme');
        if (currentMode === 'dark') {
            body.classList.add('dark-mode');
        }

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // Salvar preferência
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // 2. Botão de Aumentar Fonte
    const increaseFontBtn = document.getElementById('increase-font-btn');
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => {
            body.classList.toggle('large-font');
        });
    }

    // 3. Botão de Alto Contraste
    const highContrastBtn = document.getElementById('high-contrast-btn');
    if (highContrastBtn) {
        highContrastBtn.addEventListener('click', () => {
            body.classList.toggle('high-contrast');
        });
    }

    // 4. Scroll Reveal Animation
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Parar de observar depois de visível
            }
        });
    }, observerOptions);

    scrollRevealElements.forEach(el => {
        observer.observe(el);
    });

    // 5. Guia Gastronômico com Filtro (cultura.html)
    const gastronomyFilterButtons = document.querySelectorAll('.gastronomy-filter button');
    const gastronomyItems = document.querySelectorAll('.gastronomy-item');

    if (gastronomyFilterButtons.length > 0 && gastronomyItems.length > 0) {
        // Mostrar todos por padrão
        gastronomyItems.forEach(item => item.classList.add('show'));

        gastronomyFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remover 'active' de todos os botões
                gastronomyFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Adicionar 'active' ao botão clicado
                button.classList.add('active');

                const filter = button.dataset.filter;

                gastronomyItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                    }
                });
            });
        });
    }

    // 6. Música Peruana Opcional
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const backgroundMusic = document.getElementById('background-music');

    if (musicToggleBtn && backgroundMusic) {
        let isPlaying = false;

        musicToggleBtn.addEventListener('click', () => {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggleBtn.textContent = '🎵'; // Ícone de música desligada
            } else {
                backgroundMusic.play();
                musicToggleBtn.textContent = '🔇'; // Ícone de música ligada
            }
            isPlaying = !isPlaying;
        });
    }

    // 7. Parallax Scroll (simulado com JS para seções)
    // Para um parallax mais robusto, uma biblioteca como ScrollMagic seria ideal.
    // Aqui, faremos um efeito simples de background-position.
    const parallaxSections = document.querySelectorAll('.parallax-bg');

    window.addEventListener('scroll', () => {
        parallaxSections.forEach(section => {
            const speed = section.dataset.parallaxSpeed || 0.3; // Velocidade do parallax
            const yPos = -(window.scrollY - section.offsetTop) * speed;
            section.style.backgroundPositionY = `${yPos}px`;
        });
    });

    // 8. Galeria 360° (Placeholder)
    // Para uma galeria 360 real, você precisaria de uma biblioteca como Photo Sphere Viewer.
    // Exemplo de inicialização (requer a biblioteca e imagens 360):
    /*
    if (document.getElementById('panorama-viewer')) {
        const viewer = new PhotoSphereViewer.Viewer({
            container: 'panorama-viewer',
            panorama: 'path/to/your/360_image.jpg', // Substitua pelo caminho da sua imagem 360
            caption: 'Vista 360 de Machu Picchu',
            loadingTxt: 'Carregando panorama...',
            navbar: [
                'zoom',
                'move',
                'fullscreen',
                'caption',
                'gyroscope'
            ],
        });
    }
    */

    // 9. Mapa Turístico Interativo (Placeholder)
    // Para um mapa interativo real, você precisaria de uma API como Google Maps ou Leaflet.
    // Exemplo de inicialização com Leaflet:
    /*
    if (document.getElementById('map')) {
        const map = L.map('map').setView([-13.53195, -71.96746], 13); // Coordenadas de Cusco

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicionar marcadores
        const destinations = [
            { lat: -13.163141, lng: -72.544963, name: 'Machu Picchu', description: 'A cidadela inca perdida.' },
            { lat: -13.53195, lng: -71.96746, name: 'Cusco', description: 'Antiga capital do Império Inca.' },
            // Adicione mais destinos aqui
        ];

        destinations.forEach(dest => {
            L.marker([dest.lat, dest.lng])
                .addTo(map)
                .bindPopup(`<b>${dest.name}</b><br>${dest.description}<br><a href="#">Mais informações</a>`);
        });
    }
    */
});
