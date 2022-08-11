import MainCard from '../../ui-component/cards/MainCard';
import {Grid} from "@mui/material";
import {useState} from "react";
import rest from "../../service/api.service";


function Introduce() {
    let [abc, setAbc] = useState();

    rest.getLiveDeviceList().then((res) => {
        setAbc(res.data);
    });

    return (
        <MainCard title={"Introduce"}>
            <Grid item xs={12} sm={6}>
                {abc ? abc : null}
            </Grid>
        </MainCard>
    )

}


export default Introduce;