import { getDaySelector,LessonCard } from "@features";
import { Flex, Row, Title } from "@shared/ui";
import { useSelector } from "react-redux";

export const Day = () => {
    const day = useSelector(getDaySelector);

return (
  <Flex vertical gap={10} flex={1} style={{paddingLeft:'30px'}}>
    <Title>{day.date}</Title>
    {day.lessons && day.lessons.map((lesson)=>(
      <Row>
        <LessonCard lesson={lesson}/>
      </Row>
    ))}

  </Flex>
);
};