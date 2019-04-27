var React = require('react')
require("./css/addItem.css")


var AddItem = React.createClass({
    render:function () {
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
            <input type="text" required ref="newItem"/>
            <input type="submit" value="hit me"/>
            </form>
        )
    },
    handleSubmit:function (e) {
        e.preventDefault();
        
        console.log(this.refs.newItem.value)
        this.props.onAdd(this.refs.newItem.value)
    }
})

module.exports=AddItem