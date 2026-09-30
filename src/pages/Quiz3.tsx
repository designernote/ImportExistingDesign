import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WrongAnswer from "./WrongAnswer";

const assetPathPrefix = "/assets";
const imgCowCoffee = `${assetPathPrefix}/5a6e3.png`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgBgDeco = `${assetPathPrefix}/d4de7.svg`;
const imgCardBg = `${assetPathPrefix}/53ce9.svg`;
const imgArrow = `${assetPathPrefix}/5bc33.svg`;
const imgDivider = `${assetPathPrefix}/6815e.svg`;

export default function Quiz3() {
  const navigate = useNavigate();
  const [showWrong, setShowWrong] = useState(false);

  const handleAnswer = (answer: "O" | "X") => {
    if (answer === "O") {
      navigate("/quiz/3/correct");
    } else {
      setShowWrong(true);
    }
  };

  return (
    <div className="relative">
      <div
        className="min-h-screen w-full flex flex-col items-center"
        style={{ backgroundColor: "#d3e9dc" }}
      >
        <div className="w-full max-w-[660px] flex flex-col items-center relative">

          {/* Quiz card */}
          <div
            className="relative mx-4 mt-14 w-[calc(100%-2rem)] max-w-[660px] bg-white rounded-[29px] flex flex-col items-center pb-8"
            style={{ boxShadow: "rgba(0,0,0,0.25) 0px 4px 4px 0px" }}
          >
            <div className="absolute inset-0 rounded-[29px] overflow-hidden pointer-events-none">
              <img src={imgCardBg} alt="" className="w-full h-full object-fill opacity-60" />
            </div>

            {/* Q3 badge */}
            <div className="relative z-10 -mt-8 flex flex-col items-center">
              <div className="flex items-center justify-center w-[135px] h-[91px] rounded-[45.5px]" style={{ backgroundColor: "#295b34" }}>
                <span style={{ fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif", fontSize: "58px", color: "white", lineHeight: "72px" }}>Q3</span>
              </div>
              <img src={imgArrow} alt="" className="w-[40px] -mt-1" style={{ transform: "rotate(180deg)" }} />
            </div>

            <div className="relative z-10 mt-4 text-center" style={{ fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif", fontSize: "clamp(40px, 8vw, 58px)", color: "#295b34", lineHeight: "72px" }}>
              <p>어디서</p>
              <p>만날 수 있을까?</p>
            </div>

            <div className="relative z-10 mt-6 px-6 flex flex-col items-center gap-2 w-full">
              <p className="text-center" style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(20px, 4.5vw, 28px)", color: "#000", lineHeight: "45px" }}>
                저탄소 인증 축산물은
              </p>
              <img src={imgDivider} alt="" className="w-full max-w-[496px]" />
              <p className="text-center" style={{ lineHeight: "45px" }}>
                <span style={{ fontFamily: "'Hakgyoansim EunhasuOTF:R', 'Noto Sans KR', sans-serif", fontSize: "clamp(22px, 5vw, 32px)", color: "#389d55" }}>이디야커피</span>
                <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(20px, 4.5vw, 28px)", color: "#000" }}>에서도 만나볼 수 있다?</span>
              </p>
              <img src={imgDivider} alt="" className="w-full max-w-[496px]" />
            </div>

            <div className="relative z-10 mt-8 flex gap-8 items-center justify-center px-6">
              <button onClick={() => handleAnswer("O")} className="flex items-center justify-center rounded-[42px] transition-transform hover:scale-105 active:scale-95 cursor-pointer" style={{ width: "clamp(140px, 35vw, 235px)", height: "clamp(140px, 35vw, 235px)", backgroundColor: "#4c7dda" }}>
                <span style={{ fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif", fontSize: "clamp(80px, 18vw, 128px)", color: "white", lineHeight: 1 }}>O</span>
              </button>
              <button onClick={() => handleAnswer("X")} className="flex items-center justify-center rounded-[42px] transition-transform hover:scale-105 active:scale-95 cursor-pointer" style={{ width: "clamp(140px, 35vw, 235px)", height: "clamp(140px, 35vw, 235px)", backgroundColor: "#eb6767" }}>
                <span style={{ fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif", fontSize: "clamp(80px, 18vw, 128px)", color: "white", lineHeight: 1 }}>X</span>
              </button>
            </div>

            <div className="relative z-10 w-full mt-4 overflow-hidden" style={{ height: "200px" }}>
              <img src={imgCowCoffee} alt="소 캐릭터와 이디야커피" className="w-full h-full object-contain object-bottom" />
            </div>
          </div>

          <div className="w-[120%] -ml-[10%] mt-[-20px] relative z-0">
            <img src={imgBgDeco} alt="" className="w-full" />
          </div>

          <div className="relative z-10 mt-4 mb-8 px-4 w-full flex flex-col items-center gap-3">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <img src={imgMinistry} alt="농림축산식품부" className="h-[40px]" />
              <div className="flex items-center gap-1">
                <img src={imgLivestockIcon} alt="" className="h-[30px]" />
                <img src={imgLivestock} alt="축산물품질평가원" className="h-[21px]" />
              </div>
              <img src={imgEdiya} alt="에디야커피" className="h-[20px]" />
            </div>
            <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "18px", color: "#7b8b80", textAlign: "center" }}>
              축산물품질평가원 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>

      {showWrong && <WrongAnswer quizNumber={3} nextPath="/quiz/3/correct" />}
    </div>
  );
}
