import { component$ } from "@builder.io/qwik";
import userInfo from "@data/export-data";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";

export default component$(() => {
  return (
    <section class="w-[100vw] flex justify-center relative">
      <section class="grid grid-cols-2 gap-2 border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2 w-[1024px] my-[160px]">
        <div class="flex flex-col gap-2 border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2">
          <h4 class="h5">
            {userInfo["data-set"].ui.projects.data["project-1"].title}
          </h4>
          <p class="p2">
            {userInfo["data-set"].ui.projects.data["project-1"]["paragraph-1"]}</p>
          <p class="p2">
            {userInfo["data-set"].ui.projects.data["project-1"]["paragraph-2"]}</p>
          <p class="p2">
            {userInfo["data-set"].ui.projects.data["project-1"]["paragraph-3"]}</p>
          <div class="flex items-center gap-4">
            <a
              class="flex items-center gap-1 p3"
              href={userInfo["data-set"].ui.projects.data["project-1"].github}
            >
              <img
                src={GithubImg}
                alt="Github Icon"
                class="h-6 w-6 rounded-md bg-neutral-800"
              />
              Github
            </a>
            <a
              class="flex items-center gap-1 p3"
              href={userInfo["data-set"].ui.projects.data["project-1"].live}
            >
              <img
                src={LinkImg}
                alt="Link Icon"
                class="h-6 w-6 rounded-md bg-neutral-800"
              />
              Link
            </a>
          </div>
        </div>
        <div class=" border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2 box-border">
          <img
            alt="Poster"
            src={userInfo["data-set"].ui.projects.data["project-1"].img1}
            class="h-full object-cover"
          />
        </div>
      </section>
      <p
        class="title-bg absolute flex flex-col select-none -z-40 top-[32px]"
      >
        {userInfo["data-set"].ui.projects.data["project-1"].section}
      </p>
    </section>
  )
})