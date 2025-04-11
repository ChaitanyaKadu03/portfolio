const Button = ({ text, link, isPrimary, icon }: { text: string, link: string, isPrimary: boolean, icon?: string }) => {
  return (
    <a
      class={
        isPrimary ?
          `border-[0.4px] border-neutral-600 rounded-md px-4 py-2 btn-primary blue-gradient cursor-pointer btn-shadow flex gap-2 items-center w-fit`
          :
          ``
      }
      href={link}
    >
      {
        icon ? (<img
          alt="icon"
          src={icon}
          class="h-[24px] w-fit object-cover"
        />) : null
      }
      {text}
    </a>
  )
}

export default Button; 