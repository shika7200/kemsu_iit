
const Menu: React.FC = () => (
  <nav className="flex gap-5 self-center pl-20 mt-6 rounded-2xl bg-stone-300">
    <div className="flex-auto my-auto text-5xl font-semibold text-center text-black">Меню</div>
    <div className="flex flex-col px-4 py-5 rounded-2xl bg-stone-300 h-[75px] w-[75px]">
      <div className="shrink-0 shadow-sm bg-blue-700 bg-opacity-50 h-[5px] rounded-[40px]" />
      <div className="shrink-0 mt-2.5 shadow-sm bg-blue-700 bg-opacity-50 h-[5px] rounded-[40px]" />
      <div className="shrink-0 mt-2.5 shadow-sm bg-blue-700 bg-opacity-50 h-[5px] rounded-[40px]" />
    </div>
  </nav>
);

export default Menu;
