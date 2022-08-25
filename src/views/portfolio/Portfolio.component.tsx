import MainCard from "../../ui-component/cards/MainCard";
import {Grid} from "@mui/material";
import './Portfolio.scss'
import useMoveScrool from "../../core/service/MoveScrool.service";
import {store} from "../../store";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SimpleSlider from "../../core/models/SimpleSlider.model";
import Modal from 'react-modal';
import '@github/g-emoji-element'
import useScrollBlock from "../../core/service/useScrollBlock";

function PortfolioComponent() {
    const scrollReducer = useSelector((state: any) => state.scrollReducer);
    const [selectorTriger, setSelectorTriger] = useState(false);
    const [modalOpenForPort, setModalOptnForPort] = useState(false);
    const [modalOpenForMouse, setModalOptnForMouse] = useState(false);
    const [modalOpenForDog, setModalOptnForDog] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const goodsTabs: any = {
        0: useMoveScrool(),
        1: useMoveScrool(),
        2: useMoveScrool(),
        3: useMoveScrool()
    };

    store.subscribe(() => {
        if (scrollReducer.scrollTarget !== null)
            setSelectorTriger(!selectorTriger);
    });

    useEffect(() => {
        switch (scrollReducer.scrollTarget) {
            case 'Introduce':
                goodsTabs[0].onMoveToElement();
                break;
            case 'TechStack':
                goodsTabs[1].onMoveToElement();
                break;
            case 'Project':
                goodsTabs[2].onMoveToElement();
                break;
            case 'Career':
                goodsTabs[3].onMoveToElement();
                break;
            default :
        }
    }, [goodsTabs, scrollReducer.scrollTarget, selectorTriger])

    useEffect(() => {
        scrollReducer.scrollTarget = '';
    }, [blockScroll, allowScroll, scrollReducer])


    const imgSrc = 'http://beyondi.site/uploads/localdir/';
    const portPolioImg = [
        {url: imgSrc + 'intro.png'},
        {url: imgSrc + 'skill.png'},
        {url: imgSrc + 'project.png'},
    ];

    const anywhereMouseImg = [
        {url: imgSrc + 'anywheremouse_4_2022-08-19_08.36.29.png'},
        {url: imgSrc + 'anywheremouse_5_2022-08-19_08.36.29.png'},
        {url: imgSrc + 'anywheremouse_13_2022-08-19_08.36.30.png'},
        {url: imgSrc + 'anywheremouse_14_2022-08-19_08.36.30.png'},
    ];

    const goodluckdog = [
        {url: imgSrc + 'dog_beauty.png'},
        {url: imgSrc + 'dog_beauty_detail.png'},
        {url: imgSrc + 'dog_main.png'},
        {url: imgSrc + 'dog_shop.png'},
        {url: imgSrc + 'dog_shop_detail.png'},
        {url: imgSrc + 'dog_vet_detail.png'},
        {url: imgSrc + 'dog_vetadmin.png'},
    ];

    return (
        <MainCard>
            <Grid item xs={12} sm={6}>
                <div className={'Masthead_content'}>
                    <div className={'content'}>
                        <b>
                            <p>
                                - 김봉연 -<br/>
                            </p>
                            <p>
                                "웹 개발자 포트폴리오"
                            </p>
                            <hr/>
                            <p className={"MastHeadMemo"}>
                                안녕하세요.<br/>
                                공부가 취미인 웹 개발자입니다.<br/>
                                매우 꼼꼼한 성격, 그리고 공부를 밥 먹듯이 하는 습관이 저의 장점입니다.
                            </p>
                            <span>
                                <b onClick={goodsTabs[0].onMoveToElement}>더 알아보기
                                <br/> 🔻
                                </b>
                            </span>
                        </b>
                    </div>
                </div>
                <article className={'AboutMe'} id={'Introduce_target'} ref={goodsTabs[0].element}>
                    <div className={'AboutTitle'}>
                        <div className={'titleIcon'}>
                            <img className={'Introduce_btn'} onClick={goodsTabs[0].onMoveToElement}
                                 src="http://beyondi.site/uploads/localdir/black-link.png" alt="1"/>
                        </div>
                        <div className={'AboutTitleTxt'}>INTRODUCE</div>

                    </div>
                    <div className={'AboutSubject'}>
                        <div className={"AboutItems"}>
                            <div className={'AboutInfo'}>
                                <div className={'AboutItemIcon'}>
                                    <img src="http://beyondi.site/uploads/localdir/person-fill.svg" alt="1"/>
                                </div>
                                <div className={'AboutFiled'}>
                                    <div className={'AboutFiledLabel'}>
                                        이름
                                    </div>
                                    <div className={'AboutFiledValue'}>
                                        김봉연
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={"AboutItems"}>
                            <div className={'AboutInfo'}>
                                <div className={'AboutItemIcon'}>
                                    <img src={imgSrc + "person-fill.svg"} alt="1"/>
                                </div>
                                <div className={'AboutFiled'}>
                                    <div className={'AboutFiledLabel'}>
                                        생일
                                    </div>
                                    <div className={'AboutFiledValue'}>
                                        95.02.21
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"AboutItems"}>
                            <div className={'AboutInfo'}>
                                <div className={'AboutItemIcon'}>
                                    <img src={imgSrc + "geo-alt-fill.svg"} alt="1"/>
                                </div>
                                <div className={'AboutFiled'}>
                                    <div className={'AboutFiledLabel'}>
                                        주소지
                                    </div>
                                    <div className={'AboutFiledValue'}>
                                        서울특별시 강서구
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"AboutItems"}>
                            <div className={'AboutInfo'}>
                                <div className={'AboutItemIcon'}>
                                    <img src="http://beyondi.site/uploads/localdir/telephone-fill.svg" alt="1"/>
                                </div>
                                <div className={'AboutFiled'}>
                                    <div className={'AboutFiledLabel'}>
                                        연락처
                                    </div>
                                    <div className={'AboutFiledValue'}>
                                        010-4641-8359
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"AboutItems"}>
                            <div className={'AboutInfo'}>
                                <div className={'AboutItemIcon'}>
                                    <img src="http://beyondi.site/uploads/localdir/envelope-fill.svg" alt="1"/>
                                </div>
                                <div className={'AboutFiled'}>
                                    <div className={'AboutFiledLabel'}>
                                        이메일
                                    </div>
                                    <div className={'AboutFiledValue'}>
                                        kuhj1539@naver.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"AboutItems"}>
                            <div className={'AboutInfo'}>
                                <div className={'AboutItemIcon'}>
                                    <img src="http://beyondi.site/uploads/localdir/pencil-fill.svg" alt="1"/>
                                </div>
                                <div className={'AboutFiled'}>
                                    <div className={'AboutFiledLabel'}>
                                        학력
                                    </div>
                                    <div className={'AboutFiledValue'}>
                                        목원대학교<br/>
                                        (정보통신융합공학부)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className={'Skills'} id={'TechStack_target'} ref={goodsTabs[1].element}>
                    <div className={'skillsContent'}>
                        <div className={'AboutTitle'}>
                            <div className={'titleIcon'}>
                                <img className={'TechStack_btn'} onClick={goodsTabs[1].onMoveToElement}
                                     src="http://beyondi.site/uploads/localdir/black-link.png" alt="1"/>
                            </div>
                            <div className={'AboutTitleTxt'}>TECH STACK</div>
                        </div>
                        <div className={'skillContainer'}>
                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Frontend</div>
                                <img src="http://beyondi.site/uploads/localdir/front.png" alt="1"/>

                            </div>
                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Backend</div>
                                <img src="http://beyondi.site/uploads/localdir/backend.png" alt="1"/>

                            </div>

                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Mobile App</div>
                                <img src="http://beyondi.site/uploads/localdir/androidStudio.png" alt="1"/>

                            </div>
                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Database</div>
                                <img src="http://beyondi.site/uploads/localdir/db.png" alt="1"/>
                            </div>
                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Deployment</div>
                                <img src="http://beyondi.site/uploads/localdir/deploy.png" alt="1"/>

                            </div>
                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Commnuication</div>
                                <img src="http://beyondi.site/uploads/localdir/communication.png" alt="1"/>

                            </div>
                            <div className={'skillStacks'}>
                                <div className={'skillsTitle'}>Version Control</div>
                                <img src="http://beyondi.site/uploads/localdir/version_control.png" alt="1"/>

                            </div>
                        </div>

                    </div>

                </article>
                <article className={'Projects'} id={'Project_target'} ref={goodsTabs[2].element}>
                    <div className={'projectContent'}>
                        <div className={'AboutTitle'}>
                            <div className={'titleIcon'}>
                                <img className={'Project_btn'} onClick={goodsTabs[2].onMoveToElement}
                                     src="http://beyondi.site/uploads/localdir/black-link.png" alt="1"/>
                            </div>
                            <div className={'AboutTitleTxt'}>PROJECTS</div>
                        </div>
                        <div className={'projectItems'}>
                            <div className={'projectItem'}>
                                <div className={'projectTitle'}>포트폴리오 웹사이트</div>
                                <div className={'projectPeriod'}>
                                    2020.01
                                    <span className={'projectChunk'}> (1인 개인 프로젝트)</span>
                                </div>
                                <div className={'projectInfo'}>
                                    <div className={'projectImgCarousel'}>
                                        <SimpleSlider imgs={portPolioImg}></SimpleSlider>
                                    </div>
                                    <div className={'projectDescriptions'}>
                                        <div className={'projectDescripMain'}>
                                            포트폴리오 용도로 제작한 웹사이트입니다.<br/>
                                            지금 보고 있는 바로 이 웹사이트에 해당합니다.<br/>
                                            이미 순수 React로 개발한 사이트이며, Angular 위주의 개발을 진행하다 새로운 프런트 앤드의 궁금증으로 제작하게
                                            되었습니다.<br/>
                                            그 과정에서 익숙한 mvc에서 flux의 새로움을 배울 수 있었습니다.<br/>
                                            또한, AWS EC2, RDS와 Jenkins, Docker를 이용한 배포도 경험해 볼 수 있었습니다.<br/>
                                            <div className={'projectReadme'} onClick={() => {
                                                setModalOptnForPort(true);
                                                blockScroll()
                                            }}>
                                                자세히 보기 ▶ README
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                주요 기능
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                간단한 자기소개,<br/>
                                                인적 사항, 기술 스택,<br/>
                                                프로젝트 경험, 업무 경력
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                GitHub
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                <a target='_blank' rel="noreferrer"
                                                   href={'https://github.com/bongyoen/back-end'}>github.com/bongyoen/back-end</a><br/>
                                                <a target='_blank' rel="noreferrer"
                                                   href={'https://github.com/bongyoen/front-end'}>github.com/bongyoen/front-end</a>
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                URL
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                <a target='_blank' rel="noreferrer"
                                                   href={'http://beyondi.site/'}>beyondi.site/</a>
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                Tech
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                React, TypeScript,<br/> SpringBoot, Sass

                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                Deployment
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                AWS EC2, AWS RDS,<br/>
                                                Docker, Jenkins, GitHub
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'projectItem'}>
                                <div className={'projectTitle'}>Anywhere Mouse</div>
                                <div className={'projectPeriod'}>
                                    2020.01
                                    <span className={'projectChunk'}> (4인 개인 프로젝트)</span>
                                </div>
                                <div className={'projectInfo'}>
                                    <div className={'projectImgCarousel'}>
                                        <SimpleSlider imgs={anywhereMouseImg}></SimpleSlider>
                                    </div>
                                    <div className={'projectDescriptions'}>
                                        <div className={'projectDescripMain'}>
                                            포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                                            <div className={'projectReadme'}
                                                 onClick={() => {
                                                     setModalOptnForMouse(true);
                                                     blockScroll()
                                                 }}
                                            >자세히 보기 ▶ README</div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                주요 기능
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                탈부착 가능한 케이스,<br/>
                                                PC와 무선마우스 기능,<br/>
                                                트랙패드 기능,<br/>
                                                멀티 페어링,<br/>
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                GitHub
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                <a target='_blank' rel="noreferrer"
                                                   href={'https://github.com/bongyoen/anywherMouse'}>github.com/bongyoen/anywherMouse</a><br/>
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                Tech
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                AndroidStudio, Arduino, SketchUp
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'projectItem'}>
                                <div className={'projectTitle'}>개팔자 상팔자</div>
                                <div className={'projectPeriod'}>
                                    2020.01
                                    <span className={'projectChunk'}> (7인 개인 프로젝트)</span>
                                </div>
                                <div className={'projectInfo'}>
                                    <div className={'projectImgCarousel'}>
                                        <SimpleSlider imgs={goodluckdog}></SimpleSlider>
                                    </div>
                                    <div className={'projectDescriptions'}>
                                        <div className={'projectDescripMain'}>
                                            포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                                            <div className={'projectReadme'}
                                                 onClick={() => {
                                                     setModalOptnForDog(true);
                                                     blockScroll();
                                                 }}
                                            >자세히 보기 ▶ README</div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                주요 기능
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                애견샵 예약 및 관리<br/>
                                                Market Place<br/>
                                                병원 예약 및 관리<br/>
                                                카카오톡, 문자, 이메일 메시징
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                GitHub
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                <a target='_blank' rel="noreferrer"
                                                   href={'https://github.com/bongyoen/dogIsLucky'}>github.com/bongyoen/dogIsLucky</a><br/>
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                Tech
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                Html, Css, JavaScript,
                                                Spring Framework, OracleDB
                                            </div>
                                        </div>
                                        <div className={'projectDescripEa'}>
                                            <div className={'projectDescripEaLabel'}>
                                                Deployment
                                            </div>
                                            <div className={'projectDescripEaValue'}>
                                                Oracle VM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
                <article className={'Career'} id={'Career_target'} ref={goodsTabs[3].element}
                         onClick={goodsTabs[3].scrollTarget}>

                    <div className={'CareerContent'}>
                        <div className={'AboutTitle'}>

                            <div className={'titleIcon'}>
                                <img className={'Career_btn'} onClick={goodsTabs[3].onMoveToElement}
                                     src="http://beyondi.site/uploads/localdir/black-link.png" alt="1"/>
                            </div>
                            <div className={'AboutTitleTxt'}>CAREER</div>
                        </div>

                        <div className={'CareerCompanies'}>
                            <div className={'CareerCompnay'}>
                                <div className={'CareerCompnayLogo'}>
                                    <div className={'logo'}>
                                        <img src="http://beyondi.site/uploads/localdir/uicomLogo.png" alt="uicomLogo"/>
                                    </div>
                                </div>
                                <div className={'CareerCompnayInfo'}>
                                    <div className={'CmpTitle'}>(주) 유아이컴</div>
                                    <div className={'CmpPeriod'}>2021.04 - 2022.05</div>
                                    <div className={'CmpDescription'}>
                                        안경사업에서 안경원과 공급업체에 대한 SOLUSTION 제공과 B2B플렛폼을 운영하는 회사입니다.
                                        <br/><br/>
                                        <strong>Angular Framework와 SpringBoot 기반의 풀 스택 웹 기능의 전반을 작업하였습니다.</strong>
                                    </div>
                                    <ul className={'CmpWorks'}>
                                        <h4>WorkFlow</h4>
                                        <li>B2B 플랫폼 UIBOX 기간별 실시간 주문내용 페이지 및 API 개발</li>
                                        <li>휴페이스(제품) 관련 판매, 관리 테이블 설계</li>
                                        <li>공통분류코드 관련 API 리팩토링</li>
                                        <li>회원가입승인절차 기획 및 로직 제작</li>
                                        <li>Quartz스케줄링을 통한 할부제품 자동결제 프로세스 제작</li>
                                        <li>제품상세의 리뷰, 문의, 댓글 Template제작 및 관련 API 작성</li>
                                        <li>입점문의 관련 이메일 발송 기능 제작</li>
                                        <li>광고 배너, 팝업 시스템 기획의 제작</li>
                                        <li>고객센터 페이지 제작</li>
                                        <li>제품 구매시 이메일, 문자(세종텔레콤) 기능 개발</li>
                                        <li>등록회사의 설정관리 기능 개발</li>
                                        <li>B2B플랫폼 포인트 관련 테이블 수정 및 리팩토링</li>
                                        <li>렌즈(RX) 제품등록 Template 제작 및 CRUD 구현</li>
                                        <li>제품 검색 멀티샐럭터 리팩토링</li>
                                        <li>렌즈제품 옵션관련 Table 수정 및 폼 제작</li>
                                        <li>공통 이미지 저장 로직 리사이징 기능을 추가</li>
                                        <li>제품단가 설정 로직 리팩토링</li>
                                        <li>최근본상품(플로팅배너) Template작성 및 API구현</li>
                                        <li>POI를 통한 제품, 옵션 일괄등록 기능제작 및 마이그레이션</li>
                                        <li>재고 실사 프로세스 구축</li>
                                        <li>대리점 안경원의 대리주문 로직 개선</li>
                                        <li>제조사, 대리점의 출고시스템 개선</li>
                                        <li>제품 저장Template의 용액, RX, 안경테, 선글라스 기능 전반 개선</li>
                                        <li>B2B메인 제품 carousel 기능 구현</li>
                                        <li>거래처단가관리 설정기능 구현 및 제품에 반영</li>
                                        <li>공통 validation 로직 개선</li>
                                        <li>제품 관련 페이징(서버사이드) 모듈 제작</li>
                                        <li>QueryDsl로직 Mybatis Mapper로직으로 전반 변경</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Grid>
            <Modal isOpen={modalOpenForPort}
                   onRequestClose={() => {
                       setModalOptnForPort(false);
                       allowScroll();
                   }}
                   shouldCloseOnOverlayClick={false}>
                <div className={'modalHeader'}>README.md
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-x modalClose"
                         width="44"
                         height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none"
                         strokeLinecap="round" strokeLinejoin="round"
                         onClick={() => {
                             setModalOptnForPort(false);
                             allowScroll();
                         }}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="7" y1="4" x2="17" y2="20"/>
                        <line x1="17" y1="4" x2="7" y2="20"/>
                    </svg>
                </div>
                <div className={'modalBody'}>
                    <div className={'projectReadme'}>
                        <article className={'modalProjectContent'}>
                            <h1 dir={'auto'}>포토폴리오 웹사이트</h1>
                            <h2 dir={'auto'}>
                                🔗 Deployment URL
                            </h2>
                            <p dir={'auto'}>
                                <a target='_blank' href={'http://beyondi.site/'}
                                   rel="noreferrer">http://beyondi.site/</a>
                            </p>
                            <h2 dir={'auto'}>
                                📌 Summary
                            </h2>
                            <p dir={'auto'}>
                                <strong>
                                    포트폴리오 용도로 제작한 웹사이트입니다.<br/><br/>
                                </strong>
                                지금 보고 있는 바로 이 웹사이트에 해당합니다.<br/>
                                이미 순수 React로 개발한 사이트이며, Angular 위주의 개발을 진행하다 새로운 프런트 앤드의 궁금증으로 제작하게
                                되었습니다.<br/>
                                그 과정에서 익숙한 mvc에서 flux의 새로움을 배울 수 있었습니다.<br/>
                                또한, AWS EC2, RDS와 Jenkins, Docker를 이용한 배포도 경험해 볼 수 있었습니다.<br/>
                            </p>
                            <h4 dir="auto">
                                * 주요 기능
                            </h4>
                            <ul>

                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    간단한 자기소개
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    인적 사항
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    기술 스택
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    프로젝트 경험
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    업무 경력
                                </li>
                            </ul>

                            <h2 dir={'auto'}>
                                🤔 Background
                            </h2>
                            <p dir={'auto'}>
                                1년 가량 Angular로 웹사이트 개발을 진행하다가 종종 SPA라면 거론되는 Vue, Angular, React에 대한 호기심이 생겼습니다.
                                그 중 한국에서 가장 인기 있는 React에 관심이 쏠렸고, 학습해 보기 위해 이 프로젝트를 진행하게 되었습니다.
                                <br/><br/>
                            </p>

                            <h2 dir={'auto'}>
                                🔍 Meaning
                            </h2>
                            <p dir={'auto'}>
                                React 기술 스택을 배우면서, 앵귤러와 다른 디자인패턴과 순수 스크립트로 구성된 component, Virtural Dom, 단방향 Databinding과
                                hook 등
                                React의 다양한 방식들을 배울 수 있었습니다.
                                <br/><br/>
                                React에는 앵귤러에서와 같은 도구들이 없지만 대신에 유연성을 크다고 느꼈습니다.
                                필요한 어떠한 라이브러리라도 리액트에 맞춰 넣을 수 있고 커뮤니티 또한 가장 활성화 되었기 때문에 그렇습니다.

                            </p>

                            <h2 dir={'auto'}>
                                🔨 Technology Stack
                            </h2>
                            <p dir={'auto'}>
                                <li>
                                    Frontend: React, TypeScript, Sass
                                </li>
                                <li>
                                    Backend: SpringBoot, Mybatis, WSA RDS(mariaDB)
                                </li>
                                <li>
                                    Deployment: AWS EC2, Docker, Jenkins
                                </li>
                            </p>
                        </article>
                    </div>
                </div>
            </Modal>
            <Modal isOpen={modalOpenForMouse}
                   onRequestClose={() => {
                       setModalOptnForMouse(false);
                       allowScroll();
                   }}
                   shouldCloseOnOverlayClick={false}>
                <div className={'modalHeader'}>README.md
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-x modalClose"
                         width="44"
                         height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none"
                         strokeLinecap="round" strokeLinejoin="round"
                         onClick={() => {
                             setModalOptnForMouse(false);
                             allowScroll();
                         }}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="7" y1="4" x2="17" y2="20"/>
                        <line x1="17" y1="4" x2="7" y2="20"/>
                    </svg>
                </div>
                <div className={'modalBody'}>
                    <div className={'projectReadme'}>
                        <article className={'modalProjectContent'}>
                            <h1 dir={'auto'}>Anywhere Mouse</h1>
                            <h2 dir={'auto'}>
                                📌 Summary
                            </h2>
                            <p dir={'auto'}>
                                <strong>
                                    스마트폰 케이스에 무선마우스를 장착하고, 애플리켜이션으로 제어하는 프로젝트입니다.<br/><br/>
                                </strong>
                                대학 4인 프로젝트로 개발을 담당하였으며 개발의 90% 부분을 담당하였습니다.<br/>
                                외부에서 노트북 활용 시 <strong>마우스의 부재로 생기는 불편한 니즈</strong>에 대한 아이디어에서 시작되었습니다.<br/>
                            </p>
                            <h2 className={"pdfView"}>
                                <a target={'_blank'} rel="noreferrer"
                                   href={'http://beyondi.site/uploads/localdir/폰케이스형_블루투스_마우스_특허출원.pdf'}>
                                    특허출원.pdf
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-hand-click "
                                         width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0066cc"
                                         fill="none"
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
                                </a>

                            </h2>
                            <h2 className={"pdfView"}>
                                <a target={'_blank'} href={'http://beyondi.site/uploads/localdir/무선 마우스 케이스.pdf'}
                                   rel="noreferrer">
                                    anywherMouse보고서.pdf
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-hand-click "
                                         width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0066cc"
                                         fill="none"
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
                                </a>

                            </h2>
                            <h4 dir="auto">
                                * 주요 기능
                            </h4>
                            <ul>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    탈부착 가능한 케이스
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    블루투스 연결을 통한 PC와 무선마우스 기능
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    애플리케이션 고유의 트랙패드 기능
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    멀티 페어링을 통한 다양한 기기 지원
                                </li>
                            </ul>

                            <h2 dir={'auto'}>
                                🤔 Background
                            </h2>
                            <p dir={'auto'}>
                                무겁고 이동성이 부족한 데스크톱보다 어디든 휴대하면서 인터넷을 즐길 수 있는 노트북에 대한 수요가 증가하면서 이에 따른 불편한 점들이 생겨나고 있다. 그중
                                노트북을 사용하면 필요한 주변기기들이 존재하고 이를 잊어버리거나 생략하게 되면 몇 가지 불편한 상황들을 만나게 되는데 특히 마우스의 경우 크기가 작아 쉽게
                                잃어버리거나 잊혀질수있다 노트북에서 마우스가 없는 상황에서 작은 트랙패드의 사용은 상대적으로 제약과 불편을 가져올 수 있고. 이런 불편한 니즈를 캐치하여
                                마우스를 언제든 휴대할 수 있게끔, 폰케이스에 블루투스 마우스의 기능을 접목하여 ' 폰케이스형 블루투스 마우스 ' 를 개발하고자한다.
                            </p>

                            <h2 dir={'auto'}>
                                🔍 Meaning
                            </h2>

                            <p dir={'auto'}>
                                해당 프로젝트를 진행하면서 블루투스 연결에 필요한 descriptor 생성과 서비스, 브로드캐스터 등 안드로이드의 다양한 개발로직을 작성해볼 수
                                있엇습니다.<br/>
                                또한 블루투스 통신을 통한 마우스좌표값 전송에서 충분한 폴링레이트 확보하지 못하는 문제가 있었는데<br/>
                                이런 어려움을 통한 보간작업을 해 보는 등 라이스사이클에 맞춰 애플리케이션에 제작해 오류를 줄이는 등의<br/>
                                다양한 양식의 코딩을 진행 볼 수 있었고, 독창성과 기술력으로 학과에서 표창과 더불어 특허출원까지 진행할 수 있어<br/>
                                매우 뜻깊은 프로젝트 였으며, 안드로이드 플랫폼에서 다양한 기능을 진행할 수 있다는 것을 다시 한 번 깨달을 수 있었습니다.
                            </p>

                            <h2 dir={'auto'}>
                                🔨 Technology Stack
                            </h2>
                            <p dir={'auto'}>
                                <li>
                                    AndroudStudio, Arduino, SketchUp
                                </li>
                            </p>
                        </article>
                    </div>
                </div>
            </Modal>

            <Modal isOpen={modalOpenForDog}
                   onRequestClose={() => {
                       setModalOptnForDog(false);
                       allowScroll();
                   }}
                   shouldCloseOnOverlayClick={false}>
                <div className={'modalHeader'}>README.md
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-x modalClose"
                         width="44"
                         height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none"
                         strokeLinecap="round" strokeLinejoin="round"
                         onClick={() => {
                             setModalOptnForDog(false);
                             allowScroll();
                         }}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="7" y1="4" x2="17" y2="20"/>
                        <line x1="17" y1="4" x2="7" y2="20"/>
                    </svg>
                </div>
                <div className={'modalBody'}>
                    <div className={'projectReadme'}>
                        <article className={'modalProjectContent'}>
                            <h1 dir={'auto'}>개팔자 상팔자</h1>
                            <h2 dir={'auto'}>
                                📌 Summary
                            </h2>
                            <p dir={'auto'}>
                                KH 정보교육원에 입학하여 진행한 final Project로써,
                                반려 동물에 대한 관심이 많아졌으며, 이를 보고
                                다양한 기능을 제공하는 반려동물 사이트를 만들기로 결정하고 제작한 사이트입니다.

                            </p>
                            <h4 dir="auto">
                                * 주요 기능
                            </h4>
                            <ul>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    애견샵 예약 및 관리
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    Market Place
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    병원 예약 및 관리
                                </li>
                                <li>
                                    <input type="checkbox" id="" disabled={true}
                                           checked={true}
                                           className="task-list-item-checkbox"/>
                                    카카오톡, 문자, 이메일 메시징
                                </li>
                            </ul>

                            <h2 dir={'auto'}>
                                🤔 Background
                            </h2>
                            <p dir={'auto'}>
                                반려 동물에 다양한 서비스가 시장에서 제공되어짐에 따라 의료, 미용, E-COMMERCIAL 서비스를 종합적으로 제공할 수 있는 웹사이트를 제공함과 동시에,
                                학원에서 교육받았던 내용을 토대로 웹사이트를 개발하는 프로젝트입니다.
                                <br/><br/>
                            </p>

                            <h2 dir={'auto'}>
                                🔍 Meaning
                            </h2>

                            <p dir={'auto'}>
                                학습한 DATABASE, SERVER, WEBFRONT내용과 코딩기법들을 활용해 볼 수 있었고, 팀워크를 구성하고 각자의 파트에 맞게 일하는 법과
                                다양한 라이브러리 사용과 공공데이터 API를 사용해볼 수 있었습니다.
                                이를 통해 처음으로 ORACLE VM을 통한 서버배포와 리눅스OS에서의 shell명령어, frontEnd와 BackEnd, MVC모델에 관한 폭 넓은 이해를
                                피부에 와닿게 경험할 수 있었습니다.
                            </p>

                            <h2 dir={'auto'}>
                                🔨 Technology Stack
                            </h2>
                            <p dir={'auto'}>
                                <li>
                                    AndroudStudio, Arduino, SketchUp
                                </li>
                            </p>
                        </article>
                    </div>
                </div>
            </Modal>
        </MainCard>
    )
}


export default PortfolioComponent;