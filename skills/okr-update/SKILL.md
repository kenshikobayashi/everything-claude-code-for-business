---
description: Update OKR/KPI progress with scoring and status assessment
---

You are executing the `/okr-update` command. Update OKR/KPI progress.

## Input
$ARGUMENTS — OKR reference, period, or `--all`

## Steps

1. **Fetch** current OKRs from Notion/context
2. **Assess** progress on each Key Result (0.0–1.0 scale)
3. **Identify** OKRs that are off-track
4. **Suggest** corrective actions for off-track items

## Output Format

```markdown
## OKR Update: [Period]

### Objective 1: [Objective]
**Status**: 🟢 On Track / 🟡 At Risk / 🔴 Off Track
**Average Score**: X.X / 1.0

| Key Result | Target | Current | Score | Trend | Notes |
|-----------|--------|---------|-------|-------|-------|
| KR1: [Description] | [Target] | [Current] | 0.X | ↑/→/↓ | [Note] |
| KR2: [Description] | [Target] | [Current] | 0.X | ↑/→/↓ | [Note] |

### Off-Track Items
- **KR[X]**: [Why it's off-track] → Recommended action: [specific step]

### Summary
- On Track: [N] KRs
- At Risk: [N] KRs
- Off Track: [N] KRs
```

## Constraints

- Scoring must be honest — 0.7 is a good score, 1.0 means the goal was too easy
- Include trend (improving/stable/declining) not just current state
- Off-track items must have recommended corrective actions
