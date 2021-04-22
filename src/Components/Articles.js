import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className="main_wrapper">
      <h3>Articles</h3>
      <div className="news_wrapper" style={{ paddingTop: "15px" , paddingBottom: "5px"}}>
        <div className="row">
          <div class="col m3 s12">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  alt="Contemplative Reptile"
                  image="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/cb31ef4d-161651123_720045308614617_4667230628638156963_n.jpg?w=680"
                  title="Contemplative Reptile"
                  style={{ backgroundSize: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
          <div class="col m3 s12">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  alt="Contemplative Reptile"
                  image="https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/01/The-Weeknd-After-Hours.jpg?w=680"
                  title="Contemplative Reptile"
                  style={{ backgroundSize: "cover" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
