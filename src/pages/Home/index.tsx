import { Default, Mobile } from "@utils/MediaQuery";
import { HomeView } from "./HomeView";

export const Home = () => {
  return (
    <>
      <Default>
        <HomeView isMobile={false} />
      </Default>
      <Mobile>
        <HomeView isMobile={true} />
      </Mobile>
    </>
  );
};
