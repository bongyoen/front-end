import MainCard from '../../ui-component/cards/MainCard';
import {Grid} from "@mui/material";
import "@material-ui/core"
import {useEffect, useState} from "react";
import Editor from "../../utils/quillEditor/Editor";

import "./introduce.scss";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";
import mainRoutes from "../../routes/MainRoutes";
import Select from "react-select";

const quillCond = new QuillEditorModel();
const optiopn: any = [];

function Introduce() {

    useEffect(() => {
        targetPageOption();
    }, []);

    console.log(mainRoutes.path);
    let [quillHtml, setQuillHtml] = useState('');
    const editorSetText = (text: any) => {
        setQuillHtml(text.value);
    }

    const save = () => {
        quillCond.htmlTxt = quillHtml;
        quillCond.targetPage = "몰라";
        rest.postSaveHtml(quillCond).then(res => {
            console.log(res);

        }).catch(e => {
            console.error(e);
        })
    }

    const setTargetPage = (e: any) => {
        quillCond.targetPage = e.target.value;
    }

    return (
        <MainCard title={"Introduce"}>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}>
            </Grid>
            {/*<Select options onChange={setTargetPage}></Select>*/}
            <Select options={optiopn} onChange={setTargetPage}/>
            <Editor setText={editorSetText}/>
            <button onClick={save}>저장</button>
        </MainCard>
    )
}

function targetPageOption(): void {
    mainRoutes.children.forEach((value) => {
        optiopn.push({value: value.path, label: value.path});

    });
}


export default Introduce;