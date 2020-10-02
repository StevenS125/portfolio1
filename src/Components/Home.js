import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ContactDialog from './ContactDialogue';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Steven Snyder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = 
[
  { 
    name:"Acthar.com Redesign",
    description: "Site Redesign for Acthar.com",
    img: "https://searchforsteve.s3.amazonaws.com/Screen+Shot+2020-10-02+at+2.26.54+PM.png",
    webLink: "https://Acthar.com"
  },
  { 
    name:"Dash Reel",
    description: "Web Page for Inspirational Speaker built with React",
    img: "https://searchforsteve.s3.amazonaws.com/Screen+Shot+2020-10-02+at+2.44.47+PM.png",
    webLink: "https://dashreel.com"
  },
  { 
    name:"Project Completion",
    description: "Web Page for Inspirational Speaker built with React",
    img: "https://searchforsteve.s3.amazonaws.com/Screen+Shot+2020-10-02+at+3.33.43+PM.png",
    webLink: "https://projectcompletionpro.com"
  },
  { 
    name:"Girlfriend.com Returns",
    description: "Web Page for Inspirational Speaker built with React",
    img: "https://searchforsteve.s3.amazonaws.com/Screen+Shot+2020-10-02+at+11.07.54+AM.png",
    webLink: "https://girlfriend.com"
  },
  { 
    name:"Embr Labs Returns",
    description: "Web Page for Inspirational Speaker built with React",
    img: "https://searchforsteve.s3.amazonaws.com/Screen+Shot+2020-10-02+at+11.27.09+AM.png",
    webLink: "https://embrlabs.com"
  },
  { 
    name:"Straight Talk Today",
    description: "Web Page for Inspirational Speaker built with React",
    img: "https://searchforsteve.s3.amazonaws.com/STT.png",
    webLink: "http://straighttalktoday.com"
  }
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Steven Snyder
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Steven Snyder <br></br>Full Stack Developer
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Check out my Porfessional Portfolio Below! 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={1} justify="center">
                <Grid item>
                    <ContactDialog />
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Check out My Github
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link href={card.webLink}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    </Link>
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        
        <Typography variant="h6" color="primary" align="center" gutterBottom>
          <Link href="https://www.linkedin.com/in/steven-snyder/">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/StevenS125" >
            <GitHubIcon />
          </Link>
        </Typography>

        {/* <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}