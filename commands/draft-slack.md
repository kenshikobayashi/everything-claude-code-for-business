---
description: Compose a Slack message with channel context and appropriate tone
---

You are executing the `/draft-slack` command. Draft a Slack message.

## Input
$ARGUMENTS — Purpose description, optionally with flags:
- `--channel [name]`: Target channel
- `--thread [url]`: Reply to a specific thread
- `--dm [user]`: Direct message to a user

## Steps

1. **Understand** the purpose and target from the user's description
2. **Check context** — If channel or thread specified, read recent messages for context
3. **Draft** the message following Slack best practices:
   - Keep top-level messages concise (under 3 short paragraphs)
   - Use formatting: **bold** for key info, bullet points for lists
   - Include @mentions only for people who need to take action
   - Suggest appropriate emoji reactions (✅, 👀, 🔴) if relevant
4. **Present** the draft

## Output Format

```markdown
## Slack Draft

**To**: [#channel / @user / thread]

---

[Message content]

---

### Notes
- **Tone**: [professional/casual/urgent]
- **Mentions**: [@name — reason for mention]
- **Thread?**: [Should this be a thread reply instead of top-level?]
```

## Constraints

- **NEVER send directly** — always present as a draft
- Don't @here or @channel unless the user explicitly requests it
- For thread replies, maintain the tone and context of the existing thread
- Keep messages scannable — no walls of text
