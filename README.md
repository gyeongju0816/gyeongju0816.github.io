# Portfolio (React + TypeScript, GitHub Pages)

PPT 기반 포트폴리오를 웹으로 전환한 프로젝트입니다.  
About / Tech Stack / Projects(TalkGrow, SportsAccess)로 구성되어 있습니다.

## Demo
- Live: https://gyeongju0816.github.io
- (선택) PPT: /assets/portfolio.pdf

## Why
정적인 PPT 포트폴리오를 “읽기 쉬운 구조의 웹 제품”으로 전환하며,
- 정보 구조(IA)를 명확히 하고
- 재사용 가능한 UI 컴포넌트로 구성하며
- TypeScript로 데이터 모델을 명확히 하는 것
에 집중했습니다.

## What
- About Me: 학력/자격증/연락처 정보 섹션
- Tech Stack: 기술 스택을 카테고리별로 정리
- Projects: TalkGrow / SportsAccess 프로젝트를 동일한 포맷의 카드로 소개
  - 역할 / 기간 / 핵심 기능 / 기술 / 트러블슈팅(또는 배운 점)

## How (설계 포인트)
### 1) Feature 기반 구조
프로젝트 규모가 커져도 “어디를 고쳐야 하는지” 바로 찾을 수 있도록
섹션(about/skills/projects)을 feature 단위로 분리했습니다.

### 2) TypeScript로 도메인 모델 정의
프로젝트/스킬/연락처 데이터를 타입으로 정의하고,
화면은 “데이터 기반 렌더링”으로 단순화했습니다.

### 3) UI 컴포넌트 책임 분리
- Presentational: Card, Section, Badge, ExternalLink 등 (표현만 담당)
- Logic: data mapping / 필터링 등은 hooks 또는 feature 내부에서 담당

## Trade-off
초기 구현 속도보다 “변경에 유연한 구조”를 선택했습니다.
프로젝트가 추가되어도 동일한 타입/컴포넌트 구조로 확장 가능하도록 설계했습니다.

## Tech Stack
- React + TypeScript
- Vite
- (선택) React Router
- Styling: (사용 중인 방식 작성: CSS Modules / Styled / Emotion 등)

## Getting Started
```bash
npm i
npm run dev
