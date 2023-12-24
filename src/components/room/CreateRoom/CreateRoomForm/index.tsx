/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.css';
import { Topic } from '../../../../utils/enums/topic.enum';
import { RButton } from '../../../RButton';
import { createPublicRoom } from '../../../../api/rooms';
import { CreateRoomData } from '../../../../utils/types/rooms.type';
import { roomsThunks } from '../../../../store/rooms';
import { AppDispatch } from '../../../../store';
import { IconPlus } from '../../../icons/IconPlus';

const createPublicRoomSchema = z.object({
  title: z
    .string({ required_error: t('errors') })
    .min(2)
    .max(30)
    .regex(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\d\s'’._-]*$/),
  description: z
    .string()
    .max(300)
    .regex(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\d\s.,&@'’():;!?"$*+/%-=_]*$/),
  topic: z.nativeEnum(Topic, {
    errorMap: () => ({ message: 'Choose a topic' }),
  }),
});

type CreatePublicRoom = z.infer<typeof createPublicRoomSchema>;

type Props = {
  onClosePopup: Dispatch<SetStateAction<boolean>>;
};

export const CreatePublicRoomForm = ({ onClosePopup }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoomData>({
    resolver: zodResolver(createPublicRoomSchema),
  });
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler: SubmitHandler<CreatePublicRoom> = async (data) => {
    await createPublicRoom(data);
    await dispatch(roomsThunks.getPublicRooms());
    onClosePopup(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.formControl}>
        <label htmlFor="title">{t('rooms.title')}</label>
        <input
          className={`${styles.input} ${errors.title && styles.error}`}
          type="text"
          id="title"
          {...(register('title'), { placeholder: t('rooms.titlePlaceholder') })}
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
          {...(register('description'),
          { placeholder: t('rooms.descriptionPlaceholder') })}
        />
        <div className={styles.errorMessage}>
          {errors.description && errors.description.message}
        </div>
      </div>
      <div className={styles.formControl}>
        <label htmlFor="topic">{t('rooms.topic')}</label>
        <select
          className={`${styles.input} ${errors.topic && styles.error}`}
          id="topic"
          {...register('topic')}
        >
          <option value="" disabled selected>
            {t('rooms.topicPlaceholder')}
          </option>
          <option value={Topic.HealthyHabits}>Healthy habits</option>
          <option value={Topic.Exercises}>Exercises</option>
          <option value={Topic.MentalHealth}>Mental Health</option>
          <option value={Topic.Nutrition}>Nutrition</option>
          <option value={Topic.Prevention}>Prevention</option>
        </select>
        <div className={styles.errorMessage}>
          {errors.topic && errors.topic.message}
        </div>
      </div>
      <div className={styles.formAction}>
        <RButton type="submit" color="secondary">
          <IconPlus />
          Create room
        </RButton>
      </div>
    </form>
  );
};
