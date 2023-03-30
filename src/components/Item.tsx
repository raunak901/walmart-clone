import { IReponse } from "../App"
import Button from '@mui/material/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

interface Iprops {
    item: IReponse
}

const Item = ({ item }: Iprops) => {

    const { name, thumbnailUrl, price } = item

    return (
        <div style={{ flex: '1 0 21%', display: 'block', cursor: 'pointer', marginBottom: 30 }}>
            <div style={{ display: 'flex' }}>
                <img alt={name} src={thumbnailUrl} style={{ width: "240px", height: "320px" }} />
                <span style={{ marginLeft: -40 }}><FavoriteBorderIcon><Button sx={{ color: 'black' }} /></FavoriteBorderIcon></span>
            </div>
            <div>
                <div><Button sx={{ borderRadius: 9999, marginBottom: 2 }} variant="contained"><strong>+ ADD</strong></Button></div>
                <span style={{ fontSize: 18 }} ><strong>${price}</strong></span><br />
                <span style={{ fontSize: 15, fontFamily: 'serif' }}>Options from ${price} - ${(price + 50).toFixed(2)}</span><br /><br />
                <div style={{ maxWidth: '200px' }}>{name}</div>
            </div>
        </div >
    )
}

export default Item