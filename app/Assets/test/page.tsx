import { Payment, columns } from "./colunm"
import { DataTable } from "./dataTable"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      
      id: "8d52f",
        name: "Jonas",
        type: "product",
        description: "gsgsghghsghghsggdsgghsgh",
        price: 125362,
        sku: "ggdtyw87382929",
    },
    {
      
        id: "7282f",
          name: "Jonas",
          type: "product",
          description: "gsgsghghsghghsggdsgghsgh",
          price: 125362,
          sku: "ggdtyw87382929",
      },
      {
      
        id: "728e",
          name: "Jonas",
          type: "product",
          description: "gsgsghghsghghsggdsgghsgh",
          price: 125362,
          sku: "ggdtyw87382929",
      },
      {
      
        id: "728e",
          name: "Jonas",
          type: "product",
          description: "gsgsghghsghghsggdsgghsgh",
          price: 125362,
          sku: "ggdtyw87382929",
      },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
