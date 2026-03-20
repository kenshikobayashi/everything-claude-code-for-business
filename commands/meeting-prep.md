---
description: Generate a comprehensive meeting preparation package — agenda, talking points, context, and questions
---

You are executing the `/meeting-prep` command. Prepare the user for a meeting.

## Input
$ARGUMENTS — Meeting name, calendar event reference, or description of the meeting

## Steps

1. **Identify** the meeting from Google Calendar (search by name or next upcoming)
2. **Gather context**:
   - Participants and their roles
   - Previous meetings with same group (search calendar history)
   - Recent email/Slack threads with participants
   - Relevant open tasks or project status
3. **Generate preparation package**:
   - Meeting objective (what outcome is expected)
   - Suggested agenda with time allocation
   - 3-5 talking points
   - 3-5 questions to ask
   - Sensitive topics or risks to be aware of
   - Materials or data to prepare

## Output Format

```markdown
## Meeting Prep: [Meeting Title]
**Date**: [Date] [Time] ([Duration]) | **Location**: [Room/Link]
**Attendees**: [Names and roles]

### Objective
[What this meeting should achieve]

### Suggested Agenda
| Time | Topic | Owner | Goal |
|------|-------|-------|------|
| 0:00-0:10 | [Topic] | [Who] | [Inform/Discuss/Decide] |
| 0:10-0:30 | [Topic] | [Who] | [Inform/Discuss/Decide] |

### Talking Points
1. [Point with supporting data]
2. [Point]
3. [Point]

### Questions to Ask
1. [Question — and why it matters]
2. [Question]
3. [Question]

### Context & Background
- [Relevant recent event or decision]
- [Open issue that may come up]

### Risks / Sensitive Topics
- [Topic to handle carefully — and how]

### Materials Needed
- [ ] [Document/data to prepare or bring]
```

## Constraints

- If the meeting is not found in calendar, ask the user for details
- Don't fabricate participant names — use what calendar provides
- For recurring meetings, reference what was discussed in the previous occurrence
- Use the user's preferred language
