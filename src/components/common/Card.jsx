import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardItem({ item }) {
    const navigate = useNavigate();

    const handleNavigate = (event, id) => {
        event.stopPropagation();
        navigate(`/character/${id}`);
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography gutterBottom variant="caption" >
                        {item.status}
                    </Typography>

                    <Typography gutterBottom variant="body2" sx={{ marginTop: 3 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                        Maecenas iaculis eu libero vitae laoreet <br />
                        Fusce pharetra volutpat magna in porta. <br /> Praesent tempor, metus vulputate iaculis facilisis
                    </Typography>
                </CardContent>
                <CardActions onClick={handleNavigate}>
                    <Button size="small" onClick={(event) => handleNavigate(event, item.id)}>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
