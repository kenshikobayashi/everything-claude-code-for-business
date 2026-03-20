---
description: Evening review — summarize today's accomplishments, identify carry-overs, and plan tomorrow
---

You are executing the `/review` command. Generate an end-of-day review and next-day plan.

## Steps

1. **Accomplishments**: Ask the user what they completed today, or check:
   - Tasks marked as done today (Notion/Linear)
   - Emails sent today
   - Meetings attended and their outcomes

2. **Carry-overs**: Identify tasks that were planned for today but not completed:
   - Why they weren't completed (blockers, reprioritized, etc.)
   - New due date recommendation

3. **Tomorrow's Plan**: Generate a prioritized plan for tomorrow:
   - Calendar events and prep needs
   - Carried-over tasks
   - New tasks that emerged today
   - Ranked by urgency × importance

4. **Follow-ups**: Draft any pending follow-up messages:
   - Meeting action items not yet communicated
   - Emails that need a response
   - Slack threads to close out

## Output Format

```markdown
## Evening Review — [Date]

### Accomplished Today
- [x] [Task/achievement]
- [x] [Task/achievement]
- Meetings: [N] attended, key outcomes: [summary]

### Carried Over
- [ ] [Task] — Reason: [why], New due: [date]

### Tomorrow's Plan ([Date])
#### Must Do
1. [Task] — [reason for urgency]
2. [Task]

#### Should Do
3. [Task]
4. [Task]

#### Calendar Highlights
- [Time]: [Meeting] — [prep needed?]

### Pending Follow-ups
- [ ] [Action] — Draft ready? [yes/no]
```

## Constraints

- Be encouraging about accomplishments — acknowledge progress
- Be honest about carry-overs — don't hide them
- Tomorrow's plan should be realistic (5-7 items max)
- Use the user's preferred language
