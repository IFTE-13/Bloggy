import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ImageIcon } from "lucide-react"
import { fetchPages } from "@/lib/notion"

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).replace(/\s/g, ' ');
};

export default async function Home() {
  const posts = await fetchPages()

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12 min-h-[calc(100vh-7.05rem)]">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">My Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exploring ideas, sharing insights, and documenting my journey
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.results.map((post: any) => (
          <Link 
            href={`/${post.properties.slug.rich_text[0].plain_text}`} 
            key={post.id}
            className="group"
          >
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                {post.cover ? (
                  <Image
                    src={post.cover.external.url}
                    alt={post.properties.Title.title[0].plain_text}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                )}
              </div>
              
              <CardHeader className="space-y-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.properties.Title.title[0].plain_text}
                  </CardTitle>
                  {post.properties.Description && (
                    <CardDescription className="text-muted-foreground line-clamp-2">
                      {post.properties.Description.rich_text[0].plain_text}
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="mt-auto space-y-4">
                {post.properties.Tags && (
                  <div className="flex gap-2 flex-wrap">
                    {post.properties.Tags.multi_select.map((tag: any) => (
                      <Badge 
                        key={tag.id} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {post.properties.Date.created_time && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {formatDate(post.properties.Date.created_time)}
                  </div>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}