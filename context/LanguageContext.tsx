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
    judge10Name: string;
    judge10Role: string;
    judge10Desc: string;
  };
  prizes: {
    title: string;
    totalPrize: string;
    shortTitle: string;
    tenTitle: string;
    grandPrize: string;
    excellencePrize: string;
    judgesPrize: string;
    shortGrand: string;
    shortEx: string;
    shortJudge: string;
    tenGrand: string;
    tenEx: string;
    tenJudge: string;
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
    notes: string[];
  };
  faq: {
    title: string;
    categories: {
      title: string;
      items: { q: string; a: string }[];
    }[];
  };
  footer: {
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
      desc: "実在のヒロイン「くりえみ」の公認素材を使用し、生成AIによる短編動画を制作・応募するコンテストです。\n\n使用ツールは自由。生成AI初心者の方も大歓迎です。"
    },
    about: {
      title: "CONCEPT",
      quote: "日本は、ユーザーもメディアも新しい\nクリエイターを受け入れ、\n市場を一緒になって創ってきた。\nその奇跡が生んだ\nワンダーランドともいえる。",
      author: "— 中山淳雄｜エンタメ社会学者",
      conceptTitle: "",
      conceptDesc: "私たちはこの考えに共鳴し、生成AI時代のクリエイターが、創作し、学び、次のチャンスへつなげられる場として、Creators' Wonderland を立ち上げました。\n本コンテストは、その第一弾となる「Creators' Wonderland Awards」のスタート企画です。"
    },
    profile: {
      role: "Talent & Entrepreneur",
      desc: "くりえみは、起業家・会社経営者として活動する一方で、モデル・タレントとしても幅広く活躍。2023年12月には、日本初のバーチャルヒューマン芸能事務所を設立し、新たなエンターテイメントの形を生み出している。\n\nSNS総フォロワー数は250万人超。自己プロデュース力を武器に、SNS戦略の構築や自社ブランドの立ち上げを多数手掛ける。常識にとらわれず、最新テクノロジーを活用して新しい価値を創造することを使命とし、次世代のエンタメ業界を切り拓いている。",
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
      cat1Desc: "アイデアと瞬発力で勝負する超短編部門です。\nわずか10秒の中に、驚き・笑い・感動など、心をつかむインパクトを凝縮してください。完成度よりも発想力。AIを活用して、短時間で記憶に残る作品をお待ちしています。",
      cat1Requirements: [
        "動画尺：10秒程度",
        "推奨比率：縦9:16（1080×1920 推奨）",
        "ファイル形式：.MP4",
        "アップロード上限：50MB",
        "ビットレート：8–12 Mbps（1080p目安）／VBR推奨",
        "フレームレート：30fps 推奨",
        "音量目安：-14 LUFS"
      ],
      cat2Title: "ショートフィルム部門",
      cat2Subtitle: "（本格派）",
      cat2Desc: "物語・世界観・映像表現で魅せる本格部門です。\nAIだからこそ実現できるスケールや演出で、あなただけのシネマ体験を創り上げてください。構成力や完成度、表現の深さを重視します。じっくり作り込んだ作品をお待ちしています。",
      cat2Requirements: [
        "動画尺：1分〜10分 推奨",
        "推奨比率：横16:9（1920×1080 推奨）",
        "ファイル形式：.MP4",
        "アップロード上限：50MB",
        "ビットレート：8–12 Mbps（1080p目安）／VBR推奨",
        "フレームレート：30fps 推奨",
        "音量目安：-14 LUFS"
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
      judge9Desc: "東京藝術大学大学院映像研究科 教授。専門はメディア文化、コンテンツ企画開発。NHKエグゼクティブ・プロデューサーとして、数多くの番組企画やデジタルコンテンツ制作に従事し、メディアの進化に多大な貢献を果たしてきた。本アワードでは、映像表現の歴史的文脈と最新技術の融合という視点から審査に参加する。",
      judge10Name: "Yachimat",
      judge10Role: "審査員",
      judge10Desc: "本コンテストの審査員として参加。"
    },
    prizes: {
      title: "PRIZES",
      totalPrize: "賞金総額 140万円",
      shortTitle: "ショートフィルム部門",
      tenTitle: "10秒チャレンジ部門",
      grandPrize: "最優秀賞",
      excellencePrize: "優秀賞",
      judgesPrize: "審査員賞",
      shortGrand: "50万円",
      shortEx: "20万円",
      shortJudge: "各3万円",
      tenGrand: "20万円",
      tenEx: "10万円",
      tenJudge: "各1万円"
    },
    partners: {
      title: "SPONSORS"
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
      step2Desc: "・ファイル容量が 50MB以内 の場合：作品データ（.MP4）をそのままアップロード\n・50MBを超える作品の場合：作品の ティーザー動画（冒頭/ハイライトの抜粋など、50MB以内） をCWにアップロードし、全編を YouTube または Vimeo に公開したうえで、そのURLを作品投稿時に添付してください。",
      step3Title: "コンテストに作品をエントリー",
      step3Desc: "CW内のコンテストページから、投稿済み作品を選択してエントリーしてください。",
      step4Title: "SNSへ投稿（任意）",
      step4Desc: "ハッシュタグ「#くりえみAIコンテスト」「#kuriemiAIcontest」をつけてSNSに作品を投稿してください（拡散歓迎）。",
      notes: [
        "X（旧Twitter）、TikTok などのSNSへの投稿は任意です。投稿有無は審査や応募条件に影響しません。",
        "チームでの参加も可能です（最大5名）。応募手続きは代表者1名が行い、受賞連絡も代表者宛に行います。",
        "賞金・賞品がある場合のチーム内分配は、チーム内でご相談ください（主催者は関与しません）。",
        "代表者は、作品投稿時に他メンバーをメンション（サイト内機能）できます（※チームメンバーID「@〜」で登録）。"
      ]
    },
    faq: {
      title: "FAQ",
      categories: [
        {
          title: "■参加・応募条件",
          items: [
            { q: "1人で複数作品を応募できますか？", a: "はい、複数作品の応募が可能です。ただし、ご応募いただく作品はそれぞれが独自の内容である必要があり、類似性の高いものはご遠慮ください。" },
            { q: "チームでの参加はできますか？", a: "はい、チーム参加も可能です。チームは代表者を含め最大5名までとなります。応募手続きは代表者が行い、作品投稿時にサイト内のメンション機能でメンバー登録ができます。" },
            { q: "海外からも参加できますか？", a: "はい、居住地を問わず応募できます。賞品の受け取りや賞金の支払いは条件が発生する場合があるので、該当する方は応募規約をご確認ください。" }
          ]
        },
        {
          title: "■CW（Creators' Wonderland）・アカウント周り",
          items: [
            { q: "応募にはCreators' Wonderlandへの登録が必要ですか？", a: "はい。応募はCWに登録またはログインしたうえで、CW上で作品投稿とエントリーを行います。" },
            { q: "作品投稿とコンテスト応募（エントリー）の違いは？", a: "「作品投稿」はCW上に作品を投稿することです。「コンテスト応募（エントリー）」は、コンテストページ上で、投稿した作品を選んで応募する手続きです。作品投稿＋エントリーの両方が完了して応募になります。" }
          ]
        },
        {
          title: "■応募手順（投稿・ファイル・URL）",
          items: [
            { q: "ファイル容量の上限はありますか？", a: "50MB以内のファイルは、そのままアップロードが可能です。50MBを超える場合は、冒頭やハイライトの抜粋（50MB以内）を投稿し、YouTubeまたはVimeoに全編を公開したうえでURLを添付してください。" },
            { q: "全編の公開先はYouTube以外でもいいですか？", a: "現時点では、YouTubeまたはVimeoにのみ対応しています。" },
            { q: "URLの動画は「限定公開」でもいいですか？", a: "審査員が問題なく視聴できる状態であればOKです（視聴にログインが必要・視聴権限が限定されている場合は、審査できない可能性があります）。" },
            { q: "応募後に作品の差し替えはできますか？", a: "原則、応募後の差し替えはできません。修正版を出したい場合は、応募期間内に一度削除して再投稿・再エントリーしてください。" }
          ]
        },
        {
          title: "■作品仕様（規格）",
          items: [
            { q: "解像度やアスペクト比は厳密に守る必要がありますか？", a: "厳密に固定ではありませんが、推奨仕様に沿うことをおすすめします。推奨から大きく外れると、視聴体験の観点で不利になる場合があります。" },
            { q: "音量（-14 LUFS）がよくわかりません。", a: "音量の目安です。音量が極端に大きい、または小さいと視聴しづらくなるため、可能な範囲で調整をお願いします（目安としてご参照ください）。" }
          ]
        },
        {
          title: "■公式素材（くりえみ素材）・配布",
          items: [
            { q: "素材は誰でも使えますか？", a: "本コンテスト参加者向けに提供しています。詳しい利用範囲は応募規約をご確認ください。" },
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
            { q: "応募作品の著作権は主催者に譲渡されますか？", a: "いいえ。著作権は応募者に帰属します。" },
            { q: "作品は二次利用されますか？", a: "はい。審査・広報・告知・アーカイブ掲載など、コンテスト運営に必要な範囲で主催者が利用する場合があります。詳しくは、応募規約をご確認ください。" },
            { q: "自分の作品を自分のポートフォリオに載せてもいいですか？", a: "はい、可能です。ただし、第三者の権利を侵害しない範囲でお願いいたします。" },
            { q: "BGMや効果音は何を使っていい？", a: "著作権フリーの素材のみを使用し、フリー素材に関しても利用規約をご確認ください。" }
          ]
        },
        {
          title: "■禁止事項・コンテンツガイド",
          items: [
            { q: "やってはいけない表現は？", a: "第三者の権利侵害（IP・音楽・ロゴ・肖像など）や、法令・ガイドラインに反する内容は禁止です。違反がある場合は失格等の対応になります。" },
            { q: "他人の顔や有名人を作品に出してもいいですか？", a: "原則おすすめしません。人物の容貌・音声などを使う場合は、本人の同意が必要です。" },
            { q: "既存作品のキャラやロゴを入れてもいい？", a: "権利者の許諾がない限り、ご使用いただけません。" }
          ]
        },
        {
          title: "■仕様トラブル・運用",
          items: [
            { q: "投稿した作品が表示されません。", a: "反映に時間がかかっている、または審査/確認中の可能性があります。しばらく待っても解決しない場合はお問い合わせください。" },
            { q: "間違って別の部門に応募してしまいました。", a: "原則、応募後の差し替えはできません。修正版を出したい場合は、応募期間内に一度削除して再投稿・再エントリーしてください。" }
          ]
        }
      ]
    },
    footer: {
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
      desc: "A contest to produce and submit short films using official assets of the real-life heroine 'Kuriemi' through generative AI.\n\nFree choice of tools. AI beginners are more than welcome."
    },
    about: {
      title: "CONCEPT",
      quote: "Japan is a place where users and media have accepted new creators and created a market together. It can be called a wonderland created by that miracle.",
      author: "— Atsuo Nakayama | Entertainment Sociologist",
      conceptTitle: "",
      conceptDesc: "Resonating with this idea, we launched Creators' Wonderland as a place where creators in the generative AI era can create, learn, and connect to the next opportunity. This contest is the first project of 'Creators' Wonderland Awards'."
    },
    profile: {
      role: "Talent & Entrepreneur",
      desc: "Kuriemi is an entrepreneur and company manager who also widely active as a model and talent. In December 2023, she established Japan's first virtual human talent agency. With over 2.5 million SNS followers, she uses her self-production skills to build SNS strategies and launch numerous in-house brands. Her mission is to create new value by utilizing latest technology, opening up the next generation of entertainment.",
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
      cat1Desc: "A category for ultra-short films focused on ideas and quick reflexes. Condense impact like surprise or humor into 10 seconds. We value creativity over perfection.",
      cat1Requirements: [
        "Duration: Approx. 10 seconds",
        "Ratio: 9:16 Vertical (1080x1920 recommended)",
        "Format: .MP4",
        "Upload Limit: 50MB",
        "Bitrate: 8-12 Mbps / VBR recommended",
        "Frame Rate: 30fps recommended",
        "Audio: -14 LUFS target"
      ],
      cat2Title: "Short Film Category",
      cat2Subtitle: "(Cinema)",
      cat2Desc: "A serious category focused on storytelling and visual expression. Create your own cinematic experience using AI-driven scale and direction. We look for deep expression and composition.",
      cat2Requirements: [
        "Duration: 1-10 minutes recommended",
        "Ratio: 16:9 Horizontal (1920x1080 recommended)",
        "Format: .MP4",
        "Upload Limit: 50MB",
        "Bitrate: 8-12 Mbps / VBR recommended",
        "Frame Rate: 30fps recommended",
        "Audio: -14 LUFS target"
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
      judge9Desc: "Professor at the Graduate School of Film and New Media, Tokyo University of the Arts. Former NHK Executive Producer. Specializes in media culture and content planning. Evaluates from the perspective of historical context and new tech fusion.",
      judge10Name: "Yachimat",
      judge10Role: "Judge",
      judge10Desc: "Participates as a judge for this contest."
    },
    prizes: {
      title: "PRIZES",
      totalPrize: "Total: 1.4M JPY",
      shortTitle: "Short Film Category",
      tenTitle: "10-Second Challenge",
      grandPrize: "Grand Prize",
      excellencePrize: "Excellence Prize",
      judgesPrize: "Judges' Prize",
      shortGrand: "500,000 JPY",
      shortEx: "200,000 JPY",
      shortJudge: "30,000 JPY each",
      tenGrand: "200,000 JPY",
      tenEx: "100,000 JPY",
      tenJudge: "10,000 JPY each"
    },
    partners: {
      title: "SPONSORS"
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
      step2Desc: "· Under 50MB: Upload .MP4 directly.\n· Over 50MB: Upload a teaser (under 50MB) to CW and attach a YouTube/Vimeo URL for the full version.",
      step3Title: "Enter the Contest",
      step3Desc: "Select your posted work from the contest page to enter.",
      step4Title: "SNS Posting (Optional)",
      step4Desc: "Post your work on SNS with hashtags #KuriemiAIShort #KuriemiAIContest (Sharing welcome).",
      notes: [
        "SNS posting is optional and does not affect the judging process.",
        "Team participation is allowed (max 5 people). Representative manages the entry.",
        "Team distribution of prizes should be handled internally.",
        "Representatives can mention members using IDs like '@username'."
      ]
    },
    faq: {
      title: "FAQ",
      categories: [
        {
          title: "■ Conditions",
          items: [
            { q: "Can I submit multiple works?", a: "Yes, you can submit multiple entries. However, each entry must have unique content; highly similar ones should be avoided." },
            { q: "Can I participate as a team?", a: "Yes, team participation is possible. A team can have up to 5 members including the representative. The representative handles the application, and members can be registered using the mention function during submission." },
            { q: "Can I participate from overseas?", a: "Yes, you can apply regardless of your place of residence. Restrictions may apply to prize shipping/payment depending on the country, so please check the terms." }
          ]
        },
        {
          title: "■ Creators' Wonderland (CW)",
          items: [
            { q: "Is registration required?", a: "Yes. All entries and posts are done on CW after registering or logging in." },
            { q: "Difference between posting and entering?", a: "'Posting' is uploading to CW. 'Entering' is selecting that post to apply for the 'Kuriemi Contest' on the contest page. Both steps are required." }
          ]
        },
        {
          title: "■ Submission Process (Files & URLs)",
          items: [
            { q: "Is there a file size limit?", a: "Files under 50MB can be uploaded directly. For files over 50MB, upload a teaser (under 50MB) and attach the full video URL from YouTube or Vimeo." },
            { q: "Can I use platforms other than YouTube?", a: "Currently, only YouTube and Vimeo are supported." },
            { q: "Can the URL video be 'unlisted'?", a: "It is okay as long as the judges can view it without issues (if login is required or permissions are restricted, we may not be able to judge it)." },
            { q: "Can I replace my work after submission?", a: "In principle, replacement is not possible. If you wish to submit a revised version, please delete your entry and re-submit within the period." }
          ]
        },
        {
          title: "■ Work Specifications",
          items: [
            { q: "Must I strictly follow the resolution and aspect ratio?", a: "Adherence is not strictly mandatory, but following the recommendations is advised to ensure the best viewing experience." },
            { q: "I don't understand the volume level (-14 LUFS).", a: "This is a guideline. Extremely high or low volume may make viewing difficult, so please adjust accordingly." }
          ]
        },
        {
          title: "■ Official Materials (Kuriemi Assets)",
          items: [
            { q: "Can anyone use the materials?", a: "They are provided for contest participants. Please check the terms for detailed usage scope." },
            { q: "Can I redistribute the materials on SNS or elsewhere?", a: "Redistribution of the provided materials is not permitted." }
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
            { q: "Will copyright be transferred to the organizer?", a: "No. Copyright remains with the creator." },
            { q: "Will my work be used secondarily?", a: "Yes. The organizer may use it for judging, promotion, archiving, etc. Please check the terms for details." },
            { q: "Can I include my work in my portfolio?", a: "Yes, as long as it does not infringe on third-party rights." },
            { q: "What BGM and sound effects can I use?", a: "Only copyright-free materials may be used. Please check the usage terms even for free materials." }
          ]
        },
        {
          title: "■ Prohibited Content",
          items: [
            { q: "What expressions are prohibited?", a: "Infringement of third-party rights (IP, music, logos, portraits) or content violating laws/guidelines is prohibited." },
            { q: "Can I use real people's faces or celebrities?", a: "In principle, this is not recommended. Consent from the individual is required for using their appearance or voice." },
            { q: "Can I include existing characters or logos?", a: "Not without permission from the rights holder." }
          ]
        },
        {
          title: "■ Technical Issues & Operations",
          items: [
            { q: "My posted work is not displayed.", a: "It may be due to network delay or moderation. If it persists, please contact us." },
            { q: "I accidentally submitted to the wrong category.", a: "Replacement is not possible. Please delete and re-submit within the period." }
          ]
        }
      ]
    },
    footer: {
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
      desc: "使用真人女主角「Kuriemi」的公認素材，通過生成 AI 製作並投稿短影音的競賽。\n\n使用工具不限。非常歡迎 AI 初學者參加。"
    },
    about: {
      title: "CONCEPT",
      quote: "日本是一個用戶和媒體都能接納新創作者，並共同創造市場的地方。這可以說是那樣的奇蹟所誕生的樂園。",
      author: "— 中山淳雄｜娛樂社會學家",
      conceptTitle: "",
      conceptDesc: "我們對這一理念產生共鳴，成立了 Creators' Wonderland，作為生成 AI 時代創作者創作、學習並連接下一個機會的場所。本次競賽是「Creators' Wonderland Awards」的第一個啟動項目。"
    },
    profile: {
      role: "Talent & Entrepreneur",
      desc: "Kuriemi 在作為企業家和公司經營者活動的同時，也作為模特和藝人廣泛活躍。2023年12月，她成立了日本首家虛擬人經紀公司。SNS 總粉絲數超過 250 萬。她以自我塑造能力為武器，親手策劃了多個 SNS 戰略並創立了多個品牌。她的使命是不受常識束縛，利用最新技術創造新價值，開拓次世代娛樂產業。",
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
      cat1Desc: "這是一個以創意和反應力決勝負的超短片部門。請在短短 10 秒內凝聚驚喜、歡笑、感動等直擊人心的衝擊力。創意重於完成度。我們期待您利用 AI 創作出讓人過目不忘的作品。",
      cat1Requirements: [
        "影片長度：約 10 秒",
        "推薦比例：縱向 9:16（推薦 1080x1920）",
        "格式：.MP4",
        "上傳限制：50MB",
        "位元率：8-12 Mbps / 推薦 VBR",
        "幀率：推薦 30fps",
        "音量標準：-14 LUFS"
      ],
      cat2Title: "短片部門",
      cat2Subtitle: "（電影）",
      cat2Desc: "這是一個展現故事、世界觀與影像表達的正式部門。請利用只有 AI 才能實現的規模和演出效果，打造專屬於您的電影體驗。我們重視結構力、完成度和表達深度。",
      cat2Requirements: [
        "影片長度：推薦 1~10 分鐘",
        "推薦比例：橫向 16:9（推薦 1920x1080）",
        "格式：.MP4",
        "上傳限制：50MB",
        "位元率：8-12 Mbps / 推薦 VBR",
        "幀率：推薦 30fps",
        "音量標準：-14 LUFS"
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
      judge3Desc: "曾在手塚製作公司擔任《火之鳥 2772》和《原子小金剛》（1980 年版）の製作。參與創立 Gainax 並製作《王立宇宙軍》。現任 Oniro 執行長。作為主辦方成員參加。",
      judge4Name: "鈴木收",
      judge4Role: "Startup Factory 代表",
      judge4Desc: "製作多個國民熱門節目的放送作家。執筆多部電影與劇集。2024 年 3 月退任放送作家，現專注於支持年輕企業家和製作新業務。",
      judge5Name: "中山淳雄",
      judge5Role: "娛樂社會學家",
      judge5Desc: "研究娛樂產業結構的社會學家。著有《推し經濟》。對內容產業の海外擴張與技術融合有深刻見解。「Creators' Wonderland」的提倡者。",
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
      judge9Desc: "東京藝術大學教授。前 NHK 執行製作人。專注於媒體文化與內容策劃。從歷史背景與技術融合的角度進行評審。",
      judge10Name: "Yachimat",
      judge10Role: "評審",
      judge10Desc: "作為本競賽的評審參加。"
    },
    prizes: {
      title: "PRIZES",
      totalPrize: "獎金總額 140 萬日圓",
      shortTitle: "短片部門",
      tenTitle: "10 秒挑戰部門",
      grandPrize: "最優秀獎",
      excellencePrize: "優秀獎",
      judgesPrize: "評審獎",
      shortGrand: "50 萬日圓",
      shortEx: "20 萬日圓",
      shortJudge: "各 3 萬日圓",
      tenGrand: "20 萬日圓",
      tenEx: "10 萬日圓",
      tenJudge: "各 1 萬日圓"
    },
    partners: {
      title: "SPONSORS"
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
      step2Desc: "· 檔案大小 50MB 以內：直接上傳 .MP4 作品數據。\n· 超過 50MB：上傳 50MB 以內的先行預告片至 CW，並附上 YouTube 或 Vimeo 的完整版連結。",
      step3Title: "報名參賽",
      step3Desc: "從競賽頁面選擇已上傳的作品進行報名。",
      step4Title: "SNS 投稿（選填）",
      step4Desc: "在 SNS 上帶標籤 #KuriemiAIShort #KuriemiAIContest 發布您的作品（歡迎轉發）。",
      notes: [
        "在 X、TikTok 等 SNS 上的投稿是選填的，不影響評審。",
        "可以團隊參加（最多 5 人）。由代表進行報名與聯絡。",
        "獎金與獎品由團隊內部協商分配。",
        "代表可以通過 ID（如 @username）在作品投稿時提及團隊成員。"
      ]
    },
    faq: {
      title: "FAQ",
      categories: [
        {
          title: "■ 參加與投稿條件",
          items: [
            { q: "一人可以投稿多個作品嗎？", a: "是的，可以提交多個作品。但是，每件作品必須具有獨特的內容，請避免提交高度相似的作品。" },
            { q: "可以以團隊名義參加嗎？", a: "是的，可以以團隊形式參加。團隊最多 5 人（包括代表）。申請由代表辦理，在提交作品時可以使用網站內的提及功能註冊團隊成員。" },
            { q: "可以從海外參加嗎？", a: "是的，您可以申請，無論您的居住地。獎品運送或獎金支付可能因國家/地區而異，請查看條款。" }
          ]
        },
        {
          title: "■ CW（Creators' Wonderland）・帳戶相關",
          items: [
            { q: "投稿需要註冊 Creators' Wonderland 嗎？", a: "是的。所有投稿和報名均在登錄 CW 後進行。" },
            { q: "作品投稿和競賽報名有什麼區別？", a: "「作品投稿」是將作品上傳至 CW。「競賽報名」是將已上傳的作品報名參加競賽。兩個步驟都完成才算正式報名。" }
          ]
        },
        {
          title: "■ 投稿流程（檔案與 URL）",
          items: [
            { q: "檔案大小有限制嗎？", a: "50MB 以內可直接上傳。超過 50MB 請上傳 50MB 以內的片段並附上 YouTube 或 Vimeo 的 URL。" },
            { q: "可以使用 YouTube 以外的平台嗎？", a: "目前僅支援 YouTube 和 Vimeo。" },
            { q: "URL 的影片可以設為「限定公開」嗎？", a: "只要評審可以無障礙觀看即可（若需要登錄或權限受限，可能無法評審）。" },
            { q: "投稿後可以更換作品嗎？", a: "原則上無法更換。若想提交修改版，請先刪除再重新投稿。" }
          ]
        },
        {
          title: "■ 作品規格",
          items: [
            { q: "解析度和畫面比例必須嚴格遵守嗎？", a: "不需要嚴格遵守，但建議盡量符合推薦規格以獲得最佳觀看體驗。" },
            { q: "不太理解音量要求（-14 LUFS）。", a: "這是音量的參考標準。音量過大或過小可能影響觀看體驗，請盡量調整。" }
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
            { q: "投稿作品的著作權會轉讓給主辦方嗎？", a: "不會。著作權歸創作者所有。" },
            { q: "我的作品會被二次使用嗎？", a: "是的。主辦方可能會在評審、宣傳、存檔等必要範圍內使用。詳見條款。" },
            { q: "我可以將作品放入個人作品集嗎？", a: "可以。但請確保不侵犯第三方權利。" },
            { q: "可以使用什麼 BGM 和音效？", a: "僅可使用無版權素材。即使是免費素材，也請確認其使用條款。" }
          ]
        },
        {
          title: "■ 禁止事項與內容指南",
          items: [
            { q: "有哪些禁止的表現？", a: "禁止侵犯第三方權利（IP、音樂、標誌、肖像）或違反法律/指南的內容。" },
            { q: "可以在作品中使用他人的臉或名人嗎？", a: "原則上不建議。使用他人の容貌或聲音需要獲得本人同意。" },
            { q: "可以使用現有作品的角色或標誌嗎？", a: "未經權利人許可不得使用。" }
          ]
        },
        {
          title: "■ 技術問題與運營",
          items: [
            { q: "已投稿的作品未顯示。", a: "可能是網絡延遲或正在審核。如果持續未顯示，請聯繫我們。" },
            { q: "不小心投稿到了錯誤的類別。", a: "無法更換。在投稿期間內，可以先刪除再重新投稿。" }
          ]
        }
      ]
    },
    footer: {
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
