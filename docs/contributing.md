# Contributing Guide

How to add new agents, skills, and rules to Everything Claude Code for Business.

## File Formats

### Agents

Agents are specialized sub-agents defined as Markdown files with YAML frontmatter.

**Location**: `agents/`

**Format**:

```markdown
---
name: agent-name
description: One-line description of what this agent does
tools: ["Read", "Grep", "WebFetch", "WebSearch"]
model: sonnet
---

# Agent Name

## Role
Clear statement of the agent's purpose and expertise.

## Capabilities
- What the agent can do
- What tools it uses
- What output it produces

## Workflow
1. Step 1: ...
2. Step 2: ...
3. Step 3: ...

## Output Format
Description of expected output structure.

## Constraints
- What the agent should NOT do
- Boundaries and limitations
```

**Naming**: `lowercase-with-hyphens.md` (e.g., `meeting-facilitator.md`)

---

### Skills

Skills are the unified component type for all functionality — both slash commands (e.g., `/briefing`) and domain knowledge packages (e.g., email-writing). All skills live in `skills/{skill-name}/SKILL.md`.

**Location**: `skills/{skill-name}/SKILL.md`

**Format**:

```markdown
---
name: skill-name
description: One-line description
triggers:
  - keyword or pattern that activates this skill
---

# Skill Name

## When to Use
Describe the situations where this skill applies.

## Core Principles
- Principle 1
- Principle 2

## Patterns

### Pattern Name
**When**: Situation description
**How**: Implementation approach
**Example**:
```
Concrete example
```

## Anti-Patterns
- What to avoid and why

## Checklist
- [ ] Quality check item 1
- [ ] Quality check item 2
```

**Naming**: Directory name = skill name, always `SKILL.md` inside (e.g., `skills/email-writing/SKILL.md`)

---

### Rules

Rules are always-active guidelines that constrain behavior.

**Location**: `rules/{category}/`

**Format**:

```markdown
# Rule Category: Rule Name

## Always
- Do this
- Do that

## Never
- Don't do this
- Don't do that

## When [situation]
- Apply this specific behavior
```

**Naming**: `lowercase-with-hyphens.md` (e.g., `rules/common/communication-style.md`)

---

## Adding a New Component

### 1. New Skill (Slash Command or Domain Knowledge)

```bash
# Create skill directory and file
mkdir -p skills/my-skill
touch skills/my-skill/SKILL.md
```

Edit with frontmatter:
```markdown
---
name: my-skill
description: What this skill does in one line
---

# Skill instructions...
```

Test (if it's a slash command):
```
claude
> /my-skill "test argument"
```

### 2. New Agent

```bash
touch agents/my-agent.md
```

### 3. New Rule

```bash
touch rules/common/my-rule.md
```

---

## Quality Checklist

Before submitting a PR:

- [ ] **Naming**: Files use `lowercase-with-hyphens`
- [ ] **Frontmatter**: Valid YAML with required fields (`name`, `description`)
- [ ] **Language**: English + Japanese versions if applicable
- [ ] **No secrets**: No API keys, tokens, or personal information
- [ ] **Draft policy**: Skills never auto-send — always create drafts
- [ ] **Tested**: Skill works in both CLI and Desktop
- [ ] **Documentation**: Updated reference docs if adding new skills

## Code Style

- Markdown files: No trailing whitespace, single newline at EOF
- YAML frontmatter: 2-space indentation
- Agent/skill descriptions: Imperative mood ("Generate report" not "Generates report")
- Japanese text: Use standard business Japanese (ビジネス日本語)

## PR Template

```markdown
## What
[One-line description]

## Type
- [ ] New skill (slash command or domain knowledge)
- [ ] New agent
- [ ] New rule
- [ ] Bug fix
- [ ] Documentation

## Testing
- [ ] Tested in CLI
- [ ] Tested in Desktop
- [ ] Tested with Japanese locale
- [ ] Tested with English locale

## Checklist
- [ ] Follows file naming conventions
- [ ] Has valid frontmatter
- [ ] No hardcoded personal information
- [ ] Respects draft-only policy
- [ ] Reference docs updated
```
