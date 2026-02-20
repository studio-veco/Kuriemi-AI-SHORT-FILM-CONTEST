
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "プライバシーポリシー | KURIEMI AI SHORT FILM CONTEST";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'KURIEMI AI SHORT FILM CONTESTのプライバシーポリシーです。ご提供いただいた個人情報の取り扱い方針について記載しています。');
    }
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-[var(--text-color)]">
      <h1 className="text-3xl md:text-5xl font-black mb-12 tracking-widest text-center uppercase border-b border-accent/30 pb-8">
        プライバシーポリシー
      </h1>
      
      <div className="space-y-12 leading-loose opacity-90 text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>1. 個人情報の収集
          </h2>
          <p>
            本コンテストの運営にあたり、応募者の氏名、メールアドレス、SNSアカウント等の個人情報を、応募フォームやお問い合わせを通じて収集いたします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>2. 利用目的
          </h2>
          <p>収集した個人情報は、以下の目的のみに利用します。</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>本コンテストの審査および受賞連絡</li>
            <li>賞品・賞金の発送および支払い手続き</li>
            <li>本コンテストに関する重要なお知らせの配信</li>
            <li>お問い合わせへの回答</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>3. 個人情報の管理
          </h2>
          <p>
            収集した個人情報は、事務局が厳重に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等の防止に努めます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>4. 第三者への提供
          </h2>
          <p>
            法令に基づく場合を除き、応募者の同意なく個人情報を第三者に提供することはありません。ただし、賞品発送等の業務委託先に対しては、必要最小限の情報を開示する場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>5. 個人情報の照会・訂正・削除
          </h2>
          <p>
            応募者がご自身の個人情報の照会、修正、削除等を希望される場合には、事務局のお問い合わせ窓口までご連絡ください。速やかに対応いたします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-accent block"></span>6. 継続的改善
          </h2>
          <p>
            事務局は、個人情報の取り扱いに関する法令、国が定める指針その他の規範を遵守するとともに、本ポリシーの内容を継続的に見直し、改善に努めます。
          </p>
        </section>
      </div>

      <div className="mt-16 text-center">
        <p className="text-xs opacity-50">制定日：2026年2月1日</p>
      </div>
    </div>
  );
};

export default PrivacyPage;
