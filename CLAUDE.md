# CLAUDE.md — portfolio

## リポジトリの目的

ダークモードのポートフォリオサイト（GitHub: qwerrin/portfolio）。
素の HTML / CSS / JavaScript で実装。フレームワーク不使用。

## ファイル構成

```
portfolio/
├── index.html   ← メイン（Hero / Skills / Projects セクション）
├── style.css    ← CSS変数でダークテーマ管理
└── script.js    ← タイピングアニメーション・スクロール連動・スムーズスクロール
```

## デザイン仕様

```css
--bg: #0d1117;       /* ダーク背景（GitHub風） */
--surface: #161b22;  /* カード背景 */
--border: #30363d;   /* ボーダー */
--text: #c9d1d9;     /* 本文テキスト */
--accent: #58a6ff;   /* アクセントカラー（青） */
--green: #3fb950;    /* サブアクセント（緑） */
```

## Git 運用

Stop フックにより、セッション終了時に自動で `git add -A && git commit && git push` が実行される。

## Claude への指示

- デザインの一貫性を保つこと（CSS変数を使い、直接色を書かない）
- レスポンシブ対応を維持すること（`@media` クエリ）
- JavaScript はバニラのみ使用すること
