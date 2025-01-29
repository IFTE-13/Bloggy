import { Category, NavLink } from "./types";

export const siteName = "Bloggy";

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home', variant: 'ghost' },
  { href: '/contact', label: 'Contact', variant: 'ghost' },
  { href: '/auth', label: 'login' }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'JavaScript',
    slug: 'javascript',
  },
  {
    id: '2',
    name: 'React',
    slug: 'react',
  },
  {
    id: '3',
    name: 'TypeScript',
    slug: 'typescript',
  },
  {
    id: '4',
    name: 'Next.js',
    slug: 'nextjs',
  },
  {
    id: '5',
    name: 'CSS',
    slug: 'css',
  }
];