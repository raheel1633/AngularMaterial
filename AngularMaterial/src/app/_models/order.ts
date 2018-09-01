
export interface Order {
  DTO: {
    order_id: number;
    order_no: string;
    po_number: string;
    start_date?: string;
    end_date?: string;
    BillTo: null;
  };
}
