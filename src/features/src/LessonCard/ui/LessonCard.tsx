
import { TLesson } from "@entities";
import { antIcons,Card, Flex, Title, Typography } from "@shared/ui";
import { useTranslation } from "react-i18next";


const {DeleteOutlined} = antIcons;

type TCard = {
    lesson: TLesson
    deleteLesson: ({lessonId}: {lessonId: number})=>void
}
export const LessonCard = ({lesson, deleteLesson}: TCard) => {
    const {t} = useTranslation('translation', { keyPrefix: 'lessonCard' }); 
     
    return (
      <Card>
        <Flex flex={1} justify="space-between">
          <Flex vertical>
            <Title level={5}>{lesson.name}</Title>
            <Typography>{t('group', {group: lesson.group_name})}</Typography>
            <Typography>{t('time', {startTime: lesson.start_time,endTime:lesson.end_time})}</Typography>
            <Typography>{t('place', {place:lesson.location || lesson.zoom_link})}</Typography>
          </Flex>
          <DeleteOutlined  onClick={()=> deleteLesson({lessonId: lesson.id})}/>
        </Flex>
      </Card>
    );
};