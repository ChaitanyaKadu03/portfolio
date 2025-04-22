import { component$ } from "@builder.io/qwik";
import Projects from "~/components/projects/projects";
import Technologies from "~/components/technologies/technologies";

export default component$(() => {
  return (
    <>
      <Projects />
      <Technologies />
    </>
  )
})