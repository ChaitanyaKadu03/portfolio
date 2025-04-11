import { component$ } from "@builder.io/qwik";
import userInfo from "@data/export-data"

export default component$(() => {
  return (
    <section
      class="grid grid-cols-3 py-[120px] dot-bg"
    >
      <div
        class="flex justify-center"
      >
        <div class="flex flex-col gap-4 h-fit w-[360px] border-[0.2px] border-neutral-800 bg-[#22222240] rounded-md p-2 sticky top-[120px]">
          <img
            alt="Banner"
            src={userInfo["data-set"].ui.experience.data["experience-1"].img1}
            class="h-[200px] w-full object-cover rounded-md"
          />
          <div class="flex flex-col gap-2">
            <h6 class="h6">
              {userInfo["data-set"].ui.experience.data["experience-1"].Project}
            </h6>
            <p class="p1">
              {userInfo["data-set"].ui.experience.data["experience-1"].Role}
            </p>
            <p class="p3">
              {userInfo["data-set"].ui.experience.data["experience-1"].Duration}
            </p>
            <p class="p2">
            Tech Stack : {userInfo["data-set"].ui.experience.data["experience-1"]["Tech Stack"]}
            </p>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 px-8 flex flex-col gap-4 w-[80%]"
      >
        <h4 class="h4 mb-6 w-[80%]">
          {userInfo["data-set"].ui.experience.data["experience-1"].title}
        </h4>
        <p class="p1">
          {userInfo["data-set"].ui.experience.data["experience-1"].paragraph1}
        </p>
        <p class="p1">
          {userInfo["data-set"].ui.experience.data["experience-1"].paragraph2}
        </p>
        <img
          alt="Banner"
          src={userInfo["data-set"].ui.experience.data["experience-1"].img2}
          class="my-4 w-full"
          />
        <p class="p1">
          {userInfo["data-set"].ui.experience.data["experience-1"].paragraph3}
        </p>
        <img
          alt="Banner"
          src={userInfo["data-set"].ui.experience.data["experience-1"].img3}
          class="my-4 w-full"
        />
        <p class="p1">
          {userInfo["data-set"].ui.experience.data["experience-1"].paragraph4}
        </p>
      </div>
    </section>
  )
})