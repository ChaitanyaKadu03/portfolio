import { component$, Resource, Signal, useSignal } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";

export default component$(() => {
  const userInfo: any = useUserInfo();
  const currOption: Signal<number> = useSignal<number>(0);

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <>
          <section class="flex flex-col gap-6 items-center relative my-[160px]">
            <section class="grid grid-cols-2 gap-2 border-[0.2px] border-neutral-800 bg-[#22222235] rounded-md p-2 w-[1024px] h-[480px] box-border">
              <div class="flex flex-col gap-2 border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2">
                <h4 class="h5">
                  {userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]].title}
                </h4>
                <p class="p2">
                  {userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]]["paragraph-1"]}</p>
                <p class="p2">
                  {userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]]["paragraph-2"]}</p>
                <p class="p2">
                  {userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]]["paragraph-3"]}</p>
                <div class="flex items-center gap-4">
                  <a
                    class="flex items-center gap-1 p3"
                    href={userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]].github}
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
                    href={userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]].live}
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
              <div class=" border-[0.2px] border-neutral-800 bg-[#2222221b] rounded-md p-2">
                <img
                  alt="Poster"
                  src={userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]].img1}
                  class="h-full object-cover"
                />
              </div>
            </section>
            <div class="flex gap-4">
              {
                Object.keys(userInfo["data-set"].ui.projects.data).map((_, id) => {
                  return (
                    <span
                      class={`${currOption.value === id ? "bg-neutral-300" : "bg-neutral-500 hover:bg-neutral-400"} w-3 h-3 rounded-full cursor-pointer`}
                      onClick$={() => {
                        currOption.value = id;
                      }}
                    />
                  )
                })
              }
            </div>
            <p
              class="title-bg absolute flex flex-col select-none -z-40 -top-[120px]"
            >
              {userInfo["data-set"].ui.projects.data[Object.keys(userInfo["data-set"].ui.projects.data)[currOption.value]].section}
            </p>
          </section>
        </>
      )}
    />
  )
})