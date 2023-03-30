import { IReponse } from '../App'
import Item from './Item'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface IProps {
    searchParams: string
    searchData: IReponse[]
    isLoading: boolean
}

const ItemsContainer = (props: IProps) => {

    const { searchParams, searchData, isLoading } = props

    return (
        <>
            {isLoading && <Box sx={{ display: 'flex', justifyContent: 'center', height: '60vh', alignItems: 'center' }}> <CircularProgress />&nbsp;&nbsp;<span>Loading...</span></Box>}
            {!isLoading &&
                <>
                    {searchParams && searchParams.length !== 0 &&
                        <div style={{ padding: 20, borderTop: 'grey solid 1px', borderBottom: 'grey solid 1px' }}>
                            <strong style={{ fontFamily: 'serif', fontSize: 20, marginBottom: 30 }}>Results for "{searchParams}"</strong><span style={{ color: '#888' }}>(1000+)</span><br />
                            <span style={{ fontFamily: 'serif', fontSize: 15 }}>Price when purchased online</span>
                        </div>
                    }

                    <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: 20, padding: 20 }}>
                        {searchData.map((item: IReponse) => {
                            return <Item key={item.id} item={item} />
                        })}
                    </div>
                </>}
        </>
    )
}

export default ItemsContainer
