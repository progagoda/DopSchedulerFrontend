import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProfileProps {}

const StyledProfile = styled.div`
  color: pink;
`;

export function ProfilePage(props: ProfileProps) {
  return (
    <StyledProfile>
      <h1>Welcome to Profile!</h1>
    </StyledProfile>
  );
}

export default ProfilePage;
