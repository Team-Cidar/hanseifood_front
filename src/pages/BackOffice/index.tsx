import { useNavigate } from 'react-router-dom';
import BackOfficeView from './BackOfficeView';

const BackOffice = () => {
  const navigate = useNavigate();

  const onNavigate = (route: string) => {
    navigate(route);
  };
  return <BackOfficeView handleOnNavigate={onNavigate} />;
};

export default BackOffice;
