import { Button } from '@mui/material'

const Footer = () => {
    return (
        <div style={{ marginTop: 1120 }}>
            <div style={{ textAlign: 'center', backgroundColor: 'rgb(230,241,252)', height: 80, padding: 30, fontSize: 16 }}>
                <span>We’d love to hear what you think!</span><br />
                <Button sx={{ marginTop: 2, color: 'black', backgroundColor: 'white', borderColor: 'black', borderRadius: 9999 }} variant="outlined">
                    <strong>Give feedback</strong>
                </Button>
            </div>
            <div>
                <img src='/footer.png' alt='Footer' width='100%' />
            </div>
        </div>
    )
}

export default Footer