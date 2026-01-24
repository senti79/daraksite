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
GitHub Pages의 서브 디렉토리 구조(`/<repository-name>/`)에서 자산을 올바르게 참조할 수 있도록 `base` 경로를 설정했습니다.

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
    return {
      base: '/daraksite/', // 저장소 이름을 base 경로로 지정
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

- **배포 주소**: [https://senti79.github.io/daraksite/](https://senti79.github.io/daraksite/)
- **업데이트 방법**: 코드 수정 후 `git push`를 통해 `main` 브랜치를 업데이트하고, 다시 한 번 `npm run build`와 `gh-pages -d dist`를 실행하면 사이트에 반영됩니다.

---
*작성일: 2026-01-24*
