import { createFileRoute } from "@tanstack/react-router";
import heroVilla from "@/assets/hero-villa.jpg";
import propertyTokyo from "@/assets/property-tokyo.jpg";
import propertyDesert from "@/assets/property-desert.jpg";
import propertyCliff from "@/assets/property-cliff.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verschluss — Immersive AR/VR Property Showcase" },
      { name: "description", content: "Experience properties in high-fidelity AR/VR. Virtual tours, 3D floor plans, AR placement, comparison, and site visits." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", title: "Virtual Reality Tours", body: "Hyper-realistic 1:1 scale walkthroughs with spatial audio and interactive materials." },
  { n: "02", title: "AR Model Placement", body: "Project full-scale building models onto physical sites using any mobile device." },
  { n: "03", title: "3D Floor Mapping", body: "Exploded architectural views that reveal the technical soul of every floor plate." },
  { n: "04", title: "Smart Comparison", body: "Data-driven side-by-side analysis of space, light levels, and environmental impact." },
];

const properties = [
  { id: "8821-X", name: "The Obsidian Penthouse", loc: "Shibuya-ku, Tokyo", price: "$12,400,000", sqft: "4,200 SQ FT", img: propertyTokyo, pos: "POS: 35.6595° N" },
  { id: "4402-A", name: "Dune Monolithic Retreat", loc: "Joshua Tree, CA", price: "$4,150,000", sqft: "2,800 SQ FT", img: propertyDesert, pos: "POS: 33.8734° N" },
  { id: "9120-C", name: "The Hollow Pavilion", loc: "Big Sur, California", price: "$8,900,000", sqft: "5,600 SQ FT", img: propertyCliff, pos: "POS: 36.2704° N" },
];

const steps = [
  { n: "I", t: "Browse the catalog", d: "Filter by geography, typology, and immersion assets." },
  { n: "II", t: "Enter the viewport", d: "Launch VR walkthroughs or project the AR model on site." },
  { n: "III", t: "Compare in parallel", d: "Lock cameras between properties to compare space and light." },
  { n: "IV", t: "Schedule the visit", d: "Confirm a remote VR session or an on-site appointment." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="font-extrabold text-xl tracking-tighter uppercase">Verschluss</span>
            <div className="hidden md:flex gap-6 text-[11px] font-mono tracking-widest uppercase text-muted">
              <a href="#properties" className="hover:text-primary transition-colors">Properties</a>
              <a href="#services" className="hover:text-primary transition-colors">Technology</a>
              <a href="#compare" className="hover:text-primary transition-colors">Compare</a>
              <a href="#process" className="hover:text-primary transition-colors">Process</a>
            </div>
          </div>
          <a href="#inquire" className="bg-foreground text-background px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors">Inquire</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-reveal">
            <div className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-6">// Immersive Real Estate Platform</div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              Architecture <span className="text-muted">Beyond</span> The Physical.
            </h1>
            <p className="max-w-md text-muted text-lg leading-relaxed mb-10">
              Experience properties in high-fidelity AR/VR before they even break ground. The ultimate showcase for premium developments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#properties" className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-xs ring-1 ring-primary/20 hover:scale-[1.02] transition-transform">Launch Virtual Tour</a>
              <a href="#services" className="border border-border px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-colors">3D Floor Plans</a>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              {[["120+","Properties"],["38","Cities"],["12K","VR Sessions"]].map(([n,l])=>(
                <div key={l}>
                  <div className="text-2xl font-extrabold tracking-tighter">{n}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 animate-reveal [animation-delay:200ms]">
            <div className="w-full aspect-[4/5] bg-neutral-900 outline outline-1 -outline-offset-1 outline-white/5 relative overflow-hidden">
              <img src={heroVilla} alt="Immersive villa preview" width={800} height={1024} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/50 backdrop-blur px-2 py-1">POS: 34.0522° N</div>
              <div className="absolute top-4 right-4 font-mono text-[10px] bg-primary/90 text-primary-foreground px-2 py-1">● LIVE VR</div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="bg-black/50 backdrop-blur px-2 py-1">Asset // Glass Atrium</span>
                <span className="bg-black/50 backdrop-blur px-2 py-1">04:21:09</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase">Spatial Toolkit</h2>
            <div className="font-mono text-[10px] tracking-widest text-muted uppercase">// 04 Modules</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <div key={s.n} className="bg-background p-10 hover:bg-surface transition-colors">
                <div className="font-mono text-primary text-xs mb-6">{s.n}</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section id="properties" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase italic">Active Viewports</h2>
            <div className="font-mono text-[10px] tracking-widest text-muted uppercase">// Scroll to Explore</div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {properties.map((p, i) => (
              <div key={p.id} className={`group cursor-pointer ${i === 2 ? "md:col-span-2" : ""}`}>
                <div className={`relative overflow-hidden bg-neutral-900 ${i === 2 ? "aspect-[21/9]" : "aspect-video"}`}>
                  <img src={p.img} alt={p.name} width={1216} height={800} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold">Enter AR Environment</span>
                  </div>
                  <span className="absolute bottom-4 left-4 text-[10px] font-mono bg-black/60 px-2 py-1 backdrop-blur">ID: {p.id}</span>
                  <span className="absolute top-4 left-4 text-[10px] font-mono bg-black/60 px-2 py-1 backdrop-blur">{p.pos}</span>
                </div>
                <div className="mt-6 flex justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-bold tracking-tight">{p.name}</h4>
                    <p className="text-xs font-mono text-muted uppercase">{p.loc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold">{p.price}</div>
                    <div className="text-[10px] font-mono text-muted uppercase">{p.sqft}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="font-mono text-[10px] text-primary tracking-[0.3em] uppercase mb-4">// Process</div>
              <h2 className="text-5xl font-extrabold tracking-tighter">From browse to walk-through in four moves.</h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4 text-muted text-lg leading-relaxed">
              A repeatable protocol that turns a casual browser into a private viewer — without flights, brochures, or guesswork.
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {steps.map((s) => (
              <div key={s.n} className="bg-background p-10">
                <div className="font-mono text-primary text-3xl font-bold mb-6">{s.n}</div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">{s.t}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase">Parallel Compare</h2>
            <div className="font-mono text-[10px] tracking-widest text-muted uppercase">// 03 Selected</div>
          </div>
          <div className="border border-border overflow-x-auto">
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-border bg-background/40">
                  <th className="text-left p-4 text-[10px] uppercase tracking-widest text-muted font-medium">Metric</th>
                  {properties.map((p) => (
                    <th key={p.id} className="text-left p-4 text-[10px] uppercase tracking-widest text-muted font-medium">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Location", properties.map(p => p.loc)],
                  ["Footprint", properties.map(p => p.sqft)],
                  ["Price", properties.map(p => p.price)],
                  ["Bedrooms", ["4", "3", "6"]],
                  ["VR Asset", ["8K • Spatial", "4K • Mono", "8K • Spatial"]],
                  ["AR Placement", ["Available", "Available", "Q3 2026"]],
                ].map(([label, vals]) => (
                  <tr key={label as string} className="border-b border-border last:border-0">
                    <td className="p-4 text-[11px] uppercase tracking-widest text-muted">{label}</td>
                    {(vals as string[]).map((v, i) => (
                      <td key={i} className="p-4 text-foreground">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Inquire */}
      <section id="inquire" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl font-extrabold tracking-tighter mb-8 leading-[0.95]">Ready for the <span className="text-primary">next</span> dimension?</h2>
            <div className="space-y-4 text-muted">
              <div className="flex items-center gap-4 text-sm font-mono">
                <div className="size-2 bg-primary rounded-full animate-pulse" />
                Virtual viewing agents available now
              </div>
              <div className="flex items-center gap-4 text-sm font-mono">
                <div className="size-2 bg-foreground/40 rounded-full" />
                Avg. response — under 4 hours
              </div>
              <div className="flex items-center gap-4 text-sm font-mono">
                <div className="size-2 bg-foreground/40 rounded-full" />
                Private studios in London, NYC, Dubai
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name"><input required type="text" className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Arthur Dent" /></Field>
              <Field label="Email Address"><input required type="email" className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="arthur@studio.com" /></Field>
            </div>
            <Field label="Property of Interest">
              <select className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none">
                {properties.map((p) => <option key={p.id} className="bg-background">{p.name}</option>)}
                <option className="bg-background">Custom VR Build</option>
              </select>
            </Field>
            <Field label="Session Type">
              <div className="grid grid-cols-3 gap-3">
                {["Remote VR", "AR Site", "On-Site"].map((t) => (
                  <label key={t} className="border border-border px-3 py-3 text-[11px] font-mono uppercase tracking-widest text-center cursor-pointer hover:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary transition-colors">
                    <input type="radio" name="session" className="hidden" defaultChecked={t === "Remote VR"} />{t}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Notes">
              <textarea rows={3} className="w-full bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Anything we should prepare..." />
            </Field>
            <button type="submit" className="w-full bg-foreground text-background py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-primary-foreground transition-colors">Schedule Site Visit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[9px] text-muted tracking-widest uppercase">© 2026 Verschluss Proptech. Built for Architectural Immersion.</div>
          <div className="flex gap-8 font-mono text-[9px] text-muted tracking-widest uppercase">
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">AR/VR Manual</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-mono uppercase tracking-widest text-muted block">{label}</label>
      {children}
    </div>
  );
}
