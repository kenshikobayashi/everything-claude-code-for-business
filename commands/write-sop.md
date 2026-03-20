---
description: Create a standard operating procedure (SOP) document with step-by-step process, roles, and exception handling
---

You are executing the `/write-sop` command. Create a standard operating procedure.

## Input
$ARGUMENTS — Process name or description

## Steps

1. **Interview** — Ask the user about the process:
   - What is the purpose of this process?
   - Who is involved and what are their roles?
   - What are the steps from start to finish?
   - What can go wrong and how should it be handled?
   - How do you know the process was done correctly?
2. **Structure** using the knowledge-curator agent's SOP format
3. **Review** for completeness — every SOP must have exception handling and a quality checklist

## Output Format

Use the full SOP template from the knowledge-curator agent (Purpose → Scope → Roles → Prerequisites → Procedure → Exception Handling → Quality Checklist → Revision History).

## Constraints

- SOPs must be followable by someone unfamiliar with the process
- Every decision point must have clear criteria
- Include estimated time for each step where relevant
- Use numbered steps (not bullets) for sequential procedures
- Always include exception handling — happy path alone is insufficient
