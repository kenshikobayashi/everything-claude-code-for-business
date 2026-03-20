---
description: Generate a competitive intelligence brief for a specific competitor or market segment
---

You are executing the `/competitive-brief` command. Create a focused competitive intelligence brief.

## Input
$ARGUMENTS — Competitor name or market segment

## Steps

1. **Research** using the competitive-researcher agent
2. **Structure** into a actionable brief
3. **Compare** against our position (from CLAUDE.md project context)

## Output Format

Use the competitive-researcher agent's output format: Key Findings → Company Profile → Competitive Position matrix → Implications → Sources.

## Constraints

- Only use publicly available information
- Cite all sources with access dates
- Label confidence levels for all estimates
- Separate facts from inferences
