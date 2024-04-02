interface PaginationOptions {
    pageSize: number;
    currentPage: number;
  }
 
  interface PaginatedData<IData> {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    data: IData[];
  }
  
  export class Paginator<IData> {
    private data: IData[];
    private options: PaginationOptions;
  
    constructor(data: IData[], options: PaginationOptions) {
      this.data = data;
      this.options = options;
    }
  
    paginate(): PaginatedData<IData> {
      const { pageSize, currentPage } = this.options;
  
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
  
      const paginatedData = this.data.slice(startIndex, endIndex);
  
      return {
        totalItems: this.data.length,
        totalPages: Math.ceil(this.data.length / pageSize),
        currentPage,
        pageSize,
        data: paginatedData,
      };
    }
  }
  

  