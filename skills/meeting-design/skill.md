---
name: meeting-design
description: Meeting architecture — agenda design, time boxing, decision protocols, async alternatives
triggers:
  - meeting
  - agenda
  - 会議
---

# Meeting Design Skill

## When to Use

When planning, structuring, or improving any business meeting.

## Core Principles

1. **Every meeting needs a purpose**: Inform, Discuss, or Decide — pick one primary goal
2. **No agenda, no meeting**: If you can't write an agenda, it's not ready to be a meeting
3. **Right people, right duration**: Invite only decision-makers and contributors. Default to 25min (not 30) or 50min (not 60).
4. **Async first**: Consider if this could be a Slack thread or document instead

## Meeting Types

| Type | Purpose | Duration | Format |
|------|---------|----------|--------|
| **Decision** | Make a specific decision | 25-50min | Present options → discuss → decide |
| **Status** | Share progress, surface blockers | 15-25min | Round-robin updates → blockers |
| **Brainstorm** | Generate ideas | 25-50min | Silent brainstorm → share → group |
| **1-on-1** | Relationship, coaching, feedback | 25-30min | Check-in → topics → action items |
| **Kickoff** | Align on new project/initiative | 50min | Context → goals → roles → next steps |

## Agenda Template

```markdown
## [Meeting Title]
**Date**: [Date] [Time] ([Duration])
**Purpose**: [Inform / Discuss / Decide]: [specific goal]
**Attendees**: [Names — only people who need to be there]
**Pre-read**: [Link to any required reading]

### Agenda
| Time | Topic | Owner | Goal |
|------|-------|-------|------|
| 0:00 | Check-in | All | Warm up |
| 0:05 | [Topic 1] | [Name] | Inform |
| 0:15 | [Topic 2] | [Name] | Discuss |
| 0:35 | [Topic 3] | [Name] | Decide |
| 0:45 | Action items & next steps | Facilitator | Align |

### Decision Protocol
- How will we decide? [Consensus / Majority / Owner decides after input]
- What if we can't decide today? [Defer to [person] / schedule follow-up]
```

## Time Boxing Rules

- **Check-in**: 2-5 minutes, never more
- **Inform**: 5 minutes per topic, use documents for detail
- **Discuss**: 10-15 minutes per topic, use a timer
- **Decide**: 5 minutes per decision after discussion
- **Buffer**: Reserve last 5 minutes for action items and next steps

## Decision Protocols

1. **Consensus**: Everyone agrees (use for high-stakes, irreversible decisions)
2. **Consent**: No one objects (use for most decisions — faster than consensus)
3. **Advisory**: Owner decides after hearing input (use when one person is accountable)
4. **Vote**: Majority wins (use when options are clear and stakes are moderate)

## When NOT to Meet

| Instead of... | Try... |
|---------------|--------|
| Status update meeting | Async Slack update or standup bot |
| FYI announcement | Email or Slack post |
| 1-on-1 for a quick question | Slack DM |
| Brainstorm with 10+ people | Async brainstorm doc → small group discussion |
| Meeting to schedule a meeting | Use a scheduling tool |

## Anti-Patterns

- **No agenda**: If you can't define the purpose, cancel the meeting
- **Too many attendees**: >8 people makes decision-making nearly impossible
- **No time limit on topics**: Discussions expand to fill available time — use a timer
- **No action items**: A meeting without action items was probably unnecessary
- **Default 60 minutes**: Most meetings should be 25-30 minutes

## Checklist

- [ ] Clear purpose defined (Inform/Discuss/Decide)
- [ ] Agenda shared in advance
- [ ] Only necessary attendees invited
- [ ] Duration is intentional (not default 60min)
- [ ] Decision protocol specified
- [ ] Pre-read materials shared (if any)
- [ ] Action item capture plan in place
