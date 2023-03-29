import { IReponse } from '../App'
import Item from './Item'

interface IProps {
    searchData: IReponse[]
    isLoading: boolean
}

const ItemsContainer = (props: IProps) => {

    const { searchData, isLoading } = props

    return (
        <>
            {isLoading && <div style={{ display: 'flex', justifyContent: 'center' }}>Loading...</div>}
            {!isLoading &&
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, width: '150vh', padding: '20px' }}>
                    {searchData.map((item: IReponse) => {
                        return <Item key={item.id} item={item} />
                    })}
                </div>}
        </>
    )
}

export default ItemsContainer