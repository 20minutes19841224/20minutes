import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

// 画像のインポート
import castImage from "../assets/images/casttop.png";
import staffImage from "../assets/images/stafftop.png";
import bottleImage from "../assets/images/botletop.png";
import reserveImage from "../assets/images/yoyakutop.png";


const HomePage = () => {
  const twitterRef = useRef(null);

  useEffect(() => {
    // Twitterウィジェットがすでにロードされているか確認
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(twitterRef.current);
        }
      };
    } else {
      window.twttr.widgets.load(twitterRef.current);
    }
  }, []);

  return (
    <div className="home-container">
      {/* ヘッダー */}
      <header className="home-header">
        <div className="store-info-overlay">
          「20minutes」は、FF14ユーザー店（対話店）です。<br />
          ソファ席とVIP席をご用意しておりますのでお好みのコースをお選びください。
        </div>

        {/* 新しいテキスト */}
        <div className="additional-header-info">
          <p>
            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>20minutes</span>
            <br />
            Where moments turn into memories.
          </p>
        </div>
      </header>

      {/* ツイッターウィジェット（ヘッダー直下に配置） */}
      <div className="twitter-widget-container" ref={twitterRef}>
        <a
          className="twitter-timeline"
          href="https://twitter.com/20minutes_FF14?ref_src=twsrc%5Etfw"
          data-width="300"
          data-height="450"
          data-theme="dark"
        >
          Tweets by 20minutes_FF14
        </a>
      </div>

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
      </div>

      {/* System Contents（画像のすぐ下に配置） */}
      <div className="system-menu">
        <h2>System Contents</h2>
        <table>
<thead>
  <tr>
    <th>コース</th>
    <th>費用（おひとり様）</th>
    <th>セットメニュー</th>
    <th>延長</th> {/* 追加した列 */}
  </tr>
</thead>
<tbody>
  <tr>
    <td>フリー</td>
    <td>100,000G</td>
    <td>30分【ソファ接客】</td>
    <td>延長一回20分 100,000G</td> {/* 追加したデータ */}
  </tr>
  <tr>
    <td>キャスト指名</td>
    <td>150,000G</td>
    <td>30分【ソファ接客】</td>
    <td>延長一回20分 100,000G</td> {/* 追加したデータ */}
  </tr>
  <tr>
    <td>VIP</td>
    <td>500,000G</td>
    <td>50分【FC個室】</td>
    <td>延長不可</td> {/* 追加したデータ */}
  </tr>
</tbody>

        </table>
      </div>

      {/* お客様へのお願い */}
      <div className="customer-request">
        <h2>お客様へのお願い</h2>
        <ul>
          <li>店内ではミニオンをおしまいください</li>
          <li>店内の様子を配信するのはご遠慮ください</li>
          <li>ログ表示状態でのエモートの連続使用はご遠慮ください</li>
          <li>X DMやTELLなど個人的な会話はご遠慮ください</li>
<li>キャストへのフレンド登録、コミュニティへの勧誘はご遠慮ください</li>          
          <li>キャストスタッフへご要望の際は当店X DMへご連絡ください</li>
<li>お約束いただけない場合ご利用をお断りする場合がございます</li>

    
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
