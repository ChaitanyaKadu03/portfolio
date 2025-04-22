import { component$, Resource, type Signal, useStore, useVisibleTask$ } from "@builder.io/qwik"

export enum Mode {
  Experience,
  Tech
}

export default component$(({ userInfo, currOption, mode }: { userInfo: any, currOption: Signal, mode: Mode }) => {
  useVisibleTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      (currOption.value >= (Object.keys(userInfo).length - 1)) ? currOption.value = 0 : currOption.value = currOption.value + 1;
    }, 6000)

    cleanup(() => clearInterval(interval));
  })

  return (
    <Resource
      value={userInfo}
      onResolved={() => {
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
              Object.keys(userInfo).map((info, i) => {
                return (
                  <option
                    value={i}
                    defaultSelected={i === currOption.value ? true : false}
                    key={i}
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