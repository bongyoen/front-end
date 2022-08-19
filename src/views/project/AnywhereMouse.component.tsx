import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import rest from "../../core/service/api.service";
import {QuillEditorModel} from "../../core/models/quillEditor.model";
import "./AnywhereMouse.scss"

function AnywhereMouseComponent() {
    const [quillHtml, setQuillHtml]: any = useState('');

    useEffect(() => {
        rest.getHtml("anywheremouse").then(res => {
            const html: QuillEditorModel = res.data;
            setQuillHtml(html.pageHtml);
        })
    }, []);

    return (
        <MainCard title={"AnywhereMouse"}>
            <div onClick={() => window.open("/uploads/localdir/폰케이스형_블루투스_마우스_특허출원.pdf", "_blank")}>
                <h2 className={"pdfView"}>
                    특허출원.pdf
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-click "
                         width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0066cc" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"/>
                        <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"/>
                        <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"/>
                        <path
                            d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"/>
                        <path d="M5 3l-1 -1"/>
                        <path d="M4 7h-1"/>
                        <path d="M14 3l1 -1"/>
                        <path d="M15 6h1"/>
                    </svg>
                </h2>
            </div>
            <Grid item xs={12} sm={6} className={"ql-editor"} dangerouslySetInnerHTML={{__html: quillHtml}}/>
        </MainCard>
    )
}

export default AnywhereMouseComponent;