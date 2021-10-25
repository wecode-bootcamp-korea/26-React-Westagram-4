import React from 'react';
import './Main.scss';
// import '../../Styles/common.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="headerLogo">
            <img alt="logo" className="logoImg" src="/images/instagram.png" />
            <div className="logoName">instagram</div>
          </div>
          <div className="textForm">
            <input className="text" type="text" placeholder="검색" />
            <img
              alt="zoomlens"
              className="lensImg"
              src="/images/zoom-lens.png"
            />
          </div>
          <nav>
            <img alt="explore" className="explore" src="/images/explore.png" />
            <img alt="like" className="heart" src="/images/heart.png" />
            <img alt="profile" className="profile" src="/images/profile.png" />
          </nav>
        </header>

        <main className="main_container">
          <div className="main_feeds">
            <section className="picture_container">
              <img
                className="profile_picture"
                alt="profile_picture"
                src="/images/mainprofile.jpg"
              />
              <div className="westa_id">
                tosil_conton
                <span id="westa_address">부개동 우리집</span>
              </div>
            </section>
            <div className="main_image">
              <img
                alt="myfeeds"
                className="feeds_img"
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150523_288%2Frlaauddhr92_1432308714967oqUXs_JPEG%2Ftumblr_noq43mcOXe1urgqndo1_1280.jpg&type=sc960_832"
              />
            </div>
            <div className="main_icons">
              <div className="icons_left">
                <img
                  alt="likeheart"
                  className="main_icon"
                  src="/images/heart2.png"
                />
                <img
                  alt="comment"
                  className="main_icon"
                  src="/images/chat.png"
                />
                <img
                  alt="dm"
                  className="main_icon"
                  src="/images/direct-instagram.png"
                />
              </div>
              <div className="icons_right">
                <img
                  alt="bookmark"
                  className="bookMark"
                  src="/images/bookmark.png"
                />
              </div>
            </div>
            <div className="main_comment">
              <div className="likes_container">
                <img
                  alt="othersprofile"
                  className="likes_profile"
                  src="/images/orange.jpeg"
                />
                <span className="likes_people">
                  <b>shurc.onu</b>님 외 <b>5명</b>이 좋아합니다
                </span>
              </div>

              <div className="post_container">
                <b>tosil_coton</b> 톰하디 사랑해
                <div className="post_time">56분전</div>
                <ul id="commentLists" />
              </div>
              <div className="comment_container">
                <input
                  type="text"
                  id="comment_input"
                  placeholder="댓글 달기..."
                />
                <button type="submit" id="comment_submit" disabled>
                  게시
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
