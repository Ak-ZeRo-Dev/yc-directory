import { auth } from "@/auth";
import PinkContainer from "@/components/home/PinkSection";
import StartupsSection from "@/components/home/StartupsSection";
import { SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const session = await auth();

  return (
    <>
      <PinkContainer query={query} />
      <StartupsSection query={query} />
      <SanityLive />
    </>
  );
}
