import { useNavigate } from "react-router-dom";

const assetPathPrefix = "/assets";
const imgSupermarket = `${assetPathPrefix}/e9ef9.png`;
const imgMinistry = `${assetPathPrefix}/0e6be.svg`;
const imgLivestock = `${assetPathPrefix}/9632e.svg`;
const imgLivestockIcon = `${assetPathPrefix}/11df2.svg`;
const imgEdiya = `${assetPathPrefix}/5de1f.svg`;
const imgCardMask = `${assetPathPrefix}/8e607.svg`;
const imgCardBg = `${assetPathPrefix}/b83a5.svg`;
const imgBadgeTail = `${assetPathPrefix}/55420.svg`;
const imgTextLines = `${assetPathPrefix}/64f71.svg`;
const imgArrowRight = `${assetPathPrefix}/010d0.svg`;

const mango = "'Mango Byeolbyeol:Regular', sans-serif";
const pretendard = (weight: string) => `'Pretendard:${weight}', sans-serif`;
const hakgyo = "'Hakgyoansim EunhasuOTF:R', sans-serif";

export default function Quiz3Correct() {
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

          <div className="pointer-events-none absolute top-[68%] left-[-0.76%] h-[35.7%] w-[101.21%] overflow-hidden">
            <img src={imgSupermarket} alt="마트에서 저탄소 인증 축산물을 고르는 젖소 캐릭터" className="size-full object-cover" />
          </div>
          <div className="pointer-events-none absolute top-[67.51%] left-[-3.79%] h-[18.52%] w-[107.58%] bg-gradient-to-b from-white to-white/0" />

          <div className="absolute top-[6.36%] left-1/2 z-20 flex w-[85%] -translate-x-1/2 flex-col items-center">
            <div className="anim-pop-in flex h-[24.85cqw] flex-col items-center" style={{ animationDelay: "0.2s" }}>
              <div className="relative flex h-[10.91cqw] w-[13.18cqw] items-center justify-center">
                <div className="absolute top-[1.06cqw] left-0 h-[8.64cqw] w-full rounded-[999px] bg-[#4c7dda]" />
                <img src={imgBadgeTail} alt="" className="absolute top-[8.64cqw] left-[5.15cqw] w-[3.11cqw]" />
                <span
                  className="relative text-[clamp(20px,5.45cqw,36px)] leading-[10.91cqw] text-white"
                  style={{ fontFamily: mango }}
                >
                  Q3
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
              className="anim-float-up-in relative mt-[7.58cqw] h-[44.7cqw] w-full"
              style={{ animationDelay: "0.35s" }}
            >
              <img src={imgTextLines} alt="" className="pointer-events-none absolute top-[6.06cqw] left-[0.36%] w-[99.11%]" />
              <span className="absolute top-[9.24cqw] left-0 h-[3.03cqw] w-[56.15%] bg-[#fff478]" />

              <div className="relative text-center leading-[6.36cqw]">
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  저탄소 인증 축산물은
                </p>
                <p className="whitespace-nowrap">
                  <span className="text-[clamp(16px,4.85cqw,32px)]" style={{ fontFamily: hakgyo }}>
                    이디야커피를 비롯한 우리 주변
                  </span>
                  <span className="text-[clamp(14px,4.24cqw,28px)]" style={{ fontFamily: pretendard("Regular") }}>
                    에서 만날 수 있습니다!
                  </span>
                </p>
                <p className="h-[6.36cqw]" aria-hidden="true" />
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  이디야커피는 우유가 들어가는 전 제품에
                </p>
                <p className="whitespace-nowrap text-[#206c38]">
                  <span className="text-[clamp(16px,4.85cqw,32px)]" style={{ fontFamily: hakgyo }}>
                    저탄소 인증 우유를 사용
                  </span>
                  <span className="text-[clamp(14px,4.24cqw,28px)] text-black" style={{ fontFamily: pretendard("Regular") }}>
                    하고 있으며,
                  </span>
                </p>
                <p
                  className="whitespace-nowrap text-[clamp(14px,4.24cqw,28px)]"
                  style={{ fontFamily: pretendard("Regular") }}
                >
                  전국 대형마트와 다양한 유통매장에서도
                </p>
                <p className="whitespace-nowrap text-[#206c38]">
                  <span className="text-[clamp(16px,4.85cqw,32px)]" style={{ fontFamily: hakgyo }}>
                    저탄소 인증 축산물을 구매
                  </span>
                  <span className="text-[clamp(14px,4.24cqw,28px)] text-black" style={{ fontFamily: pretendard("Regular") }}>
                    할 수 있습니다.
                  </span>
                </p>
              </div>
            </div>

            <p
              className="mt-[7.58cqw] whitespace-nowrap text-center text-[clamp(12px,3.18cqw,21px)] leading-[4.55cqw] text-[#868686]"
              style={{ fontFamily: pretendard("Regular") }}
            >
              ※ 커피 한잔부터 장보기까지 일상에서 저탄소 소비를 실천해 보세요!
            </p>

            <button
              onClick={() => navigate("/complete")}
              className="anim-float-up-in mt-[7.58cqw] flex h-[14.55cqw] w-[60.61cqw] cursor-pointer items-center justify-center gap-[7.58cqw] rounded-[999px] bg-[#206c38] pl-[7.58cqw] pr-[4.85cqw] backdrop-blur-[2.75px] transition-opacity hover:opacity-90 active:opacity-75"
              style={{ animationDelay: "0.5s" }}
            >
              <span
                className="whitespace-nowrap text-center text-[clamp(18px,4.85cqw,32px)] leading-none tracking-[0.3em] text-white"
                style={{ fontFamily: pretendard("ExtraBold"), fontWeight: 800 }}
              >
                결과 확인
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
