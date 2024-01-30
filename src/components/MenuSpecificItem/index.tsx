import SvgIcon from '@components/SvgIcon';
import { EColor } from '@styles/color';
import { Container, DateText, FeedbackBottom, MenuCard, MenuList, SvgText, SvgView } from './MenuSpecificitem.styled';
import { MenuSpecificItemProps } from './types';


const MenuSpecificItem = ({menu, liked, onInteraction}: MenuSpecificItemProps) => {
  return (
    <Container onClick={() => onInteraction(menu.menuId)}>
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
                    fill={liked ? EColor.RED : EColor.TEXT_500}
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
