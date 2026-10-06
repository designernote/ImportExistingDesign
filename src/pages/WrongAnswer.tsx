const assetPathPrefix = "/assets";
const imgSadCow = `${assetPathPrefix}/b5399.png`;
const imgCowMask = `${assetPathPrefix}/671d4.svg`;

interface WrongAnswerProps {
  quizNumber: number;
  nextPath: string;
  retryPath: string;
  onRetry: () => void;
}

export default function WrongAnswer({ onRetry }: WrongAnswerProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[4px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wrong-answer-title"
    >
      <section
        className="relative aspect-[660/650] max-w-[660px] overflow-hidden rounded-[29px] bg-black/80 backdrop-blur-[7.5px] [container-type:inline-size]"
        style={{
          width: "min(calc(100% - 1rem), 660px, calc((100dvh - 2rem) * 660 / 650))",
        }}
      >
        <button
          type="button"
          onClick={onRetry}
          aria-label="오답 팝업 닫기"
          className="absolute top-[4.15%] right-[3.48%] z-30 cursor-pointer text-[clamp(20px,4.85cqw,32px)] leading-[1.22] text-[#686868] transition-colors hover:text-white"
          style={{ fontFamily: "'Pretendard:Regular', sans-serif" }}
        >
          X
        </button>

        <h2
          id="wrong-answer-title"
          className="absolute top-[13.38%] left-0 z-20 w-full whitespace-nowrap text-center text-[clamp(32px,8.79cqw,58px)] leading-[10.91cqw] text-[#f8ed8c]"
          style={{ fontFamily: "'Mango Byeolbyeol:Regular', sans-serif" }}
        >
          오답입니다!
        </h2>

        <p
          className="absolute top-[26%] left-0 z-20 w-full whitespace-nowrap text-center text-[clamp(15px,3.64cqw,24px)] leading-[5.91cqw] text-white"
          style={{ fontFamily: "'Pretendard:Regular', sans-serif" }}
        >
          아쉽지만 다시 풀어볼까요?
        </p>

        <div
          className="pointer-events-none absolute top-[33.38%] left-[49.17%] h-[62.62%] w-[49.24%] -translate-x-1/2"
          style={{
            WebkitMaskImage: `url("${imgCowMask}")`,
            maskImage: `url("${imgCowMask}")`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "87.38% 70.76%",
            maskSize: "87.38% 70.76%",
            WebkitMaskPosition: "63.4% -2.53%",
            maskPosition: "63.4% -2.53%",
          }}
        >
          <img src={imgSadCow} alt="슬픈 표정의 저탄소 소 캐릭터" className="size-full object-cover" />
        </div>

        <button
          type="button"
          onClick={onRetry}
          className="absolute top-[72.77%] left-1/2 z-20 flex h-[14.77%] w-[60.61%] -translate-x-1/2 cursor-pointer items-center justify-center rounded-[999px] bg-[#206c38] backdrop-blur-[2.75px] transition-opacity hover:opacity-90 active:opacity-75"
        >
          <span
            className="whitespace-nowrap text-center text-[clamp(18px,4.85cqw,32px)] leading-none tracking-[0.3em] text-white"
            style={{ fontFamily: "'Pretendard:ExtraBold', sans-serif", fontWeight: 800 }}
          >
            다시 풀어보기
          </span>
        </button>
      </section>
    </div>
  );
}
