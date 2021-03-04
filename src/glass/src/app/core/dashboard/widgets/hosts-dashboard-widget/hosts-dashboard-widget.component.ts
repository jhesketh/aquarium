import { Component } from '@angular/core';
import { marker as TEXT } from '@biesbjerg/ngx-translate-extract-marker';
import { Observable } from 'rxjs';

import { AbstractDashboardWidget } from '~/app/core/dashboard/widgets/abstract-dashboard-widget';
import { DatatableColumn } from '~/app/shared/models/datatable-column.type';
import { Host, OrchService } from '~/app/shared/services/api/orch.service';

@Component({
  selector: 'glass-hosts-dashboard-widget',
  templateUrl: './hosts-dashboard-widget.component.html',
  styleUrls: ['./hosts-dashboard-widget.component.scss']
})
export class HostsDashboardWidgetComponent extends AbstractDashboardWidget<Host[]> {
  data: Host[] = [];
  columns: DatatableColumn[] = [
    {
      name: TEXT('Hostname'),
      prop: 'hostname',
      sortable: true
    },
    {
      name: TEXT('Address'),
      prop: 'address',
      sortable: true
    }
  ];

  constructor(private orchService: OrchService) {
    super();
  }

  loadData(): Observable<Host[]> {
    return this.orchService.hosts();
  }
}
