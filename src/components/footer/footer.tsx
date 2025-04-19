import { component$, Resource } from "@builder.io/qwik";
import PersonalImg from "@media/personal-img.png";
import LinkImg from "@media/Icons/link.svg";
import GithubImg from "@media/Icons/github.svg";
import LinkedInImg from "@media/Icons/linkedin.svg";
import MailImg from "@media/Icons/mail-no-padding.svg";
import useUserInfo from "@hooks/userInfo";
import Button from "@components/sub-components/button";

export default component$(() => {
  const userInfo: any = useUserInfo();

  return (
    <Resource
      value={userInfo}
      onPending={() => <p>...Loading</p>}
      onResolved={(userInfo: any) => (
        <footer class="flex flex-col gap-12 justify-center items-center my-12">
          <div class="grid grid-cols-3 items-center">
            <img
              alt="Footer Image"
              src={PersonalImg}
              class="relative left-1/2 -translate-x-1/2 rounded-md h-[120px] w-[120px] object-cover"
            />
            <div class="col-span-2 w-[640px] flex flex-col gap-2">
              <h2 class="h2">
                {userInfo["data-set"].ui.connect.section}
              </h2>
              <p class="p2">
                {userInfo["data-set"].ui.connect.paragraph}
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex flex-row gap-2">
              <p
                class="flex items-center gap-1 p3"
              >
                <img
                  src={GithubImg}
                  alt="Github Icon"
                  class="h-6 w-6 rounded-md bg-neutral-800"
                />
              </p>
              <p
                class="flex items-center gap-1 p3"
              >
                <img
                  src={LinkImg}
                  alt="Link Icon"
                  class="h-6 w-6 rounded-md bg-neutral-800"
                />
              </p>
              <p
                class="flex items-center gap-1 p3"
              >
                <img
                  src={LinkedInImg}
                  alt="Link Icon"
                  class="h-6 w-6 rounded-md bg-neutral-800"
                />
              </p>
            </div>
            <p class="p2">
              {userInfo["data-set"].ui.connect.trademark}
            </p>
          </div>
        </footer>
      )}
    />
  )
})