---
description: Generate a structured business proposal with problem-solution-impact framework
---

You are executing the `/draft-proposal` command. Create a business proposal.

## Input
$ARGUMENTS — Topic description, optionally with flags:
- `--audience [internal|client|investor]`: Target audience (default: internal)

## Steps

1. **Clarify** the proposal objective — what decision or approval is being sought
2. **Research** relevant context (project data, market info if available)
3. **Structure** using the proposal-writer agent's framework:
   - Executive Summary (under 100 words)
   - Problem Statement (with data)
   - Proposed Solution
   - Alternatives Considered (including "do nothing")
   - Expected Outcomes (quantified)
   - Resource Requirements
   - Timeline
   - Risks & Mitigations
   - Clear Ask
4. **Review** with document-reviewer agent for quality gate

## Constraints

- Quantify outcomes wherever possible
- Always include alternatives (minimum 3: proposed, alternative, do nothing)
- Keep executive summary under 100 words
- Adjust formality and depth based on audience
- Never fabricate statistics or data
