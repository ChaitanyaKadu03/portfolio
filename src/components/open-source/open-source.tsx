import { component$ } from "@builder.io/qwik";
import userInfo from "@data/export-data";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";

export default component$(() => {
  return (
    <section class="flex flex-col items-center gap-12">
      <div class="flex flex-col items-center text-center gap-4">
        <h6
          class="h6"
        >
          {userInfo["data-set"].ui["open-source"].section}
        </h6>
        <h3
          class="h3"
        >
          {userInfo["data-set"].ui["open-source"].header}
        </h3>
        <p
          class="p1 max-w-[800px]"
        >
          {userInfo["data-set"].ui["open-source"].paragraph}
        </p>
      </div>
      <div class="grid grid-cols-3 w-[1024px] gap-4">
        {
          Object.values(userInfo["data-set"].ui["open-source"].data).slice(0, 4).map((info: any) => {
            return (
              <div
                class={`flex flex-col gap-2 items-start text-start border-[0.2px] border-neutral-800 bg-[#48484834] hover:bg-[#48484858] p-6 rounded-md box ${info.id == 2 || info.id == 3 ? "col-span-2" : null}`}
              >
                <p class="p2">
                  {info.title}
                </p>
                <p class="p3">
                  {info["paragraph-1"]}
                </p>
                <p class="p3">
                  {info["paragraph-2"]}
                </p>
                <div class="flex justify-between gap-4">
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
            )
          })
        }
      </div>
    </section>
  )
})