type PageProps = {
    params: Promise<{
      slug: string[];
      store: string;
    }>;
  };

export default async function Page(props: PageProps) {
    const params = await props.params;

    const { store, slug } = params;

    return (
        <div>
            <h1>{store}</h1>
            <span>{slug.join('-')}</span>
        </div>
    );
}

// Render using ISR
export async function generateStaticParams() {
    return [];
}
