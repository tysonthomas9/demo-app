/* global google */
import React, { Component } from 'react';

// Material Ui React Imports
import { Paper } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import Airplane from '@material-ui/icons/AirplanemodeActive';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

import './App.css';

const data = [
  {name: 'Jun 15', flightPath: 75},
  {name: 'Jun 22', flightPath: 90},
  {name: 'Jun 29', flightPath: 80},
  {name: 'Jul 06', flightPath: 125},
  {name: 'Jul 13', flightPath: 100},
  {name: 'Jul 20', flightPath: 90},
  {name: 'Jul 27', flightPath: 80},
  {name: 'Aug 3', flightPath: 115},
];

const COLORS = ['#6b5b95', '#feb236', '#d64161', '#ff7b25', '#b5e7a0']

const data02 = [{name: 'Maveric', value: 10}, {name: 'Intel Aero #1', value: 40},
                  {name: 'Intel Aero #2', value: 30}, {name: 'Spark', value: 15},
                  {name: 'Hero', value: 5}];

class App extends Component {
  state = {
    loadingData: false,
    showMenu: true,
  };

  onClickMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.showMenu &&
            <Paper className="form">
              <div className="icon">
                <HomeIcon/>
                <div>Dashboard</div>
              </div>
              <div className="icon">
                <SendIcon/>
                <div>Missions</div>
              </div>
              <div className="icon">
                <Airplane/>
                <div>Assets</div>
              </div>
            </Paper>
        }

        <div className="row">
          <div className="header">
            <IconButton>
              <MenuIcon onClick={() => this.onClickMenu()} />
            </IconButton>
            <div className="leftHeaderContainer">
              <MenuItem>
                <IconButton color="inherit">
                  <Badge badgeContent={14} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </MenuItem>
              <MenuItem>
                <p>Demo</p>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </MenuItem>
            </div>
          </div>
          <div className="body">
            <div className="head stats">
              <div>
                <p><SendIcon style={{ fontSize: '16px' }} /> Total Missions</p>
                <div>12</div>
                <p>~5 from last month</p>
              </div>
              <div className="verticalLine"></div>
              <div>
                <p><Airplane style={{ fontSize: '16px' }} /> Total Drones</p>
                <div>5</div>
                <p>+40% from last month</p>
              </div>
              <div className="verticalLine"></div>
              <div>
                <p>Total Pilots</p>
                <div>2</div>
                <p>0% from last month</p>
              </div>
              <div className="verticalLine"></div>
              <div>
                <p>Total Flight Time</p>
                <div>22 Hrs</div>
                <p>+6% from last month</p>
              </div>
              <div className="verticalLine"></div>
              <div>
                <p>Average Mission Time</p>
                <div>12 Min</div>
                <p>-3% from last month</p>
              </div>
              <div className="verticalLine"></div>
              <div>
                <p>Mission Failure Rate</p>
                <div>1%</div>
                <p>+4% from last month</p>
              </div>
            </div>

            <Paper className="mainContainer">
              <div className="chartHeader head">
                Flight Activities
              </div>
              <Divider />

              <div className="chart">
                <AreaChart width={800} height={250} data={data}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Area type='monotone' dataKey='flightPath' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
              </div>
            </Paper>

            <div className="column">
              <Paper className="mainContainer duration">
                <p className="head">Mission Duration</p>
                <Divider />
                <div className="column missionData">
                  <div className="cloumn">
                    <p className="head">Light tower skytop mapping</p>
                    <LinearProgress variant="determinate" value={30} />
                  </div>
                  <div>
                    <p>2018-07-06</p>
                    <p>5min 7sec</p>
                  </div>
                </div>
                <div className="column missionData">
                  <div className="cloumn">
                    <p className="head">Skytop Quarry 2D mapping</p>
                    <LinearProgress variant="determinate" value={50} />
                  </div>
                  <div>
                    <p>2018-06-26</p>
                    <p>12min 7sec</p>
                  </div>
                </div>
                <div className="column missionData">
                  <div className="cloumn">
                    <p className="head">Skytop Quarry 3D mapping</p>
                    <LinearProgress variant="determinate" value={20} />
                  </div>
                  <div>
                    <p>2018-06-15</p>
                    <p>25min 5sec</p>
                  </div>
                </div>
              </Paper>
              <Paper className="mainContainer duration">
                <p className="head">Drone Duration</p>
                <Divider />
                <div className="column droneContent">
                  <div>
                    <p className="head">Top 5</p>
                    <PieChart width={200} height={200}>
                      <Pie data={data02} innerRadius={40} outerRadius={80} fill="#82ca8d">
                        {
                          data02.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                        }
                      </Pie>
                      <Tooltip/>
                    </PieChart>
                  </div>
                  <div>
                    <p className="head">Drone</p>
                    <p>Maveric</p>
                    <p>Intel Aero #1</p>
                    <p>Intel Aero #2</p>
                    <p>Spark</p>
                    <p>Hero</p>
                  </div>
                  <div>
                    <p className="head">Usage</p>
                    <p>10%</p>
                    <p>40%</p>
                    <p>30%</p>
                    <p>15%</p>
                    <p>5%</p>
                  </div>
                </div>
                
              </Paper>
              <Paper className="mainContainer duration">
                <p className="head">Top Pilots</p>
                <Divider />
                <div className="column" style={{ alignItems: 'center' }}>
                  <AccountCircleOutlined style={{ fontSize: 60 }} color="primary" />
                  <div style={{ padding: '10px', fontSize: '18px' }}>
                    Mr. Yungpeng Li
                    <br />
                    15 hours flight
                    <br />
                    95% Safe Rate
                  </div>
                </div>
                <div className="column" style={{ alignItems: 'center' }}>
                  <AccountCircleOutlined style={{ fontSize: 60 }} color="secondary" />
                  <div style={{ padding: '10px', fontSize: '18px' }}>
                    Mr. Yungpeng Li
                    <br />
                    15 hours flight
                    <br />
                    95% Safe Rate
                  </div>
                </div>
              </Paper>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
