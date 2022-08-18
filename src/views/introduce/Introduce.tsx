import MainCard from '../../ui-component/cards/MainCard';
import {Grid} from "@mui/material";
import "@material-ui/core"
import {useEffect, useState} from "react";

import "../../core/css/introduce.scss";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";

function Introduce() {
    const [quillHtml, setQuillHtml]: any = useState('');

    useEffect(() => {
        rest.getHtml("introduce").then(res => {
            const html: QuillEditorModel = res.data;
            setQuillHtml(html.pageHtml);
        })
    }, []);

    return (
        <MainCard title={"Introduce"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}/>
        </MainCard>
    )
}

export default Introduce;