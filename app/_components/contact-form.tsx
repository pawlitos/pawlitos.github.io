"use client";

import { type FormEvent, useState } from "react";
import Arrow from "./arrow";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      className="space-y-8 lg:col-span-6 lg:col-start-7"
      onSubmit={handleSubmit}
    >
      <label className="block">
        <span className="form-label">Imię</span>
        <input
          className="form-field"
          name="name"
          placeholder="Jak się nazywasz?"
          required
          type="text"
        />
      </label>
      <label className="block">
        <span className="form-label">E-mail</span>
        <input
          className="form-field"
          name="email"
          placeholder="twoj@email.pl"
          required
          type="email"
        />
      </label>
      <label className="block">
        <span className="form-label">Wiadomość</span>
        <textarea
          className="form-field min-h-28 resize-y"
          name="message"
          placeholder="Napisz kilka słów o projekcie..."
          required
        />
      </label>
      <div className="flex flex-wrap items-center gap-5">
        <button className="button-light group" type="submit">
          Wyślij wiadomość
          <Arrow className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
        {sent && (
          <p className="text-sm text-[#a9c7b8]" role="status">
            Dziękuję — wiadomość została wysłana.
          </p>
        )}
      </div>
    </form>
  );
}
