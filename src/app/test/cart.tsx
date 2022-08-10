import React from 'react';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';


function Cart() {

    let state: any = useSelector((state: any) => state.reducer);
    let alertState: any = useSelector((state: any) => state.reducer2);
    let dispatch = useDispatch();
    return (
        <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.map((a: { id: number; name: string; quan: number; }, i: number) => {
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch({type: '수량증가', payload: {name: "kim", data: a.id}});
                                    }}>+
                                    </button>
                                    <button onClick={() => {
                                        dispatch({type: '수량감소', payload: {name: "kim", data: a.id}});
                                    }}>-
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            {
                alertState ? (<div className='alert alert-warning'><p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={() => {
                        dispatch({type: 'alertClose'});
                    }}>닫기
                    </button>
                </div>) : null
            }

        </div>
    )
}

// function store(state: any) {
//     return {
//         state: state.reducer,
//         alertState: state.reducer2
//     };
// }


// export default connect(store)(Cart)

export default Cart;
