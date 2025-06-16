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
  { title: 'About', label: 'about', url: '/', external: true },
  { title: 'Career', label: 'career', url: '/career', external: true },
  { title: 'Projects', label: 'projects', url: '/projects', external: true },
  { title: 'Courses & Certifications', label: 'certifications', url: '/certifications', external: true },
  { title: 'Contact', label: 'contact', url: '/contact', external: true }
]