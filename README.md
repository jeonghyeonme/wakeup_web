# 🚌 버스기사 기상 관리 애플리케이션

![react](https://img.shields.io/badge/React-18.x-blue?logo=react)
![webview](https://img.shields.io/badge/WebView-Android/iOS-green?logo=android)
![status](https://img.shields.io/badge/Status-Developing-orange)

---

## 📌 프로젝트 개요

**버스기사 기상 관리 애플리케이션**은 **nextSolution** 회사의 외주 개발 프로젝트로, 버스기사의 기상을 효율적으로 관리하기 위해 제작된 **React 기반 웹 애플리케이션**입니다.  
해당 프로젝트는 **웹뷰(WebView)**를 통해 모바일 환경에서도 최적화된 사용자 경험을 제공합니다.

---

## 🏢 프로젝트 기능 개요

### 🎯 **주요 기능**

- **사용자 역할 기반 시스템**

  - 관리자: 사원 정보 조회 및 관리 기능 제공
  - 사원: 개인 스케줄 열람 및 기상 상태 관리

- **반응형 웹 애플리케이션**

  - 모바일 환경 최적화 및 웹뷰 내 매끄러운 UI/UX 제공

- **데이터 관리 및 조회**
  - 출퇴근 시간, 기상 정보 및 일정 관리를 위한 효율적인 인터페이스 제공

---

## 🚀 기술 스택

| 기술                  | 설명                          |
| --------------------- | ----------------------------- |
| **React**             | UI 개발 및 상태 관리          |
| **WebView**           | 모바일 환경 내 앱 형태로 실행 |
| **Styled-components** | 컴포넌트 기반 스타일링        |
| **React Query**       | API 상태 관리 및 캐싱         |
| **Axios**             | 서버 통신 및 API 호출         |

---

## 📂 프로젝트 구조

```
📦 .
├── README.md
├── public
│   └── index.html
└── src
    ├── app
    │   ├── index.js
    │   ├── model
    │   └── style
    │       └── GlobalStyle.js
    ├── entities
    │   ├── admin
    │   ├── adminTestData.js
    │   ├── crew
    │   ├── find_id
    │   ├── find_pw
    │   ├── login
    │   ├── memberData.js
    │   ├── scheduleData.js
    │   └── trip
    ├── index.js
    ├── page
    │   ├── admin_main
    │   ├── crew_main
    │   ├── find_id
    │   ├── find_pw
    │   ├── footer
    │   ├── index.js
    │   ├── login
    │   ├── profile
    │   └── trip
    ├── shared
    │   ├── assets
    │   │   └── logo.svg
    │   ├── cookie
    │   │   └── cookie.js
    │   └── recoil
    │       ├── useCheckAtom.js
    │       ├── useDateAtom.js
    │       └── useLoginAtom.js
    └── widget
        └── non_schedule

57 directories, 88 files

```

---

## 📱 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-repo/bus-alarm-app.git
cd bus-alarm-app
```

### 2. 패키지 설치

```bash
npm install  # 또는 yarn install
```

### 3. 개발 서버 실행

```bash
npm start  # 또는 yarn start
```

웹 브라우저에서 `http://localhost:3000`에 접속하여 확인할 수 있습니다.

---

## ⚙️ 환경 변수 설정 (`.env`)

아래와 같이 환경변수를 `.env` 파일에 설정해야 합니다:
현재 백엔드 개발 작업중으로 사용 불가합니다

```env
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_WEBVIEW_MODE=true
```

---

## 📊 주요 기능 설명

1. **로그인 및 권한 부여**

   - JWT 기반의 사용자 인증
   - 관리자와 사원별 대시보드 분리

2. **스케줄 및 출퇴근 관리**

   - 사원의 출퇴근 스케줄 확인 및 변경
   - 관리자 권한으로 근태 이력 조회

3. **푸시 알림 기능 (향후 업데이트)**
   - 일정 및 근무 시작 알림

---

## 🛠️ 배포 및 운영

1. **빌드 명령어 실행**

   ```bash
   npm run build  # 빌드 파일 생성
   ```

2. **서버 배포**

   - Netlify, Vercel 또는 AWS S3에 배포 가능

3. **모바일 웹뷰 적용**
   - React 앱을 웹뷰로 감싸기 위한 Android/iOS 환경 적용

---

## 🤝 기여 방법

1. 이슈를 생성하여 버그 또는 기능 요청을 등록합니다.
2. `feature/branch-name` 브랜치를 생성 후 변경사항을 반영합니다.
3. PR(Pull Request)을 제출하여 코드 리뷰를 요청합니다.

---

## 📄 라이선스

해당 프로젝트는 nextSolution의 사내 프로젝트로, 외부 배포 및 무단 사용을 금합니다.

---

## 📞 문의하기

- 프로젝트 관련 문의: [hanmw110@naver.com](mailto:hanmw110@naver.com)
- GitHub 이슈를 통해 버그 및 기능 요청 가능

---

이 README는 프로젝트의 전반적인 개요 및 실행 방법을 이해하기 쉽게 작성되었습니다. 필요에 따라 내용을 추가 및 수정할 수 있습니다. 😊
