import { component$, Resource, type Signal, useSignal, useOnWindow, $, useResource$, useVisibleTask$ } from "@builder.io/qwik";
import TopSection from "../sub-components/top-section";
import ContributionsCard from "../sub-components/contributions-card";
import Pako from "pako";

export default component$(() => {
  const isMobile: Signal<boolean> = useSignal<boolean>(false);
  const sectionRef: Signal<Element | undefined> = useSignal<Element | undefined>(undefined);
  const isSectionVisible: Signal<boolean> = useSignal<boolean>(false);
  
  const SSG_ORIGIN = import.meta.env.SSR_ORIGIN || "https://backend.chaitanyakadu.in";

  useOnWindow("DOMContentLoaded", $(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      isMobile.value = true;
    }
  }));

  useVisibleTask$(()=>{
    if(sectionRef.value) {
      isSectionVisible.value = true;
    }
  });

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetAboutAndOpenSource {
            about 
            openSource
          }
        `
      }),
    });
    const result = await response.json()
    const about = JSON.parse(Pako.inflate(result.data.about, { to: 'string' }))
    const openSource = JSON.parse(Pako.inflate(result.data.openSource, { to: 'string' }))
    return { about, openSource };
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const aboutInfo = userResource.about;
        const openSourceInfo = userResource.openSource;

        return (
          <section
            class={`h-[100vh] flex flex-col justify-center items-center text-center gap-2 relative ${isSectionVisible.value ? "slide-in-animation" : "opacity-0 top-[8vh]"}`}
            ref={sectionRef}
          >
            <TopSection userInfo={aboutInfo} />

            {/* Background gradient */}
            <span class="w-full h-[100vh] absolute top-[-6vh] bg-gradient-to-b from-[rgb(14,14,14,1)] from-0% via-[rgb(14,14,14,0.8)] via-60% to-[rgb(14,14,14,0)] to-100% -z-30" />

            {/* Contribution background cards */}
            <div
              class="grid grid-cols-3 h-full gap-2 mx-2 absolute -z-40 opacity-[0.4] select-none overflow-hidden max-sm:grid-cols-2 max-sm:mx-1"
            >
              {
                Object.values(openSourceInfo.data).slice(0, isMobile.value ? 6 : Infinity).map((info: any, i: number) => {
                  return (
                    <ContributionsCard info={info} userInfo={userResource} key={i} />
                  )
                })
              }
            </div>
          </section>
        )
      }}
    />
  )
})