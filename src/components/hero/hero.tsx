import { component$ } from "@builder.io/qwik"
import userInfo from "@data/export-data"

export default component$(() => {
  return (
    <section class="relative w-[100vw] h-[100vh] overflow-hidden flex flex-col items-center justify-center">
      <h6
        class="font-[Gochi Hand] text-[20px] font-medium tracking-[0px] bg-gradient-to-r from-neutral-300 from-10% via-neutral-400 via-50% to-neutral-500 to-95% bg-clip-text text-transparent relative top-[16px] select-none"
      >
        {userInfo["data-set"].ui.hero.section}
      </h6>
      <h1 class="font-[Gochi Hand] text-[160px] leading-[120%] font-bold tracking-[-8px] bg-gradient-to-r from-blue-300 from-10% via-blue-500 via-50% to-blue-900 to-95% bg-clip-text text-transparent relative top-[-24px] select-none">
        {userInfo["data-set"].ui.hero.header}
      </h1>
      <p
        class="title-bg absolute flex flex-col select-none -z-40"
      >
        <span>
          "Talk is cheap.
        </span>
        <span>
          Show me the code."
        </span>
      </p>
      <span
        class="h-[400px] w-[400px] bg-[#00b199] absolute top-[-200px] left-[-200px] blur-3xl opacity-[0.1] -z-50"
      />
      <span
        class="h-[400px] w-[400px] bg-[#00b199] absolute top-[-200px] right-[-200px] blur-3xl opacity-[0.1] -z-50"
      />
    </section>
  )
}) 