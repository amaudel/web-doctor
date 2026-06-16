import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

// Verificar la preferencia del sistema para movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Configuración de matchMedia para animaciones adaptativas
  const mm = gsap.matchMedia();

  // --- CONFIGURACIÓN DE ESCRITORIO & TABLETS (> 768px) ---
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

    // 2. Líneas de tiempo y ScrollTriggers unificados por sección
    
    // --- Sección: Síntomas (#sintomas) ---
    const sintomasTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sintomas",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    sintomasTl.fromTo("#sintomas .section-header", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#sintomas .symptom-card, #sintomas .alarm-banner",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      "-=0.5"
    );

    // --- Sección: Servicios (#servicios) ---
    const serviciosTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#servicios",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    serviciosTl.fromTo("#servicios .section-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#servicios .services-column",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    );

    // --- Sección: Proceso (#proceso) ---
    const procesoTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#proceso",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    procesoTl.fromTo("#proceso .section-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#proceso .process-step",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    // --- Sección: Perfil (#perfil) ---
    const perfilTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#perfil",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    perfilTl.fromTo("#perfil .profile-stats",
      { opacity: 0, scale: 0.98, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#perfil .profile-text-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    ).fromTo("#perfil .credential-card-badge",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );

    // --- Sección: Testimonios (#testimonios) ---
    const testimoniosTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonios",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    testimoniosTl.fromTo("#testimonios .section-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#testimonios .testimonial-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    // --- Sección: Educación y Recursos (#recursos) ---
    const recursosTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#recursos",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    recursosTl.fromTo("#recursos .section-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#recursos .education-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.5"
    );

    // --- Sección: Preguntas Frecuentes (#faq) ---
    const faqTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faq",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    faqTl.fromTo("#faq .section-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#faq .faq-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" },
      "-=0.5"
    );

    // --- Sección: Ubicación (#ubicacion) ---
    const ubicacionTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#ubicacion",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    ubicacionTl.fromTo("#ubicacion .section-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo("#ubicacion .location-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      "-=0.5"
    ).fromTo("#ubicacion .location-ctas, #ubicacion .location-map-wrapper",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.6"
    );

    // --- Sección: CTA Final (Sección sin ID, buscamos por .cta-banner) ---
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cta-banner",
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
    ctaTl.fromTo(".cta-banner",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    ).fromTo(".cta-content > *",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
      "-=0.5"
    );
  });

  // --- CONFIGURACIÓN DE MÓVIL (Pantallas <= 768px) ---
  mm.add("(max-width: 768px)", () => {
    // En móviles desactivamos ScrollTrigger de secciones para evitar saltos de rendimiento.
    // Solo animamos el Hero en la carga inicial de forma muy suave y simplificada.
    const heroTl = gsap.timeline();
    
    heroTl.to(".hero .eyebrow", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" })
      .to(".hero h1", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
      .to(".hero .lead", { opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }, "-=0.4")
      .to(".hero .badge", { opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 }, "-=0.3")
      .to(".hero-card img", { opacity: 1, duration: 1.0, ease: "power3.out" }, "-=0.8");
  });
}
