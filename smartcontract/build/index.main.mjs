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
  const ctc10 = stdlib.T_Bool;
  
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
  
  
  const v831 = stdlib.protect(ctc2, interact.deadline, 'for Deployer\'s interact field deadline');
  const v832 = stdlib.protect(ctc2, interact.price, 'for Deployer\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v832, v831],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:36:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:5:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v836, v837], secs: v839, time: v838, didSend: v29, from: v835 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v836, v837], secs: v839, time: v838, didSend: v29, from: v835 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v835, v836, v837, v838],
    evt_cnt: 0,
    funcNum: 1,
    lct: v838,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [], secs: v842, time: v841, didSend: v34, from: v840 } = txn2;
      
      ;
      const v850 = stdlib.add(v838, v837);
      
      await stdlib.simMapSet(sim_r, 1, v835, v835);
      await stdlib.simMapSet(sim_r, 4, v835, v835);
      await stdlib.simMapSet(sim_r, 5, v835, stdlib.checkedBigNumberify('./index.rsh:65:24:decimal', stdlib.UInt_max, '0'));
      const v853 = {
        address: v835,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        parent: v835,
        totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.simMapSet(sim_r, 0, v835, v853);
      const v855 = true;
      const v857 = v841;
      const v864 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v855;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v835,
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
  const {data: [], secs: v842, time: v841, didSend: v34, from: v840 } = txn2;
  ;
  const v843 = stdlib.addressEq(v835, v840);
  stdlib.assert(v843, {
    at: './index.rsh:38:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v850 = stdlib.add(v838, v837);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:42:19:application',
    fs: ['at ./index.rsh:42:19:application call to [unknown function] (defined at: ./index.rsh:42:19:function exp)', 'at ./index.rsh:42:19:application call to "liftedInteract" (defined at: ./index.rsh:42:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  await stdlib.mapSet(map1, v835, v835);
  await stdlib.mapSet(map4, v835, v835);
  await stdlib.mapSet(map5, v835, stdlib.checkedBigNumberify('./index.rsh:65:24:decimal', stdlib.UInt_max, '0'));
  const v853 = {
    address: v835,
    allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    parent: v835,
    totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  await stdlib.mapSet(map0, v835, v853);
  let v855 = true;
  let v857 = v841;
  let v864 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v855;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: ['time', v850],
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
      const {data: [v1342], secs: v1344, time: v1343, didSend: v799, from: v1341 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1345 = true;
      await txn4.getOutput('Schemers_timesUp', 'v1345', ctc10, v1345);
      const cv855 = false;
      const cv857 = v1343;
      const cv864 = v864;
      
      v855 = cv855;
      v857 = cv857;
      v864 = cv864;
      
      continue;
      }
    else {
      const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn3;
      switch (v939[0]) {
        case 'Schemers_checkBalance0_63': {
          const v942 = v939[1];
          undefined /* setApiDetails */;
          ;
          const v953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v938), null);
          let v954;
          switch (v953[0]) {
            case 'None': {
              const v955 = v953[1];
              v954 = false;
              
              break;
              }
            case 'Some': {
              const v956 = v953[1];
              v954 = true;
              
              break;
              }
            }
          stdlib.assert(v954, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:36:application call to "user_balance" (defined at: ./index.rsh:113:43:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
            msg: 'Not a member',
            who: 'Deployer'
            });
          const v958 = stdlib.addressEq(v938, v835);
          const v959 = v958 ? false : true;
          stdlib.assert(v959, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:115:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:36:application call to "user_balance" (defined at: ./index.rsh:113:43:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
            msg: 'Unable to check balance',
            who: 'Deployer'
            });
          const v963 = stdlib.fromSome(v953, v853);
          const v964 = v963.allowedToWithdraw;
          await txn3.getOutput('Schemers_checkBalance', 'v964', ctc2, v964);
          const cv855 = true;
          const cv857 = v940;
          const cv864 = v864;
          
          v855 = cv855;
          v857 = cv857;
          v864 = cv864;
          
          continue;
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1074 = v939[1];
          undefined /* setApiDetails */;
          const v1083 = stdlib.add(v864, v836);
          ;
          const v1104 = v1074[stdlib.checkedBigNumberify('./index.rsh:148:9:spread', stdlib.UInt_max, '0')];
          await txn3.getOutput('Schemers_joinPyramid', 'v938', ctc1, v938);
          const v1111 = stdlib.addressEq(v938, v835);
          const v1112 = v1111 ? false : true;
          stdlib.assert(v1112, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
            msg: 'cannot register as deployer',
            who: 'Deployer'
            });
          const v1114 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v938), null);
          let v1115;
          switch (v1114[0]) {
            case 'None': {
              const v1116 = v1114[1];
              v1115 = true;
              
              break;
              }
            case 'Some': {
              const v1117 = v1114[1];
              v1115 = false;
              
              break;
              }
            }
          stdlib.assert(v1115, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
            msg: 'Already a member sorry',
            who: 'Deployer'
            });
          const v1119 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1104), null);
          const v1120 = stdlib.fromSome(v1119, stdlib.checkedBigNumberify('./index.rsh:88:49:decimal', stdlib.UInt_max, '0'));
          const v1121 = stdlib.lt(v1120, stdlib.checkedBigNumberify('./index.rsh:88:54:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1121, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:87:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
            msg: 'No empty slots for that user',
            who: 'Deployer'
            });
          const v1123 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1104), null);
          const v1125 = stdlib.fromSome(v1123, v853);
          const v1128 = stdlib.fromSome(v1114, v853);
          const v1129 = v1125.address;
          const v1130 = v1125.allowedToWithdraw;
          const v1131 = v1125.numberOfChildren;
          const v1132 = v1125.parent;
          const v1133 = v1125.totalUnder;
          const v1135 = stdlib.add(v1131, stdlib.checkedBigNumberify('./index.rsh:101:57:decimal', stdlib.UInt_max, '1'));
          const v1137 = stdlib.add(v1133, stdlib.checkedBigNumberify('./index.rsh:102:45:decimal', stdlib.UInt_max, '1'));
          const v1139 = stdlib.add(v1130, v836);
          const v1140 = {
            address: v1129,
            allowedToWithdraw: v1139,
            numberOfChildren: v1135,
            parent: v1132,
            totalUnder: v1137
            };
          await stdlib.mapSet(map0, v1104, v1140);
          const v1141 = v1128.address;
          const v1142 = v1128.allowedToWithdraw;
          const v1143 = v1128.numberOfChildren;
          const v1145 = v1128.totalUnder;
          const v1146 = {
            address: v1141,
            allowedToWithdraw: v1142,
            numberOfChildren: v1143,
            parent: v1104,
            totalUnder: v1145
            };
          await stdlib.mapSet(map0, v938, v1146);
          const cv855 = true;
          const cv857 = v940;
          const cv864 = v1083;
          
          v855 = cv855;
          v857 = cv857;
          v864 = cv864;
          
          continue;
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1206 = v939[1];
          undefined /* setApiDetails */;
          ;
          const v1284 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v938), null);
          const v1286 = stdlib.fromSome(v1284, v853);
          const v1287 = v1286.parent;
          const v1288 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1287), null);
          const v1290 = stdlib.fromSome(v1288, v853);
          const v1291 = stdlib.addressEq(v938, v835);
          const v1292 = v1291 ? false : true;
          stdlib.assert(v1292, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:124:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
            msg: 'You cannot withdraw as deployer',
            who: 'Deployer'
            });
          const v1294 = v1286.allowedToWithdraw;
          const v1295 = stdlib.eq(v1294, stdlib.checkedBigNumberify('./index.rsh:125:43:decimal', stdlib.UInt_max, '0'));
          const v1296 = v1295 ? false : true;
          stdlib.assert(v1296, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:125:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
            msg: 'Insufficient Balance',
            who: 'Deployer'
            });
          const v1298 = v1290.numberOfChildren;
          const v1299 = stdlib.ge(v1298, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1299, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
            msg: 'Need at least two down lines',
            who: 'Deployer'
            });
          const v1302 = stdlib.gt(v864, v836);
          stdlib.assert(v1302, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:127:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          const v1305 = stdlib.mul(v1294, stdlib.checkedBigNumberify('./index.rsh:129:49:decimal', stdlib.UInt_max, '30'));
          const v1306 = stdlib.div(v1305, stdlib.checkedBigNumberify('./index.rsh:129:55:decimal', stdlib.UInt_max, '100'));
          const v1308 = stdlib.gt(v864, v1306);
          const v1309 = v1308 ? v1306 : v864;
          await txn3.getOutput('Schemers_withdraw', 'v1309', ctc2, v1309);
          const v1318 = stdlib.sub(v864, v1309);
          ;
          const v1319 = v1290.address;
          const v1321 = v1290.allowedToWithdraw;
          const v1323 = v1290.parent;
          const v1324 = v1290.totalUnder;
          const v1326 = stdlib.mul(v1309, stdlib.checkedBigNumberify('./index.rsh:136:68:decimal', stdlib.UInt_max, '2'));
          const v1327 = stdlib.add(v1321, v1326);
          const v1328 = {
            address: v1319,
            allowedToWithdraw: v1327,
            numberOfChildren: v1298,
            parent: v1323,
            totalUnder: v1324
            };
          await stdlib.mapSet(map0, v1319, v1328);
          const v1329 = v1286.address;
          const v1331 = v1286.numberOfChildren;
          const v1333 = v1286.totalUnder;
          const v1334 = {
            address: v1329,
            allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            numberOfChildren: v1331,
            parent: v1287,
            totalUnder: v1333
            };
          await stdlib.mapSet(map0, v938, v1334);
          const cv855 = true;
          const cv857 = v940;
          const cv864 = v1318;
          
          v855 = cv855;
          v857 = cv857;
          v864 = cv864;
          
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
  
  
  const [v835, v836, v850, v853, v864] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v890 = ctc.selfAddress();
  const v892 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:161:10:application call to [unknown function] (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:159:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'in',
    who: 'Schemers_checkBalance'
    });
  const v894 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v890), null);
  let v895;
  switch (v894[0]) {
    case 'None': {
      const v896 = v894[1];
      v895 = false;
      
      break;
      }
    case 'Some': {
      const v897 = v894[1];
      v895 = true;
      
      break;
      }
    }
  stdlib.assert(v895, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:31:application call to "user_balance" (defined at: ./index.rsh:113:43:function exp)', 'at ./index.rsh:161:10:application call to [unknown function] (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:161:10:application call to [unknown function] (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:159:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Not a member',
    who: 'Schemers_checkBalance'
    });
  const v899 = stdlib.addressEq(v890, v835);
  const v900 = v899 ? false : true;
  stdlib.assert(v900, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:115:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:162:31:application call to "user_balance" (defined at: ./index.rsh:113:43:function exp)', 'at ./index.rsh:161:10:application call to [unknown function] (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:161:10:application call to [unknown function] (defined at: ./index.rsh:161:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:159:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Unable to check balance',
    who: 'Schemers_checkBalance'
    });
  const v904 = ['Schemers_checkBalance0_63', v892];
  
  const txn1 = await (ctc.sendrecv({
    args: [v835, v836, v850, v853, v864, v904],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:164:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn1;
      
      switch (v939[0]) {
        case 'Schemers_checkBalance0_63': {
          const v942 = v939[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_checkBalance"
            });
          ;
          const v953 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v938), null);
          const v963 = stdlib.fromSome(v953, v853);
          const v964 = v963.allowedToWithdraw;
          const v965 = await txn1.getOutput('Schemers_checkBalance', 'v964', ctc2, v964);
          
          const v1769 = v864;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1074 = v939[1];
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1206 = v939[1];
          
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
  const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn1;
  switch (v939[0]) {
    case 'Schemers_checkBalance0_63': {
      const v942 = v939[1];
      undefined /* setApiDetails */;
      ;
      const v953 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v938), null);
      let v954;
      switch (v953[0]) {
        case 'None': {
          const v955 = v953[1];
          v954 = false;
          
          break;
          }
        case 'Some': {
          const v956 = v953[1];
          v954 = true;
          
          break;
          }
        }
      stdlib.assert(v954, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:114:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:36:application call to "user_balance" (defined at: ./index.rsh:113:43:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
        msg: 'Not a member',
        who: 'Schemers_checkBalance'
        });
      const v958 = stdlib.addressEq(v938, v835);
      const v959 = v958 ? false : true;
      stdlib.assert(v959, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:115:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:36:application call to "user_balance" (defined at: ./index.rsh:113:43:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
        msg: 'Unable to check balance',
        who: 'Schemers_checkBalance'
        });
      const v963 = stdlib.fromSome(v953, v853);
      const v964 = v963.allowedToWithdraw;
      const v965 = await txn1.getOutput('Schemers_checkBalance', 'v964', ctc2, v964);
      if (v517) {
        stdlib.protect(ctc0, await interact.out(v942, v965), {
          at: './index.rsh:160:7:application',
          fs: ['at ./index.rsh:160:7:application call to [unknown function] (defined at: ./index.rsh:160:7:function exp)', 'at ./index.rsh:167:10:application call to "k" (defined at: ./index.rsh:165:11:function exp)', 'at ./index.rsh:165:11:application call to [unknown function] (defined at: ./index.rsh:165:11:function exp)'],
          msg: 'out',
          who: 'Schemers_checkBalance'
          });
        }
      else {
        }
      
      const v1769 = v864;
      return;
      
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1074 = v939[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1206 = v939[1];
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
  
  
  const [v835, v836, v850, v853, v864] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v867 = ctc.selfAddress();
  const v869 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:148:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'in',
    who: 'Schemers_joinPyramid'
    });
  const v870 = v869[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v873 = stdlib.addressEq(v867, v835);
  const v874 = v873 ? false : true;
  stdlib.assert(v874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:151:27:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:148:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'cannot register as deployer',
    who: 'Schemers_joinPyramid'
    });
  const v876 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v867), null);
  let v877;
  switch (v876[0]) {
    case 'None': {
      const v878 = v876[1];
      v877 = true;
      
      break;
      }
    case 'Some': {
      const v879 = v876[1];
      v877 = false;
      
      break;
      }
    }
  stdlib.assert(v877, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:151:27:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:148:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Already a member sorry',
    who: 'Schemers_joinPyramid'
    });
  const v881 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v870), null);
  const v882 = stdlib.fromSome(v881, stdlib.checkedBigNumberify('./index.rsh:88:49:decimal', stdlib.UInt_max, '0'));
  const v883 = stdlib.lt(v882, stdlib.checkedBigNumberify('./index.rsh:88:54:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v883, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:87:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:151:27:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:150:11:application call to [unknown function] (defined at: ./index.rsh:150:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:148:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'No empty slots for that user',
    who: 'Schemers_joinPyramid'
    });
  const v888 = ['Schemers_joinPyramid0_63', v869];
  
  const txn1 = await (ctc.sendrecv({
    args: [v835, v836, v850, v853, v864, v888],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v836, []],
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
      
      const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn1;
      
      switch (v939[0]) {
        case 'Schemers_checkBalance0_63': {
          const v942 = v939[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1074 = v939[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_joinPyramid"
            });
          const v1083 = stdlib.add(v864, v836);
          sim_r.txns.push({
            amt: v836,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1104 = v1074[stdlib.checkedBigNumberify('./index.rsh:148:9:spread', stdlib.UInt_max, '0')];
          const v1105 = await txn1.getOutput('Schemers_joinPyramid', 'v938', ctc1, v938);
          
          const v1114 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v938), null);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1104), null);
          const v1123 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1104), null);
          const v1125 = stdlib.fromSome(v1123, v853);
          const v1128 = stdlib.fromSome(v1114, v853);
          const v1129 = v1125.address;
          const v1130 = v1125.allowedToWithdraw;
          const v1131 = v1125.numberOfChildren;
          const v1132 = v1125.parent;
          const v1133 = v1125.totalUnder;
          const v1135 = stdlib.add(v1131, stdlib.checkedBigNumberify('./index.rsh:101:57:decimal', stdlib.UInt_max, '1'));
          const v1137 = stdlib.add(v1133, stdlib.checkedBigNumberify('./index.rsh:102:45:decimal', stdlib.UInt_max, '1'));
          const v1139 = stdlib.add(v1130, v836);
          const v1140 = {
            address: v1129,
            allowedToWithdraw: v1139,
            numberOfChildren: v1135,
            parent: v1132,
            totalUnder: v1137
            };
          await stdlib.simMapSet(sim_r, 0, v1104, v1140);
          const v1141 = v1128.address;
          const v1142 = v1128.allowedToWithdraw;
          const v1143 = v1128.numberOfChildren;
          const v1145 = v1128.totalUnder;
          const v1146 = {
            address: v1141,
            allowedToWithdraw: v1142,
            numberOfChildren: v1143,
            parent: v1104,
            totalUnder: v1145
            };
          await stdlib.simMapSet(sim_r, 0, v938, v1146);
          const v1781 = v1083;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1206 = v939[1];
          
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
  const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn1;
  switch (v939[0]) {
    case 'Schemers_checkBalance0_63': {
      const v942 = v939[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1074 = v939[1];
      undefined /* setApiDetails */;
      const v1083 = stdlib.add(v864, v836);
      ;
      const v1104 = v1074[stdlib.checkedBigNumberify('./index.rsh:148:9:spread', stdlib.UInt_max, '0')];
      const v1105 = await txn1.getOutput('Schemers_joinPyramid', 'v938', ctc1, v938);
      if (v517) {
        stdlib.protect(ctc0, await interact.out(v1074, v1105), {
          at: './index.rsh:149:7:application',
          fs: ['at ./index.rsh:149:7:application call to [unknown function] (defined at: ./index.rsh:149:7:function exp)', 'at ./index.rsh:155:10:application call to "k" (defined at: ./index.rsh:154:14:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
          msg: 'out',
          who: 'Schemers_joinPyramid'
          });
        }
      else {
        }
      
      const v1111 = stdlib.addressEq(v938, v835);
      const v1112 = v1111 ? false : true;
      stdlib.assert(v1112, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
        msg: 'cannot register as deployer',
        who: 'Schemers_joinPyramid'
        });
      const v1114 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v938), null);
      let v1115;
      switch (v1114[0]) {
        case 'None': {
          const v1116 = v1114[1];
          v1115 = true;
          
          break;
          }
        case 'Some': {
          const v1117 = v1114[1];
          v1115 = false;
          
          break;
          }
        }
      stdlib.assert(v1115, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
        msg: 'Already a member sorry',
        who: 'Schemers_joinPyramid'
        });
      const v1119 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1104), null);
      const v1120 = stdlib.fromSome(v1119, stdlib.checkedBigNumberify('./index.rsh:88:49:decimal', stdlib.UInt_max, '0'));
      const v1121 = stdlib.lt(v1120, stdlib.checkedBigNumberify('./index.rsh:88:54:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1121, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:87:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:156:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:154:14:application call to [unknown function] (defined at: ./index.rsh:154:14:function exp)'],
        msg: 'No empty slots for that user',
        who: 'Schemers_joinPyramid'
        });
      const v1123 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1104), null);
      const v1125 = stdlib.fromSome(v1123, v853);
      const v1128 = stdlib.fromSome(v1114, v853);
      const v1129 = v1125.address;
      const v1130 = v1125.allowedToWithdraw;
      const v1131 = v1125.numberOfChildren;
      const v1132 = v1125.parent;
      const v1133 = v1125.totalUnder;
      const v1135 = stdlib.add(v1131, stdlib.checkedBigNumberify('./index.rsh:101:57:decimal', stdlib.UInt_max, '1'));
      const v1137 = stdlib.add(v1133, stdlib.checkedBigNumberify('./index.rsh:102:45:decimal', stdlib.UInt_max, '1'));
      const v1139 = stdlib.add(v1130, v836);
      const v1140 = {
        address: v1129,
        allowedToWithdraw: v1139,
        numberOfChildren: v1135,
        parent: v1132,
        totalUnder: v1137
        };
      await stdlib.mapSet(map0, v1104, v1140);
      const v1141 = v1128.address;
      const v1142 = v1128.allowedToWithdraw;
      const v1143 = v1128.numberOfChildren;
      const v1145 = v1128.totalUnder;
      const v1146 = {
        address: v1141,
        allowedToWithdraw: v1142,
        numberOfChildren: v1143,
        parent: v1104,
        totalUnder: v1145
        };
      await stdlib.mapSet(map0, v938, v1146);
      const v1781 = v1083;
      return;
      
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1206 = v939[1];
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
  
  
  const [v835, v836, v850, v853, v864] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v1340 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:182:7:application',
    fs: ['at ./index.rsh:182:7:application call to [unknown function] (defined at: ./index.rsh:182:7:function exp)', 'at ./index.rsh:181:32:application call to [unknown function] (defined at: ./index.rsh:181:32:function exp)'],
    msg: 'in',
    who: 'Schemers_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v835, v836, v850, v853, v864, v1340],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:182:7:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1342], secs: v1344, time: v1343, didSend: v799, from: v1341 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Schemers_timesUp"
        });
      ;
      const v1345 = true;
      const v1346 = await txn1.getOutput('Schemers_timesUp', 'v1345', ctc8, v1345);
      
      sim_r.txns.push({
        kind: 'from',
        to: v835,
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
  const {data: [v1342], secs: v1344, time: v1343, didSend: v799, from: v1341 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1345 = true;
  const v1346 = await txn1.getOutput('Schemers_timesUp', 'v1345', ctc8, v1345);
  stdlib.protect(ctc0, await interact.out(v1342, v1346), {
    at: './index.rsh:182:7:application',
    fs: ['at ./index.rsh:182:7:application call to [unknown function] (defined at: ./index.rsh:182:7:function exp)', 'at ./index.rsh:183:8:application call to "k" (defined at: ./index.rsh:182:7:function exp)', 'at ./index.rsh:181:32:application call to [unknown function] (defined at: ./index.rsh:181:32:function exp)'],
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
  
  
  const [v835, v836, v850, v853, v864] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc2, ctc3, ctc2]);
  const v906 = ctc.selfAddress();
  const v908 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'in',
    who: 'Schemers_withdraw'
    });
  const v910 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v906), null);
  const v912 = stdlib.fromSome(v910, v853);
  const v913 = v912.parent;
  const v914 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v913), null);
  const v916 = stdlib.fromSome(v914, v853);
  const v917 = stdlib.addressEq(v906, v835);
  const v918 = v917 ? false : true;
  stdlib.assert(v918, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:124:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'You cannot withdraw as deployer',
    who: 'Schemers_withdraw'
    });
  const v920 = v912.allowedToWithdraw;
  const v921 = stdlib.eq(v920, stdlib.checkedBigNumberify('./index.rsh:125:43:decimal', stdlib.UInt_max, '0'));
  const v922 = v921 ? false : true;
  stdlib.assert(v922, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:125:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Insufficient Balance',
    who: 'Schemers_withdraw'
    });
  const v924 = v916.numberOfChildren;
  const v925 = stdlib.ge(v924, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v925, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Need at least two down lines',
    who: 'Schemers_withdraw'
    });
  const v928 = stdlib.gt(v864, v836);
  stdlib.assert(v928, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:127:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:174:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:173:10:application call to [unknown function] (defined at: ./index.rsh:173:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:171:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: null,
    who: 'Schemers_withdraw'
    });
  const v932 = ['Schemers_withdraw0_63', v908];
  
  const txn1 = await (ctc.sendrecv({
    args: [v835, v836, v850, v853, v864, v932],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:176:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn1;
      
      switch (v939[0]) {
        case 'Schemers_checkBalance0_63': {
          const v942 = v939[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1074 = v939[1];
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1206 = v939[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_withdraw"
            });
          ;
          const v1284 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v938), null);
          const v1286 = stdlib.fromSome(v1284, v853);
          const v1287 = v1286.parent;
          const v1288 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1287), null);
          const v1290 = stdlib.fromSome(v1288, v853);
          const v1294 = v1286.allowedToWithdraw;
          const v1298 = v1290.numberOfChildren;
          const v1305 = stdlib.mul(v1294, stdlib.checkedBigNumberify('./index.rsh:129:49:decimal', stdlib.UInt_max, '30'));
          const v1306 = stdlib.div(v1305, stdlib.checkedBigNumberify('./index.rsh:129:55:decimal', stdlib.UInt_max, '100'));
          const v1308 = stdlib.gt(v864, v1306);
          const v1309 = v1308 ? v1306 : v864;
          const v1310 = await txn1.getOutput('Schemers_withdraw', 'v1309', ctc2, v1309);
          
          const v1318 = stdlib.sub(v864, v1309);
          sim_r.txns.push({
            kind: 'from',
            to: v938,
            tok: undefined /* Nothing */
            });
          const v1319 = v1290.address;
          const v1321 = v1290.allowedToWithdraw;
          const v1323 = v1290.parent;
          const v1324 = v1290.totalUnder;
          const v1326 = stdlib.mul(v1309, stdlib.checkedBigNumberify('./index.rsh:136:68:decimal', stdlib.UInt_max, '2'));
          const v1327 = stdlib.add(v1321, v1326);
          const v1328 = {
            address: v1319,
            allowedToWithdraw: v1327,
            numberOfChildren: v1298,
            parent: v1323,
            totalUnder: v1324
            };
          await stdlib.simMapSet(sim_r, 0, v1319, v1328);
          const v1329 = v1286.address;
          const v1331 = v1286.numberOfChildren;
          const v1333 = v1286.totalUnder;
          const v1334 = {
            address: v1329,
            allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            numberOfChildren: v1331,
            parent: v1287,
            totalUnder: v1333
            };
          await stdlib.simMapSet(sim_r, 0, v938, v1334);
          const v1796 = v1318;
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
  const {data: [v939], secs: v941, time: v940, didSend: v517, from: v938 } = txn1;
  switch (v939[0]) {
    case 'Schemers_checkBalance0_63': {
      const v942 = v939[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1074 = v939[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1206 = v939[1];
      undefined /* setApiDetails */;
      ;
      const v1284 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v938), null);
      const v1286 = stdlib.fromSome(v1284, v853);
      const v1287 = v1286.parent;
      const v1288 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1287), null);
      const v1290 = stdlib.fromSome(v1288, v853);
      const v1291 = stdlib.addressEq(v938, v835);
      const v1292 = v1291 ? false : true;
      stdlib.assert(v1292, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:124:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
        msg: 'You cannot withdraw as deployer',
        who: 'Schemers_withdraw'
        });
      const v1294 = v1286.allowedToWithdraw;
      const v1295 = stdlib.eq(v1294, stdlib.checkedBigNumberify('./index.rsh:125:43:decimal', stdlib.UInt_max, '0'));
      const v1296 = v1295 ? false : true;
      stdlib.assert(v1296, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:125:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
        msg: 'Insufficient Balance',
        who: 'Schemers_withdraw'
        });
      const v1298 = v1290.numberOfChildren;
      const v1299 = stdlib.ge(v1298, stdlib.checkedBigNumberify('./index.rsh:126:42:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1299, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
        msg: 'Need at least two down lines',
        who: 'Schemers_withdraw'
        });
      const v1302 = stdlib.gt(v864, v836);
      stdlib.assert(v1302, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:127:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:178:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:121:66:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
        msg: null,
        who: 'Schemers_withdraw'
        });
      const v1305 = stdlib.mul(v1294, stdlib.checkedBigNumberify('./index.rsh:129:49:decimal', stdlib.UInt_max, '30'));
      const v1306 = stdlib.div(v1305, stdlib.checkedBigNumberify('./index.rsh:129:55:decimal', stdlib.UInt_max, '100'));
      const v1308 = stdlib.gt(v864, v1306);
      const v1309 = v1308 ? v1306 : v864;
      const v1310 = await txn1.getOutput('Schemers_withdraw', 'v1309', ctc2, v1309);
      if (v517) {
        stdlib.protect(ctc0, await interact.out(v1206, v1310), {
          at: './index.rsh:172:7:application',
          fs: ['at ./index.rsh:172:7:application call to [unknown function] (defined at: ./index.rsh:172:7:function exp)', 'at ./index.rsh:131:18:application call to "confirm" (defined at: ./index.rsh:177:11:function exp)', 'at ./index.rsh:178:51:application call to [unknown function] (defined at: ./index.rsh:128:19:function exp)', 'at ./index.rsh:177:11:application call to [unknown function] (defined at: ./index.rsh:177:11:function exp)'],
          msg: 'out',
          who: 'Schemers_withdraw'
          });
        }
      else {
        }
      
      const v1318 = stdlib.sub(v864, v1309);
      ;
      const v1319 = v1290.address;
      const v1321 = v1290.allowedToWithdraw;
      const v1323 = v1290.parent;
      const v1324 = v1290.totalUnder;
      const v1326 = stdlib.mul(v1309, stdlib.checkedBigNumberify('./index.rsh:136:68:decimal', stdlib.UInt_max, '2'));
      const v1327 = stdlib.add(v1321, v1326);
      const v1328 = {
        address: v1319,
        allowedToWithdraw: v1327,
        numberOfChildren: v1298,
        parent: v1323,
        totalUnder: v1324
        };
      await stdlib.mapSet(map0, v1319, v1328);
      const v1329 = v1286.address;
      const v1331 = v1286.numberOfChildren;
      const v1333 = v1286.totalUnder;
      const v1334 = {
        address: v1329,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: v1331,
        parent: v1287,
        totalUnder: v1333
        };
      await stdlib.mapSet(map0, v938, v1334);
      const v1796 = v1318;
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
    impure: [`Schemers_checkBalance()uint64`, `Schemers_joinPyramid(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()uint64`],
    pure: [],
    sigs: [`Schemers_checkBalance()uint64`, `Schemers_joinPyramid(address)address`, `Schemers_timesUp()byte`, `Schemers_withdraw()uint64`]
    },
  appApproval: `BiANAAEIIAIEKLYBq5jB4w+Zw5juD73XrrgOA4gBJgMBAQEAACI1ADEYQQYbKmRJIls1ASRbNQIxGSMSQQAcMQAhB69LASlLAlcAf2ZLAShLAld/N2ZISEIF1jYaABdJQQBbIjUEIzUGSSEIDEAAH0khCQxAAAghCRJEKkIAXiEIEkQ2GgE1/yg0/1BCAKxJIQoMQAATIQoSRCo1/4ABAjT/UDIDUEIAkoHxpLKcChJEKjX/KTT/UDIDUEIAfTYaAhc1BDYaAzYaARdJIQsMQAN8SSEFDEAAYSEFEkQhBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDIQZbNf9JNQU1/oAE1OAYLTT+ULAyBjT/D0SACQAAAAAAAAVBAbAoNQc0A1cAIDQDJVs0/zQDVzBYIjIGNAMhDFtCBG1IIQU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSVcAIDX/JVs1/iEGWzX9VzBYNfwhDFs1+0k1BTX6gAQUkUDUNPpQsDIGNP0MRDT6IlVJIwxAAlhJIQQMQAEsIQQSRDT8MQCIBMdXAFlJNfhXAVg0+CJVTUk1+VcwIDX4NPw0+IgEqlcAWUk19lcBWDT2IlVNNfcxADT/E0Q0+SVbSTX2RDT3IQZbSTX1IQQPRDT7NP4NRDT2gR4LgWQKNfQ0+zT0NPs09A1NNfOACAAAAAAAAAUdNPMWULA08xY1B7EisgE087III7IQMQCyB7M091cAIDXyNPJJiAQzKDTyNPclWzTzIQQLCBZQNPUWUDT3VzAgUDT3V1AIUFA18VdZXTTxTFBLASlLAlcAf2ZLAShLAld/N2ZISDEAMQCIA+8oNPlXACAkr1A0+VcoCFA0+FA0+VdQCFBQNfFXWV008UxQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/zT+NP00/CMyBjT7NPMJQgLmSDT6VwEgNfk0/ogDsDT5NfiACAAAAAAAAAOqMQBQsDEANQcxADT/E0QxAIgDeFcAWUk19yJVQAAGIzX2QgAGIjX2QgAANPZEIjT4iANYV3oJSTX1I1s09SJVTSEEDEQ0/DT4iANAVwBZSTX0VwFYNPQiVU019TT8NPdJNfNXAVg08yJVTTX0NPhJiAMZKDT1VwAgNPUlWzT+CBZQNPUhBlsjCBZQNPVXMCBQNPWBUFsjCBZQUDXzV1ldNPNMUEsBKUsCVwB/ZksBKEsCV383ZkhIMQAxAIgCzSg09FcAIDT0VyAIUDT0VygIUDT4UDT0V1AIUFA181dZXTTzTFBLASlLAlcAf2ZLAShLAld/N2ZISDT/NP40/TT8IzIGNPs0/ghCAcFIMQCIAntXAFlJNfkiVUAABiI1+EIABiM1+EIAADT4RDEANP8TRIAIAAAAAAAAA8Q0/DT5STX3VwFYNPciVU1XIAhQsDT8NPlJNfdXAVg09yJVTVcgCDUHNP80/jT9NPwjMgY0+0IBWUkjDEABACMSRCM0ARJENARJIhJMNAISEUQpZEk1A1cAIDX/gASai5F0sDT/MQASRDT/SYgB4yg0/1A1/klXAFk0/lBMV3o8UEsBKUsCVwB/ZksBKEsCV383ZkhINP9JiAG3KDT/UDX+SVcAjDT+UExXrQlQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/0mIAYuACQEAAAAAAAAAADX+VwCtNP5QSwEpSwJXAH9mSwEoSwJXfzdmSEg0/ySvUCSvUDT/UCSvUDX+NP9JiAFOKDT+UDX9V1ldNP1MUEsBKUsCVwB/ZksBKEsCV383ZkhINP80AyVbNAOBMFs0AyEGWwg0/iMyBiJCAFNIgaCNBogBIiI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULAxADT/FlA0/hZQMgYWUClLAVcAOGdIIzUBMgY1AkIAbTX/Nf41/TX8Nfs1+jX5NP1BACs0+TT6FlA0+xZQNPxQNP8WUClLAVcAf2coSwFXfxFnSCEFNQEyBjUCQgAvsSKyATT/sggjshA0+bIHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhCzE1EkQiMTYSRCEEMTcSRCI1ASI1AkL/rUkxGGFAAAVIIQeviUkpYksBKGJQTEiJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v836",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v837",
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
                "name": "v836",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v837",
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
                "name": "v939",
                "type": "tuple"
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
                "name": "v1342",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
    "name": "_reach_oe_v1309",
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
    "name": "_reach_oe_v1345",
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
    "name": "_reach_oe_v938",
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
    "name": "_reach_oe_v964",
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
                "name": "v939",
                "type": "tuple"
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
                "name": "v1342",
                "type": "bool"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
  Bytecode: `0x60806040526040516200280a3803806200280a83398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61251380620002f76000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063cadc2e7a11610056578063cadc2e7a14610254578063dc01fb9d14610274578063ee90ecaf14610294578063ef3702ab1461029c57005b806383230757146101dc578063a98bf223146101f1578063ab53f2c614610204578063acf0cc221461022757005b806373cf3fbb116100bd57806373cf3fbb1461018957806377e591d414610191578063817d57f3146101a457806382b64760146101c457005b806306dc92ff146100f45780631e93b0f11461012a5780632c10a159146101495780633bc5b7bf1461015c57005b366100f257005b005b34801561010057600080fd5b5061011461010f366004611e4e565b6102c7565b6040516101219190611e98565b60405180910390f35b34801561013657600080fd5b506003545b604051908152602001610121565b6100f2610157366004611ee0565b6102f3565b34801561016857600080fd5b5061017c610177366004611e4e565b610317565b6040516101219190611f37565b61013b610328565b6100f261019f366004611f70565b610358565b3480156101b057600080fd5b506101146101bf366004611e4e565b610378565b6101cc61039e565b6040519015158152602001610121565b3480156101e857600080fd5b5060015461013b565b6100f26101ff366004611ee0565b6103cd565b34801561021057600080fd5b506102196103ed565b604051610121929190611f82565b34801561023357600080fd5b50610247610242366004611e4e565b61048a565b6040516101219190611fdf565b34801561026057600080fd5b5061024761026f366004611e4e565b6104b0565b34801561028057600080fd5b5061011461028f366004611e4e565b6104d6565b61013b6104fc565b6102af6102aa366004611e4e565b610529565b6040516001600160a01b039091168152602001610121565b60408051606081018252600080825260208201819052918101919091526102ed8261056d565b92915050565b6102fb611aea565b61031361030d368490038401846120f1565b82610640565b5050565b61031f611b1d565b6102ed82610931565b6000610332611b41565b60208101515160029052610344611aea565b61034e8282610a23565b6060015192915050565b610360611aea565b61031361037236849003840184612127565b82610a23565b60408051606081018252600080825260208201819052918101919091526102ed82611595565b60006103a8611b8b565b6020810151600090526103b9611aea565b6103c38282611622565b6040015192915050565b6103d5611aea565b6103136103e7368490038401846121e0565b82611622565b60006060600054600280805461040290612238565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90612238565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102ed826117f2565b60408051606081018252600080825260208201819052918101919091526102ed826118be565b60408051606081018252600080825260208201819052918101919091526102ed8261194b565b6000610506611b41565b60208101515160009052610518611aea565b6105228282610a23565b5192915050565b6000610533611b41565b60208101805151600190525151604001516001600160a01b0384169052610558611aea565b6105628282610a23565b602001519392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156105b9576105b9611e72565b1415610630576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156105fa576105fa611e72565b600181111561060b5761060b611e72565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610650600160005414600a6119d8565b815161066b90158061066457508251600154145b600b6119d8565b60008080556002805461067d90612238565b80601f01602080910402602001604051908101604052809291908181526020018280546106a990612238565b80156106f65780601f106106cb576101008083540402835291602001916106f6565b820191906000526020600020905b8154815290600101906020018083116106d957829003601f168201915b505050505080602001905181019061070e919061226d565b9050610718611bb5565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161076b341560086119d8565b8151610783906001600160a01b0316331460096119d8565b81516001600160a01b0390811660009081526005602081815260408084208054600160ff19918216811790925588518716808752838720805462010000600160b01b031990811662010000938402179091558a51891688526008865284882080548416851790558a518916808952858920805490921692029190911790558851871686526009845282862080548216831790558851871686528286208201869055885188519088169052875184018690528751830186905288518851908816606091820152885160809081018890528a518916885260048087528589208054909416851790935589518b518a1689529785902088519481018054958b166001600160a01b031996871617905595880151600287015593870151600386015586015190840180549190971691161790945591909201519101556108c3611bc8565b825181516001600160a01b039091169052602080840151825190910152604083015160608401516108f49190612300565b81516040908101919091528251825160600152602080830180516001905280514392019190915251600091015261092a816119fd565b5050505050565b610939611b1d565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561096857610968611e72565b1415610630576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156109a9576109a9611e72565b60018111156109ba576109ba611e72565b81528154610100900460ff1615156020808301919091526040805160a08101825260018501546001600160a01b03908116825260028601549382019390935260038501548183015260048501549092166060830152600590930154608082015291015292915050565b610a3360046000541460186119d8565b8151610a4e901580610a4757508251600154145b60196119d8565b600080805560028054610a6090612238565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8c90612238565b8015610ad95780601f10610aae57610100808354040283529160200191610ad9565b820191906000526020600020905b815481529060010190602001808311610abc57829003601f168201915b5050505050806020019051810190610af19190612318565b9050610afb611bfe565b610b0c82604001514310601a6119d8565b7f8c12f02212ada7fc3de06e01a117304a130f6887cb28d15457948cb42bf690ac3385604051610b3d9291906123d0565b60405180910390a16000602085015151516002811115610b5f57610b5f611e72565b1415610cfc57610b713415600c6119d8565b610b7a33610931565b815260008151516001811115610b9257610b92611e72565b1415610ba45760006020820152610bc8565b60018151516001811115610bba57610bba611e72565b1415610bc857600160208201525b610bd78160200151600d6119d8565b8151610bfd906001600160a01b03163314610bf3576001610bf6565b60005b600e6119d8565b7f7c634a00f18fe9afba8d1671153d5dedb44fcb3a1feb41a4f4d4bb1a433c70b560018251516001811115610c3457610c34611e72565b14610c43578260600151610c4a565b8151604001515b60200151604051610c5d91815260200190565b60405180910390a160018151516001811115610c7b57610c7b611e72565b14610c8a578160600151610c91565b8051604001515b602001518352610c9f611bc8565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152606080860151845190910152818301805160019052805143930192909252608085015191510152610cf6816119fd565b5061158f565b6001602085015151516002811115610d1657610d16611e72565b141561114f576020808501515160409081015190830152820151610d3d903414600f6119d8565b6040513381527fc222695f227cac5ccae84e8df2346ac60ca2bea975ea04814d909ed373b11fe49060200160405180910390a133602084018190528251610d9f916001600160a01b0390911614610d95576001610d98565b60005b60106119d8565b610da833610931565b60608201819052516000906001811115610dc457610dc4611e72565b1415610dd65760016080820152610dfd565b60016060820151516001811115610def57610def611e72565b1415610dfd57600060808201525b610e0c816080015160116119d8565b610e5c60026001604084015151610e2290611595565b516001811115610e3457610e34611e72565b14610e40576000610e54565b604083015151610e4f90611595565b604001515b1060126119d8565b6001604082015151610e6d90610931565b516001811115610e7f57610e7f611e72565b14610e8e578160600151610ea2565b604081015151610e9d90610931565b604001515b60a082015260016060820151516001811115610ec057610ec0611e72565b14610ecf578160600151610ed9565b8060600151604001515b60c082015260a0810180515160e08301516001600160a01b03909116905260208084015191510151610f0b9190612300565b60e08201516020015260a081015160400151610f2990600190612300565b60e0820180516040019190915260a08201805160609081015192516001600160a01b039093169201919091525160800151610f6690600190612300565b60e082015160800152604080820151516001600160a01b0316600090815260046020522080546001919060ff19168280021790555060e081015160408083018051516001600160a01b039081166000908152600460208181528583208751600180830180549288166001600160a01b0319938416179055838a01516002840155888a015160038401556060808b01518487018054918a1691909416179092556080998a015160059093019290925560c08a018051516101008c0180519189169091528151850151815186015281518a015181518b015297515188519716969091019590955293518701519451909601939093523381529190935220805460ff1916828002179055506101008101513360009081526004602081815260409283902084516001820180546001600160a01b03199081166001600160a01b039384161790915592860151600283015593850151600382015560608501519281018054909216929093169190911790556080909101516005909101556110e7611bc8565b825181516001600160a01b039091169052602080840180518351830152604080860151845190910152606080860151845190910152818301805160019052514392019190915251608084015161113d9190612300565b602082015160400152610cf6816119fd565b600260208501515151600281111561116957611169611e72565b141561158f5761117b341560136119d8565b600161118633610931565b51600181111561119857611198611e72565b146111a75781606001516111b5565b6111b033610931565b604001515b61012082015260016111cf82610120015160600151610931565b5160018111156111e1576111e1611e72565b146111f0578160600151611207565b61120281610120015160600151610931565b604001515b6101408201528151611233906001600160a01b0316331461122957600161122c565b60005b60146119d8565b6112586000826101200151602001511461124e576001611251565b60005b60156119d8565b611270600282610140015160400151101560166119d8565b611285826020015183608001511160176119d8565b6064601e8261012001516020015161129d919061243a565b6112a79190612459565b61016082018190526080830151116112c35781608001516112ca565b8061016001515b61018082018190526040519081527fe21542bfa33fde50d2cbbe87baa082c5e2ce89aefe294640c1e992063e5b5d489060200160405180910390a161018081018051606085015251604051339180156108fc02916000818181858888f1935050505015801561133d573d6000803e3d6000fd5b50610140810151516101a08201516001600160a01b03909116905261018081015161136a9060029061243a565b8161014001516020015161137e9190612300565b6101a082018051602090810192909252610140830180516040908101518351820152815160609081015184516001600160a01b0391821692019190915282516080908101519451019390935290515190911660009081526004909252902080546001919060ff1916828002179055506101a0810151610140820151516001600160a01b0390811660009081526004602081815260408084208651600180830180549289166001600160a01b03199384161790558489015160028401558389015160038401556060808a01518488018054918b16919094161790925560809889015160059093019290925561012089018051516101c08b018051918a169091528051860188905281518501518151860152815183015181519916989092019790975295518701519551909601949094523383525220805460ff1916828002179055506101c08101513360009081526004602081815260409283902084516001820180546001600160a01b03199081166001600160a01b03938416179091559286015160028301559385015160038201556060850151928101805490921692909316919091179055608090910151600590910155611538611bc8565b825181516001600160a01b03909116905260208084015182518201526040808501518351909101526060808501518351909101528082018051600190525143910152610180820151608084015161113d919061247b565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156115e1576115e1611e72565b1415610630576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156105fa576105fa611e72565b611632600460005414601c6119d8565b815161164d90158061164657508251600154145b601d6119d8565b60008080556002805461165f90612238565b80601f016020809104026020016040519081016040528092919081815260200182805461168b90612238565b80156116d85780601f106116ad576101008083540402835291602001916116d8565b820191906000526020600020905b8154815290600101906020018083116116bb57829003601f168201915b50505050508060200190518101906116f09190612318565b90506117048160400151431015601e6119d8565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16117583415601b6119d8565b604051600181527f516366d7741e4220ac9558cef1b3cd2c9aeb930a1eb0989e85d4f1fac97ccbae9060200160405180910390a16001604083015261179b611bc8565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015260608085015184519091015281830180516000905280514393019290925260808401519151015261158f816119fd565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111561183e5761183e611e72565b1415610630576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561187f5761187f611e72565b600181111561189057611890611e72565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561190a5761190a611e72565b1415610630576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561187f5761187f611e72565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111561199757611997611e72565b1415610630576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff1660018111156105fa576105fa611e72565b816103135760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208101515115611a8d57611a10611cb6565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015283516060908101519084015281840151810151608084015260046000554360015551611a6491839101612492565b60405160208183030381529060405260029080519060200190611a88929190611cf4565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611ad0573d6000803e3d6000fd5b5060008080556001819055611ae790600290611d78565b50565b60405180608001604052806000815260200160006001600160a01b03168152602001600015158152602001600081525090565b6040805160608101825260008082526020820152908101611b3c611db2565b905290565b604051806040016040528060008152602001611b3c6040805160a0810182526000602080830182815283850183905284519182019094528181526060830152608082015290815290565b604051806040016040528060008152602001611b3c60405180602001604052806000151581525090565b6040518060200160405280611b3c611db2565b6040518060400160405280611bdb611df3565b815260408051606081018252600080825260208281018290529282015291015290565b604051806101e00160405280611c12611b1d565b81526000602080830182905260408051918201815291815290820152606001611c39611b1d565b815260006020820152604001611c4d611db2565b8152602001611c5a611db2565b8152602001611c67611db2565b8152602001611c74611db2565b8152602001611c81611db2565b8152602001611c8e611db2565b81526020016000815260200160008152602001611ca9611db2565b8152602001611b3c611db2565b6040518060a0016040528060006001600160a01b031681526020016000815260200160008152602001611ce7611db2565b8152602001600081525090565b828054611d0090612238565b90600052602060002090601f016020900481019282611d225760008555611d68565b82601f10611d3b57805160ff1916838001178555611d68565b82800160010185558215611d68579182015b82811115611d68578251825591602001919060010190611d4d565b50611d74929150611e24565b5090565b508054611d8490612238565b6000825580601f10611d94575050565b601f016020900490600052602060002090810190611ae79190611e24565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b604051806080016040528060006001600160a01b031681526020016000815260200160008152602001611b3c611db2565b5b80821115611d745760008155600101611e25565b6001600160a01b0381168114611ae757600080fd5b600060208284031215611e6057600080fd5b8135611e6b81611e39565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60028110611ae757611ae7611e72565b81516060820190611ea881611e88565b808352506020830151151560208301526040830151604083015292915050565b600060408284031215611eda57600080fd5b50919050565b600060408284031215611ef257600080fd5b611e6b8383611ec8565b80516001600160a01b039081168352602080830151908401526040808301519084015260608083015190911690830152608090810151910152565b815160e0820190611f4781611e88565b808352506020830151151560208301526040830151611f696040840182611efc565b5092915050565b600060a08284031215611eda57600080fd5b82815260006020604081840152835180604085015260005b81811015611fb657858101830151858201606001528201611f9a565b81811115611fc8576000606083870101525b50601f01601f191692909201606001949350505050565b81516060820190611fef81611e88565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6040805190810167ffffffffffffffff8111828210171561204857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561204857634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561204857634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561204857634e487b7160e01b600052604160045260246000fd5b8035801515811461063b57600080fd5b60006040828403121561210357600080fd5b61210b612017565b8235815261211b602084016120e1565b60208201529392505050565b600081830360a081121561213a57600080fd5b612142612017565b833581526080601f198301121561215857600080fd5b61216061204e565b61216861207f565b60208601356003811061217a57600080fd5b8152612188604087016120e1565b60208201526020605f198501121561219f57600080fd5b6121a761204e565b935060608601356121b781611e39565b8452604081018490526121cc608087016120e1565b606082015281526020820152949350505050565b600081830360408112156121f357600080fd5b6121fb612017565b833581526020601f198301121561221157600080fd5b61221961204e565b9150612227602085016120e1565b825260208101919091529392505050565b600181811c9082168061224c57607f821691505b60208210811415611eda57634e487b7160e01b600052602260045260246000fd5b60006080828403121561227f57600080fd5b6040516080810181811067ffffffffffffffff821117156122b057634e487b7160e01b600052604160045260246000fd5b60405282516122be81611e39565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612313576123136122ea565b500190565b600081830361012081121561232c57600080fd5b6123346120b0565b835161233f81611e39565b8152602084810151908201526040808501519082015260a0605f198301121561236757600080fd5b61236f6120b0565b9150606084015161237f81611e39565b82526080840151602083015260a0840151604083015260c08401516123a381611e39565b8060608401525060e084015160808301528160608201526101008401516080820152809250505092915050565b6001600160a01b038381168252825160208084019190915283015151805160c084019291906003811061240557612405611e72565b80604086015250602081015115156060850152816040820151511660808501526060810151151560a085015250509392505050565b6000816000190483118215151615612454576124546122ea565b500290565b60008261247657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561248d5761248d6122ea565b500390565b81516001600160a01b0316815260208083015190820152604080830151908201526060808301516101208301916124cb90840182611efc565b5060808301516101008301529291505056fea2646970667358221220db7d40a8111b387160a679430c26c90debf3b10bf462300e90f2fc19e1bed1ad64736f6c634300080c0033`,
  BytecodeLen: 10250,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:187:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:76:53:after expr stmt semicolon',
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
