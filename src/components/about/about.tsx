import { component$, Resource } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";
import TopSection from "../sub-components/top-section";
import ContributionsCard from "../sub-components/contributions-card";

export default component$(() => {
  const userInfo: any = useUserInfo();

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <section
          class="h-[100vh] flex flex-col justify-center items-center text-center gap-2 relative"
        >
          <TopSection userInfo={userInfo["data-set"].ui.about}/>

          <span class="w-full h-[100vh] absolute top-[-6vh] bg-gradient-to-b from-[rgb(14,14,14,1)] from-0% via-[rgb(14,14,14,0.8)] via-60% to-[rgb(14,14,14,0)] to-100% -z-30" />

          <div
            class="grid grid-cols-3 gap-2 mx-4 absolute -z-40 opacity-[0.4] select-none"
          >
            {
              Object.values(userInfo["data-set"].ui["open-source"].data).map((info: any) => {
                return (
                  <ContributionsCard info={info}/>
                )
              })
            }
          </div>
        </section>
      )}
    />
  )
})