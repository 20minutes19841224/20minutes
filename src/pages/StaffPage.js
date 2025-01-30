import React from "react";
import "../styles/StaffPage.css"; // 必要なCSSをインポート

// スタッフデータを定義
const staffData = [
  {
    id: 1,
    image: "/images/16.png",
    alt: "スタッフ写真 1",
    link: "https://x.com/FT5285Et1CqZZ3J",
  },
  {
    id: 2,
    image: "/images/17.png",
    alt: "スタッフ写真 2",
    link: "https://x.com/sq_bo314",
  },
  {
    id: 3,
    image: "/images/18.png",
    alt: "スタッフ写真 3",
    link: "https://x.com/ErisCrimson14",
  },
  {
    id: 4,
    image: "/images/19.png",
    alt: "スタッフ写真 4",
    link: "https://x.com/Y74ozhcGKloMnla",
  },
];

const StaffPage = () => {
  return (
    <div className="staff-page">
      {/* ヘッダー部分 */}
      <header className="header">
        <h1>スタッフ一覧</h1>
      </header>

      {/* 説明文 */}
      <div className="description">
        QRコードを読み込むか画像クリックでスタッフのXにジャンプします。
      </div>

      {/* スタッフ一覧部分 */}
      <main className="staff-grid">
        {staffData.map((staff) => (
          <a
            key={staff.id}
            href={staff.link}
            target="_blank"
            rel="noopener noreferrer"
            className="staff-card"
          >
            <img src={staff.image} alt={staff.alt} className="staff-image" />
          </a>
        ))}
      </main>

      {/* フッター部分 */}
      <footer className="footer">
        <p>
          Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.
        </p>
        <a href="/" className="back-to-top">
          TOPページに戻る
        </a>
      </footer>
    </div>
  );
};

export default StaffPage;
