import React from "react";
import backgroundImage from "../assets/images/botoruhaikei.jpeg"; // 背景画像をインポート
import "../styles/BottleMenu.css"; // CSSをインポート

const BottleMenu = () => {
  const bottleItems = [
    { name: "Armand Green", furigana: "アルマンドグリーン", price: "50,000G" },
    { name: "Armand Red", furigana: "アルマンドレッド", price: "100,000G" },
    { name: "Armand Silver", furigana: "アルマンドシルバー", price: "500,000G" },
    { name: "Armand Black", furigana: "アルマンドブラック", price: "1,000,000G" },
    { name: "Richard", furigana: "リシャール", price: "3,000,000G" },
    { name: "Romanee Conti", furigana: "ロマネコンティ", price: "5,000,000G" },
    { name: "Perfection", furigana: "ペルフェクション", price: "10,000,000G" },
    { name: "Black Pearl", furigana: "ブラックパール", price: "30,000,000G" },
  ];

  return (
    <div
      className="bottle-menu"
      style={{
        backgroundImage: `url(${backgroundImage})`, // 背景画像を設定
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ヘッダー */}
      <header className="header">
        <h1>20minutes</h1>
      </header>

      {/* メインコンテンツ */}
      <main className="main-content">
        <h2>Bottle Menu</h2>
        <table className="bottle-table">
          <thead>
            <tr>
              <th>ボトル名</th>
              <th>フリガナ</th>
              <th>価格</th>
            </tr>
          </thead>
          <tbody>
            {bottleItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.furigana}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {/* フッター */}
      <footer className="footer">
        <p>
          <a href="/">TOPページに戻る</a>
        </p>
        <p>Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BottleMenu;
