import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Property } from '../property.model';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Property[] = [
  {
    id: 1,
    tenant: 'Hydrogen',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 2,
    tenant: 'Helium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 3,
    tenant: 'Lithium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 4,
    tenant: 'Beryllium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 5,
    tenant: 'Boron',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 6,
    tenant: 'Carbon',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 7,
    tenant: 'Nitrogen',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 8,
    tenant: 'Oxygen',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 9,
    tenant: 'Fluorine',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 10,
    tenant: 'Neon',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 11,
    tenant: 'Sodium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 12,
    tenant: 'Magnesium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 13,
    tenant: 'Aluminum',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 14,
    tenant: 'Silicon',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 15,
    tenant: 'Phosphorus',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 16,
    tenant: 'Sulfur',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 17,
    tenant: 'Chlorine',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 18,
    tenant: 'Argon',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 19,
    tenant: 'Potassium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
  {
    id: 20,
    tenant: 'Calcium',
    address: '1-A, Block-A, Sector-1, Gurugram',
    date: '',
  },
];

/**
 * Data source for the PropertyRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PropertyRead2DataSource extends DataSource<Property> {
  data: Property[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Property[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(
        observableOf(this.data),
        this.paginator.page,
        this.sort.sortChange
      ).pipe(
        map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        })
      );
    } else {
      throw Error(
        'Please set the paginator and sort on the data source before connecting.'
      );
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Property[]): Property[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Property[]): Property[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'tenant':
          return compare(a.tenant, b.tenant, isAsc);
        case 'id':
          return compare(+a.id!, +b.id!, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(
  a: string | number,
  b: string | number,
  isAsc: boolean
): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
