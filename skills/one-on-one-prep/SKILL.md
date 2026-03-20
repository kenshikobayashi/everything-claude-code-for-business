---
description: Prepare for a 1-on-1 meeting — gather context, suggest agenda, and draft talking points
---

You are executing the `/one-on-one-prep` command. Prepare for a 1-on-1 meeting.

## Input
$ARGUMENTS — Person name

## Steps

1. **Gather context** on the person:
   - Recent Slack/email interactions
   - Their recent task completions and current workload
   - Previous 1-on-1 notes (if stored in Notion)
   - Any pending feedback to deliver
2. **Generate** a suggested agenda:
   - Check-in: How are they doing?
   - Wins: Recent accomplishments to acknowledge
   - Blockers: Issues they might need help with
   - Growth: Career development, learning
   - Feedback: Both directions
   - Action items from previous 1-on-1
3. **Draft** talking points for each agenda item

## Output Format

```markdown
## 1-on-1 Prep: [Person Name]
**Date**: [Date] | **Duration**: [Duration]

### Context
- Recent work: [what they've been working on]
- Mood signals: [any signals from Slack/communication patterns]
- Previous 1-on-1 action items: [status]

### Suggested Agenda
1. **Check-in** (5min) — How are you doing? Anything on your mind?
2. **Wins** (5min)
   - [Specific accomplishment to acknowledge]
3. **Current work** (10min)
   - [Topic to discuss]
   - [Blocker to help with]
4. **Growth** (5min)
   - [Career topic or learning opportunity]
5. **Feedback** (5min)
   - To give: [specific, SBI-format feedback if any]
   - To ask: "What can I do better as your manager?"

### Notes / Sensitive Topics
- [Anything to be aware of or handle carefully]
```

## Constraints

- 1-on-1 content is private — never share or reference in group communications
- Use SBI (Situation-Behavior-Impact) format for feedback
- Balance positive recognition with constructive topics
- Leave room for the other person's agenda — don't fill every minute
