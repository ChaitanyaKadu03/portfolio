import { component$, Resource, useSignal, type Signal } from "@builder.io/qwik"
import { useLocation, Link } from "@builder.io/qwik-city"
import { personalImg } from "../../media/media"
import Button from "@components/sub-components/button"
import useUserInfo from "@hooks/userInfo"
import Contact from "../contact/contact"

export default component$(() => {
  const pathname = useLocation().url.pathname.slice(1, -1);
  const userInfo: any = useUserInfo();
  const showContact: Signal<boolean> = useSignal<boolean>(false);

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <>
          <nav class="flex items-center justify-between rounded-md p-2 min-w-[960px] max-w-fit mx-auto border-[0.6px] border-neutral-800 bg-[#0f0f0fdf] fixed top-[24px] left-1/2 -translate-x-1/2 z-50 backdrop-blur">
            <Link
              href="/"
              class="flex flex-row items-center gap-4">
              <img
                src={personalImg}
                decoding="async"
                loading="lazy"
                class="w-[40px] h-[40px] object-cover rounded-md"
                height={100}
                width={100}
              />
              <li class="h6 font-[jost]">{userInfo["data-set"].person['first-name']}</li>
            </Link>
            <ui class="flex gap-4">
              {
                Object.keys(userInfo["data-set"].ui.navbar["set-2"]).map((info: string) => {
                  return (
                    <li class="flex gap-2 items-center">
                      {
                        userInfo["data-set"].ui.navbar["set-2"][info].link == pathname
                          ?
                          <span class="bg-[#006ded] w-1 h-1 rounded-full block" />
                          :
                          null
                      }
                      <Link
                        href={`/${userInfo["data-set"].ui.navbar["set-2"][info].link}`}
                        class={`p2-nav ${userInfo["data-set"].ui.navbar["set-2"][info].link == pathname ? "text-neutral-300" : "text-neutral-400 hover:text-neutral-300"}`}
                        key={info}
                      >
                        {userInfo["data-set"].ui.navbar["set-2"][info].title}
                      </Link>
                    </li>
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
                      isPrimary={true}
                      isLink={false}
                      key={info}
                      showContact={showContact}
                    />
                  )
                })
              }
            </ul>
          </nav>
          {
            showContact.value ?
              <Contact showContact={showContact} /> : null
          }
        </>
      )}
    />
  )
})