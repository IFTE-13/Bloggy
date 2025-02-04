import NotionPageWrapper from '@/components/NotionPageWrapper';
import { fetchBySlug, fetchPageBlocks } from '@/lib/notion';
import { slugToTitle } from '@/lib/utils';

export default async function Page({ params }: { params : Promise<{ slug : string}>}) {
  const slug = (await params).slug
  const page = await fetchBySlug(slug);
  const title = await slugToTitle(slug);
  
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
