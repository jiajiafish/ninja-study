import React, { Component } from 'react';
import { graphql ,compose} from 'react-apollo';
import { getAuthorQuery,addBookMutation, getBooksQuery } from '../queries/queries';
class AddBook extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            genre:"",
            authorId:""
        }
    }
    submitForm(e){
        e.preventDefault();
        this.props.addBookMutation(
            {
                variables:{
                    name:this.state.name,
                    genre:this.state.genre,
                    authorId:this.state.authorId,
                },
                refetchQueries:[{query:getBooksQuery}]
            }
        )
    }
    displayAuthors() {
        var data = this.props.getAuthorQuery
        console.log(this.props)
        if (data.loading) {
            return (<option disabled>Loading Authors</option>)
        } else {
            return data.authors.map(
                author => {
                    return (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    )
                }
            )
        }
    }
    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>

                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={e=>this.setState({name:e.target.value})}/>
                </div>

                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={e=>this.setState({genre:e.target.value})}/>
                </div>

                <div className="field">
                    <label>Author:</label>
                    <select onChange={e=>this.setState({authorId:e.target.value})}>
                        {this.displayAuthors()}
                    </select>
                </div>

                <button>+</button>

            </form>
        );
    }
}

// export default graphql(getAuthorQuery)(addBookMutation)(AddBook);
export default compose(
    graphql(getAuthorQuery,{name:"getAuthorQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);
