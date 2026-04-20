export const siteConfig = {
  name: "윤소민",
  title: "백엔드 개발자 / AI 엔지니어",
  description: "윤소민 dev Portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "fuurele@gmail.com",
    github: "https://github.com/somineda",
    linkedin: "https://velog.io/@sommnie/posts",
  },
  aboutMe:
    "향수 추천 서비스에서 Sentence Transformers와 pgvector로 의미 기반 벡터 검색 백엔드를 구축하며 AI 모델의 출력을 안정적으로 서빙하는 서버 개발에 기술적 흥미를 느꼈습니다. VGG16 기반 의류 추천 연구로 시작된 추천 시스템에 대한 관심은, Django와 PostgreSQL 환경에서 쿼리 최적화와 Redis 캐싱으로 성능을 개선하는 백엔드 실무 경험으로 이어졌습니다. 비교적 작은 규모의 환경에서 측정 가능한 개선을 만들어 본 경험을 바탕으로, 대규모 트래픽 위에서 AI 기술 적용과 성능 최적화를 동시에 다루는 환경에서 제 역량을 확장하고자 합니다. Python 서버 사이드 개발, FastAPI 비동기 서버, Docker 컨테이너 배포, 임베딩 기반 추천 백엔드 구축 경험으로 AI 백엔드 개발자로 성장해 가고 있습니다. 향수 추천 서비스에서 Sentence Transformers와 pgvector로 의미 기반 벡터 검색 백엔드를 구축하며, AI 모델의 출력을 안정적으로 서빙하는 서버 개발에 기술적 흥미를 느꼈습니다. VGG16 기반 의류 추천 연구로 시작된 추천 시스템에 대한 관심은, Django와 PostgreSQL 환경에서 쿼리 최적화와 Redis 캐싱으로 성능을 개선하는 백엔드 실무 경험으로 이어졌습니다. 비교적 작은 규모의 환경에서 측정 가능한 개선을 만들어 본 경험을 바탕으로, 대규모 트래픽 위에서 AI 기술 적용과 성능 최적화를 동시에 다루는 환경에서 제 역량을 확장하고자 합니다. Python 서버 사이드 개발, FastAPI 비동기 서버, Docker 컨테이너 배포, 임베딩 기반 추천 백엔드 구축 경험으로 AI 백엔드 개발자로 성장해 가고 있습니다.",
  skills: ["Python", "Django", "DRF", "FastAPI", "Flask", "PostgreSQL", "pgvector", "Redis", "AWS", "Docker", "GitHub Actions", "Sentence Transformers"],
  projects: [
    {
      name: "yours-scently (향수 추천 시스템)",
      description:
        "개인 취향을 반영한 향수 추천 및 구매 서비스. pgvector 기반 벡터 검색과 협업 필터링을 결합한 하이브리드 추천 파이프라인 구현",
      link: "https://github.com/oz-main-10-team1",
      skills: ["Django", "DRF", "Python", "PostgreSQL", "pgvector", "Simple JWT", "Celery", "Redis", "Pandas", "Numpy", "Scikit-learn", "Sentence Transformers", "Clova Studio"],
    },
    {
      name: "핏자 팟 (일정 조율 서비스)",
      description:
        "모임 멤버 간 일정을 조율해주는 웹 서비스. 프론트엔드(Next.js)와 백엔드(Django)를 연동하고 Celery로 비동기 알림 처리를 구현",
      link: "https://github.com/somineda/WhenWeMeetPizza",
      skills: ["Next.js", "Django", "DRF", "Celery", "Redis", "PostgreSQL"],
    },
    {
      name: "교육 LMS 사이트 (oz_externship_be_07)",
      description:
        "익스턴십 형태로 진행되는 통합 교육 플랫폼 유저 관리 도메인을 전담하여 회원가입부터 수강신청, 프로필 관리, 회원 탈퇴 및 복구까지의 전체 사용자 흐름을 백엔드에서 구현. 전체 팀원 일정 조율을 담당했으며, 조교 역할을 겸하여 프로젝트 전반의 PR 코드리뷰를 수행하고 컨벤션·테스트·성능 관점에서 피드백을 제공",
      link: "https://github.com/OZ-Coding-School/oz_externship_be_07",
      skills: ["Django (DRF)", "PostgreSQL", "Redis", "Celery", "Docker", "AWS EC2", "S3", "RDS", "GitHub Actions", "Poetry", "Docker Compose"],
    },
    {
      name: "Auto_monitor (ZEP 학생 모니터링 시스템)",
      description:
        "ZEP 메타버스 환경에서 학생 카메라 접속 상태를 자동으로 모니터링하고 이상 상황을 조교에게 알리는 도구",
      link: "https://legend-palm-1f1.notion.site/ZEP-329caf5650aa80b7a1f3dbe8b0ab9019",
      skills: ["Python", "Selenium", "OpenCV"],
    },
    {
      name: "이미지 분석을 통한 유사 의류 추천 연구",
      description:
        "유사 이미지 기반 의류 추천 시스템으로 객체 탐지 모델인 YOLOv5 모델과 VGG16 네트워크를 통해 상의와 하의를 구분하여 각 이미지의 특징을 추출하고 추천을 위해 유사도 측정을 통해 상의(하의)를 대상으로 어울리는 하의(상의)들을 찾아내어 최적의 조합을 도출",
      link: "https://share.google/GDYVH9b966PZ8Qt1I",
      skills: ["Python", "YOLOv5", "Roboflow", "VGG16", "OpenCV", "TensorFlow", "PyTorch"],
    },
  ],
  experience: [
    {
      company: "OZ Coding School (넥스트러너스)",
      title: "백엔드 15기 조교",
      dateRange: "2025.09.22 - 2026.04.01",
      bullets: [
        "백엔드 부트캠프 수강생 학습 및 과제 진행 관리",
        "팀 프로젝트 코드리뷰 및 기술 멘토링",
        "Django/DRF, PostgreSQL, AWS 배포 관련 Q&A 대응",
      ],
    },
    {
      company: "배재대학교",
      title: "제4회 배재대학교 AI·SW 아이디어 해커톤 대회",
      dateRange: "2024.05.11 - 2024.05.12",
      bullets: [
        "최우수상 수상",
        "아이디어: LLM, TTS, Deep Voice를 활용한 독거노인 케어 콜 서비스 어플리케이션",
      ],
    },
    {
      company: "AWS",
      title: "AWS 해커톤 JAM",
      dateRange: "2024.06.13",
      bullets: [
        "AWS JAM 수료",
      ],
    },
    {
      company: "Dacon",
      title: "SW중심대학 디지털 경진대회 - 생성 AI의 가짜(Fake) 음성 검출 및 탐지",
      dateRange: "2024.07.01 - 2024.07.19",
      bullets: [
        "생성 AI 기반 Fake 음성 검출 모델 개발에 참가",
      ],
    },
    {
      company: "ACK 2024 학술발표대회",
      title: "이미지 분석을 통한 유사 의류 추천 연구",
      dateRange: "2024.10.31 - 2024.11.02",
      bullets: [
        "의류 이미지를 YOLOv5를 이용해 상의/하의로 크롭, 색상 및 질감 모델 학습을 위한 데이터 정제",
        "CNN 질감 모델 학습 및 생성",
        "색상 및 질감 매핑, 해시 테이블 생성 입력값과 동일한 전신이미지 탐색",
      ],
    },
    {
      company: "KDT",
      title: "제 7회 K-디지털 트레이닝 해커톤",
      dateRange: "2025.06.09 - 2025.07.23",
      bullets: [
        "아이디어: 개인 맞춤형 데이터 기반 AI 최적 정착지 매칭 플랫폼 “다음동네” ",
      ],
    },
  ],
  education: [
    {
      school: "배재대학교",
      degree: "소프트웨어공학부 소프트웨어학",
      dateRange: "2021 - 2025 (졸업)",
      achievements: [
        "IOT, 빅데이터, 모바일응용SW 트랙",
      ],
    },
    {
      school: "넥스트러너스",
      degree: "오즈코딩스쿨 백엔드 부트캠프 수료",
      dateRange: "2025",
      achievements: [
        "Python/Django 기반 백엔드 개발 집중 학습",
        "팀 프로젝트(yours-scently, oz_externship_be_01) 백엔드 설계 및 구현",
        "OZ 초격차캠프 수료",
      ],
    },
  ],
};
