import { Suspense } from "react";

// Obtains both the Fetching component and its Skeleton
import Name from "@/components/Name";
import Height from "@/components/Height";
import { NameSkeleton, HeightSkeleton } from "@/components/Skeleton";

export default function Home() {
  const NUMBER = Math.floor(Math.random() * 20) + 1;
  const API_URL = `https://swapi.dev/api/people/${NUMBER}`;

  return (
    <main className="border border-black h-screen flex flex-col justify-center text-center items-center">
      
      <h1 className='text-red-500'>StarWars character&apos;s name:</h1>

      {/* The suspense block makes the inside component asyncronous, awaiting for its content to be fully loaded. While doing so, it shows a placeholder under the property of "fallback", which is the corresponding skeleton */}
      <Suspense fallback={<NameSkeleton />}>
        <Name API_URL={API_URL} />
      </Suspense>

      <h1 className='text-red-500'>Character&apos;s height:</h1>

      <Suspense fallback={<HeightSkeleton />}>
        <Height API_URL={API_URL}/>
      </Suspense>
    </main>

  );
}