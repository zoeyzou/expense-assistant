import React, { Component } from 'react';
import { Request } from '../../../AxiosRequest';
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

    Request({
      method: 'get',
      url: `/expenses/${id}`
    }).then((expense) => {
      this.setState({expense: expense, isLoading: false, comment: expense.comment});
    })
  }

  state = {
    isLoading: true,
    expense: {},
    comment: '',
    newComment: '',
    files: [],
    addedFiles: []
  };

  changeCommentHandler = (newComment) => {
    this.setState({
      newComment: newComment
    });
  }

  saveCommentHandler = () => {
    const { id } = this.props;
    Request({
      method: 'post',
      url: `/expenses/${id}`,
      data: {comment: this.state.newComment}
    }).then((expense) => {
      this.setState({expense: expense, comment: expense.comment});
    })
  }

  saveExpenseHandler = () => {
    const { id } = this.props;
    if (this.state.newComment) {
      Request({
        method: 'post',
        url: `/expenses/${id}`,
        data: {comment: this.state.newComment}
      }).then((expense) => {
        this.setState({expense: expense, comment: expense.comment});
      })
    }
    if (this.state.addedFiles.length) {
      console.log(this.state.addedFiles);
      Request({
        method: 'post',
        url: `/expenses/${id}/receipts`,
        data: {files: {receipt: this.state.addedFiles[0]}}
      }).then((expense) => {
        this.setState({expense: expense, files: expense.receipts});
      })
    }
  }
  
  goBackHandler = () => {
    this.props.history.goBack();
  }

  fileDropHandler = (files) => {
    console.log(files[0]);
    this.setState({
      addedFiles: this.state.addedFiles.concat(files),
     });
  }

  render() {
    const {
      expense,
      isLoading,
      comment,
      newComment,
      files,
      addedFiles
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
          files: files,
          addedFiles: addedFiles || files,
          changeComment: (newComment) => this.changeCommentHandler(newComment),
          saveComment: () => this.saveExpenseHandler(),
          goBack: () => this.goBackHandler(),
          onFileDrop: (files) => this.fileDropHandler(files)
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
