import {    
    Paper,
    Container,
    Grid,
    IconButton,
    InputBase,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/search'
import TemplateDefault from '../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        padding: theme.spacing(8, 10, 6)
    },
    searchPaper: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginTop: 20,
    },
    cardMedia: {
        padding: '56%'
      }
}))

const Home = () => {

    const classes = useStyles()

    return (
        <TemplateDefault>
            <Container maxWidth="md" className={classes.searchContainer}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary">
                    O que deseja encontrar?
                </Typography>
                <Paper className={classes.searchPaper}>
                    <InputBase 
                        placeholder="Ex.: iPhone 14 com garantia"
                        fullWidth
                    />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Container>

            <Container maxWidth="md" className={classes.cardGrid}>
                <Typography component="h2" variant="h4" align="center" color="textPrimary">
                    Destaques
                </Typography>
                <br /> 
                <Grid container spacing={4}>
                    {/* xs = extra small sm = small md = medium */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="Título da imagem"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Produto X
                                </Typography>
                                <Typography>
                                R$ 60,00
                                </Typography>
                            </CardContent>                    
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="Título da imagem"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Produto X
                                </Typography>
                                <Typography>
                                R$ 60,00
                                </Typography>
                            </CardContent>                        
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'https://source.unsplash.com/random'}
                                title="Título da imagem"
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                Produto X
                                </Typography>
                                <Typography>
                                R$ 60,00
                                </Typography>
                            </CardContent>                        
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Home