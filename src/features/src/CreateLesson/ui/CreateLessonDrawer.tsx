import { Drawer, Flex, Form, FormButton, FormInput, Modal, Select,Spinner, TimeRangePicker, Typography, } from "@shared/ui"
import { useForm } from "antd/es/form/Form";
import { DefaultOptionType } from "antd/es/select";
import { Dayjs } from "dayjs";
import _ from "lodash";
import { ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { useAllLessonsByDayQuery } from "../../LessonCard";
import { useGetAllGroupQuery,useGetFreeTimeMutation, useСreateLessonMutation } from "../api";
import { findSequence } from "../helpers";
import { TCreateLessonArgs } from "../model/types";

type TCreateLesson = {
    open: boolean;
    onClose: ()=> void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFetchBaseQueryErrorType = (error: any): error is {data: {message: string}, status: number} => 'status' in error

type RangeValue = Parameters<NonNullable<React.ComponentProps<typeof TimeRangePicker>['onChange']>>[0]

const CreateLessonDrawer = ({open, onClose}: TCreateLesson)=>{
    const {t} = useTranslation('translation', {keyPrefix: 'createDrawerLesson'});
    
    const params = useParams()
    const [isSelectChange, setIsSelectChange]= useState(false)
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [startTime, setStartTime] = useState<string>();
    const [endTime, setEndTime] = useState<string>();
    const [isOpen, setIsOpen] = useState(open)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLocationOrLink, setIsLocationOrLink] = useState(false);
    const [form] = useForm();

    const {data: groups, isLoading }= useGetAllGroupQuery();
    const [getFreeTime, {data: disabledTimes, isLoading: isLoadingDisabledTime}] = useGetFreeTimeMutation();
    const [createLesson, {isSuccess: isCreateSuccess, isError: isCreateError, error: createError }] = useСreateLessonMutation();
    const {refetch: refetchLessonsList} = useAllLessonsByDayQuery({date: params.date || ''})

    // #region Select
    const handleChange = () =>  setIsSelectChange(true)
    const refetchCalcutateFreeTime = ()=> {
        const currentSelectedGroups = form.getFieldValue('selectedGroups')
        if (!_.isEmpty(currentSelectedGroups) && isSelectChange){
            getFreeTime({group_ids: currentSelectedGroups, date: params.date || ''})
            setIsSelectChange(false)
        }
    }
    const filterOption = (input: string, option?: { label?: ReactNode; value?: ReactNode } ) =>
      String((option?.label ?? '')).toLowerCase().includes(input.toLowerCase()); 
    
    const selectDropdownRender = (option: DefaultOptionType )=>{
        if (isLoading) {
            return (<Flex flex={1} justify='center' align='center'>
              <Spinner/>
            </Flex>)
        }
        
        return <div key={option.data.value}>{option.data.label}</div>
    }
    const loadingSelect = (menu: ReactNode): ReactElement =>{
        if(isLoading) {
            return (
              <Flex flex={1} justify='center' align='center'>
                <Spinner/>
              </Flex>  
            )
        }

        return <div>{menu}</div>;
    }
    useEffect(()=>{
      if(isLoadingDisabledTime){
        setIsSelectOpen(false);
      }
    },[isLoadingDisabledTime])
  // #endregion

    // #region TimeRangePicker
    const disabledTimeHour = useMemo(()=> (disabledTimes && disabledTimes.map(time => time.disableHour))||[], [disabledTimes])


   const handleChangeTime = (times: RangeValue)=>  {
    if(times[0]){
      setStartTime(times[0].format('HH:mm'))
    }
    if(times[1]){
      setEndTime((times[1].format('HH:mm')))
    }
  }
   
  const disabledEndTime = useMemo(()=> findSequence(disabledTimes || [], Number(startTime?.split(':')[0])),[disabledTimes, startTime])

   const getDisabledTimes = useCallback((now: Dayjs, type?: 'start'| 'end')=>{
      if(disabledTimes){
        if(type==='end'){
          return disabledEndTime
        }
        
      return {
          disabledHours: () => _.concat(_.range(0,8), disabledTimeHour)
        }
      }

      return {};
    }, [disabledEndTime, disabledTimeHour, disabledTimes])
   //  #endregion
   
   const createLessonHandle = () => {
      const lesson: TCreateLessonArgs = {
        name: form.getFieldValue('name'),
        date: params.date || '',
        start_time: startTime || '',
        end_time: endTime || '',
        location: form.getFieldValue('location'),
        zoom_link: form.getFieldValue('zoomLink'),
        group_ids: form.getFieldValue('selectedGroups')
      }

      createLesson(lesson)
   };

   useEffect(()=>{
    if(isCreateSuccess){
      refetchLessonsList();
      setIsOpen(false);
    }
  },[isCreateSuccess, refetchLessonsList])
   
   useEffect(()=> setIsModalOpen(true), [isCreateError])
   
   const handleChangeLocationOrLink = (value: string) => {
     if(!_.isEmpty(value)){
       setIsLocationOrLink(true)

       return;
     }
     setIsLocationOrLink(false)
   }
   const renderFooter = () => (
     <Flex justify="space-between">
       <FormButton onClick={()=>setIsOpen(!isOpen)}> {t('cancelButton')}</FormButton>
       <FormButton onClick={(()=>form.submit())}>{t('saveButton')}</FormButton>
     </Flex>
    )

return (
  <Drawer 
  open = {isOpen} 
  title={t('title')} 
  onClose={onClose}
  footer={renderFooter()}
  >
    <Spinner spinning={isLoadingDisabledTime}>
      <Form     
        name="basic"
        requiredMark
        form={form} 
        style={{height:'79vh'}}
        autoComplete="off"
        onFinish={createLessonHandle}
        >
        <Typography>{t('lessonName')}</Typography>
        <Form.Item
             wrapperCol={{span: 25 }}
             name="name"
             rules={[{ required: true, message: t('messages.requiredName') }]}
         >
          <FormInput placeholder={t('lessonNamePlaceholder')}/>
        </Form.Item>
        <Typography>{t('selectedGroups')}</Typography>
        <Form.Item
             wrapperCol={{span: 25 }}
             name="selectedGroups"
             rules={[{ required: true, message: t('messages.requiredGroup') }]}
         >
          <Select 
                  mode= 'multiple'
                  onBlur={()=> setIsSelectOpen(false)}
                  onClick= {()=> setIsSelectOpen(true)}
                  onMouseLeave={refetchCalcutateFreeTime}
                  onChange = {handleChange}
                  optionFilterProp="children"
                  filterOption={(input, option)=>filterOption(input, option)}
                  options={groups} 
                  placeholder={t('chooseGroup')}
                  open = {isSelectOpen}
                  dropdownRender={(menu)=>loadingSelect(menu)}
                  optionRender={selectDropdownRender}
            />
        </Form.Item>
        {
        disabledTimes && (
          <>
            <Typography>{t('planningTime')}</Typography> 
            <Form.Item
              wrapperCol={{span: 25 }}
              name="planningTime"
              rules={[
                { required: true, message: t('messages.requiredTime')},
              ]}
              >
              <TimeRangePicker   
            needConfirm={false}
            onCalendarChange={handleChangeTime} 
            disabledTime={getDisabledTimes}
            showNow={false}
            />
            </Form.Item>
          </>
        )
        }
        <Typography>{t('location')}</Typography>
        <Form.Item
              wrapperCol={{span: 25 }}
              name="location"
              rules={[
                { required: !isLocationOrLink, message: t('messages.requiredLocationOrLink')},
              ]}
              >
          <FormInput  onChange= {(e)=> handleChangeLocationOrLink(e.target.value)} placeholder={t('locationPlaceholder')} />
        </Form.Item>
        <Typography>{t('zoomLink')}</Typography>
        <Form.Item
              wrapperCol={{span: 25 }}
              name="zoomLink"
              rules={[
                { required: !isLocationOrLink, message: t('messages.requiredLocationOrLink')},
              ]}
              >
          <FormInput onChange= {(e)=> handleChangeLocationOrLink(e.target.value)} placeholder={t('zoomLinkPlaceholder')}/>
        </Form.Item>
      </Form> 
    </Spinner>
    {isCreateError && isFetchBaseQueryErrorType(createError) && 
    <Modal 
      title={createError.status} 
      open={isModalOpen}
      onCancel={()=> setIsModalOpen(false)}
      onOk={()=> setIsModalOpen(false)}
    >
        {String(JSON.stringify(createError.data.message)).replaceAll('"', '')}
      </Modal>
    }
  </Drawer>
  )
}

export default CreateLessonDrawer