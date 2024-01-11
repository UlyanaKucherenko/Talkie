import { Dispatch, SetStateAction } from 'react';

import { Popup } from '../../Popup';
import { EditPublicRoomForm } from './EditRoomForm';
import { Room } from '../../../utils/types/rooms.type';

type Props = {
  show: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  roomId?: string;
  roomData?: Room;
};

export default function EditRoomPopup({
  show,
  setIsShow,
  roomId,
  roomData,
}: Props) {
  return (
    <Popup show={show} setIsShow={setIsShow}>
      <EditPublicRoomForm
        onClosePopup={setIsShow}
        roomId={roomId}
        roomData={roomData}
      />
    </Popup>
  );
}
