import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(listEvents: any[], searchEvent: string): any[]{
    if(!listEvents || !searchEvent){
      return listEvents;
    }
    return listEvents.filter(event=>event.eventName?.toLowerCase().includes(searchEvent.toLowerCase()));
  }

}
