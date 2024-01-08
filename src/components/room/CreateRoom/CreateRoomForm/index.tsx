/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import type { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { i18n } from '../../../../libs/i18n';
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
  topic: z.nativeEnum(Topic, {
    errorMap: () => ({ message: i18n.t('errors.publicRoomTopicValidation') }),
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
    await createPublicRoom({
      title: data.title,
      topic: data.topic,
      ...(data.description && { description: data.description }),
    });
    await dispatch(roomsThunks.getOwnPublicRooms({ currentPage: 1 }));
    onClosePopup(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.formTitle}>{t('rooms.createPublicRoom')}</div>

      <div className={styles.formControl}>
        <label htmlFor="title">{t('rooms.title')}</label>
        <input
          className={`${styles.input} ${errors.title && styles.error}`}
          type="text"
          id="title"
          placeholder={t('rooms.titlePlaceholder')}
          {...register('title')}
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
          defaultValue="default"
          {...register('topic')}
        >
          <option value="default" disabled>
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
          {t('rooms.btnCreateRoom')}
        </RButton>
      </div>
    </form>
  );
};
