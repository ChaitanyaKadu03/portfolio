import { component$ } from "@builder.io/qwik";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";
import GithubAnimation from "@media/Icons/github-animation.png";

export default component$(({ info }: { info: any }) => {
  return (
    <div
      class="flex flex-col gap-2 items-start text-start border-[0.2px] border-neutral-800 bg-[#48484834] hover:bg-[#48484858] p-6 rounded-md bg--hero relative"
    >
      <img
        src={GithubAnimation}
        alt="Animated GitHub logo background"
        loading="lazy"
        decoding="async"
        class="absolute w-full h-full object-cover pointer-events-none select-none opacity-[0.2] left-1/2 top-1/2 -translate-1/2"
      />
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
