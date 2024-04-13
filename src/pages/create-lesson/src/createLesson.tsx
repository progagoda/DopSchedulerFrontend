import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateLessonProps {}

const StyledCreateLesson = styled.div`
  color: pink;
`;

export function CreateLesson(props: CreateLessonProps) {
  return (
    <StyledCreateLesson>
      <h1>Welcome to CreateLesson!</h1>
    </StyledCreateLesson>
  );
}

export default CreateLesson;
