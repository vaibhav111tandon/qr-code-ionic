import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private _barcodeScanner: BarcodeScanner){}

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this._barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }

}
