import { useNavigate } from "react-router-dom";

const assetPathPrefix = "/assets";
const imgCharacter = `${assetPathPrefix}/edf63.png`;
const imgLowCarbon = `${assetPathPrefix}/91d89.png`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgBgDeco = `${assetPathPrefix}/d4de7.svg`;
const imgCardBg = `${assetPathPrefix}/53ce9.svg`;
const imgArrow = `${assetPathPrefix}/5bc33.svg`;
const imgDivider = `${assetPathPrefix}/6815e.svg`;

export default function Quiz1() {
  const navigate = useNavigate();

  const handleAnswer = (answer: "O" | "X") => {
    // correct answer is O — navigate accordingly
    if (answer === "O") {
      navigate("/quiz/1/correct");
    } else {
      navigate("/quiz/1/wrong");
    }
  };

  return (
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
          {/* Card background pattern */}
          <div className="absolute inset-0 rounded-[29px] overflow-hidden pointer-events-none">
            <img src={imgCardBg} alt="" className="w-full h-full object-fill opacity-60" />
          </div>

          {/* Q1 badge */}
          <div className="relative z-10 -mt-8 flex flex-col items-center">
            <div
              className="flex items-center justify-center w-[135px] h-[91px] rounded-[45.5px]"
              style={{ backgroundColor: "#295b34" }}
            >
              <span
                style={{
                  fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
                  fontSize: "58px",
                  fontWeight: 400,
                  color: "white",
                  lineHeight: "72px",
                }}
              >
                Q1
              </span>
            </div>
            {/* Arrow below badge */}
            <img src={imgArrow} alt="" className="w-[40px] -mt-1" style={{ transform: "rotate(180deg)" }} />
          </div>

          {/* Question title */}
          <div
            className="relative z-10 mt-4 text-center"
            style={{
              fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
              fontSize: "clamp(40px, 8vw, 58px)",
              fontWeight: 400,
              color: "#295b34",
              lineHeight: "72px",
            }}
          >
            <p>저탄소 인증</p>
            <p>축산물이란?</p>
          </div>

          {/* Question text */}
          <div className="relative z-10 mt-6 px-6 flex flex-col items-center gap-2 w-full">
            <p
              className="text-center"
              style={{
                fontFamily: "'Pretendard:Regular', sans-serif",
                fontSize: "clamp(20px, 4.5vw, 28px)",
                fontWeight: 400,
                color: "#000",
                lineHeight: "45px",
              }}
            >
              축산물 생산 과정에서
            </p>
            <img src={imgDivider} alt="" className="w-full max-w-[496px]" />
            <p
              className="text-center"
              style={{
                fontFamily: "'Pretendard:Regular', sans-serif",
                fontSize: "clamp(20px, 4.5vw, 28px)",
                fontWeight: 400,
                color: "#000",
                lineHeight: "45px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Hakgyoansim EunhasuOTF:R', 'Noto Sans KR', sans-serif",
                  color: "#389d55",
                  fontSize: "clamp(22px, 5vw, 32px)",
                }}
              >
                온실가스
              </span>
              를 줄인 친환경 축산물이다?
            </p>
            <img src={imgDivider} alt="" className="w-full max-w-[496px]" />
          </div>

          {/* O / X buttons */}
          <div className="relative z-10 mt-8 flex gap-8 items-center justify-center px-6">
            <button
              onClick={() => handleAnswer("O")}
              className="flex items-center justify-center rounded-[42px] transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                width: "clamp(140px, 35vw, 235px)",
                height: "clamp(140px, 35vw, 235px)",
                backgroundColor: "#4c7dda",
              }}
            >
              <span
                style={{
                  fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
                  fontSize: "clamp(80px, 18vw, 128px)",
                  fontWeight: 400,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                O
              </span>
            </button>
            <button
              onClick={() => handleAnswer("X")}
              className="flex items-center justify-center rounded-[42px] transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                width: "clamp(140px, 35vw, 235px)",
                height: "clamp(140px, 35vw, 235px)",
                backgroundColor: "#eb6767",
              }}
            >
              <span
                style={{
                  fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
                  fontSize: "clamp(80px, 18vw, 128px)",
                  fontWeight: 400,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                X
              </span>
            </button>
          </div>

          {/* Character images overlapping bottom */}
          <div className="relative z-10 w-full mt-4" style={{ height: "160px" }}>
            <img
              src={imgCharacter}
              alt="캐릭터"
              className="absolute"
              style={{ width: "130px", left: "calc(50% - 80px)", bottom: "-30px" }}
            />
            <img
              src={imgLowCarbon}
              alt="저탄소 인증"
              className="absolute"
              style={{ width: "100px", right: "8%", bottom: "-20px" }}
            />
          </div>
        </div>

        {/* Background deco (grass) */}
        <div className="w-[120%] -ml-[10%] mt-[-20px] relative z-0">
          <img src={imgBgDeco} alt="" className="w-full" />
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-4 mb-8 px-4 w-full flex flex-col items-center gap-3">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <img src={imgMinistry} alt="농림축산식품부" className="h-[40px]" />
            <div className="flex items-center gap-1">
              <img src={imgLivestockIcon} alt="" className="h-[30px]" />
              <img src={imgLivestock} alt="축산물품질평가원" className="h-[21px]" />
            </div>
            <img src={imgEdiya} alt="에디야커피" className="h-[20px]" />
          </div>
          <p
            style={{
              fontFamily: "'Pretendard:Regular', sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#7b8b80",
              textAlign: "center",
            }}
          >
            축산물품질평가원 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
}
