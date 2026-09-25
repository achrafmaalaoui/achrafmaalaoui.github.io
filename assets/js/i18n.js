/* =========================================================
   Achraf Maalaoui - Portfolio
   i18n content (English / French)
   ========================================================= */

const I18N = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      certifications: "Certifications",
      education: "Education",
      contact: "Contact",
      downloadCv: "Resume",
    },
    hero: {
      eyebrow: "DevOps & Platform Engineer",
      name: "Achraf Maalaoui",
      subtitle: "Building reliable, secure & cost-efficient cloud platforms on AWS & Kubernetes.",
      desc: "Nearly 6 years of engineering experience, including 3.5+ years architecting multi-account, multi-tenant AWS/EKS platforms. AWS Solutions Architect, CKA & Terraform certified.",
      badge: {
        location: "Tunis, Tunisia",
        langs: "Arabic · French · English",
      },
      ctaContact: "Contact Me",
      ctaCv: "Download CV",
    },
    stats: {
      cost: "AWS cost reduction",
      mttd: "Faster incident detection (MTTD)",
      release: "Faster release cycles",
      eks: "EKS clusters managed",
      years: "Years of IT experience",
    },
    about: {
      tag: "About Me",
      title: "Platform reliability, cloud cost efficiency & automation - end to end",
      text: "I'm a DevOps & Platform Engineer based in Tunis, Tunisia, with close to 6 years of professional experience - including 3.5+ years engineering cloud-native platforms on AWS. I design, automate and secure multi-account, multi-tenant Kubernetes (EKS) environments end-to-end: Infrastructure as Code, GitOps pipelines, observability, incident response and FinOps.",
      text2: "I hold AWS Solutions Architect Associate, Certified Kubernetes Administrator (CKA) and HashiCorp Terraform Associate certifications, and I have hands-on experience supporting compliance programs aligned with GDPR, PCI DSS, ISO 27001 and SOC 2.",
      text3: "A native Arabic speaker, fluent in French and English, I'm ready to bring reliable, secure and cost-conscious platform engineering to your team.",
      value1: { title: "Multilingual & collaborative", text: "Fluent in Arabic, French and English, comfortable collaborating with distributed, multicultural engineering teams." },
      value2: { title: "Compliance-aware", text: "Hands-on experience with GDPR, PCI DSS, ISO 27001 and SOC 2 controls in regulated financial environments." },
      value3: { title: "Cost-conscious engineering", text: "Proven FinOps track record: 40% AWS cost reduction and 70% lower monitoring costs without compromising reliability." },
      value4: { title: "Ships fast, safely", text: "GitOps & CI/CD automation that cut release cycle time by 40% while improving stability and observability." },
    },
    skills: {
      tag: "Technical Skills",
      title: "Tools & technologies I work with",
      groups: [
        { icon: "fa-solid fa-cloud", title: "Cloud & Infrastructure", tags: ["AWS EC2", "EKS", "ECS", "Lambda", "S3", "RDS / Aurora", "VPC", "IAM", "Route 53", "CloudFront", "API Gateway", "Secrets Manager", "Karpenter"] },
        { icon: "fa-solid fa-layer-group", title: "Infrastructure as Code", tags: ["Terraform (HashiCorp Certified)", "Ansible", "Helm", "CloudFormation"] },
        { icon: "fa-solid fa-dharmachakra", title: "Containers & Orchestration", tags: ["Kubernetes (CKA)", "Docker", "Helm Charts", "Karpenter"] },
        { icon: "fa-solid fa-code-branch", title: "CI/CD & GitOps", tags: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "ArgoCD", "SonarQube", "Grype", "Git"] },
        { icon: "fa-solid fa-chart-line", title: "Observability & SRE", tags: ["Prometheus", "Grafana", "ELK / EFK", "Fluent Bit", "CloudWatch", "Zabbix", "SLA Reporting"] },
        { icon: "fa-solid fa-shield-halved", title: "Security & Compliance", tags: ["GDPR", "PCI DSS", "ISO 27001", "SOC 2", "KMS", "Security Hub", "Keycloak"] },
        { icon: "fa-solid fa-database", title: "Databases", tags: ["PostgreSQL", "MySQL", "MongoDB", "Amazon RDS", "Aurora Serverless"] },
        { icon: "fa-solid fa-sack-dollar", title: "FinOps & Cost Optimization", tags: ["Cost Explorer", "Trusted Advisor", "Rightsizing", "Savings Plans"] },
        { icon: "fa-solid fa-terminal", title: "Automation & Scripting", tags: ["Python", "Bash", "SQL", "YAML", "JSON"] },
      ],
    },
    exp: {
      tag: "Career Path",
      title: "Professional Experience",
      items: [
        {
          role: "DevOps & Platform Engineer",
          company: "M&C Group - Tunis, Tunisia",
          date: "Jan 2023 - Present",
          subprojects: [
            {
              name: "Financial Reconciliation Platform",
              bullets: [
                "Manage six Amazon EKS clusters in a multi-account, multi-cluster and multi-tenant AWS environment.",
                "Provision and maintain AWS infrastructure with Terraform and Helm, covering EKS, RDS, VPC, IAM and Secrets Manager.",
                "Build CI/CD pipelines and GitOps workflows with GitHub Actions, Jenkins and ArgoCD, reducing release cycle time by 40%.",
                "Implemented a centralized observability platform (Prometheus, Grafana, ELK/EFK, CloudWatch), reducing MTTD by 60%.",
                "Led FinOps initiatives reducing AWS costs by 40% and monitoring costs by 70%.",
                "Investigate complex AWS/Kubernetes incidents and support controls aligned with GDPR, PCI DSS, ISO 27001 and SOC 2.",
              ],
            },
            {
              name: "RPA & AI Infrastructure",
              bullets: [
                "Designed two AWS environments in different regions, running applications on ECS and EKS.",
                "Provisioned GPU-enabled EC2, RDS and Keycloak/SSO infrastructure using Terraform.",
                "Built Jenkins self-service jobs, Lambda automations and scheduled shutdown mechanisms to improve autonomy and control costs.",
              ],
            },
          ],
        },
        {
          role: "Technical Support Engineer - Level 3",
          company: "M&C Group (Amadeus) - Tunis, Tunisia",
          date: "Dec 2020 - Dec 2022",
          bullets: [
            "Resolved critical production incidents involving system failures and data corruption in revenue accounting systems.",
            "Performed root cause analysis (RCA) and worked with developers to implement permanent fixes.",
            "Automated 50% of manual troubleshooting workflows with Bash, Python and SQL; built reusable runbooks and SOPs.",
            "Promoted after one year; coached new team members to full operational autonomy.",
          ],
        },
      ],
      earlierTitle: "Earlier Experience",
      earlier: [
        { role: ".NET/C# Developer", company: "ESPRIT - Chief Information Officer Office, Tunis, Tunisia", date: "Oct 2019 - Oct 2020" },
        { role: ".NET/C# Developer", company: "Softfluent, Paris, France", date: "Jun 2019 - Sep 2019" },
      ],
    },
    certs: {
      tag: "Certifications",
      title: "Verified credentials",
      items: [
        { icon: "fa-brands fa-aws", name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services" },
        { icon: "fa-solid fa-dharmachakra", name: "Certified Kubernetes Administrator (CKA)", issuer: "The Linux Foundation / CNCF" },
        { icon: "fa-solid fa-cubes", name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp" },
        { icon: "fa-brands fa-github", name: "GitHub Actions Certified (GH-200)", issuer: "GitHub" },
      ],
      verify: "Verify on Credly →",
    },
    edu: {
      tag: "Education",
      title: "Academic Background",
      degree: "Software Engineering Degree",
      school: "ESPRIT School of Engineering - Tunis, Tunisia",
      desc: "Five-year engineering program (equivalent to a Master's degree), accredited by EUR-ACE, ABET and CTI.",
    },
    lang: {
      tag: "Languages",
      title: "Communication",
      ar: "Arabic", native: "Native",
      fr: "French", fluent: "Fluent / Professional",
      en: "English", fluent2: "Fluent / Professional",
    },
    interests: { chess: "Chess", travel: "Travel" },
    contact: {
      tag: "Get in touch",
      title: "Let's build something reliable together",
      sub: "Open to DevOps, Platform & Cloud/SRE roles - full-time or contract.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Tunis, Tunisia",
      button: "Say Hello",
    },
    footer: {
      text: "© {year} Achraf Maalaoui. Built with HTML, CSS & JavaScript - hosted on GitHub Pages.",
    },
  },

  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      certifications: "Certifications",
      education: "Formation",
      contact: "Contact",
      downloadCv: "CV",
    },
    hero: {
      eyebrow: "Ingénieur DevOps & Plateforme",
      name: "Achraf Maalaoui",
      subtitle: "Je conçois des plateformes cloud fiables, sécurisées et optimisées en coûts sur AWS & Kubernetes.",
      desc: "Près de 6 ans d'expérience en ingénierie, dont 3,5+ ans dédiés à l'architecture de plateformes AWS/EKS multi-comptes et multi-tenant. Certifié AWS Solutions Architect, CKA et Terraform.",
      badge: {
        location: "Tunis, Tunisie",
        langs: "Arabe · Français · Anglais",
      },
      ctaContact: "Me contacter",
      ctaCv: "Télécharger le CV",
    },
    stats: {
      cost: "de coûts AWS économisés",
      mttd: "de détection d'incidents plus rapide (MTTD)",
      release: "de cycles de livraison accélérés",
      eks: "clusters EKS administrés",
      years: "ans d'expérience en IT",
    },
    about: {
      tag: "À propos de moi",
      title: "Fiabilité des plateformes, efficacité des coûts cloud & automatisation - de bout en bout",
      text: "Je suis Ingénieur DevOps et Plateforme basé à Tunis, avec près de 6 ans d'expérience professionnelle - dont 3,5+ ans en ingénierie de plateformes cloud-native sur AWS. Je conçois, automatise et sécurise des environnements Kubernetes (EKS) multi-comptes et multi-tenant de bout en bout : Infrastructure as Code, pipelines GitOps, observabilité, gestion des incidents et FinOps.",
      text2: "Je suis certifié AWS Solutions Architect Associate, Certified Kubernetes Administrator (CKA) et HashiCorp Terraform Associate, et j'ai une expérience concrète des programmes de conformité RGPD, PCI DSS, ISO 27001 et SOC 2.",
      text3: "Arabophone natif, courant en français et en anglais, je suis prêt à apporter une ingénierie de plateforme fiable, sécurisée et maîtrisée en coûts à votre équipe.",
      value1: { title: "Multilingue & collaboratif", text: "Courant en arabe, français et anglais, à l'aise pour collaborer avec des équipes d'ingénierie distribuées et multiculturelles." },
      value2: { title: "Sensibilisé à la conformité", text: "Expérience concrète des contrôles RGPD, PCI DSS, ISO 27001 et SOC 2 dans des environnements financiers régulés." },
      value3: { title: "Ingénierie maîtrisée en coûts", text: "Track record FinOps prouvé : 40 % de coûts AWS économisés et 70 % de coûts de supervision réduits, sans compromettre la fiabilité." },
      value4: { title: "Livre vite, en toute sécurité", text: "Automatisation GitOps & CI/CD ayant réduit les cycles de livraison de 40 % tout en améliorant la stabilité et l'observabilité." },
    },
    skills: {
      tag: "Compétences Techniques",
      title: "Outils et technologies maîtrisés",
      groups: [
        { icon: "fa-solid fa-cloud", title: "Cloud & Infrastructure", tags: ["AWS EC2", "EKS", "ECS", "Lambda", "S3", "RDS / Aurora", "VPC", "IAM", "Route 53", "CloudFront", "API Gateway", "Secrets Manager", "Karpenter"] },
        { icon: "fa-solid fa-layer-group", title: "Infrastructure as Code", tags: ["Terraform (certifié HashiCorp)", "Ansible", "Helm", "CloudFormation"] },
        { icon: "fa-solid fa-dharmachakra", title: "Conteneurs & Orchestration", tags: ["Kubernetes (CKA)", "Docker", "Helm Charts", "Karpenter"] },
        { icon: "fa-solid fa-code-branch", title: "CI/CD & GitOps", tags: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "ArgoCD", "SonarQube", "Grype", "Git"] },
        { icon: "fa-solid fa-chart-line", title: "Supervision & SRE", tags: ["Prometheus", "Grafana", "ELK / EFK", "Fluent Bit", "CloudWatch", "Zabbix", "Rapports SLA"] },
        { icon: "fa-solid fa-shield-halved", title: "Sécurité & Conformité", tags: ["RGPD", "PCI DSS", "ISO 27001", "SOC 2", "KMS", "Security Hub", "Keycloak"] },
        { icon: "fa-solid fa-database", title: "Bases de données", tags: ["PostgreSQL", "MySQL", "MongoDB", "Amazon RDS", "Aurora Serverless"] },
        { icon: "fa-solid fa-sack-dollar", title: "FinOps & Optimisation des coûts", tags: ["Cost Explorer", "Trusted Advisor", "Rightsizing", "Savings Plans"] },
        { icon: "fa-solid fa-terminal", title: "Automatisation & Scripting", tags: ["Python", "Bash", "SQL", "YAML", "JSON"] },
      ],
    },
    exp: {
      tag: "Parcours",
      title: "Expérience Professionnelle",
      items: [
        {
          role: "Ingénieur DevOps & Plateforme",
          company: "M&C Group - Tunis, Tunisie",
          date: "Jan 2023 - Présent",
          subprojects: [
            {
              name: "Plateforme de réconciliation financière",
              bullets: [
                "Administration de six clusters Amazon EKS dans un environnement AWS multi-comptes, multi-cluster et multi-tenant.",
                "Provisionnement et maintenance de l'infrastructure AWS avec Terraform et Helm : EKS, RDS, VPC, IAM et Secrets Manager.",
                "Conception de pipelines CI/CD et workflows GitOps avec GitHub Actions, Jenkins et ArgoCD, réduisant le cycle de livraison de 40 %.",
                "Mise en place d'une plateforme d'observabilité centralisée (Prometheus, Grafana, ELK/EFK, CloudWatch), réduisant le MTTD de 60 %.",
                "Pilotage d'initiatives FinOps réduisant les coûts AWS de 40 % et les coûts de supervision de 70 %.",
                "Analyse d'incidents complexes AWS/Kubernetes et contribution aux contrôles RGPD, PCI DSS, ISO 27001 et SOC 2.",
              ],
            },
            {
              name: "Infrastructure RPA & IA",
              bullets: [
                "Conception de deux environnements AWS dans des régions distinctes, hébergeant des applications sur ECS et EKS.",
                "Provisionnement avec Terraform d'une infrastructure EC2 GPU, RDS et Keycloak/SSO.",
                "Création de jobs Jenkins en libre-service, d'automatisations Lambda et de mécanismes d'arrêt planifié pour renforcer l'autonomie et maîtriser les coûts.",
              ],
            },
          ],
        },
        {
          role: "Ingénieur Support Technique - Niveau 3",
          company: "M&C Group (Amadeus) - Tunis, Tunisie",
          date: "Déc 2020 - Déc 2022",
          bullets: [
            "Résolution d'incidents critiques de production liés à des défaillances système et corruptions de données.",
            "Réalisation d'analyses de causes racines (RCA) et collaboration avec les développeurs pour des corrections durables.",
            "Automatisation de 50 % des procédures manuelles avec Bash, Python et SQL ; création de runbooks réutilisables.",
            "Promu après un an ; accompagnement des nouveaux collaborateurs jusqu'à leur pleine autonomie.",
          ],
        },
      ],
      earlierTitle: "Expérience antérieure",
      earlier: [
        { role: "Développeur .NET/C#", company: "ESPRIT - DSI, Tunis, Tunisie", date: "Oct 2019 - Oct 2020" },
        { role: "Développeur .NET/C#", company: "Softfluent, Paris, France", date: "Juin 2019 - Sep 2019" },
      ],
    },
    certs: {
      tag: "Certifications",
      title: "Certifications vérifiées",
      items: [
        { icon: "fa-brands fa-aws", name: "AWS Certified Solutions Architect - Associate", issuer: "Amazon Web Services" },
        { icon: "fa-solid fa-dharmachakra", name: "Certified Kubernetes Administrator (CKA)", issuer: "The Linux Foundation / CNCF" },
        { icon: "fa-solid fa-cubes", name: "HashiCorp Certified : Terraform Associate", issuer: "HashiCorp" },
        { icon: "fa-brands fa-github", name: "GitHub Actions Certifié (GH-200)", issuer: "GitHub" },
      ],
      verify: "Vérifier sur Credly →",
    },
    edu: {
      tag: "Formation",
      title: "Parcours Académique",
      degree: "Diplôme d'ingénieur en génie logiciel",
      school: "ESPRIT École d'ingénieurs - Tunis, Tunisie",
      desc: "Cycle d'ingénieur en cinq ans, niveau Bac+5 / Master, accrédité EUR-ACE, ABET et CTI.",
    },
    lang: {
      tag: "Langues",
      title: "Communication",
      ar: "Arabe", native: "Langue maternelle",
      fr: "Français", fluent: "Courant / Professionnel",
      en: "Anglais", fluent2: "Courant / Professionnel",
    },
    interests: { chess: "Échecs", travel: "Voyages" },
    contact: {
      tag: "Contact",
      title: "Construisons quelque chose de fiable ensemble",
      sub: "Ouvert aux postes DevOps, Plateforme & Cloud/SRE - CDI ou mission.",
      email: "Email",
      phone: "Téléphone",
      location: "Localisation",
      locationValue: "Tunis, Tunisie",
      button: "Dire bonjour",
    },
    footer: {
      text: "© {year} Achraf Maalaoui. Réalisé en HTML, CSS & JavaScript - hébergé sur GitHub Pages.",
    },
  },
};
