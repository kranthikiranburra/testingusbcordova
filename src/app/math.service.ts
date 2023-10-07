import { Injectable } from '@angular/core';

import { Plugin, Cordova } from '@awesome-cordova-plugins/core';


@Plugin({

  pluginName : "matcalculator",
  plugin : "cordova-plugin-mathcalculator",
  pluginRef: "Matchcalculator",
  repo:'https://github.com/kranthikiranburra/cordova_plugin.git',
  platforms:['Android']

})

@Injectable({
  providedIn: 'root'
})
export class MathService {

@Cordova()
add(arg1 : any){
  return;
}
substract(arg1 : any){
  return;
}

}
