import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

// Verificar la preferencia del sistema para movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Marcar que el script de animaciones ha iniciado correctamente
  document.documentElement.classList.add('js-animations-started');

  // Configuración de matchMedia para animaciones adaptativas
  const mm = gsap.matchMedia();

  // --- CONFIGURACIÓN DE ESCRITORIO & TABLETS (> 768px) ---
  mm.add("(min-width: 769px)", () => {
    // 1. Animación del Hero (Carga Inicial y Parallax)
    if (document.querySelector(".hero")) {
      const heroTl = gsap.timeline();
      // Zoom lento de entrada del fondo
      heroTl.fromTo(".hero-bg", { scale: 1.08 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0)
        .to(".hero .eyebrow", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=1.8")
        .to(".hero h1", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=1.5")
        .to(".hero .lead", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=1.5")
        .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.15 }, "-=1.4")
        .to(".hero .badge", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.12 }, "-=1.3")
        .to(".hero-card img", { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=1.2")
        .to(".hero-card-tag", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

      // Parallax suave al hacer scroll
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: "20%",
        ease: "none"
      });
    }

    // 2. Líneas de tiempo y ScrollTriggers unificados por sección
    
    // --- Sección: Síntomas (#sintomas) ---
    if (document.querySelector("#sintomas")) {
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
    }

    // --- Sección: Servicios (#servicios) ---
    if (document.querySelector("#servicios")) {
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
    }

    // --- Sección: Proceso (#proceso) ---
    if (document.querySelector("#proceso")) {
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
    }

    // --- Sección: Perfil (#perfil) ---
    if (document.querySelector("#perfil")) {
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
    }

    // --- Sección: Testimonios (#testimonios) ---
    if (document.querySelector("#testimonios")) {
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
    }

    // --- Sección: Educación y Recursos (#recursos) ---
    if (document.querySelector("#recursos")) {
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
    }

    // --- Sección: Preguntas Frecuentes (#faq) ---
    if (document.querySelector("#faq")) {
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
    }

    // --- Sección: Ubicación (#ubicacion) ---
    if (document.querySelector("#ubicacion")) {
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
    }

    // --- Sección: CTA Final (Sección sin ID, buscamos por .cta-banner) ---
    if (document.querySelector(".cta-banner")) {
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
    }

    // --- Marca de Agua Médica Decorativa de Fondo ---
    const watermark = document.querySelector(".medical-watermark");
    if (watermark) {
      // 1. Movimiento lento continuo ligado al scroll general (efecto parallax)
      gsap.to(watermark, {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
        y: "35vh",
        rotation: 30,
        ease: "none"
      });

      // 2. Modificaciones sutiles de posición, escala y opacidad por secciones clave
      
      // Servicios
      if (document.querySelector("#servicios")) {
        gsap.to(watermark, {
          scrollTrigger: {
            trigger: "#servicios",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          scale: 1.1,
          opacity: 0.05,
          x: "-4vw",
        });
      }

      // Trayectoria / Perfil
      if (document.querySelector("#perfil")) {
        gsap.to(watermark, {
          scrollTrigger: {
            trigger: "#perfil",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          scale: 1.22,
          opacity: 0.065,
          x: "3vw",
          rotation: 55,
        });
      }

      // Educación
      if (document.querySelector("#recursos")) {
        gsap.to(watermark, {
          scrollTrigger: {
            trigger: "#recursos",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          scale: 0.95,
          opacity: 0.035,
          x: "-2vw",
          rotation: 15,
        });
      }
    }

    // --- Animación de Carga de los Artículos de Blog ---
    if (document.querySelector(".article-content")) {
      const articleTl = gsap.timeline();
      articleTl.to(".back-link", { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" })
        .to(".article-header > *", { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }, "-=0.3")
        .to(".article-cover", { opacity: 1, scale: 1, duration: 1.0, ease: "power3.out" }, "-=0.5")
        .to(".article-body > *", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.6")
        .to(".article-footer-cta", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");
    }
  });

  // --- CONFIGURACIÓN DE MÓVIL (Pantallas <= 768px) ---
  mm.add("(max-width: 768px)", () => {
    // En móviles desactivamos ScrollTrigger de secciones para evitar saltos de rendimiento.
    // Solo animamos el Hero en la carga inicial de forma muy suave y simplificada.
    if (document.querySelector(".hero")) {
      const heroTl = gsap.timeline();
      // Zoom de entrada más suave en móvil
      heroTl.fromTo(".hero-bg", { scale: 1.05 }, { scale: 1, duration: 1.8, ease: "power2.out" }, 0)
        .to(".hero .eyebrow", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=1.4")
        .to(".hero h1", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=1.2")
        .to(".hero .lead", { opacity: 1, duration: 0.7, ease: "power3.out" }, "-=1.2")
        .to(".hero-actions .btn", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }, "-=1.1")
        .to(".hero .badge", { opacity: 1, duration: 0.5, ease: "power3.out", stagger: 0.08 }, "-=1.0")
        .to(".hero-card img", { opacity: 1, duration: 1.0, ease: "power3.out" }, "-=0.8");
    }

    // Animación simplificada de carga para los artículos en móviles
    if (document.querySelector(".article-content")) {
      const articleTl = gsap.timeline();
      articleTl.to(".back-link", { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" })
        .to(".article-header > *", { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, "-=0.3")
        .to(".article-cover", { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .to(".article-body > *", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }, "-=0.5")
        .to(".article-footer-cta", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");
    }
  });
}
