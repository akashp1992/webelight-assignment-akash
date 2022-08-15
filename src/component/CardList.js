import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStaredRepo } from '../redux/Slice/getStaredRepoSlice'
import { List,Grid } from '@material-ui/core'
import ListItem from './ListItem';

function CardList() {
    const newDate = null;
    let [page, setPage] = useState(1);
    const [datas, setDatas] = useState([]);
    const [isScroll, setIsScroll] = useState(true);
    const dispatch = useDispatch();
    const [res, setRes] = useState([]);
    const repos = useSelector((state) => state.staredRepo)

    useEffect(() => {

        setDate();
        const request = {
            data: {
                date: setDate(),
                page: page
            },
            onSuccess: (res) => {
                setDatas(res.data.items)
            }
        }
        dispatch(getStaredRepo(request))
        getRepos();
        scrollHandler();
    }, [])

    let getRepos = async () => {
        setIsScroll(false)
        if (datas) {
            const data = datas;
            data.push(...datas)
            page++
            await setDatas(data)
            await setPage(page)
            await setIsScroll(true)
        }
    }

    const scrollHandler = async () => {
        window.addEventListener('scroll', async () => {
            if (isScroll)
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
                    await datas;
        });
    }
    const setDate = () => {
        try {
            let date = new Date();
            date.setMonth(date.getMonth() - 1);
            date = date.toISOString();
            date = date.split('T')[0];
            return date
        } catch (e) {
            console.error('Couldn\'t get the current date');
        }
    }

    return (
        <>

           
                <List>
                    {
                        datas.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    avatar={item.owner.avatar_url}
                                    name={item.owner.login}
                                    title={item.name}
                                    desc={item.description}
                                    stars={item.stargazers_count}
                                    issues={item.open_issues_count}
                                    creationDate={item.created_at}
                                />
                            )
                        })
                    }
                </List>
            
        </>
    )
}

export default CardList