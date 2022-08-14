import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, {formats, modules} from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.scss";

export const Editor = (props : any) => {
    const [state, setState]: any = React.useState({value: null});
    const handleChange = (value: any) => {
        setState({value});
        props.setText({value})
    };
    return (
        <div className="text-editor">
            <EditorToolbar/>
            <ReactQuill
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};
export default Editor;
