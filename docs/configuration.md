# Configuration Guide

How to customize Everything Claude Code for Business for your workflow, team, and organization.

## Table of Contents

- [CLAUDE.md Configuration](#claudemd-configuration)
- [MCP Server Setup](#mcp-server-setup)
- [Rules Customization](#rules-customization)
- [Hooks Configuration](#hooks-configuration)
- [Contexts](#contexts)
- [Environment Variables](#environment-variables)
- [Permissions](#permissions)

---

## CLAUDE.md Configuration

`CLAUDE.md` is the primary way to personalize the plugin. Place it in your project root (or home directory for global settings).

### Minimal Configuration

```markdown
# Business Context

## User
- Name: Your Name
- Email: your@email.com
- Timezone: Your/Timezone

## Preferences
- Language: English
- Draft policy: Always create drafts, never auto-send
```

### Full Configuration

```markdown
# Business Context

## User
- Name: Your Name
- Email: your@email.com
- Company: Your Company Inc.
- Department: Engineering
- Role: Engineering Manager
- Slack User ID: UXXXXXXXXXX
- Timezone: America/New_York

## MCP Integrations
- Gmail: your@email.com
- Google Calendar: primary
- Slack: your-workspace (User ID: UXXXXXXXXXX)
- Notion: Task DB (collection://xxxx), Project DB (collection://yyyy)
- Linear: team-workspace

## Preferences
- Language: English
- Email tone: Professional (default)
- Slack tone: Casual (default)
- Draft policy: Always create drafts, never auto-send
- Meeting minutes format: Decisions → Actions → Discussion
- Report style: Executive summary first

## Team Context
- Direct reports: Alice (frontend), Bob (backend), Carol (data)
- Manager: Dave (VP Engineering)
- Key stakeholders: CFO (budget), CTO (technical direction)

## Project Context
- Active projects: Project Alpha (Q1 launch), Project Beta (research phase)
- Sprint cadence: 2-week sprints, Monday start
- Standup: Daily 09:00 (15min)

## Communication Rules
- Internal email: First name basis, professional tone
- External email: Full honorifics, formal tone
- Client communication: Always CC account manager
- Escalation: Direct Slack DM for urgent, email for non-urgent
```

### Japanese Business Configuration

```markdown
# Business Context

## User
- 名前: 田中 太郎
- メール: tanaka@example.co.jp
- 会社: テック株式会社 Engineering部
- Slack User ID: U0EXAMPLE01
- タイムゾーン: Asia/Tokyo

## MCP Integrations
- Gmail: tanaka@example.co.jp
- Google Calendar: primary (Asia/Tokyo)
- Slack: techco-workspace ワークスペース
- Notion: タスクDB (collection://xxxx)

## Preferences
- Language: 日本語
- メールトーン: ビジネス敬語（デフォルト）
- Slackトーン: 丁寧語（デフォルト）
- 下書きポリシー: 常に下書き作成、自動送信禁止

## 敬語ルール
- 社内（上司）: 丁寧語 + 尊敬語
- 社内（同僚）: 丁寧語
- 社外（クライアント）: 尊敬語 + 謙譲語
- 社外（ベンダー）: 丁寧語 + 尊敬語
```

---

## MCP Server Setup

### Google Calendar

Enables: schedule awareness, meeting prep, event creation

```json
{
  "mcpServers": {
    "google-calendar": {
      "type": "connector",
      "connector_id": "google-calendar"
    }
  }
}
```

**Used by**: `/briefing`, `/meeting-prep`, `/schedule-optimize`, `/review`

### Gmail

Enables: email triage, drafting, sending (via drafts)

```json
{
  "mcpServers": {
    "gmail": {
      "type": "connector",
      "connector_id": "gmail"
    }
  }
}
```

**Used by**: `/briefing`, `/inbox-triage`, `/draft-email`

### Slack

Enables: message triage, drafting, channel awareness

```json
{
  "mcpServers": {
    "slack": {
      "type": "connector",
      "connector_id": "slack"
    }
  }
}
```

**Used by**: `/briefing`, `/inbox-triage`, `/draft-slack`, `/meeting-followup`

### Notion

Enables: task management, knowledge base, meeting notes storage

```json
{
  "mcpServers": {
    "notion": {
      "type": "connector",
      "connector_id": "notion"
    }
  }
}
```

**Used by**: `/task-prioritize`, `/project-status`, `/meeting-minutes`, `/write-sop`

### Linear

Enables: issue tracking, project management

```json
{
  "mcpServers": {
    "linear": {
      "type": "connector",
      "connector_id": "linear"
    }
  }
}
```

**Used by**: `/project-status`, `/weekly-report`

### Full .mcp.json Example

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
    },
    "linear": {
      "type": "connector",
      "connector_id": "linear"
    }
  }
}
```

---

## Rules Customization

Rules are always-active guidelines that constrain Claude's behavior. They live in `rules/`.

### Built-in Rules

#### `rules/common/communication-style.md`

Controls tone, formality, and language patterns:

```markdown
- Default to professional tone unless overridden
- Match the formality level of the recipient
- Use active voice in all business writing
- Keep sentences concise (max 25 words per sentence)
- For Japanese: use appropriate keigo based on CLAUDE.md settings
```

#### `rules/common/confidentiality.md`

Prevents accidental information leaks:

```markdown
- Never include internal project codenames in external communications
- Redact financial figures from draft summaries unless explicitly requested
- Flag when a draft contains potentially sensitive information
- Never auto-send — always create drafts for human review
```

#### `rules/common/output-quality.md`

Ensures consistent output standards:

```markdown
- All reports must include an executive summary
- Action items must have: owner, due date, description
- Data claims must reference their source
- Proposals must address risks and mitigations
```

#### `rules/common/japanese-business.md`

Japanese business communication norms:

```markdown
- Use 季節の挨拶 (seasonal greetings) in formal external emails
- Include proper 宛名 (addressing) format
- Follow 起承転結 structure for persuasive documents
- Use 御社/弊社 appropriately
```

### Adding Custom Rules

Create a new `.md` file in `rules/common/` or a category subdirectory:

```markdown
# rules/common/my-team-rules.md

## Team Communication Rules
- Always CC the PM on client-facing emails
- Use thread replies in #engineering (never top-level)
- Status updates go to #team-status by 17:00
```

---

## Hooks Configuration

Hooks are automated triggers that fire on specific events. They are defined in `hooks/hooks.json`.

### hooks.json Field Reference

| Field | Description | Example |
|-------|-------------|---------|
| `type` | Hook type: `"command"` (run a script) or `"notification"` (show a message) | `"notification"` |
| `command` | Shell command to execute (for `type: "command"`) | `"node scripts/hooks/session-start.js"` |
| `message` | Message to display (for `type: "notification"`) | `"Draft created."` |
| `matcher` | Regex pattern to match tool names (for PreToolUse/PostToolUse) | `"mcp__gmail__.*send"` |
| `description` | Human-readable description of what the hook does | `"Prevent direct sending"` |

### Hook Events

| Event | Fires When | Use Case |
|-------|-----------|----------|
| `SessionStart` | A new Claude session begins | Load context, show suggestions |
| `PreToolUse` | Before a tool is invoked (matches by tool name) | Block dangerous actions, add warnings |
| `PostToolUse` | After a tool completes (matches by tool name) | Confirm actions, log activity |
| `Stop` | The session ends | Save state, generate summary |

### Built-in Hooks (4 total)

#### 1. Morning Context Load (`SessionStart`)

Fires on session start — runs `session-start.js` which outputs the current date/time and suggests relevant commands based on time of day (morning → `/briefing`, evening → `/review`).

```json
{
  "SessionStart": [
    {
      "type": "command",
      "command": "node scripts/hooks/session-start.js",
      "description": "Load morning context: calendar events, task priorities, and unread message count"
    }
  ]
}
```

#### 2. Direct Send Prevention (`PreToolUse`)

Fires before any direct email/Slack send action — shows a warning notification and blocks the send, enforcing the draft-only policy.

```json
{
  "PreToolUse": [
    {
      "matcher": "mcp__gmail__gmail_send_message|mcp__slack__slack_send_message",
      "type": "notification",
      "message": "⚠️ DRAFT POLICY: This action would send a message directly. Please create a draft instead."
    }
  ]
}
```

#### 3. Draft Confirmation (`PostToolUse`)

Fires after a draft is created — confirms the action and reminds the user to review before manual sending.

```json
{
  "PostToolUse": [
    {
      "matcher": "mcp__gmail__gmail_create_draft|mcp__slack__slack_send_message_draft",
      "type": "notification",
      "message": "📝 Draft created. Please review before sending manually."
    }
  ]
}
```

#### 4. Session End Summary (`Stop`)

Fires when the session ends — runs `session-end.js` to save a session summary.

```json
{
  "Stop": [
    {
      "type": "command",
      "command": "node scripts/hooks/session-end.js"
    }
  ]
}
```

### Disabling Hooks

Set the `ECCB_DISABLED_HOOKS` environment variable:

```bash
# Disable specific hooks
export ECCB_DISABLED_HOOKS="morning-context,draft-prevention"

# Disable all hooks
export ECCB_DISABLED_HOOKS="all"
```

### Adding Custom Hooks

Edit `hooks/hooks.json` to add your own. Example — auto-translate drafts:

```json
{
  "PostToolUse": [
    {
      "matcher": "mcp__gmail__gmail_create_draft",
      "type": "notification",
      "message": "💡 Draft created. Would you like me to also create a translated version?"
    }
  ]
}
```

---

## Contexts

Contexts are dynamic system prompts that change Claude's behavior mode. They live in `contexts/` as Markdown files.

### How Contexts Work

Each context file defines:
- **Focus areas**: What topics and tasks to prioritize
- **Behavioral adjustments**: How Claude should think and respond differently
- **Recommended commands**: Which slash commands are most relevant in this mode

When a context is activated, Claude adopts the specified focus and behavioral adjustments for the rest of the session (or until another context is activated).

### Available Contexts

| Context | File | Mode | Focus |
|---------|------|------|-------|
| `manager` | `contexts/manager.md` | Manager mode | Delegation, status tracking, team communication, 1-on-1s |
| `analyst` | `contexts/analyst.md` | Analyst mode | Data frameworks, structured analysis, quantitative reasoning |
| `communicator` | `contexts/communicator.md` | Communicator mode | Tone optimization, audience awareness, persuasion |
| `planner` | `contexts/planner.md` | Planner mode | Project structure, timelines, dependencies, resource allocation |

### Activating Contexts

Tell Claude which mode you want:

```
Please switch to analyst mode
```

Or reference the context file directly:

```
Use the context from contexts/manager.md
```

Contexts can be combined with commands:

```
Switch to analyst mode, then run /data-insight "Q4 revenue by region"
```

### Creating Custom Contexts

Create a new `.md` file in `contexts/`:

```markdown
# Sales Context

You are operating in **Sales Mode**. Adjust your behavior:

## Focus Areas
- Pipeline management and deal progression
- Customer communication and relationship building
- Competitive positioning and objection handling

## Behavioral Adjustments
- Frame everything in terms of customer value and revenue impact
- Default to warm, relationship-oriented communication style
- Include competitive differentiators when discussing product

## Prioritize These Commands
- /draft-email — Customer communication
- /competitive-brief — Competitive intelligence
- /decision-matrix — Deal evaluation
```

---

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ECCB_LANGUAGE` | Output language (`en`, `ja`) | `en` |
| `ECCB_DRAFT_ONLY` | Prevent auto-sending messages | `true` |
| `ECCB_DISABLED_HOOKS` | Comma-separated hooks to disable | (none) |
| `ECCB_QUALITY_GATE` | Enable document quality review | `true` |
| `ECCB_VERBOSE` | Verbose output for debugging | `false` |

---

## Permissions

Configure which MCP tools Claude can use without asking in `~/.claude/settings.json`:

### Recommended Permissions

```json
{
  "permissions": {
    "allow": [
      "mcp__google-calendar__gcal_list_events",
      "mcp__google-calendar__gcal_get_event",
      "mcp__google-calendar__gcal_list_calendars",
      "mcp__gmail__gmail_search_messages",
      "mcp__gmail__gmail_read_message",
      "mcp__gmail__gmail_read_thread",
      "mcp__gmail__gmail_create_draft",
      "mcp__gmail__gmail_list_labels",
      "mcp__slack__slack_read_channel",
      "mcp__slack__slack_read_thread",
      "mcp__slack__slack_search_public",
      "mcp__slack__slack_send_message_draft",
      "mcp__notion__notion-search",
      "mcp__notion__notion-fetch"
    ],
    "deny": [
      "mcp__gmail__gmail_send_message",
      "mcp__slack__slack_send_message"
    ]
  }
}
```

**Philosophy**: Allow read operations and draft creation freely. Deny direct sending — always require human approval for outbound communication.

### Wildcard Permissions (less secure, more convenient)

```json
{
  "permissions": {
    "allow": [
      "mcp__google-calendar__*",
      "mcp__gmail__*",
      "mcp__slack__*",
      "mcp__notion__*"
    ],
    "deny": [
      "mcp__gmail__gmail_send_message",
      "mcp__slack__slack_send_message"
    ]
  }
}
```
