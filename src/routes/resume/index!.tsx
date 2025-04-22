import { component$, type JSXOutput, Resource, Slot } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";

export default component$(() => {
  const userInfo: any = useUserInfo();

  return (
    <Resource
      value={userInfo}
      onResolved={(userInfo: any) => {
        const resumeInfo: any = userInfo["data-set"].resume;
        return (
          <section class="">
            <div class="flex flex-col my-20 gap-2 text-white w-[800px] relative left-1/2 -translate-x-1/2 max-lg:my-12 max-lg:w-[92vw] max-md:my-6">
              {Object.keys(resumeInfo).map((info: any, i: number) => {
                return (
                  <DataInputParser input={info} data={resumeInfo} counter={0} key={i} />
                )
              })}
            </div>
          </section>
        )
      }}
    />
  )
})

const DataInputParser = component$(({ input, data, counter }: { input: any, data: any, counter: number }): JSXOutput => {
  if (counter > 4) {
    // Prevent infinite loop
    return (<></>);
  } else if (typeof data[input] === "string") {
    const space = " ".repeat(counter * 2);
    return (
      counter > 0 ?
        <ResultText >
          <span class="whitespace-pre">{space}</span>{data[input]}
        </ResultText>
        :
        <ResultText >
          <span class="whitespace-pre">{space}</span>{input}: {data[input]}
        </ResultText>
    )
  } else if (Array.isArray(data[input])) {
    const { space } = getSpace(counter);
    return (
      <>
        {
          data[input].map((info: any, i: number) => {
            return (
              <ResultText key={i}>
                <span class="whitespace-pre">{space}</span>* {info}
              </ResultText>
            );
          })
        }
      </>
    )
  } else {
    const { space, newCounter } = getSpace(counter);
    return (
      <>
        <ResultText >
          <span class="whitespace-pre">{space}</span>{input}:
        </ResultText>
        {Object.keys(data[input]).map((info: any, i: number) => {
          return <DataInputParser input={info} data={data[input]} counter={newCounter} key={i} />;
        })}
      </>
    )
  }
})

const getSpace = (counter: number): { space: string, newCounter: number } => {
  const space = " ".repeat(counter * 2);
  const newCounter = counter + 1;
  return { space, newCounter };
}

const ResultText = component$(() => {
  return (
    <p class="font-mono text-[16px] leading-[150%] tracking-[0%] text-neutral-300 w-[100%] overflow-hidden max-lg:text-[18px] max-md:text-[12px]">
      <Slot />
    </p>
  )
})