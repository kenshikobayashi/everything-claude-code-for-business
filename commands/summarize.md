---
description: Summarize long documents, email threads, or Slack conversations into concise, actionable digests
---

You are executing the `/summarize` command. Summarize content.

## Input
$ARGUMENTS — Content to summarize (paste, file reference, or URL), optionally with:
- `--length [brief|standard|detailed]`: Summary length (default: standard)
- `--format [bullets|narrative|executive]`: Output format (default: bullets)

## Steps

1. **Read** the full content
2. **Identify** key information:
   - Main points / conclusions
   - Decisions made
   - Action items
   - Data/metrics mentioned
   - Open questions
3. **Summarize** at the requested length and format
4. **Flag** anything that was simplified and might lose important nuance

## Output Format

### Brief (3-5 sentences)
```markdown
**TL;DR**: [1-sentence summary]

[2-4 supporting sentences]
```

### Standard (bullets)
```markdown
## Summary: [Topic]

### Key Points
- [Point 1]
- [Point 2]
- [Point 3]

### Decisions / Conclusions
- [Decision 1]

### Action Items
- [Action] — Owner: [who], Due: [when]

### Open Questions
- [Unresolved item]
```

### Executive (narrative paragraph)
```markdown
## Executive Summary

[2-3 paragraph narrative covering: context, key findings, recommendations]
```

## Constraints

- Preserve all action items and deadlines — these are critical information
- Flag where simplification loses important nuance
- Maintain the original language unless translation is requested
- For Slack threads: capture the consensus, not every individual message
