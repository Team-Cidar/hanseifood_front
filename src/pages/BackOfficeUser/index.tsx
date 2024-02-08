import { usePagingData } from '@hooks/usePagingData';
import BackOfficeUserView from './BackOfficeUserView';
import { UserInfo, UserRole, UserRoleKey } from '@type/index';
import { requestGetUser } from '@apis/index';

const BackOfficeUser = () => {
  const { scrollRef, datas } = usePagingData<UserInfo>(requestGetUser);

  const convertUserRoleToEnum = (): UserInfo[] => {
    const newData: UserInfo[] = datas.map((user) => {
      const roleKey: UserRoleKey = user.role as unknown as UserRoleKey;
      return { ...user, role: UserRole[roleKey] };
    });
    return newData;
  };

  return (
    <BackOfficeUserView
      datas={{
        users: convertUserRoleToEnum(),
      }}
      refs={{
        scrollRef: scrollRef,
      }}
      callbacks={{
        onSomething: () => {},
      }}
    />
  );
};

export default BackOfficeUser;
