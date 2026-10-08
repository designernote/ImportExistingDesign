import { useNavigate } from "react-router-dom";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const imgChatGpt = `${assetPathPrefix}/774a4.png`;
const imgGroup8 = `${assetPathPrefix}/e4279.svg`;
const imgFence = `${assetPathPrefix}/bc9cb.svg`;
const imgGrass = `${assetPathPrefix}/4c408.svg`;
const imgCloud = `${assetPathPrefix}/0cdf2.svg`;
const imgBannerBg = `${assetPathPrefix}/269c7.svg`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center" style={{ backgroundColor: "#d3e9dc" }}>
      <div className="w-full max-w-[660px] flex flex-col items-center relative overflow-hidden">

        {/* Cloud */}
        <div className="w-full flex justify-center mt-8 px-4 relative z-10">
          <img src={imgCloud} alt="" className="w-[60%] max-w-[400px]" />
        </div>

        {/* Banner pill */}
        <div className="relative z-10 mt-4 inline-flex items-center justify-center anim-float-up-in" style={{ animationDelay: "0.1s" }}>
          <img src={imgBannerBg} alt="" className="h-[48px]" />
          <span className="absolute inset-0 flex items-center justify-center text-white"
            style={{ fontFamily: "'Mango Byeolbyeol:Regular', sans-serif", fontSize: "24px", paddingBottom: "8px" }}>
            저탄소 인증 축산물과 친해지는
          </span>
        </div>

        {/* Main title (Mango Byeolbyeol) */}
        <p className="relative z-10 mt-3 text-center leading-none anim-float-up-in" style={{ animationDelay: "0.25s", fontFamily: "'Mango Byeolbyeol:Regular', sans-serif", fontSize: "clamp(52px, 10vw, 72px)" }}>
          <span style={{ color: "#3165c7" }}>O</span>
          <span style={{ color: "#e46f6f" }}>X</span>
          <span style={{ color: "#295b34", fontSize: "clamp(46px, 9vw, 64px)" }}>퀴즈 이벤트</span>
        </p>

        {/* Subtitle */}
        <div className="relative z-10 mt-4 text-center anim-float-up-in" style={{ color: "#206c38", animationDelay: "0.35s" }}>
          <p style={{ fontFamily: "'Pretendard:Bold', sans-serif", fontSize: "clamp(17px, 3.8vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.6 }}>
            지구를 생각하는 여러분!
          </p>
          <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(15px, 3.4vw, 24px)", letterSpacing: "-0.02em", lineHeight: 1.6 }}>
            간단한 OX 퀴즈를 통해
          </p>
          <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(15px, 3.4vw, 24px)", letterSpacing: "-0.02em", lineHeight: 1.6 }}>
            <span style={{ fontFamily: "'Hakgyoansim EunhasuOTF:R', sans-serif", color: "#389d55", fontSize: "clamp(17px, 3.8vw, 28px)", letterSpacing: "-0.01em" }}>
              저탄소 인증 축산물 알아보고 선물
            </span>
            {" 받아가세요!"}
          </p>
        </div>

        {/* Characters & fence scene */}
        <div className="relative -mt-4 aspect-[11/6] w-full">
          {/* Fence behind characters */}
          <div className="absolute w-[140%] left-[-20%]" style={{ top: "55%", mixBlendMode: "multiply", zIndex: 1 }}>
            <img src={imgFence} alt="" className="w-full" />
          </div>

          {/* Character group */}
          <div className="absolute bottom-0 left-1/2 z-[2] aspect-[3/2] w-[81.82%] max-w-[540px] -translate-x-1/2">
            <img
              src={imgChatGpt}
              alt="저탄소 인증 축산물 캐릭터"
              className="size-full object-contain object-bottom"
              style={{
                animation: 'char-enter 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s both, char-float 3.6s ease-in-out 1.3s infinite',
              }}
            />
          </div>

          {/* Grass overlay */}
          <div className="absolute bottom-0 left-[-5%] w-[130%] z-0">
            <img src={imgGrass} alt="" className="w-full" />
          </div>
        </div>

        {/* START button */}
        <div className="relative z-10 mt-6 px-8 w-full flex justify-center anim-pop-in" style={{ animationDelay: "0.65s" }}>
          <button
            onClick={() => navigate("/quiz/1")}
            className="w-full max-w-[400px] h-[96px] rounded-[48px] flex items-center justify-center cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: "#206c38" }}
          >
            <span style={{ fontFamily: "'Pretendard:Black', sans-serif", fontSize: "32px", fontWeight: 900, color: "white", letterSpacing: "9.6px" }}>
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
                <span className="shrink-0 px-3 py-1 rounded-[18.5px] text-white"
                  style={{ fontFamily: "'Pretendard:Bold', sans-serif", fontSize: "clamp(14px, 3.5vw, 22px)", fontWeight: 700, backgroundColor: dark ? "#4c7dda" : "#81a8f2", minWidth: "80px", textAlign: "center" }}>
                  {label}
                </span>
                <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(13px, 3vw, 20px)", color: "#000", wordBreak: "keep-all" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-6 mb-8 flex w-full flex-col items-center gap-3 px-4">
          <div className="flex w-full max-w-[651px] items-center justify-center gap-[clamp(12px,4.43vw,35px)]">
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
        </div>
      </div>
    </div>
  );
}
