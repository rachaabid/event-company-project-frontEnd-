import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagFilter'
})
export class TagFilterPipe implements PipeTransform {

  transform(listTags: any[], searchTag: string): any {
    if(!listTags || !searchTag){
      return listTags;
    }
    return listTags.filter(tag=>tag.title?.toLowerCase().includes(searchTag.toLowerCase()));
  }

}
