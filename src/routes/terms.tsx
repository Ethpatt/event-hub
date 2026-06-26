import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — UK Velo" },
      { name: "description", content: "Terms and conditions for entry into UK Velo cycling sportives." },
    ],
  }),
  component: () => (
    <PolicyPage title="Terms & Conditions" updated="June 2026">
      <p>By entering a UK Velo event you agree to the following terms.</p>

      <h2>Entry</h2>
      <p>Entries are personal and non-transferable. You must be 18 or over to enter (or 16+ with parental consent). All riders must wear an approved cycling helmet and ensure their bike is roadworthy.</p>

      <h2>Refunds and transfers</h2>
      <ul>
        <li>Refunds (less a £5 admin fee) are available up to 60 days before the event</li>
        <li>Between 30–60 days you may transfer your entry to another rider or another UK Velo event</li>
        <li>No refunds or transfers are available within 30 days of the event</li>
      </ul>

      <h2>Cancellation by UK Velo</h2>
      <p>If we cancel an event due to circumstances within our control we will offer a full refund or transfer. If cancellation is due to severe weather, government restrictions or other force majeure events, refunds may not be possible.</p>

      <h2>Liability</h2>
      <p>Cycling on the open road carries risks. You participate at your own risk. UK Velo is not liable for personal injury, loss or damage except where caused by our negligence.</p>

      <h2>Rules of the road</h2>
      <p>All UK Velo events take place on open roads. You must obey the Highway Code at all times. Marshals are there to guide, not to stop traffic.</p>
    </PolicyPage>
  ),
});
