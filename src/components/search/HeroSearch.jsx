import Search from "./Search";

function HeroSearch() {
  return (
    <section className="flex flex-col justify-stretch pt-20 pb-28 bg-violet-200 text-center">
      <h1 className="pb-8 text-slate-950 max-[500px]:text-4xl md:text-6xl">
        How can we help?
      </h1>
      <Search />
    </section>
  );
}

export default HeroSearch;
