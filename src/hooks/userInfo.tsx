import { useResource$ } from "@builder.io/qwik";

const useUserInfo = () => {
  const userInfo = useResource$<any>(async () => {
    const Mode = process.env.mode;

    const response = await fetch(
      Mode == "production" ? `http://backend.chaitanyakadu.in` : `http://localhost:3000`
    );

    const data = await response.json();
    return data;
  });

  return userInfo;
}

export default useUserInfo;