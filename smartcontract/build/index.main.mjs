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
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Object({
    address: ctc0,
    allowedToWithdraw: ctc1,
    numberOfChildren: ctc1,
    parent: ctc0,
    totalUnder: ctc1
    });
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Data({
    None: ctc2,
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
      4: [ctc0, ctc1, ctc0, ctc1, ctc1]
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
  
  
  const v809 = stdlib.protect(ctc2, interact.deadline, 'for Deployer\'s interact field deadline');
  const v810 = stdlib.protect(ctc2, interact.price, 'for Deployer\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v810, v809],
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
      
      const {data: [v814, v815], secs: v817, time: v816, didSend: v29, from: v813 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v814, v815], secs: v817, time: v816, didSend: v29, from: v813 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v813, v814, v815, v816],
    evt_cnt: 0,
    funcNum: 1,
    lct: v816,
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
      
      const {data: [], secs: v820, time: v819, didSend: v34, from: v818 } = txn2;
      
      ;
      const v828 = stdlib.add(v816, v815);
      
      await stdlib.simMapSet(sim_r, 1, v813, v813);
      await stdlib.simMapSet(sim_r, 4, v813, v813);
      await stdlib.simMapSet(sim_r, 5, v813, stdlib.checkedBigNumberify('./index.rsh:65:24:decimal', stdlib.UInt_max, '0'));
      const v831 = {
        address: v813,
        allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        parent: v813,
        totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      await stdlib.simMapSet(sim_r, 0, v813, v831);
      const v833 = true;
      const v835 = v819;
      const v842 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v833;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v813,
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
  const {data: [], secs: v820, time: v819, didSend: v34, from: v818 } = txn2;
  ;
  const v821 = stdlib.addressEq(v813, v818);
  stdlib.assert(v821, {
    at: './index.rsh:38:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v828 = stdlib.add(v816, v815);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:42:19:application',
    fs: ['at ./index.rsh:42:19:application call to [unknown function] (defined at: ./index.rsh:42:19:function exp)', 'at ./index.rsh:42:19:application call to "liftedInteract" (defined at: ./index.rsh:42:19:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  await stdlib.mapSet(map1, v813, v813);
  await stdlib.mapSet(map4, v813, v813);
  await stdlib.mapSet(map5, v813, stdlib.checkedBigNumberify('./index.rsh:65:24:decimal', stdlib.UInt_max, '0'));
  const v831 = {
    address: v813,
    allowedToWithdraw: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    numberOfChildren: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    parent: v813,
    totalUnder: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  await stdlib.mapSet(map0, v813, v831);
  let v833 = true;
  let v835 = v819;
  let v842 = stdlib.checkedBigNumberify('./index.rsh:29:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v833;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: ['time', v828],
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
      const {data: [v1257], secs: v1259, time: v1258, didSend: v777, from: v1256 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1260 = true;
      await txn4.getOutput('Schemers_timesUp', 'v1260', ctc10, v1260);
      const cv833 = false;
      const cv835 = v1258;
      const cv842 = v842;
      
      v833 = cv833;
      v835 = cv835;
      v842 = cv842;
      
      continue;
      }
    else {
      const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn3;
      switch (v914[0]) {
        case 'Schemers_checkBalance0_63': {
          const v917 = v914[1];
          undefined /* setApiDetails */;
          ;
          const v928 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v913), null);
          const v929 = stdlib.fromSome(v928, v813);
          const v930 = stdlib.addressEq(v929, v813);
          const v931 = v930 ? false : true;
          stdlib.assert(v931, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:36:application call to "user_balance" (defined at: ./index.rsh:108:43:function exp)', 'at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)'],
            msg: 'Not a member',
            who: 'Deployer'
            });
          const v933 = stdlib.addressEq(v913, v813);
          const v934 = v933 ? false : true;
          stdlib.assert(v934, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:36:application call to "user_balance" (defined at: ./index.rsh:108:43:function exp)', 'at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)'],
            msg: 'Unable to check balance',
            who: 'Deployer'
            });
          const v936 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v913), null);
          const v937 = stdlib.fromSome(v936, stdlib.checkedBigNumberify('./index.rsh:112:63:decimal', stdlib.UInt_max, '0'));
          await txn3.getOutput('Schemers_checkBalance', 'v937', ctc2, v937);
          const cv833 = true;
          const cv835 = v915;
          const cv842 = v842;
          
          v833 = cv833;
          v835 = cv835;
          v842 = cv842;
          
          continue;
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1029 = v914[1];
          undefined /* setApiDetails */;
          const v1038 = stdlib.add(v842, v814);
          ;
          const v1057 = v1029[stdlib.checkedBigNumberify('./index.rsh:150:9:spread', stdlib.UInt_max, '0')];
          await txn3.getOutput('Schemers_joinPyramid', 'v913', ctc1, v913);
          const v1064 = stdlib.addressEq(v913, v813);
          const v1065 = v1064 ? false : true;
          stdlib.assert(v1065, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
            msg: 'cannot register as deployer',
            who: 'Deployer'
            });
          const v1067 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v913), null);
          const v1068 = stdlib.fromSome(v1067, v813);
          const v1069 = stdlib.addressEq(v1068, v913);
          const v1070 = v1069 ? false : true;
          stdlib.assert(v1070, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
            msg: 'Already a member sorry',
            who: 'Deployer'
            });
          const v1072 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1057), null);
          const v1073 = stdlib.fromSome(v1072, stdlib.checkedBigNumberify('./index.rsh:91:49:decimal', stdlib.UInt_max, '0'));
          const v1074 = stdlib.lt(v1073, stdlib.checkedBigNumberify('./index.rsh:91:54:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1074, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
            msg: 'No empty slots for that user',
            who: 'Deployer'
            });
          const v1078 = stdlib.add(v1073, stdlib.checkedBigNumberify('./index.rsh:97:56:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map2, v1057, v1078);
          await stdlib.mapSet(map4, v913, v1057);
          await stdlib.mapSet(map1, v913, v913);
          const v1079 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1057), null);
          const v1080 = stdlib.fromSome(v1079, stdlib.checkedBigNumberify('./index.rsh:101:49:decimal', stdlib.UInt_max, '0'));
          const v1081 = stdlib.add(v1080, stdlib.checkedBigNumberify('./index.rsh:101:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map3, v1057, v1081);
          await stdlib.mapSet(map5, v913, stdlib.checkedBigNumberify('./index.rsh:102:43:decimal', stdlib.UInt_max, '0'));
          const v1082 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1057), null);
          const v1083 = stdlib.fromSome(v1082, stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, '0'));
          const v1084 = stdlib.add(v1083, v814);
          await stdlib.mapSet(map5, v1057, v1084);
          const cv833 = true;
          const cv835 = v915;
          const cv842 = v1038;
          
          v833 = cv833;
          v835 = cv835;
          v842 = cv842;
          
          continue;
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1141 = v914[1];
          undefined /* setApiDetails */;
          ;
          const v1202 = stdlib.addressEq(v913, v813);
          const v1203 = v1202 ? false : true;
          stdlib.assert(v1203, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:117:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
            msg: 'You have no uplines',
            who: 'Deployer'
            });
          const v1205 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v913), null);
          const v1206 = stdlib.fromSome(v1205, stdlib.checkedBigNumberify('./index.rsh:119:53:decimal', stdlib.UInt_max, '0'));
          const v1207 = stdlib.eq(v1206, stdlib.checkedBigNumberify('./index.rsh:119:59:decimal', stdlib.UInt_max, '0'));
          const v1208 = v1207 ? false : true;
          stdlib.assert(v1208, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
            msg: 'Insufficient Balance',
            who: 'Deployer'
            });
          const v1210 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v913), null);
          const v1211 = stdlib.fromSome(v1210, v813);
          const v1212 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1211), null);
          const v1213 = stdlib.fromSome(v1212, stdlib.checkedBigNumberify('./index.rsh:123:71:decimal', stdlib.UInt_max, '0'));
          const v1214 = stdlib.ge(v1213, stdlib.checkedBigNumberify('./index.rsh:123:77:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1214, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
            msg: 'Need at least two down lines',
            who: 'Deployer'
            });
          const v1217 = stdlib.gt(v842, v814);
          stdlib.assert(v1217, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          let v1220;
          switch (v1205[0]) {
            case 'None': {
              const v1221 = v1205[1];
              v1220 = stdlib.checkedBigNumberify('./index.rsh:130:19:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1222 = v1205[1];
              const v1223 = stdlib.mul(v1222, stdlib.checkedBigNumberify('./index.rsh:131:25:decimal', stdlib.UInt_max, '30'));
              const v1224 = stdlib.div(v1223, stdlib.checkedBigNumberify('./index.rsh:131:31:decimal', stdlib.UInt_max, '100'));
              v1220 = v1224;
              
              break;
              }
            }
          const v1226 = stdlib.gt(v842, v1220);
          const v1227 = v1226 ? v1220 : v842;
          const v1229 = stdlib.ge(v842, v1227);
          stdlib.assert(v1229, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:134:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:51:application call to [unknown function] (defined at: ./index.rsh:127:19:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
            msg: 'Balance Empty',
            who: 'Deployer'
            });
          await txn3.getOutput('Schemers_withdraw', 'v1227', ctc2, v1227);
          const v1239 = stdlib.sub(v842, v1227);
          ;
          const v1244 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1211), null);
          const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:138:77:decimal', stdlib.UInt_max, '0'));
          const v1246 = stdlib.mul(v1227, stdlib.checkedBigNumberify('./index.rsh:139:22:decimal', stdlib.UInt_max, '2'));
          const v1247 = stdlib.add(v1245, v1246);
          await stdlib.mapSet(map5, v1211, v1247);
          await stdlib.mapSet(map5, v913, stdlib.checkedBigNumberify('./index.rsh:140:43:decimal', stdlib.UInt_max, '0'));
          const v1248 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v818), null);
          const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:141:61:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map5, v818, v1249);
          const cv833 = true;
          const cv835 = v915;
          const cv842 = v1239;
          
          v833 = cv833;
          v835 = cv835;
          v842 = cv842;
          
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
  
  
  const [v813, v814, v818, v828, v842] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc1, ctc2, ctc2]);
  const v868 = ctc.selfAddress();
  const v870 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:163:10:application call to [unknown function] (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:161:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'in',
    who: 'Schemers_checkBalance'
    });
  const v872 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v868), null);
  const v873 = stdlib.fromSome(v872, v813);
  const v874 = stdlib.addressEq(v873, v813);
  const v875 = v874 ? false : true;
  stdlib.assert(v875, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:31:application call to "user_balance" (defined at: ./index.rsh:108:43:function exp)', 'at ./index.rsh:163:10:application call to [unknown function] (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:163:10:application call to [unknown function] (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:161:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Not a member',
    who: 'Schemers_checkBalance'
    });
  const v877 = stdlib.addressEq(v868, v813);
  const v878 = v877 ? false : true;
  stdlib.assert(v878, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:164:31:application call to "user_balance" (defined at: ./index.rsh:108:43:function exp)', 'at ./index.rsh:163:10:application call to [unknown function] (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:163:10:application call to [unknown function] (defined at: ./index.rsh:163:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_checkBalance0_63" (defined at: ./index.rsh:161:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Unable to check balance',
    who: 'Schemers_checkBalance'
    });
  const v882 = ['Schemers_checkBalance0_63', v870];
  
  const txn1 = await (ctc.sendrecv({
    args: [v813, v814, v818, v828, v842, v882],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:166:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn1;
      
      switch (v914[0]) {
        case 'Schemers_checkBalance0_63': {
          const v917 = v914[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_checkBalance"
            });
          ;
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v913), null);
          const v936 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v913), null);
          const v937 = stdlib.fromSome(v936, stdlib.checkedBigNumberify('./index.rsh:112:63:decimal', stdlib.UInt_max, '0'));
          const v938 = await txn1.getOutput('Schemers_checkBalance', 'v937', ctc2, v937);
          
          const v1714 = v842;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1029 = v914[1];
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1141 = v914[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc1, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn1;
  switch (v914[0]) {
    case 'Schemers_checkBalance0_63': {
      const v917 = v914[1];
      undefined /* setApiDetails */;
      ;
      const v928 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v913), null);
      const v929 = stdlib.fromSome(v928, v813);
      const v930 = stdlib.addressEq(v929, v813);
      const v931 = v930 ? false : true;
      stdlib.assert(v931, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:36:application call to "user_balance" (defined at: ./index.rsh:108:43:function exp)', 'at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)'],
        msg: 'Not a member',
        who: 'Schemers_checkBalance'
        });
      const v933 = stdlib.addressEq(v913, v813);
      const v934 = v933 ? false : true;
      stdlib.assert(v934, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:168:36:application call to "user_balance" (defined at: ./index.rsh:108:43:function exp)', 'at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)'],
        msg: 'Unable to check balance',
        who: 'Schemers_checkBalance'
        });
      const v936 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v913), null);
      const v937 = stdlib.fromSome(v936, stdlib.checkedBigNumberify('./index.rsh:112:63:decimal', stdlib.UInt_max, '0'));
      const v938 = await txn1.getOutput('Schemers_checkBalance', 'v937', ctc2, v937);
      if (v503) {
        stdlib.protect(ctc0, await interact.out(v917, v938), {
          at: './index.rsh:162:7:application',
          fs: ['at ./index.rsh:162:7:application call to [unknown function] (defined at: ./index.rsh:162:7:function exp)', 'at ./index.rsh:169:10:application call to "k" (defined at: ./index.rsh:167:11:function exp)', 'at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)'],
          msg: 'out',
          who: 'Schemers_checkBalance'
          });
        }
      else {
        }
      
      const v1714 = v842;
      return;
      
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1029 = v914[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1141 = v914[1];
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
  
  
  const [v813, v814, v818, v828, v842] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc1, ctc2, ctc2]);
  const v845 = ctc.selfAddress();
  const v847 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'in',
    who: 'Schemers_joinPyramid'
    });
  const v848 = v847[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v851 = stdlib.addressEq(v845, v813);
  const v852 = v851 ? false : true;
  stdlib.assert(v852, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:27:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'cannot register as deployer',
    who: 'Schemers_joinPyramid'
    });
  const v854 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v845), null);
  const v855 = stdlib.fromSome(v854, v813);
  const v856 = stdlib.addressEq(v855, v845);
  const v857 = v856 ? false : true;
  stdlib.assert(v857, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:27:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Already a member sorry',
    who: 'Schemers_joinPyramid'
    });
  const v859 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v848), null);
  const v860 = stdlib.fromSome(v859, stdlib.checkedBigNumberify('./index.rsh:91:49:decimal', stdlib.UInt_max, '0'));
  const v861 = stdlib.lt(v860, stdlib.checkedBigNumberify('./index.rsh:91:54:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v861, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:153:27:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:152:11:application call to [unknown function] (defined at: ./index.rsh:152:11:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_joinPyramid0_63" (defined at: ./index.rsh:150:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'No empty slots for that user',
    who: 'Schemers_joinPyramid'
    });
  const v866 = ['Schemers_joinPyramid0_63', v847];
  
  const txn1 = await (ctc.sendrecv({
    args: [v813, v814, v818, v828, v842, v866],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v814, []],
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
      
      const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn1;
      
      switch (v914[0]) {
        case 'Schemers_checkBalance0_63': {
          const v917 = v914[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1029 = v914[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_joinPyramid"
            });
          const v1038 = stdlib.add(v842, v814);
          sim_r.txns.push({
            amt: v814,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1057 = v1029[stdlib.checkedBigNumberify('./index.rsh:150:9:spread', stdlib.UInt_max, '0')];
          const v1058 = await txn1.getOutput('Schemers_joinPyramid', 'v913', ctc1, v913);
          
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v913), null);
          const v1072 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1057), null);
          const v1073 = stdlib.fromSome(v1072, stdlib.checkedBigNumberify('./index.rsh:91:49:decimal', stdlib.UInt_max, '0'));
          const v1078 = stdlib.add(v1073, stdlib.checkedBigNumberify('./index.rsh:97:56:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 2, v1057, v1078);
          await stdlib.simMapSet(sim_r, 4, v913, v1057);
          await stdlib.simMapSet(sim_r, 1, v913, v913);
          const v1079 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v1057), null);
          const v1080 = stdlib.fromSome(v1079, stdlib.checkedBigNumberify('./index.rsh:101:49:decimal', stdlib.UInt_max, '0'));
          const v1081 = stdlib.add(v1080, stdlib.checkedBigNumberify('./index.rsh:101:54:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 3, v1057, v1081);
          await stdlib.simMapSet(sim_r, 5, v913, stdlib.checkedBigNumberify('./index.rsh:102:43:decimal', stdlib.UInt_max, '0'));
          const v1082 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1057), null);
          const v1083 = stdlib.fromSome(v1082, stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, '0'));
          const v1084 = stdlib.add(v1083, v814);
          await stdlib.simMapSet(sim_r, 5, v1057, v1084);
          const v1726 = v1038;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1141 = v914[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc1, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn1;
  switch (v914[0]) {
    case 'Schemers_checkBalance0_63': {
      const v917 = v914[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1029 = v914[1];
      undefined /* setApiDetails */;
      const v1038 = stdlib.add(v842, v814);
      ;
      const v1057 = v1029[stdlib.checkedBigNumberify('./index.rsh:150:9:spread', stdlib.UInt_max, '0')];
      const v1058 = await txn1.getOutput('Schemers_joinPyramid', 'v913', ctc1, v913);
      if (v503) {
        stdlib.protect(ctc0, await interact.out(v1029, v1058), {
          at: './index.rsh:151:7:application',
          fs: ['at ./index.rsh:151:7:application call to [unknown function] (defined at: ./index.rsh:151:7:function exp)', 'at ./index.rsh:157:10:application call to "k" (defined at: ./index.rsh:156:14:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
          msg: 'out',
          who: 'Schemers_joinPyramid'
          });
        }
      else {
        }
      
      const v1064 = stdlib.addressEq(v913, v813);
      const v1065 = v1064 ? false : true;
      stdlib.assert(v1065, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:85:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
        msg: 'cannot register as deployer',
        who: 'Schemers_joinPyramid'
        });
      const v1067 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v913), null);
      const v1068 = stdlib.fromSome(v1067, v813);
      const v1069 = stdlib.addressEq(v1068, v913);
      const v1070 = v1069 ? false : true;
      stdlib.assert(v1070, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:86:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
        msg: 'Already a member sorry',
        who: 'Schemers_joinPyramid'
        });
      const v1072 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1057), null);
      const v1073 = stdlib.fromSome(v1072, stdlib.checkedBigNumberify('./index.rsh:91:49:decimal', stdlib.UInt_max, '0'));
      const v1074 = stdlib.lt(v1073, stdlib.checkedBigNumberify('./index.rsh:91:54:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1074, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:24:application call to "register" (defined at: ./index.rsh:84:55:function exp)', 'at ./index.rsh:156:14:application call to [unknown function] (defined at: ./index.rsh:156:14:function exp)'],
        msg: 'No empty slots for that user',
        who: 'Schemers_joinPyramid'
        });
      const v1078 = stdlib.add(v1073, stdlib.checkedBigNumberify('./index.rsh:97:56:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map2, v1057, v1078);
      await stdlib.mapSet(map4, v913, v1057);
      await stdlib.mapSet(map1, v913, v913);
      const v1079 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v1057), null);
      const v1080 = stdlib.fromSome(v1079, stdlib.checkedBigNumberify('./index.rsh:101:49:decimal', stdlib.UInt_max, '0'));
      const v1081 = stdlib.add(v1080, stdlib.checkedBigNumberify('./index.rsh:101:54:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map3, v1057, v1081);
      await stdlib.mapSet(map5, v913, stdlib.checkedBigNumberify('./index.rsh:102:43:decimal', stdlib.UInt_max, '0'));
      const v1082 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1057), null);
      const v1083 = stdlib.fromSome(v1082, stdlib.checkedBigNumberify('./index.rsh:104:55:decimal', stdlib.UInt_max, '0'));
      const v1084 = stdlib.add(v1083, v814);
      await stdlib.mapSet(map5, v1057, v1084);
      const v1726 = v1038;
      return;
      
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1141 = v914[1];
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
  
  
  const [v813, v814, v818, v828, v842] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc1, ctc2, ctc2]);
  const v1255 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:184:7:application',
    fs: ['at ./index.rsh:184:7:application call to [unknown function] (defined at: ./index.rsh:184:7:function exp)', 'at ./index.rsh:183:32:application call to [unknown function] (defined at: ./index.rsh:183:32:function exp)'],
    msg: 'in',
    who: 'Schemers_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v813, v814, v818, v828, v842, v1255],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:184:7:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v1257], secs: v1259, time: v1258, didSend: v777, from: v1256 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Schemers_timesUp"
        });
      ;
      const v1260 = true;
      const v1261 = await txn1.getOutput('Schemers_timesUp', 'v1260', ctc8, v1260);
      
      sim_r.txns.push({
        kind: 'from',
        to: v813,
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
    tys: [ctc1, ctc2, ctc1, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1257], secs: v1259, time: v1258, didSend: v777, from: v1256 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1260 = true;
  const v1261 = await txn1.getOutput('Schemers_timesUp', 'v1260', ctc8, v1260);
  stdlib.protect(ctc0, await interact.out(v1257, v1261), {
    at: './index.rsh:184:7:application',
    fs: ['at ./index.rsh:184:7:application call to [unknown function] (defined at: ./index.rsh:184:7:function exp)', 'at ./index.rsh:185:8:application call to "k" (defined at: ./index.rsh:184:7:function exp)', 'at ./index.rsh:183:32:application call to [unknown function] (defined at: ./index.rsh:183:32:function exp)'],
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
  
  
  const [v813, v814, v818, v828, v842] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc2, ctc1, ctc2, ctc2]);
  const v884 = ctc.selfAddress();
  const v886 = stdlib.protect(ctc7, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:173:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'in',
    who: 'Schemers_withdraw'
    });
  const v888 = stdlib.addressEq(v884, v813);
  const v889 = v888 ? false : true;
  stdlib.assert(v889, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:117:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:173:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'You have no uplines',
    who: 'Schemers_withdraw'
    });
  const v891 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v884), null);
  const v892 = stdlib.fromSome(v891, stdlib.checkedBigNumberify('./index.rsh:119:53:decimal', stdlib.UInt_max, '0'));
  const v893 = stdlib.eq(v892, stdlib.checkedBigNumberify('./index.rsh:119:59:decimal', stdlib.UInt_max, '0'));
  const v894 = v893 ? false : true;
  stdlib.assert(v894, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:173:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Insufficient Balance',
    who: 'Schemers_withdraw'
    });
  const v896 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v884), null);
  const v897 = stdlib.fromSome(v896, v813);
  const v898 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v897), null);
  const v899 = stdlib.fromSome(v898, stdlib.checkedBigNumberify('./index.rsh:123:71:decimal', stdlib.UInt_max, '0'));
  const v900 = stdlib.ge(v899, stdlib.checkedBigNumberify('./index.rsh:123:77:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v900, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:173:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: 'Need at least two down lines',
    who: 'Schemers_withdraw'
    });
  const v903 = stdlib.gt(v842, v814);
  stdlib.assert(v903, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:176:45:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:175:10:application call to [unknown function] (defined at: ./index.rsh:175:10:function exp)', 'at ./index.rsh:76:53:application call to "runSchemers_withdraw0_63" (defined at: ./index.rsh:173:9:function exp)', 'at ./index.rsh:76:53:application call to [unknown function] (defined at: ./index.rsh:76:53:function exp)'],
    msg: null,
    who: 'Schemers_withdraw'
    });
  const v907 = ['Schemers_withdraw0_63', v886];
  
  const txn1 = await (ctc.sendrecv({
    args: [v813, v814, v818, v828, v842, v907],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:178:13:decimal', stdlib.UInt_max, '0'), []],
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
      
      const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn1;
      
      switch (v914[0]) {
        case 'Schemers_checkBalance0_63': {
          const v917 = v914[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_63': {
          const v1029 = v914[1];
          
          break;
          }
        case 'Schemers_withdraw0_63': {
          const v1141 = v914[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_withdraw"
            });
          ;
          const v1205 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v913), null);
          const v1210 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v913), null);
          const v1211 = stdlib.fromSome(v1210, v813);
          stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1211), null);
          let v1220;
          switch (v1205[0]) {
            case 'None': {
              const v1221 = v1205[1];
              v1220 = stdlib.checkedBigNumberify('./index.rsh:130:19:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1222 = v1205[1];
              const v1223 = stdlib.mul(v1222, stdlib.checkedBigNumberify('./index.rsh:131:25:decimal', stdlib.UInt_max, '30'));
              const v1224 = stdlib.div(v1223, stdlib.checkedBigNumberify('./index.rsh:131:31:decimal', stdlib.UInt_max, '100'));
              v1220 = v1224;
              
              break;
              }
            }
          const v1226 = stdlib.gt(v842, v1220);
          const v1227 = v1226 ? v1220 : v842;
          const v1231 = await txn1.getOutput('Schemers_withdraw', 'v1227', ctc2, v1227);
          
          const v1239 = stdlib.sub(v842, v1227);
          sim_r.txns.push({
            kind: 'from',
            to: v913,
            tok: undefined /* Nothing */
            });
          const v1244 = stdlib.protect(map5_ctc, await stdlib.simMapRef(sim_r, 5, v1211), null);
          const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:138:77:decimal', stdlib.UInt_max, '0'));
          const v1246 = stdlib.mul(v1227, stdlib.checkedBigNumberify('./index.rsh:139:22:decimal', stdlib.UInt_max, '2'));
          const v1247 = stdlib.add(v1245, v1246);
          await stdlib.simMapSet(sim_r, 5, v1211, v1247);
          await stdlib.simMapSet(sim_r, 5, v913, stdlib.checkedBigNumberify('./index.rsh:140:43:decimal', stdlib.UInt_max, '0'));
          const v1248 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v818), null);
          const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:141:61:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 5, v818, v1249);
          const v1741 = v1239;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc1, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v914], secs: v916, time: v915, didSend: v503, from: v913 } = txn1;
  switch (v914[0]) {
    case 'Schemers_checkBalance0_63': {
      const v917 = v914[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_63': {
      const v1029 = v914[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_63': {
      const v1141 = v914[1];
      undefined /* setApiDetails */;
      ;
      const v1202 = stdlib.addressEq(v913, v813);
      const v1203 = v1202 ? false : true;
      stdlib.assert(v1203, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:117:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
        msg: 'You have no uplines',
        who: 'Schemers_withdraw'
        });
      const v1205 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v913), null);
      const v1206 = stdlib.fromSome(v1205, stdlib.checkedBigNumberify('./index.rsh:119:53:decimal', stdlib.UInt_max, '0'));
      const v1207 = stdlib.eq(v1206, stdlib.checkedBigNumberify('./index.rsh:119:59:decimal', stdlib.UInt_max, '0'));
      const v1208 = v1207 ? false : true;
      stdlib.assert(v1208, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
        msg: 'Insufficient Balance',
        who: 'Schemers_withdraw'
        });
      const v1210 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v913), null);
      const v1211 = stdlib.fromSome(v1210, v813);
      const v1212 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1211), null);
      const v1213 = stdlib.fromSome(v1212, stdlib.checkedBigNumberify('./index.rsh:123:71:decimal', stdlib.UInt_max, '0'));
      const v1214 = stdlib.ge(v1213, stdlib.checkedBigNumberify('./index.rsh:123:77:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1214, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:122:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
        msg: 'Need at least two down lines',
        who: 'Schemers_withdraw'
        });
      const v1217 = stdlib.gt(v842, v814);
      stdlib.assert(v1217, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:126:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:42:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:116:66:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
        msg: null,
        who: 'Schemers_withdraw'
        });
      let v1220;
      switch (v1205[0]) {
        case 'None': {
          const v1221 = v1205[1];
          v1220 = stdlib.checkedBigNumberify('./index.rsh:130:19:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1222 = v1205[1];
          const v1223 = stdlib.mul(v1222, stdlib.checkedBigNumberify('./index.rsh:131:25:decimal', stdlib.UInt_max, '30'));
          const v1224 = stdlib.div(v1223, stdlib.checkedBigNumberify('./index.rsh:131:31:decimal', stdlib.UInt_max, '100'));
          v1220 = v1224;
          
          break;
          }
        }
      const v1226 = stdlib.gt(v842, v1220);
      const v1227 = v1226 ? v1220 : v842;
      const v1229 = stdlib.ge(v842, v1227);
      stdlib.assert(v1229, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:134:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:180:51:application call to [unknown function] (defined at: ./index.rsh:127:19:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
        msg: 'Balance Empty',
        who: 'Schemers_withdraw'
        });
      const v1231 = await txn1.getOutput('Schemers_withdraw', 'v1227', ctc2, v1227);
      if (v503) {
        stdlib.protect(ctc0, await interact.out(v1141, v1231), {
          at: './index.rsh:174:7:application',
          fs: ['at ./index.rsh:174:7:application call to [unknown function] (defined at: ./index.rsh:174:7:function exp)', 'at ./index.rsh:135:18:application call to "confirm" (defined at: ./index.rsh:179:11:function exp)', 'at ./index.rsh:180:51:application call to [unknown function] (defined at: ./index.rsh:127:19:function exp)', 'at ./index.rsh:179:11:application call to [unknown function] (defined at: ./index.rsh:179:11:function exp)'],
          msg: 'out',
          who: 'Schemers_withdraw'
          });
        }
      else {
        }
      
      const v1239 = stdlib.sub(v842, v1227);
      ;
      const v1244 = stdlib.protect(map5_ctc, await stdlib.mapRef(map5, v1211), null);
      const v1245 = stdlib.fromSome(v1244, stdlib.checkedBigNumberify('./index.rsh:138:77:decimal', stdlib.UInt_max, '0'));
      const v1246 = stdlib.mul(v1227, stdlib.checkedBigNumberify('./index.rsh:139:22:decimal', stdlib.UInt_max, '2'));
      const v1247 = stdlib.add(v1245, v1246);
      await stdlib.mapSet(map5, v1211, v1247);
      await stdlib.mapSet(map5, v913, stdlib.checkedBigNumberify('./index.rsh:140:43:decimal', stdlib.UInt_max, '0'));
      const v1248 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v818), null);
      const v1249 = stdlib.fromSome(v1248, stdlib.checkedBigNumberify('./index.rsh:141:61:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map5, v818, v1249);
      const v1741 = v1239;
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
  appApproval: `BiAMAAECCAQgtgGrmMHjD5nDmO4PvdeuuA5IUCYEAQEBAAAJAQAAAAAAAAAAIjUAMRhBBpoqZEkiWzUBJVs1AjEZIxJBABwxACEGr0sBKUsCVwB/ZksBKEsCV383ZkhIQgZVNhoAF0lBAFsiNQQjNQZJIQcMQAAfSSEIDEAACCEIEkQqQgBeIQcSRDYaATX/KDT/UEIAqkkhCQxAABMhCRJEKjX/gAECNP9QMgNQQgCQgfGkspwKEkQqNf8pNP9QMgNQQgB7NhoCFzUENhoDNhoBF0mBAwxABA9JIQQMQABfIQQSRCEENAESRDQESSISTDQCEhFEKWRJNQMhCls1/0k1BTX+gATU4BgtNP5QsDIGNP8PRIAJAAAAAAAABOwBsCg1BzQDVwAgNAMhBVs0A1coIDT/IjIGNAMhC1tCBPVIIQQ0ARJENARJIhJMNAISEUQpZEk1A0lKSVcAIDX/IQVbNf5XKCA1/SEKWzX8IQtbNftJNQU1+oAEFJFA1DT6ULAyBjT8DEQ0+iJVSSMMQALxSSQMQAFVJBJEMQA0/xNEMQCIBUZXrQk1+SI0+Uk1+CNbNPgiVU1ENP8xAIgFLFeMIUk191cBIDT3IlVNNfgiNPiIBRZXeglJNfcjWzT3IlVNJA9ENPs0/g1ENPkiVUAABiI190IAEjT5I1tJNfaBHguBZAo190IAADT7NPc0+zT3DU019jT7NPYPRIAIAAAAAAAABMs09hZQsDT2FjUHsSKyATT2sggjshAxALIHszT4SYgEpSgiNPiIBJ5XrQlJNfUjWzT1IlVNNPYkCwgWUDX1VwCtNPVQSwEpSwJXAH9mSwEoSwJXfzdmSEgxADEAiARnKzX1VwCtNPVQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/UmIBEQoIjT9iAQ9V4MJSTX1I1s09SJVTRZQNfVXAK009VBLASlLAlcAf2ZLAShLAld/N2ZISDT/NP40/TT8IzIGNPs09glCA0hINPpXASA1+TT+iAQJNPk1+IAIAAAAAAAAA5ExAFCwMQA1BzEANP8TRDT/MQCIA89XWSFJNfdXASA09yJVTTEAE0QiNPiIA7dXeglJNfYjWzT2IlVNSTX3JAxENPhJiAOeKDT3IwgWUDX2SVcAejT2UExXgzNQSwEpSwJXAH9mSwEoSwJXfzdmSEgxADEAiANuKDT4UDX2SVcAjDT2UExXrQlQSwEpSwJXAH9mSwEoSwJXfzdmSEgxADEAiANBKDEAUDX2SVcAWTT2UExXejxQSwEpSwJXAH9mSwEoSwJXfzdmSEg0+EmIAxUoIjT4iAMOV4MJSTX2I1s09iJVTSMIFlA19klXAIM09lBMV4wqUEsBKUsCVwB/ZksBKEsCV383ZkhIMQAxAIgC1Cs19lcArTT2UEsBKUsCVwB/ZksBKEsCV383ZkhINPhJiAKxKCI0+IgCqletCUk19iNbNPYiVU00/ggWUDX2VwCtNPZQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/zT+NP00/CMyBjT7NP4IQgGySDT/MQCIAmFXWSFJNflXASA0+SJVTTT/E0QxADT/E0SACAAAAAAAAAOpIjEAiAI5V60JSTX5I1s0+SJVTRZQsCIxAIgCI1etCUk1+SNbNPkiVU0WNQc0/zT+NP00/CMyBjT7QgFMSSMMQADzIxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDVwAgNf+ABJqLkXSwNP8xABJENP9JiAHNKDT/UDX+SVcAWTT+UExXejxQSwEpSwJXAH9mSwEoSwJXfzdmSEg0/0mIAaEoNP9QNf5JVwCMNP5QTFetCVBLASlLAlcAf2ZLAShLAld/N2ZISDT/SYgBdSs1/lcArTT+UEsBKUsCVwB/ZksBKEsCV383ZkhINP9JiAFSKDT/Ja9QJa9QNP9QJa9QUDX+V1ldNP5MUEsBKUsCVwB/ZksBKEsCV383ZkhINP80AyEFWzEANAOBMFs0A4EoWwgjMgYiQgBTSIGgjQaIARkiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwMQA0/xZQNP4WUDIGFlApSwFXADhnSCM1ATIGNQJCAGY1/zX+Nf01/DX7Nfo1+TT9QQAkNPk0+hZQNPtQNPwWUDT/FlApSwFXAFhnSCEENQEyBjUCQgAvsSKyATT/sggjshA0+bIHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEJDE3EkQiNQEiNQJC/69JMRhhQAAFSCEGr4lJKWJLAShiUExIiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 2,
  mapDataSize: 182,
  stateKeys: 1,
  stateSize: 88,
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
                "name": "v814",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v815",
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
                "name": "v814",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v815",
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
                "name": "v914",
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
                "name": "v1257",
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
    "name": "_reach_oe_v1227",
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
    "name": "_reach_oe_v1260",
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
    "name": "_reach_oe_v913",
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
    "name": "_reach_oe_v937",
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
                "name": "v914",
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
                "name": "v1257",
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
  Bytecode: `0x6080604052604051620026203803806200262083398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61232980620002f76000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063cadc2e7a11610056578063cadc2e7a14610254578063dc01fb9d14610274578063ee90ecaf14610294578063ef3702ab1461029c57005b806383230757146101dc578063a98bf223146101f1578063ab53f2c614610204578063acf0cc221461022757005b806373cf3fbb116100bd57806373cf3fbb1461018957806377e591d414610191578063817d57f3146101a457806382b64760146101c457005b806306dc92ff146100f45780631e93b0f11461012a5780632c10a159146101495780633bc5b7bf1461015c57005b366100f257005b005b34801561010057600080fd5b5061011461010f366004611d18565b6102c7565b6040516101219190611d62565b60405180910390f35b34801561013657600080fd5b506003545b604051908152602001610121565b6100f2610157366004611daa565b6102f3565b34801561016857600080fd5b5061017c610177366004611d18565b610317565b6040516101219190611dc6565b61013b610328565b6100f261019f366004611e2d565b610358565b3480156101b057600080fd5b506101146101bf366004611d18565b610378565b6101cc61039e565b6040519015158152602001610121565b3480156101e857600080fd5b5060015461013b565b6100f26101ff366004611daa565b6103cd565b34801561021057600080fd5b506102196103ed565b604051610121929190611e3f565b34801561023357600080fd5b50610247610242366004611d18565b61048a565b6040516101219190611e9c565b34801561026057600080fd5b5061024761026f366004611d18565b6104b0565b34801561028057600080fd5b5061011461028f366004611d18565b6104d6565b61013b6104fc565b6102af6102aa366004611d18565b610529565b6040516001600160a01b039091168152602001610121565b60408051606081018252600080825260208201819052918101919091526102ed8261056d565b92915050565b6102fb611a55565b61031361030d36849003840184611f7d565b82610640565b5050565b61031f611a88565b6102ed8261092e565b6000610332611aac565b60208101515160029052610344611a55565b61034e8282610a20565b6060015192915050565b610360611a55565b61031361037236849003840184611fb3565b82610a20565b60408051606081018252600080825260208201819052918101919091526102ed82611491565b60006103a8611af6565b6020810151600090526103b9611a55565b6103c3828261151e565b6040015192915050565b6103d5611a55565b6103136103e73684900384018461206c565b8261151e565b600060606000546002808054610402906120c4565b80601f016020809104026020016040519081016040528092919081815260200182805461042e906120c4565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102ed826116f6565b60408051606081018252600080825260208201819052918101919091526102ed826117c2565b60408051606081018252600080825260208201819052918101919091526102ed8261184f565b6000610506611aac565b60208101515160009052610518611a55565b6105228282610a20565b5192915050565b6000610533611aac565b60208101805151600190525151604001516001600160a01b0384169052610558611a55565b6105628282610a20565b602001519392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff1660018111156105b9576105b9611d3c565b1415610630576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156105fa576105fa611d3c565b600181111561060b5761060b611d3c565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b610650600160005414600a6118dc565b815161066b90158061066457508251600154145b600b6118dc565b60008080556002805461067d906120c4565b80601f01602080910402602001604051908101604052809291908181526020018280546106a9906120c4565b80156106f65780601f106106cb576101008083540402835291602001916106f6565b820191906000526020600020905b8154815290600101906020018083116106d957829003601f168201915b505050505080602001905181019061070e91906120f9565b9050610718611b20565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161076b341560086118dc565b8151610783906001600160a01b0316331460096118dc565b81516001600160a01b0390811660009081526005602081815260408084208054600160ff19918216811790925588518716808752838720805462010000600160b01b031990811662010000938402179091558a51891688526008865284882080548416851790558a518916808952858920805490921692029190911790558851871686526009845282862080548216831790558851871686528286208201869055885188519088169052875184018690528751830186905288518851908816606091820152885160809081018890528a518916885260048087528589208054909416851790935589518b518a1689529785902088519481018054958b166001600160a01b031996871617905595880151600287015593870151600386015586015190840180549190971691161790945591909201519101556108c3611b33565b825181516001600160a01b03909116905260208084015182519091015280513360409182015283015160608401516108fb919061218c565b815160600152602080820180516001905280514392019190915251600060409091015261092781611901565b5050505050565b610936611a88565b60016001600160a01b03831660009081526004602052604090205460ff16600181111561096557610965611d3c565b1415610630576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156109a6576109a6611d3c565b60018111156109b7576109b7611d3c565b81528154610100900460ff1615156020808301919091526040805160a08101825260018501546001600160a01b03908116825260028601549382019390935260038501548183015260048501549092166060830152600590930154608082015291015292915050565b610a3060046000541460196118dc565b8151610a4b901580610a4457508251600154145b601a6118dc565b600080805560028054610a5d906120c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610a89906120c4565b8015610ad65780601f10610aab57610100808354040283529160200191610ad6565b820191906000526020600020905b815481529060010190602001808311610ab957829003601f168201915b5050505050806020019051810190610aee91906121a4565b9050610af8611b81565b610b0982606001514310601b6118dc565b7f8c12f02212ada7fc3de06e01a117304a130f6887cb28d15457948cb42bf690ac3385604051610b3a929190612231565b60405180910390a16000602085015151516002811115610b5c57610b5c611d3c565b1415610d0857610b6e3415600c6118dc565b8151610bd3906001600160a01b03166001610b88336117c2565b516001811115610b9a57610b9a611d3c565b14610ba6578351610bb4565b610baf336117c2565b604001515b6001600160a01b031614610bc9576001610bcc565b60005b600d6118dc565b8151610bf9906001600160a01b03163314610bef576001610bf2565b60005b600e6118dc565b7f8b1af06230505a3a6f708f7145f678e95d34c5ed24b148622f6531fab7aa625d6001610c253361184f565b516001811115610c3757610c37611d3c565b14610c43576000610c51565b610c4c3361184f565b604001515b60405190815260200160405180910390a16001610c6d3361184f565b516001811115610c7f57610c7f611d3c565b14610c8b576000610c99565b610c943361184f565b604001515b8352610ca3611b33565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451909101528083018051600190528051439201919091526080850151905190910152610d0281611901565b5061148b565b6001602085015151516002811115610d2257610d22611d3c565b14156110855760208085015151604001518252820151610d45903414600f6118dc565b6040513381527f82b822085045e93d05beba4fe874687586a88ca9970d8edf05e28c28175639269060200160405180910390a133602084018190528251610da7916001600160a01b0390911614610d9d576001610da0565b60005b60106118dc565b610e01336001610db6336117c2565b516001811115610dc857610dc8611d3c565b14610dd4578351610de2565b610ddd336117c2565b604001515b6001600160a01b031614610df7576001610dfa565b60005b60116118dc565b6001815151610e0f90611491565b516001811115610e2157610e21611d3c565b14610e2d576000610e3e565b805151610e3990611491565b604001515b60208201819052610e539060021160126118dc565b8051516001600160a01b03166000908152600660209081526040909120805460ff1916600190811790915590820151610e8c919061218c565b8151516001600160a01b0390811660009081526006602090815260408083206001908101959095553380845260088352818420805488515161ff01600160b01b0319918216620100009189168202178917909255600585528386208054929093029116178617905585515190931682526007905220805460ff1916821790558151518190610f199061056d565b516001811115610f2b57610f2b611d3c565b14610f37576000610f48565b815151610f439061056d565b604001515b610f52919061218c565b8151516001600160a01b03908116600090815260076020908152604080832060019081019590955533835260098252808320805460ff1990811687178255908601849055865151909416835290912080549092168317909155830151825151909190610fbd9061184f565b516001811115610fcf57610fcf611d3c565b14610fdb576000610fec565b815151610fe79061184f565b604001515b610ff6919061218c565b8151516001600160a01b031660009081526009602052604090206001015561101c611b33565b825181516001600160a01b039182169052602080850180518451830152604080870151855194169301929092526060808601518451909101528083018051600190525143910152516080840151611073919061218c565b602082015160400152610d0281611901565b600260208501515151600281111561109f5761109f611d3c565b141561148b576110b1341560136118dc565b81516110d7906001600160a01b031633146110cd5760016110d0565b60005b60146118dc565b6110e03361184f565b604082015261112f60006001604084015151600181111561110357611103611d3c565b1461110f576000611119565b8260400151604001515b14611125576001611128565b60005b60156118dc565b600161113a336116f6565b51600181111561114c5761114c611d3c565b14611158578151611166565b611161336116f6565b604001515b6001600160a01b031660608201526111c1600260016111888460600151611491565b51600181111561119a5761119a611d3c565b146111a65760006111b8565b6111b38360600151611491565b604001515b101560166118dc565b6111d6826020015183608001511160176118dc565b600060408201515160018111156111ef576111ef611d3c565b1415611201576000608082015261124e565b6001604082015151600181111561121a5761121a611d3c565b141561124e57604080820151015160a0820181905260649061123e90601e9061229b565b61124891906122ba565b60808201525b806080015182608001511161126757816080015161126d565b80608001515b60c08201819052608083015161128691111560186118dc565b7f9a47cff123aaac4ec0f1a6b58042834f0bdab812055a7eee3e1df2205dce188c8160c001516040516112bb91815260200190565b60405180910390a160c081018051606085015251604051339180156108fc02916000818181858888f193505050501580156112fa573d6000803e3d6000fd5b5060608101516001600160a01b03166000908152600960205260409020805460ff1916600117905560c08101516113339060029061229b565b6001611342836060015161184f565b51600181111561135457611354611d3c565b14611360576000611372565b61136d826060015161184f565b604001515b61137c919061218c565b60608201516001600160a01b03908116600090815260096020526040808220600190810194909455338252808220805460ff1990811686178255908501839055868201805190941683529120805490911683179055516113db9061056d565b5160018111156113ed576113ed611d3c565b146113f957600061140b565b611406826040015161056d565b604001515b6040808401516001600160a01b0316600090815260096020522060010155611431611b33565b825181516001600160a01b039182169052602080850151835182015260408086015184519316920191909152606080850151835190910152808201805160019052514391015260c0820151608084015161107391906122dc565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff1660018111156114dd576114dd611d3c565b1415610630576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156105fa576105fa611d3c565b61152e600460005414601d6118dc565b815161154990158061154257508251600154145b601e6118dc565b60008080556002805461155b906120c4565b80601f0160208091040260200160405190810160405280929190818152602001828054611587906120c4565b80156115d45780601f106115a9576101008083540402835291602001916115d4565b820191906000526020600020905b8154815290600101906020018083116115b757829003601f168201915b50505050508060200190518101906115ec91906121a4565b90506116008160600151431015601f6118dc565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16116543415601c6118dc565b604051600181527fbe4d264cbaa8af768c0b1d5f5c5fbbecfc7389131a4e74f918f0f1f668062f099060200160405180910390a160016040830152611697611b33565b815181516001600160a01b03918216905260208084015183518201526040808501518451931692810192909252606080850151845190910152808301805160009052805143920191909152608084015190519091015261148b81611901565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111561174257611742611d3c565b1415610630576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff16600181111561178357611783611d3c565b600181111561179457611794611d3c565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff16600181111561180e5761180e611d3c565b1415610630576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561178357611783611d3c565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526009602052604090205460ff16600181111561189b5761189b611d3c565b1415610630576001600160a01b038216600090815260096020526040908190208151606081019092528054829060ff1660018111156105fa576105fa611d3c565b816103135760405163100960cb60e01b81526004810182905260240160405180910390fd5b602081015151156119f8576119506040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528751606090810151818901908152858a01518401516080808b01918252600460005543600155855180890199909952955188860152925190971690860152945191840191909152925160a0808401919091528351808403909101815260c090920190925280516119f3926002920190611bef565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611a3b573d6000803e3d6000fd5b5060008080556001819055611a5290600290611c73565b50565b60405180608001604052806000815260200160006001600160a01b03168152602001600015158152602001600081525090565b6040805160608101825260008082526020820152908101611aa7611cad565b905290565b604051806040016040528060008152602001611aa76040805160a0810182526000602080830182815283850183905284519182019094528181526060830152608082015290815290565b604051806040016040528060008152602001611aa760405180602001604052806000151581525090565b6040518060200160405280611aa7611cad565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040805161010081018252600060e0820181815282526020820152908101611bc46040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b828054611bfb906120c4565b90600052602060002090601f016020900481019282611c1d5760008555611c63565b82601f10611c3657805160ff1916838001178555611c63565b82800160010185558215611c63579182015b82811115611c63578251825591602001919060010190611c48565b50611c6f929150611cee565b5090565b508054611c7f906120c4565b6000825580601f10611c8f575050565b601f016020900490600052602060002090810190611a529190611cee565b6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b5b80821115611c6f5760008155600101611cef565b6001600160a01b0381168114611a5257600080fd5b600060208284031215611d2a57600080fd5b8135611d3581611d03565b9392505050565b634e487b7160e01b600052602160045260246000fd5b60028110611a5257611a52611d3c565b81516060820190611d7281611d52565b808352506020830151151560208301526040830151604083015292915050565b600060408284031215611da457600080fd5b50919050565b600060408284031215611dbc57600080fd5b611d358383611d92565b815160e0820190611dd681611d52565b80835250602083015115156020830152604083015160018060a01b0380825116604085015260208201516060850152604082015160808501528060608301511660a085015250608081015160c08401525092915050565b600060a08284031215611da457600080fd5b82815260006020604081840152835180604085015260005b81811015611e7357858101830151858201606001528201611e57565b81811115611e85576000606083870101525b50601f01601f191692909201606001949350505050565b81516060820190611eac81611d52565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6040805190810167ffffffffffffffff81118282101715611f0557634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611f0557634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611f0557634e487b7160e01b600052604160045260246000fd5b8035801515811461063b57600080fd5b600060408284031215611f8f57600080fd5b611f97611ed4565b82358152611fa760208401611f6d565b60208201529392505050565b600081830360a0811215611fc657600080fd5b611fce611ed4565b833581526080601f1983011215611fe457600080fd5b611fec611f0b565b611ff4611f3c565b60208601356003811061200657600080fd5b815261201460408701611f6d565b60208201526020605f198501121561202b57600080fd5b612033611f0b565b9350606086013561204381611d03565b84526040810184905261205860808701611f6d565b606082015281526020820152949350505050565b6000818303604081121561207f57600080fd5b612087611ed4565b833581526020601f198301121561209d57600080fd5b6120a5611f0b565b91506120b360208501611f6d565b825260208101919091529392505050565b600181811c908216806120d857607f821691505b60208210811415611da457634e487b7160e01b600052602260045260246000fd5b60006080828403121561210b57600080fd5b6040516080810181811067ffffffffffffffff8211171561213c57634e487b7160e01b600052604160045260246000fd5b604052825161214a81611d03565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561219f5761219f612176565b500190565b600060a082840312156121b657600080fd5b60405160a0810181811067ffffffffffffffff821117156121e757634e487b7160e01b600052604160045260246000fd5b60405282516121f581611d03565b815260208381015190820152604083015161220f81611d03565b6040820152606083810151908201526080928301519281019290925250919050565b6001600160a01b038381168252825160208084019190915283015151805160c084019291906003811061226657612266611d3c565b80604086015250602081015115156060850152816040820151511660808501526060810151151560a085015250509392505050565b60008160001904831182151516156122b5576122b5612176565b500290565b6000826122d757634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156122ee576122ee612176565b50039056fea2646970667358221220b059ab79493d4d6d7e090246595e1a6f195a250ada306202138a3c7cc46d80ac64736f6c634300080c0033`,
  BytecodeLen: 9760,
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
    at: './index.rsh:189:11:after expr stmt semicolon',
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
