export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-12 bg-[#666666]">
      <div className="w-72">
        <p className="bg-white text-black">White</p>
        <p className="bg-gray01 text-black">Gray 01</p>
        <p className="bg-gray02 text-black">Gray 02</p>
        <p className="bg-gray03 text-black">Gray 03</p>
        <p className="bg-gray04 text-black">Gray 04</p>
        <p className="bg-gray05 text-black">Gray 05</p>
        <p className="bg-gray06 text-black">Gray 06</p>
        <p className="bg-gray07 text-white">Gray 07</p>
      </div>

      <div className="w-72">
        <p className="bg-red01 text-black">Red 01</p>
        <p className="bg-red02 text-black">Red 02</p>
        <p className="bg-red03 text-black">Red 03</p>

        <div className="h-6" />

        <p className="bg-yellow01 text-black">Yellow 01</p>
        <p className="bg-yellow02 text-black">Yellow 02</p>
      </div>

      <div className="w-72">
        <p className="bg-ashblue01 text-black">Ashblue 01</p>
        <p className="bg-ashblue02 text-black">Ashblue 02</p>
        <p className="bg-overlay text-white">Overlay</p>

        <div className="h-6" />

        <p className="bg-mint01 text-black">Mint 01</p>
        <p className="bg-mint02 text-black">Mint 02</p>
        <p className="bg-mint03 text-black">Mint 03</p>
      </div>
    </div>
  );
}
