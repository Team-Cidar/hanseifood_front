import { naviState } from "@modules/atoms";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const usePageControll = () => {
    const navigate = useNavigate();
    const [navigation, set_navigation] = useRecoilState(naviState);
    const handlePage = (name: string) => {
        set_navigation((state) => ({
            ...state,
            prevPage: state.page,
            page: name
        }));
        return navigate(`/${name}`);
    };
    const handlePrevPage = () => {
        set_navigation((state) => ({
            ...state,
            prevPage: state.page,
            page: state.prevPage
        }));
        return navigate(`/${navigation.prevPage}`);
    };
    return { navigation, handlePage, handlePrevPage };
};

export default usePageControll;
