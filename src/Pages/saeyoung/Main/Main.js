import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fainstagram } from "@fortawesome/free-solid-svg-icons";
// ReactDom.render(element, document.body)
// import ReactDOM from "react-dom";
// import "./Login.css";
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="logo">
            <div className="logo_icon">
              <i className="fab fa-instagram" />
            </div>
            <div className="logo_name">westagram</div>
          </div>
          <div className="serchbar">
            <input type="text" name="검색" placeholder="검색" />
            <i className="fas fa-search" />
          </div>
          <div className="icon">
            <div className="icon_nav">
              <i className="far fa-compass" />
            </div>
            <div className="icon_heart">
              <i className="far fa-heart" />
            </div>
            <div className="icon_mypage">
              <i className="far fa-user" />
            </div>
            <div className="new">
              <div className="new_mark" />
            </div>
          </div>
        </div>

        <div className="main">
          <div className="feeds">
            <div className="main_user">
              <img src="/images/saeyoung/user1.png" alt="메인유저사진" />
              <div className="user_name">yes_cres</div>
              <div className="user_set">
                <i className="fas fa-ellipsis-h" />
              </div>
            </div>
            <div className="article">
              <div className="art_photo">
                <img
                  src="/images/saeyoung/mainphoto.JPG"
                  alt="뛰는 사진"
                  width="700px"
                  height="700px"
                />
              </div>
              <li className="comments_icon">
                <ul className="comments_heart">
                  <i className="fas fa-heart" />
                </ul>
                <ul className="comments_message">
                  <i className="far fa-comment" />
                </ul>
                <ul className="commemts_share">
                  <i className="far fa-share-square" />
                </ul>
                <ul className="comments_mark">
                  <i className="far fa-bookmark" />
                </ul>
              </li>

              <div className="reaction">
                <div className="liked-people">
                  <img
                    className="pic"
                    src="/images/saeyoung/people4.png"
                    alt="GGang GGang님의 프로필 사진"
                  />
                  <p>
                    <span className="point-span">GGang GGang</span>님{' '}
                    <span className="point-span">외 10,435명</span>이 좋아합니다
                  </p>
                </div>
                <div className="description">
                  <p>
                    <span className="point-span userID">Sae_0</span> 화장실은
                    식당에서 나오기 전에 제발 가라고...
                  </p>
                </div>
                <div className="comment-section">
                  <ul id="commentsBox" className="comments">
                    <li>
                      <span>
                        <span className="point-span userID">
                          LoveMoreMoreKim
                        </span>{' '}
                        ㅋㅋㅋ 얘네는 대체 뭐하고 노는거야?
                      </span>
                      <img
                        className="comment-heart"
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                        alt="하트"
                      />
                    </li>
                  </ul>
                  <div className="time-log">
                    <span>1시간 전</span>
                  </div>
                </div>
              </div>

              <div id="hl" className="hl" />
              <div className="comment">
                <input
                  id="commentInput"
                  className="input-comment"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button type="submit" className="submit-comment">
                  게시
                </button>
              </div>
            </div>
          </div>

          <div className="main-right">
            <div className="right_header">
              <div className="my_info">
                <div className="my_image">
                  <img src="/images/saeyoung/user1.png" alt="" />
                </div>
                <div className="my_text">
                  <div className="my_name">yes_cres</div>
                  <div className="my_intro">현금이 다발이랑 함께 해요!</div>
                </div>
              </div>
            </div>

            <div className="story_info">
              <div className="story_header">
                <div className="story_text">스토리</div>
                <div className="story_set">모두 보기</div>
              </div>

              <div className="story_list">
                <li className="user1">
                  <img src="/images/saeyoung/people4.png" alt="양세찬" />
                  <div className="user1_text">
                    <div className="user1_name">GGang GGang</div>
                    <div className="user1_intro">1분전</div>
                  </div>
                </li>
                <li className="user2">
                  <img src="/images/saeyoung/people3.png" alt="조정석" />
                  <div className="user2_text">
                    <div className="user2_name">Doctor_ jeo</div>
                    <div className="user2_intro">5분전</div>
                  </div>
                </li>
                <li className="user3">
                  <img src="/images/saeyoung/people2.png" alt="김선호" />
                  <div className="user3_text">
                    <div className="user3_name">cha_nam</div>
                    <div className="user3_intro">3시간전</div>
                  </div>
                </li>
                <li className="user4">
                  <img src="/images/saeyoung/people1.png" alt="아이유" />
                  <div className="user4_text">
                    <div className="user4_name">EU_2U</div>
                    <div className="user4_intro">2일전</div>
                  </div>
                </li>
              </div>
            </div>

            <div className="recom_info">
              <div className="recom_header">
                <div className="recom_text">회원님을 위한 추천</div>
                <div className="recom_set">모두 보기</div>
              </div>
              <div className="recom_list">
                <li className="user5">
                  <img src="/images/saeyoung/people5.png" alt="피카츄" />
                  <div className="user5_text">
                    <div className="user5_name">ggap_Chu</div>
                    <div className="user5_intro">회원님을 팔로합니다.</div>
                  </div>
                  <div className="user5_flow">팔로우</div>
                </li>
                <li className="user6">
                  <img src="/images/saeyoung/people6.png" alt="뽀로로" />
                  <div className="user6_text">
                    <div className="user6_name">p_roro5</div>
                    <div className="user6_intro">회원님을 팔로합니다.</div>
                  </div>
                  <div className="user6_flow">팔로우</div>
                </li>
                <li className="user7">
                  <img src="/images/saeyoung/people7.png" alt="루피" />
                  <div className="user7_text">
                    <div className="user7_name">devil_P</div>
                    <div className="user7_intro">회원님을 팔로합니다.</div>
                  </div>
                  <div className="user7_flow">팔로우</div>
                </li>
              </div>
              <div className="insta_info">
                Instagram 정보 · 지원 · 홍보 센터 · API ·<br />
                채용 정보 · 개인정보처리방침 · 약관 · <br />
                디렉터리 · 프로필 · 해시태그 · 언어
                <br />
                Ⓒ 2019 INSTAGRAM
                <br />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
