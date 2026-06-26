import type { ReactNode } from "react";

export function PolicyPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <article className="container-page py-16 max-w-3xl">
      <p className="text-xs uppercase tracking-widest text-primary font-semibold">Legal</p>
      <h1 className="text-4xl md:text-5xl mt-2">{title}</h1>
      <p className="text-sm text-muted-foreground mt-2">Last updated: {updated}</p>
      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-foreground/85 [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-2 [&_h2]:text-secondary [&_p]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline">
        {children}
      </div>
    </article>
  );
}
