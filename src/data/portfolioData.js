import { Mail, Linkedin, Instagram, Youtube, Github, ExternalLink } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: 'Harshit Agarwal',
    title: 'Web Developer | IoT Enthusiast | Content Creator',
    location: 'Jaipur, India',
    email: 'iharshitagarwal01@gmail.com',
    intro: 'CSE student building practical web and IoT projects with a strong focus on clean UI, real-world problem solving, and digital content creation.',
    about: 'I am a CSE student passionate about web development, IoT systems, UI design, and content creation. I enjoy building practical projects that solve real-world problems and are easy to use, present, and explain. My experience includes web-based platforms, IoT security prototypes, event and media work, and creator-focused digital branding.',
    resume: '/resume.pdf',
  },

  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/harshit-agarwal010/',
      icon: Linkedin,
      label: 'Connect on LinkedIn',
    },
    {
      name: 'GitHub',
      url: '#',
      icon: Github,
      label: 'Visit GitHub',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_.harshit_agarwal',
      icon: Instagram,
      label: 'Follow on Instagram',
    },
    {
      name: 'YouTube',
      url: '#',
      icon: Youtube,
      label: 'Subscribe on YouTube',
    },
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    },
    {
      category: 'IoT & Hardware',
      items: ['Arduino IDE', 'ESP8266', 'ESP32', 'C++'],
    },
    {
      category: 'Tools & Design',
      items: ['GitHub', 'Vercel', 'UI Design'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'HackEase',
      category: 'Full-Stack Web Platform',
      description: 'A web-based hackathon management system that allows participants, organizers, judges, and admins to manage hackathons online.',
      longDescription: 'Comprehensive hackathon management platform featuring role-based authentication, participant and organizer dashboards, team registration, judge evaluation with scoring and feedback, and delayed result visibility for fair assessment.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      features: [
        'Role-based authentication',
        'Participant & Organizer dashboards',
        'Team registration',
        'Judge scoring & feedback',
        'Result display workflow',
      ],
      github: '#',
      demo: '#',
      color: 'from-cyan-500/20 to-blue-500/20',
      icon: '⚡',
    },
    {
      id: 2,
      title: 'Women Safety IoT Device',
      category: 'IoT Security Prototype',
      description: 'A compact emergency alert prototype using ESP modules, GPS, and real-time email alerts with live location.',
      longDescription: 'Wearable IoT safety device prototype with triple-tap activation, live GPS location sharing, and automatic email alerts for emergency situations. Designed for real-world deployment with compact form factor.',
      tech: ['ESP32', 'GPS Module', 'Arduino IDE', 'C++', 'SMTP'],
      features: [
        'Triple tap activation',
        'Live GPS location',
        'Email alert system',
        'Long press deactivation',
        'Repeated alerts',
      ],
      github: '#',
      demo: '#',
      color: 'from-purple-500/20 to-pink-500/20',
      icon: '🛡️',
    },
    {
      id: 3,
      title: 'Smart Entry System',
      category: 'IoT Security System',
      description: 'An IR sensor-based motion detection system using ESP8266 NodeMCU with real-time email alerts.',
      longDescription: 'Intelligent entry detection system for home and office security. Uses infrared sensors to detect unauthorized motion and sends instant email notifications for real-time monitoring.',
      tech: ['ESP8266', 'IR Sensors', 'Arduino IDE', 'C++', 'Wi-Fi'],
      features: [
        'Motion detection',
        'Real-time alerts',
        'Wi-Fi communication',
        'Home/office ready',
        'Email notifications',
      ],
      github: '#',
      demo: '#',
      color: 'from-blue-500/20 to-indigo-500/20',
      icon: '🔐',
    },
    {
      id: 4,
      title: 'Restaurant Order System',
      category: 'Web Application',
      description: 'A web-based restaurant order workflow system with staff and kitchen panels for efficient order management.',
      longDescription: 'Complete order management solution for restaurants with separate staff and kitchen interfaces, real-time status tracking, order notes, and complete order history for operations management.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
      features: [
        'Staff order panel',
        'Kitchen order panel',
        'Status tracking',
        'Order notes',
        'History management',
      ],
      github: '#',
      demo: '#',
      color: 'from-orange-500/20 to-red-500/20',
      icon: '🍽️',
    },
  ],

  experience: [
    {
      title: 'STPI Internship',
      duration: '45 Days',
      description: 'Completed training program and worked on a web-based hackathon management system.',
      year: '2024',
      icon: '🎓',
    },
    {
      title: 'PIAS Core Member',
      duration: 'Long-term',
      description: 'Photography, content, media, event coordination, and student team leadership.',
      year: '2023-Present',
      icon: '🎬',
    },
    {
      title: 'Oracle Cloud Certified',
      duration: 'Dual Certification',
      description: 'Oracle Cloud Infrastructure Foundations and AI Foundations certifications.',
      year: '2024',
      icon: '☁️',
    },
    {
      title: 'IIFA 2024 Volunteer',
      duration: 'Event',
      description: 'Event coordination and support for IIFA 2024 Jaipur.',
      year: '2024',
      icon: '🎭',
    },
  ],

  creator: {
    title: 'Creator',
    intro: 'I create gaming, gym, and relatable content across YouTube and Instagram. My YouTube channel "Harshit Indian Gamer" features gaming content for 4K+ subscribers.',
    channels: [
      {
        platform: 'YouTube',
        name: 'Harshit Indian Gamer',
        subscribers: '4K+',
        niche: 'Gaming',
        url: '#',
        icon: Youtube,
      },
      {
        platform: 'Instagram',
        name: '@_.harshit_agarwal',
        followers: 'Active Community',
        niche: 'Gym, Motivation, Relatable',
        url: 'https://www.instagram.com/_.harshit_agarwal',
        icon: Instagram,
      },
    ],
    strengths: ['Content creation', 'Video editing', 'Audience understanding', 'Brand building'],
  },

  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Creator', href: '#creator' },
    { name: 'Contact', href: '#contact' },
  ],
};
