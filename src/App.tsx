import './App.css'
import { useState } from 'react'

import profilePhoto from './assets/Ize.jpg'
import udemyImage from './assets/certificate/udemy.jpg'
import sanbercodeImage from './assets/certificate/sanbercode.jpg'
import datascienceImage from './assets/certificate/datascience.jpg'
import javaImage from './assets/certificate/java.jpg'
import logikapemrogramanImage from './assets/certificate/logikapemrograman.jpg'
import oracledatascienceImage from './assets/certificate/oracledatascience.jpg'
import aifoundationImage from './assets/certificate/aifoundation.jpg'
import ibmImage from './assets/certificate/ibm.jpg'
import powerbiImage from './assets/certificate/powerbi.jpg'
import courseraImage from './assets/certificate/coursera.jpg'

import reactLogo from './assets/skills/react.svg'
import jsLogo from './assets/skills/javascript.svg'
import pyLogo from './assets/skills/python.svg'
import htmlLogo from './assets/skills/html5.svg'
import cssLogo from './assets/skills/css3.svg'
import figmaLogo from './assets/skills/figma.svg'
import excelLogo from './assets/skills/excel.png'
import powerbiLogo from './assets/skills/powerbi.png'
import lookerLogo from './assets/skills/looker.svg'
import seleniumLogo from './assets/skills/selenium.svg'
import cypressLogo from './assets/skills/cypress.svg'
import junitLogo from './assets/skills/junit.svg'
import katalonLogo from './assets/skills/katalon.png'
import testrailLogo from './assets/skills/testrail.png'
import laravelLogo from './assets/skills/laravel.svg'
import BalsamiqLogo from './assets/skills/balsamiq.svg'
import MySQLLogo from './assets/skills/mysql.png'
import sqlyogLogo from './assets/skills/SQLyog.jpg'
import postgresqlLogo from './assets/skills/postgresql.png'
import flutterlogo from './assets/skills/flutter.svg'
import dartLogo from './assets/skills/dart.jpeg'

import proj1 from './assets/projects/proj1.png'
import proj2 from './assets/projects/proj2.png'
import proj3 from './assets/projects/proj3.png'
import proj4 from './assets/projects/proj4.png'
import proj5 from './assets/projects/proj5.png'

import itdelLogo from './assets/itdel.png'
import parmaksianLogo from'./assets/parmaksian.jpeg'

import socialLogo from './assets/social/email.png'
import linkedinLogo from './assets/social/linkedin.png'
import githubLogo from './assets/social/github.png'
import instagramLogo from './assets/social/instagram.png'



const projects = [
  {
    title: 'Development of Drg. Nancy Hutabarat clinic website',
    description:
      'Developing a website for Drg. Nancy Hutabarat Clinic as a central platform for information and dental service appointments, equipped with service management, gallery, staff data, facilities, schedule, testimonials, and appointment booking features.',
    image: proj1,
    stack: ['Laravel', 'JavaScript', 'PHP', 'Boostrap', 'MySQL'],
    link: 'https://github.com/izeronauli/FinalProject-I_Web-based-Drg-Nancy-Hutabarat-Clinic'
  },
  {
    title: 'Design and Development of Movie Catalog Application',
    description:
      'The Movie Catalog Application is designed and developed to provide a complete movie exploration experience, including user authentication, browsing various movie categories, searching specific titles, and viewing detailed information and trailers. The application also includes a favorites feature, smooth page navigation, and a dynamic, responsive user interface. All features are built using TMDb API integration, Firebase Authentication, and multiple providers for efficient movie data management.',
    image: proj2,
    stack: ['Flutter','Dart', 'TMDb API', 'Firebase'],
    link: 'https://github.com/Roy-oy/project_aplikasi_mobile'
  },
  {
    title: 'Development of Kawalptnku Information System',
    description:
      'The Kawalptnku Information System is a web platform that helps prospective students prepare for PTN admission through account management, tryout features, score-based admission simulation, university and study program information, integrated payments use Midtrans, announcements, and interest visualization.',
    image: proj3,
    stack: ['React','Fiber','Golang', 'MySQL','Postman', 'Katalon'],
    link: 'https://github.com/jmsrzk14/PA2-Kel08'
  },
    {
    title: 'Classification of Glioma Brain Tumors Using MLP and Random Forest Algorithms ',
    description:
      'The Kawalptnku Information System is a web platform that helps prospective students prepare for PTN admission through account management, tryout features, score-based admission simulation, university and study program information, integrated payments use Midtrans, announcements, and interest visualization.',
    image: proj4,
    stack: ['ReactJs','Python','Vite','Flask','Random Forest','Multilayer Perceptron',],
    link: 'https://github.com/Danielhzg/GliomaNet'
  },
  {
    title: 'YOLOv11 Implementation for Mobile-Based Detection of Organic and Inorganic Waste Objects',
    description:
      'The Kawalptnku Information System is a web platform that helps prospective students prepare for PTN admission through account management, tryout features, score-based admission simulation, university and study program information, integrated payments use Midtrans, announcements, and interest visualization.',
    image: proj5,
    stack: ['Flutter','Python','YOLOv11','MobileNetV3','MobileNetV4','TensorFlow Lite'],
    link: 'https://github.com/Danielhzg/Smartwaste_Application'
  }
]

const education = [
  {
    role: 'Diploma 3 in Information Technology',
    company: 'Institut Teknologi Del',
    period: '2023 — 2026 (Expected)',
    logo : itdelLogo,
    points: [
      'Information Technology Student Association — Head of Public Relations & Publication Division (Dec 2025 – Present).',
      'Information Technology Student Association — Deputy Head of Public Relations & Publication Division (Sep 2024 - Dec 2025).',
      'Cadre Program Committee 2025 — PIC (Person in Charge) (Oct 2025).', 
      'Inauguration, Dies Natalis & Graduation Committee — Exhibition Division (Sep 2025)',
      'Del Dance Drama Club — Member (Aug 2024 - Present).',
      'Cadre Program Committee 2024 — PIC (Person in Charge) (Oct 2024)'
    ], 

  },
  {
    role: 'Science Major',
    company: 'SMA N 1 Parmaksian',
    period: '2020 — 2023',
    logo: parmaksianLogo, 
    points: [
      'head of the academic and achievement division.',
    ], 
  }
]

// Types for skills
interface SkillItem {
  name: string
  icon: string
}

interface SkillGroup{
  title: string
  items: SkillItem[]
}

const skillGroup: SkillGroup[] = [
  {
    title: 'Framework/Programming Languages',
    items: [
      { name: 'Laravel', icon: laravelLogo },
      { name: 'react', icon: reactLogo },
      { name: 'Flutter', icon: flutterlogo },
      { name: 'JavaScript', icon: jsLogo },
      { name: 'Dart', icon: dartLogo },
      { name: 'Python', icon: pyLogo },
      { name: 'HTML5', icon: htmlLogo },
      { name: 'CSS', icon: cssLogo }
    ]
  },
  {
    title: 'Quality Assurance',
    items: [
      { name: 'Katalon', icon: katalonLogo },
      { name: 'Selenium', icon: seleniumLogo },
      { name: 'JUnit', icon: junitLogo },
      { name: 'Cypress', icon: cypressLogo },
      { name: 'TestRail', icon: testrailLogo }
    ]
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL Workbench', icon: MySQLLogo },
      { name: 'SQLyog ', icon: sqlyogLogo },
      { name: 'PostgreSQL', icon: postgresqlLogo }
    ]
  },
  {
    title: 'User Interface',
    items: [
      { name: 'Figma', icon: figmaLogo },
      { name: 'Balsamiq', icon: BalsamiqLogo },
    ]
  },
   {
    title: 'Data Analyst',
    items: [
      { name: 'Microsoft Excel', icon: excelLogo },
      { name: 'Power BI', icon: powerbiLogo },
      { name: 'Looker Studio', icon: lookerLogo }
    ]
  }
]

const certificates = [
  {
    title: 'Learn the Basics of Quality Assurance for Tech Companies',
    issuer: 'Udemy',
    period: 'February 2025',
    focus: 'Understanding QA fundamentals, manual testing techniques, and the end-to-end QA process used in tech companies.',
    image: udemyImage
  },
  {
    title: 'Quality Assurance',
    issuer: 'Sanbercode',
    period: 'March 2025',
    focus: 'Learning QA workflows, creating test cases, bug reporting, and applying QA practices through project-based learning.',
    image: sanbercodeImage
  },
  {
    title: 'Learn Basic Data Science',
    issuer: 'Dicoding',
    period: 'April 2025',
    focus: 'Learning core data science concepts, data exploration techniques, and an introduction to Python for data analysis.',
    image: datascienceImage
  },
  {
    title: 'Getting Started With Java Programming',
    issuer: 'Dicoding',
    period: 'May 2025',
    focus: 'Introduction to Java syntax, OOP principles, data structures, and building basic programs using Java.',
    image: javaImage
  },
  {
    title: 'Introduction to Programming Logic',
    issuer: 'Dicoding',
    period: 'August 2025',
    focus: 'Learning programming logic, basic algorithms, and computational problem-solving approaches.',
    image: logikapemrogramanImage
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    period: 'September 2025',
    focus: 'Mastering the data science pipeline on Oracle Cloud, including data preparation, modeling, and deployment.',
    image: oracledatascienceImage
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    period: 'September 2025',
    focus: 'Understanding the fundamentals of AI, machine learning, and their applications within Oracle Cloud Infrastructure.',
    image: aifoundationImage
  },
  {
    title: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM SkillsBuild',
    period: 'September 2025',
    focus: 'Learning how to use IBM Granite AI models for code generation, optimization, and development automation.',
    image: ibmImage
  },
  {
    title: 'Optimizing Models for Performance in Power BI',
    issuer: 'Microsoft Learn',
    period: 'November 2025',
    focus: 'Techniques for optimizing Power BI models, including DAX efficiency, data modeling best practices, and performance tuning.',
    image: powerbiImage
  },
  {
    title: 'Business Analysis: Key Definitions & Strategy Analysis',
    issuer: 'Coursera',
    period: 'December 2025',
    focus: 'Learning the foundations of business analysis, identifying organizational needs, and applying strategic analysis techniques.',
    image: courseraImage
  }
];

const socials = [
  { label: 'Email', url: 'mailto:izeronaulisitorus@gmail.com', Logo: socialLogo },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ize-ronauli-sitorus/', Logo: linkedinLogo },
  { label: 'GitHub', url: 'https://github.com/izeronauli', Logo: githubLogo },
  { label: 'Instagram', url: 'https://www.instagram.com/ronauliii_s', Logo: instagramLogo },
];
 
function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="page">
      <nav className="navbar">
  <div className="logo">
    <span className="logo-accent">Ize</span> Portofolio
  </div>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#certificates">Certificates</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<main>
  <header className="hero" id="home">
    <div className="hero-left">
      <figure className="hero-photo">
        <img src={profilePhoto} alt="Ize Ronauli Sitorus" />
      </figure>
    </div>

    <div className="hero-right">
      <p className="hero-greeting">HEY THERE, I&apos;M</p>
      <h1 className="hero-name">Ize Ronauli Sitorus</h1>

      <p className="hero-roles-bubble">
         <span className="bubble">Software Engineer</span>
        <span className="bubble">Quality Assurance</span>
        <span className="bubble">UI/UX Designer</span>
        <span className="bubble">Data Analyst</span>
        <span className="bubble">Business Analyst</span>
      </p>

      <p className="hero-description">
        Passionate about creating modern digital experiences and developing scalable systems.
        Open to opportunities that combine technology and innovation.
      </p>

<div className="hero-cta">
  {/* DOWNLOAD CV */}
  <a
    className="primary primary-icon"
    href="/CV_Ize Ronauli Sitorus.pdf"
    download="CV_Ize Ronauli Sitorus.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="icon-circle"><span className="icon-symbol">↓</span></span>
    Download CV
  </a>

  {/* HIRE ME */}
  <a 
    className="secondary secondary-icon" 
    href="mailto:izeronaulisitorus@gmail.com?subject=Hiring%20Inquiry%20-%20Ize%20Ronauli%20Sitorus"
  >
    <span className="icon-circle"><span className="icon-symbol">✉</span></span>
    Hire Me
  </a>
</div>

      <div className="hero-card">
        <p>Excited to collaborate on innovative digital projects.</p>
        <div className="availability">
          <span className="dot" />
          <span>Open for new opportunities</span>
        </div>
      </div>
    </div>
  </header>
</main>


<section id="about" className="panel about">
  <div className="section-header section-header--centered">
    <h2>About Me</h2>
    <h4>Designing digital solutions that bring real value to users</h4>
  </div>

  <div className="about-container">
    <div className="about-text card-float">
      <p>
        I am an Information Technology student with a deep passion for crafting
        digital solutions that are simple, effective, and impactful. Technology,
        for me, is a way to solve real problems and create meaningful experiences.
      </p>

      <p>
        Throughout my journey, I’ve worked on projects that strengthened my
        understanding of product development from planning, UX design, and 
        implementation to testing and quality evaluation. These experiences 
        shaped my structured and creative approach to solving problems.
      </p>

      <p>
        I am committed to continuous learning through real projects, personal 
        research, and exploring new tools. Currently, I’m seeking opportunities 
        that allow me to grow while contributing to building high-quality and 
        impactful digital products.
      </p>
    </div>

    <div className="about-grid">
      <div className="stat-card card-float clickable" onClick={() => window.location.href='#projects'}>
        <div className="stat-number">5<span className="plus">+</span></div>
        <p className="stat-label">Featured Projects</p>
        <p className="stat-desc">Released personal & team projects used by real users</p>
      </div>

      <div className="stat-card highlight card-float clickable" onClick={() => window.location.href='#skills'}>
        <div className="stat-number">10<span className="plus">+</span></div>
        <p className="stat-label">Skills</p>
        <p className="stat-desc">From full-stack, QA automation, to analytics</p>
      </div>

      <div className="stat-card card-float clickable" onClick={() => window.location.href='#experience'}>
        <div className="stat-number">2<span className="plus">+ Years</span></div>
        <p className="stat-label">Real Experience</p>
        <p className="stat-desc">Building digital products from idea to production</p>
      </div>
    </div>
  </div>
</section>


<section id="education" className="panel">
  <div className="section-header section-header--centered">
    <h2>Education</h2>
  </div>

  <div className="timeline">
    {education.map((exp) => (
      <article key={exp.role} className="timeline-card">

        <div className="timeline-meta">
          <p className="period">{exp.period}</p>

          {exp.logo && (
            <div className="institution-logo">
              <img src={exp.logo} alt={`${exp.company} Logo`} />
            </div>
          )}

          <p className="company">{exp.company}</p>
        </div>

        <div>
          <h3>{exp.role}</h3>
          <ul>
            {exp.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        
      </article>
    ))}
  </div>
</section>


<section id="projects" className="panel">
  <div className="section-header section-header--centered">
<h2 className="section-title">Projects</h2>
  </div>
  <div className="projects-grid">
    {projects.map((project) => (
      <article key={project.title} className="project-card">

        <div className="project-content">
          <h3>{project.title}</h3>

          <div className="project-image">
            <img 
              src={project.image} 
              alt={project.title}
            />
          </div>

          <p>{project.description}</p>
        </div>

        <div className="stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {/* BUTTON DI BAGIAN PALING BAWAH */}
        <a href={project.link} className="project-button">
          Lihat Proyek →
        </a>

      </article>
    ))}
  </div>
</section>

<section id="skills" className="skills-panel">
  <div className="skills-container">
    <h2 className="skills-title">Skills</h2>
    <div className="skills-grid">
      {skillGroup.map((group) => (
        <div key={group.title} className="skill-card">
          <h3 className="skill-card-title">{group.title}</h3>
          <div className="skill-items">
            {group.items.map((skill) => (
              <div key={skill.name} className="skill-item">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        <section id="certificates" className="panel">
          <div className="section-header section-header--centered">
            <h2>Certificates</h2>
            <p className="eyebrow">Terus belajar, terus berkembang.</p>
          </div>
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <article key={cert.title} className="certificate-card">
                <div className="certificate-image" onClick={() => setSelectedImage(cert.image)}>
                  <div className="certificate-image-wrapper">
                    <img src={cert.image} alt={cert.title} />
                    <div className="zoom-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="certificate-info">
                  <div className="certificate-meta">
                    <p className="period">{cert.period}</p>
                    <p className="issuer">{cert.issuer}</p>
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

<section id="contact" className="panel contact">
  <div className="contact-content">
    <h2 className="contact-title">Let's Work Together</h2>
    <p className="eyebrow">
      Connect with me through any platform below.
    </p>

    <div className="social-grid">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-card"
        >
          <img src={social.Logo} alt={social.label} className="social-icon" />
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  </div>
</section>



      <footer>
        <p>© {new Date().getFullYear()} Ize Ronauli Sitorus • Built with React, TypeScript & Vite</p>
      </footer>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
