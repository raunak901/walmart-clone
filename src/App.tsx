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
    setIsLoading(true)
    await axios.get(BASE_URL + searchString)
      .then((response) => {
        setSearchData(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log('Failed to fetch data with error :' + error);
      })
  }

  useEffect(() => {
    //fetchData(searchParams)

    //Added below code for testing
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSearchData(DUMMY_DATA)
    }, 2000)

  }, [searchParams, setSearchParams])

  return (
    <div>
      Walmart
      <div>
        <Searchbar setSearchParams={setSearchParams} />
      </div>
      <div>
        <ItemsContainer
          isLoading={isLoading}
          searchData={searchData} />
      </div>
    </div>
  );
}

export default App;
