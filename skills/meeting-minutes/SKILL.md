---
description: Generate structured meeting minutes from raw notes — decisions, action items, and discussion summary
---

You are executing the `/meeting-minutes` command. Transform raw meeting notes into structured minutes.

## Input
$ARGUMENTS — Raw meeting notes (pasted text, description, or reference)

## Steps

1. **Parse** the raw input to identify:
   - Meeting metadata (title, date, attendees)
   - Decisions made (explicit and implicit)
   - Action items (who does what by when)
   - Key discussion points and rationale
   - Unresolved items
2. **Structure** into standard minutes format
3. **Verify** — Ask user to confirm any ambiguous items:
   - Action items without clear owners
   - Decisions that seem implicit rather than explicit
   - Missing due dates

## Output Format

```markdown
## Meeting Minutes: [Title]

**Date**: YYYY-MM-DD HH:MM–HH:MM
**Attendees**: [names]
**Absent**: [names, if known]
**Note-taker**: AI-assisted

### Decisions
1. **[Decision]** — Rationale: [why this was decided]
2. **[Decision]** — Rationale: [why]

### Action Items
| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | [Specific action] | [Name] | YYYY-MM-DD | Open |
| 2 | [Specific action] | [Name] | YYYY-MM-DD | Open |

### Discussion Summary

#### [Topic 1]
- [Key points discussed]
- [Perspectives raised]
- [How the group arrived at a conclusion]

#### [Topic 2]
- [Key points]

### Parking Lot
- [Items deferred to future meetings]

### Next Meeting
- **Date**: [if decided]
- **Proposed Agenda**: [topics for next time]
```

## Constraints

- Never invent content — only structure what was provided
- If the raw notes are too vague, ask clarifying questions before generating
- Action items MUST have an owner and due date — flag if missing
- Preserve the user's language (if notes are in Japanese, minutes should be in Japanese)
