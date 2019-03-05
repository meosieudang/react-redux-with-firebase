import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectAction';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/');
    }

    render() {
        const { title, content } = this.state;
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='signin' />
        return (
            <div className='container'>
                <form className='white' onSubmit={this.onSubmit}>
                    <h5 className='grey-text text-darken-3'>
                        Create Project
                    </h5>
                    <div className='input-field'>
                        <label>Title</label>
                        <input type='text' name='title' value={title} onChange={this.onChange} />
                    </div>
                    <div className='input-field'>
                        <label>Content</label>
                        <textarea className='materialize-textarea' type='text' name='content' value={content} onChange={this.onChange} />
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => {
            dispatch(createProject(project))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);