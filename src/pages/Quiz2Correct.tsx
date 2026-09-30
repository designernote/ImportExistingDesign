import { useNavigate } from "react-router-dom";

const assetPathPrefix = "/assets";
const imgProducts = `${assetPathPrefix}/82711.png`;
const imgMask = `${assetPathPrefix}/8e607.svg`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgCardBg = `${assetPathPrefix}/b83a5.svg`;
const imgArrowDown = `${assetPathPrefix}/55420.svg`;
const imgExplainBg = `${assetPathPrefix}/12aa2.svg`;
const imgArrowRight = `${assetPathPrefix}/010d0.svg`;

export default function Quiz2Correct() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{ backgroundColor: "#d3e9dc" }}
    >
      <div className="w-full max-w-[660px] flex flex-col items-center relative">

        {/* Answer card */}
        <div
          className="relative mx-4 mt-14 w-[calc(100%-2rem)] max-w-[660px] bg-white rounded-[29px] flex flex-col items-center pb-10"
          style={{ boxShadow: "rgba(0,0,0,0.25) 0px 4px 4px 0px" }}
        >
          {/* Card background pattern */}
          <div className="absolute inset-0 rounded-[29px] overflow-hidden pointer-events-none">
            <img src={imgCardBg} alt="" className="w-full h-full object-fill opacity-60" />
          </div>

          {/* Q2 badge + 정답입니다! */}
          <div className="relative z-10 flex flex-col items-center mt-8">
            <div
              className="flex items-center justify-center rounded-[28.5px] px-5"
              style={{ backgroundColor: "#4c7dda", height: "57px", minWidth: "87px" }}
            >
              <span
                style={{
                  fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
                  fontSize: "36px",
                  fontWeight: 400,
                  color: "white",
                  lineHeight: "72px",
                }}
              >
                Q2
              </span>
            </div>
            <img src={imgArrowDown} alt="" className="w-[20px] mt-1" />
            <p
              className="mt-1 text-center"
              style={{
                fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
                fontSize: "clamp(40px, 8vw, 58px)",
                fontWeight: 400,
                color: "#4c7dda",
                lineHeight: "72px",
              }}
            >
              정답입니다!
            </p>
          </div>

          {/* Explanation box */}
          <div className="relative z-10 mt-6 w-[calc(100%-3rem)] max-w-[556px]">
            <div className="absolute inset-0 pointer-events-none">
              <img src={imgExplainBg} alt="" className="w-full h-full object-fill" />
            </div>
            <div className="relative z-10 p-6 text-center" style={{ lineHeight: "42px" }}>
              <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "28px", color: "#000" }}>
                제품에 표시된
              </p>
              <p>
                <span
                  style={{
                    fontFamily: "'Hakgyoansim EunhasuOTF:R', 'Noto Sans KR', sans-serif",
                    fontSize: "32px",
                    color: "#206c38",
                    textDecoration: "underline wavy #92da1e",
                    textUnderlineOffset: "4px",
                  }}
                >
                  저탄소 축산물 인증마크를 통해 확인
                </span>
                <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "28px", color: "#000" }}>할 수 있습니다!</span>
              </p>
              <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "28px", color: "#000", marginTop: "8px" }}>
                &nbsp;
              </p>
              <p style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "28px", color: "#000" }}>
                저탄소 인증을 받은 한우·돼지고기·우유 제품에는
                <br />소비자가 쉽게 알아볼 수 있도록
              </p>
              <p>
                <span
                  style={{
                    fontFamily: "'Hakgyoansim EunhasuOTF:R', 'Noto Sans KR', sans-serif",
                    fontSize: "32px",
                    color: "#206c38",
                  }}
                >
                  저탄소 축산물 인증마크가 표시
                </span>
                <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "28px", color: "#000" }}>됩니다.</span>
              </p>
            </div>
          </div>

          {/* Notice text */}
          <p
            className="relative z-10 mt-4 text-center"
            style={{
              fontFamily: "'Pretendard:Regular', sans-serif",
              fontSize: "21px",
              color: "#868686",
              lineHeight: "30px",
            }}
          >
            ※ 제품을 구매할 때 포장지에 표시된<br />
            저탄소 축산물 인증마크를 확인해 보세요!
          </p>

          {/* 다음 문제 button */}
          <button
            onClick={() => navigate("/quiz/3")}
            className="relative z-10 mt-8 flex items-center justify-center gap-6 rounded-[48px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
            style={{
              backgroundColor: "#206c38",
              width: "clamp(280px, 70%, 400px)",
              height: "96px",
              backdropFilter: "blur(2.75px)",
            }}
          >
            <span
              style={{
                fontFamily: "'Pretendard:ExtraBold', sans-serif",
                fontSize: "32px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "9.6px",
              }}
            >
              다음 문제
            </span>
            <img src={imgArrowRight} alt="" className="h-[25px]" style={{ transform: "rotate(90deg)" }} />
          </button>

          {/* Products image with fade */}
          <div className="relative z-10 mt-6 w-full overflow-hidden" style={{ height: "260px" }}>
            <img
              src={imgProducts}
              alt="저탄소 인증 축산물 제품들"
              className="w-full h-full object-cover object-top"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)",
              }}
            />
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
