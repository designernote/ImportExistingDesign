import { useNavigate } from "react-router-dom";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const imgCharacters = `${assetPathPrefix}/b3907.png`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgCardMask = `${assetPathPrefix}/8e607.svg`;
const imgCardBg = `${assetPathPrefix}/b83a5.svg`;
const imgBadgeTail = `${assetPathPrefix}/55420.svg`;
const imgTextLines = `${assetPathPrefix}/bb1bf.svg`;
const imgArrowRight = `${assetPathPrefix}/010d0.svg`;

const mango = "'Mango Byeolbyeol:Regular', sans-serif";
const pretendard = (weight: string) => `'Pretendard:${weight}', sans-serif`;
const hakgyo = "'Hakgyoansim EunhasuOTF:R', sans-serif";

export default function Quiz1Correct() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh w-full overflow-hidden bg-[#d3e9dc]">
      <div className="flex w-full flex-col items-center">
        <section
          className="anim-card-in relative mt-[53px] aspect-[660/1053.179] w-[calc(100%-2rem)] max-w-[660px] bg-white [container-type:inline-size]"
          style={{
            WebkitMaskImage: `url("${imgCardMask}")`,
            maskImage: `url("${imgCardMask}")`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        >
          <div className="pointer-events-none absolute inset-x-[2.88%] top-[2.09%] bottom-[1.71%] z-10">
            <img src={imgCardBg} alt="" className="size-full" />
          </div>

          <div className="pointer-events-none absolute top-[65.99%] left-[-0.61%] h-[38.45%] w-[101.21%] overflow-hidden">
            <img src={imgCharacters} alt="저탄소 축산물 캐릭터들이 있는 목장" className="size-full object-cover" />
          </div>
          <div className="pointer-events-none absolute top-[65.42%] left-[-3.79%] h-[18.52%] w-[107.58%] bg-gradient-to-b from-white to-white/0" />

          <div className="absolute top-[7.12%] left-1/2 z-20 flex w-[84.24%] -translate-x-1/2 flex-col items-center">
            <div className="anim-pop-in flex h-[24.85cqw] flex-col items-center" style={{ animationDelay: "0.2s" }}>
              <div className="relative flex h-[10.91cqw] w-[13.18cqw] items-center justify-center">
                <div className="absolute top-[1.06cqw] left-0 h-[8.64cqw] w-full rounded-[999px] bg-[#4c7dda]" />
                <img src={imgBadgeTail} alt="" className="absolute top-[8.64cqw] left-[5.15cqw] w-[3.11cqw]" />
                <span
                  className="relative text-[clamp(20px,5.45cqw,36px)] leading-[10.91cqw] text-white"
                  style={{ fontFamily: mango }}
                >
                  Q1
                </span>
              </div>
              <p
                className="mt-[3.03cqw] whitespace-nowrap text-center text-[clamp(32px,8.79cqw,58px)] leading-[10.91cqw] text-[#4c7dda]"
                style={{ fontFamily: mango }}
              >
                정답입니다!
              </p>
            </div>

            <div
              className="anim-float-up-in relative mt-[7.58cqw] h-[57.42cqw] w-full"
              style={{ animationDelay: "0.35s" }}
            >
              <img src={imgTextLines} alt="" className="pointer-events-none absolute top-[6.52cqw] left-0 w-full" />
              <span className="absolute top-[9.24cqw] left-[20.32%] h-[3.03cqw] w-[58.99%] bg-[#fff478]" />
              <span className="absolute top-[15.76cqw] left-[11.51%] h-[3.03cqw] w-[62.77%] bg-[#fff478]" />

              <div className="relative text-center leading-[6.36cqw]">
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  저탄소 인증 축산물은
                </p>
                <p
                  className="whitespace-nowrap text-[clamp(16px,4.85cqw,32px)]"
                  style={{ fontFamily: hakgyo }}
                >
                  생산 과정에서 온실가스를 줄인
                </p>
                <p className="whitespace-nowrap">
                  <span className="text-[clamp(16px,4.85cqw,32px)]" style={{ fontFamily: hakgyo }}>
                    인증 받은 농장에서 생산한 축산물
                  </span>
                  <span className="text-[clamp(14px,4.24cqw,28px)]" style={{ fontFamily: pretendard("Regular") }}>
                    입니다!
                  </span>
                </p>
                <p className="h-[6.36cqw]" aria-hidden="true" />
                <p className="whitespace-nowrap text-[#206c38]">
                  <span className="text-[clamp(16px,4.85cqw,32px)]" style={{ fontFamily: hakgyo }}>
                    농림축산식품부와 축산물품질평가원
                  </span>
                  <span className="text-[clamp(14px,4.24cqw,28px)]" style={{ fontFamily: pretendard("Regular") }}>
                    은
                  </span>
                </p>
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  한우·젖소·돼지 농가 중 탄소 감축 기술을
                </p>
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  적용하고, 평균보다
                </p>
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  온실가스 배출량을 10% 이상 줄인 농가를 인증하는
                </p>
                <p className="whitespace-nowrap text-[#206c38]">
                  <span className="text-[clamp(16px,4.85cqw,32px)]" style={{ fontFamily: hakgyo }}>
                    ‘저탄소 축산물 인증제’를 운영
                  </span>
                  <span className="text-[clamp(14px,4.24cqw,28px)] text-black" style={{ fontFamily: pretendard("Regular") }}>
                    하고 있습니다.
                  </span>
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate("/quiz/2")}
              className="anim-float-up-in mt-[7.58cqw] flex h-[14.55cqw] w-[60.61cqw] cursor-pointer items-center justify-center gap-[7.58cqw] rounded-[999px] bg-[#206c38] pl-[7.58cqw] pr-[4.85cqw] backdrop-blur-[2.75px] transition-opacity hover:opacity-90 active:opacity-75"
              style={{ animationDelay: "0.5s" }}
            >
              <span
                className="whitespace-nowrap text-center text-[clamp(18px,4.85cqw,32px)] leading-none tracking-[0.3em] text-white"
                style={{ fontFamily: pretendard("ExtraBold"), fontWeight: 800 }}
              >
                다음 문제
              </span>
              <img src={imgArrowRight} alt="" className="w-[3.79cqw] rotate-90" />
            </button>
          </div>
        </section>

        <footer className="relative z-20 mt-[49px] mb-[30px] flex w-full max-w-[651px] flex-col items-center gap-[10px] px-4">
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
            style={{ fontFamily: pretendard("Regular") }}
          >
            축산물품질평가원 ALL RIGHTS RESERVED
          </p>
        </footer>
      </div>
    </main>
  );
}
