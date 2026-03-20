---
name: decision-frameworks
description: Structured decision-making frameworks — MECE, 2x2 matrices, decision trees, weighted scoring
---

# Decision Frameworks Skill

## When to Use

When the user needs to make a choice between options, evaluate alternatives, or structure their thinking about a complex decision.

## Framework Selection Guide

| Situation | Recommended Framework |
|-----------|----------------------|
| Many options, need to narrow down | MECE Categorization → Elimination |
| 2 dimensions, need visual mapping | 2×2 Matrix |
| Sequential decisions with probabilities | Decision Tree |
| Multiple criteria, need rigorous comparison | Weighted Scoring Matrix |
| Quick directional decision | Pros/Cons + Gut Check |
| Resource allocation across initiatives | RICE Scoring |

## Frameworks

### MECE (Mutually Exclusive, Collectively Exhaustive)

Break the problem into non-overlapping categories that cover everything:

```
Problem: How to increase revenue?
├── Increase customers (acquisition)
│   ├── New markets
│   └── New channels
├── Increase revenue per customer
│   ├── Upsell existing products
│   └── New products
└── Increase retention (reduce churn)
    ├── Improve product
    └── Improve support
```

### 2×2 Matrix

Map options on two important dimensions:

```
                High Impact
                    │
         Quick Wins │ Big Bets
    ─────────────── ┼ ───────────────
         Fill-ins   │ Time Sinks
                    │
                Low Impact

    Low Effort ◄──────────► High Effort
```

### Weighted Scoring Matrix

| Criterion (Weight) | Option A | Option B | Option C |
|--------------------|----------|----------|----------|
| Cost (5) | 4 → 20 | 3 → 15 | 2 → 10 |
| Speed (3) | 3 → 9 | 5 → 15 | 4 → 12 |
| Risk (4) | 4 → 16 | 2 → 8 | 3 → 12 |
| **Total** | **45** | **38** | **34** |

### RICE Scoring

| Initiative | Reach | Impact | Confidence | Effort | Score |
|-----------|-------|--------|------------|--------|-------|
| Feature A | 5000 | 3 | 80% | 2 | 6000 |
| Feature B | 1000 | 2 | 90% | 1 | 1800 |

Score = (Reach × Impact × Confidence) / Effort

### Decision Tree

```
Decision: Enter new market?
├── Yes (invest ¥50M)
│   ├── Success (60%) → ¥200M revenue → Net: +¥150M
│   └── Failure (40%) → ¥20M revenue → Net: -¥30M
│   Expected value: (0.6 × 150M) + (0.4 × -30M) = +¥78M
└── No (invest ¥0)
    └── Expected value: ¥0
→ Decision: Enter (EV: +¥78M > ¥0)
```

## Meta-Decision Framework

Before choosing a framework, consider:

1. **Reversibility**: Is this decision easily reversible? → Decide fast, use simple framework
2. **Stakes**: What's the cost of being wrong? → High stakes → rigorous framework
3. **Time pressure**: How soon must you decide? → Urgent → simpler framework
4. **Data availability**: Do you have data to score? → Yes → quantitative framework

## Anti-Patterns

- **Analysis paralysis**: More analysis won't help if the options are close — just pick one
- **Anchoring**: Don't let the first option presented bias the evaluation
- **Sunk cost**: Past investment doesn't make a bad option better
- **Groupthink**: Seek dissenting views before deciding
