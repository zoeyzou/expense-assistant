import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { ExpenseContext } from '../../../Contexts/ExpenseContext';


import styles from './Expense.css';
import Layout from '../../Layout/Layout';
import ExpenseFooter from './ExpenseFooter/ExpenseFooter';
import FileUploader from './FileUploader/FileUploader';
import Title from '../Shared/Title/Title';
import ExpenseTable from './ExpenseTable/ExpenseTable';

class Expense extends Component {
  
  componentDidMount() {
    const { id } = this.props;

    axios.get(`http://localhost:3000/expenses/${id}`)
      .then((res) => {
        this.setState({expense: res.data, isLoading: false, comment: res.data.comment});
      });
  }

  state = {
    isLoading: true,
    expense: {},
    comment: '',
    newComment: ''
  };

  changeCommentHandler = (newComment) => {
    this.setState({
      newComment: newComment
    });
  }

  saveCommentHandler = () => {
    const { id } = this.props;
    axios.post(`http://localhost:3000/expenses/${id}`, {comment: this.state.newComment})
      .then((res) => {
        console.log(res);
        this.setState({expense: res.data, comment: res.data.comment})
      })
  }
  
  goBackHandler = () => {
    this.props.history.goBack();
  }

  render() {
    const {
      expense,
      isLoading,
      comment,
      newComment
    } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <ExpenseContext.Provider value={
        {
          expense: expense,
          comment: comment,
          newComment: newComment || comment,
          changeComment: (newComment) => this.changeCommentHandler(newComment),
          saveComment: () => this.saveCommentHandler(),
          goBack: () => this.goBackHandler()
        }
      }>
        <Layout
          header={<Title title="EXPENSE DETAILS" />}
          footer={<ExpenseFooter />}
        >
          <ExpenseTable />
        </Layout>
      </ExpenseContext.Provider>
      
    )
  };
};

export default withRouter(Expense);
