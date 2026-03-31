# 실행 방법

## 프로젝트 구조

```
JM Web/
├── CLAUDE.md                      ← 오케스트레이터 (Claude Code가 자동으로 읽음)
├── agents/
│   ├── evaluation_criteria.md     ← 공용 평가 기준 (디자인 30% + 브랜드 일관성 30%)
│   ├── planner.md                 ← Planner 서브에이전트 지시서
│   ├── generator.md               ← Generator 서브에이전트 지시서
│   └── evaluator.md               ← Evaluator 서브에이전트 지시서
├── context/
│   ├── brand_strategy.md          ← JM 브랜드 전략 요약 (에센스, 포지셔닝, 메시지)
│   └── site_structure.md          ← 기존 사이트 분석 + 리뉴얼 페이지 구성 제안
├── output/                        ← 생성 결과물이 저장되는 폴더
├── SPEC.md                        ← Planner가 생성 (실행 후 생김)
├── SELF_CHECK.md                  ← Generator가 생성 (실행 후 생김)
├── QA_REPORT.md                   ← Evaluator가 생성 (실행 후 생김)
└── START.md                       ← 지금 이 파일
```

---

## 실행 방법

### 1단계: 이 폴더에서 Claude Code를 실행합니다

```bash
cd "JM Web"
claude
```

Claude Code가 CLAUDE.md를 자동으로 읽고 오케스트레이터 역할을 합니다.

### 2단계: 프롬프트를 입력합니다

```
JM김정민피부과 웹사이트를 리뉴얼해줘
```

이것만 치면 됩니다.
CLAUDE.md의 지시에 따라 자동으로:

1. Planner가 브랜드 전략을 반영한 SPEC.md를 생성합니다
2. Generator가 output/ 폴더에 React 프로젝트를 생성합니다
3. Evaluator가 브랜드 일관성 중심으로 QA_REPORT.md를 생성합니다
4. 불합격이면 Generator가 피드백을 반영하여 재작업합니다
5. 합격이면 완료 보고가 나옵니다

### 3단계: 결과를 확인합니다

```bash
cd output
npm install
npm run dev
```

브라우저에서 localhost로 접속하여 확인합니다.

---

## 커스터마이징

- **브랜드 전략 수정**: context/brand_strategy.md 편집
- **평가 기준 조정**: agents/evaluation_criteria.md 편집 (비중, 합격 기준 등)
- **디자인 가이드 변경**: agents/generator.md의 "디자인 가이드" 섹션 편집
- **페이지 구성 변경**: context/site_structure.md의 "리뉴얼 시 고려할 페이지 구성" 편집
