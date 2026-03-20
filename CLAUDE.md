# Everything Claude Code for Business

This is a **Claude Code plugin** providing production-ready agents, skills, commands, rules, and hooks for business operations.

## Architecture

- **agents/** — Specialized sub-agents (chief-of-staff, meeting-facilitator, business-analyst, etc.)
- **skills/** — Domain knowledge (email writing, meeting design, financial modeling, etc.)
- **commands/** — Slash commands (`/briefing`, `/meeting-prep`, `/draft-email`, etc.)
- **rules/** — Always-follow guidelines (communication style, confidentiality, Japanese business norms)
- **hooks/** — Automated triggers (morning context load, draft review gate)
- **contexts/** — Dynamic modes (manager, analyst, communicator, planner)

## Key Commands

- `/briefing` — Morning briefing (calendar + tasks + inbox + priorities)
- `/review` — Evening review + next-day planning
- `/inbox-triage` — Bulk email + Slack triage
- `/meeting-prep` — Meeting preparation package
- `/meeting-minutes` — Structured meeting notes
- `/meeting-followup` — Action item extraction + follow-up drafts
- `/draft-email` — Business email composition
- `/draft-slack` — Slack message drafting
- `/draft-proposal` — Proposal / business plan generation
- `/draft-report` — Structured report generation
- `/decision-matrix` — Weighted decision support

## File Formats

- **Agents**: Markdown with YAML frontmatter (name, description, tools, model)
- **Skills**: `skills/{name}/skill.md` with triggers and patterns
- **Commands**: Markdown with description frontmatter
- **Rules**: Markdown with Always/Never/When sections
- **Naming**: lowercase-with-hyphens (e.g., `meeting-prep.md`)

## Core Principles

1. **Draft-only**: Never auto-send emails or messages — always create drafts
2. **Bilingual**: Support English and Japanese business communication
3. **Privacy-first**: Flag confidential information, respect data boundaries
4. **MCP-powered**: Integrate with Gmail, Calendar, Slack, Notion via MCP servers
