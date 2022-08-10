import {Button} from "react-bootstrap";
import React, {useContext} from "react";
import {inventoryContext} from "../../App";
import {useNavigate} from "react-router-dom";

function Jumbotron(props: any) {
    return (
        <>
            <div className='Jumbotron'>
                <h1>20% Season Off</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </div>
            <div className='container'>
                <inventoryContext.Provider value={props.inventory}>
                    <div className='row'>
                        {props.products.map((a: any, i: any) => {
                            return <Card products={a} num={i} key={i}/>;
                        })}
                    </div>
                </inventoryContext.Provider>

            </div>
        </>
    );
}

function Card(props: any) {
    let inventory: any = useContext(inventoryContext);
    console.log(inventory[props.products.id]);
    const navigate = useNavigate();
    return (

        <div className='col-md-4' onClick={() => {
            navigate("/detail/" + props.products.id);
        }}>
            <img className="img" width={`300px`} height={`300px`} src={'images/img' + (props.num + 1) + '.png'}
                 alt={'images/img' + (props.num + 1) + '.png'}/>
            <h4>{props.products.id}</h4>
            <h4>{props.products.title}</h4>
            <p>{props.products.content}</p>
            <p>{props.products.price}</p>
            <p>재고 : {inventory[props.products.id]}</p>
        </div>
    )
}

export default Jumbotron;