# CLIセットアップガイド

Claude Code CLIで「Everything Claude Code for Business」をインストール・設定するための完全ガイドです。

## 前提条件

- **Claude Code CLI** がインストール済み（[インストールガイド](https://docs.anthropic.com/en/docs/claude-code)）
- **Node.js 18+**（フックとスクリプトの実行に必要）
- **Git**（リポジトリのクローンに必要）

## インストール

### ステップ 1: リポジトリをクローン

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business
```

### ステップ 2: プラグインをインストール

**方法A: プラグインマーケットプレイス（推奨）**

```bash
# Claude Code 内で実行
/plugin install everything-claude-code-for-business
```

**方法B: ローカルインストール**

```bash
# インストーラースクリプトを実行
./install.sh
```

インストーラーは以下を実行します：
1. エージェントを `~/.claude/agents/` にコピー
2. スキルを `~/.claude/skills/` にコピー
3. コマンドを `~/.claude/commands/` にコピー
4. ルールを `~/.claude/rules/` にコピー
5. フックを `~/.claude/hooks/` に設定

**方法C: 手動インストール（必要なものだけ）**

特定のコンポーネントだけが必要な場合、個別にコピーできます：

```bash
# 例：会議関連のコマンドのみインストール
cp commands/meeting-prep.md ~/.claude/commands/
cp commands/meeting-minutes.md ~/.claude/commands/
cp commands/meeting-followup.md ~/.claude/commands/

# 例：chief-of-staffエージェントのみインストール
cp agents/chief-of-staff.md ~/.claude/agents/
```

### ステップ 3: MCPサーバーを設定

MCPサーバーはClaude Codeと外部サービスを接続します。プロジェクトの `.mcp.json` またはグローバルの `~/.claude.json` で設定します。

**プロジェクトレベル（プロジェクトルートの `.mcp.json`）：**

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

**グローバル（`~/.claude.json`）：**

プロジェクト横断でアクセスしたい場合は、同じ `mcpServers` ブロックをグローバル設定に追加します。

### ステップ 4: CLAUDE.md を設定

プロジェクトの `CLAUDE.md` に個人のコンテキストを設定します：

```markdown
# Business Context

## User
- Name: 田中 太郎
- Email: tanaka@example.co.jp
- Company: テック株式会社
- Role: Applied Science室
- Timezone: Asia/Tokyo

## MCP Integrations
- Gmail: tanaka@example.co.jp
- Google Calendar: primary (Asia/Tokyo)
- Slack: techco-workspace ワークスペース
- Notion: タスクDB (collection://xxxxx)

## Preferences
- Language: 日本語
- Email tone: ビジネス敬語
- Draft policy: 常に下書き作成、自動送信禁止
```

### ステップ 5: インストールを確認

```bash
claude

# コマンドをテスト
> /briefing

# 利用可能なコマンドを確認
> /help
```

## インストール後のディレクトリ構造

```
~/.claude/
├── agents/
│   ├── chief-of-staff.md
│   ├── business-analyst.md
│   ├── meeting-facilitator.md
│   └── ... (15エージェント)
├── skills/
│   ├── email-writing/
│   ├── meeting-design/
│   ├── market-research/
│   └── ... (20スキルカテゴリ)
├── commands/
│   ├── briefing.md
│   ├── meeting-prep.md
│   ├── draft-email.md
│   └── ... (25コマンド)
├── rules/
│   ├── common/
│   │   ├── communication-style.md
│   │   ├── confidentiality.md
│   │   └── output-quality.md
│   └── ...
└── hooks/
    └── hooks.json
```

## 設定

### 環境変数

| 変数 | 説明 | デフォルト |
|------|------|----------|
| `ECCB_LANGUAGE` | 出力言語（`en`、`ja`） | `en` |
| `ECCB_DRAFT_ONLY` | メッセージの自動送信を禁止 | `true` |
| `ECCB_DISABLED_HOOKS` | 無効にするフック（カンマ区切り） | (なし) |

### 設定ファイル (`~/.claude/settings.json`)

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

## アップデート

```bash
cd everything-claude-code-for-business
git pull
./install.sh --update
```

## アンインストール

```bash
./install.sh --uninstall
```

または `~/.claude/` 配下のインストールされたファイルを手動で削除してください。

## トラブルシューティング

### コマンドが表示されない

1. ファイルが `~/.claude/commands/` に存在するか確認：
   ```bash
   ls ~/.claude/commands/
   ```
2. Claude Code のセッションを再起動
3. コマンドファイルに有効な YAML frontmatter があるか確認

### MCPサーバーに接続できない

1. `.mcp.json` の構文を確認：
   ```bash
   cat .mcp.json | python3 -m json.tool
   ```
2. サービスが認証済みか確認：
   ```bash
   claude
   > /mcp
   ```
3. 必要に応じてコネクタを再認証

### フックが動作しない

1. `hooks.json` が有効な JSON か確認：
   ```bash
   cat ~/.claude/hooks/hooks.json | python3 -m json.tool
   ```
2. Node.js 18+ がインストールされているか確認：
   ```bash
   node --version
   ```
3. フックスクリプトに実行権限があるか確認：
   ```bash
   chmod +x scripts/hooks/*.js
   ```

## 次のステップ

- [設定ガイド](configuration-ja.md) — スキル、ルール、フックのカスタマイズ
- [スキル・コマンドリファレンス](reference-ja.md) — 全コマンドの詳細ドキュメント
- [テンプレート集](examples-ja.md) — 役割別CLAUDE.mdテンプレート
