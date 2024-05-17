import { Injectable } from '@angular/core';
import { ISchool } from '../models/school.interface';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  async getSchoolDetail(id: string) : Promise<ISchool> {
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

  async getSchools() : Promise<ISchool[]> {
    // add a delay to simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    return [
      {
        school_name: 'School Name 1',
        school_id: 'School ID 1',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        thumbnail_url: 'https://via.placeholder.com/750x600',
        profile_url: 'https://via.placeholder.com/509x500'
      },
      {
        school_name: 'School Name 2',
        school_id: 'School ID 2',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        thumbnail_url: 'https://via.placeholder.com/750x600',
        profile_url: 'https://via.placeholder.com/509x500'
      },
      {
        school_name: 'School Name 3',
        school_id: 'School ID 3',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        thumbnail_url: 'https://via.placeholder.com/750x600',
        profile_url: 'https://via.placeholder.com/509x500'
      },
      {
        school_name: 'School Name 4',
        school_id: 'School ID 4',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        thumbnail_url: 'https://via.placeholder.com/750x600',
        profile_url: 'https://via.placeholder.com/509x500'
      },
      {
        school_name: 'School Name 5',
        school_id: 'School ID 5',
        description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain
        bred for hunting.`,
        thumbnail_url: 'https://via.placeholder.com/750x600',
        profile_url: 'https://via.placeholder.com/509x500'
      }
    ];
  }
}
