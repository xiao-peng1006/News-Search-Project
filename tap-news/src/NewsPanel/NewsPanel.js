import './NewsPanel.css';

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      news: null
    }
  }

  componentDidMount() {
    this.loadMoreNews();
  }

  loadMoreNews() {
    this.setState({
      news:
        [{

        },
        {

        }]
    });
  }

  renderNews() {
    const news_list = this.state.news.map(one_news => {
      return (
        <a className='list-group-item' href='#'>
          <NewsCard news={this.state.news}/>
        </a>
      );
    });

    return (
      <div className='container-fluid'>
        <div className='list-group'>
          {news_list}
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.news) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          {this.renderNews()}
        </div>
      );
    }
  }
}

export default NewsPanel;
