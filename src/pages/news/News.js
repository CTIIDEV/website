import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, message, Typography } from 'antd';
import NewsDataService from "../../services/news.service";

const News = () => {
  const { id } = useParams();
  const { Title } = Typography;
  const [news, setNews] = useState({
    title: "",
    image: "",
    date: "",
    text: ""
  })
  useEffect(() => {
    getNewsById();
    console.log(news.title)
  }, [])
  const getNewsById = () => {
    NewsDataService.get(id)
      .then(response => {
        setNews({
          title: response.data.title,
          image: response.data.image,
          date: response.data.date,
          text: response.data.text
        }
        );
        // console.log(response.data)
      })
      .catch(e => {
        message.info(e);
      })
  }
  return (
    <div className="page-wrapper section-current-news">
      <div className="text-wrapper">
        <Title level={2}>{news.title}</Title>
        <Title level={4}>{news.date}</Title>
      </div>
      <div
        className="img-wrapper"
        style={{ background: "#FFF", marginBottom: "3rem", textAlign: "center" }}
      >
        <img src={news.image} style={{maxWidth: "100%"}}/>
      </div>
      <p style={{textAlign: "justify"}}>{news.text}</p>
    </div>
  )
}

export default News;