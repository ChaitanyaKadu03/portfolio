import { component$ } from "@builder.io/qwik";
import About from "~/components/about/about";
import Technologies from "~/components/technologies/technologies";

export default component$(() => {
  return (
    <>
      <About />
      {/* Add certifications */}
      <Technologies />
    </>
  )
})