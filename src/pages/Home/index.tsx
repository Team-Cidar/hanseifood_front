import { Default, Mobile } from '@utils/MediaQuery';
import { HomeView } from './HomeView';

export const Home = () => {
  return (
    <>
      <Default>
        <HomeView />
      </Default>
      <Mobile>
        <HomeView />
      </Mobile>
    </>
  );
};
