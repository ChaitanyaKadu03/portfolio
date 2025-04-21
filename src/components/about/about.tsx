import { component$, Resource, type Signal, useSignal, } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";
import TopSection from "../sub-components/top-section";
import ContributionsCard from "../sub-components/contributions-card";

export default component$(() => {
  const userInfo: any = useUserInfo();
  const isMobile: Signal<boolean> = useSignal<boolean>(false);

  if (typeof window !== "undefined" && window.innerWidth < 640) {
    isMobile.value = true;
  }

  return (
    <Resource
      value={userInfo}
      onResolved={(userInfo: any) => (
        <section
          class="h-[100vh] flex flex-col justify-center items-center text-center gap-2 relative"
        >
          <TopSection userInfo={userInfo["data-set"].ui.about} />

          {/* Background gradient */}
          <span class="w-full h-[100vh] absolute top-[-6vh] bg-gradient-to-b from-[rgb(14,14,14,1)] from-0% via-[rgb(14,14,14,0.8)] via-60% to-[rgb(14,14,14,0)] to-100% -z-30" />

          {/* Contribution background cards */}
          <div
            class="grid grid-cols-3 h-full gap-2 mx-2 absolute -z-40 opacity-[0.4] select-none overflow-hidden max-sm:grid-cols-2 max-sm:mx-1"
          >
            {
              Object.values(userInfo["data-set"].ui["open-source"].data).slice(0, isMobile.value ? 6 : Infinity).map((info: any, i: number) => {
                return (
                  <ContributionsCard info={info} userInfo={userInfo} key={i} />
                )
              })
            }
          </div>
        </section>
      )}
    />
  )
})