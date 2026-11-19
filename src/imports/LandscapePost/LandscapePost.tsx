function Group() {
  return (
    <div className="absolute contents left-[53px] top-[2597px]">
      <div className="absolute bg-[#222] left-[90px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] size-[177px] top-[2597px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[142.5px] not-italic text-[50px] text-center text-white top-[2678px] tracking-[-0.55px] whitespace-nowrap">favorite</p>
    </div>
  );
}

export default function LandscapePost() {
  return (
    <div className="relative size-full" data-name="Landscape Post">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[1685.5px] not-italic text-[128px] text-center text-white top-[2582px] tracking-[-1.408px] whitespace-nowrap">[Title / Mood / Emoji ]</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[calc(50%-1062.63px)] not-italic text-[0px] text-white top-[2873px] tracking-[-1.408px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 text-[128px] whitespace-pre">[ Question text text? ]</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 whitespace-pre">
          <span className="leading-[1.5] text-[100px]">{`   text text  text text text`}</span>
          <span className="leading-[1.5] text-[128px]">{`  `}</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[128px] whitespace-pre">[ Question text text text text text? ]</p>
        <p className="mb-0 text-[100px] whitespace-pre">
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic">{`   text text text text text text text text`}</span>
          <span className="leading-[1.5]">{` `}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal mb-0 whitespace-pre">
          <span className="leading-[1.5] text-[100px]">{`   text text text text  `}</span>
          <span className="leading-[1.5] text-[128px]">{` `}</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[128px] whitespace-pre">{`[ Question text text text text? ] `}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] mb-0 text-[100px] whitespace-pre">{`   text text text `}</p>
        <p className="leading-[1.5] text-[128px] whitespace-pre">{` `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[267px] not-italic text-[128px] text-center text-white top-[376px] tracking-[-1.408px] whitespace-nowrap">[ Date ]</p>
      <div className="absolute flex h-[1951px] items-center justify-center left-0 top-[568px] w-[2399px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#222] h-[2399px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] w-[1951px]" />
        </div>
      </div>
      <Group />
    </div>
  );
}