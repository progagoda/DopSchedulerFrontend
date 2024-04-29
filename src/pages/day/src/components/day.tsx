import { CreateLessonDrawerAsync } from "@features";
import { Button,Flex, Modal, Scrollable, Title } from "@shared/ui";
import { LessonsList } from "@widgets";
import { useEffect, useState, useTransition } from "react";
import { useTranslation} from "react-i18next";
import { useParams } from "react-router-dom";

export const Day = () => {
  const params = useParams();
  const {t} = useTranslation('translation',{ keyPrefix: 'day'})
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false)
  const [, startTransition] = useTransition();
  const handleChangeDrawer = ()=> setIsCreateDrawerOpen(!isCreateDrawerOpen)
  const [isOpenModal, setOpenModal] = useState(false);
  useEffect(()=>{
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if(params.date && !datePattern.test(params.date)){
      setOpenModal(true);
    }
  },[params.date])
  
return (
  <Flex vertical gap={10} flex={1} style={{paddingLeft:'30px'}}>
    <Title>{params.date}</Title>
    <Flex justify="start">
      <Button onClick={()=>{startTransition(handleChangeDrawer)}} size="large">{t('addDopButton')}</Button>
    </Flex>
    <Scrollable height={70}>
      <LessonsList/>
    </Scrollable>
    {isCreateDrawerOpen && <CreateLessonDrawerAsync open={isCreateDrawerOpen} onClose={handleChangeDrawer}/>}
    <Modal open={isOpenModal}
    footer= {null}
    title={t('invalidDateTitle')}>
      {t('invalidDateDescription')}
    </Modal>
  </Flex>
      );
  };