# Claude Desktop セットアップガイド

**Claude Desktop**（デスクトップアプリケーション）で「Everything Claude Code for Business」をインストール・利用するための完全ガイドです。CLIは不要です。

## 概要

Claude Desktop は Claude Code のGUIインターフェースを提供し、プラグイン・スキル・MCPサーバー・CLAUDE.mdプロジェクト指示をフルサポートしています。本プラグインのほぼすべての機能が Desktop で利用可能です（Agent Teams のみCLI専用）。

### Desktop と CLI の機能比較

| 機能 | CLI | Desktop |
|------|-----|---------|
| スラッシュコマンド（`/briefing` 等） | 対応 | 対応 |
| スキル（ドメイン知識） | 対応 | 対応 |
| エージェント（サブエージェント） | 対応 | 対応 |
| CLAUDE.md プロジェクト指示 | 対応 | 対応（共有） |
| MCPサーバー（Gmail、Slack等） | 対応 | 対応 |
| フック（自動トリガー） | 対応 | 対応 |
| ルール（強制ガイドライン） | 対応 | 対応 |
| Agent Teams | 対応 | 非対応 |
| ビジュアルdiffレビュー | 非対応 | 対応 |
| 並行セッション（タブ） | 別ターミナル | 対応 |
| スケジュールタスク | 外部cron | 内蔵UI |

## 前提条件

- **Claude Desktop** がインストール済み（macOS または Windows）
  - [claude.ai/download](https://claude.ai/download) からダウンロード
- **Git**（リポジトリのクローンに必要）

## インストール

### ステップ 1: リポジトリをクローン

ターミナル（macOS）またはPowerShell（Windows）を開いて実行：

```bash
git clone https://github.com/kenshikobayashi/everything-claude-code-for-business.git
```

クローン先のフルパスをメモしてください。ステップ 2 で必要です。

### ステップ 2: Claude Desktop でプロジェクトとして開く

1. **Claude Desktop** を起動
2. 左サイドバーの **Code** タブを開く
3. **Open folder** をクリック、またはクローンしたフォルダをウィンドウにドラッグ
4. Claude Desktop が自動的に以下を検出・読み込み：
   - `CLAUDE.md`（プロジェクト指示）
   - `.claude/` ディレクトリ（スキル、フック、ルール）
   - `.mcp.json`（MCPサーバー設定）

### ステップ 3: プラグインをインストール

1. プロンプト入力欄の横にある **[+]** ボタンをクリック
2. **Plugins（プラグイン）** を選択
3. **Add from path...（パスから追加）** をクリック
4. クローンしたリポジトリフォルダに移動して選択
5. プラグインがインストールされ、コンポーネントが登録される

インストール後、以下でコマンドを確認できます：
- **[+]** → **Slash commands（スラッシュコマンド）** をクリック
- またはプロンプトボックスで `/` を入力

### ステップ 4: MCPサーバーを接続（外部ツール連携）

MCPサーバーにより、Claude が Gmail・Google Calendar・Slack・Notion 等の外部サービスと連携できます。

**方法A: コネクタUI（最も簡単）**

1. プロンプト横の **[+]** ボタンをクリック
2. **Connectors（コネクタ）** を選択
3. 利用可能なサービスが表示されます。クリックして接続：
   - **Google Calendar** — スケジュール認識
   - **Gmail** — メールトリアージ・下書き作成
   - **Slack** — メッセージトリアージ・下書き作成
   - **Notion** — タスク管理・ナレッジベース
4. 各サービスの OAuth フローに従って認証

**方法B: 設定ファイル**

プロジェクトルートに `.mcp.json` を作成：

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

> **重要**: MCPサーバーの設定に `claude_desktop_config.json` を使わないでください。このファイルは Claude チャットアプリ用であり、Claude Code in Desktop では使用されません。代わりに `.mcp.json`（プロジェクト）または `~/.claude.json`（グローバル）を使用してください。

### ステップ 5: CLAUDE.md を設定

プロジェクトルートに `CLAUDE.md` を作成（または既存のものを編集）：

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

### ステップ 6: インストールを確認

1. プロンプトボックスで `/` を入力して利用可能なスラッシュコマンドを確認
2. `/briefing`、`/meeting-prep`、`/draft-email` 等のコマンドが表示されるはず
3. テスト実行：
   ```
   /briefing
   ```

## Desktop での使い方

### コマンドの実行

プロンプトボックスで `/` を入力、または **[+]** → **Slash commands** で全コマンドを表示。

**使用例：**

```
/briefing
```
→ カレンダー、タスク、受信トレイ、優先事項を含む朝のブリーフィング

```
/meeting-prep "Q1計画会議"
```
→ 指定した会議の事前準備パッケージを生成

```
/draft-email "CFOへの予算承認の返信"
```
→ 適切なトーンと構成のメール下書きを作成

### コンテキストの切り替え

`contexts/` ディレクトリのコンテキストファイルを参照して、Claude の動作モードを切り替えられます。使いたいモードを伝えるだけです：

```
マネージャーモードに切り替えてください
```
→ Claude が `contexts/manager.md` を読み込み、委任・状況追跡・チームコミュニケーションに注力

```
アナリストモードに切り替えてください
```
→ Claude が `contexts/analyst.md` を読み込み、データ・フレームワーク・構造化分析に注力

利用可能なモード: `manager`、`analyst`、`communicator`、`planner`（`contexts/` ディレクトリ参照）

### 複数セッションの活用

Claude Desktop はサイドバータブで並行セッションをサポートしています：

- **タブ 1**: 朝のブリーフィングとメールトリアージ
- **タブ 2**: 午後の会議準備
- **タブ 3**: 提案書ドキュメントの作業

各タブは独立した会話履歴を持ちつつ、同じ CLAUDE.md と MCP 接続を共有します。

### スケジュールタスクの活用

> **注意**: スケジュールタスクの利用可否は Claude Desktop のバージョンに依存します。サイドバーにタスク/スケジュールアイコンがあるか確認してください。利用できない場合は、CLIと外部cronを使用して定期タスクを設定してください。

お使いの Desktop バージョンがスケジュールタスクに対応している場合：

1. サイドバーのタスクアイコンをクリック
2. 新しいスケジュールタスクを作成
3. スケジュールを設定（例：平日毎朝 8:30）
4. コマンドを設定（例：`/briefing`）

これにより、手動操作なしで自動的な朝のブリーフィングが可能になります。

## Desktop 特有のヒント

### ビジュアル Diff レビュー

Claude がドキュメントを編集すると、Desktop はビジュアルな差分を表示します。特に以下の場面で便利です：
- 送信前の下書きレビュー
- 提案書の修正比較
- SOP更新内容の確認

### キーボードショートカット

| ショートカット | アクション |
|--------------|----------|
| `Cmd + /`（macOS） | スラッシュコマンドを表示 |
| `Cmd + N` | 新規セッションタブ |
| `Cmd + K` | クイックコマンドパレット |
| `Esc` | 現在の生成をキャンセル |

### 権限管理

Claude がMCPツールに初めてアクセスしようとすると、Desktop が権限を確認します：
- **Allow once（1回だけ許可）** — このリクエストのみ
- **Allow always（常に許可）** — この権限を記憶
- Desktop の設定で権限を管理可能

## ファイルの場所

### macOS

```
~/.claude/                          # Claude Code 設定ディレクトリ
~/.claude/settings.json             # 設定
~/.claude/skills/                   # カスタムスキル
~/.claude.json                      # グローバル MCP 設定

プロジェクト:
./CLAUDE.md                         # プロジェクト指示
./.mcp.json                         # プロジェクト MCP サーバー
./.claude/                          # プロジェクト固有の設定
```

### Windows

```
%APPDATA%\Claude\                   # Claude Code 設定ディレクトリ
%APPDATA%\Claude\settings.json      # 設定
%APPDATA%\Claude\skills\            # カスタムスキル

プロジェクト:
.\CLAUDE.md                         # プロジェクト指示
.\.mcp.json                         # プロジェクト MCP サーバー
.\.claude\                          # プロジェクト固有の設定
```

## アップデート

1. ターミナル / PowerShell を開く
2. クローンしたリポジトリに移動
3. 最新の変更を取得：
   ```bash
   git pull
   ```
4. Claude Desktop を再起動、またはプロジェクトをリロード

## トラブルシューティング

### コマンドが表示されない

1. リポジトリフォルダが Desktop のプロジェクトとして開かれていることを確認
2. **[+]** → **Plugins** でプラグインがインストール済み・有効であることを確認
3. プロジェクトのリロードを試す（フォルダを閉じて再度開く）

### MCPサーバーに接続できない

1. **[+]** → **Connectors** で接続状態を確認
2. サービスが切断されている場合、クリックして再認証
3. `.mcp.json` を使用していることを確認（`claude_desktop_config.json` ではなく）

### プラグインは読み込まれるがスキル/エージェントがない

1. プラグインのディレクトリ構造が正しいことを確認：
   ```
   everything-claude-code-for-business/
   ├── .claude-plugin/
   │   └── plugin.json        ← 必須
   ├── agents/                 ← .md ファイルを含む
   └── skills/                 ← SKILL.md を含むサブディレクトリ
   ```
2. `plugin.json` が有効な JSON であることを確認

### Desktop がフリーズ・遅延する

- アクティブな MCP 接続数を減らす
- 使用していないセッションタブを閉じる
- フックスクリプトがハングしていないか確認（`ECCB_DISABLED_HOOKS` で無効化）

## 次のステップ

- [設定ガイド](configuration-ja.md) — ワークフローに合わせたカスタマイズ
- [スキル・コマンドリファレンス](reference-ja.md) — 全ドキュメント
- [テンプレート集](examples-ja.md) — 役割別テンプレート
