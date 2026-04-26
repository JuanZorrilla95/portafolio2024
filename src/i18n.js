import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      nav: {
        about: 'About Me',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      // Hero
      hero: {
        title: 'Welcome to my portfolio',
        subtitle: "I'm a Full-Stack developer passionate about creating attractive and efficient web experiences for the users.",
        cta: 'Check out my projects',
        contact: 'Get in touch',
      },
      // About
      about: {
        title: 'About me',
        description: "I'm a full-stack developer with 3.5 YOE and passionate for creating innovative and efficient web apps. I love learning new technologies and solving problems. When I'm not looking at pixels, I enjoy physical activities like basketball and calisthenics.",
      },
      // Experience
      experience: {
        title: 'Work experience',
        experiences: [
          {
            company: 'Onus Sistemas',
            role: 'Backend Developer',
            description: 'Working on enterprise applications, evolutionary and corrective maintenance, SQL query optimization, and development of new features focused on administrative and accounting processes.',
            skills: ['PHP', 'MySQL', 'SQL', 'Javascript', 'HTML', 'CSS'],
          },
          {
            company: 'Ministry of Health',
            role: 'Full-Stack Developer',
            description: 'Full-Stack Developer at the Ministry of Health (Santa Fe - Argentina) on the GC Salud project.',
            skills: ['PHP', 'Javascript', 'Symfony', 'MySQL', 'HTML', 'CSS'],
            link: { url: 'https://www.santafe.gob.ar/ms/gcsalud/', text: 'GC Salud' },
          },
          {
            company: 'Koinsya',
            role: 'Full-Stack Laravel Developer',
            description: 'Full-Stack Laravel Developer at a financial loan application called Koinsya & adminKoinsya, implementing bank APIs, building new features, and migrating the database from MySQL to AWS Cloud.',
            skills: ['Laravel', 'PHP', 'TailwindCSS', 'MySQL', 'AWS'],
          },
        ],
      },
      // Projects
      projects: {
        title: 'Projects',
        viewMore: 'View more',
        items: [
          {
            title: 'ChocolateShop',
            description: 'Chocolate shop e-commerce with Laravel 11',
          },
          {
            title: 'EspacioM',
            description: 'Yoga space that simulates payment gateway for monthly class subscriptions',
          },
          {
            title: 'GYM Kumbia-PHP',
            description: 'Gym project with class registration, teachers, schedules made with KumbiaPHP and MVC pattern',
          },
        ],
      },
      // Skills
      skills: {
        title: 'Proven skills',
        categories: {
          Frontend: 'Frontend',
          Backend: 'Backend',
          Tools: 'Tools',
          English: 'My English level:',
        },
        english: {
          level: 'Between B2 and C1',
          academy: 'Global Connections Academy (5 years)',
          efset: 'EF SET (C1 Advanced):',
        },
      },
      // Contact
      contact: {
        title: "Let's get in touch!",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
        sent: 'Message Sent',
        sending: 'Sending...',
        successToast: 'Message sent successfully!',
        errorToast: 'Error sending message. Please try again.',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Please enter a valid email',
        messageRequired: 'Message is required',
      },
      // Footer
      footer: {
        rights: 'All rights reserved.',
      },
    },
  },
  es: {
    translation: {
      // Header
      nav: {
        about: 'Sobre M\u00ed',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
      // Hero
      hero: {
        title: 'Bienvenidos a mi portafolio',
        subtitle: 'Soy un desarrollador Full-Stack apasionado por crear experiencias web atractivas y eficientes.',
        cta: 'Ver mis proyectos',
        contact: 'Cont\u00e1ctame',
      },
      // About
      about: {
        title: 'Sobre m\u00ed',
        description: 'Soy un desarrollador web full-stack y un apasionado por crear aplicaciones web innovadoras y eficientes. Me encanta aprender nuevas tecnolog\u00edas y resolver problemas. Cuando no estoy codeando, disfruto de actividad f\u00edsica como basquet y calistenia.',
      },
      // Experience
      experience: {
        title: 'Experiencia laboral',
        experiences: [
          {
            company: 'Onus Sistemas',
            role: 'Desarrollador Backend',
            description: 'Trabajando en aplicaciones empresariales, mantenimiento evolutivo y correctivo, optimizaci\u00f3n de consultas SQL y desarrollo de nuevas funcionalidades orientadas a procesos administrativos y contables.',
            skills: ['PHP', 'MySQL', 'SQL', 'Javascript', 'HTML', 'CSS'],
          },
          {
            company: 'Ministerio de Salud',
            role: 'Desarrollador Full-Stack',
            description: 'Desarrollador Full-Stack en el Ministerio de Salud (Santa Fe - Argentina) en el proyecto GC Salud.',
            skills: ['PHP', 'Javascript', 'Symfony', 'MySQL', 'HTML', 'CSS'],
            link: { url: 'https://www.santafe.gob.ar/ms/gcsalud/', text: 'GC Salud' },
          },
          {
            company: 'Koinsya',
            role: 'Desarrollador Full-Stack Laravel',
            description: 'Desarrollador Full-Stack en una aplicaci\u00f3n de pr\u00e9stamos financieros llamada Koinsya y adminKoinsya, integrando APIs bancarias, desarrollando nuevas funcionalidades y migrando la base de datos de MySQL a AWS Cloud.',
            skills: ['Laravel 11', 'PHP', 'TailwindCSS', 'MySQL', 'AWS'],
          },
        ],
      },
      // Projects
      projects: {
        title: 'Mis Proyectos',
        viewMore: 'Ver m\u00e1s',
        items: [
          {
            title: 'ChocolateShop',
            description: 'E-commerce de tienda de Chocolates con Laravel 11',
          },
          {
            title: 'EspacioM',
            description: 'Espacio de Yoga que simula pasarela de pago de abono de clases mensuales',
          },
          {
            title: 'GYM Kumbia-PHP',
            description: 'Proyecto de un Gimnasio con alta de clases, profesores, horarios hecho con KumbiaPHP y el patr\u00f3n MVC',
          },
        ],
      },
      // Skills
      skills: {
        title: 'Skills probadas',
        categories: {
          Frontend: 'Frontend',
          Backend: 'Backend',
          Tools: 'Herramientas',
          English: 'Nivel de Ingl\u00e9s:',
        },
        english: {
          level: 'Entre B2 y C1',
          academy: 'Academia Global Connections (5 a\u00f1os)',
          efset: 'EF SET (C1 Avanzado):',
        },
      },
      // Contact
      contact: {
        title: 'Cont\u00e1ctame',
        name: 'Nombre',
        email: 'Email',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        sent: 'Mensaje enviado',
        sending: 'Enviando...',
        successToast: 'Mensaje enviado exitosamente!',
        errorToast: 'Error al enviar el mensaje. Int\u00e9ntalo de nuevo.',
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El email es obligatorio',
        emailInvalid: 'Ingresa un email v\u00e1lido',
        messageRequired: 'El mensaje es obligatorio',
      },
      // Footer
      footer: {
        rights: 'Todos los derechos reservados.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
