import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Ashutosh Kumar',
  role: 'Data Analyst | Data Science Student',
  tagline: 'Turning Data into Insights, One Dataset at a Time.',
  about: 'I am a passionate Data Science student with a strong foundation in statistics and programming. I love exploring complex datasets to find meaningful patterns that drive informed decision-making. My goal is to build intelligent systems that solve real-world problems.',
  email: 'kumarashutosh@example.com',
  linkedin: 'https://linkedin.com/in/ashutosh-kumar',
  github: 'https://github.com/ashutosh-kumar',
  resume: '#', // Placeholder link
};

export const SKILLS: Skill[] = [
  { name: 'Python', level: 90, icon: 'Terminal', category: 'programming' },
  { name: 'SQL', level: 85, icon: 'Database', category: 'programming' },
  { name: 'R', level: 75, icon: 'BarChart', category: 'programming' },
  { name: 'Excel', level: 95, icon: 'Table', category: 'tools' },
  { name: 'Power BI', level: 80, icon: 'BarChart3', category: 'tools' },
  { name: 'Data Visualization', level: 90, icon: 'PieChart', category: 'concepts' },
  { name: 'Machine Learning', level: 70, icon: 'ScatterChart', category: 'concepts' },
  { name: 'Statistics', level: 85, icon: 'LineChart', category: 'concepts' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Zomato Data Analysis',
    description: 'Comprehensive analysis of Zomato restaurant data to identify trends in cuisines, ratings, and pricing across different cities.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    link: '#',
    github: 'https://github.com/ashutosh-kumar/zomato-analysis',
    category: 'analysis',
  },
  {
    id: 'p2',
    title: 'Sales Dashboard',
    description: 'An interactive Power BI dashboard for a retail chain to track monthly sales, profit margins, and inventory levels.',
    tech: ['Power BI', 'DAX', 'Excel'],
    link: '#',
    category: 'dashboard',
  },
  {
    id: 'p3',
    title: 'SQL Data Cleaning Project',
    description: 'Advanced SQL scripts for cleaning and transforming raw housing data into a structured format for analysis.',
    tech: ['SQL', 'PostgreSQL'],
    link: '#',
    github: 'https://github.com/ashutosh-kumar/sql-data-cleaning',
    category: 'sql',
  },
  {
    id: 'p4',
    title: 'Customer Segmentation',
    description: 'Using K-Means clustering to segment customers based on their purchase history and demographic data.',
    tech: ['Python', 'Scikit-learn', 'Numpy'],
    link: '#',
    category: 'ml',
  },
];
