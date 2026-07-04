import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — P&A Advocates LLP" },
      { name: "description", content: "Schedule a confidential consultation with the legal team at P&A Advocates LLP." },
      { property: "og:title", content: "Book a Consultation — P&A Advocates LLP" },
      { property: "og:description", content: "Schedule a confidential consultation with the legal team at P&A Advocates LLP." },
      { property: "og:url", content: "https://paadvocatesllp.com/book-consultation" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paadvocatesllp.com/book-consultation" }],
  }),
  component: Book,
});

function Book() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate({ to: "/contact", replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-offwhite">
      <p className="text-brand-green text-sm">Redirecting to contact page…</p>
    </div>
  );
}
