import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    repoCard: {
        padding: '30px',
        backgroundColor: "white",
        height: '100px',
        height: 'auto',
        marginBottom: '20px',
    },
    avatar: {
        width: '100%'
    },
    imgAvtar: {
        width: '100%',
        height: ' auto',
        padding: '10px 10px'
    },
    data: {
        overflow: 'hidden',
        padding: '20px 10px',
        width: '100%',
        height: 'auto',
        fontFamily: 'Lato sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowWrap: 'break-word',


    },
    repoDesc: {
        color: '#3a3e48b0'
    },
    repoTitle: {
        fontWeight: 600,
        color: '#525e7c'
    },

    repoStatus: {
        padding: '10px',
        width: '100%',
        display: 'inline-block',
     
    },
    repoIssues: {
        marginRight: '10px',
        color: 'black',
        border: '3px solid black',
        backgroundImage: 'linear-gradient(to bottom right, #ef473a, #cb2d3e)',

    },
    repoStars: {
        marginRight: '10px',
        color: 'black',
        border: '3px solid black',
        backgroundImage: ' linear-gradient(to bottom right, #606c88, #3f4c6b)',
    },
    repoOwner: {
        background: 'linear-gradient(to bottom right, #606c88, #3f4c6b)',
        backgroundClip: ' text',
        WebkitTextFillColor: 'transparent',
    },
    root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing.unit * 2,
        margin: 'auto',
        maxWidth: '100%'
      },
      image: {
        width: 128,
        height: 128
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
      },
      chip: {
        margin: theme.spacing.unit
      },
      link: {
        margin: theme.spacing.unit
      }
}))

export default useStyles