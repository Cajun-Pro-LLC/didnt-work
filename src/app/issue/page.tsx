import { sanitizeProblem } from "@/app/util";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    problem: string | string[];
  }
}

export async function generateMetadata({ searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const problem = sanitizeProblem(searchParams.problem);

  const p = await parent;
  const description = problem ? `${problem}?` : "Oh? This is why";

  const url = problem.length > 0
    ? `https://didntwork.dev/issue?problem=${problem.replace(/ /g, "+")}`
    : "https://didntwork.dev"

  return {
    metadataBase: p.metadataBase,
    title: "Didn’t Work Solution",
    description,
    openGraph: {
      title: p.openGraph?.title,
      description,
      url,
      siteName: p.openGraph?.siteName,
      images: p.openGraph?.images,
      locale: p.openGraph?.locale,
    }
  }
}

export default function Issue({ searchParams }: Props) {
  const problem = sanitizeProblem(searchParams.problem);

  if (!problem) {
    redirect("/");
  }

  const sizeMap = {
    20: "text-[4rem] md:text-[9rem] lg:text-[9rem] xl:text-[12rem]",
    90: "text-[2rem] md:text-[4rem] lg:text-[4rem] xl:text-[6rem]",
    91: "text-[1rem]",
  }

  const textSize = problem.length <= 20 ? 20 : problem.length <= 90 ? 90 : 91;

  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-evenly px-4">
      <span className={`font-extrabold ${sizeMap[textSize]} max-w-7xl`}>
        {problem}?
      </span>
      <span className="font-extrabold text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[15rem] max-w-7xl">
        Skill Issue
      </span>
    </main>
  )
}
