import React from 'react';
import {Link} from 'react-router-dom';

// async function getUsers() {
//     const response = await axios.get(
//         environment.ec2Api.local + "info"
//     );
//     return response.data;
// }


function Main() {
    // const [state] = useAsync(getUsers, []);
    // console.log(state);
    // const { loading, data, error } = state;


    // axios.get("http://localhost:8080/info", {headers}).then(res => {
    //     alert(res.data);
    // });
    return (
        <>
            {/*<Routes>*/}
            {/*    <Route path={"Profile/velopert"}>asdasdasdasd</Route>*/}
            {/*</Routes>*/}

            <h3>안녕하세요. 메인페이지 입니다.</h3>
            <ul>
                <Link to="/product/1">
                    <li>1번상품</li>
                </Link>
                <Link to="/product/2">
                    <li>2번상품</li>
                </Link>
            </ul>
        </>
    );
}


export default Main;