
import { TLesson } from "@entities";
import { antIcons,Card, Flex, Title, Typography } from "@shared/ui";
import { useTranslation } from "react-i18next";

import { useLessonMutation } from "../api";

const {DeleteOutlined} = antIcons;

type TCard = {
    lesson: TLesson
}
export const LessonCard = ({lesson}: TCard) => {
    const {t} = useTranslation('translation', { keyPrefix: 'lessonCard' }); 
    const [deleteLesson] = useLessonMutation();
    const deleteDay = () => {
        deleteLesson({lessonId: lesson.id})
    }
     
    return (
      <Card>
        <Flex flex={1} justify="space-between">
          <Flex vertical>
            <Title level={5}>{lesson.info.subject}</Title>
            <Typography>{t('group', {group: lesson.info.group})}</Typography>
            <Typography>{t('time', {startTime:lesson.day.startTime,endTime:lesson.day.endTime})}</Typography>
            <Typography>{t('place', {place:lesson.place.location || lesson.place.zoomLink})}</Typography>
          </Flex>
          <DeleteOutlined  onClick={deleteDay}/>
        </Flex>
      </Card>
    );
};