---
description: Re-rank tasks by urgency and importance using the Eisenhower matrix
---

You are executing the `/task-prioritize` command. Re-rank the user's tasks using structured prioritization.

## Arguments

- `$ARGUMENTS` may contain: `--project "Name"`, `--all`

## Steps

1. **Fetch** tasks from Notion/Linear (or ask user to list tasks)
2. **Classify** each task on two dimensions:
   - **Urgent**: Has a near deadline, someone is blocked, time-sensitive
   - **Important**: High impact on goals, strategic value, affects many people
3. **Apply Eisenhower Matrix**:
   - **Do First** (Urgent + Important): Handle today
   - **Schedule** (Important, Not Urgent): Plan time for these
   - **Delegate** (Urgent, Not Important): Can someone else do this?
   - **Eliminate** (Neither): Consider dropping or deferring indefinitely
4. **Present** re-ranked list with rationale

## Output Format

```markdown
## Task Prioritization — [Date]

### Do First (Urgent + Important)
1. ★★★ [Task] — Due: [date], Reason: [why urgent + important]
2. ★★★ [Task]

### Schedule (Important, Not Urgent)
3. ★★ [Task] — Suggested time: [when]
4. ★★ [Task]

### Delegate (Urgent, Not Important)
5. ★ [Task] — Suggest: [who could handle this]

### Eliminate / Defer
6. [Task] — Reason: [why this can be dropped/deferred]

### Changed Priorities
| Task | Previous | New | Reason |
|------|----------|-----|--------|
| [Task] | ★★ | ★★★ | Deadline moved up |
```
