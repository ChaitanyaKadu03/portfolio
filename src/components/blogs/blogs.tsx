import { component$ } from "@builder.io/qwik";
import userInfo from "@data/export-data";

export default component$(() => {
  return (
    <section class="flex flex-col gap-8 items-center my-[160px]">
      <div class="flex flex-col items-center gap-4 text-center">
        <h6
          class="h6"
        >
          {userInfo["data-set"].ui.blogs.section}
        </h6>
        <h3
          class="h3"
        >
          {userInfo["data-set"].ui.blogs.header}
        </h3>
        <p
          class="p1 max-w-[800px]"
        >
          {userInfo["data-set"].ui.blogs.paragraph}
        </p>
      </div>
      <div class="grid grid-cols-4 border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2 gap-2 w-[1024px]">
        {Object.keys(userInfo["data-set"].ui.blogs.data).map((val) => {
          return (
            <div class="flex flex-col gap-4 border-neutral-800 bg-[#48484834] hover:bg-[#48484858] rounded-md p-2">
              <p class="p1">{userInfo["data-set"].ui.blogs.data[val].title}</p>
              <p class="p3">{userInfo["data-set"].ui.blogs.data[val].paragraph}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
})