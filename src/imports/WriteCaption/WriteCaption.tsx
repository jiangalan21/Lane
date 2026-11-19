import svgPaths from "./svg-5zb1nmlhe8";

function Group() {
  return (
    <div className="absolute left-[2149px] size-[177px] top-[60px]">
      <div className="absolute inset-[0_-4.52%_-4.52%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185 185">
          <g id="Group 4">
            <g filter="url(#filter0_d_1_726)" id="Rectangle 6">
              <rect fill="var(--fill-0, #222222)" height="177" width="177" />
            </g>
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="10" x1="24" x2="154" y1="38" y2="38" />
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="10" x1="24" x2="154" y1="84" y2="84" />
            <line id="Line 3" stroke="var(--stroke-0, white)" strokeWidth="10" x1="24" x2="154" y1="132" y2="132" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="185" id="filter0_d_1_726" width="185" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_726" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_726" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-0 left-[118px] top-[149px] w-[18px]">
      <div className="absolute inset-[-73.64px_-309.11%_-73.64px_-55.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83.6396 147.279">
          <g id="Group 5">
            <path d={svgPaths.p229ff380} fill="var(--stroke-0, white)" id="Arrow 2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function WriteCaption() {
  return (
    <div className="relative size-full" data-name="Write Caption">
      <Group />
      <Group1 />
      <div className="absolute bg-[#222] h-[967px] left-[451px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] top-[394px] w-[710px]" />
      <div className="absolute bg-[#222] h-[2417px] left-[112px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] top-[1518px] w-[2154px]" />
      <div className="absolute bg-[#222] h-[967px] left-[1286px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] top-[394px] w-[710px]" />
      <div className="absolute bg-[#222] h-[240px] left-[806px] rounded-[100px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] top-[4109px] w-[723px]" data-name="Rounded rectangle" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[1189px] not-italic text-[128px] text-center text-white top-[4133px] tracking-[-1.408px] whitespace-nowrap">button</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[709.5px] not-italic text-[128px] text-center text-white top-[1621px] tracking-[-1.408px] whitespace-nowrap">text input</p>
    </div>
  );
}