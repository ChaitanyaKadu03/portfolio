import { component$, Resource } from "@builder.io/qwik";
import { linkIcon, githubBgIcon, githubIcon } from "@media/media";

export default component$(({ info, userInfo }: { info: any, userInfo: any }) => {

  return (
    <Resource
      value={userInfo}
      onResolved={() => (
        <div
          class="flex flex-col gap-2 items-start text-start border-[0.2px] border-neutral-800 bg-[#48484834] hover:bg-[#48484858] p-6 rounded-md bg--hero relative h-full max-lg:p-3 max-sm:p-2"
        >
          <img
            src={githubBgIcon}
            alt="GitHub background image"
            loading="lazy"
            decoding="async"
            width={100}
            height={100}
            class="absolute w-full h-full object-cover pointer-events-none select-none opacity-[0.2] left-1/2 top-1/2 -translate-1/2"
          />
          <p class="p2 max-lg:line-clamp-2">
            {info.title}
          </p>
          <p class="p3 line-clamp-3 min-2xl:line-clamp-4 max-sm:line-clamp-4">
            {info["paragraph1"]}
          </p>
          <p class="p3 line-clamp-1">
            {info["paragraph2"]}
          </p>
          <div class="flex justify-between gap-4 max-sm:flex-col max-sm:gap-1">
            <p
              class="flex items-center gap-1 p3"
            >
              <img
                src={githubIcon}
                alt="Github Icon"
                loading="lazy"
                decoding="async"
                width={100}
                height={100}
                class="h-6 w-6 rounded-md bg-neutral-800"
              />
              Github
            </p>
            <p
              class="flex items-center gap-1 p3"
            >
              <img
                src={linkIcon}
                alt="Link Icon"
                loading="lazy"
                decoding="async"
                width={100}
                height={100}
                class="h-6 w-6 rounded-md bg-neutral-800"
              />
              Link
            </p>
          </div>
        </div>
      )}
    />
  )
})