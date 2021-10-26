import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <nav>
          <span className="instagram">
            <span id="insta2">
              <i className="fab fa-instagram fa-3x" />
            </span>
            <span id="insta">Instagram</span>
          </span>

          <span>
            <input type="text" placeholder="&#xF002; 검색" />
          </span>

          <span id="my_page">
            <img
              alt="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="profile"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </span>
        </nav>

        <div className="dotdot">
          <div align="right" className="dot">
            <i className="fas fa-circle" />
          </div>
        </div>

        <section>
          <div className="box1">
            <div className="box1_up">
              <i className="far fa-user-circle fa-2x" />
              lim337slaa
              <i className="far fa-ellipsis-h" />
            </div>
            <div className="picture">
              <img alt="heedong" src="images/kibum/hee.jpg" />
            </div>

            <div className="box1_under">
              <i className="fas fa-heart" />
              <span>
                <i className="far fa-comment" />
              </span>
              <i className="far fa-chevron-square-up" />
              <i className="far fa-rectangle-portrait" />
              <div>
                <i className="far fa-user-circle fa-lg" /> aineworld님 외 10명이
                좋아합니다
              </div>

              <ul id="commentLists" />
            </div>
            <div className="box1_under1">
              <input id="input2" type="text" placeholder="댓글달기..." />
              <button id="button">게시</button>
            </div>
          </div>

          <div className="box2">
            <div className="box_right1">
              <i className="far fa-user-circle fa-2x" />
              <div className="box_right_container">
                <div className="box_right_text">wecode_bootcamp</div>
                <div className="box_right_text2">WeCode | 위코드</div>
              </div>
            </div>

            <div className="box_right2">
              <div className="box_right2_text">
                <span>스토리</span>
                <span className="story">모두 보기</span>
              </div>
              <div className="recommend-profile-username">
                <div className="temp_box">
                  <i className="far fa-user-circle fa-lg" />
                  <div className="box_right_container2">
                    <div className="box_right_text1">joaaaaaahye</div>
                    <div className="box_right_text2">
                      _legend_a님 외 2명이 ...
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommend-profile-username">
                <div className="temp_box">
                  <i className="far fa-user-circle fa-lg" />
                  <div className="box_right_container2">
                    <div className="box_right_text1">joaaaaaahye</div>
                    <div className="box_right_text2">
                      _legend_a님 외 2명이 ...
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommend-profile-username">
                <div className="temp_box">
                  <i className="far fa-user-circle fa-lg" />
                  <div className="box_right_container2">
                    <div className="box_right_text1">joaaaaaahye</div>
                    <div className="box_right_text2">
                      _legend_a님 외 2명이 ...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box_right3">
              <div className="box_right2_text">
                <span>회원님을 위한 추천</span>
                <span className="story">모두 보기</span>
              </div>
              <div className="follow">
                <div className="recommend-profile-username">
                  <div className="temp_box">
                    <i className="far fa-user-circle fa-lg" />
                    <div className="box_right_container2">
                      <div className="box_right_text1">joaaaaaahye</div>
                      <div className="box_right_text2">
                        _legend_a님 외 2명이 ...
                      </div>
                    </div>
                  </div>
                  <span className="follow_blue">팔로우</span>
                </div>
                <div className="recommend-profile-username">
                  <div className="temp_box">
                    <i className="far fa-user-circle fa-lg" />
                    <div className="box_right_container2">
                      <div className="box_right_text1">joaaaaaahye</div>
                      <div className="box_right_text2">
                        _legend_a님 외 2명이 ...
                      </div>
                    </div>
                  </div>
                  <span className="follow_blue">팔로우</span>
                </div>
                <div className="recommend-profile-username">
                  <div className="temp_box">
                    <i className="far fa-user-circle fa-lg" />
                    <div className="box_right_container2">
                      <div className="box_right_text1">joaaaaaahye</div>
                      <div className="box_right_text2">
                        _legend_a님 외 2명이 ...
                      </div>
                    </div>
                  </div>
                  <span className="follow_blue">팔로우</span>
                </div>
              </div>
            </div>
            <div className="box_right4">
              <div>Instagram 정보·지원·홍보 센터·API· </div>
              <div>채용 정보·개인정보처리방침·약관·</div>
              <div>디렉터리·프로필·해시태그·언어</div>
              <div className="box_right4_2019">ⓒ 2019 INSTAGRAM</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Main;
