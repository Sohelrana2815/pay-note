import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen my-12 border-t border-gray-200" />
    </div>
  );
}
