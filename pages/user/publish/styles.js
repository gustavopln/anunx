import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    mask: {},
    mainImage: {},    
    boxContainer: {
        paddingBottom: theme.spacing(3)
    },    
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3)
    }
}))

export default useStyles