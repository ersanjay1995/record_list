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
            || item.artist.toLowerCase().includes(args.toString().toLowerCase());
      })
    }
}

/*  transform(items: any[], input: string) {
        if (input) {
          console.log(value);
            input = input.toString().toLowerCase();
            return items.filter(function (el: any) {
                return items.filter(item => item.id.indexOf(args[0]) !== -1);
                return el.toString().toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }*/
