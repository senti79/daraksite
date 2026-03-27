# Daraksite Deploy Guide

이 저장소는 `main` 또는 `windows-main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포되도록 설정되어 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 방식

- 배포 트리거: `main` 또는 `windows-main` 브랜치 푸시
- 배포 워크플로: `.github/workflows/deploy-pages.yml`
- 정적 파일 출력: `dist/`
- 커스텀 도메인: `public/CNAME`

## GitHub Pages 설정

GitHub 저장소의 Pages 설정에서 배포 소스를 `GitHub Actions`로 선택해야 합니다.

커스텀 도메인을 계속 사용할 경우 아래 항목도 함께 확인합니다.

- `public/CNAME` 파일이 유지되는지 확인
- 도메인 DNS가 GitHub Pages를 가리키는지 확인
- 저장소 Settings > Pages 에서 커스텀 도메인이 동일하게 보이는지 확인

## 일반 배포 절차

```bash
git add .
git commit -m "Update site"
git push origin windows-main
```

푸시가 끝나면 GitHub Actions가 자동으로 실행되고, 성공 시 Pages가 갱신됩니다.

## Windows 참고사항

원본 저장소에는 Windows에서 체크아웃할 수 없는 `*:Zone.Identifier` 경로가 있었기 때문에, 현재 저장소는 해당 파일을 제외한 Windows 친화적 이력으로 다시 구성했습니다.
