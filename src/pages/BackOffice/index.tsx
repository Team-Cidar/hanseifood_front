import { useNavigate } from 'react-router-dom';
import BackOfficeView from './BackOfficeView';
// import usePageControll from '@hooks/usePageControll';

const BackOffice = () => {
  // const { handlePage } = usePageControll();
  const navigate = useNavigate();

  const handlePage = (route: string) => {
    navigate(`/${route}`);
  };

  return <BackOfficeView handleOnNavigate={handlePage} />;
};

export default BackOffice;
