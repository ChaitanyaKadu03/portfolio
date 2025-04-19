import { component$, Resource, Signal, useSignal } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";
import TopSection from "../sub-components/top-section";
import Dropdown, { Mode as DropdownMode } from "../sub-components/dropdown";
import Button from "../sub-components/button";
import GithubIcon from "@media/Icons/github.svg";
import PopCard, { Mode } from "../sub-components/pop-card";

export default component$(() => {
  const userInfo: any = useUserInfo();
  const currOption: Signal<number> = useSignal<number>(0);
  const selectedVal: Signal<string> = useSignal<string>("JavaScript");
  const showContact: Signal<boolean> = useSignal<boolean>(false);

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <section class="flex flex-col gap-12 my-24 relative">
          <div class="flex flex-col items-center justify-center text-center gap-2">
            <TopSection userInfo={userInfo["data-set"].ui.technologies} />
          </div>
          <div class="w-fit mx-auto">
            <Dropdown userInfo={userInfo} currOption={currOption} mode={DropdownMode.Tech} />
          </div>
          <div class="grid grid-cols-3 gap-2  p-2 w-[1024px] bg-[#0c0c0c] rounded-md shadow-2xl shadow-neutral-800 relative left-1/2 -translate-x-1/2 box-border">
            {
              Object.keys(userInfo["data-set"].ui.technologies.data[Object.keys(userInfo["data-set"].ui.technologies.data)[currOption.value]]).map((val: any, i: number) => {
                return (
                  <div
                    class="flex flex-col gap-2 items-center justify-center text-center bg-no-repeat bg-contain bg-center h-full w-fit border-[0.2px] border-neutral-800 rounded-md bg-[#22222240] py-12 px-8 overflow-hidden box-jump"
                    style={{ animationDelay: `${i > 2 ? (8 - i) : i}s` }}
                  >
                    <h6 class="p1">
                      {val}
                    </h6>
                    <p class="p2">
                      {userInfo["data-set"].ui.technologies.data[Object.keys(userInfo["data-set"].ui.technologies.data)[currOption.value]][val].text}
                    </p>
                    <Button
                      text={"Proof of Work"}
                      isLink={false}
                      isPrimary={false}
                      icon={GithubIcon}
                      showContact={showContact}
                      selectedVal={selectedVal}
                      value={val}
                    />
                    <img
                      src={userInfo["data-set"].ui.technologies.data[Object.keys(userInfo["data-set"].ui.technologies.data)[currOption.value]][val]["link"]}
                      alt={val}
                      class="h-fit w-[160px] object-cover absolute opacity-10 select-none -z-50"
                    />
                  </div>
                );
              })
            }
          </div>
          {
            showContact.value
              ?
              <PopCard
                showContact={showContact}

                title={`${selectedVal.value}`}

                data={userInfo["data-set"].ui.technologies.data[Object.keys(userInfo["data-set"].ui.technologies.data)[currOption.value]][selectedVal.value]["proof-of-work"]}

                mode={Mode.Tech}
                userInfo={userInfo}
              />
              :
              null
          }
        </section>
      )}
    />
  )
})
