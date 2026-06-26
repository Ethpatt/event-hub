import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display text-2xl tracking-wider">
            SPORTIVE<span className="text-primary">.</span>
          </div>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            Friendly, fully supported UK cycling sportives designed to be enjoyed.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-primary mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/events" className="hover:text-primary">Cycle Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-primary mb-3">Policies</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
            <li><Link to="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-primary mb-3">Connect</h4>
          <a href="mailto:admin@ukvelo.co.uk" className="flex items-center gap-2 text-sm text-white/80 hover:text-primary">
            <Mail className="size-4" /> admin@ukvelo.co.uk
          </a>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="size-9 grid place-items-center rounded-full border border-white/20 hover:border-primary hover:text-primary"><Instagram className="size-4" /></a>
            <a href="#" aria-label="Facebook" className="size-9 grid place-items-center rounded-full border border-white/20 hover:border-primary hover:text-primary"><Facebook className="size-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} UK Velo. All rights reserved.</p>
          <p>Friendly UK Cycle Sportives</p>
        </div>
      </div>
    </footer>
  );
}
