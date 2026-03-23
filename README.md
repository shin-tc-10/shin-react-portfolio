# Next Portfolio Site

Shinのポートフォリオサイトです。Next.js（App Router）を用いて構築しています。

🔗 [https://shin-react-portfolio.vercel.app/](https://shin-react-portfolio.vercel.app/)

---

## 使用技術

| 技術 | 用途 |
|------|------|
| Next.js 14 (App Router) | フレームワーク |
| React 18 | UIライブラリ |
| Framer Motion | スクロールアニメーション |
| React Intersection Observer | 要素の表示検知 |
| React Scroll | ページ内スムーズスクロール |
| MUI (Material UI) | UIコンポーネント |
| Vercel | ホスティング |

---

## コンポーネント設計

### 設計方針

コンポーネントを**役割ごとにディレクトリで分類**する設計を採用しています。

- `layout/` : 全ページ共通のレイアウトコンポーネント
- `sections/` : ページ内の各セクションコンポーネント

役割の異なるコンポーネントを混在させないことで、ファイルの見通しを良くし、保守性を高めています。

### コンポーネント構成図

```
src/app/
├── layout.jsx              # 全ページ共通レイアウト（Header・Footer・メタ情報）
├── page.jsx                # トップページ（各セクションの組み立て）
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # ナビゲーション・ハンバーガーメニュー
│   │   └── Footer.jsx      # フッター
│   └── sections/
│       ├── Works.jsx       # 制作物一覧
│       ├── Skills.jsx      # スキル一覧
│       ├── Qualifications.jsx  # 資格
│       ├── SelfStudy.jsx   # 自己学習
│       ├── MyLink.jsx      # GitHubリンク
│       └── About.jsx       # 自己紹介
└── works/
    └── [id]/
        └── page.jsx        # 制作物詳細ページ（動的ルーティング）
```

### 各コンポーネントの役割

**layout.jsx**
App Router の RootLayout。全ページ共通の `<html>` / `<body>` 構造・メタ情報（SEO）・フォント設定を担当します。

**page.jsx**
トップページのエントリーポイント。各セクションコンポーネントを組み合わせてページを構成します。タイトルのフェードインアニメーションをuseState・useEffectで管理しています。

**Header.jsx**
ナビゲーションメニューとハンバーガーメニューを管理します。`react-scroll` によるページ内スムーズスクロールと `next/link` によるページ遷移を使い分けています。

**Works.jsx**
制作物をカード形式で一覧表示します。`react-intersection-observer` でスクロール検知し、`framer-motion` でフェードインアニメーションを実装しています。

**works/[id]/page.jsx**
Next.js の動的ルーティングを使った制作物詳細ページです。URLの `[id]` をもとに対応する制作物の詳細を表示します。

---

## ディレクトリ構成

```
shin-react-portfolio/
├── public/
│   └── images/         # 画像ファイル
├── src/
│   └── app/
│       ├── components/
│       │   ├── layout/
│       │   └── sections/
│       ├── works/[id]/
│       ├── globals.css
│       ├── layout.jsx
│       └── page.jsx
├── package.json
└── README.md
```

---

## 起動方法

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開いてください。
