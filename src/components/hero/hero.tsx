import { component$, Resource, useResource$ } from "@builder.io/qwik";
import Pako from "pako";

export default component$(() => {
  
  const SSG_ORIGIN = "http://localhost:4000";

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query Hero {
            hero
          }`
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.hero, { to: 'string' }));
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const heroInfo = userResource;

        return (
          <section class="relative h-[100vh] overflow-hidden flex flex-col items-center justify-center dot-bg">
            <h6
              class="font-[Gochi Hand] text-[20px] font-medium tracking-[0px] bg-gradient-to-r from-neutral-300 from-10% via-neutral-400 via-50% to-neutral-500 to-95% bg-clip-text text-transparent relative top-[16px] select-none max-lg:text-[18px] max-lg:top-0 max-sm:text-[14px]"
            >
              {heroInfo.section}
            </h6>
            <h1 class="font-[Gochi Hand] text-[160px] leading-[120%] font-bold tracking-[-8px] bg-gradient-to-r from-blue-300 from-10% via-blue-500 via-50% to-blue-900 to-95% bg-clip-text text-transparent relative top-[-24px] select-none max-lg:text-[120px] max-md:text-[80px] max-md:tracking-tight max-md:top-[-12px] max-sm:text-[58px] max-sm:top-[-8px]">
              {heroInfo.header}
            </h1>

            {/* Background text */}
            <p
              class="title-bg absolute flex flex-col select-none -z-40 max-lg:hidden"
            >
              <span>
                "Talk is cheap.
              </span>
              <span>
                Show me the code."
              </span>
            </p>

            {/* Background gradient lights */}
            <span
              class="h-[400px] w-[400px] bg-[#00b199] absolute top-[-200px] left-[-200px] blur-3xl opacity-[0.1] -z-50 max-sm:w-[full] max-sm:h-[480px] max-sm:top-[-80px] max-sm:left-1/2 max-sm:-translate-1/2 max-sm:blur-3xl min-2xl:hidden"
            />
            <span
              class="h-[400px] w-[400px] bg-[#00b199] absolute top-[-200px] right-[-200px] blur-3xl opacity-[0.1] -z-50 max-sm:hidden min-2xl:hidden"
            />
          </section>
        )
      }}
    />
  )
})