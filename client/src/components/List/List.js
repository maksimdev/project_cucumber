import React, { useState } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { addArticle } from '../../redux/actions/articleActions'; 

const mapStateToProps = state => ({
  articles: state.articles.articles
});

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
});

function ConnectedList (props) {
  const [article, setArticle] = useState({title: ''});

  const handleChange = (event) => {
    setArticle({title: event.target.value});
  };

  const createArticle = () => {
    props.addArticle(article);
    setArticle({title: ''});
  }

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
      <Button variant="contained" color="primary" onClick={createArticle}>
        Create article
      </Button>
    </>
  )
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;