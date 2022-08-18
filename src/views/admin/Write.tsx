import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import Select from "react-select";
import React, {useEffect, useState} from "react";
import mainRoutes from "../../routes/MainRoutes";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";
import EditorToolbar, {formats, modules} from "../../utils/quillEditor/EditorToolbar";
import ReactQuill from "react-quill";
import "../../core/css/introduce.scss";


const quillCond = new QuillEditorModel();
const optiopn: any = [];

function Write() {
    useEffect(() => {
        targetPageOption(mainRoutes.children);
    }, []);

    let [quillHtml, setQuillHtml]: any = useState('');

    const save = () => {
        quillCond.pageHtml = quillHtml;
        rest.postSaveHtml(quillCond).then(res => {
            console.log(res);

        }).catch(e => {
            console.error(e);
        })
    }

    const [quillState, setQuillState]: any = React.useState({value: null});
    const handleChange = (value: any) => {
        setQuillHtml(value);
        quillCond.pageHtml = quillHtml;
        setQuillState({value});
    };

    const setTargetPage = (e: any) => {
        quillCond.pageTarget = e.value;
        if (quillCond.pageTarget != null) {
            rest.getHtml(quillCond.pageTarget).then(res => {
                const html: QuillEditorModel = res.data;
                setQuillState({value: html.pageHtml});
                setQuillHtml(html.pageHtml);
            })
        }
    }

    return (
        <MainCard title={"Admin | Write"}>
            <Grid item xs={12} sm={6}>
            </Grid>
            <Select options={optiopn} onChange={setTargetPage}/>
            <input type={"text"} onChange={(event) => {quillCond.title = event.target.value}}/>
            <div className="text-editor">
                <EditorToolbar/>
                <ReactQuill
                    theme="snow"
                    value={quillState.value}
                    onChange={handleChange}
                    placeholder={"Write something awesome..."}
                    modules={modules}
                    formats={formats}
                />
            </div>
            {/*<Editor setText={editorSetText} setHtml={quillHtml}/>*/}
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