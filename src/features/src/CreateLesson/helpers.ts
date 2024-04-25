import _ from "lodash";

import { TApiDisabledStartTime } from "./model/types";

export const findSequence = (
    disabledTimes: TApiDisabledStartTime, 
    startHour: number)=>
        {
            const maxEndTime = 24; 
            const disableHours = _.map(disabledTimes, 'disableHour')
            const min = disableHours.find((item)=> item>startHour)
            if(min){
                 return {
                    disabledHours: () => _.concat(_.range(0, startHour), _.range(min+1,maxEndTime)),
                    disabledMinutes: (selectedHour: number) => {
                        if (selectedHour === min) {
                            return _.range(1,60)
                        }

                        return []
                }
            }
        }
             
            return {
                disabledHours: () => _.concat(_.range(0, startHour),disableHours)
            }
        }