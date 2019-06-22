import React from 'react';
import socketIOClient from 'socket.io-client';
import CanvasJSReact from "./canvasjs/canvasjs.react";
import './App.css';
import {connect} from "react-redux"
import {getVotes, voting} from "./actions/voteAction";
import {GET_VOTES, VOTE_COMPLETE, VOTE_REQUEST} from "./actions/types";

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
    state = {
        dataPoints: [],
        label: "",
        isVoting: false,
        voted: false
    };

    componentWillReceiveProps(nextProps, nextContext) {
        switch (nextProps.type) {
            case GET_VOTES:
                this.setState({
                    dataPoints: nextProps.result
                });
                break;
            case VOTE_REQUEST:
            case VOTE_COMPLETE:
                this.setState({
                    isVoting: nextProps.isFetching,
                    voted: true
                });
                break;
            default:
                return;
        }
    }

    componentWillMount() {
        this.props.getVotes();
        socket.on('connect', () => {
            console.log("Connected!")
        });
        socket.on('UPDATED_VOTE', (data) => {
                if (data.success) {
                    this.props.getVotes();
                }
            }
        )
    }

    onClickHandle = (item) => {
        this.props.voting();
        this.setState({label: item.label});
        const socket = socketIOClient('http://localhost:5000');
        socket.emit('VOTED', item.id);
    };

    render() {
        const CanvasJSChart = CanvasJSReact.CanvasJSChart;
        const dataPoints = this.state.dataPoints;
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Who is the best?"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} ({y}%)",
                dataPoints: dataPoints
            }]
        };
        return (
            <div className="App">
                <header className="App-header">
                    <CanvasJSChart options={options}
                        /* onRef={ref => this.chart = ref} */
                    />
                    {
                        this.state.voted ? <div style={{color: "red"}}>You voted for {this.state.label} </div> :
                            <div>
                                {
                                    dataPoints.map((item) => {
                                        return (
                                            <button
                                                style={{
                                                    padding: "1em",
                                                    backgroundColor: "#b5d6ff",
                                                    borderRadius: "5px",
                                                    margin: "5px"
                                                }}
                                                key={item.id}
                                                onClick={() => this.onClickHandle(item)}>
                                                {item.label}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                    }
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.votes
});
const mapDispatchToProps = dispatch => ({
    getVotes: () => dispatch(getVotes()),
    voting: () => dispatch(voting())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
