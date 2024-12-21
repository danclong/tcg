import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-5">Dashboard.</h1>
      <p className="text-lg mb-5">Select your collection to get started.</p>

      <Link className="btn bg-orange-600 p-2 text-center" href="/sv3pt5">sv3pt5</Link>
    </main>
  );
}
