import { Suspense } from "react";

// Obtains both the Fetching component and its Skeleton
import Name from "@/components/Name";
import {NameSkeleton} from "@/components/Skeleton";

// Obtains both the Fetching component and its Skeleton
import Height from "@/components/Height";
import {HeightSkeleton} from "@/components/Skeleton";

export default function Home() {
  return (
    <main className="border border-black h-screen flex flex-col justify-center text-center items-center">
      
      <h1 className='text-red-500'>Name:</h1>

      {/* The suspense block makes the inside component asyncronous, awaiting for its content to be fully loaded. While doing so, it shows a placeholder under the property of "fallback", which is the corresponding skeleton */}
      <Suspense fallback={<NameSkeleton />}>
        <Name />
      </Suspense>

      <h1 className='text-red-500'>Height:</h1>

      <Suspense fallback={<HeightSkeleton />}>
        <Height />
      </Suspense>
    </main>

  );
}