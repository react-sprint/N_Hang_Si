# N 행시

## version

- node/12.19.0
- create-react-app/3.4.1

## 사용법

```bash
npm install
# 서버 실행
npm run start
# or
yarn run start

# Storybook 실행
npm run storybook
# or
yarn storybook
```

### visual studio 설정

#### 자동 Formatting 설정

`⌘(command) + ,(comma)`를 눌러서 설정을 열고
![](https://drive.google.com/uc?id=1maTB_bG86oe59UoIbeRW0vaavDVfZV4t)
해당 아이콘을 눌러서 json파일로 `settings`파일 하단에 다음 내용을 추가한다

```json
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.disableLanguages": ["js"],
  "files.autoSave": "onFocusChange",
```

## Issue

### .env에서 OS 때문에 생기는 이슈(20.11.24)

각 OS에 맞는 .env 설정이 필요함

```.env
// .env

// Window 설정
SASS_PATH=node_modules:./node_modules;./src/assets/scss/

// Mac 설정
SASS_PATH=node_modules:src/assets/scss/
```

### node-sass 버전때문에 생기는 이슈(20.11.18)

node-sass버전 확인 필요
`5.0.0`버전에서는 이슈있음. `4.14.1`버전으로 변경해줬음

```bash
npm uninstall node-sass
npm install node-sass@4.14.1
```

## 파일 구조

```bash
N_Hang_Si
├── README.md
├── craco.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
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
│   │   └── App.stories.js
│   └── utils
│       ├── api
│       └── hooks
└── yarn.lock
```

## 개발자🧑‍💻👩‍💻👨‍💻

### 🧑‍💻 [곽민상](https://github.com/qkaxhfms)

### 👩‍💻 [전지원](https://github.com/dddieon)

### 👨‍💻 [정내혁](https://github.com/jeongnaehyeok)
