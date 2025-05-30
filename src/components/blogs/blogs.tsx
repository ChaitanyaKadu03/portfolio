import { component$, Resource, type Signal, useResource$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import TopSection from "../sub-components/top-section";
import Pako from "pako";

export default component$(() => {
  const sliderRef = useSignal<HTMLElement>();
  
  const SSG_ORIGIN = import.meta.env.SSR_ORIGIN || "https://backend.chaitanyakadu.in";

  const sectionRef: Signal<Element | undefined> = useSignal<Element | undefined>(undefined);
  const isSectionVisible: Signal<boolean> = useSignal<boolean>(false);


  useVisibleTask$(()=>{
    if(sectionRef.value) {
      isSectionVisible.value = true;
    }
  });

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `query Blogs {
          blogs
        }`
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.blogs, { to: 'string' }));
  });

  // useVisibleTask$(() => {
  //   const interval = setInterval(() => {
  //     idx.value++;
  //     const total = Object.keys(userInfo["data-set"].ui.blogs.data || {}).length;
  //     if (idx.value >= total) {
  //       setTimeout(() => {
  //         sliderRef.value!.style.transition = "none";
  //         idx.value = 0;

  //         sliderRef.value!.offsetHeight;
  //         sliderRef.value!.style.transition = "";
  //       }, 500);
  //     }
  //   }, 3000);

  //   return () => clearInterval(interval);
  // });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const dataArr = Object.values(userResource.data);

        return (
          <section 
            class={`flex flex-col gap-8 items-center my-[160px] overflow-hidden max-md:my-8 ${isSectionVisible.value ? "slide-in-animation" : "opacity-0 top-[8vh]"}`}
            ref={sectionRef}
          >

            {/* Heading */}
            <div class="flex flex-col items-center gap-4 text-center">
              <TopSection userInfo={userResource} />
            </div>

            <div class="relative overflow-hidden w-full bg-[#2222221b] p-2">

              {/* Cards slider */}
              <div
                ref={sliderRef}
                class="grid grid-cols-4 max-lg:grid-cols-2 gap-2 transition-transform duration-500"
              // style={`transform: translateX(-${idx.value * (100 / slides.length)}%)`}
              >

                {/* Each card */}
                {dataArr.slice(0,4).map((item: any, i) => (
                  <div
                    class="inline-block flex-shrink-0 w-full rounded-[10px] h-fit min-lg:opacity-40 min-lg:hover:opacity-100 transition-opacity transition-discrete duration-500 ease-in-out"
                    key={i}
                  >
                    <div class="relative overflow-hidden h-[240px] rounded-t-[10px] max-lg:max-h-[200px] max-md:max-h-[120px]">
                      <Link
                        href={item.link}
                        class="p-2"
                        target="_blank"
                      >
                        <img
                          src={item.img}
                          alt="Blog banner"
                          loading="lazy"
                          decoding="async"
                          height={100}
                          width={100}
                          class="absolute top-0 left-0 w-full h-full object-cover transition duration-[350ms]"
                        />
                      </Link>
                    </div>

                    <div class="flex flex-col items-start bg-[#1f1f1f98] p-[10px] rounded-b-[10px] gap-2 h-full max-lg:h-full">
                      <p class="p2 line-clamp-1">{item.title}</p>
                      <p class="p3 h-fit w-full line-clamp-4 overflow-hidden max-lg:line-clamp-3">{item.paragraph}</p>
                      <p class="p3">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
});
