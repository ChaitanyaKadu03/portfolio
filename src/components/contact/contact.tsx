import { component$, Resource, type Signal } from '@builder.io/qwik';
import useUserInfo from "@hooks/userInfo";
import PopCard, { Mode } from '../sub-components/pop-card';

export default component$(({ showContact }: { showContact: Signal<boolean> }) => {
  const userInfo: any = useUserInfo();

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <PopCard
          title={userInfo["data-set"].ui.connect.section}
          data={userInfo["data-set"].ui.connect.data}
          showContact={showContact}
          mode={Mode.Contact}
          userInfo={userInfo}
        />
      )}
    />
  );
});
