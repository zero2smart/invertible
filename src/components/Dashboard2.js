import React, { Component } from 'react';
import { core as ZingChart, line as LineChart, area as AreaChart, pie as PieChart, bar as BarChart, scatter as ScatterChart } from 'zingchart-react';
import { IndexLink } from 'react-router';
import CommentBox from './CommentBox';
import Trending from './Trending';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from 'classnames';
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/stylesheets/components/Dashboard2.scss';
import AmCharts from '@amcharts/amcharts3-react';

var rawDataValuesOne = [{
    "date": "20170516",
    "value": -0.307
}, {
    "date": "20170813",
    "value": -0.168
}, {
    "date": "20170915",
    "value": -0.168
}];

var rawDataValuesTwo = [{
    "date": "20170516",
    "value": -0.307
}, {
    "date": "20170813",
    "value": -0.168
}, {
    "date": "20170915",
    "value": -0.168
}];

var rawDataGraphOne = [{
    "id": "g1",
    "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
    "bullet": "round",
    "bulletSize": 8,
    "lineColor": "#d1655d",
    "lineThickness": 2,
    "negativeLineColor": "#637bb6",
    "type": "smoothedLine",
    "valueField": "value"
}];

class Dashboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
            group1Active: 'Sessions',
            group2Active: 'Total'
        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.setGroup1Active = this.setGroup1Active.bind(this);
        this.setGroup2Active = this.setGroup2Active.bind(this);
    }

    setGroup1Active(e) {
        this.setState({group1Active : e.target.value});
    }

    setGroup2Active(e) {
        this.setState({ group2Active: e.target.value });
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div className="dashboard2-container">
                <h6>Current Period</h6>
                <div className="row">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-6">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleStartDateChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-6">
                                <DatePicker
                                    selected={this.state.endDate}
                                    onChange={this.handleEndDateChange}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="btn-group1">
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group1Active == 'Sessions' })}>
                                <input type="radio"
                                    name="group1"
                                    value="Sessions"
                                    className="btn btn-default"
                                    defaultChecked={true}
                                    onChange={this.setGroup1Active} />
                                Sessions
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group1Active == 'Transactions' })}>
                                <input type="radio"
                                    name="group1"
                                    value="Transactions"
                                    className="btn btn-default"
                                    onChange={this.setGroup1Active} />
                                Transactions
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group1Active == 'BounceRate' })}>
                                <input type="radio"
                                    name="group1"
                                    value="BounceRate"
                                    className="btn btn-default"
                                    onChange={this.setGroup1Active} />
                                BounceRate
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group1Active == 'ConversionRate' })}>
                                <input type="radio"
                                    name="group1"
                                    value="ConversionRate"
                                    className="btn btn-default"
                                    onChange={this.setGroup1Active} />
                                ConversionRate
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group1Active == 'TimeSpent' })}>
                                <input type="radio"
                                    name="group1"
                                    value="TimeSpent"
                                    className="btn btn-default"
                                    onChange={this.setGroup1Active} />
                                TimeSpent
                            </label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="btn-group2">
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group2Active == 'Total' })}>
                                <input type="radio"
                                    className="btn btn-default"
                                    name="group2"
                                    value="Total"
                                    onChange={this.setGroup2Active} />
                                Total
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group2Active == 'Device' })}>
                                <input type="radio"
                                    className="btn btn-default"
                                    name="group2"
                                    value="Device"
                                    onChange={this.setGroup2Active} />
                                Device
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group2Active == 'Channel' })}>
                                <input type="radio"
                                    className="btn btn-default"
                                    name="group2"
                                    value="Channel"
                                    onChange={this.setGroup2Active} />
                                Channel
                            </label>
                            <label className={classnames('btn', 'btn-default', { 'active': this.state.group2Active == 'LandingPage' })}>
                                <input type="radio"
                                    className="btn btn-default"
                                    name="group2"
                                    value="LandingPage"
                                    onChange={this.setGroup2Active} />
                                LandingPage
                            </label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#raw-data" role="tab" data-toggle="tab">Raw data</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#percentage-changes" role="tab" data-toggle="tab">Percentage Changes</a>
                        </li>
                    </ul>

                    <div className="clear"></div>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active show" id="raw-data">
                            <div className="row">
                            <div className="col-md-6">
                                <AmCharts.React
                                    style={{
                                        width: "100%",
                                        height: "500px"
                                    }}
                                    options={{
                                        "type": "serial",
                                        "theme": "light",
                                        "graphs": rawDataGraphOne,
                                        "dataProvider": rawDataValuesOne,
                                        "chartScrollbar": {
                                            "graph": "g1",
                                            "gridAlpha": 0,
                                            "color": "#888888",
                                            "scrollbarHeight": 55,
                                            "backgroundAlpha": 0,
                                            "selectedBackgroundAlpha": 0.1,
                                            "selectedBackgroundColor": "#888888",
                                            "graphFillAlpha": 0,
                                            "autoGridCount": true,
                                            "selectedGraphFillAlpha": 0,
                                            "graphLineAlpha": 0.2,
                                            "graphLineColor": "#c2c2c2",
                                            "selectedGraphLineColor": "#888888",
                                            "selectedGraphLineAlpha": 1
                                        },
                                        "chartCursor": {
                                            "categoryBalloonDateFormat": "MM DD",
                                            "cursorAlpha": 0,
                                            "valueLineEnabled": true,
                                            "valueLineBalloonEnabled": true,
                                            "valueLineAlpha": 0.5,
                                            "fullWidth": true
                                        },
                                        "dataDateFormat": "YYYYMMDD",
                                        "categoryField": "date",
                                        "categoryAxis": {
                                            "minPeriod": "DD",
                                            "parseDates": true,
                                            "minorGridAlpha": 0.1,
                                            "minorGridEnabled": true
                                        },
                                        "export": {
                                            "enabled": true
                                        }
                                }} />
                            </div>
                            <div className="col-md-6">
                                <AmCharts.React
                                    style={{
                                        width: "100%",
                                        height: "500px"
                                    }}
                                    options={{
                                        "type": "serial",
                                        "theme": "light",
                                        "dataProvider": rawDataValuesTwo,
                                        "valueAxes": [{
                                            "gridColor": "#FFFFFF",
                                            "gridAlpha": 0.2,
                                            "dashLength": 0
                                        }],
                                        "gridAboveGraphs": true,
                                        "startDuration": 1,
                                        "graphs": [{
                                            "balloonText": "[[category]]: <b>[[value]]</b>",
                                            "fillAlphas": 0.8,
                                            "lineAlpha": 0.2,
                                            "type": "column",
                                            "valueField": "value"
                                        }],
                                        "chartCursor": {
                                            "categoryBalloonEnabled": false,
                                            "cursorAlpha": 0,
                                            "zoomable": false
                                        },
                                        "categoryField": "date",
                                        "categoryAxis": {
                                            "gridPosition": "start",
                                            "gridAlpha": 0,
                                            "tickPosition": "start",
                                            "tickLength": 20
                                        },
                                        "export": {
                                            "enabled": true
                                        }
                                    }} />
                            </div>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="percentage-changes">bbb</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard2;