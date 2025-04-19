import { component$ } from "@builder.io/qwik";

export default component$(({ userInfo }: any) => {
  return (
    <>
      <h6
        class="h6-title bg-gradient-to-r from-[#80bdff] to-[#005dbd] bg-clip-text text-transparent"
      >
        {userInfo.section}
      </h6>
      <h3
        class="h3"
      >
        {userInfo.header}
      </h3>
      <p
        class="p1 max-w-[800px]"
      >
        {userInfo.paragraph}
      </p>
    </>
  )
})