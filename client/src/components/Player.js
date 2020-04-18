import React from "react";

import { Table, Row, Col, Button } from "reactstrap";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
        };
    }

    componentDidMount() {
        console.log('component did mount');

        axios.get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err, 'err:'))
    }

    render() {
        // console.log(this.state.key);
        return (
            
        );
    }
}

export default TodoList;
