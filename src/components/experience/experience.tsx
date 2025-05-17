import { component$, Resource, type Signal, useResource$, useSignal } from "@builder.io/qwik";
import Dropdown, { Mode } from "../sub-components/dropdown";
import Pako from "pako";

export default component$(() => {
  const currOption: Signal<number> = useSignal<number>(0);
  
  const SSG_ORIGIN = "http://localhost:4000";

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query Experience {
          experience
        }
        `
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.experience, { to: 'string' }));
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const experienceInfo: any = userResource.data; // Unlike other sections we have focused directly on data

        return (
          <section
            class="grid grid-cols-3 py-[120px] dot-bg max-w-[1560px] mx-auto max-xl:w-[96vw] max-xl:gap-0 max-lg:flex max-lg:flex-col max-lg:gap-8 max-lg:w-full"
          >
            {/* Background gradient visible only for devices with width < 1024px */}
            <span class="hidden max-lg:block max-lg:w-full max-lg:h-[200px] max-lg:bg-[#0e0e0e] max-lg:sticky max-lg:top-0 max-md:hidden" />

            {/* Project metadata and dropdown */}
            <div
              class="flex flex-col items-center max-lg:sticky max-lg:top-[96px] max-lg:w-full max-md:relative max-md:top-0"
            >

              <div class="flex flex-col gap-4 h-fit w-[360px] border-[0.2px] border-neutral-800 bg-[#16161640] rounded-md p-2 sticky top-[120px] max-xl:w-[320px] max-lg:w-full max-lg:grid max-lg:grid-cols-3 max-lg:rounded-none max-lg:bg-[#161616]  max-md:flex max-md:flex-col max-md:relative max-md:top-0 max-md:p-4">

                {/* Banner image */}
                <img
                  src={experienceInfo[Object.keys(experienceInfo)[currOption.value]].img1}
                  alt="Project Banner"
                  loading="lazy"
                  decoding="async"
                  height={100}
                  width={100}
                  class="h-[200px] w-full object-cover rounded-md max-lg:col-span-2 max-lg:h-[280px]"
                />

                <div class="flex flex-col gap-2 max-lg:justify-center max-lg:gap-2 max-lg:overflow-hidden">

                  {/* Dropdown to switch between projects */}
                  <Dropdown
                    currOption={currOption}
                    userInfo={experienceInfo}
                    mode={Mode.Experience}
                  />

                  <p class="p1">
                    {experienceInfo[Object.keys(experienceInfo)[currOption.value]].Role}
                  </p>
                  <p class="p3">
                    {experienceInfo[Object.keys(experienceInfo)[currOption.value]].Duration}
                  </p>
                  <p class="p2">
                    Tech Stack : {experienceInfo[Object.keys(experienceInfo)[currOption.value]]["Tech Stack"]}
                  </p>
                </div>
              </div>

            </div>

            {/* Project information body */}
            <div
              class="col-span-2 px-8 flex flex-col gap-4 w-[92%] max-w-[840px] max-xl:w-[96%] max-md:px-4"
            >
              <h4 class="h4 mb-6 w-[80%]">
                {experienceInfo[Object.keys(experienceInfo)[currOption.value]].title}
              </h4>
              <p class="p1">
                {experienceInfo[Object.keys(experienceInfo)[currOption.value]].paragraph1}
              </p>
              <p class="p1">
                {experienceInfo[Object.keys(experienceInfo)[currOption.value]].paragraph2}
              </p>
              <img
                src={experienceInfo[Object.keys(experienceInfo)[currOption.value]].img2}
                alt="Banner 1"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                height={100}
                width={100}
                class="my-4 w-full"
              />
              <p class="p1">
                {experienceInfo[Object.keys(experienceInfo)[currOption.value]].paragraph3}
              </p>
              <img
                src={experienceInfo[Object.keys(experienceInfo)[currOption.value]].img3}
                alt="Banner 2"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                height={100}
                width={100}
                class="my-4 w-full"
              />
              <p class="p1">
                {experienceInfo[Object.keys(experienceInfo)[currOption.value]].paragraph4}
              </p>
            </div>
          </section>
        )
      }}
    />
  )
})