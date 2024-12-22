import Link from "next/link";
import Image from "next/image";

export default function Home() {

  const collections = [
    { name: 'sv3pt5', image: '/assets/images/sv3pt5.png' },
    { name: '#', image: '' },
    { name: '#', image: '' },
    { name: '#', image: '' },
    { name: '#', image: '' },
    { name: '#', image: '' },
  ]

  return (
    <main>
      <p className="text-md text-center mb-10 pt-10">Select a collection to get started.</p>

      <div className="collection-grid flex flex-wrap justify-center items-center gap-4">
        {collections.map((collection, index) => (
          <Link key={index} className="flex justify-center items-center collection-grid-item" href={`/${collection.name}`}>
            {collection.image ? <Image src={collection.image} alt={collection.name} width={220} height={167} priority /> : <div className="collection-placeholder bg-white opacity-60 border border-solid border-pink-300 rounded-md"></div>}
          </Link>
        ))}
      </div>
    </main>
  );
}
