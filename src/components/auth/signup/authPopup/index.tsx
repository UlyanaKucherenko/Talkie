import { useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';

import { Status } from '../../../../utils/enums/status.enum';
import { Popup } from '../../../Popup';
import { AuthForm } from '../authForm';
import { AuthGreetings } from '../authGreetings';
import { userSelector } from '../../../../store/user';

type Props = {
  show: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export const AuthPopup = ({ show, setIsShow }: Props) => {
  const { status } = useSelector(userSelector);
  return (
    <Popup show={show} setIsShow={() => setIsShow(false)}>
      {status !== Status.Succeeded && <AuthForm />}
      {status === Status.Succeeded && (
        <AuthGreetings okOnClick={() => setIsShow(false)} />
      )}
    </Popup>
  );
};
