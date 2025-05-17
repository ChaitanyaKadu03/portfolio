import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { personalImg } from "@media/media";
import { Link } from "@builder.io/qwik-city";
import Pako from "pako";

export default component$(() => {
  
  const SSG_ORIGIN = "http://localhost:4000";

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query Connect {
            connect
          }  
          `
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.connect, { to: 'string' }));
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const connectInfo: any = userResource;

        return (
          <footer class="flex flex-col gap-12 justify-center items-center my-12 max-lg:gap-8 max-md:px-4">

            {/* Top part */}
            <div class="grid grid-cols-3 items-center max-lg:grid-cols-4 gap-4 max-md:gap-4">
              <img
                src={personalImg}
                alt="Logo"
                loading="lazy"
                decoding="async"
                height={100}
                width={100}
                class="relative left-1/2 -translate-x-1/2 rounded-md h-[120px] w-[120px] object-cover max-md:w-fit max-md:h-fit"
              />

              <div class="col-span-2 w-[640px] flex flex-col gap-2 max-lg:col-span-3 max-lg:w-[92%] max-md:w-[100%]">
                <h2 class="h2">
                  {connectInfo.section}
                </h2>
                <p class="p2 line-clamp-3 max-md:line-clamp-4">
                  {connectInfo.paragraph}
                </p>
              </div>
            </div>

            {/* Bottom part */}
            <div class="flex flex-col items-center gap-4 max-lg:gap-3">

              {/* Social media links */}
              <div class="flex flex-row gap-5 max-lg:gap-3">
                {
                  Object.keys(connectInfo.data).map((info: any, i: number) => {
                    return (
                      <Link
                        href={connectInfo.data[info].link}
                        target="_blank"
                        class="flex items-center gap-1 p3"
                        key={i}
                      >
                        <img
                          src={connectInfo.data[info].logo}
                          alt={info}
                          loading="lazy"
                          decoding="async"
                          height={100}
                          width={100}
                          class="h-10 w-10 rounded-md bg-neutral-800 cursor-pointer max-lg:h-8 max-lg:w-8 max-md:h-6 max-md:w-6"
                        />
                      </Link>
                    )
                  })
                }
              </div>

              {/* Copyright */}
              <p class="p2">
                {connectInfo.trademark}
              </p>
            </div>
          </footer>
        )
      }}
    />
  )
})