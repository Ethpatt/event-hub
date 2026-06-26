import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — UK Velo" },
      { name: "description", content: "How UK Velo collects, uses and protects your personal data." },
    ],
  }),
  component: () => (
    <PolicyPage title="Privacy Policy" updated="June 2026">
      <p>UK Velo ("we", "us", "our") is committed to protecting your personal information. This policy explains what we collect and how we use it.</p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details (name, email, phone) provided when you enter an event</li>
        <li>Emergency contact information and any medical details you share</li>
        <li>Payment information processed securely by our payment provider</li>
        <li>Photos taken at events, which may be used in marketing material</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To process your event entry and provide on-the-day support</li>
        <li>To send essential event updates and results</li>
        <li>To send occasional marketing emails (only if you opt in)</li>
      </ul>

      <h2>Sharing</h2>
      <p>We do not sell your data. We share it only with timing partners, our payment processor and emergency services where required.</p>

      <h2>Your rights</h2>
      <p>You may request access, correction or deletion of your data at any time by emailing <a href="mailto:admin@ukvelo.co.uk">admin@ukvelo.co.uk</a>.</p>
    </PolicyPage>
  ),
});
