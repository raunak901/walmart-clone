import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ItemsContainer from './components/ItemsContainer';
import Searchbar from './components/Searchbar';
import { BASE_URL, DUMMY_DATA } from './constants';

export interface IReponse {
  id: string,
  type: string,
  name: string,
  brand: string,
  averageRating: number,
  shortDescription: string,
  manufacturerName: string,
  thumbnailUrl: string,
  price: number,
  currencyUnit: string
}

function App() {

  const [searchParams, setSearchParams] = useState<string>('')
  const [searchData, setSearchData] = useState<IReponse[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function fetchData(searchString: string) {
    // setIsLoading(true)
    // await axios.get(BASE_URL + searchString)
    //   .then((response) => {
    //     setSearchData(response.data)
    //     setIsLoading(false)
    //   })
    //   .catch((error) => {
    //     setIsLoading(false)
    //     console.log('Failed to fetch data with error :' + error);
    //   })

    //Added below code for testing
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSearchData(DUMMY_DATA)
    }, 2000)

  }

  useEffect(() => {
    fetchData(searchParams)
  }, [searchParams])

  return (
    <div>
      <div style={{ backgroundColor: 'rgb(2,113,220)', height: 'auto', display: 'flex', justifyContent: 'center', padding: '25px' }}>
        <Searchbar setSearchParams={setSearchParams} />
      </div>

      <div style={{ backgroundColor: 'rgb(2,113,220)', marginTop: '1px', height: '40px' }}>

      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '350px' }}>
          Sidebar
        </div>
        <div style={{ width: '150vh', padding: '20px', height: '100vh', overflow: 'scroll' }}>
          <ItemsContainer
            searchParams={searchParams}
            isLoading={isLoading}
            searchData={searchData} />
        </div>
      </div>

    </div>
  );
}

export default App;
