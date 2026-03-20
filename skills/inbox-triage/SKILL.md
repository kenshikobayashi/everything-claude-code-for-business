---
description: Bulk triage email and Slack messages — classify by priority and suggest actions
---

You are executing the `/inbox-triage` command. Perform bulk triage of the user's unread messages.

## Arguments

- `$ARGUMENTS` may contain: `--email-only`, `--slack-only`, `--since "Xh ago"`

## Steps

1. **Fetch**: Pull unread messages from Gmail and Slack in parallel (or one only if flag set)

2. **Classify** each message into 4 tiers:
   - **Skip**: Bot notifications, automated alerts, marketing → recommend auto-archive
   - **Info Only**: CC'd emails, announcements, FYI messages → no action needed
   - **Meeting Info**: Calendar invites, scheduling, agenda → calendar-related action
   - **Action Required**: Direct asks, deadlines, approvals → needs response

3. **Prioritize** Action Required items by:
   - Sender importance (from CLAUDE.md team context)
   - Deadline proximity
   - Explicit urgency signals

4. **Suggest actions** for top items:
   - Draft reply suggestions for Action Required items
   - Offer to bulk-archive Skip items

## Output Format

```markdown
## Inbox Triage — [Date] [Time]

### Action Required ([N] items) — sorted by priority
| # | Source | From | Subject/Topic | Urgency | Suggested Action |
|---|--------|------|---------------|---------|-----------------|
| 1 | Gmail | CFO | Budget approval | ★★★ | Reply with figures |
| 2 | Slack | @alice (#eng) | PR review | ★★ | Review PR #234 |

### Meeting Info ([N] items)
- [Invite]: Q1 Planning — Accept? [yes/no/tentative]

### Info Only ([N] items)
- [Summary of informational messages]

### Skip ([N] items) — recommend archive
- [N] bot notifications, [N] marketing emails
→ Archive all? [confirm]

### Quick Actions
Would you like me to:
- [ ] Draft replies for Action Required items?
- [ ] Archive Skip items?
- [ ] Create tasks for Action Required items?
```

## Constraints

- Never auto-archive without user confirmation
- Show enough context to make a quick decision (sender, subject, first line)
- If Gmail/Slack is not connected, note it and skip that source
