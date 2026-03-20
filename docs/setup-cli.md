# CLI Setup Guide

Complete guide to installing and configuring Everything Claude Code for Business with the Claude Code CLI.

## Prerequisites

- **Claude Code CLI** installed ([install guide](https://docs.anthropic.com/en/docs/claude-code))
- **Node.js 18+** (for hooks and scripts)
- **Git** (for cloning the repository)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business
```

### Step 2: Install the Plugin

**Option A: Plugin Marketplace (recommended)**

```bash
# From within Claude Code
/plugin install everything-claude-code-for-business
```

**Option B: Local Install**

```bash
# Run the installer script
./install.sh
```

The installer will:
1. Copy agents to `~/.claude/agents/`
2. Copy skills to `~/.claude/skills/`
3. Copy commands to `~/.claude/commands/`
4. Copy rules to `~/.claude/rules/`
5. Set up hooks in `~/.claude/hooks/`

**Option C: Manual Install (selective)**

If you only need specific components, copy them individually:

```bash
# Example: install only meeting-related commands
cp commands/meeting-prep.md ~/.claude/commands/
cp commands/meeting-minutes.md ~/.claude/commands/
cp commands/meeting-followup.md ~/.claude/commands/

# Example: install only the chief-of-staff agent
cp agents/chief-of-staff.md ~/.claude/agents/
```

### Step 3: Configure MCP Servers

MCP servers connect Claude Code to external services. Configure them in your project's `.mcp.json` or global `~/.claude.json`.

**Project-level (`.mcp.json` in your project root):**

```json
{
  "mcpServers": {
    "google-calendar": {
      "type": "connector",
      "connector_id": "google-calendar"
    },
    "gmail": {
      "type": "connector",
      "connector_id": "gmail"
    },
    "slack": {
      "type": "connector",
      "connector_id": "slack"
    },
    "notion": {
      "type": "connector",
      "connector_id": "notion"
    }
  }
}
```

**Global (`~/.claude.json`):**

Add the same `mcpServers` block to your global config for cross-project access.

### Step 4: Set Up Your CLAUDE.md

Create or update your project's `CLAUDE.md` with your personal context:

```markdown
# Business Context

## User
- Name: Your Name
- Email: your@email.com
- Company: Your Company
- Role: Your Role
- Timezone: Your/Timezone

## MCP Integrations
- Gmail: your@email.com
- Google Calendar: primary
- Slack: your-workspace
- Notion: your-database-ids

## Preferences
- Language: English (or Japanese, etc.)
- Email tone: Professional / Casual / Formal
- Draft policy: Always create drafts, never auto-send
```

### Step 5: Verify Installation

```bash
claude

# Test a command
> /briefing

# List available commands
> /help
```

## Directory Structure After Installation

```
~/.claude/
├── agents/
│   ├── chief-of-staff.md
│   ├── business-analyst.md
│   ├── meeting-facilitator.md
│   └── ... (15 agents)
├── skills/
│   ├── email-writing/
│   ├── meeting-design/
│   ├── market-research/
│   └── ... (20 skill categories)
├── commands/
│   ├── briefing.md
│   ├── meeting-prep.md
│   ├── draft-email.md
│   └── ... (25 commands)
├── rules/
│   ├── common/
│   │   ├── communication-style.md
│   │   ├── confidentiality.md
│   │   └── output-quality.md
│   └── ...
└── hooks/
    └── hooks.json
```

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ECCB_LANGUAGE` | Output language (`en`, `ja`) | `en` |
| `ECCB_DRAFT_ONLY` | Never auto-send messages | `true` |
| `ECCB_DISABLED_HOOKS` | Comma-separated hooks to disable | (none) |

### Settings (`~/.claude/settings.json`)

```json
{
  "permissions": {
    "allow": [
      "mcp__google-calendar__*",
      "mcp__gmail__*",
      "mcp__slack__*",
      "mcp__notion__*"
    ]
  }
}
```

## Updating

```bash
cd everything-claude-code-for-business
git pull
./install.sh --update
```

## Uninstalling

```bash
./install.sh --uninstall
```

Or manually remove the installed files from `~/.claude/`.

## Troubleshooting

### Commands not showing up

1. Check that files are in `~/.claude/commands/`:
   ```bash
   ls ~/.claude/commands/
   ```
2. Restart Claude Code session
3. Verify the command file has valid YAML frontmatter

### MCP server not connecting

1. Check your `.mcp.json` syntax:
   ```bash
   cat .mcp.json | python3 -m json.tool
   ```
2. Verify the service is authenticated:
   ```bash
   claude
   > /mcp
   ```
3. Re-authorize the connector if needed

### Hooks not firing

1. Verify `hooks.json` is valid:
   ```bash
   cat ~/.claude/hooks/hooks.json | python3 -m json.tool
   ```
2. Check that Node.js 18+ is installed:
   ```bash
   node --version
   ```
3. Ensure hook scripts have execute permissions:
   ```bash
   chmod +x scripts/hooks/*.js
   ```

## Next Steps

- [Configuration Guide](configuration.md) — Customize skills, rules, and hooks
- [Skills & Commands Reference](reference.md) — Detailed documentation for every command
- [Examples](examples.md) — Role-based CLAUDE.md templates
