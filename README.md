<img src="https://drive.google.com/uc?id=1zd9LLlvdRQk91d0CyPPTya8oFyL8GUQz" width="10%">

# N 행시

![Node](https://img.shields.io/badge/node-12.19.0-%23026E00)
![React](https://img.shields.io/badge/cra-4.0.1-%2361dafb)
![Storybook](https://img.shields.io/badge/storybook-6.1.9-%23FF4785)
![Scss](https://img.shields.io/badge/scss-4.14.1-%23BF4080)
![Redux](https://img.shields.io/badge/redux-4.0.5-%23744CBC)
![AirbnbGuide](https://img.shields.io/badge/airbnbguide-18.2.1-%23FF385c)

타임어택으로 N행시 게임을 진행하는 프로젝트입니다.

## [실행](https://www.nhangsi.com/)

**Github Actions**을 이용해서 Vercel로 자동 배포

## 개발자👨‍💻👩‍💻👨‍💻

### 👨‍💻 [곽민상](https://github.com/qkaxhfms)

### 👩‍💻 [전지원](https://github.com/dddieon)

### 👨‍💻 [정내혁](https://github.com/jeongnaehyeok)

## 사용법

### .env 설정

```.env
// .env

// Window 설정
SASS_PATH=node_modules:./node_modules;./src/assets/scss/

// Mac 설정
SASS_PATH=node_modules:src/assets/scss/

// 공통 설정
REACT_APP_API_HOST=방구석 호랑이 문의
REACT_APP_API_KEY=방구석 호랑이 문의
```

### 실행 설정

```bash
npm install
# 서버 실행
npm run start

# Storybook 실행
npm run storybook
```

## 파일 구조

```bash
N_Hang_Si
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── README.md
├── craco.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── .github
│   └── workflows
│       └── main.yml
├── .storybook
│   ├── main.js
│   └── preview.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── assets
│   │   ├── images
│   │   └── scss
│   │       ├── App.scss
│   │       ├── project.scss
│   │       └── utils
│   │           ├── _base.scss
│   │           ├── _mixins.scss
│   │           ├── _variables.scss
│   │           └── reset.scss
│   ├── components
│   │   ├── commons
│   │   ├── elements
│   │   ├── layouts
│   │   └── pages
│   ├── index.js
│   ├── modules
│   │   └── index.js
│   ├── stories
│   └── utils
└── yarn.lock
```

## 백엔드

### [N-Hang-Si Backend](https://github.com/react-sprint/N_Hang_Si_API)

## 문의사항

cnh0301@gmail.com
