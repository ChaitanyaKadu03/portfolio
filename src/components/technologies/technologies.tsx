import { component$, useStore, useSignal } from "@builder.io/qwik"
import userInfo from "@data/export-data"

export default component$(() => {
  const tech = useSignal<number>(0);

  // Calculate current technology dynamically based on tech.value
  const techKeys: any = Object.keys(userInfo["data-set"].ui.technologies.data);
  const currentTech = useSignal(techKeys[tech.value]);

  return (
    <section class="flex flex-col gap-12 my-24">
      <div class="flex flex-col items-center justify-center text-center gap-2">
        <h6 class="h6">
          {userInfo["data-set"].ui.technologies.section}
        </h6>
        <h3 class="h3">
          {userInfo["data-set"].ui.technologies.header}
        </h3>
        <p class="p1 max-w-[800px]">
          {userInfo["data-set"].ui.technologies.paragraph}
        </p>
      </div>
      <div class="grid grid-cols-3 gap-2  p-2 w-[1024px] bg-[#0c0c0c] rounded-md shadow-2xl shadow-neutral-800 relative left-1/2 -translate-x-1/2 box-border">
        {
          Object.keys(userInfo["data-set"].ui.technologies.data[currentTech.value]).map((val: any) => {
            return (
              <div class="flex flex-col gap-2 items-center justify-center text-center bg-no-repeat bg-contain bg-center h-full w-fit border-[0.2px] border-neutral-800 rounded-md bg-[#22222240] py-12 px-8 overflow-hidden">
                <h6 class="p1">
                  {val}
                </h6>
                <p class="p2">
                  {userInfo["data-set"].ui.technologies.data[currentTech.value][val].text}
                </p>
                <img
                  src={userInfo["data-set"].ui.technologies.data[currentTech.value][val]["link"]}
                  alt={val}
                  class="h-fit w-[160px] object-cover absolute opacity-10 select-none"
                />
              </div>
            );
          })
        }
      </div>
    </section>
  )
});
