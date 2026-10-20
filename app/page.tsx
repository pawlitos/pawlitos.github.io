import ContactForm from "./_components/contact-form";

export default function App() {
  return (
    <div>
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-10 border-b border-line bg-white/70 backdrop-blur-lg backdrop-saturate-150">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-extrabold tracking-tight">
            pawel<span className="text-primary">.dev</span>
          </a>
          <ul className="hidden gap-7 text-[0.95rem] font-medium text-muted md:flex">
            <li>
              <a href="#o-mnie" className="hover:text-primary">
                O mnie
              </a>
            </li>
            <li>
              <a href="#projekty" className="hover:text-primary">
                Projekty
              </a>
            </li>
            <li>
              <a href="#kontakt" className="hover:text-primary">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <span className="mb-6 inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
            Dostępny do nowych projektów
          </span>
          <h1 className="mb-5 max-w-[16ch] text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.08] font-extrabold tracking-tighter">
            Tworzę <em className="not-italic text-primary">interfejsy</em>,
            które działają i dobrze wyglądają.
          </h1>
          <p className="mb-9 max-w-[56ch] text-xl text-muted">
            Software developer z pasją do czystego kodu, wydajnych aplikacji
            webowych i przemyślanych interfejsów. Zamieniam pomysły w produkty
            gotowe na produkcję.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projekty"
              className="rounded-[10px] border-[1.5px] border-primary bg-primary px-5.5 py-3 text-[0.95rem] font-semibold text-white transition hover:border-primary-dark hover:bg-primary-dark"
            >
              Zobacz projekty
            </a>
            <a
              href="#kontakt"
              className="rounded-[10px] border-[1.5px] border-primary px-5.5 py-3 text-[0.95rem] font-semibold text-primary transition hover:bg-primary/10"
            >
              Skontaktuj się
            </a>
          </div>
        </div>

        <section id="o-mnie" className="bg-surface py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight after:mt-3 after:block after:h-1 after:w-12 after:rounded-sm after:bg-primary">
              O mnie
            </h2>
            <p className="mb-10 max-w-[60ch] text-muted">
              Krótko o tym, czym się zajmuję i jak pracuję.
            </p>
            <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
              <div className="space-y-4 text-muted">
                <p>
                  Od kilku lat projektuję i rozwijam aplikacje webowe — od
                  prostych stron po rozbudowane systemy. Lubię rozumieć,
                  dlaczego coś działa, a nie tylko jak to uruchomić, dlatego
                  stawiam na rozwiązania proporcjonalne do problemu.
                </p>
                <p>
                  Poza pracą eksperymentuję z nowymi technologiami, buduję
                  narzędzia CLI i dzielę się wiedzą z innymi programistami.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-ink">
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    React
                  </span>
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    Next.js
                  </span>
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    Node.js
                  </span>
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    PostgreSQL
                  </span>
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    Docker
                  </span>
                  <span className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                    Git
                  </span>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-line bg-white px-6 py-5">
                  <b className="block text-3xl tracking-tight text-primary">
                    5+
                  </b>
                  <span className="text-[0.92rem] text-muted">
                    lat doświadczenia
                  </span>
                </div>
                <div className="rounded-2xl border border-line bg-white px-6 py-5">
                  <b className="block text-3xl tracking-tight text-primary">
                    30+
                  </b>
                  <span className="text-[0.92rem] text-muted">
                    zrealizowanych projektów
                  </span>
                </div>
                <div className="rounded-2xl border border-line bg-white px-6 py-5">
                  <b className="block text-3xl tracking-tight text-primary">
                    100%
                  </b>
                  <span className="text-[0.92rem] text-muted">
                    zaangażowania
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projekty" className="py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight after:mt-3 after:block after:h-1 after:w-12 after:rounded-sm after:bg-primary">
              Projekty
            </h2>
            <p className="mb-10 max-w-[60ch] text-muted">
              Wybrane prace, z których jestem najbardziej zadowolony.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6">
              <article className="flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/15">
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  Panel analityczny
                </h3>
                <p className="mb-5 flex-1 text-muted">
                  Dashboard do wizualizacji danych w czasie rzeczywistym z
                  filtrowaniem i eksportem raportów.
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5 text-xs font-semibold text-primary">
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    React
                  </span>
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    TypeScript
                  </span>
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    D3
                  </span>
                </div>
                <a
                  href="#"
                  className="font-semibold text-primary hover:underline"
                >
                  Zobacz projekt →
                </a>
              </article>
              <article className="flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/15">
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  API do zarządzania zadaniami
                </h3>
                <p className="mb-5 flex-1 text-muted">
                  Skalowalne REST API z uwierzytelnianiem, kolejkami zadań i
                  pełną dokumentacją OpenAPI.
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5 text-xs font-semibold text-primary">
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    Node.js
                  </span>
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    PostgreSQL
                  </span>
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    Docker
                  </span>
                </div>
                <a
                  href="#"
                  className="font-semibold text-primary hover:underline"
                >
                  Zobacz projekt →
                </a>
              </article>
              <article className="flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/15">
                <h3 className="mb-2 text-xl font-semibold tracking-tight">
                  Narzędzie CLI
                </h3>
                <p className="mb-5 flex-1 text-muted">
                  Aplikacja terminalowa automatyzująca codzienne zadania
                  programistów, rozwijana jako open source.
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5 text-xs font-semibold text-primary">
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    Rust
                  </span>
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    CLI
                  </span>
                  <span className="rounded-md bg-primary/10 px-2.5 py-0.5">
                    Open source
                  </span>
                </div>
                <a
                  href="#"
                  className="font-semibold text-primary hover:underline"
                >
                  Zobacz projekt →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-primary py-16 text-white md:py-24">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="mb-8 text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.02] font-normal tracking-tighter">
                Porozmawiajmy o współpracy.
              </h2>
              <p className="max-w-[40ch] text-lg text-white/70">
                Szukasz frontend developera do zespołu lub konkretnego produktu?
                Napisz — chętnie poznam szczegóły.
              </p>
              <div className="mt-8 flex gap-6 font-medium text-white">
                <a
                  href="#"
                  className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-primary pt-8 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] text-sm text-white/70">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6">
          <p>© 2026 Paweł Staś. Frontend Developer.</p>
        </div>
      </footer>
    </div>
  );
}
