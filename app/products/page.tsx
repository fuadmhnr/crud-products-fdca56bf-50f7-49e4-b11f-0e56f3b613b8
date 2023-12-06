import { Products, columns } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<Products[]> {
    try {
      const URL = 'https://dummyjson.com/products';
      const res = await fetch(URL);
  
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const result = await res.json();
      const products: Products[] = result.products as Products[];
  
      return products;
    } catch (e) {
      console.error(e);  // Log the error for debugging, optional
      // You can either return a default value:
      // return [];
      
      // Or rethrow the error:
      throw e;
    }
  }
  

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
        <h1 className="mb-4">Product List</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
