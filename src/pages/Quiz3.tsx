import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WrongAnswer from "./WrongAnswer";

const assetPathPrefix = "/assets";
const imgCowCoffee = `${assetPathPrefix}/025ad.png`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgBgDeco = `${assetPathPrefix}/d4de7.svg`;
const imgCardBg = `${assetPathPrefix}/53ce9.svg`;
const imgDivider = `${assetPathPrefix}/6815e.svg`;
const imgBadgeTail = `${assetPathPrefix}/5bc33.svg`;

const mangoFont = "'Mango Byeolbyeol:Regular', sans-serif";

export default function Quiz3() {
  const navigate = useNavigate();
  const [showWrong, setShowWrong] = useState(false);

  return (
    <div className="relative">
      <main className="min-h-dvh w-full overflow-hidden bg-[#d3e9dc]">
        <div className="flex w-full flex-col items-center">
          <section className="anim-card-in relative mt-[53px] aspect-[660/861] w-[calc(100%-2rem)] max-w-[660px] rounded-[29px] bg-white [container-type:inline-size]">
            <div className="pointer-events-none absolute inset-x-[3.48%] top-[3.02%] bottom-[2.9%]">
              <img src={imgCardBg} alt="" className="size-full object-fill" />
            </div>

            <div
              className="anim-pop-in absolute top-[8.71%] left-[39.775%] z-10 flex h-[10.57%] w-[20.45%] items-center justify-center rounded-[999px] bg-[#295b34]"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-[clamp(28px,8.79cqw,58px)] leading-none text-white" style={{ fontFamily: mangoFont }}>
                Q3
              </span>
              <img
                src={imgBadgeTail}
                alt=""
                className="pointer-events-none absolute top-[81%] left-1/2 w-[29.63%] -translate-x-1/2"
              />
            </div>

            <p
              className="anim-float-up-in absolute top-[24.51%] left-0 z-10 w-full text-center text-[clamp(30px,8.79cqw,58px)] leading-[1.24] text-[#295b34]"
              style={{ fontFamily: mangoFont, animationDelay: "0.3s" }}
            >
              <span className="block">어디서</span>
              <span className="block">만날 수 있을까?</span>
            </p>

            <div
              className="anim-float-up-in absolute top-[45.3%] left-0 z-10 h-[10.45%] w-full text-center"
              style={{ animationDelay: "0.4s" }}
            >
              <p
                className="h-1/2 text-[clamp(14px,4.24cqw,28px)] leading-[1.61]"
                style={{ fontFamily: "'Pretendard:Regular', sans-serif" }}
              >
                저탄소 인증 축산물은
              </p>
              <img src={imgDivider} alt="" className="absolute top-1/2 left-1/2 w-[75.08%] -translate-x-1/2" />
              <p className="h-1/2 whitespace-nowrap leading-[1.4]">
                <span
                  className="text-[clamp(16px,4.85cqw,32px)] text-[#389d55]"
                  style={{ fontFamily: "'Hakgyoansim EunhasuOTF:R', sans-serif", letterSpacing: "-0.01em" }}
                >
                  이디야커피
                </span>
                <span
                  className="text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: "'Pretendard:Regular', sans-serif" }}
                >
                  에서도 만나볼 수 있다?
                </span>
              </p>
              <img src={imgDivider} alt="" className="absolute bottom-0 left-1/2 w-[75.08%] -translate-x-1/2" />
            </div>

            <div
              className="anim-float-up-in absolute top-[59.81%] left-0 z-10 flex w-full justify-center gap-[8.33%]"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={() => navigate("/quiz/3/correct")}
                aria-label="O, 맞다"
                className="flex aspect-square w-[35.61%] cursor-pointer items-center justify-center rounded-[17.87%] bg-[#4c7dda] transition-opacity hover:opacity-90 active:opacity-75"
              >
                <span className="text-[clamp(62px,19.39cqw,128px)] leading-none text-white" style={{ fontFamily: mangoFont }}>
                  O
                </span>
              </button>
              <button
                onClick={() => setShowWrong(true)}
                aria-label="X, 아니다"
                className="flex aspect-square w-[35.61%] cursor-pointer items-center justify-center rounded-[17.87%] bg-[#eb6767] transition-opacity hover:opacity-90 active:opacity-75"
              >
                <span className="text-[clamp(62px,19.39cqw,128px)] leading-none text-white" style={{ fontFamily: mangoFont }}>
                  X
                </span>
              </button>
            </div>

            <div className="anim-float-up-in pointer-events-none absolute inset-0 z-10" style={{ animationDelay: "0.55s" }}>
              <img
                src={imgCowCoffee}
                alt="저탄소 우유와 이디야커피를 든 젖소 캐릭터"
                className="absolute top-[90.71%] left-[24.55%] w-[45.3%]"
                style={{ animation: "char-float 3.5s ease-in-out 1.2s infinite" }}
              />
            </div>
          </section>

          <div className="relative z-0 w-[106.08%] max-w-[838px]">
            <img src={imgBgDeco} alt="" className="w-full" />
          </div>

          <footer className="relative z-20 -mt-[2px] mb-[30px] flex w-full max-w-[651px] flex-col items-center gap-[10px] px-4">
            <div className="flex w-full items-center justify-center gap-[clamp(12px,4.43vw,35px)]">
              <img src={imgMinistry} alt="농림축산식품부" className="w-[27.67%]" />
              <div className="flex w-[30.82%] shrink-0 items-center gap-[2.75%]">
                <img src={imgLivestockIcon} alt="" className="w-[14.72%]" />
                <img src={imgLivestock} alt="축산물품질평가원" className="w-[82.58%]" />
              </div>
              <img src={imgEdiya} alt="에디야커피" className="w-[30.73%]" />
            </div>
            <p
              className="text-center text-[clamp(12px,2.28vw,18px)] text-[#7b8b80]"
              style={{ fontFamily: "'Pretendard:Regular', sans-serif" }}
            >
              축산물품질평가원 ALL RIGHTS RESERVED
            </p>
          </footer>
        </div>
      </main>
      {showWrong && (
        <WrongAnswer
          quizNumber={3}
          nextPath="/quiz/3/correct"
          retryPath="/quiz/3"
          onRetry={() => setShowWrong(false)}
        />
      )}
    </div>
  );
}
