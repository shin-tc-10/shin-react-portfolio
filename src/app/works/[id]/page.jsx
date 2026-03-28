
import NextPortfolioSiteImage from "../../../../public/images/next-portfolio-site.png";
import PhotoSearchAppImage from "../../../../public/images/photo-search-app.png";
import MeisouAppImage from "../../../../public/images/meisou-app.png";
import ReactTodoListImage from "../../../../public/images/react-todo-list.png";
import NextBlogAppImage from "../../../../public/images/next-blog-app.png";
import Link from "next/link";
import Image from "next/image";

const worksData = {
  "portfolio-site": {
    title: "ポートフォリオサイト",
    startDate: "2023.07.09",
    period: "約5ヶ月（2023.07〜2023.12、以降継続更新中）",
    tags: ["Next.js 14", "React 18", "Framer Motion", "MUI", "Vercel"],
    desc: "Next.js（App Router）で構築した自身のポートフォリオサイト。スクロールアニメーション・レスポンシブ対応・ハンバーガーメニューなどを実装。制作物詳細ページへの動的ルーティングも備えています。",
    features: ["スクロール連動フェードインアニメーション", "レスポンシブ対応（PC / タブレット / スマホ）", "ハンバーガーメニュー", "制作物詳細ページ（動的ルーティング）", "Vercelによる自動デプロイ"],
    siteUrl: "https://shin-react-portfolio.vercel.app/",
    githubUrl: "https://github.com/shin-tc-10/shin-react-portfolio",
    readmeUrl: "https://github.com/shin-tc-10/shin-react-portfolio#readme",
    image: NextPortfolioSiteImage,
  },
  "photo-search": {
    title: "写真検索アプリ",
    startDate: "2023.10.15",
    period: "約1.5ヶ月（2023.10〜2023.11）",
    tags: ["Next.js 13", "React 18", "TypeScript", "Tailwind CSS", "Pixabay API"],
    desc: "Pixabay APIを使ったフォト検索アプリ。キーワードを入力すると高品質な写真が一覧表示されます。非同期処理でAPIリクエストを実行し、レスポンシブなグリッドレイアウトで表示します。",
    features: ["キーワードによる写真検索（Pixabay API）", "グリッドレイアウト表示（モバイル1列・PC3列）", "各画像からPixabay元ページへリンク", "TypeScript による型安全な実装"],
    siteUrl: "https://next-photo-search-blond.vercel.app/",
    githubUrl: "https://github.com/shin-tc-10/next-photo-search",
    readmeUrl: null,
    image: PhotoSearchAppImage,
  },
  "meditation-app": {
    title: "瞑想アプリ「Serene」",
    startDate: "2026.03.15",
    period: "約1日（2026.03.15、Claude Codeで集中開発）",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Howler.js", "Framer Motion", "PWA"],
    desc: "「Serene」という名の瞑想・マインドフルネスタイマーアプリ。タイマー・呼吸ガイド・環境音・セッション履歴管理を備え、iOS Safariにも対応したPWA仕様のモバイルフレンドリーなデザインが特徴です。",
    features: ["瞑想タイマー（1〜60分、開始・一時停止・リセット）", "視覚的な進捗リング表示", "呼吸誘導アニメーション", "環境音の選択と音量調整", "セッション履歴の記録・表示・クリア（ローカル保存）", "PWA対応・iOS Safari対応"],
    siteUrl: "https://serene-meditation-app.vercel.app/",
    githubUrl: "https://github.com/shin-tc-10/serene-meditation-app",
    readmeUrl: null,
    image: MeisouAppImage,
  },
  "todo-app": {
    title: "Todo アプリ",
    startDate: "2023.10.09",
    period: "約1ヶ月（2023.10〜2023.11）",
    tags: ["React 18", "JavaScript", "Create React App", "Jest", "Testing Library"],
    desc: "Reactの学習用として作られたシンプルなTODOリストアプリ。追加・削除・検索の基本的な操作を実装し、カスタムフックによるロジック分離も取り入れた習作です。Jestによるユニットテストも実施しています。",
    features: ["TODOの追加・削除", "キーワード検索・フィルタリング", "カスタムフック（useTodo）によるロジック分離", "Jestによるユニットテスト"],
    siteUrl: "https://react-first-todo.vercel.app/",
    githubUrl: "https://github.com/shin-tc-10/react-first-todo",
    readmeUrl: null,
    image: ReactTodoListImage,
  },
  "blog-app": {
    title: "ブログアプリ",
    startDate: "2024.02.17",
    period: "約3日（2024.02.17〜2024.02.20）",
    tags: ["Next.js 14", "React 18", "TypeScript", "Supabase"],
    desc: "Next.js + Supabaseで構築したブログアプリ。記事のCRUD操作とユーザー認証（会員登録・ログイン）機能を備えたフルスタック構成の習作です。現在はサービスを停止しています。",
    features: ["記事一覧・詳細表示（SSR）", "記事の新規投稿・編集・削除", "ユーザー登録・ログイン（Supabase Auth）", "Supabaseによるバックエンド連携"],
    siteUrl: null,
    githubUrl: "https://github.com/shin-tc-10/next-blog-app",
    readmeUrl: null,
    image: NextBlogAppImage,
  },
};

export default function WorkDetail({ params }) {
  const work = worksData[params.id];

  if (!work) return <div style={{ padding: "100px 24px" }}>ページが見つかりません</div>;

  return (
    <div className="work-detail">
      <Link href="/#works" className="work-detail-back">
        ← 一覧に戻る
      </Link>

      <div className="work-detail-content">
        {/* 左: 画像 */}
        <div className="work-detail-img">
          <Image src={work.image} alt={work.title} />
        </div>

        {/* 右: 情報 */}
        <div className="work-detail-info">
          <h1 className="work-detail-title">{work.title}</h1>

          <div className="work-detail-meta">
            <p className="work-detail-date">制作開始日: {work.startDate}</p>
            <p className="work-detail-date">制作期間: {work.period}</p>
            <div className="work-detail-tags">
              {work.tags.map((tag) => (
                <span key={tag} className="work-detail-tag">{tag}</span>
              ))}
            </div>
          </div>

          <p className="work-detail-desc">{work.desc}</p>

          <div className="work-detail-features">
            <p className="work-detail-features-title">主な機能</p>
            <ul>
              {work.features.map((f) => (
                <li key={f} className="work-detail-feature-item">{f}</li>
              ))}
            </ul>
          </div>

          <div className="work-detail-buttons">
            {work.siteUrl && (
              <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className="work-detail-btn">
                サイトを見る
              </a>
            )}
            <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className="work-detail-btn">
              ソースコード
            </a>
            {work.readmeUrl && (
              <a href={work.readmeUrl} target="_blank" rel="noopener noreferrer" className="work-detail-btn">
                コンポーネント設計
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
