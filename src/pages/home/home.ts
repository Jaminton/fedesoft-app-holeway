import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneralProvider } from '../../providers/general/general';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public general:GeneralProvider
    
    
    ) {
this.general.get('comments').subscribe((data)=>{console.log(data)},(err)=>{console.log("error")
})
  }

}
