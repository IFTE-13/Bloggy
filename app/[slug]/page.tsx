import NotionPageWrapper from '@/components/NotionPageWrapper';
import { fetchBySlug, fetchPageBlocks } from '@/lib/notion';
import { slugToTitle } from '@/lib/utils';

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await fetchBySlug(params.slug);
  const title = slugToTitle(params.slug);
  
  if (!page) {
    return <div>Page not found</div>;
  }

  const blocks = await fetchPageBlocks(page.id);

  return (
    <div className="py-12">
      <NotionPageWrapper 
        page={page}
        blocks={blocks}
        title={title}
      />
    </div>
  );
}