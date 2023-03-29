import { IReponse } from '../App'
import Item from './Item'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface IProps {
    searchData: IReponse[]
    isLoading: boolean
}

const ItemsContainer = (props: IProps) => {

    const { searchData, isLoading } = props

    return (
        <>
            {isLoading && <Box sx={{ display: 'flex' }}> <CircularProgress /></Box>}
            {!isLoading &&
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
                    {searchData.map((item: IReponse) => {
                        return <Item key={item.id} item={item} />
                    })}
                </div>}
        </>
    )
}

export default ItemsContainer
