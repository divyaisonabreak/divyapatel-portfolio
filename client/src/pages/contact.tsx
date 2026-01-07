import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return "Please enter your name";
    }
    if (!formData.email.trim()) {
      return "Please enter your email";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      return "Please enter a subject";
    }
    if (!formData.message.trim()) {
      return "Please enter a message";
    }
    if (formData.message.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      toast({
        title: "Validation Error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with your actual Formspree Form ID
    // Sign up at https://formspree.io/ to create a form and get your ID
    const FORMSPREE_FORM_ID = "YOUR_FORM_ID";

    if (FORMSPREE_FORM_ID === "YOUR_FORM_ID") {
      toast({
        title: "Configuration Missing",
        description: "Please set your Formspree Form ID in contact.tsx to send messages.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error: any) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6" data-testid="text-page-title">
            Get In Touch
          </h1>
          <p className="text-xl text-center text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card data-testid="card-contact-form">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      data-testid="input-subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center" data-testid="text-response-time">
                    I typically respond within 24-48 hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="hover-elevate" data-testid="card-email">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Email</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="divyaspatel913@gmail.com"
                    className="text-lg hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    divyaspatel913@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-location">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Location</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg" data-testid="text-location">Winnipeg, MB</p>
                  <p className="text-muted-foreground" data-testid="text-timezone">Central Time (CT)</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-availability">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Availability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-2" data-testid="text-availability">
                    Currently available for freelance projects and full time positions.
                  </p>
                  <p className="text-muted-foreground" data-testid="text-working-hours">
                    Mon - Fri, 9:00 AM - 6:00 PM CST
                  </p>
                  <p className="text-muted-foreground" data-testid="text-working-hours">
                    Sat - Sun, 8:00 AM - 7:00 PM CST
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-social">
                <CardHeader>
                  <CardTitle className="text-xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4" data-testid="social-links">
                    <a
                      href="https://github.com/divyaisonabreak"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      data-testid="link-github"
                    >
                      <Button size="icon" variant="outline" className="hover-elevate active-elevate-2">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/divyapatel91"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      data-testid="link-linkedin"
                    >
                      <Button size="icon" variant="outline" className="hover-elevate active-elevate-2">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      data-testid="link-instagram"
                    >
                      <Button size="icon" variant="outline" className="hover-elevate active-elevate-2">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
