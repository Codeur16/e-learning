import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { DateTime } from 'src/app/Models/datetime.interface';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor(
    private _datePipe: DatePipe
  ) { }

  /**
   * Format date to string 
   * @param date 
   * @returns 
   */
  formatDate(date: Date): DateTime {

    // date section
    const day = this._datePipe.transform(date, 'EEE'); // Day of the week, abbreviated
    const dayNumber = this._datePipe.transform(date, 'dd'); // Day of the month, two digits
    const month = this._datePipe.transform(date, 'MMM'); // Month, abbreviated
    const year = this._datePipe.transform(date, 'yyyy'); // Year, full

    // time section
    const time = this._datePipe.transform(date, 'HH:mm'); // Hours and minutes

    let datetime = new DateTime();
    datetime.date = `${day}. ${dayNumber} ${month} ${year}`;
    datetime.time = time + ``;

    return datetime;
  }
}
