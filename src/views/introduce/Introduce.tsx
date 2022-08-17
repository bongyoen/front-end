import MainCard from '../../ui-component/cards/MainCard';
import {Grid} from "@mui/material";
import "@material-ui/core"
import {useEffect, useState} from "react";

import "./introduce.scss";
import rest from "../../core/service/api.service";

function Introduce() {
    const [quillHtml, setQuillHtml] = useState('');

    useEffect(() => {
        rest.getHtml("introduce").then(res => {
            setQuillHtml(res.data);
        })
    }, []);

    return (
        <MainCard title={"Introduce"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}>
            </Grid>
        </MainCard>
    )
}

export default Introduce;