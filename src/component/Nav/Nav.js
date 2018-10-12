import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

function Nav(props){
    console.log(props)
    return (
        <div>
            Nav
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
            
            {/* <p>{props.username}</p> */}
            {/* <img href={this.props.profile} /> */}

        </div>
    )
    

}

function mapStateToProps(state) {
    return {
        username: state.username,
        profile: state.profile
    }
}

export default connect(mapStateToProps)(Nav);
// export default connect( state => state )( Nav );