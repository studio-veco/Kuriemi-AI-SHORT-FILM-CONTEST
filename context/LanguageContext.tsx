
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Locale = 'ja' | 'en' | 'zh';

type Translations = {
  common: {
    loading: string;
    submit: string;
    viewMaterials: string;
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
      viewMaterials: "素材を見る",
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
      project: "produced by Creators' Wonderland",
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
      conceptDesc: "私たちはこの考えに共鳴し、生成AI時代のクリエイターが、創作し、学び、次のチャンスへつなげられる場として、Creators' Wonderland を立ち上げました。\n本コンテストは、その第一弾となる「Creators' Wonderland Awards」のスタート企画です。"
    },
    profile: {
      role: "AiHUB 執行役員 CMO / ぴにょきお株式会社 CEO",
      desc: "タレント、起業家としてSNS総フォロワー約250万人〜270万人規模を持ち、自己プロデュースと発信力でエンタメ領域の新潮流を牽引。バーチャルヒューマンやAIクリエイティブ事業を展開し、生成AIを「技術」から「文化」へ広げる挑戦を続けている。",
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
      judge1Desc: "エンタメ × Tech 領域で PM／PdM／アーキテクト として多数のプロジェクトを推進. 日本 Linux 協会や日本医師会 ORCA Project の立ち上げ参画、和組 DAO 運営・SBT 開発なども手がける. 生成 AI の研究開発とコミュニティ活動を背景に、企業が安心して使える AI 基盤やトレーサビリティ整備にも取り組む.\n本アワードには主催チームの技術側メンバーとして参加.\n\nX：@towya_aillust\nYouTube：@AILab.-fv8qb",
      judge2Name: "くりえみ",
      judge2Role: "AiHUB 執行役員 CMO／ぴにょきお株式会社 CEO",
      judge2Desc: "タレント・起業家として SNS 総フォロワー約 250〜270 万人規模を持ち、自己プロデュースと発信力でエンタメ領域の新潮流を牽引. バーチャルヒューマンや AI クリエイティブ事業を展開し、生成 AI を 「技術」 から 「文化」 へ広げる挑戦を続ける. 本アワードでは公式 IP 提供者として審査に参加し、表現の面白さと IP へのリスペクトの両面から作品を丁寧に評価する.",
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
          title: "■CW（Creators' Wonderland）・アカウント周り",
          items: [
            { q: "応募にはCreators' Wonderlandへの登録が必要ですか？", a: "はい。応募（投稿・エントリー）はCW上で行います。" },
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
    common: {
      loading: "LOADING...",
      submit: "Submit Entry",
      viewMaterials: "View Materials",
      entryGuide: "Entry Guide",
      comingSoon: "COMING SOON",
      tbd: "TBD",
      send: "Send",
      sending: "Sending...",
      success: "Successfully Sent.",
      error: "An error occurred. Please try again."
    },
    nav: {
      about: "Concept",
      inspiration: "Inspiration",
      schedule: "Schedule",
      judges: "Judges",
      submitBtn: "Submit / Entries"
    },
    hero: {
      officialContest: "OFFICIAL CONTEST 2026",
      catchphrase: "GO BEYOND CREATION.",
      project: "produced by Creators' Wonderland",
      expansion: "AI SHORT FILM CONTEST",
      description: "Entering an era where your imagination\nbecomes a reality instantly.",
      scroll: "SCROLL TO EXPLORE",
      period: "ENTRY PERIOD",
      waitingList: "WAITING LIST"
    },
    marquee: {
      text: "#KuriemiAIShort #KuriemiContest #Pinyogram",
      sponsors: ""
    },
    whatIsThis: {
      title: "About KURIEMI AI SHORT FILM CONTEST",
      desc: "Produce and submit short films using <strong>official assets</strong> of the real-life heroine 'Kuriemi' on CREATORS' WONDERLAND.\n\nModels are free to choose (No recommendation for specific models like Sora2).\nBeginners are welcome."
    },
    about: {
      title: "CONCEPT",
      quote: "Japan is a place where users and media have accepted new creators and created a market together. It can be called a wonderland created by that miracle.",
      author: "— Atsuo Nakayama | Entertainment Sociologist",
      conceptTitle: "",
      conceptDesc: "Resonating with this idea, we launched Creators' Wonderland as a place where creators in the generative AI era can create, learn, and connect to the next opportunity. This contest is the first project of 'Creators' Wonderland Awards'."
    },
    profile: {
      role: "AiHUB Executive Officer CMO / Pinocchio Inc. CEO",
      desc: "As a talent and entrepreneur, she has a total SNS following of approximately 2.5 to 2.7 million. She leads new trends in entertainment through self-production and influence. She develops virtual human and AI creative businesses and continues the challenge of expanding generative AI from 'technology' to 'culture'.",
      job: "Talent / Entrepreneur"
    },
    waitingList: {
      title: "WAITING LIST",
      desc: "Receive the latest contest information and early access to Creators' Wonderland.",
      name: "Name",
      email: "Email Address",
      xAccount: "X Account",
      discordAccount: "Discord Account",
      required: "Required",
      optional: "Optional"
    },
    inspiration: {
      title: "INSPIRATION",
      desc: "Unknown visual experiences only AI can draw. Sample works that stimulate your creativity.",
      moreBtn: "View more samples"
    },
    categories: {
      title: "CATEGORIES",
      viewRequirements: "View Requirements",
      closeRequirements: "Close",
      cat1Title: "10-Second Challenge",
      cat1Subtitle: "(Casual)",
      cat1Desc: "Focused on ideas and virality. Impact that grabs the heart in an instant.",
      cat1Requirements: [
        "Duration: Approx. 10 seconds",
        "Aspect Ratio/Resolution: 9:16 Vertical, 720p or higher",
        "Frame Rate: 24, 30, 60fps recommended",
        "Audio: -14LUFS recommended",
        "Format: h.264 (mp4)",
        "Models & Workflow: Specify models and workflow used in the entry."
      ],
      cat2Title: "Short Film Category",
      cat2Subtitle: "(Cinema)",
      cat2Desc: "Focused on story, worldview, and completion. A cinematic experience only AI can depict.",
      cat2Requirements: [
        "Duration: 1-10 minutes recommended",
        "Aspect Ratio/Resolution: 16:9 Horizontal, 1080p or higher recommended",
        "Frame Rate: 24, 30, 60fps recommended",
        "Audio: -14LUFS recommended",
        "Format: h.264 (mp4)",
        "Models & Workflow: Specify models and workflow used in the entry."
      ]
    },
    schedule: {
      title: "SCHEDULE",
      step2Date: "2026.02.24 — 03.31",
      step2Title: "Entry Period",
      step2Desc: "Production and entry acceptance.",
      step3Date: "2026.04.01 — 04.14",
      step3Title: "Primary Review",
      step3Desc: "Selecting finalists from entries.",
      step4Date: "2026.04.15 — 04.25",
      step4Title: "Final Review",
      step4Desc: "Determining winners from finalists.",
      step5Date: "2026.05 Early",
      step5Title: "Announcement",
      step5Desc: "Award ceremony (online or offline)."
    },
    judges: {
      title: "JUDGES",
      subtitle: "Industry leaders will judge your work.",
      judge1Name: "Toya",
      judge1Role: "Influencer",
      judge1Desc: "Promotes numerous projects as PM/PdM/Architect in the Entertainment x Tech field. Involved in launching the Japan Linux Association and Japan Medical Association ORCA Project. Works on enterprise AI foundations and traceability based on R&D and community activities. Participates as a technical member.\n\nX: @towya_aillust\nYouTube: @AILab.-fv8qb",
      judge2Name: "Kuriemi",
      judge2Role: "AiHUB CMO / Pinocchio Inc. CEO",
      judge2Desc: "Talent and entrepreneur with a total SNS following of ~2.7 million. Leads new trends in entertainment through influence. Continues to expand AI from 'tech' to 'culture'. Participates as an official IP provider, evaluating works for expression and respect to IP.",
      judge3Name: "Hiroaki Inoue",
      judge3Role: "AiHUB Executive Producer",
      judge3Desc: "Handled production for 'Phoenix 2772' and 'Astro Boy' (1980) at Tezuka Productions. Participated in founding Gainax and produced 'Royal Space Force: The Wings of Honneamise'. Currently CEO of Oniro. Participates as a hosting member.",
      judge4Name: "Osamu Suzuki",
      judge4Role: "Startup Factory Representative",
      judge4Desc: "Writer of numerous national hit programs. Scriptwriter and director for films/dramas. Retired as a broadcast writer in March 2024. Now focuses on supporting young entrepreneurs and producing new businesses.",
      judge5Name: "Atsuo Nakayama",
      judge5Role: "Entertainment Sociologist",
      judge5Desc: "Sociologist researching entertainment industry structures. Known for 'Oshi Economy'. Deep insight into global expansion of content and tech integration. Proposer of 'Creators' Wonderland'.",
      judge6Name: "Yves Dalbiez",
      judge6Role: "Film Director",
      judge6Desc: "Director active in international video production. Expert in VFX and digital tech. Explores new storytelling possibilities using AI.",
      judge7Name: "Matty Shimura",
      judge7Role: "Chroma Awards Producer",
      judge7Desc: "Producer of the global AI art competition 'Chroma Awards'. Promotes community building for AI creators and the fusion of tech and art.",
      judge8Name: "Akihiko Shirai",
      judge8Role: "AICU Inc. CEO / Ph.D. (Engineering)",
      judge8Desc: "Expert in Metaverse R&D, VR, media art, and generative AI. CEO of AICU Inc. and AICU Japan. Author of several books on AI and Stable Diffusion. Stream editor-in-chief and active blogger in the creative field.",
      judge9Name: "Mitsuko Okamoto",
      judge9Role: "Tokyo University of the Arts",
      judge9Desc: "Professor at the Graduate School of Film and New Media, Tokyo University of the Arts. Former NHK Executive Producer. Specializes in media culture and content planning. Evaluates from the perspective of historical context and new tech fusion."
    },
    prizes: {
      title: "PRIZES",
      totalPrize: "Total Prize: 1.11M JPY",
      grandPrizeTitle: "Grand Prize",
      grandPrizeAmount: "500,000 JPY",
      grandPrizeNote: "(500,000 Amazon Points for overseas users)",
      grandPrizeExtra: "Supplementary: HP PC",
      excellencePrizeTitle: "Excellence Prize",
      excellencePrizeAmount: "200,000 JPY",
      excellencePrizeNote: "(200,000 Amazon Points for overseas users)",
      judgesPrizeTitle: "Judges' Prize",
      judgesPrizeDesc: "Commentary",
      judgesPrizeAmount: "30,000 JPY x 7",
      nomineePrizeTitle: "Final Nominee",
      nomineePrizeAmount: "10,000 JPY x 20"
    },
    partners: {
      title: "PARTNERS & SPONSORS"
    },
    cta: {
      title: "We look forward to your work",
      btn: "Submit Entry",
      note: "*Redirects to the entry form"
    },
    message: {
      title: "From Technology To Culture",
      subtitle: "From mere technology to a new culture",
      desc: "Creators' Wonderland aims to be the world's No. 1 hub for new creative culture born in Japan. We want to create a historic moment where Japanese IP and creators gather, and generative AI transcends 'technology' to become a 'culture'. Let's build the source of content for the next decade together."
    },
    entry: {
      title: "ENTRY PROCESS",
      step1Title: "Register/Login to Creators' Wonderland",
      step1Desc: "Agree to terms, register contact info, and login.",
      step2Title: "Post Work on CW",
      step2Desc: "- Under 20MB: Upload data directly.\n- Over 20MB: Upload an excerpt and attach a YouTube/Vimeo URL for the full version.",
      step3Title: "Enter the Contest",
      step3Desc: "Select your posted work from the contest page to enter.",
      step4Title: "SNS Posting (Optional)",
      step4Desc: "Post your work on SNS with hashtags #KuriemiAIShort #KuriemiAIContest.",
      copyTags: "COPY TAGS",
      guidelineTitle: "SUBMISSION GUIDELINE (COMMON)",
      specFormat: "H.264 / .mp4",
      specRes: "1080p recommended",
      specFrame: "30fps recommended",
      specAudio: "Rights cleared / 14 LUFS target",
      specModel: "Free (State models used)"
    },
    faq: {
      title: "FAQ",
      categories: [
        {
          title: "■ Conditions",
          items: [
            { q: "Can I submit multiple works?", a: "[TBD] Limits will be stated in the terms." },
            { q: "Can I participate as a team?", a: "Yes. The representative applies and receives contact." },
            { q: "Can I participate from overseas?", a: "Yes. Restrictions may apply to prize shipping/payment depending on the country." }
          ]
        },
        {
          title: "■ Creators' Wonderland (CW)",
          items: [
            { q: "Is registration required?", a: "Yes. All entries and posts are done on CW." },
            { q: "Difference between posting and entering?", a: "'Posting' is uploading to CW. 'Entering' is applying that post to the contest. Both are needed." }
          ]
        },
        {
          title: "■ Submission Process (Files & URLs)",
          items: [
            { q: "Is there a file size limit?", a: "Files under 20MB can be uploaded directly. For files over 20MB, upload an excerpt and attach the full video URL." },
            { q: "Can I use platforms other than YouTube?", a: "Only YouTube and Vimeo are supported." },
            { q: "Can the URL video be 'unlisted'?", a: "Please ensure the submitted work is publicly available." },
            { q: "Can I replace my work after submission?", a: "Replacement is not possible. However, within the submission period, you may delete and resubmit." }
          ]
        },
        {
          title: "■ Work Specifications",
          items: [
            { q: "Must I strictly follow the resolution and aspect ratio?", a: "Strict adherence is not required, but following the recommendations is advised." },
            { q: "I don't understand the volume level (-14 LUFS).", a: "This is a guideline. Videos with extremely high or low volume may be disadvantaged for viewing comfort." }
          ]
        },
        {
          title: "■ Official Materials (Kuriemi Assets)",
          items: [
            { q: "Can anyone use the materials?", a: "They are provided for contest participants. Please follow the usage guidelines." },
            { q: "Can I redistribute the materials on SNS or elsewhere?", a: "Redistribution of provided materials is not permitted." }
          ]
        },
        {
          title: "■ Prizes & Contact",
          items: [
            { q: "How will I be contacted if I win?", a: "The organizers will contact you via the registered contact information (representative for team entries)." }
          ]
        },
        {
          title: "■ Rights & Usage",
          items: [
            { q: "Will copyright of submitted works be transferred to the organizer?", a: "Copyright generally remains with the creator. The organizer receives a non-exclusive license for promotional use, as stated in the terms." },
            { q: "Will my work be used secondarily?", a: "The scope of secondary use (articles, screenings, advertisements, etc.) and consent process will be specified in the terms." },
            { q: "Can I include my work in my portfolio?", a: "Yes. Please ensure it does not infringe on third-party rights." },
            { q: "What BGM and sound effects can I use?", a: "Only copyright-free materials may be used. Please check the usage terms even for free materials." }
          ]
        },
        {
          title: "■ Prohibited Content",
          items: [
            { q: "What expressions are prohibited?", a: "Copyright infringement, discrimination, defamation, excessive violence/sexual content, impersonation, and false claims are prohibited." },
            { q: "Can I use real people's faces or celebrities?", a: "In principle, this is prohibited due to portrait and publicity rights. (See terms for details.)" },
            { q: "Can I include existing characters or logos?", a: "Not without permission from the rights holder." }
          ]
        },
        {
          title: "■ Technical Issues & Operations",
          items: [
            { q: "My posted work is not displayed.", a: "This may be due to network issues or moderation status. If it persists, please contact us." },
            { q: "I accidentally submitted to the wrong category.", a: "Replacement is not possible. Within the submission period, you may delete and resubmit." }
          ]
        }
      ]
    },
    footer: {
      warningsTitle: "Conditions & Prohibitions",
      warnings: [
        "● Public SNS account / Tag / Deadline / Terms / Original (Teams allowed)",
        "● No infringement, discrimination, violence, sexual content, or fraud.",
        "● Must state models and source of external assets."
      ],
      rightsTitle: "Rights & Usage",
      rights: [
        "● Copyright belongs to the creator.",
        "● Agree to non-exclusive usage license for promotion/exhibition.",
        "● Use Kuriemi assets within the guide (No redistribution)."
      ],
      links: {
        terms: "Terms",
        privacy: "Privacy Policy",
        guide: "Asset Guide",
        contact: "Contact"
      }
    }
  },
  zh: {
    common: {
      loading: "載入中...",
      submit: "作品投稿",
      viewMaterials: "查看素材",
      entryGuide: "投稿指南",
      comingSoon: "敬請期待",
      tbd: "待定",
      send: "發送",
      sending: "發送中...",
      success: "發送成功。",
      error: "發生錯誤，請重試。"
    },
    nav: {
      about: "理念",
      inspiration: "靈感",
      schedule: "時間表",
      judges: "評審",
      submitBtn: "投稿・作品一覽"
    },
    hero: {
      officialContest: "OFFICIAL CONTEST 2026",
      catchphrase: "超越創作極限。",
      project: "produced by Creators' Wonderland",
      expansion: "AI SHORT FILM CONTEST",
      description: "進入想像力瞬間成真的時代。",
      scroll: "向下滾動探索",
      period: "投稿期間",
      waitingList: "候補名單"
    },
    marquee: {
      text: "#KuriemiAIShort #KuriemiContest #Pinyogram",
      sponsors: ""
    },
    whatIsThis: {
      title: "關於 KURIEMI AI SHORT FILM CONTEST",
      desc: "使用真人女主角「Kuriemi」的<strong>公認素材</strong>，在 CREATORS' WONDERLAND 上製作並投稿 AI 短影音競賽。\n\n生成模型不限（無特定模型推薦，如 Sora2 等）。\n歡迎初學者參加。"
    },
    about: {
      title: "CONCEPT",
      quote: "日本是一個用戶和媒體都能接納新創作者，並共同創造市場的地方。這可以說是那樣的奇蹟所誕生的樂園。",
      author: "— 中山淳雄｜娛樂社會學家",
      conceptTitle: "",
      conceptDesc: "我們對這一理念產生共鳴，成立了 Creators' Wonderland，作為生成 AI 時代創作者創作、學習並連接下一個機會的場所。本次競賽是「Creators' Wonderland Awards」的第一個啟動項目。"
    },
    profile: {
      role: "AiHUB 執行董事 CMO / Pinyokio Inc. CEO",
      desc: "作為藝人和企業家，在 SNS 上擁有約 250 萬至 270 萬的粉絲。她通過自我製作和影響力引領娛樂領域的新潮流。開展虛擬人和 AI 創意業務，持續挑戰將生成 AI 從「技術」擴展到「文化」。",
      job: "藝人 / 企業家"
    },
    waitingList: {
      title: "候補名單",
      desc: "獲取競賽最新資訊和 Creators' Wonderland 的早期訪問權限。",
      name: "姓名",
      email: "電子郵件地址",
      xAccount: "X 賬號",
      discordAccount: "Discord 賬號",
      required: "必填",
      optional: "選填"
    },
    inspiration: {
      title: "INSPIRATION",
      desc: "只有 AI 才能描绘的未知视觉体验。刺激你创造力的示例作品。",
      moreBtn: "查看更多示例"
    },
    categories: {
      title: "CATEGORIES",
      viewRequirements: "查看要求",
      closeRequirements: "關閉",
      cat1Title: "10 秒挑戰部門",
      cat1Subtitle: "（休閒）",
      cat1Desc: "勝在創意與傳播力。瞬間抓住人心的衝擊力。",
      cat1Requirements: [
        "影片長度：約 10 秒",
        "比例/解析度：9:16 縱向影片，720p 以上",
        "幀率：推薦 24, 30, 60fps",
        "音訊：推薦 -14LUFS",
        "格式：h.264 (mp4)",
        "模型與工作流：需註明使用的生成 AI 模型及工作流。"
      ],
      cat2Title: "短片部門",
      cat2Subtitle: "（電影）",
      cat2Desc: "勝在故事、世界觀與完成度。只有 AI 才能呈現的電影級體驗。",
      cat2Requirements: [
        "影片長度：推薦 1~10 分鐘",
        "比例/解析度：16:9 橫向影片，推薦 1080p 以上",
        "幀率：推薦 24, 30, 60fps",
        "音訊：推薦 -14LUFS",
        "格式：h.264 (mp4)",
        "模型與工作流：需註明使用的生成 AI 模型及工作流。"
      ]
    },
    schedule: {
      title: "SCHEDULE",
      step2Date: "2026.02.24 — 03.31",
      step2Title: "募集期間",
      step2Desc: "作品製作與投稿受理。",
      step3Date: "2026.04.01 — 04.14",
      step3Title: "初選",
      step3Desc: "從投稿作品中選出決賽入圍者。",
      step4Date: "2026.04.15 — 04.25",
      step4Title: "終選",
      step4Desc: "從入圍者中決定獲獎者。",
      step5Date: "2026.05 早期",
      step5Title: "結果公佈",
      step5Desc: "線下或線上頒獎儀式。"
    },
    judges: {
      title: "JUDGES",
      subtitle: "業界頂尖專家將對您的作品進行評審。",
      judge1Name: "Toya",
      judge1Role: "影響者",
      judge1Desc: "在娛樂 x 技術領域擔任 PM/PdM/架構師，推進多個項目。參與創立日本 Linux 協會和日本醫師會 ORCA 項目。致力於企業級 AI 基礎和溯源研究。作為技術成員參加。\n\nX：@towya_aillust\nYouTube：@AILab.-fv8qb",
      judge2Name: "Kuriemi",
      judge2Role: "AiHUB CMO / Pinyokio Inc. CEO",
      judge2Desc: "擁有 270 萬粉絲的藝人與企業家。引領娛樂新潮流。致力於將 AI 從技術推廣至文化。作為官方 IP 提供者參加，評估表達能力與對 IP 的尊重。",
      judge3Name: "井上博明",
      judge3Role: "AiHUB 執行製作人",
      judge3Desc: "曾在手塚製作公司擔任《火之鳥 2772》和《原子小金剛》（1980 年版）的製作。參與創立 Gainax 並製作《王立宇宙軍》。現任 Oniro 執行長。作為主辦方成員參加。",
      judge4Name: "鈴木收",
      judge4Role: "Startup Factory 代表",
      judge4Desc: "製作多個國民熱門節目的放送作家。執筆多部電影與劇集。2024 年 3 月退任放送作家，現專注於支持年輕企業家和製作新業務。",
      judge5Name: "中山淳雄",
      judge5Role: "娛樂社會學家",
      judge5Desc: "研究娛樂產業結構的社會學家。著有《推し經濟》。對內容產業的海外擴張與技術融合有深刻見解。「Creators' Wonderland」的提倡者。",
      judge6Name: "Yves Dalbiez",
      judge6Role: "電影導演",
      judge6Desc: "活躍於國際影像製作現場。精通 VFX 與數位技術。探索使用 AI 進行敘事的新可能性。",
      judge7Name: "Matty Shimura",
      judge7Role: "Chroma Awards 製作人",
      judge7Desc: "全球 AI 藝術大賽「Chroma Awards」製作人。致力於 AI 創作者社區建設及技術與藝術的融合。",
      judge8Name: "白井曉彥",
      judge8Role: "AICU Inc. CEO / 工學博士",
      judge8Desc: "元宇宙研發、VR、媒體藝術與生成 AI 專家。AICU 執行長。著有多本關於 AI 與 Stable Diffusion 的書籍。活躍的創意領域博客作者。",
      judge9Name: "岡本美津子",
      judge9Role: "東京藝術大學",
      judge9Desc: "東京藝術大學教授。前 NHK 執行製作人。專注於媒體文化與內容策劃。從歷史背景與技術融合的角度進行評審。"
    },
    prizes: {
      title: "PRIZES",
      totalPrize: "獎金總額 111 萬日圓",
      grandPrizeTitle: "最優秀獎",
      grandPrizeAmount: "獎金 50 萬日圓",
      grandPrizeNote: "（海外用戶發放等值 50 萬日圓之 Amazon 積分）",
      grandPrizeExtra: "副獎 HP 電腦",
      excellencePrizeTitle: "優秀獎",
      excellencePrizeAmount: "獎金 20 萬日圓",
      excellencePrizeNote: "（海外用戶發放等值 20 萬日圓之 Amazon 積分）",
      judgesPrizeTitle: "評審特別獎",
      judgesPrizeDesc: "總評評語",
      judgesPrizeAmount: "3 萬日圓 x 7 名",
      nomineePrizeTitle: "決賽入圍獎",
      nomineePrizeAmount: "1 萬日圓 x 20 名"
    },
    partners: {
      title: "PARTNERS & SPONSORS"
    },
    cta: {
      title: "期待您的作品",
      btn: "作品投稿",
      note: "*將跳轉至投稿表單"
    },
    message: {
      title: "From Technology To Culture",
      subtitle: "從單純的技術，走向新的文化",
      desc: "Creators' Wonderland 旨在成為源自日本的新創意文化「世界第一據點」。我們希望創造一個歷史性的時刻，讓日本的 IP 和創作者匯聚一堂，讓生成 AI 超越「技術」，昇華為一種「文化」。讓我們共同打造未來十年的內容源泉。"
    },
    entry: {
      title: "ENTRY PROCESS",
      step1Title: "註冊/登錄 Creators' Wonderland",
      step1Desc: "同意條款並註冊聯絡資訊，然後登錄。",
      step2Title: "在 CW 上上傳作品",
      step2Desc: "- 檔案大小 20MB 以內：直接上傳作品數據。\n- 超過 20MB：上傳作品片段，並附上 YouTube/Vimeo 的完整版網址。",
      step3Title: "報名參賽",
      step3Desc: "從競賽頁面選擇已上傳的作品進行報名。",
      step4Title: "SNS 投稿（可選）",
      step4Desc: "在 SNS 上帶標籤 #KuriemiAIShort #KuriemiAIContest 發布您的作品。",
      copyTags: "複製標籤",
      guidelineTitle: "SUBMISSION GUIDELINE (COMMON)",
      specFormat: "H.264 / .mp4",
      specRes: "推薦 1080p",
      specFrame: "推薦 30fps",
      specAudio: "必須清除版權 / 目標 14 LUFS",
      specModel: "不限（需註明使用模型）"
    },
    faq: {
      title: "FAQ",
      categories: [
        {
          title: "■ 參加與投稿條件",
          items: [
            { q: "一人可以投稿多個作品嗎？", a: "【TBD】上限將在條款中說明。" },
            { q: "可以以團隊名義參加嗎？", a: "可以。由代表進行報名與聯絡。" },
            { q: "可以從海外參加嗎？", a: "可以。但獎品運送與獎金支付可能因居住地而異。" }
          ]
        },
        {
          title: "■ CW（Creators' Wonderland）・帳戶相關",
          items: [
            { q: "投稿需要註冊 Creators' Wonderland 嗎？", a: "是的。所有投稿和報名均在 CW 上進行。" },
            { q: "作品投稿和競賽報名有什麼區別？", a: "「作品投稿」是將作品上傳至 CW。「競賽報名」是將已上傳的作品報名參加競賽。兩個步驟都完成才算正式報名。" }
          ]
        },
        {
          title: "■ 投稿流程（檔案與 URL）",
          items: [
            { q: "檔案大小有限制嗎？", a: "20MB 以內可直接上傳。超過 20MB 請上傳片段並附上完整影片的 URL。" },
            { q: "可以使用 YouTube 以外的平台嗎？", a: "僅支援 YouTube 和 Vimeo。" },
            { q: "URL 的影片可以設為「限定公開」嗎？", a: "投稿時請確保作品為公開狀態。" },
            { q: "投稿後可以更換作品嗎？", a: "無法更換。但在投稿期間內，可以先刪除再重新投稿。" }
          ]
        },
        {
          title: "■ 作品規格",
          items: [
            { q: "解析度和畫面比例必須嚴格遵守嗎？", a: "不需要嚴格遵守，但建議盡量符合推薦規格。" },
            { q: "不太理解音量要求（-14 LUFS）。", a: "這是音量的參考標準。音量過大或過小可能影響觀看體驗。" }
          ]
        },
        {
          title: "■ 官方素材（Kuriemi 素材）",
          items: [
            { q: "任何人都可以使用素材嗎？", a: "素材提供給本競賽的參加者使用。請遵循使用指南。" },
            { q: "可以在 SNS 或其他地方重新分發素材嗎？", a: "禁止重新分發提供的素材。" }
          ]
        },
        {
          title: "■ 獎項與聯絡",
          items: [
            { q: "獲獎後如何收到通知？", a: "主辦方將通過您註冊的聯絡方式聯繫您（團隊投稿為代表聯絡人）。" }
          ]
        },
        {
          title: "■ 權利與利用",
          items: [
            { q: "投稿作品的著作權會轉讓給主辦方嗎？", a: "著作權原則上歸創作者所有。主辦方獲得用於宣傳等的非排他性使用許可，詳見條款。" },
            { q: "我的作品會被二次使用嗎？", a: "二次使用的範圍（報導、上映、廣告等）和同意方式將在條款中明確規定。" },
            { q: "我可以將作品放入個人作品集嗎？", a: "可以。但請確保不侵犯第三方權利。" },
            { q: "可以使用什麼 BGM 和音效？", a: "僅可使用無版權素材。即使是免費素材，也請確認其使用條款。" }
          ]
        },
        {
          title: "■ 禁止事項與內容指南",
          items: [
            { q: "有哪些禁止的表現？", a: "禁止侵犯權利、歧視、誹謗中傷、過度暴力/性描寫、冒充、虛假標示等。" },
            { q: "可以在作品中使用他人的臉或名人嗎？", a: "原則上因肖像權和公開權問題而禁止。（詳見條款。）" },
            { q: "可以使用現有作品的角色或標誌嗎？", a: "未經權利人許可不得使用。" }
          ]
        },
        {
          title: "■ 技術問題與運營",
          items: [
            { q: "已投稿的作品未顯示。", a: "可能是網路問題或審核狀態。如果持續未顯示，請聯繫我們。" },
            { q: "不小心投稿到了錯誤的類別。", a: "無法更換。在投稿期間內，可以先刪除再重新投稿。" }
          ]
        }
      ]
    },
    footer: {
      warningsTitle: "參加條件與禁止事項",
      warnings: [
        "● 條件：公開 SNS 賬號 / 指定標籤 / 期限內投稿 / 同意條款 / 原創（可團隊）",
        "● 禁止：侵害他人權利、歧視、誹謗、過度暴力/性描寫、冒充等。",
        "● 必須註明使用的模型與外部素材來源。"
      ],
      rightsTitle: "權利與利用",
      rights: [
        "● 作品著作權歸創作者所有。",
        "● 報名時，需同意主辦方進行非排他性使用（宣傳、展示、發布等）。",
        "● Kuriemi 素材僅限在指南範圍內使用（禁止再分發）。"
      ],
      links: {
        terms: "使用條款",
        privacy: "隱私政策",
        guide: "素材指南",
        contact: "聯絡我們"
      }
    }
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
