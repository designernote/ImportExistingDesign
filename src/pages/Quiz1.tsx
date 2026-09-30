import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WrongAnswer from "./WrongAnswer";

const assetPathPrefix = "/assets";
const imgCharacter = `${assetPathPrefix}/edf63.png`;
const imgLowCarbon = `${assetPathPrefix}/91d89.png`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgBgDeco = `${assetPathPrefix}/d4de7.svg`;
const imgCardBg = `${assetPathPrefix}/53ce9.svg`;
const imgDivider = `${assetPathPrefix}/6815e.svg`;

const mangoFont = "'Mango Byeolbyeol:Regular', sans-serif";

export default function Quiz1() {
  const navigate = useNavigate();
  const [showWrong, setShowWrong] = useState(false);

  return (
    <div className="relative">
      <div className="min-h-screen w-full flex flex-col items-center" style={{ backgroundColor: "#d3e9dc" }}>
        <div className="w-full max-w-[660px] flex flex-col items-center relative">

          <div className="anim-card-in relative mx-4 mt-14 w-[calc(100%-2rem)] max-w-[660px] bg-white rounded-[29px] flex flex-col items-center pb-8"
            style={{ boxShadow: "rgba(0,0,0,0.25) 0px 4px 4px 0px" }}>
            <div className="absolute inset-0 rounded-[29px] overflow-hidden pointer-events-none">
              <img src={imgCardBg} alt="" className="w-full h-full object-fill opacity-60" />
            </div>

            {/* Q1 badge */}
            <div className="anim-pop-in relative z-10 -mt-10 flex items-center justify-center w-[135px] h-[91px] rounded-[45.5px]"
              style={{ backgroundColor: "#295b34", animationDelay: "0.2s" }}>
              <span style={{ fontFamily: mangoFont, fontSize: "58px", color: "white", lineHeight: "72px" }}>Q1</span>
            </div>

            {/* Quiz subtitle */}
            <p className="anim-float-up-in relative z-10 mt-4 text-center leading-none"
              style={{ fontFamily: mangoFont, fontSize: "clamp(40px, 8vw, 58px)", color: "#295b34", animationDelay: "0.3s" }}>
              <span style={{ display: "block", lineHeight: "1.2" }}>저탄소 인증</span>
              <span style={{ display: "block", lineHeight: "1.2" }}>축산물이란?</span>
            </p>

            {/* Question text */}
            <div className="anim-float-up-in relative z-10 mt-4 px-6 flex flex-col items-center gap-2 w-full" style={{ animationDelay: "0.4s" }}>
              <p className="text-center" style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(20px, 4.5vw, 28px)", color: "#000", lineHeight: "45px" }}>
                축산물 생산 과정에서
              </p>
              <img src={imgDivider} alt="" className="w-full max-w-[496px]" />
              <p className="text-center" style={{ lineHeight: "45px" }}>
                <span style={{ fontFamily: "'Hakgyoansim EunhasuOTF:R', sans-serif", fontSize: "clamp(22px, 5vw, 32px)", color: "#389d55", letterSpacing: "-0.01em" }}>온실가스</span>
                <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(20px, 4.5vw, 28px)", color: "#000" }}>를 줄인 친환경 축산물이다?</span>
              </p>
              <img src={imgDivider} alt="" className="w-full max-w-[496px]" />
            </div>

            {/* O/X buttons — Q1 correct = O */}
            <div className="anim-float-up-in relative z-10 mt-6 w-full flex justify-center gap-[clamp(16px,5vw,40px)] px-6" style={{ animationDelay: "0.5s" }}>
              <button onClick={() => navigate("/quiz/1/correct")}
                className="flex items-center justify-center rounded-[42px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
                style={{ backgroundColor: "#4c7dda", width: "clamp(110px,36vw,235px)", height: "clamp(110px,36vw,235px)" }}>
                <span style={{ fontFamily: mangoFont, fontSize: "clamp(64px,18vw,128px)", color: "white", lineHeight: 1 }}>O</span>
              </button>
              <button onClick={() => setShowWrong(true)}
                className="flex items-center justify-center rounded-[42px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
                style={{ backgroundColor: "#eb6767", width: "clamp(110px,36vw,235px)", height: "clamp(110px,36vw,235px)" }}>
                <span style={{ fontFamily: mangoFont, fontSize: "clamp(64px,18vw,128px)", color: "white", lineHeight: 1 }}>X</span>
              </button>
            </div>

            {/* Characters */}
            <div className="anim-float-up-in relative z-10 w-full mt-4 flex justify-center items-end" style={{ height: "160px", animationDelay: "0.55s" }}>
              <img src={imgCharacter} alt="캐릭터" className="absolute"
                style={{ height: "140px", left: "calc(50% - 120px)", bottom: 0, animation: "char-float 3s ease-in-out 1s infinite" }} />
              <img src={imgLowCarbon} alt="저탄소 인증" className="absolute"
                style={{ width: "100px", right: "8%", bottom: 0, animation: "char-float 3.8s ease-in-out 1.3s infinite" }} />
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
      {showWrong && <WrongAnswer quizNumber={1} nextPath="/quiz/1/correct" retryPath="/quiz/1" />}
    </div>
  );
}
