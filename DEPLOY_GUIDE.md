# 책읽는 다락서원 프로젝트 설정 및 배포 가이드

본 문서는 `daraksite` 프로젝트를 로컬 환경에 설정하고 GitHub Pages에 배포하기 위해 진행한 작업 내용을 정리한 것입니다.

## 1. 프로젝트 로컬 복제 및 라이브러리 설치

```bash
# 1. GitHub 저장소 내용을 현재 폴더로 가져오기
git clone https://github.com/senti79/daraksite .

# 2. 필요한 라이브러리 설치 (React, Vite, GSAP 등)
npm install
```

## 2. GitHub Pages 배포를 위한 주요 설정 변경

### 2.1 Vite 설정 수정 (`vite.config.ts`)
커스텀 도메인(`www.daracseowon.com`)을 사용하므로 `base` 경로를 루트(`/`)로 설정했습니다.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
    return {
      base: '/', // 커스텀 도메인을 위해 루트 경로로 지정
      // ... 기타 설정
    };
});
```

### 2.2 메인 파일 경로 수정 (`index.html`)
스크립트 참조 방식을 절대 경로에서 상대 경로로 변경하여 배포 환경에서의 호환성을 높였습니다.

```html
<!-- index.html -->
<!-- 이전: /index.tsx -->
<script type="module" src="./index.tsx"></script> 
```

## 3. GitHub Pages 배포 프로세스

정적 파일을 빌드하고 전용 브랜치(`gh-pages`)를 통해 배포하는 방식을 선택했습니다.

### 3.1 배포 도구 설치
```bash
npm install -g gh-pages
```

### 3.2 빌드 및 배포 실행
1. **프로덕션 빌드 생성**: `dist` 폴더에 최적화된 파일들이 생성됩니다.
   ```bash
   npm run build
   ```
2. **배포 실행**: `dist` 폴더의 내용을 `gh-pages` 브랜치로 푸시합니다.
   ```bash
   gh-pages -d dist
   ```

## 4. 확인 및 유지보수

- **배포 주소**: [https://www.daracseowon.com](https://www.daracseowon.com)
- **업데이트 및 배포 방법**: 코드 수정 후 `git push`를 통해 `main` 브랜치를 업데이트합니다. 이후 **무조건** `npm run deploy`를 실행하여 사이트에 최신 상태를 반영합니다. (Antigravity AI가 자동으로 수행합니다.)

## 5. 자산(Assets) 사용 규칙 (이미지, 로티 파일 등)

커스텀 도메인 적용으로 인해 모든 자산은 루트 경로를 기준으로 참조합니다.

### 5.1 파일 위치
모든 정적 자산(이미지, 로티 애니메이션 파일 등)은 로컬 프로젝트의 **`public/`** 폴더에 넣습니다.
- 예: `public/darak.png`, `public/animation.lottie`

### 5.2 코드 내 경로 설정
코드에서 파일을 불러올 때는 앞에 **/daraksite/** 를 제거하고 루트 경로(**/**)부터 시작합니다.

- **이미지 예시**:
  ```tsx
  <img src="/darak.png" />
  ```

- **로티(Lottie) 애니메이션 예시**:
  ```tsx
  import { DotLottieReact } from '@lottiefiles/dotlottie-react';

  <DotLottieReact
    src="/animation.lottie"
    loop
    autoplay
  />
  ```

---
*수정일: 2026-01-26 (커스텀 도메인 적용)*
