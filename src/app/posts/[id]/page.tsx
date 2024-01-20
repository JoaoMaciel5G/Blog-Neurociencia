const url = process.env.URL_API;

export async function generateStaticParams() {
  const response = await fetch(`${url}`);
  const paths = await response.json();

  return paths.map((articles: {id: string, title: string, description: string;}) => ({
    id: articles.id.toString(),
  }));
}

async function getDescriptionArticle(id: string) {
    const response = await fetch(`${url}/${id}`);
    return await response.json(); 
}

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const data = await getDescriptionArticle(id)

    return (
        <section className="mx-80">
            <div className="my-8">
                <h2 className="text-5xl font-semibold">{data[0].title}</h2>
            </div>
            <div>
                <p className="whitespace-pre-wrap text-xl" dangerouslySetInnerHTML={{ __html: data[0].description }}/>
            </div>
        </section>
    );
}