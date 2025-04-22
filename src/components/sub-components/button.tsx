import { component$, type Signal } from "@builder.io/qwik";
import { type RouteNavigate, useNavigate } from "@builder.io/qwik-city";
import { githubIcon } from "@media/media";

export enum EButtonMode {
  TRIGGER,
  LINK
}

export interface IButtonsParams {
  text: string | null, // button text
  icon: string | boolean,
  isPrimary: boolean,
}

export interface ILinkButtonParams extends IButtonsParams {
  mode: EButtonMode.LINK, // is the button a redirect link or event trigger 
  link: string, // redirect link
}

export interface ITriggerButtonParams extends IButtonsParams {
  mode: EButtonMode.TRIGGER, // is the button a redirect link or event trigger
  showContact: any,
  selectedVal?: Signal,
  value?: string
}

export default component$((params: ILinkButtonParams | ITriggerButtonParams) => {
  const priBtnCss: string = `border-[0.4px] border-neutral-600 rounded-md px-4 py-2 btn-primary blue-gradient cursor-pointer btn-shadow flex gap-2 items-center w-fit`;
  const secBtnCss: string = `border-[0.4px] border-neutral-600 rounded-md px-4 py-2 btn-primary blue-gradient cursor-pointer btn-shadow flex gap-2 items-center w-fit max-md:px-1 max-md:py-1 max-md:gap-0 max-md:line-camp-1 max-md:overflow-hidden`;
  const navigate: RouteNavigate = useNavigate();

  return (
    <button
      class={
        params.isPrimary ?
          priBtnCss
          :
          secBtnCss
      }

      onClick$={() => {

        if (params.mode === EButtonMode.TRIGGER) {
          // If the button is perceived as a event trigger => Would require showContact, selectedVal, value
          params.selectedVal && (params.selectedVal.value = params.value);
          params.showContact.value = !params.showContact.value;
        } else {
          // If the button is perceived as a link to another webpage => Would require link
          navigate(
            params.link,
            {
              type: "link",
              scroll: false
            }
          )
        }

      }}
    >
      {
        params.icon && typeof params.icon === "string" ? (
          <img
            src={params.icon || githubIcon}
            alt="Github icon"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            height={100}
            width={100}
            class="h-[24px] w-fit object-cover"
          />
        ) : null
      }
      {params.text}
    </button>
  )
})