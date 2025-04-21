import { component$, type Signal, Resource } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import crossIcon from "@media/Icons/cross.svg";
import GithubIcon from "@media/Icons/github.svg";

export enum Mode {
  Tech,
  Contact
}

export default component$(({ userInfo, showContact, title, data, mode }: { showContact: Signal, title: string, data: any, mode: Mode, userInfo: any }) => {
  return (
    <Resource
      value={userInfo}
      onResolved={() => (
        <>
          <section class="fixed top-1/2 left-1/2 -translate-1/2 z-50 flex flex-col gap-4 items-center justify-center bg-[#181818] bg-opacity-50 transition-opacity w-fit h-fit py-8 px-12 rounded-md shadow-lg shadow-[#1818185e]">
            <div class="w-full flex items-center justify-between gap-4">
              <p class="h5">{title}{mode === Mode.Tech ? ": Proof of Work" : null}</p>
              <img
                src={crossIcon}
                alt='Cross Icon'
                class="rounded-full cursor-pointer"
                onClick$={() => (showContact.value = !showContact.value)}
              />
            </div>
            <div class="flex flex-col items-start gap-4 mb-8 w-full">
              {
                Object.keys(data).map((info: any) => {
                  const logo = data[info].logo || GithubIcon;
                  return (
                    <Link
                      class="flex items-center gap-4 bg-neutral-800 rounded-md w-full px-4 py-1"
                      href={
                        mode === Mode.Contact ?
                          data[info].link
                          :
                          data[info]
                      }
                      target='_blank'
                    >
                      <img
                        src={mode === Mode.Tech ? "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" : logo}
                        alt='Icon'
                        class="h-6 w-6"
                      />
                      {
                        mode === Mode.Contact ?
                          <p class="p1">{data[info].title}</p>
                          :
                          <p class="p1">
                            {`${info.split("-")[0]}`}
                          </p>
                      }
                    </Link>
                  )
                })
              }
            </div>
          </section>
          <span class="w-screen h-screen bg-[#14141485] fixed top-0 left-0 z-40" />
        </>
      )}
    />
  )
})