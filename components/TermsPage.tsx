
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "応募規約 | KURIEMI AI SHORT FILM CONTEST";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'KURIEMI AI SHORT FILM CONTESTの応募規約です。応募条件や著作権の取り扱い、禁止事項について記載しています。');
    }
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-[var(--text-color)]">
      <h1 className="text-3xl md:text-5xl font-black mb-12 tracking-widest text-center uppercase border-b border-accent/30 pb-8">
        応募規約
      </h1>
      
      <div className="space-y-12 leading-loose opacity-90 text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>第1条（はじめに）
          </h2>
          <p>
            KURIEMI AI SHORT FILM CONTEST 運営事務局（以下「事務局」）が主催する本コンテストに応募される方（以下「応募者」）は、以下の応募規約（以下「本規約」）をよくお読みいただき、同意の上でご応募ください。本コンテストに応募された時点で、本規約に同意したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>第2条（応募資格）
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>本規約に同意いただける個人、またはグループ。</li>
            <li>未成年者の場合は、保護者の同意を得た上で応募すること。</li>
            <li>プロ・アマチュア、居住地は問いません（ただし賞品発送等に制限がある場合があります）。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>第3条（著作権の帰属および利用許諾）
          </h2>
          <p className="mb-4">
            1. 応募作品の著作権は、原則として応募者に帰属します。
          </p>
          <p className="mb-4">
            2. 事務局および事務局が指定する第三者は、本コンテストの広報活動、広告、展示、配信、その他の目的のために、応募作品を無償で利用（複製、翻案、公衆送信等）できる非独占的な権利を永久に有するものとします。
          </p>
          <p>
            3. 応募者は、提供された「公認素材（くりえみ素材）」が含まれる作品について、事務局の許可なく商用利用を行うことはできません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>第4条（禁止事項）
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>第三者の知的財産権、肖像権、プライバシー等を侵害する行為。</li>
            <li>公序良俗に反する表現（過度な暴力、性的な描写など）を含む作品。</li>
            <li>AI生成における特定のツールやモデルの利用規約に違反する行為。</li>
            <li>事務局の運営を妨げ、または信頼を損なう行為。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>第5条（免責事項）
          </h2>
          <p>
            事務局は、本コンテストの利用または応募によって生じた損害（コンピュータウイルスの感染、データの消失、第三者とのトラブル等）について、一切の責任を負わないものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>第6条（規約の変更）
          </h2>
          <p>
            事務局は、必要と判断した場合には、応募者に事前の通知なく本規約を変更できるものとします。変更後の規約は公式サイトに掲載された時点から効力を生じます。
          </p>
        </section>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-xs opacity-50 mb-8">制定日：2026年2月1日</p>
      </div>
    </div>
  );
};

export default TermsPage;
