// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
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
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc1
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  const map2_ctc = ctc6;
  
  const map3_ctc = ctc6;
  
  const map4_ctc = ctc5;
  
  const map5_ctc = ctc6;
  
  
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
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Tuple([ctc4, ctc5, ctc6, ctc6, ctc5, ctc6]);
  return {
    mapDataTy: ctc7
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
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Schemers_checkBalance0_63: ctc7,
    Schemers_joinPyramid0_63: ctc8,
    Schemers_withdraw0_63: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc11 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc6;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: false,
    ty: map5_ctc
    });
  
  
  const v851 = stdlib.protect(ctc2, interact.deadline, 'for Deployer\'s interact field deadline');
  const v852 = stdlib.protect(ctc2, interact.price, 'for Deployer\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v852, v851],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:56:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [v856, v857], secs: v859, time: v858, didSend: v29, from: v855 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v856, v857], secs: v859, time: v858, didSend: v29, from: v855 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v855, v856, v857, v858],
    evt_cnt: 0,
    funcNum: 1,
    lct: v858,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:58:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [], secs: v862, time: v861, didSend: v34, from: v860 } = txn2;
      
      ;
      const v870 = stdlib.add(v858, v857);
      
      await stdlib.simMapSet(sim_r, 1, v855, v855);
      await stdlib.simMapSet(sim_r, 4, v855, v855);
      await stdlib.simMapSet(sim_r, 5, v855, stdlib.checkedBigNumberify('./index.rsh:92:24:decimal', stdlib.UInt_max, '0'));
      const v873 = {
        address: v855,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        parent: v855,
        totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.simMapSet(sim_r, 0, v855, v873);
      const v875 = true;
      const v877 = v861;
      const v884 = stdlib.checkedBigNumberify('./index.rsh:49:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v875;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v855,
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
  const {data: [], secs: v862, time: v861, didSend: v34, from: v860 } = txn2;
  ;
  const v863 = stdlib.addressEq(v855, v860);
  stdlib.assert(v863, {
    at: './index.rsh:58:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v870 = stdlib.add(v858, v857);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:62:19:application',
    fs: ['at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)', 'at ./index.rsh:62:19:application call to "liftedInteract" (defined at: ./index.rsh:62:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  await stdlib.mapSet(map1, v855, v855);
  await stdlib.mapSet(map4, v855, v855);
  await stdlib.mapSet(map5, v855, stdlib.checkedBigNumberify('./index.rsh:92:24:decimal', stdlib.UInt_max, '0'));
  const v873 = {
    address: v855,
    allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    parent: v855,
    totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  await stdlib.mapSet(map0, v855, v873);
  let v875 = true;
  let v877 = v861;
  let v884 = stdlib.checkedBigNumberify('./index.rsh:49:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v875;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: ['time', v870],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1422], secs: v1424, time: v1423, didSend: v819, from: v1421 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1425 = true;
      await txn4.getOutput('Schemers_timesUp', 'v1425', ctc11, v1425);
      const cv875 = false;
      const cv877 = v1423;
      const cv884 = v884;
      
      v875 = cv875;
      v877 = cv877;
      v884 = cv884;
      
      continue;
      }
    else {
      const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn3;
      switch (v959[0]) {
        case 'Schemers_checkBalance0_63': {
          const v962 = v959[1];
          undefined /* setApiDetails */;
          ;
          const v973 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v958), null);
          let v974;
          switch (v973[0]) {
            case 'None': {
              const v975 = v973[1];
              v974 = false;
              
              break;
              }
            case 'Some': {
              const v976 = v973[1];
              v974 = true;
              
              break;
              }
            }
          stdlib.assert(v974, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:135:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:36:application call to "user_balance" (defined at: ./index.rsh:134:43:function exp)', 'at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)'],
            msg: 'Not a member',
            who: 'Deployer'
            });
          const v978 = stdlib.addressEq(v958, v855);
          const v979 = v978 ? false : true;
          stdlib.assert(v979, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:36:application call to "user_balance" (defined at: ./index.rsh:134:43:function exp)', 'at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)'],
            msg: 'Unable to check balance',
            who: 'Deployer'
            });
          const v983 = stdlib.fromSome(v973, v873);
          const v984 = v983.allowedToWithdraw;
          await txn3.getOutput('Schemers_checkBalance', 'v984', ctc2, v984);
          const cv875 = true;
          const cv877 = v960;
          const cv884 = v884;
          
          v875 = cv875;
          v877 = cv877;
          v884 = cv884;
          
          continue;
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1114 = v959[1];
          undefined /* setApiDetails */;
          const v1123 = stdlib.add(v884, v856);
          ;
          const v1144 = v1114[stdlib.checkedBigNumberify('./index.rsh:170:9:spread', stdlib.UInt_max, '0')];
          await txn3.getOutput('Schemers_joinPyramid', 'v958', ctc1, v958);
          const v1151 = stdlib.addressEq(v958, v855);
          const v1152 = v1151 ? false : true;
          stdlib.assert(v1152, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:24:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
            msg: 'cannot register as deployer',
            who: 'Deployer'
            });
          const v1154 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v958), null);
          let v1155;
          switch (v1154[0]) {
            case 'None': {
              const v1156 = v1154[1];
              v1155 = true;
              
              break;
              }
            case 'Some': {
              const v1157 = v1154[1];
              v1155 = false;
              
              break;
              }
            }
          stdlib.assert(v1155, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:106:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:24:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
            msg: 'Already a member sorry',
            who: 'Deployer'
            });
          const v1159 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1144), null);
          const v1160 = stdlib.fromSome(v1159, stdlib.checkedBigNumberify('./index.rsh:108:49:decimal', stdlib.UInt_max, '0'));
          const v1161 = stdlib.lt(v1160, stdlib.checkedBigNumberify('./index.rsh:108:54:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1161, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:107:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:24:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
            msg: 'No empty slots for that user',
            who: 'Deployer'
            });
          const v1163 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1144), null);
          const v1165 = stdlib.fromSome(v1163, v873);
          const v1168 = stdlib.fromSome(v1154, v873);
          const v1169 = v1165.address;
          const v1170 = v1165.allowedToWithdraw;
          const v1171 = v1165.numberOfChildren;
          const v1172 = v1165.parent;
          const v1173 = v1165.totalUnder;
          const v1175 = stdlib.add(v1171, stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, '1'));
          const v1177 = stdlib.add(v1173, stdlib.checkedBigNumberify('./index.rsh:122:45:decimal', stdlib.UInt_max, '1'));
          const v1179 = stdlib.add(v1170, v856);
          const v1180 = {
            address: v1169,
            allowedToWithdraw: v1179,
            numberOfChildren: v1175,
            parent: v1172,
            totalUnder: v1177
            };
          await stdlib.mapSet(map0, v1144, v1180);
          const v1182 = v1168.allowedToWithdraw;
          const v1183 = v1168.numberOfChildren;
          const v1185 = v1168.totalUnder;
          const v1186 = {
            address: v958,
            allowedToWithdraw: v1182,
            numberOfChildren: v1183,
            parent: v1144,
            totalUnder: v1185
            };
          await stdlib.mapSet(map0, v958, v1186);
          const cv875 = true;
          const cv877 = v960;
          const cv884 = v1123;
          
          v875 = cv875;
          v877 = cv877;
          v884 = cv884;
          
          continue;
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1266 = v959[1];
          undefined /* setApiDetails */;
          ;
          const v1344 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v958), null);
          const v1346 = stdlib.fromSome(v1344, v873);
          const v1347 = v1346.parent;
          const v1348 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1347), null);
          const v1350 = stdlib.fromSome(v1348, v873);
          const v1351 = stdlib.addressEq(v958, v855);
          const v1352 = v1351 ? false : true;
          stdlib.assert(v1352, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:145:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
            msg: 'You cannot withdraw as deployer',
            who: 'Deployer'
            });
          const v1354 = v1346.allowedToWithdraw;
          const v1355 = stdlib.eq(v1354, stdlib.checkedBigNumberify('./index.rsh:146:43:decimal', stdlib.UInt_max, '0'));
          const v1356 = v1355 ? false : true;
          stdlib.assert(v1356, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
            msg: 'Insufficient Balance',
            who: 'Deployer'
            });
          const v1358 = v1350.numberOfChildren;
          const v1359 = stdlib.ge(v1358, stdlib.checkedBigNumberify('./index.rsh:147:42:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1359, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
            msg: 'Need at least two down lines',
            who: 'Deployer'
            });
          const v1362 = stdlib.gt(v884, v856);
          stdlib.assert(v1362, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          const v1365 = stdlib.mul(v1354, stdlib.checkedBigNumberify('./index.rsh:150:49:decimal', stdlib.UInt_max, '30'));
          const v1366 = stdlib.div(v1365, stdlib.checkedBigNumberify('./index.rsh:150:55:decimal', stdlib.UInt_max, '100'));
          const v1368 = stdlib.gt(v884, v1366);
          const v1369 = v1368 ? v1366 : v884;
          const v1373 = stdlib.sub(v884, v1369);
          ;
          const v1374 = v1350.address;
          const v1376 = v1350.allowedToWithdraw;
          const v1378 = v1350.parent;
          const v1379 = v1350.totalUnder;
          const v1381 = stdlib.mul(v1369, stdlib.checkedBigNumberify('./index.rsh:156:70:decimal', stdlib.UInt_max, '2'));
          const v1382 = stdlib.add(v1376, v1381);
          const v1383 = {
            address: v1374,
            allowedToWithdraw: v1382,
            numberOfChildren: v1358,
            parent: v1378,
            totalUnder: v1379
            };
          await stdlib.mapSet(map0, v1374, v1383);
          const v1384 = v1346.address;
          const v1386 = v1346.numberOfChildren;
          const v1388 = v1346.totalUnder;
          const v1389 = {
            address: v1384,
            allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            numberOfChildren: v1386,
            parent: v1347,
            totalUnder: v1388
            };
          await stdlib.mapSet(map0, v958, v1389);
          const v1398 = [v1346, v1389];
          await txn3.getOutput('Schemers_withdraw', 'v1398', ctc10, v1398);
          const cv875 = true;
          const cv877 = v960;
          const cv884 = v1373;
          
          v875 = cv875;
          v877 = cv877;
          v884 = cv884;
          
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
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Schemers_checkBalance0_63: ctc7,
    Schemers_joinPyramid0_63: ctc8,
    Schemers_withdraw0_63: ctc7
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc6;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  
  const [v855, v856, v870, v873, v884] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v910 = ctc.selfAddress();
  const v912 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:183:10:application call to [unknown function] (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:181:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'in',
    who: 'Schemers_checkBalance'
    });
  const v914 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v910), null);
  let v915;
  switch (v914[0]) {
    case 'None': {
      const v916 = v914[1];
      v915 = false;
      
      break;
      }
    case 'Some': {
      const v917 = v914[1];
      v915 = true;
      
      break;
      }
    }
  stdlib.assert(v915, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:135:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:31:application call to "user_balance" (defined at: ./index.rsh:134:43:function exp)', 'at ./index.rsh:183:10:application call to [unknown function] (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:183:10:application call to [unknown function] (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:181:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'Not a member',
    who: 'Schemers_checkBalance'
    });
  const v919 = stdlib.addressEq(v910, v855);
  const v920 = v919 ? false : true;
  stdlib.assert(v920, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:184:31:application call to "user_balance" (defined at: ./index.rsh:134:43:function exp)', 'at ./index.rsh:183:10:application call to [unknown function] (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:183:10:application call to [unknown function] (defined at: ./index.rsh:183:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:181:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'Unable to check balance',
    who: 'Schemers_checkBalance'
    });
  const v924 = ['Schemers_checkBalance0_63', v912];
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v856, v870, v873, v884, v924],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:186:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn1;
      
      switch (v959[0]) {
        case 'Schemers_checkBalance0_63': {
          const v962 = v959[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_checkBalance"
            });
          ;
          const v973 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v958), null);
          const v983 = stdlib.fromSome(v973, v873);
          const v984 = v983.allowedToWithdraw;
          const v985 = await txn1.getOutput('Schemers_checkBalance', 'v984', ctc2, v984);
          
          const v1849 = v884;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1114 = v959[1];
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1266 = v959[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn1;
  switch (v959[0]) {
    case 'Schemers_checkBalance0_63': {
      const v962 = v959[1];
      undefined /* setApiDetails */;
      ;
      const v973 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v958), null);
      let v974;
      switch (v973[0]) {
        case 'None': {
          const v975 = v973[1];
          v974 = false;
          
          break;
          }
        case 'Some': {
          const v976 = v973[1];
          v974 = true;
          
          break;
          }
        }
      stdlib.assert(v974, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:135:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:36:application call to "user_balance" (defined at: ./index.rsh:134:43:function exp)', 'at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)'],
        msg: 'Not a member',
        who: 'Schemers_checkBalance'
        });
      const v978 = stdlib.addressEq(v958, v855);
      const v979 = v978 ? false : true;
      stdlib.assert(v979, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:136:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:188:36:application call to "user_balance" (defined at: ./index.rsh:134:43:function exp)', 'at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)'],
        msg: 'Unable to check balance',
        who: 'Schemers_checkBalance'
        });
      const v983 = stdlib.fromSome(v973, v873);
      const v984 = v983.allowedToWithdraw;
      const v985 = await txn1.getOutput('Schemers_checkBalance', 'v984', ctc2, v984);
      if (v517) {
        stdlib.protect(ctc0, await interact.out(v962, v985), {
          at: './index.rsh:182:7:application',
          fs: ['at ./index.rsh:182:7:application call to [unknown function] (defined at: ./index.rsh:182:7:function exp)', 'at ./index.rsh:189:10:application call to "k" (defined at: ./index.rsh:187:11:function exp)', 'at ./index.rsh:187:11:application call to [unknown function] (defined at: ./index.rsh:187:11:function exp)'],
          msg: 'out',
          who: 'Schemers_checkBalance'
          });
        }
      else {
        }
      
      const v1849 = v884;
      return;
      
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1114 = v959[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1266 = v959[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Schemers_joinPyramid4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Schemers_joinPyramid4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Schemers_joinPyramid4 expects to receive an interact object as its second argument.`));}
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
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Schemers_checkBalance0_63: ctc8,
    Schemers_joinPyramid0_63: ctc7,
    Schemers_withdraw0_63: ctc8
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc6;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  
  const [v855, v856, v870, v873, v884] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v887 = ctc.selfAddress();
  const v889 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:170:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'in',
    who: 'Schemers_joinPyramid'
    });
  const v890 = v889[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v893 = stdlib.addressEq(v887, v855);
  const v894 = v893 ? false : true;
  stdlib.assert(v894, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:27:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:170:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'cannot register as deployer',
    who: 'Schemers_joinPyramid'
    });
  const v896 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v887), null);
  let v897;
  switch (v896[0]) {
    case 'None': {
      const v898 = v896[1];
      v897 = true;
      
      break;
      }
    case 'Some': {
      const v899 = v896[1];
      v897 = false;
      
      break;
      }
    }
  stdlib.assert(v897, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:106:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:27:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:170:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'Already a member sorry',
    who: 'Schemers_joinPyramid'
    });
  const v901 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v890), null);
  const v902 = stdlib.fromSome(v901, stdlib.checkedBigNumberify('./index.rsh:108:49:decimal', stdlib.UInt_max, '0'));
  const v903 = stdlib.lt(v902, stdlib.checkedBigNumberify('./index.rsh:108:54:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v903, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:107:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:27:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:170:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'No empty slots for that user',
    who: 'Schemers_joinPyramid'
    });
  const v908 = ['Schemers_joinPyramid0_63', v889];
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v856, v870, v873, v884, v908],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v856, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn1;
      
      switch (v959[0]) {
        case 'Schemers_checkBalance0_63': {
          const v962 = v959[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1114 = v959[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_joinPyramid"
            });
          const v1123 = stdlib.add(v884, v856);
          sim_r.txns.push({
            amt: v856,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1144 = v1114[stdlib.checkedBigNumberify('./index.rsh:170:9:spread', stdlib.UInt_max, '0')];
          const v1145 = await txn1.getOutput('Schemers_joinPyramid', 'v958', ctc1, v958);
          
          const v1154 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v958), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1144), null);
          const v1163 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1144), null);
          const v1165 = stdlib.fromSome(v1163, v873);
          const v1168 = stdlib.fromSome(v1154, v873);
          const v1169 = v1165.address;
          const v1170 = v1165.allowedToWithdraw;
          const v1171 = v1165.numberOfChildren;
          const v1172 = v1165.parent;
          const v1173 = v1165.totalUnder;
          const v1175 = stdlib.add(v1171, stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, '1'));
          const v1177 = stdlib.add(v1173, stdlib.checkedBigNumberify('./index.rsh:122:45:decimal', stdlib.UInt_max, '1'));
          const v1179 = stdlib.add(v1170, v856);
          const v1180 = {
            address: v1169,
            allowedToWithdraw: v1179,
            numberOfChildren: v1175,
            parent: v1172,
            totalUnder: v1177
            };
          await stdlib.simMapSet(sim_r, 0, v1144, v1180);
          const v1182 = v1168.allowedToWithdraw;
          const v1183 = v1168.numberOfChildren;
          const v1185 = v1168.totalUnder;
          const v1186 = {
            address: v958,
            allowedToWithdraw: v1182,
            numberOfChildren: v1183,
            parent: v1144,
            totalUnder: v1185
            };
          await stdlib.simMapSet(sim_r, 0, v958, v1186);
          const v1861 = v1123;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1266 = v959[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn1;
  switch (v959[0]) {
    case 'Schemers_checkBalance0_63': {
      const v962 = v959[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1114 = v959[1];
      undefined /* setApiDetails */;
      const v1123 = stdlib.add(v884, v856);
      ;
      const v1144 = v1114[stdlib.checkedBigNumberify('./index.rsh:170:9:spread', stdlib.UInt_max, '0')];
      const v1145 = await txn1.getOutput('Schemers_joinPyramid', 'v958', ctc1, v958);
      if (v517) {
        stdlib.protect(ctc0, await interact.out(v1114, v1145), {
          at: './index.rsh:171:7:application',
          fs: ['at ./index.rsh:171:7:application call to [unknown function] (defined at: ./index.rsh:171:7:function exp)', 'at ./index.rsh:177:10:application call to "k" (defined at: ./index.rsh:176:14:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
          msg: 'out',
          who: 'Schemers_joinPyramid'
          });
        }
      else {
        }
      
      const v1151 = stdlib.addressEq(v958, v855);
      const v1152 = v1151 ? false : true;
      stdlib.assert(v1152, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:105:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:24:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
        msg: 'cannot register as deployer',
        who: 'Schemers_joinPyramid'
        });
      const v1154 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v958), null);
      let v1155;
      switch (v1154[0]) {
        case 'None': {
          const v1156 = v1154[1];
          v1155 = true;
          
          break;
          }
        case 'Some': {
          const v1157 = v1154[1];
          v1155 = false;
          
          break;
          }
        }
      stdlib.assert(v1155, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:106:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:24:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
        msg: 'Already a member sorry',
        who: 'Schemers_joinPyramid'
        });
      const v1159 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1144), null);
      const v1160 = stdlib.fromSome(v1159, stdlib.checkedBigNumberify('./index.rsh:108:49:decimal', stdlib.UInt_max, '0'));
      const v1161 = stdlib.lt(v1160, stdlib.checkedBigNumberify('./index.rsh:108:54:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1161, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:107:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:24:application call to "register" (defined at: ./index.rsh:104:55:function exp)', 'at ./index.rsh:176:14:application call to [unknown function] (defined at: ./index.rsh:176:14:function exp)'],
        msg: 'No empty slots for that user',
        who: 'Schemers_joinPyramid'
        });
      const v1163 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1144), null);
      const v1165 = stdlib.fromSome(v1163, v873);
      const v1168 = stdlib.fromSome(v1154, v873);
      const v1169 = v1165.address;
      const v1170 = v1165.allowedToWithdraw;
      const v1171 = v1165.numberOfChildren;
      const v1172 = v1165.parent;
      const v1173 = v1165.totalUnder;
      const v1175 = stdlib.add(v1171, stdlib.checkedBigNumberify('./index.rsh:121:57:decimal', stdlib.UInt_max, '1'));
      const v1177 = stdlib.add(v1173, stdlib.checkedBigNumberify('./index.rsh:122:45:decimal', stdlib.UInt_max, '1'));
      const v1179 = stdlib.add(v1170, v856);
      const v1180 = {
        address: v1169,
        allowedToWithdraw: v1179,
        numberOfChildren: v1175,
        parent: v1172,
        totalUnder: v1177
        };
      await stdlib.mapSet(map0, v1144, v1180);
      const v1182 = v1168.allowedToWithdraw;
      const v1183 = v1168.numberOfChildren;
      const v1185 = v1168.totalUnder;
      const v1186 = {
        address: v958,
        allowedToWithdraw: v1182,
        numberOfChildren: v1183,
        parent: v1144,
        totalUnder: v1185
        };
      await stdlib.mapSet(map0, v958, v1186);
      const v1861 = v1123;
      return;
      
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1266 = v959[1];
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
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc6;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  
  const [v855, v856, v870, v873, v884] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v1420 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:204:7:application',
    fs: ['at ./index.rsh:204:7:application call to [unknown function] (defined at: ./index.rsh:204:7:function exp)', 'at ./index.rsh:203:32:application call to [unknown function] (defined at: ./index.rsh:203:32:function exp)'],
    msg: 'in',
    who: 'Schemers_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v856, v870, v873, v884, v1420],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:204:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [v1422], secs: v1424, time: v1423, didSend: v819, from: v1421 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Schemers_timesUp"
        });
      ;
      const v1425 = true;
      const v1426 = await txn1.getOutput('Schemers_timesUp', 'v1425', ctc8, v1425);
      
      sim_r.txns.push({
        kind: 'from',
        to: v855,
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
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1422], secs: v1424, time: v1423, didSend: v819, from: v1421 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1425 = true;
  const v1426 = await txn1.getOutput('Schemers_timesUp', 'v1425', ctc8, v1425);
  stdlib.protect(ctc0, await interact.out(v1422, v1426), {
    at: './index.rsh:204:7:application',
    fs: ['at ./index.rsh:204:7:application call to [unknown function] (defined at: ./index.rsh:204:7:function exp)', 'at ./index.rsh:205:8:application call to "k" (defined at: ./index.rsh:204:7:function exp)', 'at ./index.rsh:203:32:application call to [unknown function] (defined at: ./index.rsh:203:32:function exp)'],
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
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc6 = stdlib.T_Data({
    None: ctc0,
    Some: ctc2
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Schemers_checkBalance0_63: ctc7,
    Schemers_joinPyramid0_63: ctc8,
    Schemers_withdraw0_63: ctc7
    });
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3]);
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc5;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc6;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc6;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc5;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  const map5_ctc = ctc6;
  const map5 = stdlib.newMap({
    ctc: ctc,
    idx: 5,
    isAPI: true,
    ty: map5_ctc
    });
  
  
  const [v855, v856, v870, v873, v884] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v926 = ctc.selfAddress();
  const v928 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'in',
    who: 'Schemers_withdraw'
    });
  const v930 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v926), null);
  const v932 = stdlib.fromSome(v930, v873);
  const v933 = v932.parent;
  const v934 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v933), null);
  const v936 = stdlib.fromSome(v934, v873);
  const v937 = stdlib.addressEq(v926, v855);
  const v938 = v937 ? false : true;
  stdlib.assert(v938, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:145:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'You cannot withdraw as deployer',
    who: 'Schemers_withdraw'
    });
  const v940 = v932.allowedToWithdraw;
  const v941 = stdlib.eq(v940, stdlib.checkedBigNumberify('./index.rsh:146:43:decimal', stdlib.UInt_max, '0'));
  const v942 = v941 ? false : true;
  stdlib.assert(v942, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'Insufficient Balance',
    who: 'Schemers_withdraw'
    });
  const v944 = v936.numberOfChildren;
  const v945 = stdlib.ge(v944, stdlib.checkedBigNumberify('./index.rsh:147:42:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v945, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: 'Need at least two down lines',
    who: 'Schemers_withdraw'
    });
  const v948 = stdlib.gt(v884, v856);
  stdlib.assert(v948, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:196:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:195:10:application call to [unknown function] (defined at: ./index.rsh:195:10:function exp)', 'at ./index.rsh:96:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:193:9:function exp)', 'at ./index.rsh:96:53:application call to [unknown function] (defined at: ./index.rsh:96:53:function exp)'],
    msg: null,
    who: 'Schemers_withdraw'
    });
  const v952 = ['Schemers_withdraw0_63', v928];
  
  const txn1 = await (ctc.sendrecv({
    args: [v855, v856, v870, v873, v884, v952],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:198:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      stdlib.simMapDupe(sim_r, 5, map5);
      
      const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn1;
      
      switch (v959[0]) {
        case 'Schemers_checkBalance0_63': {
          const v962 = v959[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1114 = v959[1];
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1266 = v959[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_withdraw"
            });
          ;
          const v1344 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v958), null);
          const v1346 = stdlib.fromSome(v1344, v873);
          const v1347 = v1346.parent;
          const v1348 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1347), null);
          const v1350 = stdlib.fromSome(v1348, v873);
          const v1354 = v1346.allowedToWithdraw;
          const v1358 = v1350.numberOfChildren;
          const v1365 = stdlib.mul(v1354, stdlib.checkedBigNumberify('./index.rsh:150:49:decimal', stdlib.UInt_max, '30'));
          const v1366 = stdlib.div(v1365, stdlib.checkedBigNumberify('./index.rsh:150:55:decimal', stdlib.UInt_max, '100'));
          const v1368 = stdlib.gt(v884, v1366);
          const v1369 = v1368 ? v1366 : v884;
          const v1373 = stdlib.sub(v884, v1369);
          sim_r.txns.push({
            kind: 'from',
            to: v958,
            tok: undefined /* Nothing */
            });
          const v1374 = v1350.address;
          const v1376 = v1350.allowedToWithdraw;
          const v1378 = v1350.parent;
          const v1379 = v1350.totalUnder;
          const v1381 = stdlib.mul(v1369, stdlib.checkedBigNumberify('./index.rsh:156:70:decimal', stdlib.UInt_max, '2'));
          const v1382 = stdlib.add(v1376, v1381);
          const v1383 = {
            address: v1374,
            allowedToWithdraw: v1382,
            numberOfChildren: v1358,
            parent: v1378,
            totalUnder: v1379
            };
          await stdlib.simMapSet(sim_r, 0, v1374, v1383);
          const v1384 = v1346.address;
          const v1386 = v1346.numberOfChildren;
          const v1388 = v1346.totalUnder;
          const v1389 = {
            address: v1384,
            allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            numberOfChildren: v1386,
            parent: v1347,
            totalUnder: v1388
            };
          await stdlib.simMapSet(sim_r, 0, v958, v1389);
          const v1398 = [v1346, v1389];
          const v1399 = await txn1.getOutput('Schemers_withdraw', 'v1398', ctc10, v1398);
          
          const v1876 = v1373;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc2, ctc3, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v959], secs: v961, time: v960, didSend: v517, from: v958 } = txn1;
  switch (v959[0]) {
    case 'Schemers_checkBalance0_63': {
      const v962 = v959[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1114 = v959[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1266 = v959[1];
      undefined /* setApiDetails */;
      ;
      const v1344 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v958), null);
      const v1346 = stdlib.fromSome(v1344, v873);
      const v1347 = v1346.parent;
      const v1348 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1347), null);
      const v1350 = stdlib.fromSome(v1348, v873);
      const v1351 = stdlib.addressEq(v958, v855);
      const v1352 = v1351 ? false : true;
      stdlib.assert(v1352, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:145:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
        msg: 'You cannot withdraw as deployer',
        who: 'Schemers_withdraw'
        });
      const v1354 = v1346.allowedToWithdraw;
      const v1355 = stdlib.eq(v1354, stdlib.checkedBigNumberify('./index.rsh:146:43:decimal', stdlib.UInt_max, '0'));
      const v1356 = v1355 ? false : true;
      stdlib.assert(v1356, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:146:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
        msg: 'Insufficient Balance',
        who: 'Schemers_withdraw'
        });
      const v1358 = v1350.numberOfChildren;
      const v1359 = stdlib.ge(v1358, stdlib.checkedBigNumberify('./index.rsh:147:42:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1359, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:147:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
        msg: 'Need at least two down lines',
        who: 'Schemers_withdraw'
        });
      const v1362 = stdlib.gt(v884, v856);
      stdlib.assert(v1362, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:148:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:200:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:142:66:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
        msg: null,
        who: 'Schemers_withdraw'
        });
      const v1365 = stdlib.mul(v1354, stdlib.checkedBigNumberify('./index.rsh:150:49:decimal', stdlib.UInt_max, '30'));
      const v1366 = stdlib.div(v1365, stdlib.checkedBigNumberify('./index.rsh:150:55:decimal', stdlib.UInt_max, '100'));
      const v1368 = stdlib.gt(v884, v1366);
      const v1369 = v1368 ? v1366 : v884;
      const v1373 = stdlib.sub(v884, v1369);
      ;
      const v1374 = v1350.address;
      const v1376 = v1350.allowedToWithdraw;
      const v1378 = v1350.parent;
      const v1379 = v1350.totalUnder;
      const v1381 = stdlib.mul(v1369, stdlib.checkedBigNumberify('./index.rsh:156:70:decimal', stdlib.UInt_max, '2'));
      const v1382 = stdlib.add(v1376, v1381);
      const v1383 = {
        address: v1374,
        allowedToWithdraw: v1382,
        numberOfChildren: v1358,
        parent: v1378,
        totalUnder: v1379
        };
      await stdlib.mapSet(map0, v1374, v1383);
      const v1384 = v1346.address;
      const v1386 = v1346.numberOfChildren;
      const v1388 = v1346.totalUnder;
      const v1389 = {
        address: v1384,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: v1386,
        parent: v1347,
        totalUnder: v1388
        };
      await stdlib.mapSet(map0, v958, v1389);
      const v1398 = [v1346, v1389];
      const v1399 = await txn1.getOutput('Schemers_withdraw', 'v1398', ctc10, v1398);
      if (v517) {
        stdlib.protect(ctc0, await interact.out(v1266, v1399), {
          at: './index.rsh:194:7:application',
          fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:7:function exp)', 'at ./index.rsh:163:20:application call to "confirm" (defined at: ./index.rsh:199:11:function exp)', 'at ./index.rsh:200:51:application call to [unknown function] (defined at: ./index.rsh:149:19:function exp)', 'at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)'],
          msg: 'out',
          who: 'Schemers_withdraw'
          });
        }
      else {
        }
      
      const v1876 = v1373;
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
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_checkBalance4(ctcTop, interact);}
  };
export async function Schemers_joinPyramid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_joinPyramid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_joinPyramid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_joinPyramid4(ctcTop, interact);}
  };
export async function Schemers_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_timesUp4(ctcTop, interact);}
  };
export async function Schemers_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Schemers_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Schemers_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 4, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [4]');
  if (step == 4) {return _Schemers_withdraw4(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Schemers_checkBalance()uint64`, `Schemers_joinPyramid(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()((address,uint64,uint64,address,uint64),(address,uint64,uint64,address,uint64))`],
    pure: [],
    sigs: [`Schemers_checkBalance()uint64`, `Schemers_joinPyramid(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()((address,uint64,uint64,address,uint64),(address,uint64,uint64,address,uint64))`]
    },
  appApproval: `BiANAAEIIAIEKLYBq5jB4w+Zw5juD/GkspwKA4gBJgMBAQEAACI1ADEYQQYgKmRJIls1ASRbNQIxGSMSQQAcMQAhB69LASlLAlcAf2ZLAShLAld/N2ZISEIF2zYaABdJQQBbIjUEIzUGSSEIDEAAH0khCQxAAAghCRJEKkIAXiEIEkQ2GgE1/yg0/1BCAKxJIQoMQAARIQoSRCo1/yk0/1AyA1BCAJSB7ODRkwgSRCo1/4ABAjT/UDIDUEIAfTYaAhc1BDYaAzYaARdJIQsMQAOBSSEFDEAAYSEFEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDIQZbNf9JNQU1/oAE1OAYLTT+ULAyBjT/D0SACQAAAAAAAAWRAbAoNQc0A1cAIDQDJVs0/zQDVzBYIjIGNAMhDFtCBHJIIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/JVs1/iEGWzX9VzBYNfwhDFs1+0k1BTX6gAQUkUDUNPpQsDIGNP0MRDT6IlVJIwxAAl1JIQQMQAE0IQQSRDT8MQCIBMxXAFlJNfhXAVg0+CJVTUk1+VcwIDX4NPw0+IgEr1cAWUk19lcBWDT2IlVNNfcxADT/E0Q0+SVbSTX2RDT3IQZbSTX1IQQPRDT7NP4NRDT2gR4LgWQKNfQ0+zT0NPs09A1NNfOxIrIBNPOyCCOyEDEAsgezNPdXACA18jTySYgETCg08jT3JVs08yEECwgWUDT1FlA091cwIFA091dQCFBQNfFXWV008UxQSwEpSwJXAH9mSwEoSwJXfzdmSEg0+VcAICSvUDT5VygIUDT4UDT5V1AIUDXxMQAxAIgD7yg08VA18FdZXTTwTFBLASlLAlcAf2ZLAShLAld/N2ZISIAIAAAAAAAABXY0+TTxUFCwNPk08VA1BzT/NP40/TT8IzIGNPs08wlCAuNINPpXASA1+TT+iAOtNPk1+IAIAAAAAAAAA74xAFCwMQA1BzEANP8TRDEAiAN1VwBZSTX3IlVAAAYjNfZCAAYiNfZCAAA09kQiNPiIA1VXeglJNfUjWzT1IlVNIQQMRDT8NPiIAz1XAFlJNfRXAVg09CJVTTX1NPw090k181cBWDTzIlVNNfQ0+EmIAxYoNPVXACA09SVbNP4IFlA09SEGWyMIFlA09VcwIFA09YFQWyMIFlBQNfNXWV0080xQSwEpSwJXAH9mSwEoSwJXfzdmSEgxADEAiALKKDEANPRXIAhQNPRXKAhQNPhQNPRXUAhQUDXzV1ldNPNMUEsBKUsCVwB/ZksBKEsCV383ZkhINP80/jT9NPwjMgY0+zT+CEIBwUgxAIgCe1cAWUk1+SJVQAAGIjX4QgAGIzX4QgAANPhEMQA0/xNEgAgAAAAAAAAD2DT8NPlJNfdXAVg09yJVTVcgCFCwNPw0+Uk191cBWDT3IlVNVyAINQc0/zT+NP00/CMyBjT7QgFZSSMMQAEAIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDVwAgNf+ABJqLkXSwNP8xABJENP9JiAHjKDT/UDX+SVcAWTT+UExXejxQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/0mIAbcoNP9QNf5JVwCMNP5QTFetCVBLASlLAlcAf2ZLAShLAld/N2ZISDT/SYgBi4AJAQAAAAAAAAAANf5XAK00/lBLASlLAlcAf2ZLAShLAld/N2ZISDT/JK9QJK9QNP9QJK9QNf40/0mIAU4oNP5QNf1XWV00/UxQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/zQDJVs0A4EwWzQDIQZbCDT+IzIGIkIAU0iBoI0GiAEiIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAyBhZQKUsBVwA4Z0gjNQEyBjUCQgBtNf81/jX9Nfw1+zX6Nfk0/UEAKzT5NPoWUDT7FlA0/FA0/xZQKUsBVwB/ZyhLAVd/EWdIIQU1ATIGNQJCAC+xIrIBNP+yCCOyEDT5sgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCELMTUSRCIxNhJEIQQxNxJEIjUBIjUCQv+tSTEYYUAABUghB6+JSSliSwEoYlBMSIk0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 2,
  mapDataSize: 182,
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
                "name": "v856",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v857",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v856",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v857",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_checkBalance0_63",
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
                    "internalType": "struct T14",
                    "name": "_Schemers_joinPyramid0_63",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_63",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v959",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
                "name": "v1422",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
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
        "components": [
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
            "name": "elem0",
            "type": "tuple"
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
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1398",
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
    "name": "_reach_oe_v1425",
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
    "name": "_reach_oe_v958",
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
    "name": "_reach_oe_v984",
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
    "name": "Schemers_joinPyramid",
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
        "components": [
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
            "name": "elem0",
            "type": "tuple"
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
            "name": "elem1",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "",
        "type": "tuple"
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T2",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T3",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T3",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap4Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T2",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap5Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T3",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T3",
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
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_checkBalance0_63",
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
                    "internalType": "struct T14",
                    "name": "_Schemers_joinPyramid0_63",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_63",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v959",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
                "name": "v1422",
                "type": "bool"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
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
  Bytecode: `0x60806040526040516200288a3803806200288a83398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61259380620002f76000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063cadc2e7a11610056578063cadc2e7a14610261578063dc01fb9d14610281578063ee90ecaf146102a1578063ef3702ab146102a957005b806383230757146101e9578063a98bf223146101fe578063ab53f2c614610211578063acf0cc221461023457005b806373cf3fbb116100bd57806373cf3fbb1461018957806377e591d41461019e578063817d57f3146101b157806382b64760146101d157005b806306dc92ff146100f45780631e93b0f11461012a5780632c10a159146101495780633bc5b7bf1461015c57005b366100f257005b005b34801561010057600080fd5b5061011461010f366004611ea8565b6102d4565b6040516101219190611ef2565b60405180910390f35b34801561013657600080fd5b506003545b604051908152602001610121565b6100f2610157366004611f3a565b610300565b34801561016857600080fd5b5061017c610177366004611ea8565b610324565b6040516101219190611f91565b610191610335565b6040516101219190611fca565b6100f26101ac366004611ff0565b61036b565b3480156101bd57600080fd5b506101146101cc366004611ea8565b61038b565b6101d96103b1565b6040519015158152602001610121565b3480156101f557600080fd5b5060015461013b565b6100f261020c366004611f3a565b6103e0565b34801561021d57600080fd5b50610226610400565b604051610121929190612002565b34801561024057600080fd5b5061025461024f366004611ea8565b61049d565b604051610121919061205f565b34801561026d57600080fd5b5061025461027c366004611ea8565b6104c3565b34801561028d57600080fd5b5061011461029c366004611ea8565b6104e9565b61013b61050f565b6102bc6102b7366004611ea8565b61053c565b6040516001600160a01b039091168152602001610121565b60408051606081018252600080825260208201819052918101919091526102fa82610580565b92915050565b610308611b17565b61032061031a36849003840184612171565b82610653565b5050565b61032c611b4f565b6102fa82610944565b61033d611b6e565b610345611b8e565b60208101515160029052610357611b17565b6103618282610a36565b6060015192915050565b610373611b17565b610320610385368490038401846121a7565b82610a36565b60408051606081018252600080825260208201819052918101919091526102fa826115c2565b60006103bb611bd8565b6020810151600090526103cc611b17565b6103d6828261164f565b6040015192915050565b6103e8611b17565b6103206103fa36849003840184612260565b8261164f565b600060606000546002808054610415906122b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610441906122b8565b801561048e5780601f106104635761010080835404028352916020019161048e565b820191906000526020600020905b81548152906001019060200180831161047157829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102fa8261181f565b60408051606081018252600080825260208201819052918101919091526102fa826118eb565b60408051606081018252600080825260208201819052918101919091526102fa82611978565b6000610519611b8e565b6020810151516000905261052b611b17565b6105358282610a36565b5192915050565b6000610546611b8e565b60208101805151600190525151604001516001600160a01b038416905261056b611b17565b6105758282610a36565b602001519392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156105cc576105cc611ecc565b1415610643576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff16600181111561060d5761060d611ecc565b600181111561061e5761061e611ecc565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610663600160005414600a611a05565b815161067e90158061067757508251600154145b600b611a05565b600080805560028054610690906122b8565b80601f01602080910402602001604051908101604052809291908181526020018280546106bc906122b8565b80156107095780601f106106de57610100808354040283529160200191610709565b820191906000526020600020905b8154815290600101906020018083116106ec57829003601f168201915b505050505080602001905181019061072191906122ed565b905061072b611c02565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161077e34156008611a05565b8151610796906001600160a01b031633146009611a05565b81516001600160a01b0390811660009081526005602081815260408084208054600160ff19918216811790925588518716808752838720805462010000600160b01b031990811662010000938402179091558a51891688526008865284882080548416851790558a518916808952858920805490921692029190911790558851871686526009845282862080548216831790558851871686528286208201869055885188519088169052875184018690528751830186905288518851908816606091820152885160809081018890528a518916885260048087528589208054909416851790935589518b518a1689529785902088519481018054958b166001600160a01b031996871617905595880151600287015593870151600386015586015190840180549190971691161790945591909201519101556108d6611c15565b825181516001600160a01b039091169052602080840151825190910152604083015160608401516109079190612380565b81516040908101919091528251825160600152602080830180516001905280514392019190915251600091015261093d81611a2a565b5050505050565b61094c611b4f565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561097b5761097b611ecc565b1415610643576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156109bc576109bc611ecc565b60018111156109cd576109cd611ecc565b81528154610100900460ff1615156020808301919091526040805160a08101825260018501546001600160a01b03908116825260028601549382019390935260038501548183015260048501549092166060830152600590930154608082015291015292915050565b610a466004600054146018611a05565b8151610a61901580610a5a57508251600154145b6019611a05565b600080805560028054610a73906122b8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9f906122b8565b8015610aec5780601f10610ac157610100808354040283529160200191610aec565b820191906000526020600020905b815481529060010190602001808311610acf57829003601f168201915b5050505050806020019051810190610b049190612398565b9050610b0e611c4b565b610b1f82604001514310601a611a05565b7f8c12f02212ada7fc3de06e01a117304a130f6887cb28d15457948cb42bf690ac3385604051610b50929190612450565b60405180910390a16000602085015151516002811115610b7257610b72611ecc565b1415610d0f57610b843415600c611a05565b610b8d33610944565b815260008151516001811115610ba557610ba5611ecc565b1415610bb75760006020820152610bdb565b60018151516001811115610bcd57610bcd611ecc565b1415610bdb57600160208201525b610bea8160200151600d611a05565b8151610c10906001600160a01b03163314610c06576001610c09565b60005b600e611a05565b7f5e281df41ab978ba7fce9a1d9109ce6764710c39a3882599c24aff97754bdb9b60018251516001811115610c4757610c47611ecc565b14610c56578260600151610c5d565b8151604001515b60200151604051610c7091815260200190565b60405180910390a160018151516001811115610c8e57610c8e611ecc565b14610c9d578160600151610ca4565b8051604001515b602001518352610cb2611c15565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845190910152818301805160019052805143930192909252608085015191510152610d0981611a2a565b506115bc565b6001602085015151516002811115610d2957610d29611ecc565b141561115d576020808501515160409081015190830152820151610d50903414600f611a05565b6040513381527fd32bb556fa31fe5bb9a94dc305a08236211b284a911eb96bb98c1f840208de349060200160405180910390a133602084018190528251610db2916001600160a01b0390911614610da8576001610dab565b60005b6010611a05565b610dbb33610944565b60608201819052516000906001811115610dd757610dd7611ecc565b1415610de95760016080820152610e10565b60016060820151516001811115610e0257610e02611ecc565b1415610e1057600060808201525b610e1f81608001516011611a05565b610e6f60026001604084015151610e35906115c2565b516001811115610e4757610e47611ecc565b14610e53576000610e67565b604083015151610e62906115c2565b604001515b106012611a05565b6001604082015151610e8090610944565b516001811115610e9257610e92611ecc565b14610ea1578160600151610eb5565b604081015151610eb090610944565b604001515b60a082015260016060820151516001811115610ed357610ed3611ecc565b14610ee2578160600151610eec565b8060600151604001515b60c082015260a0810180515160e08301516001600160a01b03909116905260208084015191510151610f1e9190612380565b60e08201516020015260a081015160400151610f3c90600190612380565b60e0820180516040019190915260a08201805160609081015192516001600160a01b039093169201919091525160800151610f7990600190612380565b60e082015160800152604080820151516001600160a01b0316600090815260046020522080546001919060ff19168280021790555060e081015160408083018051516001600160a01b039081166000908152600460208181528583208751600180830180549288166001600160a01b0319938416179055838a01516002840155888a015160038401556060808b01518487018054918a1691909416179092556080998a01516005909301929092556101008a018051339081905260c08c018051860151835187015280518b015183518c0152985151825198169790920196909652955188015194519097019390935292815291905220805460ff1916828002179055506101008101513360009081526004602081815260409283902084516001820180546001600160a01b03199081166001600160a01b039384161790915592860151600283015593850151600382015560608501519281018054909216929093169190911790556080909101516005909101556110f5611c15565b825181516001600160a01b039091169052602080840180518351830152604080860151845190910152606080860151845190910152818301805160019052514392019190915251608084015161114b9190612380565b602082015160400152610d0981611a2a565b600260208501515151600281111561117757611177611ecc565b14156115bc5761118934156013611a05565b600161119433610944565b5160018111156111a6576111a6611ecc565b146111b55781606001516111c3565b6111be33610944565b604001515b61012082015260016111dd82610120015160600151610944565b5160018111156111ef576111ef611ecc565b146111fe578160600151611215565b61121081610120015160600151610944565b604001515b6101408201528151611241906001600160a01b0316331461123757600161123a565b60005b6014611a05565b6112666000826101200151602001511461125c57600161125f565b60005b6015611a05565b61127e60028261014001516040015110156016611a05565b61129382602001518360800151116017611a05565b6064601e826101200151602001516112ab91906124ba565b6112b591906124d9565b61016082018190526080830151116112d15781608001516112d8565b8061016001515b6101808201819052604051339180156108fc02916000818181858888f1935050505015801561130b573d6000803e3d6000fd5b50610140810151516101a08201516001600160a01b039091169052610180810151611338906002906124ba565b8161014001516020015161134c9190612380565b6101a082018051602090810192909252610140830180516040908101518351820152815160609081015184516001600160a01b0391821692019190915282516080908101519451019390935290515190911660009081526004909252902080546001919060ff1916828002179055506101a0810151610140820151516001600160a01b0390811660009081526004602081815260408084208651600180830180549289166001600160a01b03199384161790558489015160028401558389015160038401556060808a01518488018054918b16919094161790925560809889015160059093019290925561012089018051516101c08b018051918a169091528051860188905281518501518151860152815183015181519916989092019790975295518701519551909601949094523383525220805460ff1916828002179055506101c0810180513360009081526004602081815260409283902084516001820180546001600160a01b039283166001600160a01b03199182161790915583870151600284015585870151600384015560608701519483018054959092169416939093179092556080909301516005909101556101208401516101e085018051919091529251835190920191909152905190517f8ad759353b4a3e6a3cf99573895ced07b1b99b7bf92276a7a40da39d9a7b1ed89161154a91611fca565b60405180910390a16101e08101516060840152611565611c15565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526060808501518351909101528082018051600190525143910152610180820151608084015161114b91906124fb565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561160e5761160e611ecc565b1415610643576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561060d5761060d611ecc565b61165f600460005414601c611a05565b815161167a90158061167357508251600154145b601d611a05565b60008080556002805461168c906122b8565b80601f01602080910402602001604051908101604052809291908181526020018280546116b8906122b8565b80156117055780601f106116da57610100808354040283529160200191611705565b820191906000526020600020905b8154815290600101906020018083116116e857829003601f168201915b505050505080602001905181019061171d9190612398565b90506117318160400151431015601e611a05565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16117853415601b611a05565b604051600181527fc13780062c49a583922e6a3fbe51da161ba3505952fd6b17abcaec15a56dfc829060200160405180910390a1600160408301526117c8611c15565b815181516001600160a01b039091169052602080830151825182015260408084015183518201526060808501518451909101528183018051600090528051439301929092526080840151915101526115bc81611a2a565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111561186b5761186b611ecc565b1415610643576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156118ac576118ac611ecc565b60018111156118bd576118bd611ecc565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561193757611937611ecc565b1415610643576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156118ac576118ac611ecc565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff1660018111156119c4576119c4611ecc565b1415610643576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff16600181111561060d5761060d611ecc565b816103205760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515115611aba57611a3d611d10565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101519084015281840151810151608084015260046000554360015551611a9191839101612512565b60405160208183030381529060405260029080519060200190611ab5929190611d4e565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611afd573d6000803e3d6000fd5b5060008080556001819055611b1490600290611dd2565b50565b60405180608001604052806000815260200160006001600160a01b03168152602001600015158152602001611b4a611b6e565b905290565b6040805160608101825260008082526020820152908101611b4a611e0c565b6040518060400160405280611b81611e0c565b8152602001611b4a611e0c565b604051806040016040528060008152602001611b4a6040805160a0810182526000602080830182815283850183905284519182019094528181526060830152608082015290815290565b604051806040016040528060008152602001611b4a60405180602001604052806000151581525090565b6040518060200160405280611b4a611e0c565b6040518060400160405280611c28611e4d565b815260408051606081018252600080825260208281018290529282015291015290565b604051806102000160405280611c5f611b4f565b81526000602080830182905260408051918201815291815290820152606001611c86611b4f565b815260006020820152604001611c9a611e0c565b8152602001611ca7611e0c565b8152602001611cb4611e0c565b8152602001611cc1611e0c565b8152602001611cce611e0c565b8152602001611cdb611e0c565b81526020016000815260200160008152602001611cf6611e0c565b8152602001611d03611e0c565b8152602001611b4a611b6e565b6040518060a0016040528060006001600160a01b031681526020016000815260200160008152602001611d41611e0c565b8152602001600081525090565b828054611d5a906122b8565b90600052602060002090601f016020900481019282611d7c5760008555611dc2565b82601f10611d9557805160ff1916838001178555611dc2565b82800160010185558215611dc2579182015b82811115611dc2578251825591602001919060010190611da7565b50611dce929150611e7e565b5090565b508054611dde906122b8565b6000825580601f10611dee575050565b601f016020900490600052602060002090810190611b149190611e7e565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001611b4a611e0c565b5b80821115611dce5760008155600101611e7f565b6001600160a01b0381168114611b1457600080fd5b600060208284031215611eba57600080fd5b8135611ec581611e93565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60028110611b1457611b14611ecc565b81516060820190611f0281611ee2565b808352506020830151151560208301526040830151604083015292915050565b600060408284031215611f3457600080fd5b50919050565b600060408284031215611f4c57600080fd5b611ec58383611f22565b80516001600160a01b039081168352602080830151908401526040808301519084015260608083015190911690830152608090810151910152565b815160e0820190611fa181611ee2565b808352506020830151151560208301526040830151611fc36040840182611f56565b5092915050565b600061014082019050611fde828451611f56565b6020830151611fc360a0840182611f56565b600060a08284031215611f3457600080fd5b82815260006020604081840152835180604085015260005b818110156120365785810183015185820160600152820161201a565b81811115612048576000606083870101525b50601f01601f191692909201606001949350505050565b8151606082019061206f81611ee2565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6040805190810167ffffffffffffffff811182821017156120c857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156120c857634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156120c857634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156120c857634e487b7160e01b600052604160045260246000fd5b8035801515811461064e57600080fd5b60006040828403121561218357600080fd5b61218b612097565b8235815261219b60208401612161565b60208201529392505050565b600081830360a08112156121ba57600080fd5b6121c2612097565b833581526080601f19830112156121d857600080fd5b6121e06120ce565b6121e86120ff565b6020860135600381106121fa57600080fd5b815261220860408701612161565b60208201526020605f198501121561221f57600080fd5b6122276120ce565b9350606086013561223781611e93565b84526040810184905261224c60808701612161565b606082015281526020820152949350505050565b6000818303604081121561227357600080fd5b61227b612097565b833581526020601f198301121561229157600080fd5b6122996120ce565b91506122a760208501612161565b825260208101919091529392505050565b600181811c908216806122cc57607f821691505b60208210811415611f3457634e487b7160e01b600052602260045260246000fd5b6000608082840312156122ff57600080fd5b6040516080810181811067ffffffffffffffff8211171561233057634e487b7160e01b600052604160045260246000fd5b604052825161233e81611e93565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156123935761239361236a565b500190565b60008183036101208112156123ac57600080fd5b6123b4612130565b83516123bf81611e93565b8152602084810151908201526040808501519082015260a0605f19830112156123e757600080fd5b6123ef612130565b915060608401516123ff81611e93565b82526080840151602083015260a0840151604083015260c084015161242381611e93565b8060608401525060e084015160808301528160608201526101008401516080820152809250505092915050565b6001600160a01b038381168252825160208084019190915283015151805160c084019291906003811061248557612485611ecc565b80604086015250602081015115156060850152816040820151511660808501526060810151151560a085015250509392505050565b60008160001904831182151516156124d4576124d461236a565b500290565b6000826124f657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561250d5761250d61236a565b500390565b81516001600160a01b03168152602080830151908201526040808301519082015260608083015161012083019161254b90840182611f56565b5060808301516101008301529291505056fea2646970667358221220b14844dcdbee096df8b15f1d73530d2749bfcf0e00eea59c596cc0970ea9764064736f6c634300080c0033`,
  BytecodeLen: 10378,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:209:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:96:53:after expr stmt semicolon',
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
  "Schemers_joinPyramid": Schemers_joinPyramid,
  "Schemers_timesUp": Schemers_timesUp,
  "Schemers_withdraw": Schemers_withdraw
  };
export const _APIs = {
  Schemers: {
    checkBalance: Schemers_checkBalance,
    joinPyramid: Schemers_joinPyramid,
    timesUp: Schemers_timesUp,
    withdraw: Schemers_withdraw
    }
  };
