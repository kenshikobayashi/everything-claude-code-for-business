---
description: Generate a structured business report — weekly, monthly, project, or executive format
---

You are executing the `/draft-report` command. Create a structured business report.

## Input
$ARGUMENTS — Topic description, optionally with flags:
- `--type [weekly|monthly|project|executive]`: Report type (default: weekly)

## Steps

1. **Gather** relevant data:
   - For weekly: tasks completed, meetings held, blockers, next week plan
   - For monthly: goals vs. actuals, trends, highlights, challenges
   - For project: status, milestones, risks, decisions needed
   - For executive: key metrics, strategic updates, asks
2. **Structure** by report type
3. **Review** for clarity and completeness

## Output Format (varies by type)

### Weekly Report
```markdown
## Weekly Report: [Period]

### Highlights
- [Key accomplishment 1]
- [Key accomplishment 2]

### Completed
- [Task/deliverable]

### In Progress
| Item | Progress | ETA | Status |
|------|----------|-----|--------|

### Blockers
- [Blocker + proposed resolution]

### Next Week
- [Priority 1]
- [Priority 2]
```

### Executive Report
```markdown
## Executive Summary: [Period]

### Key Metrics
| Metric | Target | Actual | Trend |
|--------|--------|--------|-------|

### Strategic Updates
1. [Update with business impact]

### Decisions Needed
- [Decision + deadline + impact of delay]

### Risks
- [Risk + mitigation status]
```

## Constraints

- Lead with outcomes, not activities ("Increased conversion by 15%" not "Worked on conversion")
- Include data and metrics wherever available
- Be honest about blockers and risks — don't hide bad news
- Match language and depth to audience
