import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import Select from "react-select";
import Editor from "../../utils/quillEditor/Editor";
import {useEffect, useState} from "react";
import mainRoutes from "../../routes/MainRoutes";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";


const quillCond = new QuillEditorModel();
const optiopn: any = [];

function Write() {
    useEffect(() => {
        targetPageOption(mainRoutes.children);
    }, []);

    console.log(mainRoutes.path);
    let [quillHtml, setQuillHtml] = useState('');
    const editorSetText = (text: any) => {
        setQuillHtml(text.value);
        quillCond.htmlTxt = text.value;
        console.log(quillCond);
    }

    const save = () => {
        quillCond.htmlTxt = quillHtml;
        rest.postSaveHtml(quillCond).then(res => {
            console.log(res);

        }).catch(e => {
            console.error(e);
        })
    }

    const setTargetPage = (e: any) => {
        console.log(e);
        quillCond.targetPage = e.value;
    }

    return (
        <MainCard title={"Admin | Write"}>
            <Grid item xs={12} sm={6}>
            </Grid>
            <Select options={optiopn} onChange={setTargetPage}/>
            <input type={"text"} onChange={(event) => {quillCond.title = event.target.value}}/>
            <Editor setText={editorSetText}/>
            <button onClick={save}>저장</button>
        </MainCard>
    )
}

function targetPageOption(children: any): void {
    const routeChid = children;

    if (routeChid != null) {
        routeChid.forEach((value: any) => {
            if (value.element && value.path !== "/") {
                optiopn.push({value: value.path, label: value.path});
            } else {
                targetPageOption(value.children);
            }
        });
    }
}


export default Write;