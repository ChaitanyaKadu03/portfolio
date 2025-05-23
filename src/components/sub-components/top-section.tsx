import { component$, Resource } from "@builder.io/qwik";

export default component$(({ userInfo }: any) => {
  return (
    <Resource
      value={userInfo}
      onResolved={(userInfo: any) => (
        <>
          <h2
            class="h6-title bg-gradient-to-r from-[#80bdff] to-[#005dbd] bg-clip-text text-transparent"
          >
            {userInfo.section}
          </h2>
          <h3
            class="h3"
          >
            {userInfo.header}
          </h3>
          <p
            class="p1 max-w-[800px] max-lg:w-[84vw]"
          >
            {userInfo.paragraph}
          </p>
        </>
      )}
    />
  )
})