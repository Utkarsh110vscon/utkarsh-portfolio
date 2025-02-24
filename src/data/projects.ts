import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Reeldekho',
    description: 'A Social media application with optimized Crud operation, interacting fratures and real-time updates.',
    image: '/sm.jpg',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Web Sockets', 'JWT'],
    githubUrl: 'https://github.com/BEaANIKET/reeldekhho.com',
    liveUrl: 'https://www.reeldekho.com',
    featured: true
  },
  {
    id: '2',
    title: 'Multi-language FAQs System',
    description: 'A Backend based FAQ system integrated with caching for fast Api Responses and decrease Load on the database, Managed with the help of custom react admin panel.',
    image: '/faq.jpg',
    technologies: ['Node.js', 'MongoDB', 'Tranlator Api', 'Redis', 'React', 'Jodit'],
    githubUrl: 'https://github.com/Utkarsh110vscon/Faq_system',
    liveUrl: 'https://admin-panel-for-faq-system.vercel.app',
    featured: false
  }
];