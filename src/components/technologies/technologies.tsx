import { component$, Resource, type Signal, useOnWindow, $, useResource$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import TopSection from "../sub-components/top-section";
import Dropdown from "../sub-components/dropdown";
import Button, { EButtonMode } from "../sub-components/button";
import { githubIcon } from "@media/media";
import PopCard, { Mode } from "../sub-components/pop-card";
import Pako from "pako";

export default component$(() => {
  const isMobile: Signal<boolean> = useSignal<boolean>(true);
  const currOption: Signal<number> = useSignal<number>(0);
  const selectedVal: Signal<string> = useSignal<string>("JavaScript");
  const showContact: Signal<boolean> = useSignal<boolean>(false);
  const SSG_ORIGIN = import.meta.env.SSR_ORIGIN || "https://backend.chaitanyakadu.in";
  const sectionRef: Signal<Element | undefined> = useSignal<Element | undefined>(undefined);
  const isSectionVisible: Signal<boolean> = useSignal<boolean>(false);


  useVisibleTask$(()=>{
    if(sectionRef.value) {
      isSectionVisible.value = true;
    }
  });

  // useOnWindow("DOMContentLoaded", $(() => {
  //   if (typeof window !== "undefined" && window.innerWidth < 820) {
  //     isMobile.value = true;
  //   }
  // }));

  const userResource = useResource$(async () => {
    const response = await fetch(`${SSG_ORIGIN}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query GetTechnologies {
          technologies
        }
        `
      }),
    });
    const result = await response.json()
    return JSON.parse(Pako.inflate(result.data.technologies, { to: 'string' }));
  });

  return (
    <Resource
      value={userResource}
      onResolved={(userResource: any) => {
        const techInfo: any = userResource;

        if(isMobile.value) {
          return (
            <section 
              class={`flex flex-col gap-12 my-24 relative max-sm:px-4 ${isSectionVisible.value ? "slide-in-animation" : "opacity-0 top-[8vh]"}`}
              ref={sectionRef}
            >

              {/* Headings */}
              <div class="flex flex-col items-center justify-center text-center gap-2">
                <TopSection userInfo={techInfo} />
              </div>

              {/* Dropdown button */}
              <div class="w-fit mx-auto">
                <Dropdown userInfo={techInfo.data} currOption={currOption} />
              </div>

              {/* Proof of work cards */}
              <div class="grid grid-cols-3 gap-2 p-2 w-[88vw] max-w-[1024px] bg-[#0c0c0c] rounded-md shadow-2xl shadow-neutral-800 relative left-1/2 -translate-x-1/2 box-border max-md:grid-cols-2 max-md:w-full">
                {
                  Object.keys(techInfo.data[Object.keys(techInfo.data)[currOption.value]]).map((val: any, i: number) => {
                    return (
                      <div
                        class="flex flex-col gap-2 items-center justify-center text-center bg-no-repeat bg-contain bg-center h-full w-full border-[0.2px] border-neutral-800 rounded-md bg-[#22222240] py-10 px-6 overflow-hidden box-jump max-lg:py-4 max-lg:px-2"
                        style={{ animationDelay: `${i > 2 ? (8 - i) : i}s` }}
                        key={i}
                      >
                        <h6 class="p1">
                          {val}
                        </h6>
                        <p class="p2 line-clamp-6 max-md:line-clamp-4">
                          {techInfo.data[Object.keys(techInfo.data)[currOption.value]][val].text}
                        </p>
                        <Button
                          text={"Proof of Work"}
                          mode={EButtonMode.TRIGGER}
                          isPrimary={false}
                          icon={githubIcon}
                          showContact={showContact}
                          selectedVal={selectedVal}
                          value={val}
                        />

                        {/* Cards background image */}
                        <img
                          src={techInfo.data[Object.keys(techInfo.data)[currOption.value]][val]["link"]}
                          alt={val}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          width={100}
                          height={100}
                          class="h-fit w-[160px] object-cover absolute opacity-10 select-none -z-50 max-md:w-[80%] max-md:h-[80%] max-md:object-contain"
                        />
                      </div>
                    );
                  })
                }
              </div>

              {/* On click over proof-of-work btn the card gets displayed */}
              {
                showContact.value
                  ?
                  <PopCard
                    showContact={showContact}

                    title={`${selectedVal.value}`}

                    data={techInfo.data[Object.keys(techInfo.data)[currOption.value]][selectedVal.value]["proofOfWork"]}

                    mode={Mode.Tech}

                    userInfo={userResource}
                  />
                  :
                  null
              }
              
            </section>
          )
        } else {
          return (
            <section class={`flex flex-col gap-12 my-24 slide-in-animation`}>

              {/* Headings */}
              <div class="flex flex-col items-center justify-center text-center gap-2">
                <TopSection userInfo={techInfo} />
              </div>

              {/* Dropdown button */}
              <div class="w-fit mx-auto">
                <Dropdown userInfo={techInfo.data} currOption={currOption} />
              </div>

              {/* Timeline view */}
              <div class="timeline mx-auto max-w-[760px] rounded-md box-border">

                {/* For background color */}
                <span class="bg-[#181818] rounded-md w-full h-full -z-40 absolute top-0"/>

                {
                  Object.keys(techInfo.data[Object.keys(techInfo.data)[currOption.value]]).map((val: any, i: number) => {
                    return (
                      <>
                        <div class={`timeline__event w-full px-4 py-2 animated fadeInUp delay-1s timeline__event--type${ ((i % 3) + 1) % 3 === 0 ? "3" : ((i % 3) + 1) % 2 === 0 ? "2" : "1"}`}>
                          <div 
                            class="timeline__event__icon relative p-4 h-24 w-24 rounded-md cursor-pointer"
                            onClick$={()=>{
                              showContact.value = true;
                              selectedVal.value = val;
                            }}
                          >
                            <img
                              src={techInfo.data[Object.keys(techInfo.data)[currOption.value]][val]["link"]}
                              alt="Icon"
                              height={100}
                              width={100}
                              loading="lazy"
                              decoding="async"
                              class="h-fit w-fit object-cover"
                            />
                          </div>
                          <div 
                            class="timeline__event__date cursor-pointer min-w-[160px]"
                            onClick$={()=>{
                              showContact.value = true;
                              selectedVal.value = val;
                            }}
                          >
                            {val}
                          </div>
                          <div class="timeline__event__content ">
                            <div class="timeline__event__description">
                              <p class="p2-txt">
                                {techInfo.data[Object.keys(techInfo.data)[currOption.value]][val].text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                }
              </div>

              {/* On click over proof-of-work btn the card gets displayed */}
              {
                showContact.value
                  ?
                  <PopCard
                    showContact={showContact}

                    title={`${selectedVal.value}`}

                    data={techInfo.data[Object.keys(techInfo.data)[currOption.value]][selectedVal.value]["proofOfWork"]}

                    mode={Mode.Tech}

                    userInfo={userResource}
                  />
                  :
                  null
              }

            </section>
          )
        }
      }}
    />
  )
})