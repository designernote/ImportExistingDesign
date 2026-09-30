import { useNavigate } from "react-router-dom";

const assetPathPrefix = "/assets";
const imgCharacters = `${assetPathPrefix}/0d53e.png`;
const imgFence = `${assetPathPrefix}/b2669.svg`;
const imgGrass = `${assetPathPrefix}/01bf0.svg`;
const imgCloud = `${assetPathPrefix}/b6c6c.svg`;
const imgMinistry = `${assetPathPrefix}/18066.svg`;
const imgLivestockText = `${assetPathPrefix}/44c39.svg`;
const imgLivestockIcon = `${assetPathPrefix}/22380.svg`;
const imgEdiya = `${assetPathPrefix}/b88df.svg`;
const imgWarningIcon = `${assetPathPrefix}/20e62.svg`;
const imgArrowRight = `${assetPathPrefix}/010d0.svg`;

export default function Complete() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center"
      style={{ backgroundColor: "#d3e9dc" }}
    >
      <div className="w-full max-w-[660px] flex flex-col items-center relative overflow-hidden">

        {/* Cloud */}
        <div className="w-full flex justify-center mt-8 px-4 relative z-10">
          <img src={imgCloud} alt="" className="w-[80%] max-w-[500px]" />
        </div>

        {/* Title */}
        <p
          className="relative z-10 mt-4 text-center"
          style={{
            fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
            fontSize: "clamp(40px, 9vw, 58px)",
            color: "#295b34",
            lineHeight: "87px",
          }}
        >
          <span>저탄소 인증 축산물</span><br />
          <span>알아보기 완료!</span>
        </p>

        {/* Characters + fence scene */}
        <div className="relative w-full mt-2" style={{ minHeight: "300px" }}>
          <div className="absolute w-[140%] left-[-20%]" style={{ top: "50%", mixBlendMode: "multiply" }}>
            <img src={imgFence} alt="" className="w-full" />
          </div>
          <div className="relative z-10 flex justify-center">
            <img src={imgCharacters} alt="저탄소 인증 캐릭터들" className="w-[90%] max-w-[560px] relative z-10" />
          </div>
          <div className="absolute bottom-0 left-[-5%] w-[130%] z-0">
            <img src={imgGrass} alt="" className="w-full" />
          </div>
        </div>

        {/* Prize info */}
        <div className="relative z-10 mt-6 px-6 flex flex-col items-center gap-5 w-full">
          <p className="text-center" style={{ lineHeight: "45px" }}>
            <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(22px, 4.5vw, 30px)", color: "#000" }}>퀴즈에 참여하신 분들 중</span><br />
            <span
              style={{
                fontFamily: "'Hakgyoansim EunhasuOTF:R', 'Noto Sans KR', sans-serif",
                fontSize: "clamp(24px, 5vw, 35px)",
                color: "#206c38",
                textDecoration: "underline wavy #92da1e",
                textUnderlineOffset: "4px",
              }}
            >
              추첨을 통해 소정의 상품
            </span>
            <span style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontSize: "clamp(22px, 4.5vw, 30px)", color: "#000" }}>을 드립니다!</span>
          </p>

          <div className="flex flex-col items-center gap-4 w-full">
            <p
              className="text-center"
              style={{
                fontFamily: "'Pretendard:Medium', sans-serif",
                fontSize: "clamp(20px, 4vw, 28px)",
                color: "#206c38",
                lineHeight: "38px",
              }}
            >
              추첨을 위해 아래 개인정보를 입력해주세요!
            </p>
            <button
              onClick={() => navigate("/form")}
              className="flex items-center justify-center gap-6 rounded-[48px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
              style={{
                backgroundColor: "#206c38",
                width: "clamp(280px, 70%, 400px)",
                height: "96px",
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
                개인정보 입력
              </span>
              <img src={imgArrowRight} alt="" className="h-[25px]" style={{ transform: "rotate(90deg)" }} />
            </button>
          </div>
        </div>

        {/* Notice section */}
        <div
          className="relative z-10 mt-8 w-full px-6 py-8 flex flex-col gap-4"
          style={{ backgroundColor: "#73c486" }}
        >
          <div className="flex items-center gap-2">
            <img src={imgWarningIcon} alt="" className="w-[28px] h-[28px]" />
            <span
              style={{
                fontFamily: "'Pretendard:Bold', sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#f8ed8c",
              }}
            >
              유의사항
            </span>
          </div>
          <ul
            className="list-disc pl-8 flex flex-col gap-1"
            style={{
              fontFamily: "'Pretendard:Bold', sans-serif",
              fontSize: "clamp(18px, 3.5vw, 25px)",
              fontWeight: 700,
              color: "white",
              lineHeight: "42px",
            }}
          >
            <li>본 이벤트는 1인 1회 참여 가능합니다</li>
            <li>중복참여 시 당첨이 제한될 수 있습니다</li>
            <li>OX퀴즈 풀이 완료 후 개인정보(이름, 연락처)를 기재해 주셔야 상품 지급이 가능합니다</li>
            <li>상품은 순차적으로 기재해주신 핸드폰 번호로 발송됩니다</li>
          </ul>
        </div>

        {/* Footer */}
        <div
          className="w-full flex flex-col items-center gap-3 py-6"
          style={{ backgroundColor: "#206c38" }}
        >
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <img src={imgMinistry} alt="농림축산식품부" className="h-[40px]" />
            <div className="flex items-center gap-1">
              <img src={imgLivestockIcon} alt="" className="h-[30px]" />
              <img src={imgLivestockText} alt="축산물품질평가원" className="h-[21px]" />
            </div>
            <img src={imgEdiya} alt="에디야커피" className="h-[20px]" />
          </div>
          <p
            style={{
              fontFamily: "'Pretendard:Regular', sans-serif",
              fontSize: "18px",
              color: "white",
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
