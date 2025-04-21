import { component$, Resource, useSignal, type Signal } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import Button, { EButtonMode } from "@components/sub-components/button";
import { crossWhiteIcon, menuIcon, personalImg } from "@media/media";
import useUserInfo from "@hooks/userInfo";
import Contact from "../contact/contact";

export default component$(() => {
  const pathname = useLocation().url.pathname.slice(1, -1);
  const userInfo: any = useUserInfo();
  const showContact: Signal<boolean> = useSignal<boolean>(false);
  const showMenu: Signal<boolean> = useSignal<boolean>(false);

  return (
    <Resource
      value={userInfo}
      onResolved={(userInfo: any) => {
        const navbarInfo = userInfo["data-set"].ui.navbar;

        return (
          <>
            <nav class="flex items-center justify-between rounded-md p-2 w-[960px] mx-auto border-[0.6px] border-neutral-800 bg-[#0f0f0fdf] fixed top-[24px] left-1/2 min-sm:-translate-x-1/2 z-50 backdrop-blur max-lg:w-[80vw] max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:rounded-none max-sm:px-4 max-sm:py-4 max-sm:border-b-[0.6px] max-sm:border-0">

              {/* The icon and first name */}
              <Link
                href="/"
                class="flex flex-row items-center gap-4">
                <img
                  src={personalImg}
                  alt="Logo"
                  decoding="async"
                  height={100}
                  width={100}
                  class="w-10 h-10 object-cover rounded-md max-sm:w-8 max-sm:h-8"
                />
                <li class="h6-nav font-[jost]">{userInfo["data-set"].person['first-name']}</li>
              </Link>

              {/* Menu icon */}
              <img
                src={showMenu.value ? crossWhiteIcon : menuIcon}
                alt="Menu Icon"
                decoding="async"
                loading="lazy"
                fetchPriority="high"
                width={100}
                height={100}
                class="min-lg:hidden h-10 w-10 cursor-pointer max-sm:h-8 max-sm:w-8"
                onClick$={() => {
                  showMenu.value = !showMenu.value;
                }}
              />

              {/* Nav buttons */}
              <ui class={`flex gap-4 ${showMenu.value ? "max-lg:absolute max-lg:flex max-lg:flex-col max-lg:items-center max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-16 max-lg:bg-[#181818] max-lg:w-full max-lg:h-fit max-lg:py-12" : "max-lg:hidden"}`}>
                {
                  Object.keys(navbarInfo["set-2"]).map((info: string) => {
                    return (
                      <li
                        class="flex gap-2 items-center"
                        key={info}
                      >
                        {
                          navbarInfo["set-2"][info].link == pathname
                            ?
                            <span class="bg-[#006ded] w-1 h-1 rounded-full block" />
                            :
                            null
                        }
                        <Link
                          href={`/${navbarInfo["set-2"][info].link}`}
                          class={`p2-nav ${navbarInfo["set-2"][info].link == pathname ? "text-neutral-300" : "text-neutral-400 hover:text-neutral-300"}`}
                          key={info}
                        >
                          {navbarInfo["set-2"][info].title}
                        </Link>
                      </li>
                    )
                  })
                }
              </ui>

              {/* Contact button */}
              <ContactButton navbarInfo={navbarInfo} showContact={showContact} />

            </nav>
            {
              showContact.value ?
                <Contact showContact={showContact} /> : null
            }
          </>
        )
      }}
    />
  )
})

const ContactButton = component$(({ navbarInfo, showContact }: { navbarInfo: any, showContact: Signal<boolean> }) => {
  return (
    <>
      {/* Contact button */}
      < div class="max-lg:hidden" >
        {
          navbarInfo["set-3"].map((info: string) => {
            return (
              <Button
                key={info}
                text={info}
                isPrimary={true}
                mode={EButtonMode.TRIGGER}
                showContact={showContact}
              />
            )
          })
        }
      </div >
    </>
  )
})