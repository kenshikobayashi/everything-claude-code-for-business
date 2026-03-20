---
description: Extract action items from meeting minutes and draft follow-up messages to assignees
---

You are executing the `/meeting-followup` command. Process meeting minutes and prepare all follow-up communications.

## Input
$ARGUMENTS — Meeting minutes (paste) or reference to a recent `/meeting-minutes` output

## Steps

1. **Extract** all action items from the minutes
2. **Group** action items by assignee
3. **Draft** Slack message for each assignee with their items:
   - Reference the meeting name and date
   - List their specific action items with due dates
   - Include any context they need
4. **Draft** summary message for the meeting channel/group
5. **Propose** task creation in Notion/Linear for each action item
6. **Suggest** calendar reminders for due dates

## Output Format

```markdown
## Meeting Follow-up: [Meeting Title] ([Date])

### Action Items Summary
| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | [Action] | [Name] | [Date] |

### Draft Messages

#### To: [Name 1] (via Slack DM)
> Hi [Name], following up from [Meeting Title] today.
>
> Your action items:
> - [ ] [Action 1] — due [date]
> - [ ] [Action 2] — due [date]
>
> Let me know if you have any questions!

#### To: [Name 2] (via Slack DM)
> [Similar format]

#### To: [Channel/Group] (summary)
> Meeting minutes from [Title] ([Date]) are ready.
>
> **Key decisions:**
> - [Decision 1]
>
> **Action items assigned** (see DMs for details):
> - [Name]: [Brief action]
> - [Name]: [Brief action]
>
> Full minutes: [link if applicable]

### Proposed Tasks
| Action | Owner | Due | Project | Priority |
|--------|-------|-----|---------|----------|
| [Action] | [Name] | [Date] | [Project] | ★★ |

### Calendar Reminders
- [Date]: [Action] due — reminder to [Owner]
```

## Constraints

- All messages are DRAFTS — never send directly
- Match the language of the original minutes
- Include enough context in each message that the recipient doesn't need to read the full minutes
- If assignee names are ambiguous, ask for clarification
