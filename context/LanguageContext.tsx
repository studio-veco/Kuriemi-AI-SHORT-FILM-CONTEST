
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Locale = 'ja' | 'en' | 'zh';

type Translations = {
  common: {
    loading: string;
    submit: string;
    entryGuide: string;
    comingSoon: string;
    tbd: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  nav: {
    about: string;
    inspiration: string;
    schedule: string;
    judges: string;
    submitBtn: string;
  };
  hero: {
    officialContest: string;
    catchphrase: string;
    project: string;
    expansion: string;
    description: string;
    scroll: string;
    period: string;
    waitingList: string;
  };
  marquee: {
    text: string;
    sponsors: string;
  };
  whatIsThis: {
    title: string;
    desc: string;
  };
  about: {
    title: string;
    quote: string;
    author: string;
    conceptTitle: string;
    conceptDesc: string;
  };
  profile: {
    role: string;
    desc: string;
    job: string;
  };
  waitingList: {
    title: string;
    desc: string;
    name: string;
    email: string;
    xAccount: string;
    discordAccount: string;
    required: string;
    optional: string;
  };
  inspiration: {
    title: string;
    desc: string;
    moreBtn: string;
  };
  categories: {
    title: string;
    viewRequirements: string;
    closeRequirements: string;
    cat1Title: string;
    cat1Subtitle: string;
    cat1Desc: string;
    cat1Requirements: string[];
    cat2Title: string;
    cat2Subtitle: string;
    cat2Desc: string;
    cat2Requirements: string[];
  };
  schedule: {
    title: string;
    step2Date: string;
    step2Title: string;
    step2Desc: string;
    step3Date: string;
    step3Title: string;
    step3Desc: string;
    step4Date: string;
    step4Title: string;
    step4Desc: string;
    step5Date: string;
    step5Title: string;
    step5Desc: string;
  };
  judges: {
    title: string;
    subtitle: string;
    judge1Name: string;
    judge1Role: string;
    judge1Desc: string;
    judge2Name: string;
    judge2Role: string;
    judge2Desc: string;
    judge3Name: string;
    judge3Role: string;
    judge3Desc: string;
    judge4Name: string;
    judge4Role: string;
    judge4Desc: string;
    judge5Name: string;
    judge5Role: string;
    judge5Desc: string;
    judge6Name: string;
    judge6Role: string;
    judge6Desc: string;
    judge7Name: string;
    judge7Role: string;
    judge7Desc: string;
    judge8Name: string;
    judge8Role: string;
    judge8Desc: string;
    judge9Name: string;
    judge9Role: string;
    judge9Desc: string;
  };
  prizes: {
    title: string;
    totalPrize: string;
    grandPrizeTitle: string;
    grandPrizeAmount: string;
    grandPrizeNote: string;
    grandPrizeExtra: string;
    excellencePrizeTitle: string;
    excellencePrizeAmount: string;
    excellencePrizeNote: string;
    judgesPrizeTitle: string;
    judgesPrizeDesc: string;
    judgesPrizeAmount: string;
    nomineePrizeTitle: string;
    nomineePrizeAmount: string;
  };
  partners: {
    title: string;
  };
  cta: {
    title: string;
    btn: string;
    note: string;
  };
  message: {
    title: string;
    subtitle: string;
    desc: string;
  };
  entry: {
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    copyTags: string;
    guidelineTitle: string;
    specFormat: string;
    specRes: string;
    specFrame: string;
    specAudio: string;
    specModel: string;
  };
  faq: {
    title: string;
    categories: {
      title: string;
      items: { q: string; a: string }[];
    }[];
  };
  footer: {
    warningsTitle: string;
    warnings: string[];
    rightsTitle: string;
    rights: string[];
    links: {
      terms: string;
      privacy: string;
      guide: string;
      contact: string;
    };
  };
};

const translationsData: Record<Locale, Translations> = {
  ja: {
    common: {
      loading: "LOADING...",
      submit: "作品を応募",
      entryGuide: "Entry Guide",
      comingSoon: "COMING SOON",
      tbd: "TBD",
      send: "送信する",
      sending: "送信中...",
      success: "送信が完了しました。",
      error: "エラーが発生しました。もう一度お試しください。"
    },
    nav: {
      about: "Concept",
      inspiration: "Inspiration",
      schedule: "Schedule",
      judges: "Judges",
      submitBtn: "応募・作品一覧"
    },
    hero: {
      officialContest: "OFFICIAL CONTEST 2026",
      catchphrase: "創造を超えろ。",
      project: "powered by Creators' Wonderland",
      expansion: "AI SHORT FILM CONTEST",
      description: "思いついた瞬間が、\nそのまま作品になる時代へ。",
      scroll: "SCROLL TO EXPLORE",
      period: "ENTRY PERIOD",
      waitingList: "WAITING LIST"
    },
    marquee: {
      text: "#くりえみAIショート #KuriemiContest #ぴにょぐらむ",
      sponsors: ""
    },
    whatIsThis: {
      title: "About KURIEMI AI SHORT FILM CONTEST",
      desc: "実在のヒロイン「くりえみ」の<strong>公認素材</strong>を使い、\nCREATORS' WONDERLAND上でAIで短編動画を制作・応募するコンテスト。\n\nモデル自由（Sora2等の特定モデルの推奨なし）。\n初心者も歓迎。"
    },
    about: {
      title: "CONCEPT",
      quote: "日本は、ユーザーもメディアも新しい\nクリエイターを受け入れ、\n市場を一緒になって創ってきた。\nその奇跡が生んだ\nワンダーランドともいえる。",
      author: "— 中山淳雄｜エンタメ社会学者",
      conceptTitle: "",
      conceptDesc: "私たちはこの考えに共鳴し、生成AI時代のクリエイターが、創作し、学び、次のチャンスへつなげられる場として、Creators’ Wonderland を立ち上げました。\n本コンテストは、その第一弾となる「Creators’ Wonderland Awards」のスタート企画です。"
    },
    profile: {
      role: "AiHUB 執行役員 CMO / ぴにょきお株式会社 CEO",
      desc: "タレント、起業家としてSNS総フォロワー約250万人〜270万人規模を持ち、自己プロデュースと発信力でエンタメ領域の新潮流を牽引。バーチャルヒューマンやAIクリエイティブ事業を展開し、生成AIを“技術”から“文化”へ広げる挑戦を続けている。",
      job: "Talent / Entrepreneur"
    },
    waitingList: {
      title: "WAITING LIST",
      desc: "コンテストの最新情報やCreators' Wonderlandの早期アクセス権をお届けします。",
      name: "氏名",
      email: "メールアドレス",
      xAccount: "X アカウント",
      discordAccount: "Discord アカウント",
      required: "必須",
      optional: "任意"
    },
    inspiration: {
      title: "INSPIRATION",
      desc: "AIだからこそ描ける、未知の映像体験。\nあなたのクリエイティビティを刺激するサンプル作品。",
      moreBtn: "サンプルをもっと見る"
    },
    categories: {
      title: "CATEGORIES",
      viewRequirements: "要件を見る",
      closeRequirements: "閉じる",
      cat1Title: "10秒チャレンジ部門",
      cat1Subtitle: "（カジュアル）",
      cat1Desc: "アイデア勝負・拡散狙い。\n一瞬で心を掴むインパクトを。",
      cat1Requirements: [
        "動画尺：10秒程度",
        "比率/解像度：9:16 縦動画 720p以上",
        "フレームレート：24, 30, 60fps 推奨",
        "音声（音量）：-14LUFS 推奨",
        "動画フォーマット：h.264(mp4)",
        "生成AIモデル・ワークフロー：応募要項に、使用した生成AIモデルとワークフローを記載してください。"
      ],
      cat2Title: "ショートフィルム部門",
      cat2Subtitle: "（本格派）",
      cat2Desc: "物語・世界観・完成度勝負。\nAIだからこそ描けるシネマティックな体験を。",
      cat2Requirements: [
        "動画尺：1~10分推奨",
        "比率/解像度：16:9 横動画 1080p以上 推奨",
        "フレームレート：24, 30, 60fps 推奨",
        "音声（音量）：-14LUFS 推奨",
        "動画フォーマット：h.264 (mp4)",
        "生成AIモデル・ワークフロー：応募要項に、使用した生成AIモデルとワークフローを記載してください。"
      ]
    },
    schedule: {
      title: "SCHEDULE",
      step2Date: "2026.02.24 — 03.31",
      step2Title: "募集期間",
      step2Desc: "作品制作・応募受付。",
      step3Date: "2026.04.01 — 04.14",
      step3Title: "一次審査",
      step3Desc: "応募作品の中からファイナリストを選出。",
      step4Date: "2026.04.15 — 04.25",
      step4Title: "最終審査",
      step4Desc: "ファイナリストの中から受賞者を決定。",
      step5Date: "2026.05 Early",
      step5Title: "結果発表",
      step5Desc: "オフラインまたはオンラインでの授賞式イベント。"
    },
    judges: {
      title: "JUDGES",
      subtitle: "業界のトップランナーたちが、あなたの作品を審査します。",
      judge1Name: "とうや",
      judge1Role: "インフルエンサー",
      judge1Desc: "エンタメ × Tech 領域で PM／PdM／アーキテクト として多数のプロジェクトを推進. 日本 Linux 協会や日本医師会 ORCA Project の立ち上げ参画、和組 DAO 運営・SBT 開発なども手がける. 生成 AI の研究開発とコミュニティ活動を背景に、企業が安心して使える AI 基盤やトレーサビリティ整備にも取り組む.\n本アワードには主催チームの技術側メンバーとして参加.",
      judge2Name: "くりえみ",
      judge2Role: "AiHUB 執行役員 CMO／ぴにょきお株式会社 CEO",
      judge2Desc: "タレント・起業家として SNS 総フォロワー約 250〜270 万人規模を持ち、自己プロデュースと発信力でエンタメ領域の新潮流を牽引. バーチャルヒューマンや AI クリエイティブ事業を展開し、生成 AI を “技術” から “文化” へ広げる挑戦を続ける. 本アワードでは公式 IP 提供者として審査に参加し、表現の面白さと IP へのリスペクトの両面から作品を丁寧に評価する.",
      judge3Name: "井上博明",
      judge3Role: "AiHUB エグゼクティブプロデューサー",
      judge3Desc: "手塚プロダクションで『火の鳥2772 愛のコスモゾーン』や TV アニメ『鉄腕アトム』（1980年版）の制作進行を担当. 以後、ガイナックス設立に参画し、『王立宇宙軍 オネアミスの翼』『トップをねらえ！』などの制作にも携わる. AIC 等でプロデューサーとして経験を重ね、現在は株式会社オニロ代表として企画・制作にも従事. 本アワードには主催側メンバーとして参加.",
      judge4Name: "鈴木おさむ",
      judge4Role: "スタートアップファクトリー 代表",
      judge4Desc: "放送作家として数々の国民的ヒット番組を手掛け、映画・ドラマの脚本・監督、小説の執筆など多岐にわたり活躍. 2024年3月末に放送作家・脚本家を引退し、現在はスタートアップファクトリー代表として、若手起業家の支援や新規事業のプロデュースに注力している.",
      judge5Name: "中山淳雄",
      judge5Role: "エンタメ社会学者",
      judge5Desc: "エンタメ産業の構造やビジネスモデルを研究する社会学者. 著書『推しエコノミー』『オタク経済圏創世記』などで知られ、日本のコンテンツ産業の海外展開やテクノロジーとの融合について深い洞察を持つ. 本アワードでは「クリエイターワンダーランド」の提唱者として参加.",
      judge6Name: "Yves Dalbiez",
      judge6Role: "映画監督",
      judge6Desc: "国際的な映像制作の現場で活躍するディレクター. 視覚効果（VFX）や最新のデジタル技術を用いた映像表現に精通しており、AIを用いた新しいストーリーテリングの可能性を探求している.",
      judge7Name: "Matty Shimura",
      judge7Role: "Chroma Awards プロデューサー",
      judge7Desc: "グローバルなAIアートコンペティション「Chroma Awards」のプロデューサー. AIクリエイターのコミュニティ形成や、テクノロジーとアートの融合を推進する活動を行っている.",
      judge8Name: "白井暁彦",
      judge8Role: "AICU Inc. CEO / 博士（工学）",
      judge8Desc: "（Shirai Akihiko）\nメタバース研究開発、VRエンタメシステム、メディアアート、写真・画像工学、生成AIを専門とする博士（工学）. デジタルハリウッド大学大学院 特任教授. 「つくる人をつくる」をビジョンにする AICU Inc. CEO、AICU Japan 株式会社 代表取締役. 著書に『未来のゲームデザイン』『AIとコラボして神絵師になる 論文から読み解くStable Diffusion』『Stable Diffusion スタートガイド』『ComfyUIマスターガイド』. インプレス「窓の杜」で『生成AIストリーム』連載中. 『月刊アイキューマガジン』編集長. 個人および,「AICU media」で年間700件のブログを書き、クリエイティブ分野の購読者を中心に総フォロワー2万人、年間150万PVを超える. クリエイティブAIメディアと「つくる人をつくる」サービス開発を通してAI時代の「つくる人」を応援している.",
      judge9Name: "岡本美津子",
      judge9Role: "東京藝術大学大学院映像研究科企画開発研究室",
      judge9Desc: "東京藝術大学大学院映像研究科 教授。専門はメディア文化、コンテンツ企画開発。NHKエグゼクティブ・プロデューサーとして、数多くの番組企画やデジタルコンテンツ制作に従事し、メディアの進化に多大な貢献を果たしてきた。本アワードでは、映像表現の歴史的文脈と最新技術の融合という視点から審査に参加する。"
    },
    prizes: {
      title: "PRIZES",
      totalPrize: "賞金総額 111万円",
      grandPrizeTitle: "最優秀賞",
      grandPrizeAmount: "賞金50万円",
      grandPrizeNote: "（海外ユーザーの場合は50万円分のamazon point）",
      grandPrizeExtra: "副賞 HP PC",
      excellencePrizeTitle: "優秀賞",
      excellencePrizeAmount: "賞金20万円",
      excellencePrizeNote: "（海外ユーザーの場合は20万円分のamazon point）",
      judgesPrizeTitle: "審査員賞",
      judgesPrizeDesc: "総評コメント",
      judgesPrizeAmount: "3万円 7名",
      nomineePrizeTitle: "最終選考ノミネート",
      nomineePrizeAmount: "1万円 20名"
    },
    partners: {
      title: "PARTNERS & SPONSORS"
    },
    cta: {
      title: "あなたの作品をお待ちしています",
      btn: "作品を応募",
      note: "※応募フォームへ移動します"
    },
    message: {
      title: "From Technology To Culture",
      subtitle: "単なる技術から、新しい文化へ",
      desc: "クリエイターワンダーランドは、日本発の新しいクリエイティブ・カルチャーが生まれる「世界No.1の拠点」を目指します。\n\n日本のIPとクリエイターが集い、生成AIが単なる「技術」を超えて、一つの「文化」へと昇華する——.\n私たちは, その歴史的な瞬間を創り出したいと考えています。\n\n世界を熱狂させる作品や成功事例を共に生み出し、次の10年を創るコンテンツの源流を、一緒に築き上げましょう。\n\nこの「ワンダーランド」を創り出す仲間に、ぜひ加わってください。"
    },
    entry: {
      title: "ENTRY PROCESS",
      step1Title: "Creators' Wonderland に登録・ログイン",
      step1Desc: "規約への同意と連絡先情報を登録し、ログインしてください。",
      step2Title: "CW上で作品を投稿",
      step2Desc: "・ファイル容量が 20MB以内 の場合：作品データをそのままアップロード\n・20MBを超える作品の場合：作品の冒頭部分（抜粋）をアップロードし、全編を YouTube 等の動画プラットフォームに公開したうえで、そのURLを作品投稿時に添付してください。",
      step3Title: "コンテストに作品をエントリー",
      step3Desc: "CW内のコンテストページから、投稿済み作品を選択してエントリーしてください。",
      step4Title: "SNSへ投稿（任意）",
      step4Desc: "ハッシュタグ「#くりえみAIコンテスト」「#kuriemiAIcontest」をつけてSNSに作品を投稿してください。",
      copyTags: "COPY TAGS",
      guidelineTitle: "SUBMISSION GUIDELINE (COMMON)",
      specFormat: "H.264 / .mp4",
      specRes: "1080p 推奨",
      specFrame: "30fps 推奨",
      specAudio: "権利クリア必須 / 14 LUFS目安",
      specModel: "自由 (使用モデル名を記載)"
    },
    faq: {
      title: "FAQ",
      categories: [
        {
          title: "■参加・応募条件",
          items: [
            { q: "1人で複数作品を応募できますか？", a: "【TBD】応募数の上限は規約で案内します（例：部門ごとに◯本まで等）。" },
            { q: "チームでの参加はできますか？", a: "可能です。応募手続きは代表者が行い、受賞連絡も代表者宛に行います。分配はチーム内でご相談ください。" },
            { q: "海外からも参加できますか？", a: "可能です。ただし賞品配送・賞金支払などは居住国によって制限が生じる場合があります。" }
          ]
        },
        {
          title: "■CW（Creators’ Wonderland）・アカウント周り",
          items: [
            { q: "応募にはCreators’ Wonderlandへの登録が必要ですか？", a: "はい。応募（投稿・エントリー）はCW上で行います。" },
            { q: "作品投稿とコンテスト応募（エントリー）の違いは？", a: "「作品投稿」は、作品をCW上に投稿することです。一方、「コンテスト応募（エントリー）」は、その投稿済みの作品をコンテストに応募する手続きを指します。この両方の手続きが完了して初めて、正式な応募となります。" }
          ]
        },
        {
          title: "■応募手順（投稿・ファイル・URL）",
          items: [
            { q: "ファイル容量の上限はありますか？", a: "20MB以内のファイルは、そのままアップロードが可能です。20MBを超える場合は、冒頭部分を抜粋してアップロードし、全編へのURLを添付してください。" },
            { q: "全編の公開先はYouTube以外でもいいですか？", a: "YouTubeとVimeoのみ対応しています。" },
            { q: "URLの動画は「限定公開」でもいいですか？", a: "応募する際は、必ず公開されている作品を提出してください。" },
            { q: "応募後に作品の差し替えはできますか？", a: "応募作品の差し替えはできません。応募期間内であれば、作品を一度削除してから再度ご応募いただくことは可能です。" }
          ]
        },
        {
          title: "■作品仕様（規格）",
          items: [
            { q: "解像度やアスペクト比は厳密に守る必要がありますか？", a: "厳密に順守する必要はございませんが、推奨事項に沿っていただくことをお勧めいたします。" },
            { q: "音量（-14 LUFS）がよくわかりません。", a: "音量の目安を設けております。音量が極端に大きすぎたり小さすぎたりする動画は、視聴のしやすさの点から不利になる可能性がありますので、この目安を参考にしてください。" }
          ]
        },
        {
          title: "■公式素材（くりえみ素材）・配布",
          items: [
            { q: "素材は誰でも使えますか？", a: "本コンテストの参加者向けに提供しております。利用範囲はガイドラインに従ってください。" },
            { q: "素材をSNSや別の場所に再配布してもいい？", a: "提供素材の再配布はご遠慮ください。" }
          ]
        },
        {
          title: "■賞・賞金・連絡",
          items: [
            { q: "受賞した場合、どうやって連絡が来ますか？", a: "運営より、ご登録いただいた連絡先（チーム応募の場合は代表者の連絡先）へご連絡いたします。" }
          ]
        },
        {
          title: "■権利・利用",
          items: [
            { q: "応募作品の著作権は主催者に譲渡されますか？", a: "基本は応募者に帰属し、主催者は広報等で利用できる許諾をいただく形が一般的です。規約で明記します。" },
            { q: "作品は二次利用されますか？", a: "二次利用の範囲（紹介記事/上映/広告等）と許諾の取り方（同意チェック）を明記します。" },
            { q: "自分の作品を自分のポートフォリオに載せてもいいですか？", a: "はい、可能です。ただし、第三者の権利を侵害しない範囲でお願いいたします。" },
            { q: "BGMや効果音は何を使っていい？", a: "著作権フリーの素材のみを使用し、フリー素材に関しても利用規約をご確認ください。" }
          ]
        },
        {
          title: "■禁止事項・コンテンツガイド",
          items: [
            { q: "やってはいけない表現は？", a: "権利侵害、差別・誹謗中傷、過度な暴力/性的表現、なりすまし、虚偽表示などは禁止されております。" },
            { q: "他人の顔や有名人を作品に出してもいいですか？", a: "原則として、肖像権やパブリシティ権の問題があるため、禁止しております。（詳細は規約をご覧ください）。" },
            { q: "既存作品のキャラやロゴを入れてもいい？", a: "権利者の許諾がない限り、ご使用いただけません。" }
          ]
        },
        {
          title: "■仕様トラブル・運用",
          items: [
            { q: "投稿した作品が表示されません。", a: "通信状況や審査待ち（モデレーション）状態の可能性がございます。しばらくお待ちいただいても解決しない場合は、お問い合わせください。" },
            { q: "間違って別の部門に応募してしまいました。", a: "応募作品の差し替えはできません。応募期間内であれば、作品を一度削除してから再度ご応募いただくことは可能です。" }
          ]
        }
      ]
    },
    footer: {
      warningsTitle: "参加条件・禁止事項",
      warnings: [
        "● 条件：X公開アカ／指定タグ／期日内投稿／規約同意／オリジナル（チーム応募可）",
        "● 禁止：他者の権利侵害、差別・中傷、過度な暴力/性的表現、なりすまし、不正投票 等",
        "● 使用モデル・外部素材の出所明記は必須"
      ],
      rightsTitle: "権利と利用",
      rights: [
        "● 作品の著作権は原則クリエイターに帰属します。",
        "● 応募時に、主催による非独占的な利用許諾（告知・展示・配信等）に同意いただきます。",
        "● 「くりえみ」カメオ素材は配布ガイドの範囲内で使用してください（再配布不可）。"
      ],
      links: {
        terms: "応募規約",
        privacy: "プライバシーポリシー",
        guide: "素材利用ガイド",
        contact: "お問い合わせ"
      }
    }
  },
  en: {
    common: { loading: "LOADING...", submit: "Submit", entryGuide: "Entry Guide", comingSoon: "COMING SOON", tbd: "TBD", send: "Send", sending: "Sending...", success: "Success", error: "Error" },
    nav: { about: "Concept", inspiration: "Inspiration", schedule: "Schedule", judges: "Judges", submitBtn: "Submit" },
    hero: { officialContest: "OFFICIAL CONTEST 2026", catchphrase: "Go Beyond.", project: "powered by CW", expansion: "AI CONTEST", description: "Imagination becomes reality.", scroll: "SCROLL", period: "PERIOD", waitingList: "LIST" },
    marquee: { text: "", sponsors: "" },
    whatIsThis: { title: "About", desc: "Contest using Kuriemi assets." },
    about: { title: "CONCEPT", quote: "Miracle Wonderland", author: "Nakayama", conceptTitle: "", conceptDesc: "We launched Creators’ Wonderland for the AI era. This is the first Awards project." },
    profile: {
      role: "AiHUB CMO / Pinocchio CEO",
      desc: "Kuriemi is a talent and entrepreneur leading new trends in entertainment.",
      job: "Talent / Entrepreneur"
    },
    waitingList: {
      title: "WAITING LIST",
      desc: "Get updates and early access.",
      name: "Name",
      email: "Email",
      xAccount: "X Account",
      discordAccount: "Discord Account",
      required: "Required",
      optional: "Optional"
    },
    inspiration: { title: "INSPIRATION", desc: "Sample works.", moreBtn: "View More" },
    categories: { title: "CATEGORIES", viewRequirements: "View", closeRequirements: "Close", cat1Title: "10s Challenge", cat1Subtitle: "Casual", cat1Desc: "Impact.", cat1Requirements: [], cat2Title: "Short Film", cat2Subtitle: "Pro", cat2Desc: "Story.", cat2Requirements: [] },
    schedule: { title: "SCHEDULE", step2Date: "2026.02.24 — 03.31", step2Title: "Submission", step2Desc: "", step3Date: "2026.04.01 — 04.14", step3Title: "Primary Review", step3Desc: "", step4Date: "2026.04.15 — 04.25", step4Title: "Final Review", step4Desc: "", step5Date: "2026.05 Early", step5Title: "Result Announcement", step5Desc: "" },
    judges: { title: "JUDGES", subtitle: "", judge1Name: "", judge1Role: "", judge1Desc: "", judge2Name: "", judge2Role: "", judge2Desc: "", judge3Name: "", judge3Role: "", judge3Desc: "", judge4Name: "", judge4Role: "", judge4Desc: "", judge5Name: "", judge5Role: "", judge5Desc: "", judge6Name: "", judge6Role: "", judge6Desc: "", judge7Name: "", judge7Role: "", judge7Desc: "", judge8Name: "", judge8Role: "", judge8Desc: "", judge9Name: "", judge9Role: "", judge9Desc: "" },
    prizes: { title: "PRIZES", totalPrize: "", grandPrizeTitle: "", grandPrizeAmount: "", grandPrizeNote: "", grandPrizeExtra: "", excellencePrizeTitle: "", excellencePrizeAmount: "", excellencePrizeNote: "", judgesPrizeTitle: "", judgesPrizeDesc: "", judgesPrizeAmount: "", nomineePrizeTitle: "", nomineePrizeAmount: "" },
    partners: { title: "PARTNERS" },
    cta: { title: "", btn: "Submit", note: "" },
    message: { title: "", subtitle: "", desc: "" },
    entry: { title: "PROCESS", step1Title: "Register", step1Desc: "", step2Title: "Upload", step2Desc: "", step3Title: "Entry", step3Desc: "", step4Title: "SNS", step4Desc: "", copyTags: "", guidelineTitle: "", specFormat: "", specRes: "", specFrame: "", specAudio: "", specModel: "" },
    faq: { title: "FAQ", categories: [] },
    footer: { warningsTitle: "", warnings: [], rightsTitle: "", rights: [], links: { terms: "", privacy: "", guide: "", contact: "" } }
  },
  zh: {
    common: { loading: "LOADING...", submit: "提交", entryGuide: "指南", comingSoon: "COMING SOON", tbd: "TBD", send: "发送", sending: "发送中...", success: "成功", error: "错误" },
    nav: { about: "Concept", inspiration: "Inspiration", schedule: "Schedule", judges: "評審", submitBtn: "提交" },
    hero: { officialContest: "OFFICIAL CONTEST 2026", catchphrase: "超越想像", project: "powered by CW", expansion: "AI 競賽", description: "想像力成為現實", scroll: "SCROLL", period: "期間", waitingList: "列表" },
    marquee: { text: "", sponsors: "" },
    whatIsThis: { title: "關於", desc: "使用 Kuriemi 素材的競賽" },
    about: { title: "CONCEPT", quote: "奇蹟樂園", author: "中山", conceptTitle: "", conceptDesc: "我們為 AI 時代推出了 Creators’ Wonderland。這是第一個大獎項目。" },
    profile: {
      role: "AiHUB 執行董事 CMO / Pinocchio CEO",
      desc: "Kuriemi 是一位引領娛樂圈新潮流的藝人和企業家。",
      job: "Talent / Entrepreneur"
    },
    waitingList: {
      title: "等待名單",
      desc: "獲取更新和早期訪問權限。",
      name: "姓名",
      email: "電子郵件",
      xAccount: "X 賬號",
      discordAccount: "Discord 賬號",
      required: "必填",
      optional: "選填"
    },
    inspiration: { title: "INSPIRATION", desc: "樣品展示", moreBtn: "查看更多" },
    categories: { title: "CATEGORIES", viewRequirements: "查看", closeRequirements: "關閉", cat1Title: "10秒挑戰", cat1Subtitle: "休閒", cat1Desc: "衝擊力", cat1Requirements: [], cat2Title: "短片", cat2Subtitle: "專業", cat2Desc: "故事", cat2Requirements: [] },
    schedule: { title: "SCHEDULE", step2Date: "2026.02.24 — 03.31", step2Title: "徵稿期間", step2Desc: "", step3Date: "2026.04.01 — 04.14", step3Title: "初審", step3Desc: "", step4Date: "2026.04.15 — 04.25", step4Title: "終審", step4Desc: "", step5Date: "2026.05 Early", step5Title: "結果公佈", step5Desc: "" },
    judges: { title: "評審", subtitle: "", judge1Name: "", judge1Role: "", judge1Desc: "", judge2Name: "", judge2Role: "", judge2Desc: "", judge3Name: "", judge3Role: "", judge3Desc: "", judge4Name: "", judge4Role: "", judge4Desc: "", judge5Name: "", judge5Role: "", judge5Desc: "", judge6Name: "", judge6Role: "", judge6Desc: "", judge7Name: "", judge7Role: "", judge7Desc: "", judge8Name: "", judge8Role: "", judge8Desc: "", judge9Name: "", judge9Role: "", judge9Desc: "" },
    prizes: { title: "PRIZES", totalPrize: "", grandPrizeTitle: "", grandPrizeAmount: "", grandPrizeNote: "", grandPrizeExtra: "", excellencePrizeTitle: "", excellencePrizeAmount: "", excellencePrizeNote: "", judgesPrizeTitle: "", judgesPrizeDesc: "", judgesPrizeAmount: "", nomineePrizeTitle: "", nomineePrizeAmount: "" },
    partners: { title: "合作伙伴" },
    cta: { title: "", btn: "提交", note: "" },
    message: { title: "", subtitle: "", desc: "" },
    entry: { title: "流程", step1Title: "註冊", step1Desc: "", step2Title: "上傳", step2Desc: "", step3Title: "報名", step3Desc: "", step4Title: "SNS", step4Desc: "", copyTags: "", guidelineTitle: "", specFormat: "", specRes: "", specFrame: "", specAudio: "", specModel: "" },
    faq: { title: "FAQ", categories: [] },
    footer: { warningsTitle: "", warnings: [], rightsTitle: "", rights: [], links: { terms: "", privacy: "", guide: "", contact: "" } }
  }
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('ja');

  const value = {
    locale,
    setLocale,
    t: translationsData[locale]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
