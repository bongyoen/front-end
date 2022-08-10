import React from "react";

interface User {
    velopert: {
        name: string,
        description: string,
    };
    dongwon: {
        name: string,
        description: string,
    };

    [propsName: string]: any;
}


const data: User = {
    velopert: {
        name: "김민준",
        description: "리액트 저자",
    },
    dongwon: {
        name: "김동원",
        description: "공부 중",
    }
};
const Profile = ({match}: any) => {
    console.log(match)
    const {username} = match.data;
    const profile = data[username];
    if (!profile) {
        return <div> 존재하지 않는 사용자입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;