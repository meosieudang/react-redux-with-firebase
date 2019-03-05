import React, { Component } from 'react';
import Nofiticaton from './Nofiticaton';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import '../../App.css'

class Dashboard extends Component {
    render() {
        const { projects, auth, notifications } = this.props;
        console.log(notifications)
        if (!auth.uid) return <Redirect to='/signin' />
        if (!projects) {
            return (
                <>Loading...</>
            )
        } else {
            return (
                <div className='dashboard container'>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <ProjectList projects={projects} />
                        </div>
                        <div className='col s12 m5 offset-m1'>
                            <Nofiticaton notifications={notifications} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProp = state => {
    return {
        // projects: state.project.projects
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProp),
    firestoreConnect([
        { collection: 'projects' , orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);