const entryFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdJ_lg_NwbKGzMRPKMNxHXhsog-OfUzGcJG31dUMYm0B1wvQw/viewform";

const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
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

const pretendard = (weight: string) => `'Pretendard:${weight}', sans-serif`;

export default function Complete() {
  return (
    <main className="min-h-dvh w-full overflow-hidden bg-[#d3e9dc]">
      <section className="relative flex w-full flex-col items-center overflow-hidden [container-type:inline-size]">
        <img
          src={imgCloud}
          alt=""
          className="pointer-events-none absolute top-[clamp(34px,8.35cqw,66px)] left-1/2 w-[min(99.87cqw,789px)] -translate-x-1/2"
        />
        <img
          src={imgFence}
          alt=""
          className="pointer-events-none absolute top-[clamp(300px,47.72cqw,377px)] left-[calc(50%+min(4.62cqw,36.5px))] w-[min(256.84cqw,2029px)] -translate-x-1/2 mix-blend-multiply"
        />
        <img
          src={imgGrass}
          alt=""
          className="pointer-events-none absolute top-[clamp(550px,85.19cqw,673px)] left-[calc(50%+min(1.39cqw,11px))] w-[min(109.36cqw,864px)] -translate-x-1/2"
        />

        <h1
          className="anim-float-up-in relative z-10 mt-[clamp(70px,15.19cqw,120px)] text-center text-[clamp(36px,7.34cqw,58px)] leading-[clamp(58px,11.01cqw,87px)] text-[#295b34]"
          style={{ fontFamily: "'Mango Byeolbyeol:Regular', sans-serif", animationDelay: "0.15s" }}
        >
          <span className="block whitespace-nowrap">저탄소 인증 축산물</span>
          <span className="block whitespace-nowrap">알아보기 완료!</span>
        </h1>

        <div
          className="anim-pop-in relative z-10 mt-[clamp(40px,8.86cqw,70px)] aspect-[561/374] w-[min(71.01cqw,561px)]"
          style={{ animationDelay: "0.35s" }}
        >
          <img
            src={imgCharacters}
            alt="저탄소 인증 축산물 캐릭터들"
            className="size-full object-cover"
            style={{ animation: "char-float 4s ease-in-out 1s infinite" }}
          />
        </div>

        <div
          className="anim-float-up-in relative z-10 mt-[clamp(38px,8.86cqw,70px)] text-center leading-[clamp(32px,5.7cqw,45px)]"
          style={{ animationDelay: "0.5s" }}
        >
          <p
            className="whitespace-nowrap text-[clamp(18px,3.8cqw,30px)] text-black"
            style={{ fontFamily: pretendard("Regular") }}
          >
            퀴즈에 참여하신 분들 중
          </p>
          <p className="whitespace-nowrap">
            <span
              className="text-[clamp(21px,4.43cqw,35px)] text-[#206c38] underline decoration-[#92da1e] decoration-wavy decoration-[10%] underline-offset-[4px]"
              style={{ fontFamily: "'Hakgyoansim EunhasuOTF:R', sans-serif" }}
            >
              추첨을 통해 소정의 상품
            </span>
            <span className="text-[clamp(18px,3.8cqw,30px)] text-black" style={{ fontFamily: pretendard("Regular") }}>
              을 드립니다!
            </span>
          </p>
        </div>

        <div className="anim-float-up-in relative z-10 mt-[clamp(30px,6.33cqw,50px)] flex flex-col items-center gap-[20px]" style={{ animationDelay: "0.6s" }}>
          <p
            className="whitespace-nowrap text-center text-[clamp(17px,3.54cqw,28px)] leading-[clamp(30px,4.81cqw,38px)] text-[#206c38]"
            style={{ fontFamily: pretendard("Medium") }}
          >
            추첨을 위해 아래 개인정보를 입력해주세요!
          </p>
          <a
            href={entryFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[clamp(72px,12.15cqw,96px)] w-[min(80cqw,400px)] cursor-pointer items-center justify-center gap-[min(6.33cqw,50px)] rounded-[999px] bg-[#206c38] pl-[min(6.33cqw,50px)] pr-[min(4.05cqw,32px)] transition-opacity hover:opacity-90 active:opacity-75"
          >
            <span
              className="whitespace-nowrap text-[clamp(19px,4.05cqw,32px)] leading-none tracking-[0.3em] text-white"
              style={{ fontFamily: pretendard("ExtraBold"), fontWeight: 800 }}
            >
              개인정보 입력
            </span>
            <img src={imgArrowRight} alt="" className="w-[min(3.45cqw,27.24px)] rotate-90" />
          </a>
        </div>

        <div className="relative z-10 h-[clamp(70px,15.19cqw,120px)]" aria-hidden="true" />
      </section>

      <section className="relative z-10 flex w-full justify-center bg-[#73c486] px-[clamp(24px,8.86cqw,70px)] py-[clamp(42px,8.86cqw,70px)]">
        <div className="flex w-full max-w-[644px] flex-col gap-[15px]">
          <div className="flex items-center gap-[9px]">
            <div className="relative size-[28px] shrink-0">
              <img src={imgWarningIcon} alt="" className="size-[28px]" />
              <span
                className="absolute top-[2px] left-[10px] text-[26px] leading-[38px] text-[#65b384]"
                style={{ fontFamily: pretendard("Bold"), fontWeight: 700 }}
              >
                !
              </span>
            </div>
            <h2
              className="text-[clamp(23px,3.54cqw,28px)] leading-[38px] text-[#f8ed8c]"
              style={{ fontFamily: pretendard("Bold"), fontWeight: 700 }}
            >
              유의사항
            </h2>
          </div>

          <ul
            className="list-disc pl-[37.5px] text-[clamp(16px,3.16cqw,25px)] leading-[clamp(30px,5.32cqw,42px)] text-white"
            style={{ fontFamily: pretendard("Bold"), fontWeight: 700 }}
          >
            <li>본 이벤트는 1인 1회 참여 가능합니다</li>
            <li>중복참여 시 당첨이 제한될 수 있습니다</li>
            <li>OX퀴즈 풀이 완료 후 개인정보(이름, 연락처)를 기재해 주셔야 상품 지급이 가능합니다</li>
            <li>상품은 순차적으로 기재해주신 핸드폰 번호로 발송됩니다</li>
          </ul>
        </div>
      </section>

      <footer className="flex min-h-[135px] w-full flex-col items-center justify-center gap-[10px] bg-[#206c38] px-4 py-5">
        <div className="flex w-full max-w-[651px] items-center justify-center gap-[clamp(12px,4.43vw,35px)]">
          <img src={imgMinistry} alt="농림축산식품부" className="w-[27.67%]" />
          <div className="flex w-[30.82%] shrink-0 items-center gap-[2.75%]">
            <img src={imgLivestockIcon} alt="" className="w-[14.72%]" />
            <img src={imgLivestockText} alt="축산물품질평가원" className="w-[82.58%]" />
          </div>
          <img src={imgEdiya} alt="에디야커피" className="w-[30.73%]" />
        </div>
        <p
          className="whitespace-nowrap text-center text-[clamp(12px,2.28vw,18px)] text-white"
          style={{ fontFamily: pretendard("Regular") }}
        >
          축산물품질평가원 ALL RIGHTS RESERVED
        </p>
      </footer>
    </main>
  );
}
