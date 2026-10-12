//import Image from "next/image";
import Arrow from "./_components/arrow";
import ContactForm from "./_components/contact-form";
import ProjectPreview from "./_components/project-preview";
import { projects } from "./_constants/projects";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#17221d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a className="font-semibold tracking-[-0.03em]" href="#top">
          pawel.dev
        </a>
        <nav className="flex items-center gap-5 text-xs font-medium sm:gap-8 sm:text-sm">
          <a className="nav-link" href="#o-mnie">
            O mnie
          </a>
          <a className="nav-link" href="#projekty">
            Projekty
          </a>
          <a className="nav-link" href="#kontakt">
            Kontakt
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl content-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-9">
            <h1 className="max-w-5xl text-[clamp(3.5rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Buduję dopracowane
              <span className="text-[#668173]"> interfejsy.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-3">
            <p className="text-base leading-relaxed text-[#5f6e66]">
              Frontend developer skupiony na React, TypeScript i jakości
              doświadczeń użytkownika.
            </p>
            <a className="button-primary group" href="#projekty">
              Zobacz projekty
              <Arrow className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="border-t border-[#d8ddd9] pt-5 lg:col-span-12">
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-[#718078]">
              <span>React / Next.js</span>
              <span>TypeScript</span>
              <span>Design systems</span>
              <span>Accessibility</span>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8ddd9] bg-white" id="o-mnie">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-10">
            <p className="section-label lg:col-span-3">O mnie</p>
            <div className="lg:col-span-8">
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl">
                Łączę czysty kod z uważnością na detale produktu.
              </h2>
              <div className="mt-12 grid gap-10 border-t border-[#d8ddd9] pt-8 sm:grid-cols-2">
                <p className="text-lg leading-relaxed text-[#34473e]">
                  Projektuję i implementuję szybkie, dostępne aplikacje
                  internetowe. Dobrze czuję się zarówno przy budowaniu produktu
                  od zera, jak i rozwijaniu istniejącego systemu.
                </p>
                <div className="space-y-6 text-sm leading-relaxed text-[#718078]">
                  <p>
                    Lubię proste rozwiązania, przewidywalne API i komponenty,
                    które łatwo utrzymać. Współpracuję blisko z designerami i
                    zespołami produktowymi.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Tailwind CSS",
                      "Git",
                    ].map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
          id="projekty"
        >
          <div className="mb-14 grid gap-6 lg:grid-cols-12">
            <p className="section-label lg:col-span-3">Wybrane projekty</p>
            <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl lg:col-span-8">
              Kilka rzeczy, które zbudowałem.
            </h2>
          </div>
          <div className="divide-y divide-[#d8ddd9] border-y border-[#d8ddd9]">
            {projects.map((project) => (
              <article
                className="grid gap-8 py-12 lg:grid-cols-12 lg:items-center lg:py-16"
                key={project.title}
              >
                <div className="lg:col-span-5">
                  <span className="mb-8 block font-mono text-xs text-[#849088]">
                    {project.number}
                  </span>
                  <h3 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-[#718078]">
                    {project.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <a className="project-link group mt-8" href="#kontakt">
                    Zobacz case study
                    <Arrow className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="lg:col-span-7">
                  <ProjectPreview type={project.type} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#17221d] text-[#eef2ef]" id="kontakt">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-10">
            <div className="lg:col-span-5">
              <p className="section-label mb-8 text-white/45">Kontakt</p>
              <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-7xl">
                Porozmawiajmy o współpracy.
              </h2>
              <p className="mt-8 max-w-sm leading-relaxed text-white/55">
                Szukasz frontend developera do zespołu lub konkretnego produktu?
                Napisz — chętnie poznam szczegóły.
              </p>
              {/* <a
                className="mt-8 inline-block border-b border-white/30 pb-1"
                href="mailto:hello@pawel.dev"
              >
                hello@pawel.dev
              </a> */}
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#17221d] px-5 py-7 text-white/40 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Paweł Staś. Frontend Developer.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="#top">
              GitHub
            </a>
            <a className="transition hover:text-white" href="#top">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
