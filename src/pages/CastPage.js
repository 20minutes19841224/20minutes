import React from "react";
import casts from "../data/casts"; // キャストデータをインポート
import "../styles/CastPage.css"; // CSSファイルをインポート

const CastPage = () => {
  return (
    <div>
      {/* ヘッダー */}
      <header>
        <h1 className="luxury-title">キャスト一覧</h1>
      </header>

      {/* 説明文 */}
      <div className="description">
        QRコードを読み込むか画像クリックでキャストのXにジャンプします。
      </div>

      {/* キャストグリッド */}
      <main>
        <div className="main-grid">
          {casts.map((cast) => (
            <div key={cast.id} className="cast-item">
              <a href={cast.link} target="_blank" rel="noopener noreferrer">
                <img src={cast.image} alt={`キャスト`} />
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* フッター */}
      <footer>
        <p>Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.</p>
        <a href="/">TOPページに戻る</a>
      </footer>
    </div>
  );
};

export default CastPage;
