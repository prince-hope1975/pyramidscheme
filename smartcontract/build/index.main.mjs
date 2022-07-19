// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    address: ctc0,
    allowedToWithdraw: ctc1,
    numberOfChildren: ctc1,
    parent: ctc0,
    totalUnder: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const map0_ctc = ctc4;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_64: ctc5,
    Schemers_registerForScheme0_64: ctc6,
    Schemers_withdraw0_64: ctc5,
    Thief_steal0_64: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v865 = stdlib.protect(ctc2, interact.deadline, 'for Deployer\'s interact field deadline');
  const v866 = stdlib.protect(ctc2, interact.price, 'for Deployer\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v866, v865],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:39:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v870, v871], secs: v873, time: v872, didSend: v29, from: v869 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v870, v871], secs: v873, time: v872, didSend: v29, from: v869 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v869, v870, v871, v872],
    evt_cnt: 0,
    funcNum: 1,
    lct: v872,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v876, time: v875, didSend: v34, from: v874 } = txn2;
      
      ;
      const v884 = stdlib.add(v872, v871);
      
      const v887 = {
        address: v869,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        parent: v869,
        totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.simMapSet(sim_r, 0, v869, v887);
      const v889 = true;
      const v891 = v875;
      const v898 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v889;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v869,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v876, time: v875, didSend: v34, from: v874 } = txn2;
  ;
  const v877 = stdlib.addressEq(v869, v874);
  stdlib.assert(v877, {
    at: './index.rsh:41:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v884 = stdlib.add(v872, v871);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:45:19:application',
    fs: ['at ./index.rsh:45:19:application call to [unknown function] (defined at: ./index.rsh:45:19:function exp)', 'at ./index.rsh:45:19:application call to "liftedInteract" (defined at: ./index.rsh:45:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  const v887 = {
    address: v869,
    allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    parent: v869,
    totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  await stdlib.mapSet(map0, v869, v887);
  let v889 = true;
  let v891 = v875;
  let v898 = stdlib.checkedBigNumberify('./index.rsh:32:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v889;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: ['time', v884],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc5],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1545], secs: v1547, time: v1546, didSend: v833, from: v1544 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1548 = true;
      await txn4.getOutput('Schemers_timesUp', 'v1548', ctc8, v1548);
      const cv889 = false;
      const cv891 = v1546;
      const cv898 = v898;
      
      v889 = cv889;
      v891 = cv891;
      v898 = cv898;
      
      continue;
      }
    else {
      const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn3;
      switch (v982[0]) {
        case 'Schemers_checkBalance0_64': {
          const v985 = v982[1];
          undefined /* setApiDetails */;
          ;
          const v997 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v981), null);
          let v998;
          switch (v997[0]) {
            case 'None': {
              const v999 = v997[1];
              v998 = false;
              
              break;
              }
            case 'Some': {
              const v1000 = v997[1];
              v998 = true;
              
              break;
              }
            }
          stdlib.assert(v998, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:36:application call to "user_balance" (defined at: ./index.rsh:102:51:function exp)', 'at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)'],
            msg: 'Not a member',
            who: 'Deployer'
            });
          const v1004 = stdlib.fromSome(v997, v887);
          const v1005 = v1004.allowedToWithdraw;
          await txn3.getOutput('Schemers_checkBalance', 'v1005', ctc2, v1005);
          const cv889 = true;
          const cv891 = v983;
          const cv898 = v898;
          
          v889 = cv889;
          v891 = cv891;
          v898 = cv898;
          
          continue;
          break;
          }
        case 'Schemers_registerForScheme0_64': {
          const v1124 = v982[1];
          undefined /* setApiDetails */;
          const v1134 = stdlib.add(v898, v870);
          ;
          const v1152 = v1124[stdlib.checkedBigNumberify('./index.rsh:139:9:spread', stdlib.UInt_max, '0')];
          await txn3.getOutput('Schemers_registerForScheme', 'v981', ctc1, v981);
          const v1159 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1152), null);
          const v1161 = stdlib.fromSome(v1159, v887);
          const v1162 = stdlib.addressEq(v981, v869);
          const v1163 = v1162 ? false : true;
          stdlib.assert(v1163, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:78:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:24:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
            msg: 'cannot register as deployer',
            who: 'Deployer'
            });
          const v1165 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v981), null);
          let v1166;
          switch (v1165[0]) {
            case 'None': {
              const v1167 = v1165[1];
              v1166 = true;
              
              break;
              }
            case 'Some': {
              const v1168 = v1165[1];
              v1166 = false;
              
              break;
              }
            }
          stdlib.assert(v1166, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:24:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
            msg: 'Already a member sorry',
            who: 'Deployer'
            });
          const v1170 = v1161.numberOfChildren;
          const v1171 = stdlib.lt(v1170, stdlib.checkedBigNumberify('./index.rsh:80:41:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1171, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:24:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
            msg: 'No empty slots for that user',
            who: 'Deployer'
            });
          const v1175 = stdlib.fromSome(v1165, v887);
          const v1176 = v1161.address;
          const v1177 = v1161.allowedToWithdraw;
          const v1179 = v1161.parent;
          const v1180 = v1161.totalUnder;
          const v1182 = stdlib.add(v1170, stdlib.checkedBigNumberify('./index.rsh:89:57:decimal', stdlib.UInt_max, '1'));
          const v1184 = stdlib.add(v1180, stdlib.checkedBigNumberify('./index.rsh:90:45:decimal', stdlib.UInt_max, '1'));
          const v1186 = stdlib.add(v1177, v870);
          const v1187 = {
            address: v1176,
            allowedToWithdraw: v1186,
            numberOfChildren: v1182,
            parent: v1179,
            totalUnder: v1184
            };
          await stdlib.mapSet(map0, v1152, v1187);
          const v1189 = v1175.allowedToWithdraw;
          const v1190 = v1175.numberOfChildren;
          const v1192 = v1175.totalUnder;
          const v1193 = {
            address: v981,
            allowedToWithdraw: v1189,
            numberOfChildren: v1190,
            parent: v1152,
            totalUnder: v1192
            };
          await stdlib.mapSet(map0, v981, v1193);
          const cv889 = true;
          const cv891 = v983;
          const cv898 = v1134;
          
          v889 = cv889;
          v891 = cv891;
          v898 = cv898;
          
          continue;
          break;
          }
        case 'Schemers_withdraw0_64': {
          const v1263 = v982[1];
          undefined /* setApiDetails */;
          ;
          const v1338 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v981), null);
          const v1340 = stdlib.fromSome(v1338, v887);
          const v1341 = v1340.parent;
          const v1342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1341), null);
          const v1344 = stdlib.fromSome(v1342, v887);
          const v1345 = stdlib.addressEq(v981, v869);
          const v1346 = v1345 ? false : true;
          stdlib.assert(v1346, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
            msg: 'You cannot withdraw as deployer',
            who: 'Deployer'
            });
          const v1348 = v1340.allowedToWithdraw;
          const v1349 = stdlib.eq(v1348, stdlib.checkedBigNumberify('./index.rsh:117:43:decimal', stdlib.UInt_max, '0'));
          const v1350 = v1349 ? false : true;
          stdlib.assert(v1350, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:117:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
            msg: 'Insufficient Balance',
            who: 'Deployer'
            });
          const v1352 = v1340.numberOfChildren;
          const v1353 = stdlib.ge(v1352, stdlib.checkedBigNumberify('./index.rsh:118:40:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1353, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
            msg: 'Need at least two down lines',
            who: 'Deployer'
            });
          const v1356 = stdlib.gt(v898, v870);
          stdlib.assert(v1356, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          const v1359 = stdlib.mul(v1348, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '30'));
          const v1360 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:121:55:decimal', stdlib.UInt_max, '100'));
          const v1362 = stdlib.gt(v898, v1360);
          const v1363 = v1362 ? v1360 : v898;
          const v1364 = v1344.address;
          const v1366 = v1344.allowedToWithdraw;
          const v1367 = v1344.numberOfChildren;
          const v1368 = v1344.parent;
          const v1369 = v1344.totalUnder;
          const v1371 = stdlib.mul(v1363, stdlib.checkedBigNumberify('./index.rsh:126:68:decimal', stdlib.UInt_max, '2'));
          const v1372 = stdlib.add(v1366, v1371);
          const v1373 = {
            address: v1364,
            allowedToWithdraw: v1372,
            numberOfChildren: v1367,
            parent: v1368,
            totalUnder: v1369
            };
          await stdlib.mapSet(map0, v1364, v1373);
          const v1374 = v1340.address;
          const v1378 = v1340.totalUnder;
          const v1379 = {
            address: v1374,
            allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            numberOfChildren: v1352,
            parent: v1341,
            totalUnder: v1378
            };
          await stdlib.mapSet(map0, v981, v1379);
          const v1383 = stdlib.sub(v898, v1363);
          ;
          await txn3.getOutput('Schemers_withdraw', 'v1363', ctc2, v1363);
          const cv889 = true;
          const cv891 = v983;
          const cv898 = v1383;
          
          v889 = cv889;
          v891 = cv891;
          v898 = cv898;
          
          continue;
          break;
          }
        case 'Thief_steal0_64': {
          const v1402 = v982[1];
          undefined /* setApiDetails */;
          ;
          const v1532 = stdlib.addressEq(v981, v869);
          stdlib.assert(v1532, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:177:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:11:function exp)'],
            msg: 'You are not the deployer ma boy',
            who: 'Deployer'
            });
          const v1534 = true;
          await txn3.getOutput('Thief_steal', 'v1534', ctc8, v1534);
          const cv889 = false;
          const cv891 = v983;
          const cv898 = v898;
          
          v889 = cv889;
          v891 = cv891;
          v898 = cv898;
          
          continue;
          break;
          }
        }}
    
    }
  ;
  return;
  
  
  
  
  };
export async function _Schemers_checkBalance4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_checkBalance4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_checkBalance4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_64: ctc5,
    Schemers_registerForScheme0_64: ctc6,
    Schemers_withdraw0_64: ctc5,
    Thief_steal0_64: ctc5
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v869, v870, v884, v887, v898] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v926 = ctc.selfAddress();
  const v928 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_checkBalance0_64" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'in',
    who: 'Schemers_checkBalance'
    });
  const v930 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v926), null);
  let v931;
  switch (v930[0]) {
    case 'None': {
      const v932 = v930[1];
      v931 = false;
      
      break;
      }
    case 'Some': {
      const v933 = v930[1];
      v931 = true;
      
      break;
      }
    }
  stdlib.assert(v931, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:31:application call to "user_balance" (defined at: ./index.rsh:102:51:function exp)', 'at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:152:10:application call to [unknown function] (defined at: ./index.rsh:152:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_checkBalance0_64" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'Not a member',
    who: 'Schemers_checkBalance'
    });
  const v937 = ['Schemers_checkBalance0_64', v928];
  
  const txn1 = await (ctc.sendrecv({
    args: [v869, v870, v884, v887, v898, v937],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:155:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
      
      switch (v982[0]) {
        case 'Schemers_checkBalance0_64': {
          const v985 = v982[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_checkBalance"
            });
          ;
          const v997 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v981), null);
          const v1004 = stdlib.fromSome(v997, v887);
          const v1005 = v1004.allowedToWithdraw;
          const v1006 = await txn1.getOutput('Schemers_checkBalance', 'v1005', ctc2, v1005);
          
          const v2149 = v898;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_registerForScheme0_64': {
          const v1124 = v982[1];
          
          break;
          }
        case 'Schemers_withdraw0_64': {
          const v1263 = v982[1];
          
          break;
          }
        case 'Thief_steal0_64': {
          const v1402 = v982[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
  switch (v982[0]) {
    case 'Schemers_checkBalance0_64': {
      const v985 = v982[1];
      undefined /* setApiDetails */;
      ;
      const v997 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v981), null);
      let v998;
      switch (v997[0]) {
        case 'None': {
          const v999 = v997[1];
          v998 = false;
          
          break;
          }
        case 'Some': {
          const v1000 = v997[1];
          v998 = true;
          
          break;
          }
        }
      stdlib.assert(v998, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:103:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:157:36:application call to "user_balance" (defined at: ./index.rsh:102:51:function exp)', 'at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)'],
        msg: 'Not a member',
        who: 'Schemers_checkBalance'
        });
      const v1004 = stdlib.fromSome(v997, v887);
      const v1005 = v1004.allowedToWithdraw;
      const v1006 = await txn1.getOutput('Schemers_checkBalance', 'v1005', ctc2, v1005);
      if (v544) {
        stdlib.protect(ctc0, await interact.out(v985, v1006), {
          at: './index.rsh:151:7:application',
          fs: ['at ./index.rsh:151:7:application call to [unknown function] (defined at: ./index.rsh:151:7:function exp)', 'at ./index.rsh:158:10:application call to "k" (defined at: ./index.rsh:156:11:function exp)', 'at ./index.rsh:156:11:application call to [unknown function] (defined at: ./index.rsh:156:11:function exp)'],
          msg: 'out',
          who: 'Schemers_checkBalance'
          });
        }
      else {
        }
      
      const v2149 = v898;
      return;
      
      break;
      }
    case 'Schemers_registerForScheme0_64': {
      const v1124 = v982[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_64': {
      const v1263 = v982[1];
      return;
      break;
      }
    case 'Thief_steal0_64': {
      const v1402 = v982[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schemers_registerForScheme4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_registerForScheme4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_registerForScheme4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_64: ctc6,
    Schemers_registerForScheme0_64: ctc5,
    Schemers_withdraw0_64: ctc6,
    Thief_steal0_64: ctc6
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v869, v870, v884, v887, v898] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v901 = ctc.selfAddress();
  const v903 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_registerForScheme0_64" (defined at: ./index.rsh:139:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'in',
    who: 'Schemers_registerForScheme'
    });
  const v904 = v903[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v907 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v904), null);
  const v909 = stdlib.fromSome(v907, v887);
  const v910 = stdlib.addressEq(v901, v869);
  const v911 = v910 ? false : true;
  stdlib.assert(v911, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:27:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_registerForScheme0_64" (defined at: ./index.rsh:139:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'cannot register as deployer',
    who: 'Schemers_registerForScheme'
    });
  const v913 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v901), null);
  let v914;
  switch (v913[0]) {
    case 'None': {
      const v915 = v913[1];
      v914 = true;
      
      break;
      }
    case 'Some': {
      const v916 = v913[1];
      v914 = false;
      
      break;
      }
    }
  stdlib.assert(v914, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:27:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_registerForScheme0_64" (defined at: ./index.rsh:139:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'Already a member sorry',
    who: 'Schemers_registerForScheme'
    });
  const v918 = v909.numberOfChildren;
  const v919 = stdlib.lt(v918, stdlib.checkedBigNumberify('./index.rsh:80:41:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v919, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:27:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:141:11:application call to [unknown function] (defined at: ./index.rsh:141:11:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_registerForScheme0_64" (defined at: ./index.rsh:139:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'No empty slots for that user',
    who: 'Schemers_registerForScheme'
    });
  const v924 = ['Schemers_registerForScheme0_64', v903];
  
  const txn1 = await (ctc.sendrecv({
    args: [v869, v870, v884, v887, v898, v924],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v870, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
      
      switch (v982[0]) {
        case 'Schemers_checkBalance0_64': {
          const v985 = v982[1];
          
          break;
          }
        case 'Schemers_registerForScheme0_64': {
          const v1124 = v982[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_registerForScheme"
            });
          const v1134 = stdlib.add(v898, v870);
          sim_r.txns.push({
            amt: v870,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1152 = v1124[stdlib.checkedBigNumberify('./index.rsh:139:9:spread', stdlib.UInt_max, '0')];
          const v1153 = await txn1.getOutput('Schemers_registerForScheme', 'v981', ctc1, v981);
          
          const v1159 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1152), null);
          const v1161 = stdlib.fromSome(v1159, v887);
          const v1165 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v981), null);
          const v1170 = v1161.numberOfChildren;
          const v1175 = stdlib.fromSome(v1165, v887);
          const v1176 = v1161.address;
          const v1177 = v1161.allowedToWithdraw;
          const v1179 = v1161.parent;
          const v1180 = v1161.totalUnder;
          const v1182 = stdlib.add(v1170, stdlib.checkedBigNumberify('./index.rsh:89:57:decimal', stdlib.UInt_max, '1'));
          const v1184 = stdlib.add(v1180, stdlib.checkedBigNumberify('./index.rsh:90:45:decimal', stdlib.UInt_max, '1'));
          const v1186 = stdlib.add(v1177, v870);
          const v1187 = {
            address: v1176,
            allowedToWithdraw: v1186,
            numberOfChildren: v1182,
            parent: v1179,
            totalUnder: v1184
            };
          await stdlib.simMapSet(sim_r, 0, v1152, v1187);
          const v1189 = v1175.allowedToWithdraw;
          const v1190 = v1175.numberOfChildren;
          const v1192 = v1175.totalUnder;
          const v1193 = {
            address: v981,
            allowedToWithdraw: v1189,
            numberOfChildren: v1190,
            parent: v1152,
            totalUnder: v1192
            };
          await stdlib.simMapSet(sim_r, 0, v981, v1193);
          const v2164 = v1134;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_withdraw0_64': {
          const v1263 = v982[1];
          
          break;
          }
        case 'Thief_steal0_64': {
          const v1402 = v982[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
  switch (v982[0]) {
    case 'Schemers_checkBalance0_64': {
      const v985 = v982[1];
      return;
      break;
      }
    case 'Schemers_registerForScheme0_64': {
      const v1124 = v982[1];
      undefined /* setApiDetails */;
      const v1134 = stdlib.add(v898, v870);
      ;
      const v1152 = v1124[stdlib.checkedBigNumberify('./index.rsh:139:9:spread', stdlib.UInt_max, '0')];
      const v1153 = await txn1.getOutput('Schemers_registerForScheme', 'v981', ctc1, v981);
      if (v544) {
        stdlib.protect(ctc0, await interact.out(v1124, v1153), {
          at: './index.rsh:140:7:application',
          fs: ['at ./index.rsh:140:7:application call to [unknown function] (defined at: ./index.rsh:140:7:function exp)', 'at ./index.rsh:146:10:application call to "k" (defined at: ./index.rsh:145:14:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
          msg: 'out',
          who: 'Schemers_registerForScheme'
          });
        }
      else {
        }
      
      const v1159 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1152), null);
      const v1161 = stdlib.fromSome(v1159, v887);
      const v1162 = stdlib.addressEq(v981, v869);
      const v1163 = v1162 ? false : true;
      stdlib.assert(v1163, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:78:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:24:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
        msg: 'cannot register as deployer',
        who: 'Schemers_registerForScheme'
        });
      const v1165 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v981), null);
      let v1166;
      switch (v1165[0]) {
        case 'None': {
          const v1167 = v1165[1];
          v1166 = true;
          
          break;
          }
        case 'Some': {
          const v1168 = v1165[1];
          v1166 = false;
          
          break;
          }
        }
      stdlib.assert(v1166, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:24:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
        msg: 'Already a member sorry',
        who: 'Schemers_registerForScheme'
        });
      const v1170 = v1161.numberOfChildren;
      const v1171 = stdlib.lt(v1170, stdlib.checkedBigNumberify('./index.rsh:80:41:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1171, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:24:application call to "register" (defined at: ./index.rsh:76:63:function exp)', 'at ./index.rsh:145:14:application call to [unknown function] (defined at: ./index.rsh:145:14:function exp)'],
        msg: 'No empty slots for that user',
        who: 'Schemers_registerForScheme'
        });
      const v1175 = stdlib.fromSome(v1165, v887);
      const v1176 = v1161.address;
      const v1177 = v1161.allowedToWithdraw;
      const v1179 = v1161.parent;
      const v1180 = v1161.totalUnder;
      const v1182 = stdlib.add(v1170, stdlib.checkedBigNumberify('./index.rsh:89:57:decimal', stdlib.UInt_max, '1'));
      const v1184 = stdlib.add(v1180, stdlib.checkedBigNumberify('./index.rsh:90:45:decimal', stdlib.UInt_max, '1'));
      const v1186 = stdlib.add(v1177, v870);
      const v1187 = {
        address: v1176,
        allowedToWithdraw: v1186,
        numberOfChildren: v1182,
        parent: v1179,
        totalUnder: v1184
        };
      await stdlib.mapSet(map0, v1152, v1187);
      const v1189 = v1175.allowedToWithdraw;
      const v1190 = v1175.numberOfChildren;
      const v1192 = v1175.totalUnder;
      const v1193 = {
        address: v981,
        allowedToWithdraw: v1189,
        numberOfChildren: v1190,
        parent: v1152,
        totalUnder: v1192
        };
      await stdlib.mapSet(map0, v981, v1193);
      const v2164 = v1134;
      return;
      
      break;
      }
    case 'Schemers_withdraw0_64': {
      const v1263 = v982[1];
      return;
      break;
      }
    case 'Thief_steal0_64': {
      const v1402 = v982[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schemers_timesUp4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_timesUp4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_timesUp4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v869, v870, v884, v887, v898] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v1543 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:183:7:application',
    fs: ['at ./index.rsh:183:7:application call to [unknown function] (defined at: ./index.rsh:183:7:function exp)', 'at ./index.rsh:182:32:application call to [unknown function] (defined at: ./index.rsh:182:32:function exp)'],
    msg: 'in',
    who: 'Schemers_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v869, v870, v884, v887, v898, v1543],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:183:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1545], secs: v1547, time: v1546, didSend: v833, from: v1544 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Schemers_timesUp"
        });
      ;
      const v1548 = true;
      const v1549 = await txn1.getOutput('Schemers_timesUp', 'v1548', ctc6, v1548);
      
      sim_r.txns.push({
        kind: 'from',
        to: v869,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1545], secs: v1547, time: v1546, didSend: v833, from: v1544 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1548 = true;
  const v1549 = await txn1.getOutput('Schemers_timesUp', 'v1548', ctc6, v1548);
  stdlib.protect(ctc0, await interact.out(v1545, v1549), {
    at: './index.rsh:183:7:application',
    fs: ['at ./index.rsh:183:7:application call to [unknown function] (defined at: ./index.rsh:183:7:function exp)', 'at ./index.rsh:184:8:application call to "k" (defined at: ./index.rsh:183:7:function exp)', 'at ./index.rsh:182:32:application call to [unknown function] (defined at: ./index.rsh:182:32:function exp)'],
    msg: 'out',
    who: 'Schemers_timesUp'
    });
  
  ;
  return;
  
  
  
  };
export async function _Schemers_withdraw4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_withdraw4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_withdraw4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_64: ctc5,
    Schemers_registerForScheme0_64: ctc6,
    Schemers_withdraw0_64: ctc5,
    Thief_steal0_64: ctc5
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v869, v870, v884, v887, v898] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v939 = ctc.selfAddress();
  const v941 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_withdraw0_64" (defined at: ./index.rsh:162:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'in',
    who: 'Schemers_withdraw'
    });
  const v943 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v939), null);
  const v945 = stdlib.fromSome(v943, v887);
  const v950 = stdlib.addressEq(v939, v869);
  const v951 = v950 ? false : true;
  stdlib.assert(v951, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:165:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_withdraw0_64" (defined at: ./index.rsh:162:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'You cannot withdraw as deployer',
    who: 'Schemers_withdraw'
    });
  const v953 = v945.allowedToWithdraw;
  const v954 = stdlib.eq(v953, stdlib.checkedBigNumberify('./index.rsh:117:43:decimal', stdlib.UInt_max, '0'));
  const v955 = v954 ? false : true;
  stdlib.assert(v955, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:165:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_withdraw0_64" (defined at: ./index.rsh:162:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'Insufficient Balance',
    who: 'Schemers_withdraw'
    });
  const v957 = v945.numberOfChildren;
  const v958 = stdlib.ge(v957, stdlib.checkedBigNumberify('./index.rsh:118:40:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v958, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:165:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_withdraw0_64" (defined at: ./index.rsh:162:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'Need at least two down lines',
    who: 'Schemers_withdraw'
    });
  const v961 = stdlib.gt(v898, v870);
  stdlib.assert(v961, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:165:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:164:10:application call to [unknown function] (defined at: ./index.rsh:164:10:function exp)', 'at ./index.rsh:69:53:application call to "runSchemers_withdraw0_64" (defined at: ./index.rsh:162:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: null,
    who: 'Schemers_withdraw'
    });
  const v965 = ['Schemers_withdraw0_64', v941];
  
  const txn1 = await (ctc.sendrecv({
    args: [v869, v870, v884, v887, v898, v965],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:167:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
      
      switch (v982[0]) {
        case 'Schemers_checkBalance0_64': {
          const v985 = v982[1];
          
          break;
          }
        case 'Schemers_registerForScheme0_64': {
          const v1124 = v982[1];
          
          break;
          }
        case 'Schemers_withdraw0_64': {
          const v1263 = v982[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_withdraw"
            });
          ;
          const v1338 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v981), null);
          const v1340 = stdlib.fromSome(v1338, v887);
          const v1341 = v1340.parent;
          const v1342 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1341), null);
          const v1344 = stdlib.fromSome(v1342, v887);
          const v1348 = v1340.allowedToWithdraw;
          const v1352 = v1340.numberOfChildren;
          const v1359 = stdlib.mul(v1348, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '30'));
          const v1360 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:121:55:decimal', stdlib.UInt_max, '100'));
          const v1362 = stdlib.gt(v898, v1360);
          const v1363 = v1362 ? v1360 : v898;
          const v1364 = v1344.address;
          const v1366 = v1344.allowedToWithdraw;
          const v1367 = v1344.numberOfChildren;
          const v1368 = v1344.parent;
          const v1369 = v1344.totalUnder;
          const v1371 = stdlib.mul(v1363, stdlib.checkedBigNumberify('./index.rsh:126:68:decimal', stdlib.UInt_max, '2'));
          const v1372 = stdlib.add(v1366, v1371);
          const v1373 = {
            address: v1364,
            allowedToWithdraw: v1372,
            numberOfChildren: v1367,
            parent: v1368,
            totalUnder: v1369
            };
          await stdlib.simMapSet(sim_r, 0, v1364, v1373);
          const v1374 = v1340.address;
          const v1378 = v1340.totalUnder;
          const v1379 = {
            address: v1374,
            allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            numberOfChildren: v1352,
            parent: v1341,
            totalUnder: v1378
            };
          await stdlib.simMapSet(sim_r, 0, v981, v1379);
          const v1383 = stdlib.sub(v898, v1363);
          sim_r.txns.push({
            kind: 'from',
            to: v981,
            tok: undefined /* Nothing */
            });
          const v1384 = await txn1.getOutput('Schemers_withdraw', 'v1363', ctc2, v1363);
          
          const v2182 = v1383;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Thief_steal0_64': {
          const v1402 = v982[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
  switch (v982[0]) {
    case 'Schemers_checkBalance0_64': {
      const v985 = v982[1];
      return;
      break;
      }
    case 'Schemers_registerForScheme0_64': {
      const v1124 = v982[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_64': {
      const v1263 = v982[1];
      undefined /* setApiDetails */;
      ;
      const v1338 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v981), null);
      const v1340 = stdlib.fromSome(v1338, v887);
      const v1341 = v1340.parent;
      const v1342 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1341), null);
      const v1344 = stdlib.fromSome(v1342, v887);
      const v1345 = stdlib.addressEq(v981, v869);
      const v1346 = v1345 ? false : true;
      stdlib.assert(v1346, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
        msg: 'You cannot withdraw as deployer',
        who: 'Schemers_withdraw'
        });
      const v1348 = v1340.allowedToWithdraw;
      const v1349 = stdlib.eq(v1348, stdlib.checkedBigNumberify('./index.rsh:117:43:decimal', stdlib.UInt_max, '0'));
      const v1350 = v1349 ? false : true;
      stdlib.assert(v1350, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:117:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
        msg: 'Insufficient Balance',
        who: 'Schemers_withdraw'
        });
      const v1352 = v1340.numberOfChildren;
      const v1353 = stdlib.ge(v1352, stdlib.checkedBigNumberify('./index.rsh:118:40:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1353, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
        msg: 'Need at least two down lines',
        who: 'Schemers_withdraw'
        });
      const v1356 = stdlib.gt(v898, v870);
      stdlib.assert(v1356, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:169:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:113:74:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
        msg: null,
        who: 'Schemers_withdraw'
        });
      const v1359 = stdlib.mul(v1348, stdlib.checkedBigNumberify('./index.rsh:121:49:decimal', stdlib.UInt_max, '30'));
      const v1360 = stdlib.div(v1359, stdlib.checkedBigNumberify('./index.rsh:121:55:decimal', stdlib.UInt_max, '100'));
      const v1362 = stdlib.gt(v898, v1360);
      const v1363 = v1362 ? v1360 : v898;
      const v1364 = v1344.address;
      const v1366 = v1344.allowedToWithdraw;
      const v1367 = v1344.numberOfChildren;
      const v1368 = v1344.parent;
      const v1369 = v1344.totalUnder;
      const v1371 = stdlib.mul(v1363, stdlib.checkedBigNumberify('./index.rsh:126:68:decimal', stdlib.UInt_max, '2'));
      const v1372 = stdlib.add(v1366, v1371);
      const v1373 = {
        address: v1364,
        allowedToWithdraw: v1372,
        numberOfChildren: v1367,
        parent: v1368,
        totalUnder: v1369
        };
      await stdlib.mapSet(map0, v1364, v1373);
      const v1374 = v1340.address;
      const v1378 = v1340.totalUnder;
      const v1379 = {
        address: v1374,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: v1352,
        parent: v1341,
        totalUnder: v1378
        };
      await stdlib.mapSet(map0, v981, v1379);
      const v1383 = stdlib.sub(v898, v1363);
      ;
      const v1384 = await txn1.getOutput('Schemers_withdraw', 'v1363', ctc2, v1363);
      if (v544) {
        stdlib.protect(ctc0, await interact.out(v1263, v1384), {
          at: './index.rsh:163:7:application',
          fs: ['at ./index.rsh:163:7:application call to [unknown function] (defined at: ./index.rsh:163:7:function exp)', 'at ./index.rsh:131:18:application call to "confirm" (defined at: ./index.rsh:168:11:function exp)', 'at ./index.rsh:169:51:application call to [unknown function] (defined at: ./index.rsh:120:19:function exp)', 'at ./index.rsh:168:11:application call to [unknown function] (defined at: ./index.rsh:168:11:function exp)'],
          msg: 'out',
          who: 'Schemers_withdraw'
          });
        }
      else {
        }
      
      const v2182 = v1383;
      return;
      
      break;
      }
    case 'Thief_steal0_64': {
      const v1402 = v982[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Thief_steal4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Thief_steal4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Thief_steal4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    address: ctc1,
    allowedToWithdraw: ctc2,
    numberOfChildren: ctc2,
    parent: ctc1,
    totalUnder: ctc2
    });
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_64: ctc5,
    Schemers_registerForScheme0_64: ctc6,
    Schemers_withdraw0_64: ctc5,
    Thief_steal0_64: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v869, v870, v884, v887, v898] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v967 = ctc.selfAddress();
  const v969 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:174:10:application call to [unknown function] (defined at: ./index.rsh:174:10:function exp)', 'at ./index.rsh:69:53:application call to "runThief_steal0_64" (defined at: ./index.rsh:172:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'in',
    who: 'Thief_steal'
    });
  const v970 = stdlib.addressEq(v967, v869);
  stdlib.assert(v970, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:174:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:10:application call to [unknown function] (defined at: ./index.rsh:174:10:function exp)', 'at ./index.rsh:174:10:application call to [unknown function] (defined at: ./index.rsh:174:10:function exp)', 'at ./index.rsh:69:53:application call to "runThief_steal0_64" (defined at: ./index.rsh:172:9:function exp)', 'at ./index.rsh:69:53:application call to [unknown function] (defined at: ./index.rsh:69:53:function exp)'],
    msg: 'You are not the deployer, stop trying',
    who: 'Thief_steal'
    });
  const v974 = ['Thief_steal0_64', v969];
  
  const txn1 = await (ctc.sendrecv({
    args: [v869, v870, v884, v887, v898, v974],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:175:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
      
      switch (v982[0]) {
        case 'Schemers_checkBalance0_64': {
          const v985 = v982[1];
          
          break;
          }
        case 'Schemers_registerForScheme0_64': {
          const v1124 = v982[1];
          
          break;
          }
        case 'Schemers_withdraw0_64': {
          const v1263 = v982[1];
          
          break;
          }
        case 'Thief_steal0_64': {
          const v1402 = v982[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Thief_steal"
            });
          ;
          const v1534 = true;
          const v1535 = await txn1.getOutput('Thief_steal', 'v1534', ctc8, v1534);
          
          sim_r.txns.push({
            kind: 'from',
            to: v869,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v982], secs: v984, time: v983, didSend: v544, from: v981 } = txn1;
  switch (v982[0]) {
    case 'Schemers_checkBalance0_64': {
      const v985 = v982[1];
      return;
      break;
      }
    case 'Schemers_registerForScheme0_64': {
      const v1124 = v982[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_64': {
      const v1263 = v982[1];
      return;
      break;
      }
    case 'Thief_steal0_64': {
      const v1402 = v982[1];
      undefined /* setApiDetails */;
      ;
      const v1532 = stdlib.addressEq(v981, v869);
      stdlib.assert(v1532, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:177:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:11:function exp)'],
        msg: 'You are not the deployer ma boy',
        who: 'Thief_steal'
        });
      const v1534 = true;
      const v1535 = await txn1.getOutput('Thief_steal', 'v1534', ctc8, v1534);
      if (v544) {
        stdlib.protect(ctc0, await interact.out(v1402, v1535), {
          at: './index.rsh:173:7:application',
          fs: ['at ./index.rsh:173:7:application call to [unknown function] (defined at: ./index.rsh:173:7:function exp)', 'at ./index.rsh:178:10:application call to "k" (defined at: ./index.rsh:176:11:function exp)', 'at ./index.rsh:176:11:application call to [unknown function] (defined at: ./index.rsh:176:11:function exp)'],
          msg: 'out',
          who: 'Thief_steal'
          });
        }
      else {
        }
      
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function Schemers_checkBalance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_checkBalance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_checkBalance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Schemers_checkBalance4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Schemers_registerForScheme(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_registerForScheme expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_registerForScheme expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Schemers_registerForScheme4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Schemers_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Schemers_timesUp4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Schemers_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Schemers_withdraw4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Thief_steal(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Thief_steal expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Thief_steal expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Thief_steal4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Schemers_checkBalance()uint64`, `Schemers_registerForScheme(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()uint64`, `Thief_steal()byte`],
    pure: [],
    sigs: [`Schemers_checkBalance()uint64`, `Schemers_registerForScheme(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()uint64`, `Thief_steal()byte`]
    },
  appApproval: `BiAOAAEIIAQoAwJZ2NPh/Ay91664DpnDmO4P8aSynAqIASYDAQABAQAiNQAxGEEFCCpkSSJbNQEkWzUCMRkjEkEACjEAKCEIr2ZCBNU2GgAXSUEAdSI1BCM1BkkhCQxAADxJIQoMQAAiSSELDEAACCELEkQqQgBxIQoSRCo1/4ABAjT/UDIDUEIAvCEJEkQqNf+AAQM0/1AyA1BCAKlJIQwMQAARIQwSRCo1/yg0/1AyA1BCAJGBkbb75QMSRDYaATX/KTT/UEIAfTYaAhc1BDYaAzYaARdJIQYMQAMFSSEEDEAAYSEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDIQVbNf9JNQU1/oAE1OAYLTT+ULAyBjT/D0SACQAAAAAAAAYMAbApNQc0A1cAIDQDJVs0/zQDVzBYIjIGNAMhDVtCA1JIIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSVcAIDX/JVs1/iEFWzX9VzBYNfwhDVs1+0k1BTX6gAQUkUDUNPpQsDIGNP0MRDT6IlVJIQcMQAEUSSEGDEAAKSEGEkQxADT/EkSACQAAAAAAAAX+AbApNQc0/zT+NP00/CIyBjT7QgLNSDT8MQCIA4RJNfhXAVg0+CJVTUk1+VcwIDX4NPw0+IgDakk19lcBWDT2IlVNNfcxADT/E0Q0+SVbSTX2RDT5IQVbSTX1IQcPRDT7NP4NRDT2gR4LgWQKNfQ0+zT0NPs09A1NNfM091cAIDXyNPIoKTTyNPclWzTzIQcLCBZQNPdXKAhQNPdXMCBQNPdXUAhQUGYxACgpNPlXACAkr1A09RZQNPhQNPlXUAhQUGaxIrIBNPOyCCOyEDEAsgezgAgAAAAAAAAFUzTzFlCwNPMWNQc0/zT+NP00/CMyBjT7NPMJQgHpSSMMQADPSDT6VwEgNfk0/ogCpDT5NfiACAAAAAAAAAPVMQBQsDEANQc0/DT4iAJ4STX2VwFYNPYiVU019zEANP8TRDEAiAJgSTX2IlVAAAYjNfVCAAYiNfVCAAA09UQ09yEFW0k19CEHDEQ0/DT2STXyVwFYNPIiVU018zT4KCk091cAIDT3JVs0/ggWUDT0IwgWUDT3VzAgUDT3gVBbIwgWUFBmMQAoKTEANPNXIAhQNPNXKAhQNPhQNPNXUAhQUGY0/zT+NP00/CMyBjT7NP4IQgEUSDEAiAHNSTX5IlVAAAYiNfhCAAYjNfhCAAA0+ESACAAAAAAAAAPtNPw0+Uk191cBWDT3IlVNVyAIULA0/DT5STX3VwFYNPciVU1XIAg1BzT/NP40/TT8IzIGNPtCALVJIwxAAFwjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/ySvUCSvUDT/UCSvUDX+NP8oKTT+UGY0/zQDJVs0A4EwWzQDIQVbCDT+IzIGIkIAU0iBoI0GiAEZIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgBtNf81/jX9Nfw1+zX6Nfk0/UEAKzT5NPoWUDT7FlA0/FA0/xZQKEsBVwB/ZylLAVd/EWdIIQQ1ATIGNQJCAC+xIrIBNP+yCCOyEDT5sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 89,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v870",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v871",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v870",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v871",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_checkBalance0_64",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Schemers_registerForScheme0_64",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_64",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Thief_steal0_64",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v982",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1545",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1005",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1363",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1534",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1548",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v981",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Schemers_checkBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Schemers_registerForScheme",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Schemers_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Schemers_withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Thief_steal",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "_address",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_allowedToWithdraw",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "_numberOfChildren",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "_parent",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_totalUnder",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_checkBalance0_64",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_Schemers_registerForScheme0_64",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_64",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Thief_steal0_64",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v982",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1545",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620022bd380380620022bd83398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b611fc680620002f76000396000f3fe6080604052600436106100a55760003560e01c80638323075711610061578063832307571461013a578063a98bf2231461014f578063ab53f2c614610162578063c02c653e14610185578063ee90ecaf146101b0578063f7860958146101b857005b80631e93b0f1146100ae5780632c10a159146100d2578063373a43a0146100e55780633bc5b7bf146100fd57806373cf3fbb1461012a57806382b647601461013257005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611989565b6101cb565b6100ed6101ef565b60405190151581526020016100c9565b34801561010957600080fd5b5061011d6101183660046119c1565b61021f565b6040516100c99190611a2f565b6100bf610236565b6100ed610266565b34801561014657600080fd5b506001546100bf565b6100ac61015d366004611989565b610295565b34801561016e57600080fd5b506101776102b5565b6040516100c9929190611a6f565b6101986101933660046119c1565b610352565b6040516001600160a01b0390911681526020016100c9565b6100bf610396565b6100ac6101c6366004611acc565b6103c3565b6101d3611620565b6101eb6101e536849003840184611b87565b826103e3565b5050565b60006101f961164e565b6020810151516003905261020b611620565b610215828261064d565b6080015192915050565b6102276116a4565b6102308261123c565b92915050565b600061024061164e565b60208101515160029052610252611620565b61025c828261064d565b6060015192915050565b60006102706116c3565b602081015160009052610281611620565b61028b828261133e565b6040015192915050565b61029d611620565b6101eb6102af36849003840184611bbd565b8261133e565b6000606060005460028080546102ca90611c15565b80601f01602080910402602001604051908101604052809291908181526020018280546102f690611c15565b80156103435780601f1061031857610100808354040283529160200191610343565b820191906000526020600020905b81548152906001019060200180831161032657829003601f168201915b50505050509050915091509091565b600061035c61164e565b60208101805151600190525151604001516001600160a01b0384169052610381611620565b61038b828261064d565b602001519392505050565b60006103a061164e565b602081015151600090526103b2611620565b6103bc828261064d565b5192915050565b6103cb611620565b6101eb6103dd36849003840184611c4a565b8261064d565b6103f3600160005414600a61150e565b815161040e90158061040757508251600154145b600b61150e565b60008080556002805461042090611c15565b80601f016020809104026020016040519081016040528092919081815260200182805461044c90611c15565b80156104995780601f1061046e57610100808354040283529160200191610499565b820191906000526020600020905b81548152906001019060200180831161047c57829003601f168201915b50505050508060200190518101906104b19190611d14565b90506104bb6116ed565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161050e3415600861150e565b8151610526906001600160a01b03163314600961150e565b815181516001600160a01b0391821690528151600060209182018190528351604090810182905285518551908516606091820152855160809081018490528751861684526004808652838520805460ff1916600190811790915588518a518916875295859020865191810180546001600160a01b0319908116938b1693909317905596860151600288015593850151600387015591840151918501805490931691909516179055909101516005909101556105df611700565b825181516001600160a01b039091169052602080840151825190910152604083015160608401516106109190611da7565b81516040908101919091528251825160600152602080830180516001905280514392019190915251600091015261064681611533565b5050505050565b61065d600460005414601961150e565b815161067890158061067157508251600154145b601a61150e565b60008080556002805461068a90611c15565b80601f01602080910402602001604051908101604052809291908181526020018280546106b690611c15565b80156107035780601f106106d857610100808354040283529160200191610703565b820191906000526020600020905b8154815290600101906020018083116106e657829003601f168201915b505050505080602001905181019061071b9190611dbf565b9050610725611736565b61073682604001514310601b61150e565b7f89317329789c1fb262ab1761df014da49e66777d7718dc8fd425270b6e2d34373385604051610767929190611e77565b60405180910390a16000602085015151516003811115610789576107896119de565b14156109005761079b3415600c61150e565b6107a43361123c565b8152600081515160018111156107bc576107bc6119de565b14156107ce57600060208201526107f2565b600181515160018111156107e4576107e46119de565b14156107f257600160208201525b6108018160200151600d61150e565b7fa0d1cc3194d1cd0897bcf4aee2618efe2fc6b260bae0861abd254af605c34e7f60018251516001811115610838576108386119de565b1461084757826060015161084e565b8151604001515b6020015160405161086191815260200190565b60405180910390a16001815151600181111561087f5761087f6119de565b1461088e578160600151610895565b8051604001515b6020015183526108a3611700565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101528183018051600190528051439301929092526080850151915101526108fa81611533565b50611236565b600160208501515151600381111561091a5761091a6119de565b1415610d11576020808501515160409081015190830152820151610941903414600e61150e565b6040513381527fc7e699dead3591a61e4676419ae0a036782f49abe2d2573a1af150d3e354131b9060200160405180910390a1336020840152600160408201515161098b9061123c565b51600181111561099d5761099d6119de565b146109ac5781606001516109c0565b6040810151516109bb9061123c565b604001515b606082015281516109eb906001600160a01b031633146109e15760016109e4565b60005b600f61150e565b6109f43361123c565b60808201819052516000906001811115610a1057610a106119de565b1415610a2257600160a0820152610a49565b60016080820151516001811115610a3b57610a3b6119de565b1415610a4957600060a08201525b610a588160a00151601061150e565b610a6e600282606001516040015110601161150e565b60016080820151516001811115610a8757610a876119de565b14610a96578160600151610aa0565b8060800151604001515b60c08201526060810180515160e08301516001600160a01b03909116905260208084015191510151610ad29190611da7565b60e082015160200152606081015160400151610af090600190611da7565b60e082018051604001919091526060808301805182015192516001600160a01b0390931692909101919091525160800151610b2d90600190611da7565b60e082015160800152604080820151516001600160a01b0316600090815260046020522080546001919060ff19168280021790555060e081015160408083018051516001600160a01b039081166000908152600460208181528583208751600180830180549288166001600160a01b0319938416179055838a01516002840155888a015160038401556060808b01518487018054918a1691909416179092556080998a01516005909301929092556101008a018051339081905260c08c018051860151835187015280518b015183518c0152985151825198169790920196909652955188015194519097019390935292815291905220805460ff1916828002179055506101008101513360009081526004602081815260409283902084516001820180546001600160a01b03199081166001600160a01b03938416179091559286015160028301559385015160038201556060850151928101805490921692909316919091179055608090910151600590910155610ca9611700565b825181516001600160a01b0390911690526020808401805183518301526040808601518451909101526060808601518451909101528183018051600190525143920191909152516080840151610cff9190611da7565b6020820151604001526108fa81611533565b6002602085015151516003811115610d2b57610d2b6119de565b141561115857610d3d3415601261150e565b6001610d483361123c565b516001811115610d5a57610d5a6119de565b14610d69578160600151610d77565b610d723361123c565b604001515b6101208201526001610d918261012001516060015161123c565b516001811115610da357610da36119de565b14610db2578160600151610dc9565b610dc48161012001516060015161123c565b604001515b6101408201528151610df5906001600160a01b03163314610deb576001610dee565b60005b601361150e565b610e1a60008261012001516020015114610e10576001610e13565b60005b601461150e565b610e326002826101200151604001511015601561150e565b610e478260200151836080015111601661150e565b6064601e82610120015160200151610e5f9190611eed565b610e699190611f0c565b6101608201819052608083015111610e85578160800151610e8c565b8061016001515b6101808201908152610140820151516101a08301516001600160a01b03909116905251610ebb90600290611eed565b81610140015160200151610ecf9190611da7565b6101a082018051602090810192909252610140830180516040908101518351820152815160609081015184516001600160a01b0391821692019190915282516080908101519451019390935290515190911660009081526004909252902080546001919060ff1916828002179055506101a0810151610140820151516001600160a01b0390811660009081526004602081815260408084208651600180830180549289166001600160a01b03199384161790558489015160028401558389015160038401556060808a01518488018054918b16919094161790925560809889015160059093019290925561012089018051516101c08b018051918a169091528051860188905281518501518151860152815183015181519916989092019790975295518701519551909601949094523383525220805460ff1916828002179055506101c081015133600081815260046020818152604080842086516001820180546001600160a01b03199081166001600160a01b039384161790915593880151600283015582880151600383015560608801519482018054909416941693909317909155608090940151600590910155610180840151925191926108fc811502929091818181858888f193505050501580156110af573d6000803e3d6000fd5b507fdb313ebee4b58d42b9907c036933c21f0331e70173d1f7e86e75580fc07b8f178161018001516040516110e691815260200190565b60405180910390a16101808101516060840152611101611700565b825181516001600160a01b039091169052602080840151825182015260408085015183519091015260608085015183519091015280820180516001905251439101526101808201516080840151610cff9190611f2e565b6003602085015151516003811115611172576111726119de565b1415611236576111843415601761150e565b815161119c906001600160a01b03163314601861150e565b604051600181527fc2c188967ff7d97468a07ec619b7c4d73135b00af56504ff23ed4f7feb7022df9060200160405180910390a1600160808401526111df611700565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101528183018051600090528051439301929092526080850151915101526108fa81611533565b50505050565b6112446116a4565b60016001600160a01b03831660009081526004602052604090205460ff166001811115611273576112736119de565b141561132e576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156112b4576112b46119de565b60018111156112c5576112c56119de565b81528154610100900460ff1615156020808301919091526040805160a08101825260018501546001600160a01b03908116825260028601549382019390935260038501548183015260048501549092166060830152600590930154608082015291015292915050565b600080825260208201525b919050565b61134e600460005414601d61150e565b815161136990158061136257508251600154145b601e61150e565b60008080556002805461137b90611c15565b80601f01602080910402602001604051908101604052809291908181526020018280546113a790611c15565b80156113f45780601f106113c9576101008083540402835291602001916113f4565b820191906000526020600020905b8154815290600101906020018083116113d757829003601f168201915b505050505080602001905181019061140c9190611dbf565b90506114208160400151431015601f61150e565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16114743415601c61150e565b604051600181527f028a4359c0fffeda441e814171bfd9cc2c19ea232bd3fa2e076180dd1fbd64449060200160405180910390a1600160408301526114b7611700565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085015184519091015281830180516000905280514393019290925260808401519151015261123681611533565b816101eb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156115c3576115466117ee565b8151516001600160a01b031681528151602090810151818301528251604090810151818401528351606090810151908401528184015181015160808401526004600055436001555161159a91839101611f45565b604051602081830303815290604052600290805190602001906115be92919061182c565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611606573d6000803e3d6000fd5b506000808055600181905561161d906002906118b0565b50565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60405180604001604052806000815260200161169f6040805160c08101825260006020808301828152838501839052845191820190945281815260608301526080820181905260a082015290815290565b905290565b604080516060810182526000808252602082015290810161169f6118ea565b60405180604001604052806000815260200161169f60405180602001604052806000151581525090565b604051806020016040528061169f6118ea565b604051806040016040528061171361192b565b815260408051606081018252600080825260208281018290529282015291015290565b604051806101e0016040528061174a6116a4565b815260006020808301829052604080519182018152918152908201526060016117716118ea565b815260200161177e6116a4565b8152600060208201526040016117926118ea565b815260200161179f6118ea565b81526020016117ac6118ea565b81526020016117b96118ea565b81526020016117c66118ea565b815260200160008152602001600081526020016117e16118ea565b815260200161169f6118ea565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200161181f6118ea565b8152602001600081525090565b82805461183890611c15565b90600052602060002090601f01602090048101928261185a57600085556118a0565b82601f1061187357805160ff19168380011785556118a0565b828001600101855582156118a0579182015b828111156118a0578251825591602001919060010190611885565b506118ac92915061195c565b5090565b5080546118bc90611c15565b6000825580601f106118cc575050565b601f01602090049060005260206000209081019061161d919061195c565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200161169f6118ea565b5b808211156118ac576000815560010161195d565b60006040828403121561198357600080fd5b50919050565b60006040828403121561199b57600080fd5b6119a58383611971565b9392505050565b6001600160a01b038116811461161d57600080fd5b6000602082840312156119d357600080fd5b81356119a5816119ac565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b039081168352602080830151908401526040808301519084015260608083015190911690830152608090810151910152565b815160e082019060028110611a4657611a466119de565b808352506020830151151560208301526040830151611a6860408401826119f4565b5092915050565b82815260006020604081840152835180604085015260005b81811015611aa357858101830151858201606001528201611a87565b81811115611ab5576000606083870101525b50601f01601f191692909201606001949350505050565b600060c0828403121561198357600080fd5b6040805190810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff81118282101715611b0f57634e487b7160e01b600052604160045260246000fd5b8035801515811461133957600080fd5b600060408284031215611b9957600080fd5b611ba1611ade565b82358152611bb160208401611b77565b60208201529392505050565b60008183036040811215611bd057600080fd5b611bd8611ade565b833581526020601f1983011215611bee57600080fd5b611bf6611b15565b9150611c0460208501611b77565b825260208101919091529392505050565b600181811c90821680611c2957607f821691505b6020821081141561198357634e487b7160e01b600052602260045260246000fd5b600081830360c0811215611c5d57600080fd5b611c65611ade565b8335815260a0601f1983011215611c7b57600080fd5b611c83611b15565b611c8b611b46565b602086013560048110611c9d57600080fd5b8152611cab60408701611b77565b60208201526020605f1985011215611cc257600080fd5b611cca611b15565b93506060860135611cda816119ac565b845260408101849052611cef60808701611b77565b6060820152611d0060a08701611b77565b608082015281526020820152949350505050565b600060808284031215611d2657600080fd5b6040516080810181811067ffffffffffffffff82111715611d5757634e487b7160e01b600052604160045260246000fd5b6040528251611d65816119ac565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611dba57611dba611d91565b500190565b6000818303610120811215611dd357600080fd5b611ddb611b46565b8351611de6816119ac565b8152602084810151908201526040808501519082015260a0605f1983011215611e0e57600080fd5b611e16611b46565b91506060840151611e26816119ac565b82526080840151602083015260a0840151604083015260c0840151611e4a816119ac565b8060608401525060e084015160808301528160608201526101008401516080820152809250505092915050565b6001600160a01b038381168252825160208084019190915283015151805160e0840192919060048110611eac57611eac6119de565b80604086015250602081015115156060850152816040820151511660808501526060810151151560a08501526080810151151560c085015250509392505050565b6000816000190483118215151615611f0757611f07611d91565b500290565b600082611f2957634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611f4057611f40611d91565b500390565b81516001600160a01b031681526020808301519082015260408083015190820152606080830151610120830191611f7e908401826119f4565b5060808301516101008301529291505056fea2646970667358221220f3c5783e9f88d91ac804134fb86ba436fb30ca5a48293477196f45d26d66fa3664736f6c634300080c0033`,
  BytecodeLen: 8893,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:188:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:53:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Schemers_checkBalance": Schemers_checkBalance,
  "Schemers_registerForScheme": Schemers_registerForScheme,
  "Schemers_timesUp": Schemers_timesUp,
  "Schemers_withdraw": Schemers_withdraw,
  "Thief_steal": Thief_steal
  };
export const _APIs = {
  Schemers: {
    checkBalance: Schemers_checkBalance,
    registerForScheme: Schemers_registerForScheme,
    timesUp: Schemers_timesUp,
    withdraw: Schemers_withdraw
    },
  Thief: {
    steal: Thief_steal
    }
  };
