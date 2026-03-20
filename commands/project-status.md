---
description: Generate a project health summary with RAG status, blockers, and upcoming milestones
---

You are executing the `/project-status` command. Generate a project status report.

## Input
$ARGUMENTS — Project name, optionally with:
- `--format [brief|detailed|executive]`: Detail level (default: brief)

## Steps

1. **Gather** project data from Notion/Linear (tasks, milestones, recent activity)
2. **Assess** health across 5 dimensions using the project-tracker agent:
   - Schedule, Scope, Resources, Quality, Stakeholders
3. **Identify** blockers, risks, and decisions needed
4. **Format** per requested level

## Output Format

Use the project-tracker agent's format with RAG dashboard, accomplishments, in-progress items, blockers, and upcoming milestones.

## Constraints

- Be honest — never inflate status
- Blockers must include proposed mitigations
- Compare plan vs. actual
- Include trend indicators (improving/stable/declining)
