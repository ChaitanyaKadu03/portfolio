import { component$ } from "@builder.io/qwik"
import { personalImg } from "../../media/media"
import Button from "@components/sub-components/button"
import fs from "fs"
import YAML from "yaml"

export default component$(() => {

  const infoFile = fs.readFileSync("./data/info.yml", "utf-8")

  const userInfo = YAML.parse(infoFile);

  return (
    <nav class="flex items-center justify-between rounded-full p-2 min-w-[960px] max-w-fit mx-auto border-[0.6px] border-neutral-800 my-4">
      <ul class="flex flex-row items-center gap-2">
        <li>
          <img
            src={personalImg}
            decoding="async"
            loading="lazy"
            class="w-[40px] h-[40px] object-cover rounded-full"
            height={100}
            width={100}
          />
        </li>
        <li class="h6">{userInfo["data-set"].person['first-name']}</li>
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