import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { githubIcon, githubBgIcon } from "@media/media";
import TopSection from "../sub-components/top-section";
import Pako from "pako";

export default component$(() => {
  const userResource = useResource$(async () => {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
            query GetOpenSource {
              openSource
            }
          `
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.openSource, { to: 'string' }));
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const openSourceInfo: any = userResource;

        return (
          <section class="flex flex-col items-center gap-12 my-8 max-lg:gap-10 max-md:mx-4">

            {/* Heading part */}
            <div class="flex flex-col items-center text-center gap-4">
              <TopSection userInfo={openSourceInfo} />
            </div>

            {/* Contribution cards */}
            <div class="grid grid-cols-3 min-lg:min-w-[920px] max-w-[1024px] w-[92vw] gap-4 max-lg:grid-cols-2 max-lg:w-[92vw] max-md:flex max-md:flex-col max-md:w-full">
              {
                Object.values(openSourceInfo.data).slice(0, 4).map((info: any, i: number) => {

                  return (
                    <div
                      class={`relative flex flex-col gap-2 items-start text-start border-[0.2px] border-neutral-800 bg-[#48484834] hover:bg-[#48484858] p-6 rounded-md box max-md:p-4 ${info.id == 2 ? "min-lg:col-span-2" : null} ${info.id == 1 ? "min-lg:row-span-2" : null}`}
                      key={i}
                    >
                      <p class="p2">
                        {info.title}
                      </p>
                      <p class="p3">
                        {info["paragraph1"]}
                      </p>
                      <p class="p3">
                        {info["paragraph2"]}
                      </p>
                      <div class="flex justify-between gap-4">
                        <a
                          class="flex items-center gap-1 p3"
                          href={info.github}
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
                      </div>
                      <img
                        src={githubBgIcon}
                        alt="Animated GitHub logo background"
                        loading="lazy"
                        decoding="async"
                        height={100}
                        width={100}
                        class="absolute w-full h-full object-cover pointer-events-none select-none opacity-[0.04] left-1/2 top-1/2 -translate-1/2 -z-40"
                      />
                    </div>
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