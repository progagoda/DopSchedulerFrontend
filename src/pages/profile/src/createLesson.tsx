import {getUserStateSelector, userActions} from '@entities';
import {useChangeFullNameMutation} from '@features';
import {Flex, Title} from '@shared/ui'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* eslint-disable-next-line */
export interface ProfileProps {}


export function ProfilePage(props: ProfileProps) {
  const user = useSelector(getUserStateSelector);
  const dispatch = useDispatch();

  const [changeFullname] = useChangeFullNameMutation();
  const [fullname, setFullname] = useState(user?.fullname)

  const handleChangeFullname = (value: string) => {
    dispatch(userActions.changeFullname(value))
    changeFullname({fullname:value});
    setFullname(value);

  }
  
return (
  <Flex vertical>
    <Flex justify='center'>
      <Title>{user?.username}</Title>
    </Flex>
    <Flex flex={0.5} style={{padding: '20px'}}>
      <Flex flex={0.25} align='center' justify='space-between'>
        <Title level={5}>Ваше ФИО</Title>
        <Title 
        style={{marginBottom:'10px'}}
      level={5} 
      editable={{
        onChange: handleChangeFullname,
        text: fullname
      }}>
          {fullname}
        </Title>
      </Flex>
    </Flex>
  </Flex>
);
}

export default ProfilePage;
