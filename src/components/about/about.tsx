import { component$ } from "@builder.io/qwik";
import userInfo from "@data/export-data";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";

export default component$(() => {
  return (
    <section
      class="h-[100vh] flex flex-col justify-center items-center text-center gap-2 relative"
    >
      <h6
        class="h6"
      >
        {userInfo["data-set"].ui.about.section}
      </h6>
      <h3
        class="h3"
      >
        {userInfo["data-set"].ui.about.header}
      </h3>
      <p
        class="p1 max-w-[800px]"
      >
        {userInfo["data-set"].ui.about.paragraph}
      </p>

      <span class="w-full h-[100vh] absolute top-[-6vh] bg-gradient-to-b from-[rgb(14,14,14,1)] from-0% via-[rgb(14,14,14,0.8)] via-60% to-[rgb(14,14,14,0)] to-100% -z-30"/>

      <div
        class="grid grid-cols-3 gap-2 mx-4 absolute -z-40 opacity-[0.2] select-none"
      >
        {
          Object.values(userInfo["data-set"].ui["open-source"].data).map((info: any) => {
            return (
              <div
                class="flex flex-col gap-2 items-start text-start border-[0.2px] border-neutral-800 bg-[#48484834] hover:bg-[#48484858] p-6 rounded-md"
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
                  <p
                    class="flex items-center gap-1 p3"
                  >
                    <img
                      src={GithubImg}
                      alt="Github Icon"
                      class="h-6 w-6 rounded-md bg-neutral-800"
                    />
                    Github
                  </p>
                  <p
                    class="flex items-center gap-1 p3"
                  >
                    <img
                      src={LinkImg}
                      alt="Link Icon"
                      class="h-6 w-6 rounded-md bg-neutral-800"
                    />
                    Link
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
})