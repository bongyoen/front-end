import {Grid} from '@mui/material';


import MainCard from '../../ui-component/cards/MainCard';
import {useEffect, useState} from "react";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";

function Career() {
    const [quillHtml, setQuillHtml]: any = useState('');

    useEffect(() => {
        rest.getHtml("career").then(res => {
            const html: QuillEditorModel = res.data;
            setQuillHtml(html.pageHtml);
        })
    }, []);

    return (
        <MainCard title={"Career | career"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}/>
        </MainCard>
    )
}

export default Career;