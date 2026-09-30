import { useNavigate, useLocation } from "react-router-dom";

const assetPathPrefix = "/assets";
const imgArrowRight = `${assetPathPrefix}/010d0.svg`;

interface WrongAnswerProps {
  quizNumber: number;
  nextPath: string;
}

export default function WrongAnswer({ quizNumber, nextPath }: WrongAnswerProps) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
    >
      <div
        className="w-full max-w-[560px] rounded-[29px] flex flex-col items-center gap-6 px-8 py-10"
        style={{
          backgroundColor: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(7.5px)",
        }}
      >
        {/* Q badge */}
        <div
          className="flex items-center justify-center rounded-[28.5px] px-5"
          style={{ backgroundColor: "#eb6767", height: "57px", minWidth: "87px" }}
        >
          <span
            style={{
              fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
              fontSize: "36px",
              color: "white",
              lineHeight: "72px",
            }}
          >
            Q{quizNumber}
          </span>
        </div>

        {/* 오답 텍스트 */}
        <p
          className="text-center"
          style={{
            fontFamily: "'Mango Byeolbyeol:Regular', 'Noto Sans KR', sans-serif",
            fontSize: "clamp(40px, 8vw, 58px)",
            color: "#eb6767",
            lineHeight: "72px",
          }}
        >
          오답입니다!
        </p>

        {/* 설명 */}
        <p
          className="text-center"
          style={{
            fontFamily: "'Pretendard:Regular', sans-serif",
            fontSize: "clamp(18px, 4vw, 24px)",
            color: "rgba(255,255,255,0.85)",
            lineHeight: "38px",
          }}
        >
          아쉽지만 틀렸습니다.<br />
          정답을 확인하고 다음으로 넘어가요!
        </p>

        {/* 다음 문제 버튼 */}
        <button
          onClick={() => navigate(nextPath)}
          className="mt-2 flex items-center justify-center gap-4 rounded-[48px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
          style={{
            backgroundColor: "#206c38",
            width: "clamp(240px, 70%, 360px)",
            height: "80px",
          }}
        >
          <span
            style={{
              fontFamily: "'Pretendard:ExtraBold', sans-serif",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "6px",
            }}
          >
            다음 문제
          </span>
          <img src={imgArrowRight} alt="" className="h-[22px]" style={{ transform: "rotate(90deg)" }} />
        </button>
      </div>
    </div>
  );
}
