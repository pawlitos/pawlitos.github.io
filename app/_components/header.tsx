export default function Header() {
  return (
    <header className="fixed inset-x-0 top-[calc(env(safe-area-inset-top,0px)+1rem)] z-10 mx-auto w-full max-w-5xl px-6">
      <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/70 bg-white/40 px-5 shadow-header-floating backdrop-blur-lg backdrop-saturate-150">
        <a href="#top" className="font-extrabold tracking-tight">
          pawlitos<span className="text-primary">.github.io</span>
        </a>
        <ul className="-mr-3 hidden gap-1 text-[0.95rem] font-medium text-muted md:flex">
          <li>
            <a
              href="#o-mnie"
              className="rounded-2xl px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              O mnie
            </a>
          </li>
          <li>
            <a
              href="#projekty"
              className="rounded-2xl px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Projekty
            </a>
          </li>
          <li>
            <a
              href="#kontakt"
              className="rounded-2xl px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
