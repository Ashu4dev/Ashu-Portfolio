export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  category: 'analysis' | 'ml' | 'sql' | 'dashboard';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'programming' | 'tools' | 'concepts';
}
