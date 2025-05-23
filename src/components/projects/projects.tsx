import { component$, Resource, type Signal, useResource$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { linkIcon, githubIcon, arrowIcon } from "@media/media";
import Pako from "pako";

export default component$(() => {
  
  const SSG_ORIGIN = import.meta.env.SSR_ORIGIN || "https://backend.chaitanyakadu.in";
  const currOption: Signal<number> = useSignal<number>(0);
  const imgOption: Signal<number> = useSignal<number>(1); // The projects images silder, range 1 to 3
  const sectionRef: Signal<Element | undefined> = useSignal<Element | undefined>(undefined);
  const isSectionVisible: Signal<boolean> = useSignal<boolean>(false);

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query Projects {
            projects
          }
          `
      }),
    });
    const result = await response.json()
    const projects = JSON.parse(Pako.inflate(result.data.projects, { to: 'string' }))
    return projects;
  });

  useVisibleTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      (currOption.value >= 3) ? currOption.value = 0 : currOption.value = currOption.value + 1;
    }, 6000)

    if(sectionRef.value) {
      isSectionVisible.value = true;
    }

    cleanup(() => clearInterval(interval));
  })

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const projectsInfo: any = userResource.data;

        return (
          <section 
            class={`flex flex-col gap-6 items-center relative my-[180px] max-sm:gap-4 max-sm:my-14 ${isSectionVisible.value ? "slide-in-animation" : "opacity-0 top-[8vh]"}`}
            ref={sectionRef}>

            <section class="grid grid-cols-2 gap-2 border-[0.2px] border-neutral-800 bg-[#22222235] rounded-md p-2 min-lg:min-w-[920px] max-w-[1120px] w-[92vw] h-[480px] box-border max-lg:flex max-lg:flex-col max-lg:w-[92vw] max-lg:h-fit max-lg:text-center">

              {/* Information of projects */}
              <div class="flex flex-col gap-2 border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2 max-lg:items-center">
                <h4 class="h5">
                  {projectsInfo[Object.keys(projectsInfo)[currOption.value]].title}
                </h4>
                <p class="p2">
                  {projectsInfo[Object.keys(projectsInfo)[currOption.value]]["paragraph1"]}</p>
                <p class="p2">
                  {projectsInfo[Object.keys(projectsInfo)[currOption.value]]["paragraph2"]}</p>
                <p class="p2">
                  {projectsInfo[Object.keys(projectsInfo)[currOption.value]]["paragraph3"]}</p>
                <div class="flex items-center gap-4">
                  <a
                    class="flex items-center gap-1 p3"
                    href={projectsInfo[Object.keys(projectsInfo)[currOption.value]].github}
                    target="_blank"
                  >
                    <img
                      src={githubIcon}
                      alt="Github Icon"
                      loading="lazy"
                      decoding="async"
                      height={100}
                      width={100}
                      class="h-6 w-6 rounded-md bg-neutral-800"
                    />
                    Github
                  </a>
                  <a
                    class="flex items-center gap-1 p3"
                    href={projectsInfo[Object.keys(projectsInfo)[currOption.value]].live}
                    target="_blank"
                  >
                    <img
                      src={linkIcon}
                      alt="Link Icon"
                      loading="lazy"
                      decoding="async"
                      height={100}
                      width={100}
                      class="h-6 w-6 rounded-md bg-neutral-800"
                    />
                    Link
                  </a>
                </div>
              </div>

              {/* Banner Image */}
              <div class=" border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2 relative">
                <img
                  src={projectsInfo[Object.keys(projectsInfo)[currOption.value]][`img${imgOption.value}`]}
                  alt="Poster"
                  loading="lazy"
                  decoding="async"
                  height={100}
                  width={100}
                  class="h-full w-full object-cover max-lg:h-[320px] max-sm:h-[200px]"
                />

                {/* Image navigation icons */}
                <div class="absolute flex gap-4 bottom-4 right-4 max-lg:gap-3">
                  {
                    Array.from({ length: 2 }).map((_, i) => {
                      return (
                        <img
                          src={arrowIcon}
                          alt="Arrow icon"
                          loading="lazy"
                          decoding="async"
                          height={100}
                          width={100}
                          key={i}
                          class={`h-12 w-12 object-cover bg-[#252525dc] rounded-md p-2 cursor-pointer max-lg:h-10 max-lg:w-10 max-sm:h-8 max-sm:w-8 ${i === 0 ? "rotate-180" : null}`}
                          onClick$={() => {
                            imgOption.value === 3 ? imgOption.value = 1 : imgOption.value = imgOption.value + 1;
                          }}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </section>

            {/* Dots to navigate across multiple projects */}
            <div class="flex gap-4">
              {
                Object.keys(projectsInfo).map((_, id) => {
                  return (
                    <span
                      class={`${currOption.value === id ? "bg-neutral-300" : "bg-neutral-500 hover:bg-neutral-400"} w-3 h-3 rounded-full cursor-pointer`}
                      key={id}
                      onClick$={() => {
                        currOption.value = id;
                      }}
                    />
                  )
                })
              }
            </div>

            {/* Background text */}
            <p
              class="title-bg absolute flex flex-col select-none -z-40 -top-[120px] max-lg:-top-[100px]"
            >
              {projectsInfo[Object.keys(projectsInfo)[currOption.value]].section}
            </p>
          </section>
        )
      }}
    />
  )
})