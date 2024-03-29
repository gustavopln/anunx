import { useState } from 'react'
import { 
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    Select,
    TextField,
    Typography,
    InputLabel,
    OutlineInput,
    InputAdornment,
    OutlinedInput,
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'
import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},    
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },
    thumbsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 15,

    },
    dropzone: {
        display: 'flex',        
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        width: 200,
        height: 150,        
        margin: '0 15px 15px 0',
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black'
    },
    thumb: {
        position: 'relative',
        width: 200,
        height: 150,
        margin: '0 15px 15px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        '& $mainImage': {
            position: 'absolute',
            backgroundColor: 'blue',
            padding: '6px 10px',
            bottom: 0,
            left: 0
        },

        '&:hover $mask': {
            display: 'flex'
        },

        '& $mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            width: '100%',
            height: '100%',
        }
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    }
}))

const handleChangeCategory = () => ({

})

const Publish = () => {
    const classes = useStyles()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => { /*A função que é executada toda fez que selecionar ou arrastar uma imagem*/
            /*Cria uma nova referência de objeto para criar um preview das imagens que foram selecionadas*/
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file) /* método do próprio javaScript*/
                })
            })

            setFiles([
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = fileName => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }

    return (
        <TemplateDefault>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>
                
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}> 
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Título do Anúncio
                    </Typography>
                    <TextField 
                        label="ex.: Bicicleta Aro 18 com garantia"
                        size="small"
                        fullWidth //Irá ocupar o tamanho inteiro do box
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color="textPrimary">
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=""
                        fullWidth
                        onChange={handleChangeCategory}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value={1}>Bebê e Criança</option>
                        <option value={2}>Agricultura</option>
                        <option value={3}>Moda</option>
                        <option value={4}>Carros, Motos e Barcos</option>
                        <option value={5}>Serviços</option>
                        <option value={6}>Lazer</option>
                        <option value={7}>Animais</option>
                        <option value={8}>Móveis, Casa e Jardim</option>
                        <option value={9}>Imóveis</option>
                        <option value={10}>Equipamentos e Ferramentas</option>
                        <option value={11}>Celulares e Tablets</option>
                        <option value={12}>Esporte</option>
                        <option value={13}>Tecnologia</option>
                        <option value={14}>Emprego</option>
                        <option value={15}>Outros</option>
                    </Select>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        A primeira imagem é a foto principal do seu anúncio.
                </Typography>
                <Box className={classes.thumbsContainer}>
                    <Box className={classes.dropzone} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Typography variant="body2" color="textPrimary">
                            Clique aqui para adicionar ou arraste a imagem para cá
                        </Typography>
                    </Box>

                    {
                        files.map((file, index) => (
                            <Box
                                key={file.name} 
                                className={classes.thumb}
                                style={{ backgroundImage: `url(${file.preview})` }}
                            >
                                {
                                    index === 0 ?
                                    <Box className={classes.mainImage}>
                                        <Typography variant='body2' color='secondary'>
                                            Principal
                                        </Typography>
                                    </Box>
                                    : null
                                }                                
                                <Box className={classes.mask}>
                                    <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                        <DeleteForever fontSize="large" />
                                    </IconButton>
                                </Box>
                            </Box>
                        ))
                    }
                    
                </Box>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color="textPrimary">
                        Escreva os detalhes do que está vendendo
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Preço
                    </Typography>
                    <br />
                    {/* FormControl para criar um campo com por exemplo o R$, para isso também é preciso o InputAdornment */}
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Valor</InputLabel>
                        <OutlinedInput 
                            onChange={() => {}}
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            labelWidth={40}
                        />
                    </FormControl>
                    
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                        Dados de Contato
                    </Typography>
                    <TextField
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />  
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />                    
                    <TextField
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" color="primary">
                        Publicar Anúncio
                    </Button>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Publish