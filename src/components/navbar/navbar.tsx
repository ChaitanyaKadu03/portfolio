import { component$, Resource, useSignal, useResource$, type Signal } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import Button, { EButtonMode } from "@components/sub-components/button";
import { crossWhiteIcon, menuIcon, personalImg } from "@media/media";
import Contact from "../contact/contact";
import Pako from "pako";

export default component$(() => {
  const pathname = useLocation().url.pathname.slice(1, -1);
  const showContact: Signal<boolean> = useSignal<boolean>(false);
  const showMenu: Signal<boolean> = useSignal<boolean>(false);
  
  const SSG_ORIGIN = import.meta.env.SSR_ORIGIN || "https://backend.chaitanyakadu.in";

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query Navbar { navbar }`
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.navbar, { to: 'string' }));
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const navbarInfo = userResource;

        return (
          <>
            <nav class="flex items-center justify-between rounded-md p-2 w-[960px] mx-auto border-[0.6px] border-neutral-800 bg-[#0f0f0fdf] fixed top-[24px] left-1/2 min-sm:-translate-x-1/2 z-40 backdrop-blur max-lg:w-[80vw] max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:rounded-none max-sm:px-4 max-sm:py-4 max-sm:border-b-[0.6px] max-sm:border-0">

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
                <li class="h6-nav font-[jost]">Chaitanya</li>
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
                  Object.keys(navbarInfo).map((info: string) => {
                    return (
                      <li
                        class="flex gap-2 items-center"
                        key={info}
                      >
                        {
                          navbarInfo[info].link == pathname
                            ?
                            <span class="bg-[#006ded] w-1 h-1 rounded-full block" />
                            :
                            null
                        }
                        <Link
                          href={`/${navbarInfo[info].link}`}
                          class={`p2-nav ${navbarInfo[info].link == pathname ? "text-neutral-300" : "text-neutral-400 hover:text-neutral-300"}`}
                          key={info}
                        >
                          {navbarInfo[info].title}
                        </Link>
                      </li>
                    )
                  })
                }
              </ui>

              {/* Contact button */}
              <ContactButton showContact={showContact} />

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

const ContactButton = component$(({ showContact }: { showContact: Signal<boolean> }) => {
  return (
    <>
      {/* Contact button */}
      < div class="max-lg:hidden" >
        <Button
          text={"Let's Connect"}
          isPrimary={true}
          mode={EButtonMode.TRIGGER}
          showContact={showContact}
          icon={false}
        />
      </div >
    </>
  )
})