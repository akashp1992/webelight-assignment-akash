import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Collapse, Menu, MenuItem, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Chart from './Chart'
import { useDispatch } from 'react-redux'
import { getAdditionData } from '../redux/Slice/getAdditionSlice'

const useStyles = makeStyles((theme) => ({
    divRoot: {
        display: 'flex',
        flexDirection: 'column'
    }, repoStar: {
        border: '1px solid blue', borderRadius: '10px', margin: '10px', padding: '5px'
    },
    repoIssue: {
        border: '1px solid red', borderRadius: '10px', margin: '10px', padding: '5px'
    }
}))
function ListItems({ title, avatar, desc, stars, issues, name, creationDate }) {
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const [week, setWeek] = useState([])
    const [author, setAuthor] = useState([]);
    const [isCommit, setIsCommit] = useState(false);
    useEffect(() => {
        dispatch(getAdditionData())
    }, [week])
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let timeInterval = creationDate.split('T')[0];
    timeInterval = moment(creationDate, "YYYY-MM-DD").fromNow();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = () => {
        setOpen(!open)
        const request = {
            data: {
                owner: name,
                repo: title
            },
            onSuccess: (res) => {
                console.log("data", res);
                setData(res.data)

                data?.map((week) => {
                    setWeek(week.weeks)
                    setAuthor(week.author)
                })
            }
        }
        dispatch(getAdditionData(request));
    }
    return (
        <div>

            <ListItem onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar alt="Avatar" src={avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {desc}
                            </Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', width: '50%' }}>
                                <div className={classes.repoIssue}>{`${issues} Issues`}</div>
                                <div className={classes.repoStar}>{`${stars} Stars`}</div>
                                <Typography>{`Last Pushed ${timeInterval} by ${name}.`}</Typography>
                            </div>

                        </>
                    }
                />
            </ListItem>
            <Collapse
                in={open}
                timeout='auto'
                unmountOnExit
            > <Button
                id="demo-positioned-button"
                aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleMenuClick}
                style={{ display: 'flex', float: 'right', color: 'red' }}
            >
                    Menu
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={() => setIsCommit(true)}>Commit</MenuItem>
                    <MenuItem onClick={handleClose}>Addition</MenuItem>
                    <MenuItem onClick={handleClose}>Deletion</MenuItem>
                </Menu>
                {
                    isCommit ? <Chart data={data} week={week} author={author} /> : ""
                }

            </Collapse>
            <Divider variant="inset" component="li" />
        </div>
    )
}

export default ListItems