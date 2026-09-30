import { useNavigate } from "react-router-dom";

const assetPathPrefix = "/assets";
const imgChatGpt = `${assetPathPrefix}/774a4.png`;
const imgGroup8 = `${assetPathPrefix}/e4279.svg`;
const imgFence = `${assetPathPrefix}/bc9cb.svg`;
const imgGrass = `${assetPathPrefix}/4c408.svg`;
const imgCloud = `${assetPathPrefix}/0cdf2.svg`;
const imgBanner = `${assetPathPrefix}/269c7.svg`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{ backgroundColor: "#d3e9dc" }}
    >
      <div className="w-full max-w-[660px] flex flex-col items-center relative overflow-hidden">

        {/* Cloud */}
        <div className="w-full flex justify-center mt-8 px-4 relative z-10">
          <img src={imgCloud} alt="" className="w-[60%] max-w-[400px]" />
        </div>

        {/* Banner pill */}
        <div className="relative z-10 mt-4">
          <img src={imgBanner} alt="" className="h-[48px]" />
          <p
            className="absolute inset-0 flex items-center justify-center text-white text-center"
            style={{
              fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            저탄소 인증 축산물과 친해지는
          </p>
        </div>

        {/* Title */}
        <p
          className="relative z-10 mt-2 text-center leading-none"
          style={{
            fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
            fontSize: "clamp(48px, 10vw, 72px)",
            fontWeight: 400,
            color: "#295b34",
          }}
        >
          <span style={{ color: "#3165c7" }}>O</span>
          <span style={{ color: "#e46f6f" }}>X</span>
          <span>퀴즈 이벤트</span>
        </p>

        {/* Subtitle */}
        <div
          className="relative z-10 mt-4 text-center"
          style={{ color: "#206c38", lineHeight: "39px" }}
        >
          <p style={{ fontFamily: "'Pretendard:Bold', sans-serif", fontSize: "26px", fontWeight: 700 }}>
            지구를 생각하는 여러분!
          </p>
          <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "24px", fontWeight: 400 }}>
            간단한 OX 퀴즈를 통해
          </p>
          <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "24px", fontWeight: 400 }}>
            <span style={{ fontFamily: "'Hakgyoansim EunhasuOTF:R', 'Noto Sans KR', sans-serif", color: "#389d55", fontSize: "28px" }}>
              저탄소 인증 축산물 알아보고 선물
            </span>
            {" 받아가세요!"}
          </p>
        </div>

        {/* Characters & fence scene */}
        <div className="relative w-full mt-6" style={{ minHeight: "360px" }}>
          <div
            className="absolute w-[140%] left-[-20%]"
            style={{ top: "55%", mixBlendMode: "multiply" }}
          >
            <img src={imgFence} alt="" className="w-full" />
          </div>
          <div className="relative z-10 flex justify-center">
            <img
              src={imgChatGpt}
              alt="저탄소 인증 축산물 캐릭터"
              className="w-[85%] max-w-[500px] relative z-10"
            />
          </div>
          <div className="absolute bottom-0 left-[-5%] w-[130%] z-0">
            <img src={imgGrass} alt="" className="w-full" />
          </div>
        </div>

        {/* START button */}
        <div className="relative z-10 mt-6 px-8 w-full flex justify-center">
          <button
            onClick={() => navigate("/quiz/1")}
            className="w-full max-w-[400px] h-[72px] rounded-[48px] flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: "#206c38" }}
          >
            <span
              style={{
                fontFamily: "'Pretendard:Black', sans-serif",
                fontSize: "clamp(24px, 5vw, 32px)",
                fontWeight: 900,
                color: "white",
                letterSpacing: "9.6px",
              }}
            >
              START!
            </span>
          </button>
        </div>

        {/* Event info box */}
        <div className="relative z-10 mt-8 mx-4 w-[calc(100%-2rem)] max-w-[620px] bg-white rounded-[13px] p-5">
          <div className="absolute inset-0 rounded-[13px] overflow-hidden">
            <img src={imgGroup8} alt="" className="w-full h-full object-fill" />
          </div>
          <div className="relative z-10 flex flex-col gap-0">
            {[
              { label: "참여기간", value: "26. 10. 19(월) ~ 10. 30(금)", dark: true },
              { label: "참여방법", value: "OX 퀴즈 풀이 후 정보 입력", dark: false },
              { label: "참여경품", value: "이디야커피 카페라떼 기프티콘 200매", dark: true },
              { label: "지급방법", value: "참여자 추첨을 통해 SMS 발송(11월 중)", dark: false },
            ].map(({ label, value, dark }) => (
              <div key={label} className="flex items-center gap-3 py-1">
                <span
                  className="shrink-0 px-3 py-1 rounded-[18.5px] text-white"
                  style={{
                    fontFamily: "'Pretendard:Bold', sans-serif",
                    fontSize: "clamp(14px, 3.5vw, 22px)",
                    fontWeight: 700,
                    backgroundColor: dark ? "#4c7dda" : "#81a8f2",
                    minWidth: "80px",
                    textAlign: "center",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'Pretendard:Regular', sans-serif",
                    fontSize: "clamp(13px, 3vw, 20px)",
                    fontWeight: 400,
                    color: "#000",
                    wordBreak: "keep-all",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-6 mb-8 px-4 w-full flex flex-col items-center gap-3">
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
