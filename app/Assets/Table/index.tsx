import Table from "./table";

const Header = [
    {
      id: 1,
      title: '',
    },
    {
      id: 2,
      title: 'Customer ID',
    },
    {
      id: 3,
      title: 'Name',
    },
    {
      id: 4,
      title: 'Phone',
    },
    {
      id: 5,
      title: 'Email',
    },
    {
      id: 6,
      title: 'Balance',
    },
    {
      id: 7,
      title: '',
    },
  ]


const Index = () => {
    return (
        <Table Header={Header} />
    )
  }
  
export default Index;