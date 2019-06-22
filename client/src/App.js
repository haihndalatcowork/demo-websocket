import React from 'react';
import socketIOClient from 'socket.io-client';
import CanvasJSReact from "./canvasjs/canvasjs.react";
import './App.css';

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
    state = {
        dataPoints: [
            {y: 0, label: "Direct"},
            {y: 0, label: "Organic Search"},
            {y: 0, label: "Paid Search"},
            {y: 0, label: "Referral"},
            {y: 0, label: "Social"}
        ]
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
        const dataPoints = this.state.dataPoints;
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
                        dataPoints.map((item, index) => {
                            return <button key={index} onClick={this.onClickHandle}>{item.label}</button>
                        })
                    }
                </header>
            </div>
        );
    }
}

export default App;
