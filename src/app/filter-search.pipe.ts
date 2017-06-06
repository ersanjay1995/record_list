import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterSearchPipe',
})
export class FilterSearchPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
      if (!args) return items;
      return items.filter(function(item){
          console.log();
            return item.title.toLowerCase().includes(args.toString().toLowerCase())
            || item.year.toString().includes(args.toString().toLowerCase())
            || item.genre.toString().includes(args.toString().toLowerCase())
            || item.notes.toString().includes(args.toString().toLowerCase())
            || item.artist.toLowerCase().includes(args.toString().toLowerCase());
      })
    }
}
