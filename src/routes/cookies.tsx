import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy" },
      { name: "description", content: "How this website uses cookies." },
    ],
  }),
  component: () => (
    <PolicyPage title="Cookie Policy" updated="June 2026">
      <p>This website uses a small number of cookies to make it work and to help us understand how visitors use it.</p>

      <h2>Essential cookies</h2>
      <p>Required for the site to function — for example, remembering items in your cart during entry.</p>

      <h2>Analytics cookies</h2>
      <p>We use privacy-friendly analytics to count visits and see which pages are popular. These cookies don't identify you personally.</p>

      <h2>Managing cookies</h2>
      <p>You can control cookies in your browser settings. Blocking essential cookies may stop parts of the site from working.</p>

      <h2>Questions</h2>
      <p>Email <a href="mailto:hello@example.com">hello@example.com</a> if you'd like to know more.</p>
    </PolicyPage>
  ),
});
