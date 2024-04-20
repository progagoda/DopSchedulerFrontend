import { LessonCard } from "@features";
import {Empty, Flex, Row, Typography } from "@shared/ui";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { useLazyLessonsQuery } from "./api";


export const LessonsList = () => {
    const params = useParams();
    const {t} = useTranslation('translation',{keyPrefix: 'lessonsList'})
    const [getLessons,{data: lessons}] = useLazyLessonsQuery()
  
    useEffect(()=>{
      if(params.date){
        getLessons({day: params.date})
      }
    }, [getLessons, params])
    if (!lessons){
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
    <Flex vertical gap={10} flex={1}>
      {lessons.map((lesson)=>(
        <Row>
          <LessonCard lesson={lesson}/>
        </Row>
      ))}
    </Flex>
      )
};