import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";
import {Link} from "react-router-dom";

function AnywhereMouse() {
    const [quillHtml, setQuillHtml]: any = useState('');

    useEffect(() => {
        rest.getHtml("anywheremouse").then(res => {
            const html: QuillEditorModel = res.data;
            setQuillHtml(html.pageHtml);
        })
    }, []);

    return (
        <MainCard title={"AnywhereMouse"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}/>
            <Link to={"/uploads/localdir/폰케이스형_블루투스_마우스_특허출원.pdf"}>ㄴㅇㅁㄴㅇ</Link>
        </MainCard>
    )
}

export default AnywhereMouse;