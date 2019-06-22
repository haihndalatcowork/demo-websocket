import React from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';
import CanvasJSReact from "./canvasjs/canvasjs.react";
import './App.css';

const socket = socketIOClient('http://localhost:5000');

class App extends React.Component {
    state = {
        dataPoints: []
    };

    componentWillMount() {
        axios.get('http://localhost:5000/votes')
            .then(res => {
                let dataPoints = [];
                let total = 0;
                res.data.map(item => {
                    total += item.count
                });
                res.data.map(item => {
                    dataPoints.push({y: (item.count / total) * 100, label: item.name, id: item.id})
                });
                this.setState({
                    dataPoints: dataPoints
                })
            })
            .catch(err => console.log(err));

        socket.on('connect', () => {

        });
        socket.on('send to client', (data) => {
                if (data.success) {
                    axios.get('http://localhost:5000/votes')
                        .then(res => {
                            let dataPoints = [];
                            let total = 0;
                            res.data.map(item => {
                                total += item.count
                            });
                            res.data.map(item => {
                                dataPoints.push({y: (item.count / total) * 100, label: item.name, id: item.id})
                            });
                            this.setState({
                                dataPoints: dataPoints
                            })
                        })
                        .catch(err => console.log(err));
                }
            }
        )
    }

    onClickHandle = (id) => {
        const socket = socketIOClient('http://localhost:5000');
        socket.emit('VOTED', id);
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
                        dataPoints.map((item) => {
                            return <button key={item.id}
                                           onClick={() => this.onClickHandle(item.id)}>{item.label}</button>
                        })
                    }
                </header>
            </div>
        );
    }
}

export default App;
