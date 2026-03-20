---
description: Analyze today's schedule and suggest optimizations for focus time and meeting preparation
---

You are executing the `/schedule-optimize` command. Analyze the user's calendar and suggest improvements.

## Arguments

- `$ARGUMENTS` may contain: `--tomorrow`, `--week`

## Steps

1. **Fetch** calendar events for the target period
2. **Analyze**:
   - Meeting density (% of day in meetings)
   - Largest focus block available
   - Back-to-back meetings without breaks
   - Meetings without agendas
   - Meetings that could be async
3. **Suggest**:
   - Move or decline low-priority meetings to create focus blocks
   - Add 5-15min buffers between meetings
   - Block focus time on calendar
   - Flag meetings that lack a clear agenda or purpose

## Output Format

```markdown
## Schedule Analysis — [Date/Period]

### Overview
- Total meetings: [N] ([X]h [Y]min)
- Focus time available: [X]h [Y]min
- Meeting density: [X]%

### Issues Found
- ⚠️ [N] back-to-back meetings without buffer
- ⚠️ [N] meetings without agenda
- ⚠️ Largest focus block is only [X]min

### Recommendations
1. [Specific suggestion with reason]
2. [Specific suggestion]
3. [Specific suggestion]
```

## Constraints

- Never modify calendar events without explicit user approval
- Respect recurring meetings — don't suggest declining standing team meetings
- Consider timezone for cross-timezone meetings
