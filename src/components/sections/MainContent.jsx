import React from "react";
import "../../styles/MainContent.css";

const novels = [
  {
    id: 1,
    title: "Tensei Shitara Slime Datta Ken",
    cover: "/covers/slime.jpg"
  },
  {
    id: 2,
    title: "Re:Zero kara Hajimeru Isekai Seikatsu",
    cover: "/covers/rezero.jpg"
  },
  {
    id: 3,
    title: "Sword Art Online",
    cover: "/covers/sao.jpg"
  }
];

const MainContent = () => (
  <main className="main-content">
    <h2>Danh sách Light Novel nổi bật</h2>
    <div className="novel-list">
      {novels.map(novel => (
        <div className="novel-item" key={novel.id}>
          <img src={novel.cover} alt={novel.title} className="novel-cover" />
          <div className="novel-title">{novel.title}</div>
        </div>
      ))}
    </div>
  </main>
);

export default MainContent;
