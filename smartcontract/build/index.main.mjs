// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
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
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Data({
    None: ctc2,
    Some: ctc1
    });
  const map0_ctc = ctc3;
  
  const map1_ctc = ctc4;
  
  const map2_ctc = ctc4;
  
  const map3_ctc = ctc3;
  
  const map4_ctc = ctc4;
  
  
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc2, ctc4, ctc4, ctc2, ctc4]);
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc5,
    Schemers_joinPyramid0_62: ctc6,
    Schemers_withdraw0_62: ctc5
    });
  const ctc8 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: false,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: false,
    ty: map4_ctc
    });
  
  
  const v808 = stdlib.protect(ctc3, interact.deadline, 'for Deployer\'s interact field deadline');
  const v809 = stdlib.protect(ctc3, interact.price, 'for Deployer\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v809, v808],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v813, v814], secs: v816, time: v815, didSend: v29, from: v812 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v813, v814], secs: v816, time: v815, didSend: v29, from: v812 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v812, v813, v814, v815],
    evt_cnt: 0,
    funcNum: 1,
    lct: v815,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [], secs: v819, time: v818, didSend: v34, from: v817 } = txn2;
      
      ;
      const v827 = stdlib.add(v815, v814);
      
      await stdlib.simMapSet(sim_r, 0, v812, v812);
      await stdlib.simMapSet(sim_r, 3, v812, v812);
      await stdlib.simMapSet(sim_r, 4, v812, stdlib.checkedBigNumberify('./index.rsh:57:26:decimal', stdlib.UInt_max, '0'));
      const v831 = true;
      const v833 = v818;
      const v840 = stdlib.checkedBigNumberify('./index.rsh:30:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v831;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v812,
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
    tys: [ctc1, ctc3, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v819, time: v818, didSend: v34, from: v817 } = txn2;
  ;
  const v820 = stdlib.addressEq(v812, v817);
  stdlib.assert(v820, {
    at: './index.rsh:39:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v827 = stdlib.add(v815, v814);
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:43:21:application',
    fs: ['at ./index.rsh:43:21:application call to [unknown function] (defined at: ./index.rsh:43:21:function exp)', 'at ./index.rsh:43:21:application call to "liftedInteract" (defined at: ./index.rsh:43:21:application)'],
    msg: 'ready',
    who: 'Deployer'
    });
  
  await stdlib.mapSet(map0, v812, v812);
  await stdlib.mapSet(map3, v812, v812);
  await stdlib.mapSet(map4, v812, stdlib.checkedBigNumberify('./index.rsh:57:26:decimal', stdlib.UInt_max, '0'));
  let v831 = true;
  let v833 = v818;
  let v840 = stdlib.checkedBigNumberify('./index.rsh:30:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v831;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc7],
      timeoutAt: ['time', v827],
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
      const {data: [v1255], secs: v1257, time: v1256, didSend: v776, from: v1254 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v1258 = true;
      await txn4.getOutput('Schemers_timesUp', 'v1258', ctc8, v1258);
      const cv831 = false;
      const cv833 = v1256;
      const cv840 = v840;
      
      v831 = cv831;
      v833 = cv833;
      v840 = cv840;
      
      continue;
      }
    else {
      const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn3;
      switch (v912[0]) {
        case 'Schemers_checkBalance0_62': {
          const v915 = v912[1];
          undefined /* setApiDetails */;
          ;
          const v926 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v911), null);
          const v927 = stdlib.fromSome(v926, v812);
          const v928 = stdlib.addressEq(v927, v812);
          const v929 = v928 ? false : true;
          stdlib.assert(v929, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:84:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:140:44:application call to "user_balance" (defined at: ./index.rsh:83:49:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
            msg: 'Not a member',
            who: 'Deployer'
            });
          const v931 = stdlib.addressEq(v911, v812);
          const v932 = v931 ? false : true;
          stdlib.assert(v932, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:85:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:140:44:application call to "user_balance" (defined at: ./index.rsh:83:49:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
            msg: 'Unable to check balance',
            who: 'Deployer'
            });
          const v934 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v911), null);
          const v935 = stdlib.fromSome(v934, stdlib.checkedBigNumberify('./index.rsh:87:73:decimal', stdlib.UInt_max, '0'));
          await txn3.getOutput('Schemers_checkBalance', 'v935', ctc3, v935);
          const cv831 = true;
          const cv833 = v913;
          const cv840 = v840;
          
          v831 = cv831;
          v833 = cv833;
          v840 = cv840;
          
          continue;
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v1027 = v912[1];
          undefined /* setApiDetails */;
          const v1036 = stdlib.add(v840, v813);
          ;
          const v1055 = v1027[stdlib.checkedBigNumberify('./index.rsh:124:13:spread', stdlib.UInt_max, '0')];
          await txn3.getOutput('Schemers_joinPyramid', 'v911', ctc1, v911);
          const v1062 = stdlib.addressEq(v911, v812);
          const v1063 = v1062 ? false : true;
          stdlib.assert(v1063, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:69:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:32:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'cannot register as deployer',
            who: 'Deployer'
            });
          const v1065 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v911), null);
          const v1066 = stdlib.fromSome(v1065, v812);
          const v1067 = stdlib.addressEq(v1066, v911);
          const v1068 = v1067 ? false : true;
          stdlib.assert(v1068, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:70:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:32:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'Already a member sorry',
            who: 'Deployer'
            });
          const v1070 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1055), null);
          const v1071 = stdlib.fromSome(v1070, stdlib.checkedBigNumberify('./index.rsh:71:61:decimal', stdlib.UInt_max, '0'));
          const v1072 = stdlib.lt(v1071, stdlib.checkedBigNumberify('./index.rsh:71:66:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1072, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:71:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:32:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
            msg: 'No empty slots for that user',
            who: 'Deployer'
            });
          const v1076 = stdlib.add(v1071, stdlib.checkedBigNumberify('./index.rsh:74:94:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map1, v1055, v1076);
          await stdlib.mapSet(map3, v911, v1055);
          await stdlib.mapSet(map0, v911, v911);
          const v1077 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1055), null);
          const v1078 = stdlib.fromSome(v1077, stdlib.checkedBigNumberify('./index.rsh:77:85:decimal', stdlib.UInt_max, '0'));
          const v1079 = stdlib.add(v1078, stdlib.checkedBigNumberify('./index.rsh:77:90:decimal', stdlib.UInt_max, '1'));
          await stdlib.mapSet(map2, v1055, v1079);
          await stdlib.mapSet(map4, v911, stdlib.checkedBigNumberify('./index.rsh:78:53:decimal', stdlib.UInt_max, '0'));
          const v1080 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1055), null);
          const v1081 = stdlib.fromSome(v1080, stdlib.checkedBigNumberify('./index.rsh:79:97:decimal', stdlib.UInt_max, '0'));
          const v1082 = stdlib.add(v1081, v813);
          await stdlib.mapSet(map4, v1055, v1082);
          const cv831 = true;
          const cv833 = v913;
          const cv840 = v1036;
          
          v831 = cv831;
          v833 = cv833;
          v840 = cv840;
          
          continue;
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v1139 = v912[1];
          undefined /* setApiDetails */;
          ;
          const v1200 = stdlib.addressEq(v911, v812);
          const v1201 = v1200 ? false : true;
          stdlib.assert(v1201, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:92:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
            msg: 'You have no uplines',
            who: 'Deployer'
            });
          const v1203 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v911), null);
          const v1204 = stdlib.fromSome(v1203, stdlib.checkedBigNumberify('./index.rsh:93:65:decimal', stdlib.UInt_max, '0'));
          const v1205 = stdlib.eq(v1204, stdlib.checkedBigNumberify('./index.rsh:93:71:decimal', stdlib.UInt_max, '0'));
          const v1206 = v1205 ? false : true;
          stdlib.assert(v1206, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:93:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
            msg: 'Insufficient Balance',
            who: 'Deployer'
            });
          const v1208 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v911), null);
          const v1209 = stdlib.fromSome(v1208, v812);
          const v1210 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1209), null);
          const v1211 = stdlib.fromSome(v1210, stdlib.checkedBigNumberify('./index.rsh:97:81:decimal', stdlib.UInt_max, '0'));
          const v1212 = stdlib.ge(v1211, stdlib.checkedBigNumberify('./index.rsh:97:87:decimal', stdlib.UInt_max, '2'));
          stdlib.assert(v1212, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:96:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
            msg: 'Need at least two down lines',
            who: 'Deployer'
            });
          const v1215 = stdlib.gt(v840, v813);
          stdlib.assert(v1215, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:100:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          let v1218;
          switch (v1203[0]) {
            case 'None': {
              const v1219 = v1203[1];
              v1218 = stdlib.checkedBigNumberify('./index.rsh:104:31:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1220 = v1203[1];
              const v1221 = stdlib.mul(v1220, stdlib.checkedBigNumberify('./index.rsh:105:37:decimal', stdlib.UInt_max, '30'));
              const v1222 = stdlib.div(v1221, stdlib.checkedBigNumberify('./index.rsh:105:43:decimal', stdlib.UInt_max, '100'));
              v1218 = v1222;
              
              break;
              }
            }
          const v1224 = stdlib.gt(v840, v1218);
          const v1225 = v1224 ? v1218 : v840;
          const v1227 = stdlib.ge(v840, v1225);
          stdlib.assert(v1227, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:108:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:59:application call to [unknown function] (defined at: ./index.rsh:101:27:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
            msg: 'Balance Empty',
            who: 'Deployer'
            });
          await txn3.getOutput('Schemers_withdraw', 'v1225', ctc3, v1225);
          const v1237 = stdlib.sub(v840, v1225);
          ;
          const v1242 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1209), null);
          const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:112:89:decimal', stdlib.UInt_max, '0'));
          const v1244 = stdlib.mul(v1225, stdlib.checkedBigNumberify('./index.rsh:113:34:decimal', stdlib.UInt_max, '2'));
          const v1245 = stdlib.add(v1243, v1244);
          await stdlib.mapSet(map4, v1209, v1245);
          await stdlib.mapSet(map4, v911, stdlib.checkedBigNumberify('./index.rsh:114:53:decimal', stdlib.UInt_max, '0'));
          const v1246 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v817), null);
          const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:115:71:decimal', stdlib.UInt_max, '0'));
          await stdlib.mapSet(map4, v817, v1247);
          const cv831 = true;
          const cv833 = v913;
          const cv840 = v1237;
          
          v831 = cv831;
          v833 = cv833;
          v840 = cv840;
          
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc5,
    Schemers_joinPyramid0_62: ctc6,
    Schemers_withdraw0_62: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v812, v813, v817, v827, v840] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v866 = ctc.selfAddress();
  const v868 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:137:16:application call to [unknown function] (defined at: ./index.rsh:137:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_checkBalance0_62" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'in',
    who: 'Schemers_checkBalance'
    });
  const v870 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v866), null);
  const v871 = stdlib.fromSome(v870, v812);
  const v872 = stdlib.addressEq(v871, v812);
  const v873 = v872 ? false : true;
  stdlib.assert(v873, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:84:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:43:application call to "user_balance" (defined at: ./index.rsh:83:49:function exp)', 'at ./index.rsh:137:16:application call to [unknown function] (defined at: ./index.rsh:137:16:function exp)', 'at ./index.rsh:137:16:application call to [unknown function] (defined at: ./index.rsh:137:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_checkBalance0_62" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'Not a member',
    who: 'Schemers_checkBalance'
    });
  const v875 = stdlib.addressEq(v866, v812);
  const v876 = v875 ? false : true;
  stdlib.assert(v876, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:85:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:137:43:application call to "user_balance" (defined at: ./index.rsh:83:49:function exp)', 'at ./index.rsh:137:16:application call to [unknown function] (defined at: ./index.rsh:137:16:function exp)', 'at ./index.rsh:137:16:application call to [unknown function] (defined at: ./index.rsh:137:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_checkBalance0_62" (defined at: ./index.rsh:135:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'Unable to check balance',
    who: 'Schemers_checkBalance'
    });
  const v880 = ['Schemers_checkBalance0_62', v868];
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v817, v827, v840, v880],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:138:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn1;
      
      switch (v912[0]) {
        case 'Schemers_checkBalance0_62': {
          const v915 = v912[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_checkBalance"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v911), null);
          const v934 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v911), null);
          const v935 = stdlib.fromSome(v934, stdlib.checkedBigNumberify('./index.rsh:87:73:decimal', stdlib.UInt_max, '0'));
          const v936 = await txn1.getOutput('Schemers_checkBalance', 'v935', ctc3, v935);
          
          const v1705 = v840;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v1027 = v912[1];
          
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v1139 = v912[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn1;
  switch (v912[0]) {
    case 'Schemers_checkBalance0_62': {
      const v915 = v912[1];
      undefined /* setApiDetails */;
      ;
      const v926 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v911), null);
      const v927 = stdlib.fromSome(v926, v812);
      const v928 = stdlib.addressEq(v927, v812);
      const v929 = v928 ? false : true;
      stdlib.assert(v929, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:84:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:140:44:application call to "user_balance" (defined at: ./index.rsh:83:49:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
        msg: 'Not a member',
        who: 'Schemers_checkBalance'
        });
      const v931 = stdlib.addressEq(v911, v812);
      const v932 = v931 ? false : true;
      stdlib.assert(v932, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:85:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:140:44:application call to "user_balance" (defined at: ./index.rsh:83:49:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
        msg: 'Unable to check balance',
        who: 'Schemers_checkBalance'
        });
      const v934 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v911), null);
      const v935 = stdlib.fromSome(v934, stdlib.checkedBigNumberify('./index.rsh:87:73:decimal', stdlib.UInt_max, '0'));
      const v936 = await txn1.getOutput('Schemers_checkBalance', 'v935', ctc3, v935);
      if (v502) {
        stdlib.protect(ctc0, await interact.out(v915, v936), {
          at: './index.rsh:136:13:application',
          fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:13:function exp)', 'at ./index.rsh:141:18:application call to "k" (defined at: ./index.rsh:139:17:function exp)', 'at ./index.rsh:139:17:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
          msg: 'out',
          who: 'Schemers_checkBalance'
          });
        }
      else {
        }
      
      const v1705 = v840;
      return;
      
      break;
      }
    case 'Schemers_joinPyramid0_62': {
      const v1027 = v912[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_62': {
      const v1139 = v912[1];
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc6,
    Schemers_joinPyramid0_62: ctc5,
    Schemers_withdraw0_62: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v812, v813, v817, v827, v840] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v843 = ctc.selfAddress();
  const v845 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:124:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'in',
    who: 'Schemers_joinPyramid'
    });
  const v846 = v845[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v849 = stdlib.addressEq(v843, v812);
  const v850 = v849 ? false : true;
  stdlib.assert(v850, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:69:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:35:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:124:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'cannot register as deployer',
    who: 'Schemers_joinPyramid'
    });
  const v852 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v843), null);
  const v853 = stdlib.fromSome(v852, v812);
  const v854 = stdlib.addressEq(v853, v843);
  const v855 = v854 ? false : true;
  stdlib.assert(v855, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:35:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:124:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'Already a member sorry',
    who: 'Schemers_joinPyramid'
    });
  const v857 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v846), null);
  const v858 = stdlib.fromSome(v857, stdlib.checkedBigNumberify('./index.rsh:71:61:decimal', stdlib.UInt_max, '0'));
  const v859 = stdlib.lt(v858, stdlib.checkedBigNumberify('./index.rsh:71:66:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v859, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:127:35:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:126:17:application call to [unknown function] (defined at: ./index.rsh:126:17:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_joinPyramid0_62" (defined at: ./index.rsh:124:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'No empty slots for that user',
    who: 'Schemers_joinPyramid'
    });
  const v864 = ['Schemers_joinPyramid0_62', v845];
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v817, v827, v840, v864],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v813, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn1;
      
      switch (v912[0]) {
        case 'Schemers_checkBalance0_62': {
          const v915 = v912[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v1027 = v912[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_joinPyramid"
            });
          const v1036 = stdlib.add(v840, v813);
          sim_r.txns.push({
            amt: v813,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1055 = v1027[stdlib.checkedBigNumberify('./index.rsh:124:13:spread', stdlib.UInt_max, '0')];
          const v1056 = await txn1.getOutput('Schemers_joinPyramid', 'v911', ctc1, v911);
          
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v911), null);
          const v1070 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1055), null);
          const v1071 = stdlib.fromSome(v1070, stdlib.checkedBigNumberify('./index.rsh:71:61:decimal', stdlib.UInt_max, '0'));
          const v1076 = stdlib.add(v1071, stdlib.checkedBigNumberify('./index.rsh:74:94:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 1, v1055, v1076);
          await stdlib.simMapSet(sim_r, 3, v911, v1055);
          await stdlib.simMapSet(sim_r, 0, v911, v911);
          const v1077 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1055), null);
          const v1078 = stdlib.fromSome(v1077, stdlib.checkedBigNumberify('./index.rsh:77:85:decimal', stdlib.UInt_max, '0'));
          const v1079 = stdlib.add(v1078, stdlib.checkedBigNumberify('./index.rsh:77:90:decimal', stdlib.UInt_max, '1'));
          await stdlib.simMapSet(sim_r, 2, v1055, v1079);
          await stdlib.simMapSet(sim_r, 4, v911, stdlib.checkedBigNumberify('./index.rsh:78:53:decimal', stdlib.UInt_max, '0'));
          const v1080 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1055), null);
          const v1081 = stdlib.fromSome(v1080, stdlib.checkedBigNumberify('./index.rsh:79:97:decimal', stdlib.UInt_max, '0'));
          const v1082 = stdlib.add(v1081, v813);
          await stdlib.simMapSet(sim_r, 4, v1055, v1082);
          const v1717 = v1036;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v1139 = v912[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn1;
  switch (v912[0]) {
    case 'Schemers_checkBalance0_62': {
      const v915 = v912[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_62': {
      const v1027 = v912[1];
      undefined /* setApiDetails */;
      const v1036 = stdlib.add(v840, v813);
      ;
      const v1055 = v1027[stdlib.checkedBigNumberify('./index.rsh:124:13:spread', stdlib.UInt_max, '0')];
      const v1056 = await txn1.getOutput('Schemers_joinPyramid', 'v911', ctc1, v911);
      if (v502) {
        stdlib.protect(ctc0, await interact.out(v1027, v1056), {
          at: './index.rsh:125:13:application',
          fs: ['at ./index.rsh:125:13:application call to [unknown function] (defined at: ./index.rsh:125:13:function exp)', 'at ./index.rsh:131:18:application call to "k" (defined at: ./index.rsh:130:20:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
          msg: 'out',
          who: 'Schemers_joinPyramid'
          });
        }
      else {
        }
      
      const v1062 = stdlib.addressEq(v911, v812);
      const v1063 = v1062 ? false : true;
      stdlib.assert(v1063, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:69:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:32:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
        msg: 'cannot register as deployer',
        who: 'Schemers_joinPyramid'
        });
      const v1065 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v911), null);
      const v1066 = stdlib.fromSome(v1065, v812);
      const v1067 = stdlib.addressEq(v1066, v911);
      const v1068 = v1067 ? false : true;
      stdlib.assert(v1068, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:70:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:32:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
        msg: 'Already a member sorry',
        who: 'Schemers_joinPyramid'
        });
      const v1070 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1055), null);
      const v1071 = stdlib.fromSome(v1070, stdlib.checkedBigNumberify('./index.rsh:71:61:decimal', stdlib.UInt_max, '0'));
      const v1072 = stdlib.lt(v1071, stdlib.checkedBigNumberify('./index.rsh:71:66:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1072, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:32:application call to "register" (defined at: ./index.rsh:68:61:function exp)', 'at ./index.rsh:130:20:application call to [unknown function] (defined at: ./index.rsh:130:20:function exp)'],
        msg: 'No empty slots for that user',
        who: 'Schemers_joinPyramid'
        });
      const v1076 = stdlib.add(v1071, stdlib.checkedBigNumberify('./index.rsh:74:94:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map1, v1055, v1076);
      await stdlib.mapSet(map3, v911, v1055);
      await stdlib.mapSet(map0, v911, v911);
      const v1077 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1055), null);
      const v1078 = stdlib.fromSome(v1077, stdlib.checkedBigNumberify('./index.rsh:77:85:decimal', stdlib.UInt_max, '0'));
      const v1079 = stdlib.add(v1078, stdlib.checkedBigNumberify('./index.rsh:77:90:decimal', stdlib.UInt_max, '1'));
      await stdlib.mapSet(map2, v1055, v1079);
      await stdlib.mapSet(map4, v911, stdlib.checkedBigNumberify('./index.rsh:78:53:decimal', stdlib.UInt_max, '0'));
      const v1080 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1055), null);
      const v1081 = stdlib.fromSome(v1080, stdlib.checkedBigNumberify('./index.rsh:79:97:decimal', stdlib.UInt_max, '0'));
      const v1082 = stdlib.add(v1081, v813);
      await stdlib.mapSet(map4, v1055, v1082);
      const v1717 = v1036;
      return;
      
      break;
      }
    case 'Schemers_withdraw0_62': {
      const v1139 = v912[1];
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Bool;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v812, v813, v817, v827, v840] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v1253 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:154:13:application',
    fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:153:36:application call to [unknown function] (defined at: ./index.rsh:153:36:function exp)'],
    msg: 'in',
    who: 'Schemers_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v817, v827, v840, v1253],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:154:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v1255], secs: v1257, time: v1256, didSend: v776, from: v1254 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Schemers_timesUp"
        });
      ;
      const v1258 = true;
      const v1259 = await txn1.getOutput('Schemers_timesUp', 'v1258', ctc6, v1258);
      
      sim_r.txns.push({
        kind: 'from',
        to: v812,
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
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1255], secs: v1257, time: v1256, didSend: v776, from: v1254 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1258 = true;
  const v1259 = await txn1.getOutput('Schemers_timesUp', 'v1258', ctc6, v1258);
  stdlib.protect(ctc0, await interact.out(v1255, v1259), {
    at: './index.rsh:154:13:application',
    fs: ['at ./index.rsh:154:13:application call to [unknown function] (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:157:14:application call to "k" (defined at: ./index.rsh:154:13:function exp)', 'at ./index.rsh:153:36:application call to [unknown function] (defined at: ./index.rsh:153:36:function exp)'],
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
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Data({
    Schemers_checkBalance0_62: ctc5,
    Schemers_joinPyramid0_62: ctc6,
    Schemers_withdraw0_62: ctc5
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc4;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  const map3_ctc = ctc2;
  const map3 = stdlib.newMap({
    ctc: ctc,
    idx: 3,
    isAPI: true,
    ty: map3_ctc
    });
  
  const map4_ctc = ctc4;
  const map4 = stdlib.newMap({
    ctc: ctc,
    idx: 4,
    isAPI: true,
    ty: map4_ctc
    });
  
  
  const [v812, v813, v817, v827, v840] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc3, ctc1, ctc3, ctc3]);
  const v882 = ctc.selfAddress();
  const v884 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'in',
    who: 'Schemers_withdraw'
    });
  const v886 = stdlib.addressEq(v882, v812);
  const v887 = v886 ? false : true;
  stdlib.assert(v887, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:92:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:57:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'You have no uplines',
    who: 'Schemers_withdraw'
    });
  const v889 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v882), null);
  const v890 = stdlib.fromSome(v889, stdlib.checkedBigNumberify('./index.rsh:93:65:decimal', stdlib.UInt_max, '0'));
  const v891 = stdlib.eq(v890, stdlib.checkedBigNumberify('./index.rsh:93:71:decimal', stdlib.UInt_max, '0'));
  const v892 = v891 ? false : true;
  stdlib.assert(v892, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:93:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:57:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'Insufficient Balance',
    who: 'Schemers_withdraw'
    });
  const v894 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v882), null);
  const v895 = stdlib.fromSome(v894, v812);
  const v896 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v895), null);
  const v897 = stdlib.fromSome(v896, stdlib.checkedBigNumberify('./index.rsh:97:81:decimal', stdlib.UInt_max, '0'));
  const v898 = stdlib.ge(v897, stdlib.checkedBigNumberify('./index.rsh:97:87:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v898, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:57:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: 'Need at least two down lines',
    who: 'Schemers_withdraw'
    });
  const v901 = stdlib.gt(v840, v813);
  stdlib.assert(v901, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:100:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:147:57:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:147:16:application call to [unknown function] (defined at: ./index.rsh:147:16:function exp)', 'at ./index.rsh:60:55:application call to "runSchemers_withdraw0_62" (defined at: ./index.rsh:145:13:function exp)', 'at ./index.rsh:60:55:application call to [unknown function] (defined at: ./index.rsh:60:55:function exp)'],
    msg: null,
    who: 'Schemers_withdraw'
    });
  const v905 = ['Schemers_withdraw0_62', v884];
  
  const txn1 = await (ctc.sendrecv({
    args: [v812, v813, v817, v827, v840, v905],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:148:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      stdlib.simMapDupe(sim_r, 3, map3);
      stdlib.simMapDupe(sim_r, 4, map4);
      
      const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn1;
      
      switch (v912[0]) {
        case 'Schemers_checkBalance0_62': {
          const v915 = v912[1];
          
          break;
          }
        case 'Schemers_joinPyramid0_62': {
          const v1027 = v912[1];
          
          break;
          }
        case 'Schemers_withdraw0_62': {
          const v1139 = v912[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Schemers_withdraw"
            });
          ;
          const v1203 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v911), null);
          const v1208 = stdlib.protect(map3_ctc, await stdlib.simMapRef(sim_r, 3, v911), null);
          const v1209 = stdlib.fromSome(v1208, v812);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1209), null);
          let v1218;
          switch (v1203[0]) {
            case 'None': {
              const v1219 = v1203[1];
              v1218 = stdlib.checkedBigNumberify('./index.rsh:104:31:decimal', stdlib.UInt_max, '0');
              
              break;
              }
            case 'Some': {
              const v1220 = v1203[1];
              const v1221 = stdlib.mul(v1220, stdlib.checkedBigNumberify('./index.rsh:105:37:decimal', stdlib.UInt_max, '30'));
              const v1222 = stdlib.div(v1221, stdlib.checkedBigNumberify('./index.rsh:105:43:decimal', stdlib.UInt_max, '100'));
              v1218 = v1222;
              
              break;
              }
            }
          const v1224 = stdlib.gt(v840, v1218);
          const v1225 = v1224 ? v1218 : v840;
          const v1229 = await txn1.getOutput('Schemers_withdraw', 'v1225', ctc3, v1225);
          
          const v1237 = stdlib.sub(v840, v1225);
          sim_r.txns.push({
            kind: 'from',
            to: v911,
            tok: undefined /* Nothing */
            });
          const v1242 = stdlib.protect(map4_ctc, await stdlib.simMapRef(sim_r, 4, v1209), null);
          const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:112:89:decimal', stdlib.UInt_max, '0'));
          const v1244 = stdlib.mul(v1225, stdlib.checkedBigNumberify('./index.rsh:113:34:decimal', stdlib.UInt_max, '2'));
          const v1245 = stdlib.add(v1243, v1244);
          await stdlib.simMapSet(sim_r, 4, v1209, v1245);
          await stdlib.simMapSet(sim_r, 4, v911, stdlib.checkedBigNumberify('./index.rsh:114:53:decimal', stdlib.UInt_max, '0'));
          const v1246 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v817), null);
          const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:115:71:decimal', stdlib.UInt_max, '0'));
          await stdlib.simMapSet(sim_r, 4, v817, v1247);
          const v1732 = v1237;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc1, ctc3, ctc3, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v912], secs: v914, time: v913, didSend: v502, from: v911 } = txn1;
  switch (v912[0]) {
    case 'Schemers_checkBalance0_62': {
      const v915 = v912[1];
      return;
      break;
      }
    case 'Schemers_joinPyramid0_62': {
      const v1027 = v912[1];
      return;
      break;
      }
    case 'Schemers_withdraw0_62': {
      const v1139 = v912[1];
      undefined /* setApiDetails */;
      ;
      const v1200 = stdlib.addressEq(v911, v812);
      const v1201 = v1200 ? false : true;
      stdlib.assert(v1201, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:92:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
        msg: 'You have no uplines',
        who: 'Schemers_withdraw'
        });
      const v1203 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v911), null);
      const v1204 = stdlib.fromSome(v1203, stdlib.checkedBigNumberify('./index.rsh:93:65:decimal', stdlib.UInt_max, '0'));
      const v1205 = stdlib.eq(v1204, stdlib.checkedBigNumberify('./index.rsh:93:71:decimal', stdlib.UInt_max, '0'));
      const v1206 = v1205 ? false : true;
      stdlib.assert(v1206, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:93:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
        msg: 'Insufficient Balance',
        who: 'Schemers_withdraw'
        });
      const v1208 = stdlib.protect(map3_ctc, await stdlib.mapRef(map3, v911), null);
      const v1209 = stdlib.fromSome(v1208, v812);
      const v1210 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1209), null);
      const v1211 = stdlib.fromSome(v1210, stdlib.checkedBigNumberify('./index.rsh:97:81:decimal', stdlib.UInt_max, '0'));
      const v1212 = stdlib.ge(v1211, stdlib.checkedBigNumberify('./index.rsh:97:87:decimal', stdlib.UInt_max, '2'));
      stdlib.assert(v1212, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
        msg: 'Need at least two down lines',
        who: 'Schemers_withdraw'
        });
      const v1215 = stdlib.gt(v840, v813);
      stdlib.assert(v1215, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:100:22:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:50:application call to "withdraw_accumulated_funds" (defined at: ./index.rsh:91:72:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
        msg: null,
        who: 'Schemers_withdraw'
        });
      let v1218;
      switch (v1203[0]) {
        case 'None': {
          const v1219 = v1203[1];
          v1218 = stdlib.checkedBigNumberify('./index.rsh:104:31:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1220 = v1203[1];
          const v1221 = stdlib.mul(v1220, stdlib.checkedBigNumberify('./index.rsh:105:37:decimal', stdlib.UInt_max, '30'));
          const v1222 = stdlib.div(v1221, stdlib.checkedBigNumberify('./index.rsh:105:43:decimal', stdlib.UInt_max, '100'));
          v1218 = v1222;
          
          break;
          }
        }
      const v1224 = stdlib.gt(v840, v1218);
      const v1225 = v1224 ? v1218 : v840;
      const v1227 = stdlib.ge(v840, v1225);
      stdlib.assert(v1227, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:108:26:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:150:59:application call to [unknown function] (defined at: ./index.rsh:101:27:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
        msg: 'Balance Empty',
        who: 'Schemers_withdraw'
        });
      const v1229 = await txn1.getOutput('Schemers_withdraw', 'v1225', ctc3, v1225);
      if (v502) {
        stdlib.protect(ctc0, await interact.out(v1139, v1229), {
          at: './index.rsh:146:13:application',
          fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:13:function exp)', 'at ./index.rsh:109:28:application call to "confirm" (defined at: ./index.rsh:149:17:function exp)', 'at ./index.rsh:150:59:application call to [unknown function] (defined at: ./index.rsh:101:27:function exp)', 'at ./index.rsh:149:17:application call to [unknown function] (defined at: ./index.rsh:149:17:function exp)'],
          msg: 'out',
          who: 'Schemers_withdraw'
          });
        }
      else {
        }
      
      const v1237 = stdlib.sub(v840, v1225);
      ;
      const v1242 = stdlib.protect(map4_ctc, await stdlib.mapRef(map4, v1209), null);
      const v1243 = stdlib.fromSome(v1242, stdlib.checkedBigNumberify('./index.rsh:112:89:decimal', stdlib.UInt_max, '0'));
      const v1244 = stdlib.mul(v1225, stdlib.checkedBigNumberify('./index.rsh:113:34:decimal', stdlib.UInt_max, '2'));
      const v1245 = stdlib.add(v1243, v1244);
      await stdlib.mapSet(map4, v1209, v1245);
      await stdlib.mapSet(map4, v911, stdlib.checkedBigNumberify('./index.rsh:114:53:decimal', stdlib.UInt_max, '0'));
      const v1246 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v817), null);
      const v1247 = stdlib.fromSome(v1246, stdlib.checkedBigNumberify('./index.rsh:115:71:decimal', stdlib.UInt_max, '0'));
      await stdlib.mapSet(map4, v817, v1247);
      const v1732 = v1237;
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
  appApproval: `BiAMAAECBCAIXauYweMPmcOY7g+91664DkhQJgQBAAEBAAkBAAAAAAAAAAAiNQAxGEEFeCpkSSJbNQEhBVs1AjEZIxJBAAoxACghBq9mQgVENhoAF0lBAFsiNQQjNQZJIQcMQAAfSSEIDEAACCEIEkQqQgBcIQcSRDYaATX/KTT/UEIAp0khCQxAABMhCRJEKjX/gAECNP9QMgNQQgCNgfGkspwKEkQqNf8oNP9QMgNQQgB4NhoCFzUENhoDNhoBF0mBAwxAA2lJJQxAAF0lEkQlNAESRDQESSISTDQCEhFEKGRJNQMhCls1/0k1BTX+gATU4BgtNP5QsDIGNP8PRIAJAAAAAAAABOoBsCk1BzQDVwAgNAMhBFs0A1coIDT/IjIGNAMhC1tCA+hIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBFs1/lcoIDX9IQpbNfwhC1s1+0k1BTX6gAQUkUDUNPpQsDIGNPwMRDT6IlVJIwxAAk9JJAxAASEkEkQxADT/E0QxAIgEOVdUCTX5IjT5STX4I1s0+CJVTUQ0/zEAiAQfVzMhSTX3VwEgNPciVU01+CI0+IgECVchCUk19yNbNPciVU0kD0Q0+zT+DUQ0+SJVQAAGIjX3QgASNPkjW0k19oEeC4FkCjX3QgAANPs09zT7NPcNTTX2NPs09g9EgAgAAAAAAAAEyTT2FlCwNPYWNQexIrIBNPayCCOyEDEAsgezNPgoNPiIA5YpIjT4iAOPV1QJSTX1I1s09SJVTTT2JAsIFlA19VcAVDT1UGYxACgxAIgDais19VcAVDT1UGY0/Sg0/YgDWCkiNP2IA1FXKglJNfUjWzT1IlVNFlA19VcAVDT1UGY0/zT+NP00/CMyBjT7NPYJQgJwSDT6VwEgNfk0/ogDKDT5NfiACAAAAAAAAAOPMQBQsDEANQcxADT/E0Q0/zEAiAL2VwAhSTX3VwEgNPciVU0xABNEIjT4iALeVyEJSTX2I1s09iJVTUk19yQMRDT4KDT4iALDKTT3IwgWUDX2SVcAITT2UExXKjNQZjEAKDEAiAKlKTT4UDX2SVcAMzT2UExXVAlQZjEAKDEAiAKKKTEAUDX2VyE8NPZMUGY0+Cg0+IgCdCkiNPiIAm1XKglJNfYjWzT2IlVNIwgWUDX2SVcAKjT2UExXMypQZjEAKDEAiAJFKzX2VwBUNPZQZjT4KDT4iAIzKSI0+IgCLFdUCUk19iNbNPYiVU00/ggWUDX2VwBUNPZQZjT/NP40/TT8IzIGNPs0/ghCAUhINP8xAIgB9lcAIUk1+VcBIDT5IlVNNP8TRDEANP8TRIAIAAAAAAAAA6ciMQCIAc5XVAlJNfkjWzT5IlVNFlCwIjEAiAG4V1QJSTX5I1s0+SJVTRY1BzT/NP40/TT8IzIGNPtCAOJJIwxAAIgjEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEmouRdLA0/zEAEkQ0/yg0/4gBYCk0/1A1/lchPDT+TFBmNP8oNP+IAUopNP9QNf5JVwAzNP5QTFdUCVBmNP8oNP+IAS8rNf5XAFQ0/lBmNP80AyEEWzEANAOBMFs0A4EoWwgjMgYiQgBUSIGgjQaIAREiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBVs1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAyBhZQKEsBVwA4Z0gjNQEyBjUCQgBlNf81/jX9Nfw1+zX6Nfk0/UEAIzT5NPoWUDT7UDT8FlA0/xZQKEsBVwBYZ0glNQEyBjUCQgAvsSKyATT/sggjshA0+bIHs0IAADEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAAFSCEGr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 93,
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
                "name": "v813",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v814",
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
                "name": "v813",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v814",
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
                    "name": "_Schemers_checkBalance0_62",
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
                    "name": "_Schemers_joinPyramid0_62",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_62",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v912",
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
                "name": "v1255",
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
    "name": "_reach_oe_v1225",
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
    "name": "_reach_oe_v1258",
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
    "name": "_reach_oe_v911",
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
    "name": "_reach_oe_v935",
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
            "internalType": "enum _enum_T0",
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
        "internalType": "struct T0",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
    "name": "_reachMap2Ref",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
    "name": "_reachMap3Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
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
        "internalType": "struct T0",
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
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
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
                    "name": "_Schemers_checkBalance0_62",
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
                    "name": "_Schemers_joinPyramid0_62",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Schemers_withdraw0_62",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v912",
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
                "name": "v1255",
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
  Bytecode: `0x6080604052604051620023653803806200236583398101604081905262000026916200024a565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000143565b620000c0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252436060808801828152600160008190559290925582519586019690965292519084015251928201929092529051608082015260a001604051602081830303815290604052600290805190602001906200013a9291906200016d565b505050620002e7565b81620001695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017b90620002aa565b90600052602060002090601f0160209004810192826200019f5760008555620001ea565b82601f10620001ba57805160ff1916838001178555620001ea565b82800160010185558215620001ea579182015b82811115620001ea578251825591602001919060010190620001cd565b50620001f8929150620001fc565b5090565b5b80821115620001f85760008155600101620001fd565b604080519081016001600160401b03811182821017156200024457634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025e57600080fd5b6200026862000213565b835181526040601f19830112156200027f57600080fd5b6200028962000213565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002bf57607f821691505b60208210811415620002e157634e487b7160e01b600052602260045260246000fd5b50919050565b61206e80620002f76000396000f3fe6080604052600436106100e05760003560e01c806382b6476011610084578063acf0cc2211610056578063acf0cc221461021c578063cadc2e7a1461023c578063ee90ecaf1461025c578063ef3702ab1461026457005b806382b64760146101b957806383230757146101d1578063a98bf223146101e6578063ab53f2c6146101f957005b80633bc5b7bf116100bd5780633bc5b7bf1461015157806373cf3fbb1461017157806377e591d414610179578063817d57f31461018c57005b806306dc92ff146100e95780631e93b0f11461011f5780632c10a1591461013e57005b366100e757005b005b3480156100f557600080fd5b50610109610104366004611ac4565b61028f565b6040516101169190611b0e565b60405180910390f35b34801561012b57600080fd5b506003545b604051908152602001610116565b6100e761014c366004611b5e565b6102bb565b34801561015d57600080fd5b5061010961016c366004611ac4565b6102df565b610130610305565b6100e7610187366004611b7a565b610335565b34801561019857600080fd5b506101ac6101a7366004611ac4565b610355565b6040516101169190611b8c565b6101c161037b565b6040519015158152602001610116565b3480156101dd57600080fd5b50600154610130565b6100e76101f4366004611b5e565b6103aa565b34801561020557600080fd5b5061020e6103ca565b604051610116929190611bbc565b34801561022857600080fd5b506101ac610237366004611ac4565b610467565b34801561024857600080fd5b506101ac610257366004611ac4565b61048d565b6101306104b3565b610277610272366004611ac4565b6104e0565b6040516001600160a01b039091168152602001610116565b60408051606081018252600080825260208201819052918101919091526102b582610524565b92915050565b6102c3611878565b6102db6102d536849003840184611cc2565b82610600565b5050565b60408051606081018252600080825260208201819052918101919091526102b582610852565b600061030f6118ab565b60208101515160029052610321611878565b61032b82826108df565b6060015192915050565b61033d611878565b6102db61034f36849003840184611cf8565b826108df565b60408051606081018252600080825260208201819052918101919091526102b58261134a565b60006103856118fa565b602081015160009052610396611878565b6103a0828261140d565b6040015192915050565b6103b2611878565b6102db6103c436849003840184611db1565b8261140d565b6000606060005460028080546103df90611e09565b80601f016020809104026020016040519081016040528092919081815260200182805461040b90611e09565b80156104585780601f1061042d57610100808354040283529160200191610458565b820191906000526020600020905b81548152906001019060200180831161043b57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526102b5826115e5565b60408051606081018252600080825260208201819052918101919091526102b582611672565b60006104bd6118ab565b602081015151600090526104cf611878565b6104d982826108df565b5192915050565b60006104ea6118ab565b60208101805151600190525151604001516001600160a01b038416905261050f611878565b61051982826108df565b602001519392505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526007602052604090205460ff16600181111561057057610570611ae8565b14156105f0576001600160a01b038216600090815260076020526040908190208151606081019092528054829060ff1660018111156105b1576105b1611ae8565b60018111156105c2576105c2611ae8565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b610610600160005414600a6116ff565b815161062b90158061062457508251600154145b600b6116ff565b60008080556002805461063d90611e09565b80601f016020809104026020016040519081016040528092919081815260200182805461066990611e09565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b50505050508060200190518101906106ce9190611e3e565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a1610725341560086116ff565b805161073d906001600160a01b0316331460096116ff565b80516001600160a01b039081166000908152600460209081526040808320805460ff1990811660019081179092558651861680865283862080546201000092830262010000600160b01b03199182161790915588518816875260078652848720805484168517905588518816808852858820805491909302911617905586518616855260089093528184208054909316811790925584519093168252918120909101556107e8611924565b815181516001600160a01b03909116905260208083015182519091015280513360409182015282015160608301516108209190611ed1565b815160600152602080820180516001905280514392019190915251600060409091015261084c81611724565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561089e5761089e611ae8565b14156105f0576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156105b1576105b1611ae8565b6108ef60046000541460196116ff565b815161090a90158061090357508251600154145b601a6116ff565b60008080556002805461091c90611e09565b80601f016020809104026020016040519081016040528092919081815260200182805461094890611e09565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b50505050508060200190518101906109ad9190611ee9565b90506109b7611972565b6109c882606001514310601b6116ff565b7f8c12f02212ada7fc3de06e01a117304a130f6887cb28d15457948cb42bf690ac33856040516109f9929190611f76565b60405180910390a16000602085015151516002811115610a1b57610a1b611ae8565b1415610bc757610a2d3415600c6116ff565b8151610a92906001600160a01b03166001610a4733610852565b516001811115610a5957610a59611ae8565b14610a65578351610a73565b610a6e33610852565b604001515b6001600160a01b031614610a88576001610a8b565b60005b600d6116ff565b8151610ab8906001600160a01b03163314610aae576001610ab1565b60005b600e6116ff565b7f19137bc44e820654896733bfedc37146fd2db272de600fd013c4a59758fa280c6001610ae4336115e5565b516001811115610af657610af6611ae8565b14610b02576000610b10565b610b0b336115e5565b604001515b60405190815260200160405180910390a16001610b2c336115e5565b516001811115610b3e57610b3e611ae8565b14610b4a576000610b58565b610b53336115e5565b604001515b8352610b62611924565b825181516001600160a01b039182169052602080850151835182015260408086015184519316928101929092526060808601518451909101528083018051600190528051439201919091526080850151905190910152610bc181611724565b5061084c565b6001602085015151516002811115610be157610be1611ae8565b1415610f445760208085015151604001518252820151610c04903414600f6116ff565b6040513381527fefbe5f7c784087b8de606846be139bf61741a4d4ea9fe1e84ed858a99ae8c64e9060200160405180910390a133602084018190528251610c66916001600160a01b0390911614610c5c576001610c5f565b60005b60106116ff565b610cc0336001610c7533610852565b516001811115610c8757610c87611ae8565b14610c93578351610ca1565b610c9c33610852565b604001515b6001600160a01b031614610cb6576001610cb9565b60005b60116116ff565b6001815151610cce90611672565b516001811115610ce057610ce0611ae8565b14610cec576000610cfd565b805151610cf890611672565b604001515b60208201819052610d129060021160126116ff565b8051516001600160a01b03166000908152600560209081526040909120805460ff1916600190811790915590820151610d4b9190611ed1565b8151516001600160a01b0390811660009081526005602090815260408083206001908101959095553380845260078352818420805488515161ff01600160b01b0319918216620100009189168202178917909255600485528386208054929093029116178617905585515190931682526006905220805460ff1916821790558151518190610dd89061134a565b516001811115610dea57610dea611ae8565b14610df6576000610e07565b815151610e029061134a565b604001515b610e119190611ed1565b8151516001600160a01b03908116600090815260066020908152604080832060019081019590955533835260088252808320805460ff1990811687178255908601849055865151909416835290912080549092168317909155830151825151909190610e7c906115e5565b516001811115610e8e57610e8e611ae8565b14610e9a576000610eab565b815151610ea6906115e5565b604001515b610eb59190611ed1565b8151516001600160a01b0316600090815260086020526040902060010155610edb611924565b825181516001600160a01b039182169052602080850180518451830152604080870151855194169301929092526060808601518451909101528083018051600190525143910152516080840151610f329190611ed1565b602082015160400152610bc181611724565b6002602085015151516002811115610f5e57610f5e611ae8565b141561084c57610f70341560136116ff565b8151610f96906001600160a01b03163314610f8c576001610f8f565b60005b60146116ff565b610f9f336115e5565b6040820152610fee600060016040840151516001811115610fc257610fc2611ae8565b14610fce576000610fd8565b8260400151604001515b14610fe4576001610fe7565b60005b60156116ff565b6001610ff933610524565b51600181111561100b5761100b611ae8565b14611017578151611025565b61102033610524565b604001515b6001600160a01b03166060820152611080600260016110478460600151611672565b51600181111561105957611059611ae8565b14611065576000611077565b6110728360600151611672565b604001515b101560166116ff565b611095826020015183608001511160176116ff565b600060408201515160018111156110ae576110ae611ae8565b14156110c0576000608082015261110d565b600160408201515160018111156110d9576110d9611ae8565b141561110d57604080820151015160a082018190526064906110fd90601e90611fe0565b6111079190611fff565b60808201525b806080015182608001511161112657816080015161112c565b80608001515b60c08201819052608083015161114591111560186116ff565b7feda4def178b01b19cce3cab7be84a8e5abf7028ab13364881665eae679a3f0488160c0015160405161117a91815260200190565b60405180910390a160c081018051606085015251604051339180156108fc02916000818181858888f193505050501580156111b9573d6000803e3d6000fd5b5060608101516001600160a01b03166000908152600860205260409020805460ff1916600117905560c08101516111f290600290611fe0565b600161120183606001516115e5565b51600181111561121357611213611ae8565b1461121f576000611231565b61122c82606001516115e5565b604001515b61123b9190611ed1565b60608201516001600160a01b03908116600090815260086020526040808220600190810194909455338252808220805460ff19908116861782559085018390558682018051909416835291208054909116831790555161129a9061134a565b5160018111156112ac576112ac611ae8565b146112b85760006112ca565b6112c5826040015161134a565b604001515b6040808401516001600160a01b03166000908152600860205220600101556112f0611924565b825181516001600160a01b039182169052602080850151835182015260408086015184519316920191909152606080850151835190910152808201805160019052514391015260c08201516080840151610f329190612021565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526006602052604090205460ff16600181111561139657611396611ae8565b14156105f0576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff1660018111156113d7576113d7611ae8565b60018111156113e8576113e8611ae8565b81528154610100900460ff161515602082015260019091015460409091015292915050565b61141d600460005414601d6116ff565b815161143890158061143157508251600154145b601e6116ff565b60008080556002805461144a90611e09565b80601f016020809104026020016040519081016040528092919081815260200182805461147690611e09565b80156114c35780601f10611498576101008083540402835291602001916114c3565b820191906000526020600020905b8154815290600101906020018083116114a657829003601f168201915b50505050508060200190518101906114db9190611ee9565b90506114ef8160600151431015601f6116ff565b6040805133815284516020808301919091528501515115158183015290517f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b949181900360600190a16115433415601c6116ff565b604051600181527f61886b99987026e2270989cc3aee17d61ca2a1b5e0301a4a4b48889837dcdd2f9060200160405180910390a160016040830152611586611924565b815181516001600160a01b03918216905260208084015183518201526040808501518451931692810192909252606080850151845190910152808301805160009052805143920191909152608084015190519091015261084c81611724565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526008602052604090205460ff16600181111561163157611631611ae8565b14156105f0576001600160a01b038216600090815260086020526040908190208151606081019092528054829060ff1660018111156113d7576113d7611ae8565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526005602052604090205460ff1660018111156116be576116be611ae8565b14156105f0576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff1660018111156113d7576113d7611ae8565b816102db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6020810151511561181b576117736040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b039081168083528351602090810151818501908152855160409081015185168187019081528751606090810151818901908152858a01518401516080808b01918252600460005543600155855180890199909952955188860152925190971690860152945191840191909152925160a0808401919091528351808403909101815260c090920190925280516118169260029201906119e0565b505050565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561185e573d6000803e3d6000fd5b506000808055600181905561187590600290611a64565b50565b60405180608001604052806000815260200160006001600160a01b03168152602001600015158152602001600081525090565b6040518060400160405280600081526020016118f56040805160a0810182526000602080830182815283850183905284519182019094528181526060830152608082015290815290565b905290565b6040518060400160405280600081526020016118f560405180602001604052806000151581525090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b6040805161010081018252600060e08201818152825260208201529081016119b56040805160608101909152806000815260006020820181905260409091015290565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8280546119ec90611e09565b90600052602060002090601f016020900481019282611a0e5760008555611a54565b82601f10611a2757805160ff1916838001178555611a54565b82800160010185558215611a54579182015b82811115611a54578251825591602001919060010190611a39565b50611a60929150611a9a565b5090565b508054611a7090611e09565b6000825580601f10611a80575050565b601f01602090049060005260206000209081019061187591905b5b80821115611a605760008155600101611a9b565b6001600160a01b038116811461187557600080fd5b600060208284031215611ad657600080fd5b8135611ae181611aaf565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6002811061187557611875611ae8565b81516060820190611b1e81611afe565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b600060408284031215611b5857600080fd5b50919050565b600060408284031215611b7057600080fd5b611ae18383611b46565b600060a08284031215611b5857600080fd5b81516060820190611b9c81611afe565b808352506020830151151560208301526040830151604083015292915050565b82815260006020604081840152835180604085015260005b81811015611bf057858101830151858201606001528201611bd4565b81811115611c02576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715611c4a57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715611c4a57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611c4a57634e487b7160e01b600052604160045260246000fd5b803580151581146105fb57600080fd5b600060408284031215611cd457600080fd5b611cdc611c19565b82358152611cec60208401611cb2565b60208201529392505050565b600081830360a0811215611d0b57600080fd5b611d13611c19565b833581526080601f1983011215611d2957600080fd5b611d31611c50565b611d39611c81565b602086013560038110611d4b57600080fd5b8152611d5960408701611cb2565b60208201526020605f1985011215611d7057600080fd5b611d78611c50565b93506060860135611d8881611aaf565b845260408101849052611d9d60808701611cb2565b606082015281526020820152949350505050565b60008183036040811215611dc457600080fd5b611dcc611c19565b833581526020601f1983011215611de257600080fd5b611dea611c50565b9150611df860208501611cb2565b825260208101919091529392505050565b600181811c90821680611e1d57607f821691505b60208210811415611b5857634e487b7160e01b600052602260045260246000fd5b600060808284031215611e5057600080fd5b6040516080810181811067ffffffffffffffff82111715611e8157634e487b7160e01b600052604160045260246000fd5b6040528251611e8f81611aaf565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611ee457611ee4611ebb565b500190565b600060a08284031215611efb57600080fd5b60405160a0810181811067ffffffffffffffff82111715611f2c57634e487b7160e01b600052604160045260246000fd5b6040528251611f3a81611aaf565b8152602083810151908201526040830151611f5481611aaf565b6040820152606083810151908201526080928301519281019290925250919050565b6001600160a01b038381168252825160208084019190915283015151805160c0840192919060038110611fab57611fab611ae8565b80604086015250602081015115156060850152816040820151511660808501526060810151151560a085015250509392505050565b6000816000190483118215151615611ffa57611ffa611ebb565b500290565b60008261201c57634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561203357612033611ebb565b50039056fea2646970667358221220c5331f842e98b777a44ec934eee4ce19d98d37e099ceacab5ce19d38a404c08464736f6c634300080c0033`,
  BytecodeLen: 9061,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:161:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:60:55:after expr stmt semicolon',
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
