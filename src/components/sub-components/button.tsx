const Button = ({ text, link, isPrimary }: { text: string, link: string, isPrimary: boolean }) => {
  return (
    <a
      class={
        isPrimary ?
          `border-[0.4px] border-neutral-600 rounded-full px-4 py-2 btn-primary blue-gradient cursor-pointer btn-shadow`
          :
          ``
      }
      href={link}
    >
      {text}
    </a>
  )
}

export default Button; 