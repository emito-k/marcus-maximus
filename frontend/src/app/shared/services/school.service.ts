import { Injectable } from '@angular/core';
import { ISchool } from '../models/school.interface';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchoolDetail(id: string) : ISchool {
    return {
      school_name: 'School Name',
      school_id: 'School ID',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      thumbnail_url: 'https://via.placeholder.com/750x600',
      profile_url: 'https://via.placeholder.com/509x500'
    };
  }
}
