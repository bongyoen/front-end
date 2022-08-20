import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import "../../core/css/introduce.scss";
import {useEffect, useState} from "react";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";

function GoodLuckDog() {
    const [quillHtml, setQuillHtml]: any = useState('');

    useEffect(() => {
        rest.getHtml("goodluckdog").then(res => {
            const html: QuillEditorModel = res.data;
            setQuillHtml(html.pageHtml);
        })
    }, []);

    return (
        <MainCard title={"Project | GoodLuckDog"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}/>
        </MainCard>
    )
}

export default GoodLuckDog;