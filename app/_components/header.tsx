export default function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-10 border-b border-line bg-white/70 backdrop-blur-lg backdrop-saturate-150">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-extrabold tracking-tight">
          pawlitos<span className="text-primary">.github.io</span>
        </a>
        <ul className="-mr-3 hidden gap-1 text-[0.95rem] font-medium text-muted md:flex">
          <li>
            <a
              href="#o-mnie"
              className="rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              O mnie
            </a>
          </li>
          <li>
            <a
              href="#projekty"
              className="rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Projekty
            </a>
          </li>
          <li>
            <a
              href="#kontakt"
              className="rounded-md px-3 py-1.5 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
