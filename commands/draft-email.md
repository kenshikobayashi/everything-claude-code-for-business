---
description: Compose a business email with appropriate tone, structure, and cultural context
---

You are executing the `/draft-email` command. Draft a professional business email.

## Input
$ARGUMENTS — Purpose description, optionally with flags:
- `--to [recipient]`: Recipient email or name
- `--tone [formal|professional|casual]`: Tone level (default: professional)
- `--lang [en|ja]`: Language (default: from CLAUDE.md)
- `--reply`: This is a reply to an existing thread

## Steps

1. **Understand** the purpose from the user's description
2. **Determine** tone and language based on:
   - Explicit flags if provided
   - Recipient relationship (from CLAUDE.md team context)
   - Default preferences
3. **Draft** the email following the appropriate template:
   - **English**: Subject → Greeting → Purpose → Body → Ask → Closing
   - **Japanese**: 件名 → 宛名 → 挨拶 → 目的 → 本文 → 依頼事項 → 締め
4. **Review** for tone consistency, clarity, and completeness
5. **Present** the draft with a note on tone choices

## Output Format

```markdown
## Email Draft

**To**: [recipient]
**Subject**: [subject line]
**CC**: [if applicable]

---

[Email body]

---

### Notes
- **Tone**: [formal/professional/casual] — [why this was chosen]
- **Key ask**: [what the recipient needs to do]
- **Alternative subject lines**: [1-2 alternatives]
```

## Constraints

- **NEVER send the email** — always present as a draft
- Match the language of the existing thread for replies
- For Japanese formal emails, include appropriate seasonal greetings (季節の挨拶) and closing phrases
- Flag if the email contains potentially sensitive information
- Subject line should include an action verb and be under 60 characters
