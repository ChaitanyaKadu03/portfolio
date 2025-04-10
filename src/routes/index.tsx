import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "@components/hero/hero"

export default component$(() => {
  return (
    <Hero />
  )
});

export const head: DocumentHead = {
  title: "Chaitanya Kadu",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
