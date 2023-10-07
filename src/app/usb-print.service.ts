import { Injectable } from '@angular/core';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class UsbPrintService {

  constructor() { }
  

  // Method to get a list of connected USB printers
  getConnectedPrinters(): Promise<any> {
    return new Promise((resolve, reject) => {
      window.plugins.UsbPrinter.getConnectedPrinters(
        (result : any) => {
          resolve(result);
        },
        (error : any) => {
          reject(error);
        }
      );
    });
  }

  // Method to connect to a USB printer by name
  connectToPrinter(printerName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      window.plugins.UsbPrinter.connect(
        printerName,
        (result : any) => {
          resolve(result);
        },
        (error : any) => {
          reject(error);
        }
      );
    });
  }

  // Method to print a message to a connected USB printer
  printToPrinter(printerName: string, message: string): Promise<any> {
    return new Promise((resolve, reject) => {
      window.plugins.UsbPrinter.print(
        printerName,
        message,
        (result : any) => {
          resolve(result);
        },
        (error : any) => {
          reject(error);
        }
      );
    });
  }

  // Add other USB printing methods as needed
}
