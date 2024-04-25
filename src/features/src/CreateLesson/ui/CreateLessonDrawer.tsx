import { Drawer, Flex, Form, Input, Select,Spinner, TimeRangePicker, Typography } from "@shared/ui"
import { useForm } from "antd/es/form/Form";
import { DefaultOptionType } from "antd/es/select";
import { Dayjs } from "dayjs";
import _ from "lodash";
import { ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { useGetAllGroupQuery,useGetFreeTimeMutation } from "../api";
import { findSequence } from "../helpers";

type TCreateLesson = {
    open: boolean;
    onClose: ()=> void;
}
type RangeValue = Parameters<NonNullable<React.ComponentProps<typeof TimeRangePicker>['onChange']>>[0]

const CreateLessonDrawer = ({open, onClose}: TCreateLesson)=>{
    const {t} = useTranslation('translation', {keyPrefix: 'createDrawerLesson'});
    
    const params = useParams()
    const [isSelectChange, setIsSelectChange]= useState(false)
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [startHour, setStartHour] = useState(0);
    const [form] = useForm();

    const {data: groups, isLoading }= useGetAllGroupQuery();
    const [getFreeTime, {data: disabledTimes, isLoading: isLoadingDisabledTime}] = useGetFreeTimeMutation();
    
    // #region Select
    const handleChange = () =>  setIsSelectChange(true)
    const refetchCalcutateFreeTime = ()=> {
        const currentSelectedGroups = form.getFieldValue('groups')
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


   const handleChangeTime = (times: RangeValue)=>  times[0] && setStartHour(Number(times[0].format('H')))
   
  const disabledEndTime = useMemo(()=> findSequence(disabledTimes||[], startHour),[disabledTimes, startHour])

   const getDisabledTimes = useCallback((now: Dayjs, type?: 'start'| 'end')=>{
      if(disabledTimes){
        if(type==='end'){
          return disabledEndTime
        }
        
      return {
          disabledHours: () => _.concat(_.range(0,8),disabledTimeHour)
        }
      }

      return {};
    }, [disabledEndTime, disabledTimeHour, disabledTimes])
   //  #endregion

return (
  <Drawer open = {open} title={t('title')} onClose={onClose}>
    <Spinner spinning={isLoadingDisabledTime}>
      <Form form={form} style={{height:'85vh'}}>
        <Form.Item
             wrapperCol={{span: 25 }}
             name="name"
             rules={[{ required: true, message: t('messages.requiredGroup') }]}
         >
          <Input/>
        </Form.Item>
        <Typography>{t('selectedGroups')}</Typography>
        <Form.Item
             wrapperCol={{span: 25 }}
             name="groups"
             rules={[{ required: true, message: t('messages.requiredGroup') }]}
         >
          <Select 
                  mode= 'multiple'
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
        disabledTimes &&
          <Form.Item
              wrapperCol={{span: 25 }}
              name="planningTime"
              rules={[
                { required: true, message: t('messages.requiredGroup')},
              ]}
              >
            <Typography>{t('planningTime')}</Typography>
            <TimeRangePicker 
            needConfirm={false}
            onCalendarChange={handleChangeTime} 
            disabledTime={getDisabledTimes}
            showNow={false}
            />
          </Form.Item>
        }
      </Form> 
    </Spinner>
  </Drawer>
  )
}

export default CreateLessonDrawer