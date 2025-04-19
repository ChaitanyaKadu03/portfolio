import { component$, Resource, Signal, useStore } from "@builder.io/qwik"

export enum Mode {
  Experience,
  Tech
}

export default component$(({ userInfo, currOption, mode }: { userInfo: any, currOption: Signal, mode: Mode }) => {
  let userData: any = useStore<any>({});

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => {
        switch (mode) {
          case Mode.Experience:
            userData = userInfo["data-set"].ui.experience.data;
            break;
          case Mode.Tech:
            userData = userInfo["data-set"].ui.technologies.data;
            break;
            default:
            userData = userInfo;

        }
        return (
          <select
            name="select"
            aria-label="Select"
            class="bg-neutral-900 rounded-md px-4 py-2 h6 outline-0 w-fit cursor-pointer border-[0.2px] border-[#272727] shadow-md shadow-[#27272757]"
            value={currOption.value}
            onChange$={(event) => {
              const val = (event.target as HTMLSelectElement).value;
              currOption.value = val;
            }}
          >
            {
              Object.keys(userData).map((info, i) => {
                return (
                  <option
                    value={i}
                    defaultSelected={i === currOption.value ? true : false}
                  >
                    {info}
                  </option>
                )
              })
            }
          </select>
        )
      }}
    />
  )
})