require("dotenv").config();
const express = require("express");
const axios = require("axios");
const session = require("express-session");

const app = express();
const PORT = 3000;

// 環境変数からクライアントID・シークレットを読み込む
const CLIENT_ID = process.env.TWITTER_CLIENT_ID;
const CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET;
const REDIRECT_URI = process.env.TWITTER_REDIRECT_URI;

// セッション設定
app.use(session({ secret: "your_secret_key", resave: false, saveUninitialized: true }));

// Twitter OAuth 認証URLにリダイレクト
app.get("/auth/twitter", (req, res) => {
    const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=tweet.read%20users.read%20offline.access%20openid&state=random_string&code_challenge=challenge_code&code_challenge_method=S256`;
    res.redirect(authUrl);
});

// 認証後のコールバック処理
app.get("/auth/callback", async (req, res) => {
    const code = req.query.code;

    try {
        // アクセストークンを取得
        const tokenResponse = await axios.post("https://api.twitter.com/2/oauth2/token", {
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code_verifier: "YOUR_CODE_VERIFIER"
        }, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        const accessToken = tokenResponse.data.access_token;

        // ユーザー情報を取得
        const userInfoResponse = await axios.get("https://api.twitter.com/2/users/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        const user = userInfoResponse.data.data;
        req.session.user = { id: user.id, username: user.username, name: user.name };

        res.redirect("/"); // ログイン後にトップページへ
    } catch (error) {
        console.error("Twitter OAuth エラー:", error);
        res.status(500).send("認証エラー");
    }
});

// Twitterのログイン状態をチェック
app.get("/auth/check-session", (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, username: req.session.user.username });
    } else {
        res.json({ loggedIn: false });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
