import { component$, Signal } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"

export default component$(({ text, link, isLink, isPrimary, icon, showContact, selectedVal, value }: { text: string | null, link?: string, isLink: boolean, isPrimary: boolean, icon?: string, showContact?: any, selectedVal?: Signal, value?: string }) => {
  const classValLink: string = `border-[0.4px] border-neutral-600 rounded-md px-4 py-2 btn-primary blue-gradient cursor-pointer btn-shadow flex gap-2 items-center w-fit`;

  if (isLink) {
    return (
      <Link
        class={
          isPrimary ?
            classValLink
            :
            classValLink
        }
        href={link}
        target="_blank"
      >
        {
          icon ? (<img
            alt="icon"
            src={icon}
            class="h-[24px] w-fit object-cover"
          />) : null
        }
        {text}
      </Link>
    )
  } else {
    return (
      <button
        class={
          isPrimary ?
            classValLink
            :
            classValLink
        }
        onClick$={() => {
          if (selectedVal) {
            selectedVal.value = value;
          }
          showContact.value = !showContact.value;
        }}
      >
        {
          icon ? (<img
            alt="icon"
            src={icon}
            class="h-[24px] w-fit object-cover"
          />) : null
        }
        {text}
      </button>
    )
  }
})