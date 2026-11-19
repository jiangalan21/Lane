function Group() {
  return (
    <div className="absolute contents left-[45px] top-[3464px]">
      <div className="absolute bg-[#222] left-[82px] shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] size-[177px] top-[3464px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[134.5px] not-italic text-[50px] text-center text-white top-[3545px] tracking-[-0.55px] whitespace-nowrap">favorite</p>
    </div>
  );
}

export default function PortraitPost() {
  return (
    <div className="relative size-full" data-name="Portrait Post">
      <Group />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[1677px] not-italic text-[128px] text-center text-white top-[3449px] tracking-[-1.408px] whitespace-nowrap">[ Title / Mood / Emoji ]</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[118px] not-italic text-[128px] text-white top-[3784px] tracking-[-1.408px] whitespace-nowrap">
        <p className="leading-[1.5] mb-0 whitespace-pre">text text</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">{`text text text `}</p>
        <p className="leading-[1.5] mb-0 whitespace-pre">​</p>
        <p className="leading-[1.5] whitespace-pre">{` `}</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.5] left-[259px] not-italic text-[128px] text-center text-white top-[376px] tracking-[-1.408px] whitespace-nowrap">[ Date ]</p>
      <div className="absolute bg-[#222] h-[2829px] left-0 shadow-[4px_4px_4px_0px_rgba(255,255,255,0.25)] top-[586px] w-[2399px]" />
    </div>
  );
}