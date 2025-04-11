import { component$, JSXOutput } from "@builder.io/qwik";
import userInfo from "@data/export-data";

export default component$(() => {
  return (
    <section class="dot-bg">
      <div class="flex flex-col py-[80px] gap-2 text-white w-[800px] relative left-1/2 -translate-x-1/2">
        {Object.keys(userInfo["data-set"].resume).map((info) => {
          return (
            <DataInputParser input={info} data={userInfo["data-set"].resume} counter={0} />
          )
        })}
      </div>
    </section>
  )
});

const DataInputParser = ({ input, data, counter }: { input: any, data: any, counter: number }): JSXOutput => {
  if (counter > 100) {
    return (<></>);
  } else if (typeof data[input] === "string") {
    const space = " ".repeat(counter * 2);
    return (
      <p class="font-mono">
        <span class="whitespace-pre">{space}</span>{input}: {data[input]}
      </p>)
  } else if (Array.isArray(data[input])) {
    counter = counter + 1;
    const space = " ".repeat(counter * 2);
    return (
      <>
        {
          data[input].map((info: any) => {
            return (
              <p class="font-mono">
                <span class="whitespace-pre">{space}</span>* {info}
              </p>
            );
          })
        }
      </>
    )
  } else {
    const space = " ".repeat(counter * 2);
    counter = counter + 1;
    return (
      <>
        <p class="font-mono">
          <span class="whitespace-pre">{space}</span>{input}:
        </p>
        {Object.keys(data[input]).map((info: any) => {
          return DataInputParser({ input: info, data: data[input], counter });
        })}
      </>
    )
  }
}