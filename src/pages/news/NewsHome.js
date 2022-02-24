import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Card, Col, Row, Modal, message } from 'antd';
import NewsDataService from "../../services/news.service";
import '../../css/News.css'
import News from './News';
const NewsHome = () => {
  const { Title, Text } = Typography;
  const history = useHistory();
  const truncateNewsContent = (str, length, end) => {
    if (length == null) {
      length = 10;
    }
    if (end == null) {
      end = " ..."
    }
    if (str.length > length) {
      // console.log(typeof (str))
      return str.substr(0, 100) + end
    } else {
      return str;
    }
  }
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(-1);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getNews();
  }, [])
  const getNews = () => {
    NewsDataService.getAll()
      .then(response => {
        setNews(response.data);
        console.log(response.data)
      })
      .catch(e => {
        message.info(e);
      })
  }
  const handleReadNewsStatus = (news, index) => {
    setSelectedNewsIndex(index);
    setSelectedNews(news);
    setShow(true);
    let id = news.id;
    history.push(`/news/${id}`)
  }
  const handleView = (e) => {
    let id = parseInt(e.target.value);
    // alert(e.target.value)
    console.log(typeof(e.target.value))
    console.log(e.target.value)
    console.log(id)
  }
  const handleClose = () => {
    setShow(false);
  }
  const newsCards = news.map((newsContent, index) => {
    return (
      <Col
        className="news-new"
        xs={24} sm={12} md={8}
        style={{ marginBottom: "20px" }}
      >
        <Card className="news-card"
          cover={<img src={newsContent.image} />}
        >
          <div className="text-wrapper">
            <Title level={4}>{newsContent.title}</Title>
            <Text type="secondary">{newsContent.date}</Text>
          </div>
          <p>
            {
              truncateNewsContent(newsContent.text, 50)
            }
          </p>
          <Button
            onClick={() => handleReadNewsStatus(newsContent, index)}
            // onClick={handleView}
            type="ghost"
            // value={parseInt(newsContent.id)}
            // value={index}
          >Baca Lebih</Button>
        </Card>
      </Col>
    )
  })

  return (
    <div className="page-wrapper section-news">
      <div className="text-wrapper">
        <Title level={2}>News</Title>
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {newsCards}
        {
          selectedNews ? (
            <Modal
              title={selectedNews.title}
              visible={show}
              onOk={handleClose}
              onCancel={handleClose}
            >
              <img src={selectedNews.image} style={{ maxWidth: "100%" }} />
              <h3>{selectedNews.date}</h3>
              <br />
              <p>
                {selectedNews.id}
              </p>
            </Modal>
          ) : (
            <>
            </>
          )
        }
      </Row>
    </div >
  )
}

export default NewsHome;