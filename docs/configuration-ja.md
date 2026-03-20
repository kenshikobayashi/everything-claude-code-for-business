# 設定ガイド

Everything Claude Code for Business をワークフロー、チーム、組織に合わせてカスタマイズする方法です。

## 目次

- [CLAUDE.md の設定](#claudemd-の設定)
- [MCPサーバーの設定](#mcpサーバーの設定)
- [ルールのカスタマイズ](#ルールのカスタマイズ)
- [フックの設定](#フックの設定)
- [コンテキスト](#コンテキスト)
- [環境変数](#環境変数)
- [権限設定](#権限設定)

---

## CLAUDE.md の設定

`CLAUDE.md` はプラグインをパーソナライズする主要な方法です。プロジェクトルート（またはホームディレクトリでグローバル設定）に配置します。

### 最小構成

```markdown
# Business Context

## User
- 名前: あなたの名前
- メール: your@email.com
- タイムゾーン: Asia/Tokyo

## Preferences
- Language: 日本語
- 下書きポリシー: 常に下書き作成、自動送信禁止
```

### フル構成

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
- Slack: techco-workspace ワークスペース (User ID: U0EXAMPLE01)
- Notion: タスクDB (collection://xxxx), PJ DB (collection://yyyy)

## Preferences
- Language: 日本語
- メールトーン: ビジネス敬語（デフォルト）
- Slackトーン: 丁寧語（デフォルト）
- 下書きポリシー: 常に下書き作成、自動送信禁止
- 議事録フォーマット: 決定事項 → アクション → 議論
- 報告書スタイル: エグゼクティブサマリー先頭

## チームコンテキスト
- 直属部下: Alice（フロントエンド）、Bob（バックエンド）、Carol（データ）
- 上司: Dave（VP Engineering）
- 主要ステークホルダー: CFO（予算）、CTO（技術方針）

## プロジェクトコンテキスト
- アクティブPJ: Project Alpha（Q1ローンチ）、Project Beta（リサーチフェーズ）
- スプリント: 2週間、月曜開始
- スタンドアップ: 毎日 09:00（15分）

## コミュニケーションルール
- 社内メール: ファーストネーム、丁寧語
- 社外メール: フルネーム + 様、尊敬語 + 謙譲語
- クライアント連絡: 必ずアカウントマネージャーをCC
- エスカレーション: 緊急 → Slack DM、非緊急 → メール

## 敬語ルール
- 社内（上司）: 丁寧語 + 尊敬語
- 社内（同僚）: 丁寧語
- 社外（クライアント）: 尊敬語 + 謙譲語
- 社外（ベンダー）: 丁寧語 + 尊敬語
```

---

## MCPサーバーの設定

### Google Calendar

有効化される機能: スケジュール認識、会議準備、イベント作成

> **設定方法**: Claude Desktop の**コネクタUI**を使用（**[+]** → **Connectors** → **Google Calendar**）、またはCLI経由の場合は [Google Calendar MCPサーバーのドキュメント](https://modelcontextprotocol.io)を参照してください。

**使用コマンド**: `/briefing`、`/meeting-prep`、`/schedule-optimize`、`/review`

### Gmail

有効化される機能: メールトリアージ、下書き作成、送信（下書き経由）

> **設定方法**: Claude Desktop の**コネクタUI**を使用（**[+]** → **Connectors** → **Gmail**）、またはCLI経由の場合は [Gmail MCPサーバーのドキュメント](https://modelcontextprotocol.io)を参照してください。

**使用コマンド**: `/briefing`、`/inbox-triage`、`/draft-email`

### Slack

有効化される機能: メッセージトリアージ、下書き作成、チャンネル認識

> **設定方法**: Claude Desktop の**コネクタUI**を使用（**[+]** → **Connectors** → **Slack**）、またはCLI経由の場合は [Slack MCPサーバーのドキュメント](https://modelcontextprotocol.io)を参照してください。

**使用コマンド**: `/briefing`、`/inbox-triage`、`/draft-slack`、`/meeting-followup`

### Notion

有効化される機能: タスク管理、ナレッジベース、議事録保存

> **設定方法**: Claude Desktop の**コネクタUI**を使用（**[+]** → **Connectors** → **Notion**）、またはCLI経由の場合は [Notion MCPサーバーのドキュメント](https://modelcontextprotocol.io)を参照してください。

**使用コマンド**: `/task-prioritize`、`/project-status`、`/meeting-minutes`、`/write-sop`

### .mcp.json 設定例（カスタム/ローカルMCPサーバー用）

`.mcp.json` はローカルプロセスとして実行するMCPサーバー用です。ファーストパーティのコネクタ（Google Calendar、Gmail、Slack、Notion）は、Claude Desktop の**コネクタUI**を使用してください。

```json
{
  "mcpServers": {
    "custom-server": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_KEY": "your-api-key"
      }
    },
    "another-server": {
      "command": "node",
      "args": ["path/to/server.js"]
    }
  }
}
```

---

## ルールのカスタマイズ

ルールは、Claude の動作を常に制約するガイドラインです。`rules/` ディレクトリに配置します。

### 組み込みルール

#### `rules/common/communication-style.md`

トーン、敬語レベル、言語パターンを制御:

```markdown
- 指定がない限りプロフェッショナルなトーンをデフォルトとする
- 受信者の敬語レベルに合わせる
- すべてのビジネス文書で能動態を使用
- 簡潔な文にする（1文最大25語）
- 日本語: CLAUDE.mdの敬語設定に基づいて適切な敬語を使用
```

#### `rules/common/confidentiality.md`

意図しない情報漏洩を防止:

```markdown
- 社外コミュニケーションに社内プロジェクトのコードネームを含めない
- 明示的に要求されない限り、下書きサマリーから財務数値を除外
- 潜在的に機密性のある情報が含まれる場合にフラグを立てる
- 自動送信は絶対にしない — 常に人間のレビュー用に下書きを作成
```

#### `rules/common/output-quality.md`

出力品質基準:

```markdown
- 1ページを超える文書にはエグゼクティブサマリーを含める
- アクションアイテムには3要素必須: 担当者、期限、具体的な説明
- データの主張にはソースを参照
- 提案書にはリスクと対策を含める
- レポートには比較コンテキストを含める（目標、前期、ベンチマーク）
```

#### `rules/common/japanese-business.md`

日本のビジネスコミュニケーション規範:

```markdown
- フォーマルな社外メールに季節の挨拶を含める
- 適切な宛名フォーマットに従う
- 説得力のある文書には起承転結構造を使用
- 御社/弊社を適切に使い分ける
```

### カスタムルールの追加

`rules/common/` またはカテゴリサブディレクトリに新しい `.md` ファイルを作成:

```markdown
# rules/common/my-team-rules.md

## チームコミュニケーションルール
- クライアント向けメールには必ずPMをCC
- #engineering ではスレッドリプライを使用（トップレベル投稿禁止）
- ステータスアップデートは17:00までに #team-status へ
```

---

## フックの設定

フックは特定のイベント時に自動実行されるトリガーです。`hooks/hooks.json` で定義します。

### hooks.json フィールドリファレンス

| フィールド | 説明 | 例 |
|----------|------|-----|
| `type` | フック種類: `"command"`（シェルコマンド実行）、`"prompt"`（プロンプト注入）、`"http"`（URL呼出）、`"agent"`（エージェント実行） | `"command"` |
| `command` | 実行するシェルコマンド（`type: "command"` 用） | `"node scripts/hooks/session-start.js"` |
| `matcher` | ツール名にマッチする正規表現パターン（PreToolUse/PostToolUse用） | `"mcp__gmail__.*send"` |
| `description` | フックの目的を説明するテキスト | `"直接送信を防止"` |

### フックイベント

| イベント | 発火タイミング | ユースケース |
|---------|-------------|------------|
| `SessionStart` | 新しいセッション開始時 | コンテキスト読込、提案表示 |
| `PreToolUse` | ツール実行前（ツール名でマッチ） | 危険な操作のブロック、警告追加 |
| `PostToolUse` | ツール実行後（ツール名でマッチ） | アクション確認、ログ記録 |
| `Stop` | セッション終了時 | 状態保存、サマリー生成 |

### 組み込みフック（4つ）

#### 1. 朝のコンテキスト読み込み (`SessionStart`)

セッション開始時に発火 — `session-start.js` が現在の日時を出力し、時間帯に応じたコマンドを提案（朝 → `/briefing`、夕方 → `/review`）。

```json
{
  "SessionStart": [
    {
      "type": "command",
      "command": "node scripts/hooks/session-start.js"
    }
  ]
}
```

#### 2. 直接送信防止 (`PreToolUse`)

メール/Slackの直接送信アクション前に発火 — 警告メッセージを出力し、下書きポリシーを強制。

```json
{
  "PreToolUse": [
    {
      "matcher": "mcp__gmail__gmail_send_message|mcp__slack__slack_send_message",
      "type": "command",
      "command": "echo '⚠️ 下書きポリシー: この操作はメッセージを直接送信します。代わりに下書きを作成してください。'"
    }
  ]
}
```

#### 3. 下書き確認 (`PostToolUse`)

下書き作成後に発火 — リマインダーメッセージを出力し、手動送信前のレビューを促す。

```json
{
  "PostToolUse": [
    {
      "matcher": "mcp__gmail__gmail_create_draft|mcp__slack__slack_send_message_draft",
      "type": "command",
      "command": "echo '📝 下書きが作成されました。送信前にご確認ください。'"
    }
  ]
}
```

#### 4. セッション終了サマリー (`Stop`)

セッション終了時に発火 — `session-end.js` でセッションサマリーを保存。

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

### フックの無効化

`ECCB_DISABLED_HOOKS` 環境変数を設定:

```bash
# 特定のフックを無効化
export ECCB_DISABLED_HOOKS="morning-context,draft-prevention"

# すべてのフックを無効化
export ECCB_DISABLED_HOOKS="all"
```

---

## コンテキスト

コンテキストは、Claude の動作モードを切り替える動的なシステムプロンプトです。`contexts/` ディレクトリにMarkdownファイルとして配置します。

### コンテキストの仕組み

各コンテキストファイルは以下を定義します：
- **フォーカスエリア**: 優先すべきトピックとタスク
- **行動調整**: Claude の思考・応答方法の変更
- **推奨コマンド**: このモードで最も関連するスラッシュコマンド

コンテキストが有効化されると、Claude はセッション中（または別のコンテキストが有効化されるまで）指定されたフォーカスと行動調整を採用します。

### 利用可能なコンテキスト

| コンテキスト | ファイル | モード | フォーカス |
|------------|--------|--------|----------|
| `manager` | `contexts/manager.md` | マネージャーモード | 委任、状況追跡、チームコミュニケーション、1on1 |
| `analyst` | `contexts/analyst.md` | アナリストモード | データフレームワーク、構造化分析、定量的推論 |
| `communicator` | `contexts/communicator.md` | コミュニケーターモード | トーン最適化、読者意識、説得力 |
| `planner` | `contexts/planner.md` | プランナーモード | プロジェクト構造、タイムライン、依存関係 |

### コンテキストの有効化

Claude に使いたいモードを伝えるだけです：

```
アナリストモードに切り替えてください
```

またはコンテキストファイルを直接参照：

```
contexts/manager.md のコンテキストを使用してください
```

コマンドと組み合わせて使用：

```
アナリストモードで /data-insight "Q4の地域別売上" を実行してください
```

### カスタムコンテキストの作成

`contexts/` に新しい `.md` ファイルを作成：

```markdown
# 営業コンテキスト

**営業モード**で動作します。行動を調整してください：

## フォーカスエリア
- パイプライン管理と案件推進
- 顧客コミュニケーションと関係構築
- 競合ポジショニングと反論対応

## 行動調整
- すべてを顧客価値と売上インパクトの観点でフレーミング
- 温かみのある関係志向のコミュニケーションスタイルをデフォルトに
```

---

## 環境変数

| 変数 | 説明 | デフォルト |
|------|------|----------|
| `ECCB_LANGUAGE` | 出力言語（`en`、`ja`） | `en` |
| `ECCB_DRAFT_ONLY` | メッセージの自動送信を禁止 | `true` |
| `ECCB_DISABLED_HOOKS` | 無効にするフック（カンマ区切り） | (なし) |
| `ECCB_QUALITY_GATE` | ドキュメント品質レビューの有効化 | `true` |
| `ECCB_VERBOSE` | デバッグ用の詳細出力 | `false` |

---

## 権限設定

Claude が確認なしで使用できる MCP ツールを `~/.claude/settings.json` で設定:

### 推奨権限設定

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

**設計思想**: 読み取り操作と下書き作成は自由に許可。直接送信は拒否 — 外部へのコミュニケーションには常に人間の承認を要求します。

### ワイルドカード権限（利便性重視、セキュリティは低下）

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
