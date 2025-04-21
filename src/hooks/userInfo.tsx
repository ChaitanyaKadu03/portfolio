import { useResource$ } from "@builder.io/qwik";

const useUserInfo = () => {
  const userInfo = useResource$<any>(async () => {
    // const Mode = process.env.MODE;

    const response = await fetch(`http://localhost:3000`);

    const data = await response.json();
    return data;
  });

  return userInfo;
}

export default useUserInfo;