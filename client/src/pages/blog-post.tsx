import { useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { format } from "date-fns";
import { Link } from "wouter";

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${slug}`);
      if (!response.ok) throw new Error("Post not found");
      return response.json();
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-20 flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 md:pt-24 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Back Button */}
        <Link href="/blog">
          <Button variant="ghost" className="mb-8 hover-elevate active-elevate-2" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              data-testid="img-cover"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-title">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {post.published && (
                <span data-testid="text-date">{format(new Date(post.published), "MMMM d, yyyy")}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>5 min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" data-testid={`badge-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Post Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none font-serif"
          data-testid="content"
        >
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t">
          <Link href="/blog">
            <Button variant="outline" className="hover-elevate active-elevate-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Posts
            </Button>
          </Link>
        </footer>
      </article>
    </div>
  );
}
