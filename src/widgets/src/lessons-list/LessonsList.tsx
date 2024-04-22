import { LessonCard, useDeleteLessonMutation } from "@features";
import { useAllLessonsByDayQuery } from "@features";
import {Empty, Flex, Row, Spinner, Typography } from "@shared/ui";
import _ from "lodash";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";


export const LessonsList = memo(() => {
    const params = useParams();
    const {t} = useTranslation('translation',{keyPrefix: 'lessonsList'})
    const {data: lessons, isLoading}= useAllLessonsByDayQuery({date: params.date||''})
    const [deleteLesson, {isLoading: isLoadingDelete}] = useDeleteLessonMutation();
    if (lessons && _.isEmpty(lessons)){
      return (
        <Flex style={{height:'60vh'}}gap={10} flex={1} justify="center" align="center">
          <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{ height: 100 }}
              description={
                <Typography>
                  {t('emptyList')}
                </Typography>
              }
            />
        </Flex>)
    }
 
  return (
    <Flex vertical flex={1}>
      <Spinner spinning={isLoading|| isLoadingDelete} size="large">
        <Flex vertical gap={10} flex={1}>
          {lessons && lessons.map((lesson)=>(
            <Row>
              <LessonCard lesson={lesson} deleteLesson ={deleteLesson}/>
            </Row>
        ))}
        </Flex>
      </Spinner>
    </Flex>
    )
});