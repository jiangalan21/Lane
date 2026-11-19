function Group() {
  return (
    <div className="absolute left-[2170.01px] size-[177px] top-[367px]">
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

export default function Profile() {
  return (
    <div className="drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative size-full" data-name="Profile">
      <Group />
      <div className="absolute left-[890px] size-[620px] top-[483px]">
        <div className="absolute inset-[0_-1.29%_-1.29%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 628 628">
            <g filter="url(#filter0_d_1_756)" id="Ellipse 1">
              <circle cx="310" cy="310" fill="var(--fill-0, #222222)" r="310" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="628" id="filter0_d_1_756" width="628" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_756" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_756" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[1199.5px] not-italic text-[100px] text-center text-white top-[682px] tracking-[-1.1px] whitespace-nowrap">pfp</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[397px] not-italic text-[150px] text-center text-white top-0 tracking-[-1.65px] whitespace-nowrap">Profile</p>
      <div className="absolute bg-[#222] h-[3237px] left-[107px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] top-[1590px] w-[2185px]" />
      <div className="absolute bg-[#d9d9d9] h-[2862px] left-[286px] top-[1770px] w-[1828px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[724.5px] not-italic text-[100px] text-black text-center top-[3242px] tracking-[-1.1px] whitespace-nowrap">posts calendar</p>
    </div>
  );
}