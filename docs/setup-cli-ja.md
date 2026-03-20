# CLIセットアップガイド

Claude Code CLIで「Everything Claude Code for Business」をインストール・設定するための完全ガイドです。

## 前提条件

- **Claude Code CLI** がインストール済み（[インストールガイド](https://docs.anthropic.com/en/docs/claude-code)）
- **Node.js 18+**（フックとスクリプトの実行に必要）
- **Git**（手動インストールの場合のみ必要 — プラグインシステム経由なら不要）

### Git のインストール

手動インストール方法を使う場合に Git が必要です：

**macOS:**
```bash
# Xcode Command Line Tools に含まれています
xcode-select --install

# または Homebrew 経由
brew install git
```

**Windows:**
[git-scm.com/download/win](https://git-scm.com/download/win) からダウンロードしてインストール

**Linux (Ubuntu/Debian):**
```bash
sudo apt update && sudo apt install git
```

インストール確認：
```bash
git --version
```

## インストール

### ステップ 1: プラグインシステムでインストール（推奨）

Claude Code を開いて以下のコマンドを実行します：

```bash
# 1. リポジトリをマーケットプレイスソースとして追加
/plugin marketplace add kenshikobayashi/everything-claude-code-for-business

# 2. プラグインをインストール
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business
```

#### インストールスコープ

`--scope` でプラグインのインストール先を制御できます：

```bash
# user スコープ（デフォルト）— すべてのプロジェクトで利用可能
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business --scope user

# project スコープ — .claude/settings.json 経由でチームと共有
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business --scope project

# local スコープ — このリポジトリで自分だけ（gitignore対象）
/plugin install everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business --scope local
```

#### プラグインの管理

```bash
/plugin                    # インタラクティブなプラグインマネージャーを開く
/plugin update ...         # 最新バージョンに更新
/plugin disable ...        # 一時的に無効化
/plugin enable ...         # 再有効化
/plugin uninstall ...      # 完全に削除
/reload-plugins            # 再起動なしで変更を適用
```

### ステップ 2: 代替方法 — 手動インストール

プラグインシステムを使わない場合は、手動でインストールできます：

**方法A: インストーラースクリプト**

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business
./install.sh
```

インストーラーはエージェント、スキル、ルール、フックを `~/.claude/` にコピーします。

**方法B: 個別コピー**

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
cd everything-claude-code-for-business

# 例：会議関連のスキルのみインストール
cp -r skills/meeting-prep/ ~/.claude/skills/
cp -r skills/meeting-minutes/ ~/.claude/skills/
cp -r skills/meeting-followup/ ~/.claude/skills/

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
│   ├── briefing/
│   │   └── SKILL.md
│   ├── email-writing/
│   │   └── SKILL.md
│   ├── meeting-prep/
│   │   └── SKILL.md
│   └── ... (スラッシュコマンド + ドメイン知識スキル)
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

**プラグインシステム:**
```bash
/plugin update everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business
```

**手動インストールの場合:**
```bash
cd everything-claude-code-for-business
git pull
./install.sh --update
```

## アンインストール

**プラグインシステム:**
```bash
/plugin uninstall everything-claude-code-for-business@kenshikobayashi/everything-claude-code-for-business
```

**手動インストールの場合:**
```bash
./install.sh --uninstall
```

または `~/.claude/` 配下のインストールされたファイルを手動で削除してください。

## トラブルシューティング

### スキルが表示されない

1. スキルディレクトリが `~/.claude/skills/` に存在するか確認：
   ```bash
   ls ~/.claude/skills/
   ```
2. Claude Code のセッションを再起動
3. SKILL.md ファイルに有効な YAML frontmatter があるか確認

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
- [スキルリファレンス](reference-ja.md) — 全スキル・コマンドの詳細ドキュメント
- [テンプレート集](examples-ja.md) — 役割別CLAUDE.mdテンプレート
