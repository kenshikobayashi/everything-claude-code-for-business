---
name: financial-modeling
description: Financial analysis patterns — P&L, ROI, unit economics, budget planning
triggers:
  - financial
  - budget
  - ROI
  - cost
  - 予算
  - 財務
---

# Financial Modeling Skill

## When to Use

When performing ROI calculations, budget analysis, unit economics, or any quantitative financial assessment.

## Patterns

### ROI Calculation
```
ROI = (Net Benefit - Cost) / Cost × 100%
Payback Period = Total Cost / Monthly Net Benefit
NPV = Σ (Cash Flow_t / (1 + r)^t) for all periods
```

### Unit Economics
- **CAC** (Customer Acquisition Cost) = Total Sales & Marketing Cost / New Customers
- **LTV** (Lifetime Value) = ARPU × Gross Margin × Average Lifespan
- **LTV:CAC ratio** — Target: >3:1
- **Payback period** — Target: <12 months

### Budget Variance
- **Favorable**: Actual < Budget (for costs) or Actual > Budget (for revenue)
- **Unfavorable**: Opposite
- **Material**: Variance > 10% — requires explanation and action plan

### Break-Even Analysis
```
Break-Even Point = Fixed Costs / (Price - Variable Cost per Unit)
```

## Rules

- Always use conservative assumptions for projections
- Show sensitivity analysis for key variables
- Currency must be explicit (¥, $, €)
- Round appropriately for the audience (executives: millions; operators: thousands)
- Include assumptions so the model can be validated and updated
