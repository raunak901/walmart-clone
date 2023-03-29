import { useRef } from "react"
import SearchIcon from '@mui/icons-material/Search';

const searchBoxStyles = {
    height: '40px',
    width: '600px',
    paddingLeft: '1rem',
    paddingRight: '2.5rem',
    borderRadius: '9999px',
    borderStyle: 'none',
    fontSize: '16px',
    display: 'block'
}

const buttonStyle = {
    cursor: 'pointer',
    height: '35px',
    width: '35px',
    borderRadius: '9999px',
    borderStyle: 'none',
    backgroundColor: '#ffc220',
    left: 562,
    top: 2
}

interface ISearchParams {
    setSearchParams: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar = (props: ISearchParams) => {

    const searchText = useRef<any>(null)
    const { setSearchParams } = props

    const handleOnClick = () => {
        setSearchParams(searchText.current)
        searchText.current.value = null
    }

    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                <input
                    type='search'
                    ref={searchText}
                    style={searchBoxStyles}
                    placeholder='Search everything at Walmart online and in store' />
                <button
                    style={{ ...buttonStyle, position: 'absolute' }}
                    type='submit'
                    onClick={handleOnClick}>
                    <SearchIcon />
                </button>
            </div>
        </>
    )
}

export default Searchbar