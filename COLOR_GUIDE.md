# 🎨 프로젝트 색상 가이드 (Color Guide)

이 프로젝트에 사용된 주요 색상과 각 요소별 적용 가이드를 정리한 문서입니다. 나중에 다른 프로젝트나 유지보수 시 참고하세요.

## 1. 브랜드 컬러 (Primary Colors)

| 색상 | HEX | 적용 예시 |
| :--- | :--- | :--- |
| **Warm Brown** | `#BE7E56` | 브랜드 타이틀, 하이라이트(`text-highlight`), 버튼 배지, 액티브 탭, 스크롤 밑줄, 카드 호버 효과 |
| **Dark Charcoal**| `#3D3B3A` | 메인 헤드라인, 카드 테두리(`.sketch-card`), 기본 텍스트, 그림자(`box-shadow`) |

### 1.5. 보조 및 포인트 컬러 (Accent Colors) - *New*

| 색상 | HEX | 적용 예시 |
| :--- | :--- | :--- |
| **Deep Green** | `#2D5A27` | 프리미엄 신뢰감이 필요한 상담/가맹 문의 버튼, 특정 강조 배지 |
| **Burnt Orange** | `#D35400` | 인터랙티브 활성 점선(`separator-dot`), 스크롤 마우스 아이콘, 역동적인 포인트 요소 |

---

## 2. 배경 및 시각적 요소 (Backgrounds & Visuals)

| 요소 | 색상/코드 | 비고 |
| :--- | :--- | :--- |
| **메인 배경** | `#FFFFFF` | 전체 페이지 및 카드 배경 |
| **하이라이트** | `#BE7E56` (Opacity 30%~50%) | `.text-highlight` 레이어 (모바일은 시인성을 위해 **50%** 적용) |
| **도트 패턴** | `#BE7E56` (Radial Gradient) | 히어로 섹션 배경 점선 패턴 (`.bg-pattern`) |
| **장식용 블롭** | `#BE7E56/10`, `#BE7E56/5` | 히어로 섹션 배경의 은은한 원형 장식 (`blur-3xl`) |
| **구분선** | `#3D3B3A` / `black/80` | 프로세스 섹션의 중앙 라인 및 섹션 구분선 |

---

## 3. 텍스트 컬러 (Typography)

| 구분 | 색상/코드 | 적용 위치 |
| :--- | :--- | :--- |
| **기본 제목** | `#3D3B3A` | 각 섹션의 `h2`, `h3` 타이틀 |
| **본문 텍스트** | `text-gray-600` (#4B5563) | 일반 설명 문구, 부제목 |
| **강조 텍스트** | `#BE7E56` | 브랜드명(`Hero`), 프로그램 카드 제목, 지점명 |
| **비활성/보조** | `text-gray-400` (#9CA3AF) | 푸터 저작권 문구, 모바일 보조 설명 |
| **푸터 텍스트** | `text-gray-500` (#6B7280) | 하단 기업 정보 |

---

## 4. 컴포넌트별 상세 색상

### 🖱️ 상호작용 (Buttons & Interactive)
- **액티브 버튼 (기본)**: 배경 `#BE7E56`, 텍스트 `#FFFFFF`
- **상담/가맹 버튼 (Premium)**: 배경 `#2D5A27`, 보더 `#2D5A27` (Hover 시 내부 채워짐)
- **인액티브 버튼**: 배경 `bg-gray-200`, 텍스트 `text-gray-700` (Hover: `bg-gray-300`)
- **스크롤 인디케이터**: 테두리 `#D35400/40`, 내부 도트 `#D35400` (역동성 부여)

### 📋 카드 디자인 (`.sketch-card`)
- **기본**: 테두리 2px `#3D3B3A`, 그림자 6px `#3D3B3A`
- **호버 시**: 그림자 10px `#BE7E56`, 위치 이동(`translate-4px`)
- **상단 장식 바**: 배경 `#2D5A27/15`, 하단 테두리 `#2D5A27/10`, 내부 흰색 도트 (Deep Green 계열 적용)

### 🔄 애니메이션 요소
- **타이핑 커서**: `#BE7E56`
- **진행률 바 (Tabs)**: `bg-white/40`
- **Swiper 네비게이션**: 화살표 및 페이지네이션 도트 `#BE7E56`
- **섹션 구분점 (Active)**: `#D35400` (Burnt Orange)

---

## 5. Tailwind 전역 설정 (참고용)
이 프로젝트는 CDN을 통해 Tailwind를 사용하며, 특정 색상은 임의값(Arbitrary values) 혹은 추가된 클래스로 적용되었습니다.

```javascript
// 주요 사용된 색상 상수화 예시
const colors = {
  primary: '#BE7E56',     // Warm Orange-Brown
  accentGreen: '#2D5A27', // Deep Green (Premium Trust)
  accentOrange: '#D35400',// Burnt Orange (Dynamic)
  neutralDark: '#3D3B3A', // Dark Charcoal
  textMain: '#3D3B3A',
  textSub: '#4B5563',     // Gray-600
}
```
