# CLI Setup Guide

Complete guide to installing and configuring Everything Claude Code for Business with the Claude Code CLI.

## Prerequisites

- **Claude Code CLI** installed ([install guide](https://docs.anthropic.com/en/docs/claude-code))
- **Node.js 18+** (for hooks and scripts)
- **Git** (for manual install only — not needed for plugin system install)

### Installing Git

If you don't have Git installed and want to use the manual install method:

**macOS:**
```bash
# Git is included with Xcode Command Line Tools
xcode-select --install

# Or via Homebrew
brew install git
```

**Windows:**
Download and install from [git-scm.com/download/win](https://git-scm.com/download/win)

**Linux (Ubuntu/Debian):**
```bash
sudo apt update && sudo apt install git
```

Verify installation:
```bash
git --version
```

## Installation

### Step 1: Install via Plugin System (recommended)

Open Claude Code and run the following commands:

```bash
# 1. Add the repository as a marketplace source
/plugin marketplace add kenshikobayashi/everything-claude-code-for-business

# 2. Install the plugin
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business
```

#### Installation Scope

You can control where the plugin is installed using `--scope`:

```bash
# User scope (default) — available across all projects
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business --scope user

# Project scope — shared with team via version control (.claude/settings.json)
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business --scope project

# Local scope — only for you in this repo (gitignored)
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business --scope local
```

#### Managing the Plugin

```bash
/plugin                    # Open interactive plugin manager
/plugin update ...         # Update to latest version
/plugin disable ...        # Temporarily disable
/plugin enable ...         # Re-enable
/plugin uninstall ...      # Remove completely
/reload-plugins            # Apply changes without restarting
```

### Step 2: Alternative — Manual Install

If you prefer not to use the plugin system, you can install manually:

**Option A: Installer Script**

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business
./install.sh
```

The installer copies agents, skills, rules, and hooks to `~/.claude/`.

**Option B: Selective Copy**

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business

# Example: install only meeting-related skills
cp -r skills/meeting-prep/ ~/.claude/skills/
cp -r skills/meeting-minutes/ ~/.claude/skills/
cp -r skills/meeting-followup/ ~/.claude/skills/

# Example: install only the chief-of-staff agent
cp agents/chief-of-staff.md ~/.claude/agents/
```

### Step 3: Configure MCP Servers

MCP servers connect Claude Code to external services. Configure them in your project's `.mcp.json`.

**Easiest method: Use Claude Desktop Connectors UI**

If you use Claude Desktop, click **[+] → Connectors** and connect services through OAuth. The configuration is automatically saved and shared with the CLI.

**Manual configuration (`.mcp.json` in your project root):**

Each MCP server has its own setup. Add entries to `.mcp.json` following the server's documentation:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server-name"]
    }
  }
}
```

Refer to each MCP server's documentation for exact configuration:
- [Google Calendar MCP](https://github.com/anthropics/anthropic-tools)
- [Gmail MCP](https://github.com/anthropics/anthropic-tools)
- [Slack MCP](https://github.com/anthropics/anthropic-tools)
- [Notion MCP](https://github.com/anthropics/anthropic-tools)

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
│   ├── briefing/
│   │   └── SKILL.md
│   ├── email-writing/
│   │   └── SKILL.md
│   ├── meeting-prep/
│   │   └── SKILL.md
│   └── ... (slash commands + domain knowledge skills)
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

**Plugin system:**
```bash
/plugin update everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business
```

**Manual install:**
```bash
cd everything-claude-code-for-business
git pull
./install.sh --update
```

## Uninstalling

**Plugin system:**
```bash
/plugin uninstall everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business
```

**Manual install:**
```bash
./install.sh --uninstall
```

Or manually remove the installed files from `~/.claude/`.

## Troubleshooting

### Skills not showing up

1. Check that skill directories are in `~/.claude/skills/`:
   ```bash
   ls ~/.claude/skills/
   ```
2. Restart Claude Code session
3. Verify the SKILL.md file has valid YAML frontmatter

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
- [Skills Reference](reference.md) — Detailed documentation for every skill and command
- [Examples](examples.md) — Role-based CLAUDE.md templates
