import SvgIcon from '@components/SvgIcon';
import { Container, SvgButton } from './styles';
import { BackOfficeViewProps } from './types';
import { EColor } from '@styles/color';

const BackOfficeView = ({ handleOnNavigate }: BackOfficeViewProps) => {
  return (
    <Container>
      <SvgButton onClick={() => handleOnNavigate('back-office/menus')}>
        <SvgIcon name="cloche" width="100%" height="100%" fill={EColor.TEXT_300} stroke={EColor.TEXT_900} />
      </SvgButton>
      <SvgButton onClick={() => handleOnNavigate('back-office/comments')}>
        <SvgIcon name="comment" width="100%" height="100%" fill={EColor.TEXT_300} stroke={EColor.TEXT_900} />
      </SvgButton>
      <SvgButton onClick={() => handleOnNavigate('back-office/users')}>
        <SvgIcon name="about_me" width="100%" height="100%" fill={EColor.TEXT_300} stroke={EColor.TEXT_900} />
      </SvgButton>
      <SvgButton onClick={() => handleOnNavigate('back-office/charts')}>
        <SvgIcon name="chart" width="100%" height="100%" fill={EColor.TEXT_300} stroke={EColor.TEXT_900} />
      </SvgButton>
    </Container>
  );
};

export default BackOfficeView;