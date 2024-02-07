import BackOfficeView from './BackOfficeView';
import usePageControll from '@hooks/usePageControll';

const BackOffice = () => {
  const { handlePage } = usePageControll();

  return <BackOfficeView handleOnNavigate={handlePage} />;
};

export default BackOffice;
