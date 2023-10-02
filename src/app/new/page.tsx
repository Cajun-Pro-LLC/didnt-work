import GeneratedLink from "@/app/new/generated-link";
import { sanitizeProblem } from "@/app/util";
import { redirect } from "next/navigation";

interface SearchParams {
  problem: string | string[];
}

export default function New({ searchParams }: { searchParams: SearchParams }) {
  const hasProblem = 'problem' in searchParams;
  const problem = sanitizeProblem(searchParams.problem);

  const handleSubmit = async (formData: FormData) => {
    'use server';
    const text = formData.get('text');
    console.log(text);
    redirect(`/new?problem=${text}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-6 px-4">
      <form action={handleSubmit} className="w-full max-w-md">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium leading-6 ">
            Issue prompt
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="text"
              id="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              placeholder="Server components are hard?"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-2 rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Generate Link
        </button>

      </form>
      {hasProblem && <GeneratedLink problem={problem} />}
    </main>
  )
}
