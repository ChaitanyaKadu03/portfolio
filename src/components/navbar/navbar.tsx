import { component$ } from "@builder.io/qwik"
import { personalImg } from "../../media/media"
import Button from "@components/sub-components/button"
import userInfo from "@data/export-data"

export default component$(() => {
  return (
    <nav class="flex items-center justify-between rounded-md p-2 min-w-[960px] max-w-fit mx-auto border-[0.6px] border-neutral-800 bg-[#0f0f0fdf] fixed top-[24px] left-1/2 -translate-x-1/2 z-50 backdrop-blur">
      <ul class="flex flex-row items-center gap-4">
        <li>
          <img
            src={personalImg}
            decoding="async"
            loading="lazy"
            class="w-[40px] h-[40px] object-cover rounded-md"
            height={100}
            width={100}
          />
        </li>
        <li class="h6 font-[jost]">{userInfo["data-set"].person['first-name']}</li>
      </ul>
      <ui class="flex gap-4">
        {
          userInfo["data-set"].ui.navbar["set-2"].map((info: string) => {
            return (
              <a
                href={`/${info}`}
                class="p2"
                key={info}
              >
                {info}
              </a>
            )
          })
        }
      </ui>
      <ul>
        {
          userInfo["data-set"].ui.navbar["set-3"].map((info: string) => {
            return (
              <Button
                text={info}
                link="/"
                isPrimary={true}
                key={info}
              />
            )
          })
        }
      </ul>
    </nav>
  )
})