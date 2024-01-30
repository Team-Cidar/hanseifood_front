import { MenuSpecific } from '@type/index';
import { Container, DateText, FeedbackBottom, MenuCard, MenuList, SvgText, SvgView } from './MenuSpecificitem.styled';
import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';

interface MenuSpecificItemProps {
  menu: MenuSpecific,
  onClick: (menuId: string) => void
}

const MenuSpecificItem = ({menu, onClick}: MenuSpecificItemProps) => {
  return (
    <Container onClick={() => onClick(menu.menuId)}>
        {menu.deleted ?
            <DateText $deleted>{menu.date}</DateText> :
            <DateText>{menu.date}</DateText>
        }
        <MenuCard>
            {menu.menus.map((data, idx) => (
                <MenuList key={idx}>{data}</MenuList>
            ))}
        </MenuCard>
        <FeedbackBottom >
            <SvgView>
                <SvgIcon
                    name={"comment"}
                    width={14}
                    height={14}
                    fill={EColor.TEXT_500}
                />
                <SvgText>
                    {menu.commentCount}
                </SvgText>
            </SvgView>
            <SvgView>
                <SvgIcon
                    name={"like"}
                    width={14}
                    height={14}
                    fill={EColor.RED}
                />
                <SvgText>
                    {menu.likeCount}
                </SvgText>
            </SvgView>
        </FeedbackBottom>
    </Container>
  );
};

export default MenuSpecificItem;
