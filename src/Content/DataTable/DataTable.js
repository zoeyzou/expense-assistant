import React, { Component } from 'react';
import ReactTable from 'react-table';

import styles from './DataTable.css';

export class DataTable extends Component {
  dummy = '{"expenses":[{"id":"5b996064dfd5b783915112f5","amount":{"value":"1854.99","currency":"EUR"},"date":"2018-09-10T02:11:29.184Z","merchant":"KAGE","receipts":[],"comment":"","category":"","user":{"first":"Vickie","last":"Lee","email":"vickie.lee@pleo.io"},"index":0},{"id":"5b99606474ab17b7820b3922","amount":{"value":"3222.88","currency":"GBP"},"date":"2018-08-13T07:11:01.680Z","merchant":"ASSITIA","receipts":[],"comment":"","category":"","user":{"first":"Lowe","last":"Michael","email":"lowe.michael@pleo.io"},"index":1},{"id":"5b995dffa0864eddc16e2f76","amount":{"value":"166","currency":"GBP"},"date":"2018-08-12T00:37:46.342Z","merchant":"KONNECT","receipts":[],"comment":"","category":"","user":{"first":"Pam","last":"Noble","email":"pam.noble@pleo.io"},"index":2},{"id":"5b996064f5becf9df839e560","amount":{"value":"3.82","currency":"DKK"},"date":"2018-06-25T09:34:47.477Z","merchant":"MACRONAUT","receipts":[],"comment":"","category":"","user":{"first":"Dena","last":"Warren","email":"dena.warren@pleo.io"},"index":3},{"id":"5b99606419cc4b0bb52d7665","amount":{"value":"1495.94","currency":"GBP"},"date":"2018-06-17T06:20:18.194Z","merchant":"SURELOGIC","receipts":[],"comment":"","category":"","user":{"first":"Walsh","last":"Hudson","email":"walsh.hudson@pleo.io"},"index":4},{"id":"5b995dff101b241ca970a172","amount":{"value":"534.13","currency":"EUR"},"date":"2018-05-26T07:52:07.560Z","merchant":"MULTRON","receipts":[],"comment":"","category":"","user":{"first":"Latoya","last":"Case","email":"latoya.case@pleo.io"},"index":5},{"id":"5b995dff88077169faa2aa42","amount":{"value":"697.28","currency":"GBP"},"date":"2018-05-16T01:49:45.368Z","merchant":"EXTRAGEN","receipts":[],"comment":"","category":"","user":{"first":"Mckenzie","last":"Cervantes","email":"mckenzie.cervantes@pleo.io"},"index":6},{"id":"5b995dff4bfcacbb9bb37a7c","amount":{"value":"269.65","currency":"GBP"},"date":"2018-05-15T07:33:37.031Z","merchant":"ENTOGROK","receipts":[],"comment":"","category":"","user":{"first":"Claire","last":"Leonard","email":"claire.leonard@pleo.io"},"index":7},{"id":"5b995dff32aa95cc0b45feb7","amount":{"value":"3926.79","currency":"DKK"},"date":"2018-05-12T12:53:41.495Z","merchant":"KRAG","receipts":[],"comment":"","category":"","user":{"first":"Dominique","last":"Hoover","email":"dominique.hoover@pleo.io"},"index":8},{"id":"5b995dffb2ba0d06a3c53f16","amount":{"value":"3520.73","currency":"GBP"},"date":"2018-05-12T06:51:42.896Z","merchant":"SCHOOLIO","receipts":[],"comment":"","category":"","user":{"first":"Wheeler","last":"Noel","email":"wheeler.noel@pleo.io"},"index":9},{"id":"5b996064c78d7194a2e7239e","amount":{"value":"3620.98","currency":"GBP"},"date":"2018-05-05T14:00:00.439Z","merchant":"XINWARE","receipts":[],"comment":"","category":"","user":{"first":"Flynn","last":"Giles","email":"flynn.giles@pleo.io"},"index":10},{"id":"5b9960647036de0eb5954db1","amount":{"value":"476.98","currency":"DKK"},"date":"2018-04-29T03:30:46.282Z","merchant":"BILLMED","receipts":[],"comment":"","category":"","user":{"first":"Barry","last":"Gallagher","email":"barry.gallagher@pleo.io"},"index":11},{"id":"5b996064e5c16e3951295d1f","amount":{"value":"2709.65","currency":"EUR"},"date":"2018-04-16T03:26:43.651Z","merchant":"AQUAFIRE","receipts":[],"comment":"","category":"","user":{"first":"Robin","last":"Rios","email":"robin.rios@pleo.io"},"index":12},{"id":"5b995dff23124b8752a52039","amount":{"value":"1729.41","currency":"DKK"},"date":"2018-04-03T18:30:28.548Z","merchant":"DIGIAL","receipts":[],"comment":"","category":"","user":{"first":"Weaver","last":"Vazquez","email":"weaver.vazquez@pleo.io"},"index":13},{"id":"5b996064ba218563e3ed5935","amount":{"value":"3383.76","currency":"DKK"},"date":"2018-03-23T08:31:02.663Z","merchant":"ELEMANTRA","receipts":[],"comment":"","category":"","user":{"first":"Frances","last":"Atkins","email":"frances.atkins@pleo.io"},"index":14},{"id":"5b9960640a0189fda5f689c0","amount":{"value":"3965.19","currency":"GBP"},"date":"2018-03-22T15:33:09.360Z","merchant":"CIPROMOX","receipts":[],"comment":"","category":"","user":{"first":"Mona","last":"Freeman","email":"mona.freeman@pleo.io"},"index":15},{"id":"5b99606492951fe4481be7c6","amount":{"value":"2069.83","currency":"EUR"},"date":"2018-02-22T16:25:40.540Z","merchant":"EMERGENT","receipts":[],"comment":"","category":"","user":{"first":"Christensen","last":"Trevino","email":"christensen.trevino@pleo.io"},"index":16},{"id":"5b995dff1b64a0317ee2b982","amount":{"value":"3093.16","currency":"GBP"},"date":"2018-02-12T09:40:44.742Z","merchant":"GENMOM","receipts":[],"comment":"","category":"","user":{"first":"Virginia","last":"Benjamin","email":"virginia.benjamin@pleo.io"},"index":17},{"id":"5b995dff74b94940dd48f706","amount":{"value":"1830.72","currency":"EUR"},"date":"2018-02-04T03:47:31.125Z","merchant":"URBANSHEE","receipts":[],"comment":"","category":"","user":{"first":"Pate","last":"Cruz","email":"pate.cruz@pleo.io"},"index":18},{"id":"5b995dff1aa5d585091ca6ec","amount":{"value":"1349.61","currency":"DKK"},"date":"2018-01-21T19:11:01.895Z","merchant":"GINKLE","receipts":[],"comment":"","category":"","user":{"first":"Sampson","last":"Stephenson","email":"sampson.stephenson@pleo.io"},"index":19},{"id":"5b995dff9c0f0dfb4a88d1eb","amount":{"value":"1709.05","currency":"GBP"},"date":"2018-01-20T13:58:32.329Z","merchant":"EXOVENT","receipts":[],"comment":"","category":"","user":{"first":"Estes","last":"Brown","email":"estes.brown@pleo.io"},"index":20},{"id":"5b996064cadeac55736ad99a","amount":{"value":"1637","currency":"DKK"},"date":"2018-01-16T22:15:16.209Z","merchant":"BRAINCLIP","receipts":[],"comment":"","category":"","user":{"first":"Constance","last":"Hahn","email":"constance.hahn@pleo.io"},"index":21},{"id":"5b995dff8753b58e227a764c","amount":{"value":"1228.16","currency":"GBP"},"date":"2018-01-16T04:38:39.682Z","merchant":"KIOSK","receipts":[],"comment":"","category":"","user":{"first":"Spence","last":"Ballard","email":"spence.ballard@pleo.io"},"index":22},{"id":"5b995dffc08493ea1bfbb685","amount":{"value":"482.33","currency":"GBP"},"date":"2018-01-14T22:38:10.896Z","merchant":"MOBILDATA","receipts":[],"comment":"","category":"","user":{"first":"Selena","last":"Mcmillan","email":"selena.mcmillan@pleo.io"},"index":23},{"id":"5b9960647eb83b6e4179936d","amount":{"value":"3960.71","currency":"GBP"},"date":"2018-01-14T12:04:38.077Z","merchant":"HOUSEDOWN","receipts":[],"comment":"","category":"","user":{"first":"Marie","last":"Olsen","email":"marie.olsen@pleo.io"},"index":24}],"total":168}';
  
  state = {
    expenses: (JSON.parse(this.dummy)).expenses,
  };

  columns = [
    {
      Header: 'Date',
      id: 'date',
      accessor: d => d.date.slice(0, 10)
    },
    {
      Header: 'Name',
      id: 'fullname',
      accessor: d => `${d.user.first} ${d.user.last}`,
      width: 300
    },
    {
      Header: 'Merchant',
      accessor: 'merchant',
      width: 150
    },
    {
      Header: 'Amount',
      id: 'amount',
      accessor: d => `${d.amount.value} ${d.amount.currency}`,
      width: 150
    }
  ];

  render() {
    return (
    <div className={styles.DataTable}>
        <ReactTable 
          data={this.state.expenses}
          columns={this.columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={
            row => {
              return (
                <div>it works</div>
              )
            }
          }
        />
      </div>
    );
  };
};

export default DataTable;
