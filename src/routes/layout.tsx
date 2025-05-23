import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler } from "@builder.io/qwik-city";

import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 60 * 10,
    sMaxAge: 120 * 10,
    private: false
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <section class="max-w-[1640px] mx-auto">
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </section>
  );
});
