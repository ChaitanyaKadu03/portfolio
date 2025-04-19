import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/hero/hero"
import About from "~/components/about/about"
import Technologies from "~/components/technologies/technologies";
import Experience from "~/components/experience/experience";
import Projects from "~/components/projects/projects";
import OpenSource from "~/components/open-source/open-source";
import Blogs from "~/components/blogs/blogs";
import Navigator from "~/components/navigator/navigator";

export default component$(() => {
  return (
    <fragment>
      <Hero />
      <Navigator />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <OpenSource />
      <Blogs />
    </fragment>
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
