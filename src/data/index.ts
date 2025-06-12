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
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Jorge',
  initials: 'JP'
}

export const ABOUT = {
  title: `DevOps Engineer focused on automation, scalability, and cloud infrastructure. Based in Madrid, Spain 🇪🇸`,
  description: `I'm a passionate DevOps Engineer on a mission to automate everything and build highly scalable cloud infrastructures. With a strong focus on cloud computing, automation, and DevOps best practices, I specialize in streamlining deployments, optimizing workflows, and maintaining high-performance infrastructure. I work on real-time DevOps and cloud projects involving AWS, Azure, Terraform, Kubernetes, and Docker. I also develop automation scripts for tool installations and configurations, create comprehensive interview preparation content and cheat sheets, design curated learning paths for engineers at all levels, and foster collaborative spaces for open-source contributions and knowledge sharing.`
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
    url: 'https://cv.jorgepezuela.site',
    icon: FileTextIcon
  },
  {
    title: 'Email',
    url: 'mailto:jorgepezuela@hotmail.com',
    icon: MailIcon
  },
  {
    title: 'Other Links',
    url: 'https://link.jorgepezuela.site',
    icon: LinkIcon
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