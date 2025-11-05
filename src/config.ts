export const siteConfig = {
  name: "윤소민",
  title: "주니어 백엔드 개발자",
  description: "윤소민 dev Portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "fuurele@gmail.com",
    github: "https://github.com/somineda",
    linkedin: "https://velog.io/@sommnie/posts",
  },
  aboutMe:
    "저는 새로운 기술을 빠르게 학습하고 프로젝트에 직접 적용하는 개발자입니다. VGG16 기반 의류 추천 연구와 Sentence Transformers를 활용한 향수 추천 서비스를 통해 AI 추천 시스템의 전체 파이프라인을 경험했습니다. PostgreSQL, Redis, Celery를 활용해 데이터 처리 효율을 높이며 서비스 성능을 개선했습니다. LMS 프로젝트 팀장으로서 코드리뷰와 스크럼 문화를 주도해 협업 효율을 향상시켰습니다. 문제 발생 시 적극적으로 피드백을 주고받으며 팀 내 신뢰를 형성했습니다. 공식 문서 탐독과 멘토 피드백을 통해 꾸준히 학습하며 실무 감각을 키워왔습니다. 현재도 멘토와 동료 개발자들과 기술 트렌드를 공유하며 성장하고 있습니다. AI와 데이터로 사용자 경험을 개선하는 개발자가 되는 것이 제 목표입니다.",
  skills: ["Python", "Django", "Flask", "PostgreSQL", "AWS", "Docker"],
  projects: [
    {
      name: "향수 추천 웹사이트",
      description:
        "개인 취향을 반영한 향수 추천 및 구매 서비스 제공",
      link: "https://github.com/oz-main-10-team1",
      skills: ["Django", "DRF", "Python", "PosgreSQL", "Simple JWT", "Celery", "Redis", "Pandas", "Numpy", "Scikit-learn", "Sentence Transformers", "Clova Studio"],
    },
    {
      name: "교육 LMS 사이트",
      description:
        "익스턴십 형태로 진행되는 통합 교육 플랫폼 유저 관리 도메인을 전담하여 회원가입부터 수강신청, 프로필 관리 회원 탈퇴 및 복구 까지의 전체 사용자 흐름을 백엔드에서 구현하고 팀장으로서 전체 팀원 일정 조율",
      link: "https://github.com/OZ-Coding-School/oz_externship_be_01",
      skills: ["Django (DRF)", "PostgreSQL", "Redis", "Celery", "Docker", "AWS EC2", "S3", "RDS", "GitHub Actions", "Poetry", "Docker Compose"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
