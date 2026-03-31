# 하네스 엔지니어링 오케스트레이터 — JM김정민피부과 웹사이트 리뉴얼

이 프로젝트는 4-Agent 하네스 구조로 동작합니다.
사용자의 프롬프트를 받아, Researcher → Planner → Generator → Evaluator 파이프라인을 자동 실행합니다.

---

## 프로젝트 개요

- 프로젝트: JM김정민피부과 웹사이트 리뉴얼 (jmskin.co.kr)
- 목표: 하이엔드 피부과 브랜드에 걸맞는 프리미엄 웹사이트 제작
- 핵심 자료: context/brand_strategy.md (브랜드 전략), context/site_structure.md (기존 사이트 분석)
- 결과물 위치: output/ 폴더
- 기술: React + Vite 기반, 반응형 (모바일/태블릿/데스크톱)

---

## 실행 흐름

사용자가 프롬프트를 주면, 아래 순서대로 서브에이전트를 호출합니다.

```
[사용자 프롬프트]
       ↓
  ① Planner 서브에이전트
     → context/ 폴더 참조 + SPEC.md 생성
       ↓
  ② Generator 서브에이전트
     → output/ 폴더에 React 프로젝트 생성 + SELF_CHECK.md 작성
       ↓
  ③ Evaluator 서브에이전트
     → QA_REPORT.md 작성
       ↓
  ④ 판정 확인
     → 합격: 완료 보고
     → 불합격/조건부: ②로 돌아가 피드백 반영 (최대 3회 반복)
```

---

## 서브에이전트 호출 방법

각 단계에서 Task 도구를 사용하여 서브에이전트를 호출합니다.
서브에이전트에게 전달할 프롬프트는 아래 "단계별 실행 지시"를 따릅니다.

중요: 각 서브에이전트는 독립된 컨텍스트에서 실행됩니다.
이것이 "만드는 AI와 평가하는 AI를 분리"하는 핵심입니다.

---

## 단계별 실행 지시

### 단계 1: Planner 호출

서브에이전트에게 아래 내용을 전달합니다:

```
agents/planner.md 파일을 읽고, 그 지시를 따라라.
agents/evaluation_criteria.md 파일도 읽고 참고하라.
context/brand_strategy.md 파일을 읽어라. 이것이 브랜드 전략이다.
context/site_structure.md 파일을 읽어라. 이것이 기존 사이트 분석이다.

사용자 요청: [사용자가 준 프롬프트]

결과를 SPEC.md 파일로 저장하라.
```

Planner 서브에이전트가 SPEC.md를 생성하면, 다음 단계로 진행합니다.


### 단계 2: Generator 호출

서브에이전트에게 아래 내용을 전달합니다:

최초 실행 시:
```
agents/generator.md 파일을 읽고, 그 지시를 따라라.
agents/evaluation_criteria.md 파일도 읽고 참고하라.
context/brand_strategy.md 파일을 읽어라. 이것이 브랜드 전략이다.
SPEC.md 파일을 읽고, 전체 기능을 한 번에 구현하라.

결과를 output/ 폴더에 React + Vite 프로젝트로 저장하라.
완료 후 SELF_CHECK.md를 작성하라.
```

피드백 반영 시 (2회차 이상):
```
agents/generator.md 파일을 읽고, 그 지시를 따라라.
agents/evaluation_criteria.md 파일도 읽고 참고하라.
context/brand_strategy.md 파일을 읽어라. 이것이 브랜드 전략이다.
SPEC.md 파일을 읽어라.
output/ 폴더의 현재 코드를 읽어라. 이것이 현재 구현이다.
QA_REPORT.md 파일을 읽어라. 이것이 QA 피드백이다.

QA 피드백의 "구체적 개선 지시"를 모두 반영하여 output/ 의 코드를 수정하라.
"방향 판단"이 "완전히 다른 접근 시도"이면 디자인 컨셉 자체를 바꿔라.
완료 후 SELF_CHECK.md를 업데이트하라.
```


### 단계 3: Evaluator 호출

서브에이전트에게 아래 내용을 전달합니다:

```
agents/evaluator.md 파일을 읽고, 그 지시를 따라라.
agents/evaluation_criteria.md 파일을 읽어라. 이것이 채점 기준이다.
context/brand_strategy.md 파일을 읽어라. 이것이 브랜드 전략이다.
SPEC.md 파일을 읽어라. 이것이 설계서다.
output/ 폴더의 코드를 읽어라. 이것이 검수 대상이다.

검수 절차:
1. output/ 의 코드를 분석하라
2. SPEC.md의 페이지/섹션이 구현되었는지 확인하라
3. brand_strategy.md와의 브랜드 일관성을 검증하라
4. evaluation_criteria.md에 따라 5개 항목을 채점하라
5. 최종 판정(합격/조건부/불합격)을 내려라
6. 불합격 또는 조건부 시, 구체적 개선 지시를 작성하라

결과를 QA_REPORT.md 파일로 저장하라.
```


### 단계 4: 판정 확인

QA_REPORT.md를 읽고 판정을 확인합니다.

- "합격" → 사용자에게 완료 보고. output/ 폴더 안내.
- "조건부 합격" 또는 "불합격" → 단계 2로 돌아가 피드백 반영.
- 최대 반복 횟수: 3회. 3회 후에도 불합격이면 현재 상태로 전달하고 이슈를 보고.

---

## 완료 보고 형식

모든 단계가 끝나면 사용자에게 아래 형식으로 보고합니다:

```
## 하네스 실행 완료

**결과물**: output/ 폴더
**Planner 설계 페이지 수**: X개
**QA 반복 횟수**: X회
**최종 점수**: 디자인 X/10, 브랜드 일관성 X/10, 독창성 X/10, 기술 X/10, 기능 X/10 (가중 X.X/10)

**실행 흐름**:
1. Planner: [무슨 페이지를 설계했는지 한 줄]
2. Generator R1: [첫 구현 결과 한 줄]
3. Evaluator R1: [판정 결과 + 핵심 피드백 한 줄]
4. Generator R2: [수정 내용 한 줄] (있는 경우)
5. Evaluator R2: [판정 결과] (있는 경우)
...
```

---

## 주의사항

- 서브에이전트 호출 시, 반드시 필요한 파일을 읽도록 지시하세요
- Generator와 Evaluator는 반드시 다른 서브에이전트로 호출하세요 (분리가 핵심)
- 각 단계 완료 후, 생성된 파일이 존재하는지 확인하세요
- context/ 폴더의 브랜드 전략 문서가 모든 단계에서 참조되어야 합니다
- QA_REPORT.md를 사람도 읽을 수 있도록, 각 라운드마다 핵심 내용을 요약해주세요
