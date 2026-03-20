# Skills & Commands Reference

Complete reference for all agents, skills, and commands in Everything Claude Code for Business.

---

## Agents

Agents are specialized sub-agents that Claude delegates tasks to. They run autonomously and return results.

### chief-of-staff

**Purpose**: Central triage agent — prioritizes incoming information, routes tasks, and manages your daily workflow.

**Capabilities**:
- Classify incoming messages (Gmail + Slack) into 4 tiers: Skip / Info Only / Meeting Info / Action Required
- Re-calculate task priorities based on calendar, deadlines, and dependencies
- Load relevant context when switching between projects
- Suggest daily rhythm (focus time vs. meeting blocks)

**When invoked**: Automatically by `/briefing`, `/inbox-triage`, `/task-prioritize`

---

### meeting-facilitator

**Purpose**: Designs, prepares, and follows up on meetings.

**Capabilities**:
- Generate pre-meeting prep packages (agenda, talking points, background)
- Structure meeting notes into decisions, action items, next steps
- Extract follow-up tasks and draft notification messages

**When invoked**: By `/meeting-prep`, `/meeting-minutes`, `/meeting-followup`

---

### business-analyst

**Purpose**: Analyzes data and produces structured business insights.

**Capabilities**:
- Apply analytical frameworks (SWOT, Porter's Five Forces, BCG Matrix)
- Create weighted scoring matrices for decision support
- Transform raw data into actionable narratives

**When invoked**: By `/data-insight`, `/decision-matrix`, `/market-scan`

---

### strategy-advisor

**Purpose**: Strategic planning and long-term thinking support.

**Capabilities**:
- Scenario planning and risk assessment
- OKR formulation and alignment
- Strategic option evaluation

**When invoked**: By `/okr-update`, `/risk-check`

---

### communication-drafter

**Purpose**: Drafts business communications with appropriate tone and context.

**Capabilities**:
- Email drafting with configurable formality level
- Slack message crafting with thread context awareness
- Tone adjustment based on recipient relationship
- Japanese keigo (honorific language) support

**When invoked**: By `/draft-email`, `/draft-slack`, `/feedback-draft`

---

### document-reviewer

**Purpose**: Quality gate for all generated business documents.

**Capabilities**:
- Logical consistency check (claims vs. evidence)
- Tone appropriateness (formality level for audience)
- Confidential information detection
- Actionability review (clear next steps for reader)

**When invoked**: Automatically after `/draft-*` commands when quality gate is enabled

---

### project-tracker

**Purpose**: Monitors project health and generates status reports.

**Capabilities**:
- Aggregate task status from Notion / Linear
- Identify blockers and at-risk milestones
- Generate progress reports with RAG (Red/Amber/Green) status

**When invoked**: By `/project-status`, `/weekly-report`

---

### stakeholder-manager

**Purpose**: Manages stakeholder communications and alignment.

**Capabilities**:
- Track stakeholder concerns and expectations
- Draft tailored updates for different audiences
- Prepare escalation communications

**When invoked**: By `/draft-report` (stakeholder mode), `/project-status`

---

### knowledge-curator

**Purpose**: Organizes and retrieves organizational knowledge.

**Capabilities**:
- Structure information into searchable formats
- Create and maintain SOPs
- Cross-reference related documents

**When invoked**: By `/write-sop`, `/summarize`

---

### competitive-researcher

**Purpose**: Competitive intelligence gathering and analysis.

**Capabilities**:
- Web-based competitive landscape research
- Feature comparison matrices
- Market positioning analysis

**When invoked**: By `/competitive-brief`, `/market-scan`

---

### financial-analyst

**Purpose**: Financial analysis and budget support.

**Capabilities**:
- ROI and cost-benefit calculations
- Budget variance analysis
- Financial summary generation

**When invoked**: By `/data-insight` (financial mode)

---

### proposal-writer

**Purpose**: Creates persuasive business proposals and plans.

**Capabilities**:
- Structure proposals with problem → solution → impact flow
- Include supporting data and evidence
- Adapt to audience (investor, client, internal)

**When invoked**: By `/draft-proposal`

---

### risk-assessor

**Purpose**: Identifies, evaluates, and plans mitigations for risks.

**Capabilities**:
- Risk identification across categories (technical, business, compliance)
- Probability × Impact scoring matrix
- Mitigation strategy recommendation

**When invoked**: By `/risk-check`

---

### onboarding-guide

**Purpose**: Creates onboarding materials and checklists.

**Capabilities**:
- Role-specific onboarding plans
- First-week / first-month checklists
- Key contact and resource lists

**When invoked**: Manually via agent delegation

---

### compliance-checker

**Purpose**: Reviews documents and communications for compliance.

**Capabilities**:
- Confidential information detection
- Regulatory language review
- Data handling guideline enforcement

**When invoked**: Automatically via PostToolUse hook (draft confirmation notification triggers review awareness)

---

## Skills

Skills are domain knowledge packages that enhance Claude's expertise in specific areas.

### Communication Skills

| Skill | Description | Key Patterns |
|-------|-------------|-------------|
| **email-writing** | Business email composition | Tone levels, structure templates, Japanese keigo, reply chains |
| **slack-etiquette** | Effective Slack communication | Thread usage, mention strategy, emoji reactions, channel norms |
| **presentation-design** | Presentation structure | Story arc, slide layout, data visualization, audience adaptation |
| **negotiation-prep** | Negotiation preparation | BATNA analysis, issue mapping, concession planning |

### Meeting & Decision Skills

| Skill | Description | Key Patterns |
|-------|-------------|-------------|
| **meeting-design** | Meeting architecture | Agenda templates, time boxing, decision protocols, async alternatives |
| **decision-frameworks** | Structured decision-making | MECE breakdown, 2×2 matrices, decision trees, pros/cons weighting |
| **facilitation** | Discussion facilitation | Convergence techniques, consensus building, conflict resolution |

### Analysis & Strategy Skills

| Skill | Description | Key Patterns |
|-------|-------------|-------------|
| **market-research** | Market intelligence | TAM/SAM/SOM, Porter's Five Forces, trend analysis |
| **competitive-analysis** | Competitive landscape | SWOT, benchmarking, differentiation mapping, feature matrices |
| **financial-modeling** | Financial analysis | P&L analysis, ROI calculation, budget planning, unit economics |
| **data-storytelling** | Data communication | Visualization selection, narrative structure, insight extraction |

### Document Skills

| Skill | Description | Key Patterns |
|-------|-------------|-------------|
| **proposal-writing** | Proposal composition | Problem-solution-impact, evidence structuring, call to action |
| **report-writing** | Report composition | Executive summary, weekly/monthly formats, data presentation |
| **minutes-writing** | Meeting minutes | Decision capture, action items, attendance, timeline |
| **sop-writing** | SOP creation | Process flows, checklists, role assignments, exception handling |

### Project Management Skills

| Skill | Description | Key Patterns |
|-------|-------------|-------------|
| **project-planning** | Project structure | WBS, milestones, dependencies, resource allocation |
| **risk-management** | Risk processes | Risk registers, probability-impact matrices, mitigation plans |
| **okr-management** | OKR/KPI tracking | Goal setting, key results definition, progress scoring |

### People Skills

| Skill | Description | Key Patterns |
|-------|-------------|-------------|
| **one-on-one** | 1-on-1 meeting design | Agenda templates, feedback frameworks, career conversation guides |
| **hiring-evaluation** | Hiring processes | Scorecards, interview design, evaluation rubrics |

---

## Commands

### Daily Operations

#### `/briefing`

Morning briefing that aggregates your day's context.

**Flow**:
1. Fetch today's calendar events → highlight meetings needing prep
2. Query task database → show overdue + due today + high priority
3. Scan email → extract Action Required items (weighted by sender importance)
4. Scan Slack → mentions + DMs + key channel summaries
5. Check project status → surface blockers
6. Recommend "Top 3 things to do today"

**Arguments**: None

**Example output**:
```
## Morning Briefing — 2026-03-20 (Thu)

### Calendar (6 events)
- 09:00 Engineering Standup (15min) — routine
- 10:00 Q1 Planning Review (60min) ⚠️ PREP NEEDED
  → Attendees: CEO, CTO, PM Lead
  → You presented last quarter's results
- 13:00 1-on-1 with Tanaka (30min)
- ...

### Tasks (3 urgent)
- ★★★ Submit budget proposal — DUE TODAY
- ★★★ Review PR #234 — overdue by 1 day
- ★★ Update competitive analysis — due tomorrow

### Email (2 action required)
- CFO: "Budget numbers needed by EOD" — 2h ago
- Client (Yamada): "Contract renewal question" — 5h ago

### Slack (4 mentions)
- #engineering: @you "Can you review the deploy plan?"
- ...

### Recommended Focus
1. Submit budget proposal (deadline today)
2. Prep for Q1 Planning Review (10:00)
3. Reply to CFO email
```

---

#### `/review`

Evening review and next-day planning.

**Flow**:
1. Summarize completed tasks today
2. Review meetings attended → key outcomes
3. Identify carried-over tasks
4. Generate tomorrow's priority list
5. Draft any pending follow-ups

**Arguments**: None

---

#### `/inbox-triage`

Bulk email + Slack message classification.

**Flow**:
1. Fetch unread messages from Gmail + Slack in parallel
2. Classify each into: Skip / Info / Meeting / Action Required
3. Auto-archive Skip tier (with confirmation)
4. Present Action Required items ranked by urgency
5. Offer to draft replies for top items

**Arguments**: `--email-only`, `--slack-only`, `--since "2h ago"`

---

#### `/schedule-optimize`

Analyze today's schedule and suggest improvements.

**Arguments**: `--tomorrow`, `--week`

---

#### `/task-prioritize`

Re-rank tasks using Eisenhower matrix (Urgent × Important).

**Arguments**: `--project "Project Name"`, `--all`

---

### Meeting Commands

#### `/meeting-prep`

Generate comprehensive meeting preparation.

**Arguments**: Meeting name or calendar event reference

**Flow**:
1. Look up meeting in calendar → participants, agenda, location
2. Search previous meetings with same participants → key decisions
3. Search email/Slack for recent context with participants
4. Generate: talking points, questions to ask, risks to raise, materials needed

---

#### `/meeting-minutes`

Generate structured meeting notes from raw input.

**Arguments**: Paste or describe meeting content

**Output format**:
```markdown
## Meeting Minutes: [Title]
**Date**: YYYY-MM-DD | **Duration**: Xmin | **Attendees**: ...

### Decisions
1. ...

### Action Items
| # | Action | Owner | Due |
|---|--------|-------|-----|
| 1 | ...    | ...   | ... |

### Key Discussion Points
- ...

### Next Meeting
- Date: ...
- Agenda: ...
```

---

#### `/meeting-followup`

Extract action items from minutes and prepare follow-up communications.

**Arguments**: Reference to meeting minutes (or paste content)

**Flow**:
1. Parse action items from meeting notes
2. Group by assignee
3. Draft Slack messages for each assignee
4. Create tasks in Notion/Linear
5. Schedule calendar reminders for due dates

---

### Document Commands

#### `/draft-email`

Compose a business email.

**Arguments**: Purpose description, `--to`, `--tone [formal|professional|casual]`, `--lang [en|ja]`

**Example**:
```
/draft-email "Decline the vendor meeting politely, suggest next quarter" --to vendor@example.com --tone formal --lang ja
```

---

#### `/draft-slack`

Compose a Slack message with channel/thread context.

**Arguments**: Purpose description, `--channel`, `--thread`

---

#### `/draft-proposal`

Generate a business proposal or plan.

**Arguments**: Topic description, `--audience [internal|client|investor]`

**Output structure**:
1. Executive Summary
2. Problem Statement
3. Proposed Solution
4. Expected Outcomes
5. Timeline & Resources
6. Risks & Mitigations
7. Next Steps

---

#### `/draft-report`

Generate a structured business report.

**Arguments**: Topic description, `--type [weekly|monthly|project|executive]`

---

#### `/write-sop`

Create a standard operating procedure.

**Arguments**: Process description

**Output structure**:
1. Purpose & Scope
2. Roles & Responsibilities
3. Prerequisites
4. Step-by-Step Procedure
5. Exception Handling
6. Quality Checklist
7. Revision History

---

### Analysis & Strategy Commands

#### `/market-scan`

Scan market trends and competitive landscape.

**Arguments**: Industry or topic, `--depth [quick|standard|deep]`

---

#### `/competitive-brief`

Generate competitive intelligence brief.

**Arguments**: Competitor name or market segment

---

#### `/data-insight`

Analyze data and extract actionable insights.

**Arguments**: Data description or file reference, `--framework [swot|porter|bcg]`

---

#### `/decision-matrix`

Create a weighted decision matrix.

**Arguments**: Decision topic

**Flow**:
1. Ask for options (or suggest based on context)
2. Ask for criteria and weights
3. Score each option against each criterion
4. Present weighted results with recommendation
5. Include risk assessment per option

---

### Project Management Commands

#### `/project-status`

Generate project health summary.

**Arguments**: Project name, `--format [brief|detailed|executive]`

---

#### `/risk-check`

Assess risks for a project or decision.

**Arguments**: Subject description

**Output**: Risk register with Probability × Impact matrix

---

#### `/weekly-report`

Generate weekly status report.

**Arguments**: `--team`, `--project`, `--period`

---

#### `/okr-update`

Update OKR/KPI progress.

**Arguments**: OKR reference or `--all`

---

### People Commands

#### `/one-on-one-prep`

Prepare for a 1-on-1 meeting.

**Arguments**: Person name

**Flow**:
1. Check recent interactions (Slack, email)
2. Review their recent task completions
3. Look up previous 1-on-1 notes
4. Generate agenda suggestions: wins, blockers, growth, feedback

---

#### `/feedback-draft`

Draft constructive feedback.

**Arguments**: Person and situation description, `--type [positive|constructive|360]`

---

### Utility Commands

#### `/translate-biz`

Translate business documents preserving professional tone.

**Arguments**: Text or file reference, `--from [en|ja]`, `--to [en|ja]`

---

#### `/summarize`

Summarize long documents or threads.

**Arguments**: Content to summarize, `--length [brief|standard|detailed]`, `--format [bullets|narrative|executive]`
