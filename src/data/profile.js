import { FaAws, FaJava, FaNodeJs, FaDocker, FaGitlab, FaGithub } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiApachekafka, SiSpringboot, SiTypescript, SiGooglecloud, SiPython, SiGraphql, SiJenkins, SiGrafana, SiPostgresql } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'

export const profile = {
  name: 'Mohit Jain',
  roles: [
    'Full Stack & Platform Engineer',
    'Cloud Migration Specialist',
    'DevSecOps Engineer',
    'API & Backend Architect',
  ],
  location: 'Melbourne, Australia',
  email: 'jain.moheet@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jainmoheet/',
  github: 'https://github.com/jainmohit',
  summary:
    'Seventeen years embedded with banks, health platforms and national infrastructure — translating complex, regulated requirements into working software. I build secure, cloud-native services across AWS, Azure and GCP and run the platforms that keep them up.',
  stats: [
    { value: '17+', label: 'Years experience' },
    { value: '3', label: 'Cloud platforms' },
    { value: '200+', label: 'Apps supported' },
    { value: '6', label: 'Industries' },
  ],
}

export const services = [
  {
    title: 'Cloud Migration & Modernisation',
    desc: 'On-premises to AWS or Azure, legacy stack renewal, multi-cloud landing zones. A recent treasury migration cut deployment time from three weeks to under three days.',
  },
  {
    title: 'Platform & DevOps Engineering',
    desc: 'Kubernetes, GitOps and CI/CD across GitLab, GitHub Actions, Jenkins and Harness — with security scanning, blue-green releases and automated rollback designed in.',
  },
  {
    title: 'API & Backend Delivery',
    desc: 'Financial-grade REST and GraphQL services in Java, Spring Boot and TypeScript. OAuth 2.0, mTLS, Kong and AWS API Gateway; event-driven integration with Kafka, EventBridge, Salesforce and SAP.',
  },
  {
    title: 'AI-Enabled Product Builds',
    desc: 'LLM and RAG features shipped to production — Azure OpenAI with retrieval over curated knowledge, prompt engineering and guardrails, built end to end at the health startup I co-founded.',
  },
]

export const skillGroups = [
  {
    name: 'Cloud & Platforms',
    skills: [
      { label: 'AWS', icon: FaAws },
      { label: 'Azure', icon: VscAzure },
      { label: 'GCP', icon: SiGooglecloud },
      { label: 'Kubernetes', icon: SiKubernetes },
      { label: 'Docker', icon: FaDocker },
      { label: 'Terraform', icon: SiTerraform },
    ],
  },
  {
    name: 'Backend & APIs',
    skills: [
      { label: 'Java', icon: FaJava },
      { label: 'Spring Boot', icon: SiSpringboot },
      { label: 'Node.js', icon: FaNodeJs },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Python', icon: SiPython },
      { label: 'GraphQL', icon: SiGraphql },
    ],
  },
  {
    name: 'Data & Messaging',
    skills: [
      { label: 'Kafka', icon: SiApachekafka },
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'DynamoDB' },
      { label: 'MongoDB' },
      { label: 'Redis' },
      { label: 'EventBridge' },
    ],
  },
  {
    name: 'CI/CD & Observability',
    skills: [
      { label: 'GitHub Actions', icon: FaGithub },
      { label: 'GitLab CI/CD', icon: FaGitlab },
      { label: 'Jenkins', icon: SiJenkins },
      { label: 'Grafana', icon: SiGrafana },
      { label: 'Splunk OTel' },
      { label: 'Prometheus' },
    ],
  },
]

export const experience = [
  {
    period: '2026',
    company: 'Australia Post',
    role: 'Platform Specialist',
    points: [
      'Ran the enterprise platform behind 200+ applications across AWS, Azure and GCP.',
      'Introduced blue-green deployments with circuit-breaker checks and automated rollback.',
      'Led an AWS-to-Azure migration using a multi-cloud module approach; modernised legacy CloudFormation into reusable Terraform patterns adopted across teams.',
    ],
  },
  {
    period: '2025 – 2026',
    company: 'Bendigo Bank',
    role: 'API Integration / DevSecOps Engineer',
    points: [
      'Migrated Treasury\u2019s on-premises FIS Quantum platform to AWS with full Terraform automation — deployments went from 3 weeks to 2–3 days.',
      'Built executable disaster recovery: the DR plan is the same Terraform and scripts pointed at another region.',
      'Architected event-driven SAP people-system integration on Confluent Kafka and EventBridge, unified behind a GraphQL API.',
    ],
  },
  {
    period: '2019 – 2025',
    company: 'National Australia Bank',
    role: 'Lead Backend & DevOps Engineer',
    points: [
      'Led backend engineering on the Enterprise Lending Platform replacing legacy Siebel — Spring Boot and Node.js microservices with Kafka and Camunda workflows.',
      'Designed financial-grade APIs (OAuth 2.0, JWT, mTLS via Kong) integrating lending services with the Salesforce broker channel.',
      'Drove the Lambda-to-EKS/ECS containerisation program; recognised internally for digitising the loan documentation workflow end to end.',
    ],
  },
  {
    period: '2008 – 2019',
    company: 'Whispir · ANZ (Cognizant) · BNY Mellon · UBS (Infosys) · Mastek',
    role: 'Engineering & Technical Lead roles',
    points: [
      'Emergency messaging platforms across SMS, voice, email and push at Whispir.',
      'Big-4 banking APIs and shared platform services on-site at ANZ.',
      'Broker-dealer clearance systems tuned to sub-second transactions at BNY Mellon; derivatives trade management for UBS across APAC, EMEA and North America.',
    ],
  },
]

export const projects = [
  {
    title: 'ChatHealth',
    tag: 'Co-founder & Head of Technology',
    desc: 'Digital health platform across iOS, Android, iPad and web. Full ownership: Next.js frontend, shared backend, governed Azure landing zone (Terraform + Bicep), and conversational AI on Azure OpenAI with RAG over a curated health knowledge base.',
    stack: ['Azure OpenAI', 'RAG', 'Next.js', 'Terraform', 'Bicep'],
  },
  {
    title: 'Home Run Kitchen',
    tag: 'Shopify food ordering platform',
    desc: 'Custom Liquid storefront for a home-based food business — menu modelled with metafields and metaobjects, a Shopify Function enforcing order cut-offs and minimums at checkout, and the Admin GraphQL API keeping stock in sync.',
    stack: ['Shopify', 'Liquid', 'Shopify Functions', 'GraphQL'],
  },
  {
    title: 'Culsight LMS',
    tag: 'Security training & phishing simulation',
    desc: 'Cybersecurity awareness training platform and phishing simulator built on a 3-tier architecture, provisioned end to end with Terraform.',
    stack: ['Django', 'React', 'Keycloak', 'AWS EKS', 'Terraform'],
  },
  {
    title: 'BeerOps',
    tag: 'Cross-platform mobile app',
    desc: 'Concept to App Store and Google Play — cross-platform mobile app with a React companion web app and a HubSpot-driven customer pipeline.',
    stack: ['React Native', 'Capacitor', 'React', 'HubSpot'],
  },
]
