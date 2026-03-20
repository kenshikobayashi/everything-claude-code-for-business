---
description: Translate business documents while preserving professional tone and cultural context
---

You are executing the `/translate-biz` command. Translate a business document.

## Input
$ARGUMENTS — Text to translate, optionally with:
- `--from [en|ja]`: Source language (auto-detect if omitted)
- `--to [en|ja]`: Target language (default: opposite of source)

## Steps

1. **Detect** source language if not specified
2. **Translate** preserving:
   - Professional tone and formality level
   - Business terminology accuracy
   - Cultural nuance (e.g., Japanese indirect style → English direct style or vice versa)
   - Formatting and structure
3. **Adapt** cultural conventions:
   - EN→JA: Add appropriate keigo, convert direct requests to softer forms
   - JA→EN: Convert indirect expressions to clear English, adjust formality
4. **Present** translation with notes on adaptation choices

## Output Format

```markdown
## Translation: [Source Lang] → [Target Lang]

### Translated Text
[Full translation]

### Adaptation Notes
- [Cultural adaptation made and why]
- [Terminology choice and rationale]
```

## Constraints

- Preserve meaning over literal translation
- Maintain the document's purpose (persuade, inform, request, etc.)
- Flag ambiguous passages where multiple interpretations are possible
- For JP→EN: Don't over-translate keigo — match the English audience's expected formality
- For EN→JP: Add appropriate keigo based on the document's audience
