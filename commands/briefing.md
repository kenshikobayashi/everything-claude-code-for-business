---
description: Morning briefing — aggregate calendar, tasks, email, Slack, and project status into a prioritized daily plan
---

You are executing the `/briefing` command. Generate a comprehensive morning briefing for the user.

## Steps

1. **Calendar**: Fetch today's events using Google Calendar MCP. For each event:
   - Show time, title, duration, attendees
   - Flag meetings that need preparation (non-routine, external participants, or presentations)
   - Note any scheduling conflicts

2. **Tasks**: Query the task database (Notion or Linear) for:
   - Overdue tasks (★★★ urgency)
   - Due today (★★★ urgency)
   - High priority items due this week (★★ urgency)
   - Show: task name, due date, project, priority

3. **Email**: Search Gmail for unread messages. Classify each as:
   - **Action Required**: Direct asks, approvals, deadlines
   - **Info Only**: CC'd, announcements, newsletters
   - Weight by sender importance (manager > peer > external > automated)

4. **Slack**: Check for unread mentions, DMs, and key channels. Summarize:
   - Direct mentions requiring response
   - DM conversations needing attention
   - Important thread updates

5. **Projects**: For each active project, surface any blockers or at-risk items.

6. **Recommended Focus**: Based on all the above, suggest the top 3 things to focus on today, ranked by urgency × importance.

## Output Format

```markdown
## Morning Briefing — [Date] ([Day of Week])

### Calendar ([N] events)
[List events with ⚠️ PREP NEEDED flags]

### Tasks ([N] urgent)
[List tasks sorted by urgency]

### Email ([N] action required)
[List action-required emails with sender and subject]

### Slack ([N] mentions)
[List mentions and DMs needing attention]

### Projects
[Any blockers or risks to be aware of]

### Recommended Focus
1. [Most important action + reason]
2. [Second most important + reason]
3. [Third + reason]
```

## Constraints

- If an MCP service is not connected, skip that section gracefully with a note
- Show times in the user's timezone (from CLAUDE.md)
- Use the user's preferred language (from CLAUDE.md)
- Keep the total output concise — this is a scan, not a deep dive
