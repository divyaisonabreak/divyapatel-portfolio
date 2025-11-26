import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { format } from "date-fns";

export default function Blog() {
  const { data: posts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6" data-testid="text-page-title">
            Blog
          </h1>
          <p className="text-xl text-center text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
            Thoughts, tutorials, and insights on web development, design, and technology
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20" data-testid="empty-state">
              <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="blog-grid">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="hover-elevate h-full" data-testid={`card-post-${post.slug}`}>
                    {post.coverImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.published && format(new Date(post.published), "MMM d, yyyy")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          5 min read
                        </div>
                      </div>
                      <h2 className="text-2xl font-semibold mb-3" data-testid={`text-title-${post.slug}`}>
                        {post.title}
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground font-serif leading-relaxed mb-4" data-testid={`text-excerpt-${post.slug}`}>
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
