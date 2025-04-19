import { component$, JSXOutput, Resource, useId } from "@builder.io/qwik";
import useUserInfo from "@hooks/userInfo";

export default component$(() => {
  const userInfo: any = useUserInfo();

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <section class="dot-bg">
          <div class="flex flex-col py-[80px] gap-2 text-white w-[800px] relative left-1/2 -translate-x-1/2">
            {Object.keys(userInfo["data-set"].resume).map((info) => {
              return (
                <DataInputParser input={info} data={userInfo["data-set"].resume} counter={0} />
              )
            })}
          </div>
        </section>
      )}
    />
  )
})

const DataInputParser = component$(({ input, data, counter }: { input: any, data: any, counter: number }): JSXOutput => {
  if (counter > 100) {
    return (<></>);
  } else if (typeof data[input] === "string") {
    const space = " ".repeat(counter * 2);
    return (
      counter > 0 ?
        <p class="font-mono text-xl">
          <span class="whitespace-pre">{space}</span>{data[input]}
        </p>
        :
        <p class="font-mono text-xl">
          <span class="whitespace-pre">{space}</span>{input}: {data[input]}
        </p>
    )
  } else if (Array.isArray(data[input])) {
    const newCounter = counter + 1;
    const space = " ".repeat(newCounter * 2);
    return (
      <>
        {
          data[input].map((info: any) => {
            return (
              <p class="font-mono text-xl">
                <span class="whitespace-pre">{space}</span>* {info}
              </p>
            );
          })
        }
      </>
    )
  } else {
    const space = " ".repeat(counter * 2);
    const newCounter = counter + 1;
    return (
      <>
        <p class="font-mono text-xl">
          <span class="whitespace-pre">{space}</span>{input}:
        </p>
        {Object.keys(data[input]).map((info: any) => {
          return <DataInputParser input={info} data={data[input]} counter={newCounter} />;
        })}
      </>
    )
  }
})