# Claude Desktop Setup Guide

Complete guide to installing and using Everything Claude Code for Business with **Claude Desktop** (the desktop application) — no CLI required.

## Overview

Claude Desktop provides a graphical interface for Claude Code with full support for plugins, skills, MCP servers, and CLAUDE.md project instructions. All features of this plugin work in Desktop, with the exception of agent teams (CLI-only).

### Desktop vs CLI Feature Comparison

| Feature | CLI | Desktop |
|---------|-----|---------|
| Slash commands (`/briefing`, etc.) | Yes | Yes |
| Skills (domain knowledge) | Yes | Yes |
| Agents (sub-agents) | Yes | Yes |
| CLAUDE.md project instructions | Yes | Yes (shared) |
| MCP servers (Gmail, Slack, etc.) | Yes | Yes |
| Hooks (automated triggers) | Yes | Yes |
| Rules (enforced guidelines) | Yes | Yes |
| Agent teams | Yes | No |
| Visual diff review | No | Yes |
| Parallel sessions (tabs) | Separate terminals | Yes |
| Scheduled tasks | External cron | Built-in UI |

## Prerequisites

- **Claude Desktop** installed (macOS or Windows)
  - Download from [claude.ai/download](https://claude.ai/download)
- **Git** (for cloning the repository)

## Installation

### Step 1: Clone the Repository

Open Terminal (macOS) or PowerShell (Windows) and run:

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
```

Note the full path where you cloned the repository. You'll need it in Step 2.

### Step 2: Open as a Project in Claude Desktop

1. Open **Claude Desktop**
2. Open the **Code** tab (left sidebar)
3. Click **Open folder** or drag the cloned folder into the window
4. Claude Desktop will automatically detect and load:
   - `CLAUDE.md` (project instructions)
   - `.claude/` directory (skills, hooks, rules)
   - `.mcp.json` (MCP server configurations)

### Step 3: Install the Plugin

1. Click the **[+]** button next to the prompt input
2. Select **Plugins**
3. Click **Add from path...**
4. Navigate to the cloned repository folder and select it
5. The plugin will be installed and its components registered

After installation, you should see the plugin's commands when you:
- Click **[+]** → **Slash commands**
- Or type `/` in the prompt box

### Step 4: Connect MCP Servers (External Tools)

MCP servers enable Claude to interact with Gmail, Google Calendar, Slack, Notion, and other services.

**Method A: Connectors UI (easiest)**

1. Click the **[+]** button next to the prompt
2. Select **Connectors**
3. You'll see available services. Click to connect:
   - **Google Calendar** — for schedule awareness
   - **Gmail** — for email triage and drafting
   - **Slack** — for message triage and drafting
   - **Notion** — for task and knowledge management
4. Follow the OAuth flow to authorize each service

**Method B: Configuration File**

Create `.mcp.json` in your project root:

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

> **Important**: Do NOT use `claude_desktop_config.json` for MCP servers — that file is for the Claude chat app, not Claude Code in Desktop. Use `.mcp.json` (project) or `~/.claude.json` (global) instead.

### Step 5: Set Up Your CLAUDE.md

Create `CLAUDE.md` in your project root (or edit the existing one):

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

## Preferences
- Language: English
- Draft policy: Always create drafts, never auto-send
```

### Step 6: Verify Installation

1. In the prompt box, type `/` to see available slash commands
2. You should see commands like `/briefing`, `/meeting-prep`, `/draft-email`, etc.
3. Try running:
   ```
   /briefing
   ```

## Using the Plugin in Desktop

### Running Commands

Type `/` in the prompt box or click **[+]** → **Slash commands** to see all available commands.

**Examples:**

```
/briefing
```
→ Morning briefing with calendar, tasks, inbox, and priorities

```
/meeting-prep "Q1 Planning Meeting"
```
→ Generates a preparation package for the specified meeting

```
/draft-email "Reply to CFO about budget approval"
```
→ Creates an email draft with appropriate tone and structure

### Switching Contexts

You can ask Claude to adopt a specific operating mode by referencing the context files in `contexts/`. Simply tell Claude the mode you want:

```
Please switch to manager mode
```
→ Claude loads `contexts/manager.md` — focuses on delegation, status tracking, team communication

```
Please switch to analyst mode
```
→ Claude loads `contexts/analyst.md` — focuses on data, frameworks, structured analysis

Available modes: `manager`, `analyst`, `communicator`, `planner` (see `contexts/` directory)

### Working with Multiple Sessions

Claude Desktop supports parallel sessions in sidebar tabs. Use this for:

- **Tab 1**: Morning briefing and email triage
- **Tab 2**: Meeting preparation for the afternoon
- **Tab 3**: Working on a proposal document

Each tab maintains its own conversation history while sharing the same CLAUDE.md and MCP connections.

### Using Scheduled Tasks

> **Note**: Scheduled tasks availability depends on your Claude Desktop version. Check your sidebar for the task/schedule icon. If unavailable, use the CLI with external cron for recurring tasks.

If your Desktop version supports scheduled tasks:

1. Click the task icon in the sidebar
2. Create a new scheduled task
3. Set the schedule (e.g., every weekday at 8:30 AM)
4. Set the command (e.g., `/briefing`)

This enables automatic morning briefings without manual invocation.

## Desktop-Specific Tips

### Visual Diff Review

When Claude modifies documents, Desktop shows a visual diff. This is especially useful when:
- Reviewing drafts before sending
- Comparing proposal revisions
- Checking SOP updates

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd + /` (macOS) | Show slash commands |
| `Cmd + N` | New session tab |
| `Cmd + K` | Quick command palette |
| `Esc` | Cancel current generation |

### Permission Management

When Claude tries to access an MCP tool for the first time, Desktop will ask for permission. You can:
- **Allow once** — for this request only
- **Allow always** — remember this permission
- Manage permissions in Desktop settings

## File Locations

### macOS

```
~/.claude/                          # Claude Code config directory
~/.claude/settings.json             # Settings
~/.claude/skills/                   # Custom skills
~/.claude.json                      # Global MCP config

Project:
./CLAUDE.md                         # Project instructions
./.mcp.json                         # Project MCP servers
./.claude/                          # Project-specific config
```

### Windows

```
%APPDATA%\Claude\                   # Claude Code config directory
%APPDATA%\Claude\settings.json      # Settings
%APPDATA%\Claude\skills\            # Custom skills

Project:
.\CLAUDE.md                         # Project instructions
.\.mcp.json                         # Project MCP servers
.\.claude\                          # Project-specific config
```

## Updating the Plugin

1. Open Terminal / PowerShell
2. Navigate to the cloned repository
3. Pull the latest changes:
   ```bash
   git pull
   ```
4. Restart Claude Desktop or reload the project

## Troubleshooting

### Commands not showing up

1. Make sure the repository folder is opened as a project in Desktop
2. Click **[+]** → **Plugins** and verify the plugin is installed and enabled
3. Try reloading the project (close and reopen the folder)

### MCP server not connecting

1. Click **[+]** → **Connectors** and check connection status
2. If a service shows as disconnected, click it to re-authorize
3. Make sure you're using `.mcp.json` (not `claude_desktop_config.json`)

### Plugin loads but no skills/agents

1. Verify the plugin's directory structure is intact:
   ```
   everything-claude-code-for-business/
   ├── .claude-plugin/
   │   └── plugin.json        ← must exist
   ├── agents/                 ← must contain .md files
   └── skills/                 ← must contain subdirs with SKILL.md
   ```
2. Check `plugin.json` is valid JSON

### Desktop freezing or slow

- Reduce the number of active MCP connections
- Close unused session tabs
- Check if a hook script is hanging (disable with `ECCB_DISABLED_HOOKS`)

## Next Steps

- [Configuration Guide](configuration.md) — Customize for your workflow
- [Skills & Commands Reference](reference.md) — Full documentation
- [Examples](examples.md) — Role-based templates
