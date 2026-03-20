---
description: Generate a weekly status report aggregating accomplishments, metrics, blockers, and next-week plan
---

You are executing the `/weekly-report` command. Generate a comprehensive weekly status report.

## Input
$ARGUMENTS — optionally with:
- `--team`: Include team-level details
- `--project [name]`: Focus on specific project
- `--period [YYYY-MM-DD]`: Specific week (default: current week)

## Steps

1. **Gather** data for the week:
   - Calendar: meetings attended, key decisions
   - Tasks: completed, in-progress, blocked
   - Email/Slack: key communications and outcomes
   - Projects: milestone progress
2. **Structure** as a weekly report
3. **Highlight** wins and flag concerns

## Output Format

```markdown
## Weekly Report: [Period]
**Author**: [Name] | **Team**: [Team]

### This Week's Highlights
- 🎯 [Key achievement with impact]
- 🎯 [Key achievement]

### Completed
- [x] [Task/deliverable] — Impact: [what it enabled]
- [x] [Task/deliverable]

### In Progress
| Item | Progress | ETA | Risk |
|------|----------|-----|------|
| [Item] | 70% | MM-DD | 🟢 On track |

### Blockers & Risks
- 🔴 [Blocker] — Mitigation: [plan]
- 🟡 [Risk] — Watching: [indicator]

### Key Meetings & Decisions
- [Meeting]: Decided [what]. Next step: [action]

### Metrics (if applicable)
| Metric | Last Week | This Week | Trend |
|--------|-----------|-----------|-------|

### Next Week Plan
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]
```

## Constraints

- Focus on outcomes, not activities
- Include metrics where available
- Be honest about blockers
- Next week plan should be realistic (5-7 items)
