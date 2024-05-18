import { Injectable } from '@angular/core';
import { ISchool } from '../models/school.interface';
import { ISchoolModule } from '../models/school-module.interface';

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

  async getSchoolsBySearch(search: string) : Promise<ISchool[]> {
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
      }
    ];
  }

  async getSchoolModule(module_id: string) : Promise<ISchoolModule> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      module_id: 'Module ID',
      module_name: 'Module Name',
      description: 'Module Description',
      credits: 3
    };
  }

  async getSchoolModules(school_id: string) : Promise<ISchoolModule[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return [
      {
        module_id: 'Module ID 1',
        module_name: 'Module Name 1',
        description: 'Module Description 1',
        credits: 3
      },
      {
        module_id: 'Module ID 2',
        module_name: 'Module Name 2',
        description: 'Module Description 2',
        credits: 3
      },
      {
        module_id: 'Module ID 3',
        module_name: 'Module Name 3',
        description: 'Module Description 3',
        credits: 3
      },
      {
        module_id: 'Module ID 4',
        module_name: 'Module Name 4',
        description: 'Module Description 4',
        credits: 3
      },
      {
        module_id: 'Module ID 5',
        module_name: 'Module Name 5',
        description: 'Module Description 5',
        credits: 3
      }
    ];
  }
}
