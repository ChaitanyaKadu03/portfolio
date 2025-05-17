import { component$, Resource } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import TopSection from "../sub-components/top-section";
import Pako from "pako";

export default component$(() => {

  return (
    <section class="bg-[#004433] text-center">
      <p
        class="p2"
      >
        Demo mode! The data displayed is not accurate.
      </p>
    </section>
  )
});
