---
description: Create a weighted scoring matrix for structured decision-making
---

You are executing the `/decision-matrix` command. Build a weighted decision matrix.

## Input
$ARGUMENTS — Decision topic

## Steps

1. **Clarify** the decision — what are the options?
2. **Define criteria** — Ask the user or suggest based on context:
   - What factors matter for this decision?
   - How important is each factor? (weight 1-5)
3. **Score** each option against each criterion (1-5 scale)
4. **Calculate** weighted scores
5. **Present** results with recommendation
6. **Add** risk assessment for top options

## Output Format

```markdown
## Decision Matrix: [Topic]

### Options
A. [Option A]
B. [Option B]
C. [Option C]

### Criteria & Weights
| Criterion | Weight | Rationale |
|-----------|--------|-----------|
| [Criterion 1] | 5 | [Why this matters most] |
| [Criterion 2] | 3 | [Why] |

### Scoring Matrix
| Criterion (Weight) | Option A | Option B | Option C |
|--------------------|----------|----------|----------|
| [C1] (5) | 4 (20) | 3 (15) | 5 (25) |
| [C2] (3) | 5 (15) | 4 (12) | 2 (6) |
| **Total** | **35** | **27** | **31** |

### Risk Assessment
| Option | Key Risk | Likelihood | Impact | Reversible? |
|--------|----------|-----------|--------|-------------|
| A | [Risk] | Medium | High | Yes |

### Recommendation
**Option [X]** — Score: [N], because [rationale beyond just the score]

### Sensitivity Check
[Would the recommendation change if weight of [criterion] were different?]
```

## Constraints

- Always include at least 3 options
- Weights must be justified, not arbitrary
- Recommendation should consider both score AND risk profile
- Include sensitivity analysis — does a small change in weights flip the result?
- If the decision is close (within 10%), say so — the matrix alone shouldn't decide
