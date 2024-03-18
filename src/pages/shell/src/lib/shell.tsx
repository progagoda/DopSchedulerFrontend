import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ShellProps {}

const StyledShell = styled.div`
  color: pink;
`;

export function Shell(props: ShellProps) {
  return (
    <StyledShell>
      <h1>Welcome to Shell!</h1>
      <Link to="/main">Go to main</Link>
    </StyledShell>
  );
}

export default Shell;
