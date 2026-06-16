import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

// Verificar la preferencia del sistema para movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Configuración de matchMedia para animaciones adaptativas
  const mm = gsap.matchMedia();

  // --- CONFIGURACIÓN DE ESCRITORIO (Pantallas > 768px) ---
  mm.add("(min-width: 769px)", () => {
    // 1. Animación del Hero (Carga Inicial)
    const heroTl = gsap.timeline();
    
    heroTl.to(".hero .eyebrow", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .to(".hero h1", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .to(".hero .lead", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.15 }, "-=0.5")
      .to(".hero .badge", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.12 }, "-=0.4")
      .to(".hero-card img", { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=1.2")
      .to(".hero-card-tag", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

    // 2. Transiciones de Sección al hacer Scroll
    gsap.utils.toArray("section:not(#inicio)").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease: "power3.out"
      });
    });

    // 3. Stagger de Columnas de Servicios
    gsap.from(".services-column", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out"
    });

    // 4. Animación de Perfil (Profile - Stats vs Texto)
    gsap.from(".profile-stats", {
      scrollTrigger: {
        trigger: ".profile-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      scale: 0.98,
      y: 30,
      duration: 1.0,
      ease: "power3.out"
    });

    gsap.from(".profile-text-content", {
      scrollTrigger: {
        trigger: ".profile-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 1.0,
      ease: "power3.out"
    });

    // Stagger para las credenciales en el perfil
    gsap.from(".credential-card-badge", {
      scrollTrigger: {
        trigger: ".profile-credentials",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out"
    });

    // 5. Stagger de Tarjetas de Testimonios
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonials-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // 6. Stagger de Tarjetas Educativas (Blog)
    gsap.from(".education-card", {
      scrollTrigger: {
        trigger: ".education-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // 7. Entrada de Preguntas Frecuentes (FAQ)
    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: ".faq-list",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    // 8. Entrada del CTA Final
    gsap.from(".cta-content > *", {
      scrollTrigger: {
        trigger: ".cta-banner",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  });

  // --- CONFIGURACIÓN DE MÓVIL (Pantallas <= 768px) ---
  mm.add("(max-width: 768px)", () => {
    // En móviles desactivamos ScrollTrigger para evitar saltos y tirones de rendimiento.
    // Solo animamos los elementos del Hero en la carga inicial de forma muy suave y simplificada.
    const heroTl = gsap.timeline();
    
    heroTl.to(".hero .eyebrow", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
      .to(".hero h1", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
      .to(".hero .lead", { opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }, "-=0.4")
      .to(".hero .badge", { opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 }, "-=0.3")
      .to(".hero-card img", { opacity: 1, duration: 1.0, ease: "power3.out" }, "-=0.8");
  });
}
