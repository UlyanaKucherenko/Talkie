import { Dispatch, SetStateAction } from 'react';

import { Popup } from '../../Popup';
import { CreatePublicRoomForm } from './CreateRoomForm';

type Props = {
  show: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export default function CreateRoomPopup({ show, setIsShow }: Props) {
  return (
    <Popup show={show} setIsShow={setIsShow}>
      <CreatePublicRoomForm onClosePopup={setIsShow} />
    </Popup>
  );
}
