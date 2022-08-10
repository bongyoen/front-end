import React from "react";

const MyComponent = (props: {name: string, children: any, fnum: number}) => {
    return<div>나의 새롭고 멋진 compnonet {props.name}<br/>child = {props.children} {props.fnum}</div>;
};

MyComponent.props = {
    name: '기본 이름'
}


export default MyComponent;