import React from 'react';
import {Link} from "react-router-dom";

class PageNotFound extends React.Component {
    render(){
        return(
            <React.Fragment>
                <h1>Page not found!</h1>
                <Link to={"/"}>Back to homepage</Link>
            </React.Fragment>
        )
    }
}
export default PageNotFound