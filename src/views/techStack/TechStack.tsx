import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";
import "../../core/css/introduce.scss";


function TechStack() {
    const [quillHtml, setQuillHtml]: any = useState('');

    useEffect(() => {
        rest.getHtml("techstack").then(res => {
            const html: QuillEditorModel = res.data;
            setQuillHtml(html.pageHtml);
        })
    }, []);

    return(
        <MainCard title={"TeckStack"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}>

            </Grid>
        </MainCard>
    )
}

export default TechStack;