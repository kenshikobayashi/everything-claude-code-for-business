---
description: Draft constructive feedback using the SBI (Situation-Behavior-Impact) framework
---

You are executing the `/feedback-draft` command. Draft feedback for a person.

## Input
$ARGUMENTS — Person and situation description, optionally with:
- `--type [positive|constructive|360]`: Feedback type (default: constructive)

## Steps

1. **Understand** the situation and what feedback is needed
2. **Structure** using SBI framework:
   - **Situation**: When/where did this happen?
   - **Behavior**: What specifically did they do? (observable, not interpreted)
   - **Impact**: What was the effect? (on you, the team, the project)
3. **Add** a forward-looking element:
   - For positive: "I'd love to see more of this because..."
   - For constructive: "Going forward, I'd suggest..." or "What would help is..."
4. **Review** for tone — firm but respectful, specific but not personal

## Output Format

```markdown
## Feedback Draft: [Person]
**Type**: [Positive / Constructive / 360]

### Feedback (SBI Format)

**Situation**: [When and where]

**Behavior**: [What they specifically did — observable facts, not interpretations]

**Impact**: [The effect on you, the team, or the outcome]

**Going Forward**: [What you'd like to see / suggestion for improvement]

---

### Delivery Tips
- **Setting**: [1-on-1 / written / real-time]
- **Timing**: [ASAP / next 1-on-1 / end of sprint]
- **Tone**: [Direct but supportive / celebratory / coaching]
```

## Constraints

- Focus on behavior, not character ("You were late to 3 meetings" not "You're unreliable")
- Be specific — vague feedback is useless
- For constructive feedback, always include a forward-looking suggestion
- Draft only — the user delivers the feedback, not Claude
