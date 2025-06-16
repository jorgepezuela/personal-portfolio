import { AVATAR, ABOUT, LINKS, CAREER, PROJECTS, CERTIFICATIONS } from '@/data'
import type {
  AvatarProps,
  AboutProps,
  LinksProps,
  CareerProps,
  ProjectProps,
  CertificationProps
} from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  about: ABOUT as AboutProps,
  links: LINKS as LinksProps[],
  career: CAREER as CareerProps[],
  projects: PROJECTS as ProjectProps[],
  certifications: CERTIFICATIONS as CertificationProps[]
}

export const navLinks = [
  { title: 'About', label: 'about', url: '/' },
  { title: 'Career', label: 'career', url: '/career' },
  { title: 'Projects', label: 'projects', url: '/projects' },
  { title: 'Courses & Certifications', label: 'certifications', url: '/certifications' },
  { title: 'Contact', label: 'contact', url: '/contact' }
]