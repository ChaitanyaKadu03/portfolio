import { component$ } from "@builder.io/qwik";
import Experience from "~/components/experience/experience";
import OpenSource from "~/components/open-source/open-source";
import Technologies from "~/components/technologies/technologies";

export default component$(() => {
  return (
    <>
      <Experience />
      <OpenSource />
      <Technologies />
    </>
  )
})