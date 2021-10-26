import React from 'react';
import './Main.scss';

class MainYs extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: '',
      replies: [],
    };
  }

  textChange = e => {
    this.setState({
      newReply: e.target.value,
    });
  };

  add = e => {
    let arr = this.state.replies;
    arr.push({ text: this.state.newReply });

    this.setState({
      replies: arr,
      newReply: '',
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter' && this.state.newReply) {
      this.add();
      e.target.value = '';
    }
  };

  render() {
    return (
      <div className="wrap">
        <nav>
          <div className="leftNav">
            <a className="logo" href="google.com">
              <img src="/images/yusin/instagramblack.png" alt="black" />
            </a>
            <a href="google.com">
              <img src="/images/yusin/Westagram.png" alt="westagram" />
            </a>
          </div>
          <div>
            <input className="search" type="text" placeholder="검색" />
          </div>
          <div className="rightNav">
            <a href="google.com">
              <img src="/images/yusin/explore.png" alt="explore" />
            </a>
            <a href="google.com">
              <img src="/images/yusin/heart.png" alt="like" />
            </a>
            <a href="google.com">
              <img src="/images/yusin/profile.png" alt="profile" />
            </a>
          </div>
        </nav>
        <main>
          <div className="feeds">
            <article>
              <header>
                <div className="writer">
                  <img
                    className="userImg"
                    src="/images/yusin/IMG_5391.JPG"
                    alt="Yusin"
                  />
                  <span>LuluZoe</span>
                </div>
                <div>
                  <img
                    className="moreImg"
                    src="/images/yusin/more.png"
                    alt="more"
                  />
                </div>
              </header>
              <img
                className="hanoi"
                src="/images/yusin/IMG_1164.JPG"
                alt="hanoi"
              />
              <div className="likeMark">
                <div className="likeShare">
                  <img src="/images/yusin/redheart.png" alt="like" />
                  <img src="/images/yusin/chat.png" alt="chat" />
                  <img src="/images/yusin/upload.png" alt="share" />
                </div>
                <div>
                  <img src="/images/yusin/bookmark.png" alt="bookmark" />
                </div>
              </div>
              <div className="Zoe">
                <img src="/images/yusin/Zoe.png" alt="Zoe" />
                <b>Zoe</b>님&nbsp;<b>외 17명</b>이 좋아합니다
              </div>
              <div>
                <ul id="commentLists">
                  <li>
                    <b>ori_0220</b>&nbsp;MOA 여기 어디고
                  </li>
                  <li>
                    <b>salvame21</b>&nbsp;까불고있네 ㅋㅋ 코딩이나해라
                  </li>
                  {this.state.replies.map(el => {
                    return (
                      <li>
                        <b>{USER_NAME}</b>
                        {el.text}
                      </li>
                    );
                  })}
                  <div className="time">1시간 전</div>
                </ul>
              </div>
              <div className="comment">
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={this.textChange}
                  onKeyPress={this.pressEnter}
                  value={this.state.newReply}
                />
                <button onClick={this.add} id="submit" type="submit">
                  게시
                </button>
              </div>
            </article>
          </div>
        </main>
      </div>
    );
  }
}

export default MainYs;

const USER_NAME = 'fighting ';
