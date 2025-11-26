import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6" data-testid="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-testid="link-github"
            >
              <Button size="icon" variant="ghost" className="hover-elevate active-elevate-2">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Button size="icon" variant="ghost" className="hover-elevate active-elevate-2">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <Button size="icon" variant="ghost" className="hover-elevate active-elevate-2">
                <Twitter className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              data-testid="link-email"
            >
              <Button size="icon" variant="ghost" className="hover-elevate active-elevate-2">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover-elevate active-elevate-2"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
