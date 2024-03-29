import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(6, 0, 6)
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()
    
    return (
        <>
            <Header />
            <Box className={classes.container}>
            {children}
            <Footer />
            </Box>
        </>
    )
}

export default Default