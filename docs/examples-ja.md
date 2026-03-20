# テンプレート集 — 役割別 CLAUDE.md テンプレート

一般的なビジネスロール向けのCLAUDE.mdテンプレートです。最も近いロールのテンプレートをコピーしてカスタマイズしてください。

---

## スタートアップ CEO / 創業者

```markdown
# Business Context

## User
- 名前: 山田 太郎
- メール: yamada@startup.co.jp
- 会社: スタートアップ株式会社（シリーズA、25名）
- 役職: CEO / 共同創業者
- タイムゾーン: Asia/Tokyo

## MCP Integrations
- Gmail: yamada@startup.co.jp
- Google Calendar: primary (Asia/Tokyo)
- Slack: startup-team
- Notion: 取締役会DB, OKR DB, 採用パイプライン

## Preferences
- Language: 日本語
- メールトーン: プロフェッショナルだが温かみのある
- 下書きポリシー: 常に下書き作成、自動送信禁止
- 議事録: 投資家コミットメントは必ず別セクション
- 優先シグナル: 投資家メール → 顧客メール → チーム → ベンダー

## Key Context
- 資金調達: シリーズB（Q2ターゲット）
- 取締役会: 月1回、最終木曜日
- 全社会: 隔週金曜 16:00
- 投資家アップデート: 月1回、第1月曜日

## コミュニケーションルール
- 投資家: フォーマル、データドリブン、常にメトリクスを含める
- チーム: 透明性、モチベーション、簡潔に
- 顧客エスカレーション: 共感的、解決志向
- 取締役会報告: Wins / Challenges / Asks の構成

## 敬語ルール
- 投資家: 尊敬語 + 謙譲語（最高敬語レベル）
- 取締役: 尊敬語 + 謙譲語
- チーム: 丁寧語
- 顧客: 尊敬語 + 謙譲語
```

---

## エンジニアリングマネージャー

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
- Slack: techco-workspace (U0EXAMPLE01)
- Notion: タスクDB (collection://xxxx), PJ DB (collection://yyyy)

## Preferences
- Language: 日本語
- 下書きポリシー: 常に下書き作成、自動送信禁止
- 1on1頻度: 週1回、30分
- スプリント: 2週間、月曜開始

## チーム
- 直属: エンジニア X名
- 上司: VP Engineering
- 横連携: PM、デザイン、QA

## コミュニケーションルール
- 1on1メモ: プライベート、Notion保存、本人の同意なく共有しない
- フィードバック: SBIフレームワーク（状況-行動-影響）
- エスカレーション: 緊急 → Slack DM、追跡 → チケット
- スプリントレトロ: 安全な場、非難なし、アクション重視

## 定例
- スタンドアップ: 毎日 09:00（15分、金曜は非同期）
- スプリント計画: 隔週月曜 10:00
- レトロ: 隔週火曜 14:00
- 1on1: 月/火 午後
```

---

## プロダクトマネージャー

```markdown
# Business Context

## User
- 名前: 佐藤 花子
- メール: sato@product.co.jp
- 会社: プロダクト株式会社（B2B SaaS、200名）
- 役職: シニアプロダクトマネージャー、グロースチーム
- タイムゾーン: Asia/Tokyo

## MCP Integrations
- Gmail: sato@product.co.jp
- Google Calendar: primary
- Slack: product-team
- Linear: growth-squad
- Notion: PRD DB, ユーザーリサーチDB, メトリクスダッシュボード

## Preferences
- Language: 日本語
- 下書きポリシー: 常に下書き作成、自動送信禁止
- PRDフォーマット: 課題 → 仮説 → 解決策 → メトリクス → タイムライン
- 意思決定ログ: 決定事項は理由とセットで必ず記録
- 優先度フレームワーク: RICE（Reach × Impact × Confidence / Effort）

## ステークホルダー
- エンジニアリング: Alex（EM）、チーム6名
- デザイン: Mike（リードデザイナー）
- データ: Carol（データアナリスト）
- 営業: Tom（営業リード、機能要望）
- CS: Rachel（カスタマーサクセス、バグ報告）
- リーダーシップ: VP Product（月次レビュー）

## コミュニケーションルール
- PRDレビュー: ドラフト共有 → 48h非同期フィードバック → 同期議論
- 営業からの機能要望: Notionに記録、週次グルーミングで優先度付け
- 顧客エスカレーション: 4h以内に受領確認、24h以内に対応計画
- ステークホルダー報告: 週次金曜メール、月次全社プレゼン
```

---

## 営業リーダー

```markdown
# Business Context

## User
- 名前: 田中 一郎
- メール: tanaka@sales.co.jp
- 会社: セールス株式会社（ミドルマーケットSaaS）
- 役職: 営業部長、AE 12名 + SDR 4名
- タイムゾーン: Asia/Tokyo

## MCP Integrations
- Gmail: tanaka@sales.co.jp
- Google Calendar: primary
- Slack: salesco-jp
- Notion: 案件レビューDB, プレイブックDB

## Preferences
- Language: 日本語
- メールトーン: 温かみがあり、自信に満ちた、行動志向
- 下書きポリシー: 常に下書き作成、自動送信禁止
- フォーキャスト: 週次月曜レビュー、月次経営報告
- 案件レビュー: 木曜 14:00、MEDDICフレームワーク

## パイプラインコンテキスト
- Q1目標: 2.4億円 ARR
- 現在のパイプライン: 8.2億円（3.4倍カバレッジ）
- 平均案件サイズ: 450万円 ARR
- 商談サイクル: 45-60日
- 受注率: 28%

## コミュニケーションルール
- 顧客メール: パーソナライズ、具体的な課題を参照
- 社内報告: データファースト、パイプラインメトリクスを必ず含む
- 経営報告: 売上インパクト、フォーキャスト信頼度
- 失注分析: Notionに競合インテルとともに記録
```

---

## コンサルタント

```markdown
# Business Context

## User
- 名前: パク ダビド
- メール: park@consulting.co.jp
- 会社: コンサルティング株式会社（戦略・オペレーション）
- 役職: シニアコンサルタント
- タイムゾーン: Asia/Tokyo

## MCP Integrations
- Gmail: park@consulting.co.jp
- Google Calendar: primary
- Slack: consulting-jp
- Notion: クライアントDB, デリバラブルトラッカー, テンプレートライブラリ

## Preferences
- Language: 日本語 / English（バイリンガルデリバラブルが一般的）
- メールトーン: フォーマル、権威的
- 下書きポリシー: 常に下書き作成、自動送信禁止
- デリバラブルフォーマット: ピラミッド原則（結論先出し）
- スライド設計: アクションタイトル + エビデンスボディ

## 現在のエンゲージメント
- クライアントA: 日本市場参入戦略 — 残り8週間
- クライアントB: 業務効率化レビュー — 残り3週間
- BD: 提案書2件がパイプライン中

## コミュニケーションルール
- クライアント連絡: 必ずエンゲージメントマネージャー経由
- 社内: クイックな質問 → Slack、意思決定 → メール
- 提案書: 状況 → 課題 → 解決策 のフォーマット
- 週次報告: EMに毎週、クライアントに隔週

## 品質基準
- すべてのデリバラブル: クライアント提出前にピアレビュー必須
- データ: 数値のトリプルチェック、すべてのソースを引用
- ビジュアル: ブランドカラー統一、クリップアート禁止
- 言語: 定義なしの専門用語禁止、読者レベルに合わせた複雑さ
```
