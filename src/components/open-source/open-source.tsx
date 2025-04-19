import { component$, Resource } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";
import GithubAnimation from "@media/Icons/github-animation.png";
import TopSection from "../sub-components/top-section";

export default component$(() => {
  const userInfo: any = useUserInfo();

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <section class="flex flex-col items-center gap-12">
          <div class="flex flex-col items-center text-center gap-4">
            <TopSection userInfo={userInfo["data-set"].ui["open-source"]} />
          </div>
          <div class="grid grid-cols-3 w-[1024px] gap-4">
            {
              Object.values(userInfo["data-set"].ui["open-source"].data).slice(0, 4).map((info: any) => {
                return (
                  <div
                    class={`relative flex flex-col gap-2 items-start text-start border-[0.2px] border-neutral-800 bg-[#48484834] hover:bg-[#48484858] p-6 rounded-md box ${info.id == 2 ? "col-span-2" : null} ${info.id == 1 ? "row-span-2" : null}`}
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
                    <img
                      src={GithubAnimation}
                      alt="Animated GitHub logo background"
                      loading="lazy"
                      decoding="async"
                      class="absolute w-full h-full object-cover pointer-events-none select-none opacity-[0.04] left-1/2 top-1/2 -translate-1/2 -z-40"
                    />
                  </div>
                )
              })
            }
          </div>
        </section>
      )}
    />
  )
})