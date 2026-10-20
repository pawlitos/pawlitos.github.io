export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary pt-8 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] text-sm text-white/70">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6">
        <p>© 2026 Paweł Staś. Frontend Developer.</p>
      </div>
    </footer>
  );
}
