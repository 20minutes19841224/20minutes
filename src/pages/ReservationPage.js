import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = "YOUR_CLIENT_ID";  // 取得済みのクライアントID
const REDIRECT_URI = "YOUR_BACKEND_REDIRECT_URI";  // X APIのリダイレクトURL

const ReservationPage = () => {
    const [user, setUser] = useState(null);
    const [reservation, setReservation] = useState(null);
    const [selectedTime, setSelectedTime] = useState('22:00');
    const [selectedCast, setSelectedCast] = useState('');
    const [castList, setCastList] = useState([]);
    const [castDetails, setCastDetails] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const authenticateTwitter = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (!code) {
                // ログインしていない場合、X APIのOAuth 2.0認証画面へリダイレクト
                const STATE = Math.random().toString(36).substring(7);
                const authURL = `https://twitter.com/i/oauth2/authorize?` +
                    `client_id=${CLIENT_ID}` +
                    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
                    `&response_type=code` +
                    `&scope=tweet.read users.read` +
                    `&state=${STATE}` +
                    `&code_challenge=challenge` +
                    `&code_challenge_method=plain`;

                window.location.href = authURL;
            } else {
                // すでにX APIから認可コードが取得されている場合、バックエンドでX IDを取得
                try {
                    const response = await axios.get(`/api/auth/callback?code=${code}`);
                    if (response.data.x_id) {
                        setUser({ x_id: response.data.x_id, name: response.data.name });
                        fetchReservationData(response.data.x_id);
                        fetchAvailableCasts();
                    }
                } catch (error) {
                    console.error('X API認証エラー', error);
                }
            }
        };

        const fetchReservationData = async (xId) => {
            try {
                const res = await axios.get(`/api/reservations?x_id=${xId}`);
                if (res.data) {
                    setReservation(res.data);
                } else {
                    handleNoReservationFound();
                }
            } catch (error) {
                console.error('予約情報の取得エラー', error);
                handleNoReservationFound();
            }
        };

        const fetchAvailableCasts = async () => {
            try {
                const res = await axios.get('/api/casts');
                setCastList(res.data);
            } catch (error) {
                console.error('出勤キャストの取得エラー', error);
            }
        };

        const handleNoReservationFound = () => {
            setReservation({
                name: user?.name || "",
                last_reserved_cast: "なし",
                preferred_time: "未設定"
            });
        };

        authenticateTwitter();
    }, []);

    const handleCastSelection = async (castName) => {
        setSelectedCast(castName);
        try {
            const res = await axios.get(`/api/cast-details?name=${castName}`);
            setCastDetails(res.data);
            updateTotalAmount(res.data.rate);
        } catch (error) {
            console.error('キャスト情報取得エラー', error);
        }
    };

    const updateTotalAmount = (amount) => {
        setTotalAmount(totalAmount + amount);
    };

    const handleReservation = () => {
        navigate('/reservation-summary', { state: { selectedTime, selectedCast, totalAmount } });
    };

    return (
        <div className="reservation-container">
            {user ? (
                <div>
                    <h2>予約ページ</h2>
                    <p><strong>お名前:</strong> {reservation?.name}</p>
                    <p><strong>X ID:</strong> {user.x_id}</p>
                    <p><strong>前回予約キャスト:</strong> {reservation?.last_reserved_cast}</p>
                    <label>
                        <strong>ご希望時間:</strong>
                        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>
                            <option value="24:00">24:00</option>
                        </select>
                    </label>
                    <label>
                        <strong>希望キャスト:</strong>
                        <select value={selectedCast} onChange={(e) => handleCastSelection(e.target.value)}>
                            <option value="">選択してください</option>
                            {castList.map((cast) => (
                                <option key={cast.name} value={cast.name}>{cast.name}</option>
                            ))}
                        </select>
                    </label>
                    {castDetails && (
                        <div className="cast-details">
                            <img src={castDetails.image} alt={selectedCast} />
                            <p><strong>空き時間:</strong> {castDetails.available_times.join(', ')}</p>
                        </div>
                    )}
                    <p><strong>合計金額:</strong> ¥{totalAmount}</p>
                    <button onClick={handleReservation}>予約確定</button>
                </div>
            ) : (
                <p>ログインしてください...</p>
            )}
        </div>
    );
};

export default ReservationPage;
