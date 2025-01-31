import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

// 画像のインポート
import newBanner from "../assets/images/new_banner.png";
import requestIcon from "../assets/images/request_icon.png";
import castImage from "../assets/images/casttop.png";
import staffImage from "../assets/images/stafftop.png";
import bottleImage from "../assets/images/botletop.png";
import reserveImage from "../assets/images/yoyakutop.png";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* ヘッダー */}
      <header className="home-header" style={{ backgroundImage: `url(${newBanner})` }}>
        <div className="store-info-overlay">
          「20minutes」は、FF14ユーザー店（対話店）です。<br />
          ソファ席とVIP席をご用意しておりますのでお好みのコースをお選びください。
        </div>
      </header>

      {/* 画像メニュー */}
      <div className="content-container">
        <div className="image-menu">
          <div className="menu-item">
            <Link to="/cast">
              <img src={castImage} alt="キャスト紹介" className="menu-image" />
              <div className="button">キャスト一覧</div>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/staff">
              <img src={staffImage} alt="スタッフ紹介" className="menu-image" />
              <div className="button">スタッフ一覧</div>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/bottle-menu">
              <img src={bottleImage} alt="ボトルメニュー" className="menu-image" />
              <div className="button">ボトルメニュー</div>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/reservation">
              <img src={reserveImage} alt="ご予約ページ" className="menu-image" />
              <div className="button">ご予約ページ</div>
            </Link>
          </div>
        </div>

        {/* 画像メニューの下の線 */}
        <div className="image-menu-divider"></div>
      </div>

      {/* System Contents */}
      <div className="system-menu">
        <h2>System Contents</h2>
        <table>
          <thead>
            <tr>
              <th>コース</th>
              <th>費用（おひとり様）</th>
              <th>セットメニュー</th>
              <th>延長</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>フリー</td>
              <td>100,000G</td>
              <td>30分【ソファ接客】</td>
              <td>延長一回20分 100,000G</td>
            </tr>
            <tr>
              <td>キャスト指名</td>
              <td>150,000G</td>
              <td>30分【ソファ接客】</td>
              <td>延長一回20分 100,000G</td>
            </tr>
            <tr>
              <td>VIP</td>
              <td>500,000G</td>
              <td>50分【FC個室】</td>
              <td>延長不可</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* お客様へのお願い */}
      <div className="customer-request">
        <h2>お客様へのお願い</h2>
        <div className="request-container">
          {/* 画像を左に配置 */}
          <img src={requestIcon} alt="お願い" className="request-image left" />

          {/* お願いリスト */}
          <ul className="customer-list">
            <li><span className="bullet">・</span> 店内ではミニオンをおしまいください</li>
            <li><span className="bullet">・</span> 店内の様子を配信するのはご遠慮ください</li>
            <li><span className="bullet">・</span> ログ表示状態でのエモートの連続使用はご遠慮ください</li>
            <li><span className="bullet">・</span> X DMやTELLなど個人的な会話はご遠慮ください</li>
            <li><span className="bullet">・</span> キャストへのフレンド登録、コミュニティへの勧誘はご遠慮ください</li>
            <li><span className="bullet">・</span> キャストスタッフへご要望の際は当店X DMへご連絡ください</li>
            <li><span className="bullet">・</span> お約束いただけない場合ご利用をお断りする場合がございます</li>
          </ul>
        </div>
      </div>

      {/* フッター */}
      <footer className="footer">
        <p>Copyright (C) SQUARE ENIX CO., LTD. All Rights Reserved.</p>
        <a href="/" className="back-to-top">TOPページに戻る</a>
      </footer>
    </div>
  );
};

export default HomePage;
