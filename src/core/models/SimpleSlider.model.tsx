import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider(props: any) {

    console.log("props : ", props.imgs);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    return (
        <div>
            <Slider {...settings}>
                {props.imgs.map((item: any) => (
                    <div>
                        <img src={item.url} alt="1"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}


// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <div>
//                 <Slider {...settings}>
//                     <div>
//                         <img src="http://beyondi.site/uploads/localdir/developerImg.png" alt="1"/>
//                     </div>
//                     <div>
//                         <img src="http://beyondi.site/uploads/localdir/developerImg.png" alt="1"/>
//                     </div>
//                     <div>
//                         <img src="http://beyondi.site/uploads/localdir/developerImg.png" alt="1"/>
//                     </div>
//                     <div>
//                         <img src="http://beyondi.site/uploads/localdir/developerImg.png" alt="1"/>
//                     </div>
//                     <div>
//                         <img src="http://beyondi.site/uploads/localdir/developerImg.png" alt="1"/>
//                     </div>
//
//                 </Slider>
//             </div>
//         );
//     }
// }
