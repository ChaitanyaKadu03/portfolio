import { component$, Resource, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import useUserInfo from "@hooks/userInfo";
import TopSection from "../sub-components/top-section";

export default component$(() => {
  const userInfo: any = useUserInfo();
  const idx = useSignal(0);
  const sliderRef = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      idx.value++;
      const total = Object.keys(userInfo.value?.["data-set"].ui.blogs.data || {}).length;
      if (idx.value >= total) {
        setTimeout(() => {
          sliderRef.value!.style.transition = "none";
          idx.value = 0;

          sliderRef.value!.offsetHeight;
          sliderRef.value!.style.transition = "";
        }, 500);
      }
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(user: any) => {
        const dataArr = Object.values(user["data-set"].ui.blogs.data);
        const slides = [...dataArr, ...dataArr];

        return (
          <section class="flex flex-col gap-8 items-center my-[160px]">
            <div class="flex flex-col items-center gap-4 text-center">
              <TopSection userInfo={user["data-set"].ui.blogs} />
            </div>

            <div class="relative overflow-hidden w-full bg-[#2222221b] p-2">
              <div
                ref={sliderRef}
                class="flex gap-2 transition-transform duration-500"
                style={`transform: translateX(-${idx.value * (100 / slides.length)}%)`}
              >
                {slides.map((item: any, i) => (
                  <div
                    class="inline-block flex-shrink-0 w-[calc(25%_-_0.5rem)] rounded-[10px] h-full"
                    key={i}
                  >
                    <div class="relative overflow-hidden h-[240px] rounded-t-[10px]">
                      <Link
                        href={item.link}
                        class="p-2"
                        target="_blank"
                      >
                        <img
                          src={item.img}
                          class="absolute top-0 left-0 w-full h-full object-cover transition duration-[350ms]"
                        />
                      </Link>
                    </div>
                    <div class="flex flex-col items-start bg-[#303030] p-[10px] rounded-b-[10px] gap-2 h-fit">
                      <p class="p1">{item.title}</p>
                      <p class="p2 h-fit w-full line-clamp-4 overflow-hidden">{item.paragraph}</p>
                      <p class="p3">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <span class="pointer-events-none bg-gradient-to-r from-[#0e0e0e] from-0% via-[#0e0e0ed1] via-40% to-transparent absolute inset-y-0 left-0 w-[420px]" />
              <span class="pointer-events-none bg-gradient-to-l from-[#0e0e0e] via-[#0e0e0ed1] via-40% to-transparent absolute inset-y-0 right-0 w-[420px]" />
            </div>
          </section>
        );
      }}
    />
  );
});
