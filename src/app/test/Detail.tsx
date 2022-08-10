import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';
import img from "./images/img1.png"
import './Detail.scss';
import {Nav} from 'react-bootstrap';
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";

function Detail(props: any) {

    let [abc, setAbc] = useState(true);
    let [inputData, setInputData] = useState('');
    let [pushTab, setPushTab] = useState(0);
    let [switchBtn, setSwitchBtn] = useState(false);
    let {id} = useParams();
    let findProduct = props.products.find(function (product: any) {
        return product.id = id;
    });


    function inventoryOut() {
        let id = findProduct.id;
        let copyArr = [...props.inventory];

        copyArr[id] = copyArr[id] - 1;
        props.setInventory(copyArr);
    }

    console.log("inventory", props.inventory);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAbc(false);
        }, 2000);
        console.log('test');
        return () => {
            clearTimeout(timer);
        };
    }, [inputData]);

    useEffect(() => {
        return console.log('화면이 사라짐');
    }, [])
    // let Box = styled.div``;
    // let Title = styled.h4``;
    let navigate = useNavigate();

    return (
        <div className='container'>
            <div>
                <h4>상세페이지{pushTab}</h4>
                <CSSTransition in={switchBtn} classNames={"wow"} timeout={500}>
                    <TabContent pushTab={pushTab} setSwtichBtn={setSwitchBtn}/>
                </CSSTransition>
            </div>
            <input onChange={(e) => {
                setInputData(e.target.value)
            }}/>
            {
                abc ?
                    (
                        <div className='my-alert'>
                            <p>재고가 얼마 남지 않았습니다!</p>
                        </div>
                    )
                    : null
            }


            <div className='row'>

                <div className='col-md-6'>
                    <img className='img' width={`300px`} height={`300px`} src={img} alt={'img'}/>
                </div>
                <div className='col-md-6 mt-4'>
                    <h4 className='pt-5'>{props.products[0].title}</h4>
                    <p>{props.products[findProduct.id].content}</p>
                    <p>{props.products[findProduct.id].price}</p>
                    <p>{props.products[findProduct.id].id}</p>
                    <Info id={findProduct.id} inventory={props.inventory}/>
                    <button className='btn btn-danger' onClick={() => {
                        inventoryOut();
                        props.dispatch({
                            type: '항목추가',
                            payload: {
                                id: findProduct.id,
                                name: findProduct.title,
                                quan: Number(props.inventory[props.id])
                            }
                        });
                        navigate("/cart");
                    }}>주문하기
                    </button>
                    <br/>
                    <br/>
                    <button className='btn btn-danger' onClick={() => {
                        navigate(-1);
                    }}>뒤로가기
                    </button>
                </div>

                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => {
                            setSwitchBtn(false);
                            setPushTab(0)
                        }}>상품설명</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => {
                            setSwitchBtn(false);
                            setPushTab(1)
                        }}>배송정보</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>


            {/*
            <div className='my-alert'>
                <p>재고가 얼마 남지 않았습니다!</p>
            </div>
            */}
        </div>


    )
}

function Info(props: any) {
    console.log("id", props);
    return (
        <p> 재고 : {props.inventory[props.id]}</p>
    )
}

function TabContent(props: any) {
    useEffect(() => {
        props.setSwtichBtn(true);
    });
    console.log(props);
    return props.pushTab === 0 ? <div>0번째 내용</div> : props.pushTab === 1 ? <div>1번째 내용</div> : props.pushTab === 2 ?
        <div>2번째 내용</div> : null;
}

function store(state: any) {
    return {
        state: state.reducer,
        alertState: state.reducer2
    }
}

export default connect(store)(Detail)
