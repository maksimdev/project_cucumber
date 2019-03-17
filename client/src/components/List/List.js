import React, { useState } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { push } from 'connected-react-router'

const mapStateToProps = state => ({
  articles: state.articles.articles
});

function ConnectedList (props) {
  console.log(props);
  const [article, setArticle] = useState({title: ''});

  const handleChange = (event) => {
    setArticle({title: event.target.value});
  };

  return (
    <>
      <p>List</p>
      <ul>
        {
          props.articles.map(article => (
            <li key={article.id}>
              {article.title}
            </li>
          ))
        }
      </ul>
      <Input
          onChange={handleChange}
          placeholder="Placeholder"
          value={article.title}
        />
      <Button variant="contained" color="primary" onClick={() => console.log('ok!')}>
        Create article
      </Button>
    </>
  )
};

const List = connect(mapStateToProps, { push })(ConnectedList);

export default List;