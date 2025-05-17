import { component$, Resource, useResource$, type Signal } from '@builder.io/qwik';
import PopCard, { Mode } from '../sub-components/pop-card';
import Pako from 'pako';

export default component$(({ showContact }: { showContact: Signal<boolean> }) => {
  const userResource = useResource$(async () => {
    const response = await fetch('http://localhost:4000/graphql', {
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
        const connectInfo = userResource;

        return (
          <PopCard
            title={connectInfo.section}
            data={connectInfo.data}
            showContact={showContact}
            mode={Mode.Contact}
            userInfo={connectInfo}
          />
        )
      }}
    />
  );
});
