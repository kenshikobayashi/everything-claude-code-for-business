# Everything Claude Code for Business

**[English](#english) | [日本語](#japanese)**

> A comprehensive Claude Code plugin for business professionals — meetings, communication, analysis, project management, and decision-making workflows optimized for daily operations.

Inspired by [everything-claude-code](https://github.com/affaan-m/everything-claude-code) (Anthropic Hackathon Winner, 50K+ stars), this plugin extends the same battle-tested architecture from software engineering into **business operations**.

---

<a id="english"></a>

## English

### What is this?

While `everything-claude-code` optimizes the developer loop (`plan → tdd → code-review → verify`), this plugin optimizes the **business loop**:

```
Gather Information → Analyze → Decide → Execute → Report
```

It provides agents, skills, rules, and hooks purpose-built for business professionals who use Claude Code (CLI or Desktop) in their daily work.

### Who is this for?

- **Engineering Managers** — 1-on-1 prep, project status, team communication
- **Product Managers** — stakeholder updates, decision matrices, competitive briefs
- **Startup Founders / CEOs** — investor materials, market scans, strategic planning
- **Consultants** — proposals, report writing, client communication
- **Sales Leaders** — CRM analysis, deal reviews, customer messaging
- **Anyone** who spends their day in meetings, email, Slack, and documents

### Core Components

| Component | Count | Description |
|-----------|-------|-------------|
| **Agents** | 15 | Specialized sub-agents (chief-of-staff, business-analyst, proposal-writer, etc.) |
| **Skills** | 45 | All functionality lives in `skills/` — 25 invocable slash commands + 20 domain knowledge skills |
| **Rules** | 7 | Enforced guidelines (communication style, confidentiality, Japanese business norms) |
| **Hooks** | 4 | Automated triggers (morning context load, draft send prevention, draft confirmation, session end summary) |
| **Contexts** | 4 | Dynamic modes (manager, analyst, communicator, planner) |
| **Examples** | 6 | Role-based CLAUDE.md templates (EN: 6 roles, JA: 5 roles) |

### Quick Start

**Option A: Claude Code CLI**

```bash
# 1. Clone the repository
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business

# 2. Run the installer
./install.sh

# 3. Start using
claude
> /briefing
```

**Option B: Claude Desktop**

```
1. Open Claude Desktop
2. Click [+] → Plugins → Add from path
3. Select the cloned repository folder
4. Skills appear in the [+] → Slash commands menu
```

See detailed guides:
- [CLI Setup Guide](docs/setup-cli.md)
- [Desktop Setup Guide](docs/setup-desktop.md)

### Skill Overview (Slash Commands)

#### Daily Operations
| Skill | Description |
|-------|-------------|
| `/briefing` | Morning briefing — calendar, tasks, inbox, priorities |
| `/review` | Evening review — accomplishments, tomorrow's plan |
| `/inbox-triage` | Bulk triage email + Slack by priority |
| `/schedule-optimize` | Suggest schedule improvements |
| `/task-prioritize` | Re-rank tasks by urgency and impact |

#### Meetings
| Skill | Description |
|-------|-------------|
| `/meeting-prep` | Pre-meeting preparation package |
| `/meeting-minutes` | Generate structured meeting notes |
| `/meeting-followup` | Extract action items, draft notifications |

#### Documents
| Skill | Description |
|-------|-------------|
| `/draft-email` | Compose business email with tone control |
| `/draft-slack` | Compose Slack message with context |
| `/draft-proposal` | Generate proposal / business plan |
| `/draft-report` | Generate structured report |
| `/write-sop` | Create standard operating procedure |

#### Analysis & Strategy
| Skill | Description |
|-------|-------------|
| `/market-scan` | Market trends and intelligence |
| `/competitive-brief` | Competitive landscape analysis |
| `/data-insight` | Data → actionable insights |
| `/decision-matrix` | Weighted scoring decision support |

#### Project Management
| Skill | Description |
|-------|-------------|
| `/project-status` | Project progress summary |
| `/risk-check` | Risk assessment and mitigation |
| `/weekly-report` | Weekly status report generation |
| `/okr-update` | OKR / KPI progress update |

#### People & Organization
| Skill | Description |
|-------|-------------|
| `/one-on-one-prep` | 1-on-1 meeting preparation |
| `/feedback-draft` | Feedback message drafting |

#### Utilities
| Skill | Description |
|-------|-------------|
| `/translate-biz` | Business document translation |
| `/summarize` | Long document summarization |

### Domain Knowledge Skills (20)

These skills are automatically activated by context and enhance Claude's expertise:

`email-writing` · `slack-etiquette` · `presentation-design` · `negotiation-prep` · `meeting-design` · `decision-frameworks` · `facilitation` · `market-research` · `competitive-analysis` · `financial-modeling` · `data-storytelling` · `proposal-writing` · `report-writing` · `minutes-writing` · `sop-writing` · `project-planning` · `risk-management` · `okr-management` · `one-on-one` · `hiring-evaluation`

### MCP Integrations

This plugin is designed to work with the following MCP servers:

| Service | Purpose | Required |
|---------|---------|----------|
| **Google Calendar** | Schedule awareness, meeting prep | Recommended |
| **Gmail** | Email triage, drafting | Recommended |
| **Slack** | Message triage, drafting | Recommended |
| **Notion** | Task management, knowledge base | Optional |
| **Linear** | Project tracking | Optional |
| **HubSpot** | CRM / sales pipeline | Optional |

### Documentation

| Guide | Description |
|-------|-------------|
| [CLI Setup Guide](docs/setup-cli.md) | Complete CLI installation and configuration |
| [Desktop Setup Guide](docs/setup-desktop.md) | Claude Desktop installation and configuration |
| [Skills Reference](docs/reference.md) | Detailed reference for all skills and agents |
| [Configuration Guide](docs/configuration.md) | Customization, MCP setup, hooks, and rules |
| [Examples](docs/examples.md) | Role-based CLAUDE.md templates and use cases |
| [Contributing](docs/contributing.md) | How to add new skills and agents |

### License

MIT

---

<a id="japanese"></a>

## 日本語

### これは何？

`everything-claude-code` がエンジニアのワークフロー（`plan → tdd → code-review → verify`）を最適化するプラグインであるのに対し、本プラグインは**ビジネス業務のワークフロー**を最適化します：

```
情報収集 → 分析 → 意思決定 → 実行 → 報告
```

Claude Code（CLI または Desktop）を日常業務で使うビジネスパーソンのための、エージェント・スキル・ルール・フックを提供します。

### 対象ユーザー

- **エンジニアリングマネージャー** — 1on1準備、プロジェクト状況、チームコミュニケーション
- **プロダクトマネージャー** — ステークホルダー報告、意思決定支援、競合分析
- **スタートアップ創業者 / CEO** — 投資家資料、市場調査、戦略立案
- **コンサルタント** — 提案書、報告書、クライアントコミュニケーション
- **営業リーダー** — CRM分析、案件レビュー、顧客メッセージ
- 会議・メール・Slack・ドキュメントに日々を費やす**すべてのビジネスパーソン**

### コアコンポーネント

| コンポーネント | 数 | 説明 |
|--------------|------|------|
| **Agents** | 15 | 特化型サブエージェント（chief-of-staff、business-analyst、proposal-writerなど） |
| **Skills** | 45 | すべての機能が `skills/` に集約 — 25個のスラッシュコマンド + 20個のドメイン知識スキル |
| **Rules** | 7 | 強制ガイドライン（コミュニケーション規約、機密管理、日本のビジネス慣習） |
| **Hooks** | 4 | 自動トリガー（朝のコンテキスト読込、直接送信防止、下書き確認、セッション終了サマリー） |
| **Contexts** | 4 | 動的モード（マネージャー、アナリスト、コミュニケーター、プランナー） |
| **Examples** | 6 | 役割別CLAUDE.mdテンプレート（EN: 6ロール、JA: 5ロール） |

### クイックスタート

**方法A: Claude Code CLI**

```bash
# 1. リポジトリをクローン
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business

# 2. インストーラーを実行
./install.sh

# 3. 使い始める
claude
> /briefing
```

**方法B: Claude Desktop**

```
1. Claude Desktop を開く
2. [+] → プラグイン → パスから追加
3. クローンしたリポジトリフォルダを選択
4. [+] → スラッシュコマンド メニューにスキルが表示される
```

詳細ガイド:
- [CLIセットアップガイド](docs/setup-cli-ja.md)
- [Desktopセットアップガイド](docs/setup-desktop-ja.md)

### スキル一覧（スラッシュコマンド）

#### デイリーオペレーション
| スキル | 説明 |
|-------|------|
| `/briefing` | 朝のブリーフィング — カレンダー、タスク、受信トレイ、優先事項 |
| `/review` | 夕方の振り返り — 成果、明日の計画 |
| `/inbox-triage` | メール + Slack の一括トリアージ |
| `/schedule-optimize` | スケジュール改善提案 |
| `/task-prioritize` | 緊急度・影響度によるタスク再順位付け |

#### 会議
| スキル | 説明 |
|-------|------|
| `/meeting-prep` | 会議事前準備パッケージ |
| `/meeting-minutes` | 構造化された議事録の生成 |
| `/meeting-followup` | アクションアイテム抽出、通知下書き |

#### ドキュメント
| スキル | 説明 |
|-------|------|
| `/draft-email` | トーンを制御したビジネスメール作成 |
| `/draft-slack` | コンテキストを考慮したSlackメッセージ作成 |
| `/draft-proposal` | 提案書・企画書の生成 |
| `/draft-report` | 構造化された報告書の生成 |
| `/write-sop` | 業務手順書（SOP）の作成 |

#### 分析・戦略
| スキル | 説明 |
|-------|------|
| `/market-scan` | 市場動向・インテリジェンス |
| `/competitive-brief` | 競合環境分析 |
| `/data-insight` | データ → 実行可能な示唆 |
| `/decision-matrix` | 加重スコアリングによる意思決定支援 |

#### プロジェクト管理
| スキル | 説明 |
|-------|------|
| `/project-status` | プロジェクト進捗サマリー |
| `/risk-check` | リスク評価と対策立案 |
| `/weekly-report` | 週次ステータスレポート生成 |
| `/okr-update` | OKR / KPI 進捗更新 |

#### 人材・組織
| スキル | 説明 |
|-------|------|
| `/one-on-one-prep` | 1on1ミーティング準備 |
| `/feedback-draft` | フィードバックメッセージ下書き |

#### ユーティリティ
| スキル | 説明 |
|-------|------|
| `/translate-biz` | ビジネス文書の翻訳 |
| `/summarize` | 長文の要約 |

### ドメイン知識スキル（20個）

コンテキストに応じて自動的に有効化され、Claude の専門知識を強化します：

`email-writing` · `slack-etiquette` · `presentation-design` · `negotiation-prep` · `meeting-design` · `decision-frameworks` · `facilitation` · `market-research` · `competitive-analysis` · `financial-modeling` · `data-storytelling` · `proposal-writing` · `report-writing` · `minutes-writing` · `sop-writing` · `project-planning` · `risk-management` · `okr-management` · `one-on-one` · `hiring-evaluation`

### MCP統合

以下のMCPサーバーとの連携を想定しています：

| サービス | 用途 | 必要性 |
|---------|------|--------|
| **Google Calendar** | スケジュール認識、会議準備 | 推奨 |
| **Gmail** | メールトリアージ、下書き作成 | 推奨 |
| **Slack** | メッセージトリアージ、下書き作成 | 推奨 |
| **Notion** | タスク管理、ナレッジベース | 任意 |
| **Linear** | プロジェクト追跡 | 任意 |
| **HubSpot** | CRM / 営業パイプライン | 任意 |

### ドキュメント

| ガイド | 説明 |
|-------|------|
| [CLIセットアップガイド](docs/setup-cli-ja.md) | CLI版の完全なインストールと設定 |
| [Desktopセットアップガイド](docs/setup-desktop-ja.md) | Claude Desktop版のインストールと設定 |
| [スキルリファレンス](docs/reference-ja.md) | 全スキル・エージェントの詳細リファレンス |
| [設定ガイド](docs/configuration-ja.md) | カスタマイズ、MCP設定、フック、ルール |
| [テンプレート集](docs/examples-ja.md) | 役割別CLAUDE.mdテンプレートとユースケース |
| [コントリビューション](docs/contributing-ja.md) | 新しいスキル・エージェントの追加方法 |

### ライセンス

MIT
