/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { type Dispatch, type SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { i18n } from '../../../../libs/i18n';
import styles from './index.module.css';
import { RButton } from '../../../RButton';
import { editPublicRoom } from '../../../../api/rooms';
import { CreateRoomData, Room } from '../../../../utils/types/rooms.type';
import { roomsThunks } from '../../../../store/rooms';
import { AppDispatch } from '../../../../store';
import { IconPlus } from '../../../icons/IconPlus';

const editPublicRoomSchema = z.object({
  title: z
    .string({
      errorMap: (issue) => {
        if (issue.code === z.ZodIssueCode.invalid_string) {
          return {
            message: i18n.t('errors.publicRoomTitleCharacterValidation'),
          };
        }
        return {
          message: i18n.t('errors.publicRoomTitleLengthValidation'),
        };
      },
    })
    .min(2)
    .max(30)
    .regex(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\d\s'’._-]*$/),
  description: z
    .string({
      errorMap: (issue) => {
        if (issue.code === z.ZodIssueCode.invalid_string) {
          return {
            message: i18n.t('errors.publicRoomDescriptionCharacterValidation'),
          };
        }
        return {
          message: i18n.t('errors.publicRoomDescriptionLengthValidation'),
        };
      },
    })
    .max(300)
    .regex(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\d\s.,&@'’():;!?"$*+/%-=_]*$/)
    .optional(),
});

type EditPublicRoom = z.infer<typeof editPublicRoomSchema>;

type Props = {
  onClosePopup: Dispatch<SetStateAction<boolean>>;
  roomId?: string;
  roomData?: Room;
};

export const EditPublicRoomForm = ({
  onClosePopup,
  roomId,
  roomData,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoomData>({
    resolver: zodResolver(editPublicRoomSchema),
  });
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: SubmitHandler<EditPublicRoom> = async (data) => {
    if (!roomId) {
      return;
    }
    try {
      await editPublicRoom({
        id: roomId,
        data: {
          title: data.title,
          ...(data.description && { description: data.description }),
        },
      });
      await dispatch(roomsThunks.getOwnPublicRooms({ currentPage: 1 }));
      onClosePopup(true);
      toast.success(t('success.publicRoomEdited'));
    } catch (error) {
      console.error('Error editing room', error);
      toast.error(t('errors.publicRoomEdited'));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.formTitle}>{t('rooms.editPublicRoom')}</div>
      <div className={styles.formControl}>
        <label htmlFor="title">{t('rooms.title')}</label>
        <input
          className={`${styles.input} ${errors.title && styles.error}`}
          type="text"
          id="title"
          placeholder={t('rooms.titlePlaceholder')}
          {...register('title')}
          defaultValue={roomData ? roomData?.title : ''}
        />
        <div className={styles.errorMessage}>
          {errors.title && errors.title.message}
        </div>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="description">{t('rooms.description')}</label>
        <input
          className={`${styles.input} ${errors.description && styles.error}`}
          type="text"
          id="description"
          placeholder={t('rooms.descriptionPlaceholder')}
          {...register('description')}
          defaultValue={roomData ? roomData.description : ''}
        />
        <div className={styles.errorMessage}>
          {errors.description && errors.description.message}
        </div>
      </div>
      <div className={styles.formControl}>
        <label>{t('rooms.topic')}</label>
        {roomData?.topic}
      </div>
      <div className={styles.formAction}>
        <RButton type="submit" color="secondary">
          <IconPlus />
          {t('rooms.btnEditRoom')}
        </RButton>
      </div>
    </form>
  );
};
