import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Jorge',
  initials: 'JP'
}

export const ABOUT = {
  title: `DevOps Engineer focused on automation, scalability, and cloud infrastructure. Based in Madrid, Spain 🇪🇸`,
  description: `I'm a passionate DevOps Engineer on a mission to automate everything and build highly scalable cloud infrastructures. With a strong focus on cloud computing, automation, and DevOps best practices, I specialize in streamlining deployments, optimizing workflows, and maintaining high-performance infrastructure. I work on real-time DevOps and cloud projects involving AWS, Azure, Terraform, Kubernetes, ArgoCD and Docker on my GitHub and also develop automation scripts for tool installations and configurations.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/jorgepezuela',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/jorge-pezuela-gonzalez',
    icon: LinkedInIcon
  },
  {
    title: 'Resume',
    url: 'https://cv-portfolio-cdauac42f-jorgepezuelas-projects.vercel.app',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:jorgepezuela@hotmail.com',
    icon: MailIcon
  }
]

export const CAREER = [
  {
    company: 'Sogeti',
    link: 'https://www.sogeti.es',
    badges: ['Remote'],
    jobs: [
      {
        title: 'DevOps Engineer',
        start: 'Feb, 2022',
        end: 'Present',
        description: [
        'AWS/Azure Cloud design and administration focus on microservices architecture based on Kubernetes.',
        'Implemented CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps to accelerate software delivery.',
        'Managed Kubernetes clusters and containerized applications using Docker, Helm charts and Kustomize.',
        'Implemented GitOps practices through ArgoCD for continuos delivery.',
        'Automated infrastructure provisioning using Terraform and Ansible across hybrid cloud environments.',
        'Monitored and optimized system performance with Prometheus, Grafana, and ELK stack.',
        'Collaborated with cross-functional teams to enhance deployment workflows and incident response.'
        ]
      }
    ]
  },
  {
    company: 'Knowmad Mood',
    link: 'https://www.knowmadmood.com/es',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Cloud Engineer',
        start: 'Sep, 2020',
        end: 'Jan, 2022',
        description: [
        'Azure Cloud global administration.',
        'Implemented Azure DevOps pipelines for continuous integration and delivery.',
        'Azure Service Fabric administration.',
        'Tasks automation using Powershell and Bash scripting.',
        'Worked closely with development teams to improve deployment reliability and rollback mechanisms.'
        ]
      }
    ]
  },
  {
    company: 'Marktel',
    link: 'https://www.marktel.es',
    badges: ['In-Office'],
    jobs: [
      {
        title: 'System Administrator',
        start: 'Nov, 2015',
        end: 'Jan, 2020',
        description: [
        'Linux/Windows onpremise servers administration.',
        'Cisco Networking configuration and maintenance (FW, switches, routers, DNS ).',
        'Technical Support.'
        ]
      }
    ]
  }
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    date: '2022',
    description: 'Fundamentals of Microsoft Azure.',
    link: 'https://www.credly.com/badges/24c26abb-ddf8-4f60-a0c9-085450f75693/linked_in_profile'
  },
  {
    title: 'AWS Cloud Practitioner (CLF-C02)',
    organization: 'KodeKloud',
    date: '2024',
    description: 'Fundamentals of AWS Cloud.',
    link: 'https://learn.kodekloud.com/certificate/2D0D5F0D0A85-2EDA4EA9E4E1-2D0D58D9F9DD'
  },
  {
    title: 'CKA Certification Course - Certified Kubernetes Administrator',
    organization: 'KodeKloud',
    date: '2023',
    description: 'Certified Kubernetes Administrator (CKA) demonstrating expertise in Kubernetes operations.',
    link: 'https://kodekloud.com/certificate-verification/2D0D5F0D0A85-2D0D5916B5EA-2D0D58D9F9DD/'
  },
  {
    title: 'DevSecOps - Kubernetes DevOps & Security',
    organization: 'KodeKloud',
    date: '2024',
    description: 'DevSecOps - Kubernetes DevOps & Security demonstrating expertise in Kubernetes application development.',
    link: 'https://learn.kodekloud.com/certificate/0c9f4391-9849-4c3b-ab9b-ff56f0af00cf'
  },
  {
    title: 'Red Hat Certified System Administrator(RHCSA)',
    organization: 'KodeKloud',
    date: '2023',
    description: 'Red Hat Certified System Administrator(RHCSA) demonstrating expertise in system administration.',
    link: 'https://kodekloud.com/certificate-verification/2D0D5F0D0A85-2DF621945AD8-2D0D58D9F9DD/'
  },
  {
    title: 'Terraform Associate Certification: HashiCorp Certified',
    organization: 'KodeKloud',
    date: '2023',
    description: 'Terraform Associate Certification: HashiCorp Certified demonstrating expertise in Terraform.',
    link: 'https://kodekloud.com/certificate-verification/2D0D5F0D0A85-2D1467693B4D-2D0D58D9F9DD/'
  },
  {
    title: 'PCAP - Python Certification Course',
    organization: 'KodeKloud',
    date: '2023',
    description: 'PCAP - Python Certification Course demonstrating expertise in Python.',
    link: 'https://kodekloud.com/certificate-verification/2D0D5F0D0A85-2D143D829A81-2D0D58D9F9DD/'
  },
  {
    title: 'Jenkins',
    organization: 'KodeKloud',
    date: '2024',
    description: 'Demonstrating expertise in Jenkins.',
    link: 'https://kodekloud.com/certificate-verification/2D0D5F0D0A85-2DEA718A4A94-2D0D58D9F9DD/'
  },
  {
    title: 'Kustomize',
    organization: 'KodeKloud',
    date: '2023',
    description: 'Demonstrating expertise in Kustomize.',
    link: 'https://kodekloud.com/certificate-verification/2D0D5F0D0A85-2DF3D3AABF6E-2D0D58D9F9DD/'
  },
  {
    title: 'GitOps Certified for Argo: GitOps Fundamentals',
    organization: 'Codefresh',
    date: '2023',
    description: 'Demonstrating expertise in ArgoCD.',
    link: 'https://learning.codefresh.io/certificate/6197cb3b2fbcec4da328aab2/user/63750215c6948c4e830d750f'
  }
];

export const PROJECTS = [
  {
    title: 'DevOps Projects Collection',
    tags: [TAGS.DEVOPS],
    description: 'Real-world DevOps projects.',
    link: {
      github: 'https://github.com/jorgepezuela/devops-projects',
    },
  },
  {
    title: 'Kubernetes Azure DevOps Agents',
    tags: [TAGS.DEVOPS, TAGS.KUBERNETES, TAGS.AZURE],
    description: 'Azure DevOps agents examples on AKS for Backend, Frontend, Data, VIP and SRE teams.',
    link: {
      github: 'https://github.com/jorgepezuela/k8s-azure-devops-agents',
    },
  },
  {
    title: 'AWS EKS Terraform',
    tags: [TAGS.AWS_EKS, TAGS.TERRAFORM],
    description: 'Provision Amazon EKS Cluster on AWS using Terraform.',
    link: {
      github: 'https://github.com/jorgepezuela/terraform-on-eks',
    },
  },
  {
    title: 'AWS EC2 Terraform',
    tags: [TAGS.AWS, TAGS.TERRAFORM],
    description: 'Terraform On AWS for EC2, VPC, ASG, ALB, CLB, NLB, CloudWatch, SNS, S3, CodePipeline, ACM, Route53.',
    link: {
      github: 'https://github.com/jorgepezuela/terraform-on-aws-ec2',
    },
  },
  {
    title: 'AWS EKS DevOps',
    tags: [TAGS.AWS_EKS, TAGS.TERRAFORM],
    description: 'AWS EKS DevOps Implementation using AWS CodePipeline or AWS Developer Tools.',
    link: {
      github: 'https://github.com/jorgepezuela/aws-eks-devops',
    },
  },
  {
    title: 'Docker Projects',
    tags: [TAGS.DOCKER],
    description: 'Docker Practical Demos for DevOps.',
    link: {
      github: 'https://github.com/jorgepezuela/docker',
    },
  },
  {
    title: 'DevOps Cheatsheet',
    tags: [TAGS.DEVOPS],
    description: 'Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.',
    link: {
      github: 'https://github.com/jorgepezuela/devops-cheatsheet',
    },
  },
  {
    title: 'DevOps Tools',
    tags: [TAGS.DEVOPS],
    description: 'A comprehensive collection of essential DevOps tools for development, deployment, monitoring, automation, security, and more.',
    link: {
      github: 'https://github.com/jorgepezuela/devops-tools',
    },
  },
];
