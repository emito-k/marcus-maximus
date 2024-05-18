import { Component } from '@angular/core';
import { SchoolModulesFeedComponent } from '../shared/components/school-modules-feed/school-modules-feed.component';
import { SchoolService } from '../shared/services/school.service';
import { ActivatedRoute } from '@angular/router';
import { ISchoolModule } from '../shared/models/school-module.interface';
@Component({
  selector: 'app-school-page',
  standalone: true,
  imports: [
    SchoolModulesFeedComponent,
  ],
  templateUrl: './school-page.component.html',
  styleUrl: './school-page.component.css'
})
export class SchoolPageComponent {
  modules: ISchoolModule[] = [];
  loading: boolean = true;

  constructor(private schoolService: SchoolService, private route: ActivatedRoute) {
    const school_id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getModules(school_id);
  }

  async getModules(school_id: string): Promise<void> {
    this.loading = true;
    this.modules = await this.schoolService.getSchoolModules(school_id);
    this.loading = false;
  }
}
