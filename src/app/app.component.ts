import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teammembercards';

  data = [{
    'Nachname' : 'Azlouk',
    'Vorname' : 'Mohamed Yassine',
    'Mitglieder-Nr' : '015897254',
    'MitgliederDatum' : '12.11.2020'
  }]
  dataToString = JSON.stringify(this.data);
  public text=" Guten Tag Ihre Mitglieder, Hier sind Ihre Persönliche Daten bie uns /n Name:Azlouk /n Nachname:Yassin";
  public qrCodeVal :string ="";
  public level: "L" | "M" | "Q" | "H" ;
  public width: number;

   constructor() {
     this.level="L" ;
     this.width =200;
     this.qrCodeVal = "QR Code string value" ;
   }

   updateLevel(newLevel:"L" | "M" | "Q" | "H"){
     this.level=newLevel;
   }
   updateQrInfo(newValue:string) {
     this.qrCodeVal=newValue;
   }
   updateWidth(newWidth:number) {
     this.width=newWidth;
   }
}
