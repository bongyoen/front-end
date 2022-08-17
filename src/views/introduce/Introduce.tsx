import MainCard from '../../ui-component/cards/MainCard';
import {Grid} from "@mui/material";
import "@material-ui/core"
import {useEffect, useState} from "react";

import "./introduce.scss";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";

const quillCond = new QuillEditorModel();
const optiopn: any = [];

function Introduce() {
    const [quillHtml, setQuillHtml] = useState('');

    useEffect(() => {
        rest.getHtml("introduce")
    }, []);

    return (
        <MainCard title={"Introduce"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}>
            </Grid>
        </MainCard>
    )
}

export default Introduce;