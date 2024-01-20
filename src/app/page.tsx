import Link from "next/link";

interface ResponseApiInterface{
  id: string;
  title: string;
  description: string;
}

export default async function Home() {
  const url = process.env.URL_API

  const response = await fetch(`${url}`)
  const data = await response.json()

  return (
    <main>
      <section className="border-[1px] border-zinc-800 rounded-lg w-1/3 mx-80 my-5 px-5 py-4">
          <div className="py-2">
            <h2 className="text-3xl tracking-wide font-medium text-blue-600">Posts em alta</h2>
          </div>
            {data.map((item: ResponseApiInterface)=>(
              <div key={item.id} className="border-b-[1px] border-zinc-950">
                <span className="flex items-center my-4">
                  <p className="font-bold text-4xl px-2">{item.id}</p>
                  <Link href={`/posts/${item.id}`} className="text-xl font-medium">{item.title}</Link>
                </span>
              </div>
            ))}
      </section>
    </main>
  )
}
