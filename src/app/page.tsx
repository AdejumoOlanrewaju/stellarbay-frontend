import Image from "next/image";
import Hero from "./components/Hero";
import TrustCategory from "./components/TrustCategory";
import FeaturedCategory from "./components/FeaturedCategory";
import FeaturedPosts from "./components/FeaturedPosts";
import CollectionShowcase from "./components/CollectionShowcase";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div className="font-sans   min-h-screen ">
      <main className="w-full flex flex-col row-start-2 items-center sm:items-start">
        <Hero />
        <TrustCategory />
        <div className="sections-wrapper w-full gap-16 justify-items-center">
          <FeaturedCategory/>
          <FeaturedPosts/>
          <CollectionShowcase/>
          <Newsletter/>
        </div>
      </main>
    </div>
  );
}
