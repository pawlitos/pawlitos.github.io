"use client";

import { type SubmitEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form id="kontakt-form" className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="imie" className="sr-only">
          Imię
        </label>
        <input
          id="imie"
          name="imie"
          type="text"
          required
          placeholder="Jak się nazywasz?"
          className="w-full border-0 border-b border-white/25 bg-transparent py-3 text-lg text-white placeholder:text-white/60 focus:border-white focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="twoj@email.pl"
          className="w-full border-0 border-b border-white/25 bg-transparent py-3 text-lg text-white placeholder:text-white/60 focus:border-white focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="wiadomosc" className="sr-only">
          Wiadomość
        </label>
        <textarea
          id="wiadomosc"
          name="wiadomosc"
          required
          placeholder="Napisz kilka słów o projekcie…"
          className="w-full resize-y border-0 border-b border-white/25 bg-transparent py-3 text-lg text-white placeholder:text-white/60 focus:border-white focus:outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/85 cursor-pointer"
      >
        Wyślij wiadomość
      </button>
      <p role="status" className="text-sm text-white/70">
        {sent && "Dziękuję — wiadomość została wysłana."}
      </p>
    </form>
  );
}
