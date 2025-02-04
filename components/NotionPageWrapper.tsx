import { PageObjectResponse, BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import NotionPage from "./NotionPage";

interface NotionPageWrapperProps {
  page: PageObjectResponse;
  blocks: BlockObjectResponse[];
  title: string;
}

const NotionPageWrapper: React.FC<NotionPageWrapperProps> = ({ page, blocks, title }) => {
  // Get cover image URL from page
  const getCoverImage = () => {
    if (!page.cover) return null;
    
    if (page.cover.type === 'external') {
      return page.cover.external.url;
    }
    
    if (page.cover.type === 'file') {
      return page.cover.file.url;
    }
    
    return null;
  };

  const coverImage = getCoverImage();

  return (
    <div className="max-w-4xl mx-auto">
      {coverImage && (
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <Image
            src={coverImage}
            alt={`Cover image for ${title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <NotionPage blocks={blocks} />
      </CardContent>
    </div>
  );
};

export default NotionPageWrapper;