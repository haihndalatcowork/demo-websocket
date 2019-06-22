import React from 'react';
import socketIOClient from 'socket.io-client';
import CanvasJSReact from "./canvasjs/canvasjs.react";
import logo from './logo.svg';
import './App.css';

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
    state = {
        clicked: false
    };

    componentWillMount() {
        socket.on('connect', () => {

        });
        socket.on('send to client', (data) => {
            alert(data.success)
        })
    }

    onClickHandle = () => {
        const socket = socketIOClient('http://localhost:5000');
        socket.emit('join the conversation', {userId: 123});
        this.setState(prevState => {
            return {clicked: !prevState.clicked}
        })
    };

    render() {
        const CanvasJSChart = CanvasJSReact.CanvasJSChart;
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Website Traffic Sources"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 18, label: "Direct" },
                    { y: 49, label: "Organic Search" },
                    { y: 9, label: "Paid Search" },
                    { y: 5, label: "Referral" },
                    { y: 19, label: "Social" }
                ]
            }]
        };
        return (
            <div className="App">
                <header className="App-header">
                    <CanvasJSChart options = {options}
                        /* onRef={ref => this.chart = ref} */
                    />
                    <button onClick={this.onClickHandle}>
                        Join the conversation
                    </button>
                </header>
            </div>
        );
    }
}

export default App;
