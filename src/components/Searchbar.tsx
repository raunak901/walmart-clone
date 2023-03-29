import { useRef } from "react"

const searchBoxStyles = {
    height: '40px',
    width: '600px',
    paddingLeft: '1rem',
    paddingRight: '2.5rem',
    borderRadius: '9999px',
    borderStyle: 'none',
    fontSize: '16px',
    display: 'flex'
}

const buttonStyle = {
    height: '35px',
    width: '35px',
    borderRadius: '9999px',
    borderStyle: 'none',
    backgroundColor: '#ffc220'
}

interface ISearchParams {
    setSearchParams: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar = (props: ISearchParams) => {

    const searchText = useRef<any>(null)
    const { setSearchParams } = props

    const handleOnClick = () => {
        searchText.current.value = null
        setSearchParams(searchText.current)
    }

    return (
        <>
            <div style={{ display: 'flex' }}>
                <input
                    type='search'
                    ref={searchText}
                    style={searchBoxStyles}
                    placeholder='Search everything at Walmart online and in store' />
                <button
                    style={buttonStyle}
                    type='submit'
                    onClick={handleOnClick} />
            </div>
        </>
    )
}

export default Searchbar