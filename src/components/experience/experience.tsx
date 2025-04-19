import { component$, Resource, Signal, useSignal } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";
import Dropdown, { Mode } from "../sub-components/dropdown";

export default component$(() => {
  const userInfo: any = useUserInfo();
  const currOption: Signal<number> = useSignal<number>(0);

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <section
          class="grid grid-cols-3 py-[120px] dot-bg"
        >
          <div
            class="flex flex-col items-center"
          >
            <div class="flex flex-col gap-4 h-fit w-[360px] border-[0.2px] border-neutral-800 bg-[#16161640] rounded-md p-2 sticky top-[120px]">
              <img
                alt="Banner"
                src={userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].img1}
                class="h-[200px] w-full object-cover rounded-md"
              />
              <div class="flex flex-col gap-2">
                <Dropdown
                  currOption={currOption}
                  userInfo={userInfo}
                  mode={Mode.Experience}
                />
                <p class="p1">
                  {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].Role}
                </p>
                <p class="p3">
                  {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].Duration}
                </p>
                <p class="p2">
                  Tech Stack : {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]]["Tech Stack"]}
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-span-2 px-8 flex flex-col gap-4 w-[80%]"
          >
            <h4 class="h4 mb-6 w-[80%]">
              {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].title}
            </h4>
            <p class="p1">
              {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].paragraph1}
            </p>
            <p class="p1">
              {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].paragraph2}
            </p>
            <img
              alt="Banner"
              src={userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].img2}
              class="my-4 w-full"
            />
            <p class="p1">
              {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].paragraph3}
            </p>
            <img
              alt="Banner"
              src={userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].img3}
              class="my-4 w-full"
            />
            <p class="p1">
              {userInfo["data-set"].ui.experience.data[Object.keys(userInfo["data-set"].ui.experience.data)[currOption.value]].paragraph4}
            </p>
          </div>
        </section>
      )}
    />
  )
})