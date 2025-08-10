// Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('header__mobile-menu--open');
        });

        // Smooth scroll to section
        function scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Testimonial carousel logic
        const testimonials = [
            {
                quote: '"Cada pieza de Daniel es un portal a la aventura. Tengo tres de sus cerámicas y cada una me transporta a esas montañas que él escaló. Es arte con alma."',
                name: 'Sofia Martinez',
                role: 'Coleccionista de Arte',
                avatar: 'S'
            },
            {
                quote: '"La máscara tribal punk que compré es el centro de mi sala. Daniel logra mezclar culturas y rebeldía en cada obra. ¡Increíble talento!"',
                name: 'Juan Pablo Ríos',
                role: 'Artista Visual',
                avatar: 'J'
            },
            {
                quote: '"Conocí a Daniel en un viaje y su pasión por el arte es contagiosa. Sus textiles nómadas tienen una energía única, se nota el amor en cada hilo."',
                name: 'Mariana López',
                role: 'Viajera & Coleccionista',
                avatar: 'M'
            }
        ];

        const testimonialQuote = document.getElementById('testimonialQuote');
        const testimonialName = document.getElementById('testimonialName');
        const testimonialRole = document.getElementById('testimonialRole');
        const testimonialAvatar = document.getElementById('testimonialAvatar');
        const navDots = document.querySelectorAll('.testimonial__nav-dot');

        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.getAttribute('data-testimonial'));
                testimonialQuote.textContent = testimonials[idx].quote;
                testimonialName.textContent = testimonials[idx].name;
                testimonialRole.textContent = testimonials[idx].role;
                testimonialAvatar.textContent = testimonials[idx].avatar;
                navDots.forEach(d => d.classList.remove('testimonial__nav-dot--active'));
                dot.classList.add('testimonial__nav-dot--active');
            });
        });