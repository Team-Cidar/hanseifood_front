import usePageControll from '@hooks/usePageControll';
import BackOfficeView from './BackOfficeView';

const BackOffice = () => {
  const { handlePage } = usePageControll();

  return <BackOfficeView handleOnNavigate={handlePage} />;
};

export default BackOffice;
