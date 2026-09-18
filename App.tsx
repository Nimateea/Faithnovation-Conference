import { useState, useRef } from 'react';

const assetPathPrefix = "/assets";
const imgF7BuildingColumns = `${assetPathPrefix}/490f6.svg`;
const imgIconParkOutlineScatterAlignment = `${assetPathPrefix}/45269.svg`;
const imgAkarIconsArrowUpRight = `${assetPathPrefix}/a5d01.svg`;
const imgRectangle5 = `${assetPathPrefix}/d02a8.png`;
const imgFrame289 = `${assetPathPrefix}/a0fcc.png`;
const imgRectangle731 = `${assetPathPrefix}/ed59f.png`;
const imgRectangle732 = `${assetPathPrefix}/5b3da.png`;
const imgRectangle734 = `${assetPathPrefix}/38b16.png`;
const imgRectangle733 = `${assetPathPrefix}/597e5.png`;
const imgVector1 = `${assetPathPrefix}/bf374.svg`;
const imgVector2 = `${assetPathPrefix}/2d710.svg`;
const imgRectangle4 = `${assetPathPrefix}/9365e.svg`;
const imgUbaUnitedBankForAfrica1 = `${assetPathPrefix}/bd903.svg`;
const imgChime11 = `${assetPathPrefix}/1b9a1.svg`;
const imgKudaBank1 = `${assetPathPrefix}/e7438.svg`;
const imgBankOfTheWest11 = `${assetPathPrefix}/3fbfa.svg`;
const imgMastercard = `${assetPathPrefix}/d4884.svg`;
const imgGroup = `${assetPathPrefix}/f0d3c.svg`;
const imgGroup1 = `${assetPathPrefix}/2098f.svg`;
const imgGroup4534240 = `${assetPathPrefix}/97d9e.svg`;
const imgVector = `${assetPathPrefix}/35b78.svg`;
const imgVector3 = `${assetPathPrefix}/7e1af.svg`;
const imgVector4 = `${assetPathPrefix}/455bc.svg`;
const imgRectangle735 = `${assetPathPrefix}/4ba60.svg`;
const img = `${assetPathPrefix}/39462.svg`;
const img1 = `${assetPathPrefix}/1a011.svg`;
const imgFrame427320224 = `${assetPathPrefix}/64206.svg`;
const imgLine1 = `${assetPathPrefix}/b4cf6.svg`;

/* Acumin Variable Concept font-variation-settings per named style
 * wdth axis: ExtraCondensed≈50, Condensed≈75, SemiCondensed≈87, Normal=100, Wide≈125
 * wght axis: 100–900
 */
const fvsWideSemiBold      = '"wdth" 125, "wght" 600';
const fvsWide              = '"wdth" 125, "wght" 400';
const fvsWideBlack         = '"wdth" 125, "wght" 900';
const fvsWideMedium        = '"wdth" 125, "wght" 500';
const fvsBold              = '"wdth" 100, "wght" 700';
const fvsRegular           = '"wdth" 100, "wght" 400';
const fvsCondMedItal       = '"wdth" 75,  "wght" 500';
const fvsXCondSemiBoldItal = '"wdth" 50,  "wght" 600';
const fvsSemiCondUBItal    = '"wdth" 87,  "wght" 900';
const fvsXCondBlackItal    = '"wdth" 50,  "wght" 900';
const fvsXCondXLight       = '"wdth" 50,  "wght" 200';
const fvsXCondItal         = '"wdth" 50,  "wght" 400';

function F7BuildingColumns({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgF7BuildingColumns} />
    </div>
  );
}

function IconParkOutlineScatterAlignment({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconParkOutlineScatterAlignment} />
    </div>
  );
}

function AkarIconsArrowUpRight({ className }: { className?: string }) {
  return (
    <div className={(className || "relative size-[20px]") + " transition-transform duration-200 group-hover:translate-x-[3px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAkarIconsArrowUpRight} />
    </div>
  );
}

function ScatterIcon({ className }: { className?: string }) {
  return (
    <div className={(className || "relative size-[20px]") + " transition-transform duration-200 group-hover:translate-x-[3px]"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconParkOutlineScatterAlignment} />
    </div>
  );
}

export default function App() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [badgeTilt, setBadgeTilt] = useState({ x: 0, y: 0, active: false });

  function handleBadgeMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = badgeRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setBadgeTilt({ x: dx * 14, y: dy * 14, active: true });
  }

  function handleBadgeMouseLeave() {
    setBadgeTilt({ x: 0, y: 0, active: false });
  }

  const [cyberHovered, setCyberHovered] = useState(false);
  const [disconnectedHovered, setDisconnectedHovered] = useState(false);
  const [digitalGivingHovered, setDigitalGivingHovered] = useState(false);
  const [techAdoptionHovered, setTechAdoptionHovered] = useState(false);
  const [adminOverloadHovered, setAdminOverloadHovered] = useState(false);
  const [aiHovered, setAiHovered] = useState(false);
  return (
    <div style={{ width: 1440, margin: '0 auto', overflowX: 'clip' }}>
      <div className="bg-white relative" style={{ width: 1440, height: 6269 }}>

        {/* Black hero bar */}
        <div className="absolute bg-black h-[382px] left-0 top-0 w-[1440px]" />

        {/* Inverted black bar (footer bg) */}
        <div className="absolute flex h-[1066px] items-center justify-center left-0 top-[5203px] w-[1440px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-black h-[1066px] relative w-[1440px]" />
          </div>
        </div>

        {/* Purple gradient blob */}
        <div className="absolute h-[914.5px] left-[-30.5px] top-[382px] w-[1497.5px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>

        {/* Inverted gradient blob */}
        <div className="absolute flex h-[785.5px] items-center justify-center left-[-30.5px] top-[4417.5px] w-[1497.5px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[785.5px] relative w-[1497.5px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
            </div>
          </div>
        </div>

        {/* Backdrop blur overlay top */}
        <div className="absolute backdrop-blur-[172.6px] bg-gradient-to-b from-[rgba(0,0,0,0.2)] h-[1571px] left-0 to-[rgba(255,255,255,0.2)] top-[229px] w-[1440px]" />

        {/* Backdrop blur overlay bottom (inverted) */}
        <div className="absolute flex h-[933px] items-center justify-center left-0 top-[4136px] w-[1440px]">
          <div className="-scale-y-100 flex-none">
            <div className="backdrop-blur-[172.6px] bg-gradient-to-b from-[rgba(0,0,0,0.2)] h-[1220px] relative to-[rgba(255,255,255,0.2)] w-[1440px]" />
          </div>
        </div>

        {/* Gray section bg */}
        <div className="absolute bg-[#f8f8f8] h-[760px] left-0 top-[2289px] w-[1440px]" />

        {/* Masked people photo */}
        <div className="absolute contents left-[-2px] top-[4996px]">
          <div
            className="absolute h-[791.843px] left-[-2px] mask-alpha mask-intersect mask-no-clip mask-no-repeat top-[4899px] w-[1439px]"
            style={{
              maskImage: `url("${imgRectangle4}")`,
              maskPosition: '0px 15.842px',
              maskSize: '1439px 777.262px',
            }}
          >
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[108.23%] left-0 max-w-none top-[0.04%] w-full" src={imgRectangle5} />
              </div>
              <div className="absolute bg-[#10102f] inset-0 mix-blend-color" />
            </div>
          </div>
        </div>

        {/* Partners row */}
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[53.704px] items-center left-[calc(50%-0.41px)] opacity-90 top-[1413.24px]">
          <div className="h-[40.59px] relative shrink-0 w-[56.195px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgUbaUnitedBankForAfrica1} />
          </div>
          <div className="h-[31.319px] relative shrink-0 w-[50.459px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChime11} />
          </div>
          <div className="relative shrink-0 size-[32.267px]">
            <div className="absolute bg-[#575757] left-0 size-[32.267px] top-0" />
            <p className="[word-break:break-word] absolute font-['Blinker:Regular'] leading-[1.11] left-[6.87px] not-italic text-[10.556px] text-white top-[4.78px] tracking-[6.0202px] w-[24px]">
              KEKE
            </p>
          </div>
          <div className="h-[31.949px] relative shrink-0 w-[66.421px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgKudaBank1} />
          </div>
          <p className="[word-break:break-word] font-['Blinker:Regular'] leading-[0.73] not-italic relative shrink-0 text-[#575757] text-[19.707px] whitespace-nowrap">
            Danfo
          </p>
          <div className="h-[28.868px] overflow-clip relative shrink-0 w-[62.416px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBankOfTheWest11} />
          </div>
          <div className="h-[32.8px] overflow-clip relative shrink-0 w-[38.814px]">
            <div className="absolute contents inset-[-8.52%_-10.43%_-8.1%_-10.43%]">
              <div className="absolute contents inset-[0_0_0.93%_0]">
                <p
                  className="[word-break:break-word] absolute bottom-[0.93%] font-['Montserrat:Regular'] font-normal leading-[0.73] left-[calc(50%-15.02px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat text-[#575757] text-[5.263px] top-[86.88%] whitespace-nowrap"
                  style={{ maskImage: `url("${imgMastercard}")`, maskPosition: '-8.436px -31.29px', maskSize: '46.91px 38.251px' }}
                >
                  Mastercard
                </p>
                <div
                  className="absolute inset-[0_0_26.86%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat"
                  style={{ maskImage: `url("${imgMastercard}")`, maskPosition: '-4.048px -2.794px', maskSize: '46.91px 38.251px' }}
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[15.062px] overflow-clip relative shrink-0 w-[52.978px]">
            <div className="absolute contents inset-[0_0.01%_0_0]" style={{ containerType: 'size' }}>
              <div className="absolute flex inset-[0_0.01%_0_0] items-center justify-center" style={{ containerType: 'size' }}>
                <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                  <div className="relative size-full">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[29.177px] relative shrink-0 w-[45.252px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4534240} />
          </div>
        </div>

        {/* Footer */}
        <div className="absolute h-[724px] left-0 top-[5545px] w-[1440px]">
          <div className="absolute bg-black inset-0" />
          <p
            className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Medium'] font-medium inset-[8.84%_84.65%_83.43%_1.67%] leading-none text-[#eceeec] text-[56px] tracking-[-1.12px] whitespace-nowrap"
            style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
          >
            Catalog
          </p>
          <div className="[word-break:break-word] absolute content-start flex flex-wrap gap-[4px_24px] items-start leading-[1.2] left-[24px] pr-[48px] text-[20px] top-[160px] w-[464px] whitespace-nowrap">
            <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
              <p className="font-['Bricolage_Grotesque:Medium'] font-medium relative shrink-0 text-[#adb3ab] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Home</p>
              <p className="font-['Bricolage_Grotesque:ExtraLight'] font-extralight relative shrink-0 text-[#3c403c]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>/</p>
            </div>
            <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
              <p className="font-['Bricolage_Grotesque:Medium'] font-medium relative shrink-0 text-[#adb3ab] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Special Offers</p>
              <p className="font-['Bricolage_Grotesque:ExtraLight'] font-extralight relative shrink-0 text-[#3c403c]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>/</p>
            </div>
            <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
              <p className="font-['Bricolage_Grotesque:Medium'] font-medium relative shrink-0 text-[#adb3ab] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Blog</p>
              <p className="font-['Bricolage_Grotesque:ExtraLight'] font-extralight relative shrink-0 text-[#3c403c]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>/</p>
            </div>
            <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
              <p className="font-['Bricolage_Grotesque:Medium'] font-medium relative shrink-0 text-[#adb3ab] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>About Us</p>
              <p className="font-['Bricolage_Grotesque:ExtraLight'] font-extralight relative shrink-0 text-[#3c403c]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>/</p>
            </div>
            <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
              <p className="font-['Bricolage_Grotesque:Medium'] font-medium relative shrink-0 text-[#adb3ab] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Payment &amp; Delivery</p>
              <p className="font-['Bricolage_Grotesque:ExtraLight'] font-extralight relative shrink-0 text-[#3c403c]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>/</p>
            </div>
            <p className="font-['Bricolage_Grotesque:Medium'] font-medium relative shrink-0 text-[#adb3ab] tracking-[-0.4px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Contacts</p>
          </div>
          <div className="absolute inset-[9.94%_83.75%_88.95%_15.69%]">
            <div className="absolute inset-[-9.38%]">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Regular'] font-normal inset-[13.26%_28.96%_82.04%_58.06%] leading-[1.2] text-[#eceeec] text-[28px] tracking-[-0.56px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
            +1 891 989-11-91
          </p>
          <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:ExtraLight'] font-extralight inset-[13.26%_42.5%_82.04%_56.94%] leading-[1.2] text-[#3c403c] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>(</p>
          <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:ExtraLight'] font-extralight inset-[13.26%_28.13%_82.04%_71.32%] leading-[1.2] text-[#3c403c] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>)</p>
          <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[51.93%] content-stretch flex flex-col gap-[8px] items-start left-[calc(62.5%+4px)] top-[40.06%] whitespace-nowrap">
            <p className="font-['Bricolage_Grotesque:Medium'] font-medium leading-[1.3] relative shrink-0 text-[#3c403c] text-[12px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Mo—Fr</p>
            <p className="font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.2] relative shrink-0 text-[#adb3ab] text-[28px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>9am—6pm</p>
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[8px] inset-[24.59%_27.85%_66.57%_58.06%] items-start whitespace-nowrap">
            <p className="font-['Bricolage_Grotesque:Medium'] font-medium leading-[1.3] relative shrink-0 text-[#3c403c] text-[12px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Location</p>
            <div className="font-['Bricolage_Grotesque:Regular'] font-normal leading-[0] relative shrink-0 text-[#adb3ab] text-[14px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
              <p className="leading-[1.4] mb-0">2972 Westheimer Rd. Santa Ana,</p>
              <p className="leading-[1.4]">Illinois 85486 </p>
            </div>
          </div>
          <div className="-translate-x-1/2 [word-break:break-word] absolute bottom-[69.06%] content-stretch flex flex-col gap-[8px] items-start left-[calc(87.5%-6.5px)] top-[24.86%] whitespace-nowrap">
            <p className="font-['Bricolage_Grotesque:Medium'] font-medium leading-[1.3] relative shrink-0 text-[#3c403c] text-[12px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Email</p>
            <p className="font-['Bricolage_Grotesque:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#adb3ab] text-[14px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>hello@logoipsum.com</p>
          </div>
          <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Medium'] font-medium inset-[70.17%_33.96%_27.62%_58.06%] leading-[1.3] text-[#3c403c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>© 2023 — Copyright</p>
          <p className="[word-break:break-word] absolute font-['Bricolage_Grotesque:Medium'] font-medium inset-[8.84%_37.5%_88.95%_58.06%] leading-[1.3] text-[#3c403c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>Contact Us</p>
          <div className="absolute border border-[#3c403c] border-solid inset-[65.75%_95.28%_28.18%_1.67%] rounded-[48px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-1/2 top-1/2 w-[12px]">
              <div className="absolute inset-[-7.58%_-4.42%_0_-4.42%]">
                <img alt="" className="block max-w-none size-full" src={imgVector3} />
              </div>
            </div>
          </div>
          {/* Explore banner */}
          <div className="absolute content-stretch flex items-start left-[24px] mix-blend-difference rounded-[16px] top-[540px]">
            <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
              <img alt="" className="absolute max-w-none object-cover opacity-50 rounded-[16px] size-full" src={imgFrame289} />
              <div className="absolute bg-gradient-to-r from-[rgba(19,21,118,0.81)] inset-0 rounded-[16px] to-[rgba(34,38,183,0.77)]" />
            </div>
            <div className="content-stretch flex h-[160px] items-center px-[64px] py-[10px] relative shrink-0 w-[1212px]">
              <div className="[word-break:break-word] font-['Bricolage_Grotesque:Medium'] font-medium leading-[0] relative shrink-0 text-[#d1d5db] text-[20px] tracking-[-0.2px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
                <p className="leading-[1.3] mb-0">Explore</p>
                <p className="leading-[1.3]">our success</p>
              </div>
              <div className="-translate-y-1/2 absolute bg-[#3c403c] h-px left-0 mix-blend-multiply top-[calc(50%+0.5px)] w-[24px]" />
            </div>
            <div className="content-stretch flex flex-col h-[160px] items-center justify-center relative shrink-0 w-[180px]">
              <div className="flex items-center justify-center relative shrink-0 size-[27.577px]">
                <div className="-rotate-45 flex-none">
                  <div className="h-[18px] relative w-[21px]">
                    <div className="absolute inset-[-5.56%_-4.76%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector4} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#3c403c] bottom-0 h-[24px] left-0 mix-blend-multiply w-px" />
              <div className="absolute bg-[#3c403c] h-[24px] left-0 mix-blend-multiply top-0 w-px" />
            </div>
          </div>
        </div>

        {/* Hero title */}
        <div className="[word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[0] left-[150px] not-italic text-[108.999px] text-white top-[247px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideSemiBold }}>
          <p className="mb-0">
            <span className="leading-[0.72]" style={{ fontVariationSettings: fvsWideSemiBold }}>Fai</span>
            <span className="[word-break:break-word] font-['Acumin_Variable_Concept:ExtraCondensed_Semibold_Italic'] leading-[0.72] not-italic" style={{ fontVariationSettings: fvsXCondSemiBoldItal }}>th</span>
          </p>
          <p>
            <span className="leading-[0.72]" style={{ fontVariationSettings: fvsWideSemiBold }}>nova</span>
            <span className="[word-break:break-word] font-['Acumin_Variable_Concept:SemiCondensed_UltraBlack_Italic'] leading-[0.72] not-italic" style={{ fontVariationSettings: fvsSemiCondUBItal }}>t</span>
            <span className="leading-[0.72]" style={{ fontVariationSettings: fvsWideSemiBold }}>ion</span>
          </p>
        </div>

        {/* Watermark */}
        <p className="[word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[0] left-[-21px] not-italic opacity-10 text-[#1e1e1e] text-[222.005px] top-[4057px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideSemiBold }}>
          <span className="leading-[0.72]" style={{ fontVariationSettings: fvsWideSemiBold }}>Fai</span>
          <span className="font-['Acumin_Variable_Concept:ExtraCondensed_Semibold_Italic'] leading-[0.72]" style={{ fontVariationSettings: fvsXCondSemiBoldItal }}>th</span>
          <span className="leading-[0.72]" style={{ fontVariationSettings: fvsWideSemiBold }}>nova</span>
          <span className="font-['Acumin_Variable_Concept:SemiCondensed_UltraBlack_Italic'] leading-[0.72]" style={{ fontVariationSettings: fvsSemiCondUBItal }}>t</span>
          <span className="leading-[0.72]" style={{ fontVariationSettings: fvsWideSemiBold }}>ion</span>
        </p>

        {/* Hero subtitle */}
        <p className="[word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide'] leading-[122.22000122070312%] left-[150px] not-italic text-[#c2c2c2] text-[16px] top-[558px] w-[393px]" style={{ fontVariationSettings: fvsWide }}>
          The experience brings together believers who build, lead and create - including technologists, entrepreneurs, ministry leaders and marketplace professionals.
        </p>

        {/* Quote */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] left-[calc(50%+0.5px)] not-italic text-[45px] text-center text-white top-[958px] w-[393px]" style={{ fontVariationSettings: fvsCondMedItal }}>
          Building has always been part of the work
        </p>

        {/* "What has God" heading */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[110.19999694824219%] left-1/2 not-italic text-[45px] text-black text-center top-[1663px] tracking-[-2.7px] w-[938px]" style={{ fontVariationSettings: fvsWideSemiBold }}>
          What has God put in your hands and what can you build with it?
        </p>

        {/* "Three ways" heading */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[1.01] left-1/2 not-italic text-[45px] text-black text-center top-[3177px] tracking-[-2.7px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideSemiBold }}>
          {`Three ways we're building forward.`}
        </p>

        {/* Rectangle bg behind CTA */}
        <div className="-translate-x-1/2 absolute h-[285px] left-[calc(50%+0.5px)] top-[4626px] w-[1141px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle735} />
        </div>

        {/* "Problems are real" heading */}
        <p className="[word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[1.322] left-[calc(18.75%-120px)] not-italic text-[45px] text-black top-[2374px] tracking-[-2.7px] w-[333px]" style={{ fontVariationSettings: fvsWideSemiBold }}>
          The problems are real.
        </p>

        {/* Exodus verse */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide'] leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-center text-white top-[1067px] w-[325px]" style={{ fontVariationSettings: fvsWide }}>
          <span className="font-['Acumin_Variable_Concept:Wide_Black'] leading-[normal]" style={{ fontVariationSettings: fvsWideBlack }}>Exodus 31,</span>
          <span className="leading-[normal]" style={{ fontVariationSettings: fvsWide }}>{` Bezalel was given wisdom, skill and creativity to design and build.`}</span>
        </p>

        {/* Problems supporting text */}
        <p className="[word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide'] leading-[normal] left-[calc(81.25%-383px)] not-italic text-[#393939] text-[16px] top-[2401px] w-[503px]" style={{ fontVariationSettings: fvsWide }}>
          {`The church and society don't need more conversations about what could change. They need people willing to understand the problem, build the solution and make it useful.`}
        </p>

        {/* CTA columns */}
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[76px] items-center left-[calc(50%+0.5px)] top-[4681px]">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[496px]">
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[1.01] min-w-full not-italic relative shrink-0 text-[45px] text-white tracking-[-2.7px] w-[min-content]" style={{ fontVariationSettings: fvsWideSemiBold }}>
              Already building?
            </p>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide'] leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]" style={{ fontVariationSettings: fvsWide }}>
              Places on the FAITHNOVATION 2026 floor are earned on merit. No floor space is sold, at any price, to anyone.
            </p>
            <div className="group cursor-pointer bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[2px] shrink-0 transition-transform duration-200 hover:scale-[1.03]">
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide_Medium'] leading-[normal] not-italic relative shrink-0 text-[#10123e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideMedium }}>
                  Apply for a place
                </p>
                <AkarIconsArrowUpRight className="relative shrink-0 size-[20px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-[469px]">
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[1.01] min-w-full not-italic relative shrink-0 text-[45px] text-right text-white tracking-[-2.7px] w-[min-content]" style={{ fontVariationSettings: fvsWideSemiBold }}>
              Be in the room.
            </p>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide'] leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-right text-white w-[min-content]" style={{ fontVariationSettings: fvsWide }}>
              Saturday 21 November 2026 · Lagos, Nigeria. Confirmation by email; WhatsApp for close-up communication.
            </p>
            <div className="group cursor-pointer bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[2px] shrink-0 transition-transform duration-200 hover:scale-[1.03]">
              <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide_Medium'] leading-[normal] not-italic relative shrink-0 text-[#10123e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideMedium }}>
                  Grab your ticket for FAITHNOVATION
                </p>
                <AkarIconsArrowUpRight className="relative shrink-0 size-[20px]" />
              </div>
            </div>
          </div>
        </div>

        {/* "Meet our partners" label */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide'] leading-[0] left-[calc(50%+0.5px)] not-italic text-[0px] text-black text-center top-[1358px] whitespace-nowrap" style={{ fontVariationSettings: fvsWide }}>
          <span className="leading-[122.22000122070312%] text-[16px]" style={{ fontVariationSettings: fvsWide }}>Meet </span>
          <span className="font-['Acumin_Variable_Concept:ExtraCondensed_Italic'] leading-[1.467] text-[18px]" style={{ fontVariationSettings: fvsXCondItal }}>our</span>
          <span className="leading-[122.22000122070312%] text-[16px]" style={{ fontVariationSettings: fvsWide }}> partners</span>
        </p>

        {/* Date badge */}
        <div className="[word-break:break-word] absolute content-stretch flex flex-col items-start left-[calc(87.5%-87px)] not-italic top-[485px] w-[117px]">
          <p className="font-['Acumin_Variable_Concept:Wide_Semibold'] h-[74px] leading-[0.871] mb-[-21px] relative shrink-0 text-[109px] text-white w-full" style={{ fontVariationSettings: fvsWideSemiBold }}>"</p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="font-['Acumin_Variable_Concept:Wide_Semibold'] h-[141px] leading-[0] relative shrink-0 text-[0px] text-white w-full" style={{ fontVariationSettings: fvsWideSemiBold }}>
              <p className="font-['Acumin_Variable_Concept:ExtraCondensed_Black_Italic'] leading-[0.871] mb-0 text-[88px] w-[126px]" style={{ fontVariationSettings: fvsXCondBlackItal }}>NOV.</p>
              <p className="font-['Acumin_Variable_Concept:ExtraCondensed_ExtraLight'] leading-[0.73] text-[109px] tracking-[-5.45px]" style={{ fontVariationSettings: fvsXCondXLight }}>2026</p>
            </div>
            <p className="font-['Acumin_Variable_Concept:Wide'] leading-[122.22000122070312%] relative shrink-0 text-[#fe7c09] text-[16px] text-right w-full" style={{ fontVariationSettings: fvsWide }}>
              Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Star asterisk — hero */}
        <div className="absolute h-[42px] left-[calc(25%+63.62px)] top-[233px] w-[41.909px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
        </div>

        {/* Star asterisk — watermark section */}
        <div className="absolute h-[43.093px] left-[calc(37.5%+137px)] top-[4235px] w-[43px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
        </div>

        {/* Hero buttons */}
        <div className="absolute content-stretch flex gap-[16px] items-center left-[150px] top-[674px]">
          <div className="group cursor-pointer bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[2px] shrink-0 transition-transform duration-200 hover:scale-[1.03]">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide_Medium'] leading-[normal] not-italic relative shrink-0 text-[#10123e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideMedium }}>
                Register
              </p>
              <AkarIconsArrowUpRight className="relative shrink-0 size-[20px]" />
            </div>
          </div>
          <div className="group cursor-pointer bg-[rgba(255,255,255,0.06)] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[2px] shrink-0 transition-transform duration-200 hover:scale-[1.03]">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Wide_Medium'] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: fvsWideMedium }}>
                View Program
              </p>
              <ScatterIcon className="relative shrink-0 size-[20px]" />
            </div>
          </div>
        </div>

        {/* '26 circular badge */}
        <div
          ref={badgeRef}
          className="badge-spin absolute h-[147.521px] left-[calc(50%+0.24px)] top-[280.48px] w-[147.517px] cursor-pointer"
          style={{
            animation: badgeTilt.active
              ? 'spin-cw 8s linear infinite'
              : 'float 3.5s ease-in-out infinite, spin-cw 8s linear infinite',
            transform: badgeTilt.active
              ? `translateX(-50%) translate(${badgeTilt.x}px, ${badgeTilt.y}px) scale(1.08)`
              : undefined,
            transition: badgeTilt.active ? 'transform 0.15s ease-out' : 'transform 0.4s ease-out',
          }}
          onMouseMove={handleBadgeMouseMove}
          onMouseLeave={handleBadgeMouseLeave}
        >
          <p className="[word-break:break-word] absolute font-['Acumin_Variable_Concept:Wide_Semibold'] leading-[0.72] left-[31.89px] not-italic text-[50.146px] text-white top-[59.28px] whitespace-nowrap" style={{ fontVariationSettings: fvsWideSemiBold }}>{`'26`}</p>
          <div className="absolute h-[147.521px] left-0 top-0 w-[147.517px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame427320224} />
          </div>
        </div>

        {/* Word grid */}
        <div className="absolute h-[387px] left-[251px] top-[1817.5px] w-[938px]">
          <div className="-translate-x-1/2 absolute content-stretch flex gap-[152px] items-center left-[calc(50%-9.5px)] top-[87.5px]">
            <div className="content-stretch flex flex-col gap-[118px] items-center relative shrink-0 w-[95px]">
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0 w-full">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Design</p>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Build</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[118px] items-center relative shrink-0 w-[78px]">
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0 w-full">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Code</p>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0 w-full">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Solve</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[118px] items-center relative shrink-0 w-[91px]">
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0 w-full">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Create</p>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Start</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[118px] items-center relative shrink-0 w-[81px]">
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Lead</p>
              </div>
              <div className="content-stretch flex flex-col items-start justify-center p-[8px] relative rounded-[8px] shrink-0 w-full">
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black whitespace-nowrap" style={{ fontVariationSettings: fvsBold }}>Serve</p>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute h-[368.5px] left-1/2 top-0 w-[938px]">
            <div className="absolute inset-[-0.14%_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
        </div>

        {/* Problem cards — left column */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[150px] top-[2522px] w-[365px]">
          <div
            className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full transition-all duration-300 ease-in-out"
            style={{ height: disconnectedHovered ? 'auto' : '166px', overflow: 'hidden' }}
            onMouseEnter={() => setDisconnectedHovered(true)}
            onMouseLeave={() => setDisconnectedHovered(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full transition-all duration-300 ease-in-out" style={{ gap: disconnectedHovered ? '24px' : '0px' }}>
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: fvsBold }}>Disconnected Systems</p>
              <div className="overflow-hidden transition-all duration-300 ease-in-out w-full" style={{ maxHeight: disconnectedHovered ? '200px' : '0px', opacity: disconnectedHovered ? 1 : 0 }}>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: fvsRegular }}>Faith communities need to take digital security seriously.</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] not-italic relative shrink-0 text-[#2226b7] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>01</p>
          </div>
          <div
            className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full transition-all duration-300 ease-in-out"
            style={{ height: digitalGivingHovered ? 'auto' : '166px', overflow: 'hidden' }}
            onMouseEnter={() => setDigitalGivingHovered(true)}
            onMouseLeave={() => setDigitalGivingHovered(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full transition-all duration-300 ease-in-out" style={{ gap: digitalGivingHovered ? '24px' : '0px' }}>
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: fvsBold }}>Digital Giving</p>
              <div className="overflow-hidden transition-all duration-300 ease-in-out w-full" style={{ maxHeight: digitalGivingHovered ? '200px' : '0px', opacity: digitalGivingHovered ? 1 : 0 }}>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: fvsRegular }}>Faith communities need to take digital security seriously.</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] not-italic relative shrink-0 text-[#2226b7] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>04</p>
          </div>
        </div>

        {/* Problem cards — right column */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(62.5%+12px)] top-[2522px] w-[365px]">
          <div
            className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[32px] items-start not-italic p-[32px] relative rounded-[8px] shrink-0 w-full transition-all duration-300 ease-in-out"
            style={{ height: cyberHovered ? 'auto' : '166px', overflow: 'hidden' }}
            onMouseEnter={() => setCyberHovered(true)}
            onMouseLeave={() => setCyberHovered(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 text-black w-full transition-all duration-300 ease-in-out" style={{ gap: cyberHovered ? '24px' : '0px' }}>
              <p className="font-['Acumin_Variable_Concept:Bold'] leading-[1.01] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: fvsBold }}>Cybersecurity</p>
              <div className="overflow-hidden transition-all duration-300 ease-in-out w-full" style={{ maxHeight: cyberHovered ? '200px' : '0px', opacity: cyberHovered ? 1 : 0 }}>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: fvsRegular }}>Faith communities need to take digital security seriously.</p>
              </div>
            </div>
            <p className="font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] relative shrink-0 text-[#2226b7] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>03</p>
          </div>
          <div
            className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full transition-all duration-300 ease-in-out"
            style={{ height: techAdoptionHovered ? 'auto' : '166px', overflow: 'hidden' }}
            onMouseEnter={() => setTechAdoptionHovered(true)}
            onMouseLeave={() => setTechAdoptionHovered(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full transition-all duration-300 ease-in-out" style={{ gap: techAdoptionHovered ? '24px' : '0px' }}>
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: fvsBold }}>Technology Adoption</p>
              <div className="overflow-hidden transition-all duration-300 ease-in-out w-full" style={{ maxHeight: techAdoptionHovered ? '200px' : '0px', opacity: techAdoptionHovered ? 1 : 0 }}>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: fvsRegular }}>Faith communities need to take digital security seriously.</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] not-italic relative shrink-0 text-[#2226b7] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>06</p>
          </div>
        </div>

        {/* Problem cards — middle column */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(25%+171px)] top-[2522px] w-[365px]">
          <div
            className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full transition-all duration-300 ease-in-out"
            style={{ height: adminOverloadHovered ? 'auto' : '166px', overflow: 'hidden' }}
            onMouseEnter={() => setAdminOverloadHovered(true)}
            onMouseLeave={() => setAdminOverloadHovered(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full transition-all duration-300 ease-in-out" style={{ gap: adminOverloadHovered ? '24px' : '0px' }}>
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: fvsBold }}>Administrative Overload</p>
              <div className="overflow-hidden transition-all duration-300 ease-in-out w-full" style={{ maxHeight: adminOverloadHovered ? '200px' : '0px', opacity: adminOverloadHovered ? 1 : 0 }}>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: fvsRegular }}>Faith communities need to take digital security seriously.</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] not-italic relative shrink-0 text-[#2226b7] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>02</p>
          </div>
          <div
            className="bg-white content-stretch flex flex-col gap-[32px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full transition-all duration-300 ease-in-out"
            style={{ height: aiHovered ? 'auto' : '166px', overflow: 'hidden' }}
            onMouseEnter={() => setAiHovered(true)}
            onMouseLeave={() => setAiHovered(false)}
          >
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full transition-all duration-300 ease-in-out" style={{ gap: aiHovered ? '24px' : '0px' }}>
              <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Bold'] leading-[1.01] not-italic relative shrink-0 text-[24px] text-black w-full" style={{ fontVariationSettings: fvsBold }}>Artificial Intelligence</p>
              <div className="overflow-hidden transition-all duration-300 ease-in-out w-full" style={{ maxHeight: aiHovered ? '200px' : '0px', opacity: aiHovered ? 1 : 0 }}>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] text-black w-full" style={{ fontVariationSettings: fvsRegular }}>Faith communities need to take digital security seriously.</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] not-italic relative shrink-0 text-[#2226b7] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>05</p>
          </div>
        </div>

        {/* Three ways cards */}
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-[3286px]">
          <div className="[word-break:break-word] content-stretch flex gap-[32px] items-center not-italic relative shrink-0 w-[1044px]">
            <div className="bg-[#121212] content-stretch flex flex-col gap-[10px] items-start p-[32px] relative rounded-[8px] shrink-0 w-[497px]">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-[377px]">
                <p className="font-['Acumin_Variable_Concept:Bold'] leading-[1.01] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: fvsBold }}>Solve Real Problems</p>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: fvsRegular }}>Problems in the Body of Faith and wider society need people with the skills to solve them.</p>
              </div>
              <p className="font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] relative shrink-0 text-[#fe7c09] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>01</p>
            </div>
            <div className="bg-[#2226b7] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px p-[32px] relative rounded-[8px]">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full">
                <p className="font-['Acumin_Variable_Concept:Bold'] leading-[1.01] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: fvsBold }}>Improve the Transfer</p>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: fvsRegular }}>Explore ways technology can improve how the gospel is communicated and transferred.</p>
              </div>
              <p className="font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] relative shrink-0 text-[#fe7c09] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>02</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
            <div className="flex flex-row items-center self-stretch">
              <div className="bg-[#2226b7] content-stretch flex flex-col gap-[24px] h-full items-center justify-center px-[48px] py-[32px] relative rounded-[8px] shrink-0 w-[215px]">
                <F7BuildingColumns className="relative shrink-0 size-[32px]" />
                <p className="[word-break:break-word] font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] min-w-full not-italic relative shrink-0 text-[34.522px] text-center text-white w-[min-content]" style={{ fontVariationSettings: fvsCondMedItal }}>
                  The Three Pillars
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#121212] content-stretch flex flex-col gap-[10px] items-start not-italic p-[48px] relative rounded-[8px] shrink-0 w-[593px]">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full">
                <p className="font-['Acumin_Variable_Concept:Bold'] leading-[1.01] relative shrink-0 text-[24px] w-full" style={{ fontVariationSettings: fvsBold }}>Improve How Churches Run</p>
                <p className="font-['Acumin_Variable_Concept:Regular'] leading-[1.35] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: fvsRegular }}>Use better administration, systems and technology to help churches operate effectively.</p>
              </div>
              <p className="font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.01] relative shrink-0 text-[#fe7c09] text-[45px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>03</p>
            </div>
          </div>
        </div>

        {/* "How to get involved" */}
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Acumin_Variable_Concept:Condensed_Medium_Italic'] leading-[1.35] left-1/2 not-italic text-[32px] text-center text-white top-[4553px] whitespace-nowrap" style={{ fontVariationSettings: fvsCondMedItal }}>
          How to get involved
        </p>

        {/* Photo pills */}
        <div className="absolute h-[100px] left-[calc(25%+67px)] rounded-[85px] top-[4007px] w-[238px]">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[85px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[85px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[85px] size-full" src={imgRectangle731} />
          </div>
        </div>
        <div className="absolute h-[100px] left-[calc(50%+77px)] rounded-[85px] top-[4157px] w-[238px]">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[85px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[85px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[85px] size-full" src={imgRectangle732} />
          </div>
        </div>
        <div className="absolute h-[100px] left-[62px] rounded-[85px] top-[4157px] w-[238px]">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[85px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[85px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[85px] size-full" src={imgRectangle734} />
          </div>
        </div>
        <div className="absolute h-[100px] left-[calc(87.5%-100px)] rounded-[85px] top-[4007px] w-[238px]">
          <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[85px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[85px]" />
            <img alt="" className="absolute max-w-none object-cover rounded-[85px] size-full" src={imgRectangle733} />
          </div>
        </div>

      </div>
    </div>
  );
}
