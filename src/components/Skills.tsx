import { motion } from 'framer-motion';
import { Database, Layout, Server, Cloud, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    color: 'rgb(59, 130, 246)'
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express'],
    color: 'rgb(16, 185, 129)'
  },
  {
    category: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'Redis'],
    color: 'rgb(236, 72, 153)'
  },
  {
    category: 'DevOps',
    icon: Cloud,
    items: ['Docker', 'AWS'],
    color: 'rgb(245, 158, 11)'
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['Git', 'VS Code', 'Postman'],
    color: 'rgb(139, 92, 246)'
  },
  // {
  //   category: 'Mobile',
  //   icon: Package,
  //   items: ['React Native', 'Flutter', 'iOS', 'Android'],
  //   color: 'rgb(239, 68, 68)'
  // },
  // {
  //   category: 'Testing',
  //   icon: Cpu,
  //   items: ['Chai', 'Cypress', 'RTL', 'Playwright'],
  //   color: 'rgb(34, 211, 238)'
  // }
];

export default function Skills() {
  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--accent))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-[hsl(var(--foreground))] text-opacity-80 max-w-2xl mx-auto">
            A comprehensive list of technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[hsl(var(--card))] rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ borderLeft: `4px solid ${skill.color}` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg mr-3" style={{ backgroundColor: `${skill.color}20` }}>
                  <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>
                <h3 className="text-lg font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-[hsl(var(--foreground))] text-opacity-80 hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}