define(['dart_sdk', 'packages/firebase_web/firebase', 'packages/firebase_web/src/app', 'packages/le30_app_web/globals/users', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__firebase_web__firebase, packages__firebase_web__src__app, packages__le30_app_web__globals__users, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const top_level = packages__firebase_web__firebase.src__top_level;
  const firestore = packages__firebase_web__src__app.src__firestore;
  const users = packages__le30_app_web__globals__users.globals__users;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const users_data = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let FutureOfQuerySnapshot = () => (FutureOfQuerySnapshot = dart.constFn(async.Future$(firestore.QuerySnapshot)))();
  let JSArrayOfFutureOfQuerySnapshot = () => (JSArrayOfFutureOfQuerySnapshot = dart.constFn(_interceptors.JSArray$(FutureOfQuerySnapshot())))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.QuerySnapshot])))();
  let FutureOfQuerySnapshotToNull = () => (FutureOfQuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [FutureOfQuerySnapshot()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/services/users_data.dart"
      });
    }
  });
  const db = dart.privateName(users_data, "UsersService.db");
  users_data.UsersService = class UsersService extends core.Object {
    get db() {
      return this[db];
    }
    set db(value) {
      this[db] = value;
    }
    allUsers() {
      return JSArrayOfFutureOfQuerySnapshot().of([this.db.collection("users").get()]);
    }
    usersNotAdmin() {
      return JSArrayOfFutureOfQuerySnapshot().of([this.db.collection("users").where("isAdmin", "==", false).get()]);
    }
    usersIsAdmin() {
      return JSArrayOfFutureOfQuerySnapshot().of([this.db.collection("users").where("isAdmin", "==", true).get()]);
    }
    uniqueIsAdmin() {
      return JSArrayOfFutureOfQuerySnapshot().of([this.db.collection("users").where("auth_id", "==", users.authId).get()]);
    }
  };
  (users_data.UsersService.new = function() {
    this[db] = top_level.firestore();
    ;
  }).prototype = users_data.UsersService.prototype;
  dart.addTypeTests(users_data.UsersService);
  dart.setMethodSignature(users_data.UsersService, () => ({
    __proto__: dart.getMethods(users_data.UsersService.__proto__),
    allUsers: dart.fnType(core.List$(async.Future$(firestore.QuerySnapshot)), []),
    usersNotAdmin: dart.fnType(core.List$(async.Future$(firestore.QuerySnapshot)), []),
    usersIsAdmin: dart.fnType(core.List$(async.Future$(firestore.QuerySnapshot)), []),
    uniqueIsAdmin: dart.fnType(core.List$(async.Future$(firestore.QuerySnapshot)), [])
  }));
  dart.setLibraryUri(users_data.UsersService, "package:le30_app_web/services/users_data.dart");
  dart.setFieldSignature(users_data.UsersService, () => ({
    __proto__: dart.getFields(users_data.UsersService.__proto__),
    db: dart.fieldType(firestore.Firestore)
  }));
  const usersAll = dart.privateName(users_data, "ListData.usersAll");
  const usersNotAdmin = dart.privateName(users_data, "ListData.usersNotAdmin");
  const usersIsAdmin = dart.privateName(users_data, "ListData.usersIsAdmin");
  users_data.ListData = class ListData extends core.Object {
    get usersAll() {
      return this[usersAll];
    }
    set usersAll(value) {
      this[usersAll] = value;
    }
    get usersNotAdmin() {
      return this[usersNotAdmin];
    }
    set usersNotAdmin(value) {
      this[usersNotAdmin] = value;
    }
    get usersIsAdmin() {
      return this[usersIsAdmin];
    }
    set usersIsAdmin(value) {
      this[usersIsAdmin] = value;
    }
    getAllUsers() {
      new users_data.UsersService.new().allUsers()[$map](core.Null, dart.fn(snapshot => {
        snapshot.catchError(dart.fn(onError => {
          core.print("error:");
          core.print(onError);
        }, dynamicToNull()));
        snapshot.then(core.Null, dart.fn(d => {
          for (let i = 0; i < dart.notNull(d.docs[$length]); i = i + 1) {
            this.usersAll[$add](d.docs[$_get](i).data());
          }
        }, QuerySnapshotToNull()));
      }, FutureOfQuerySnapshotToNull()))[$toList]();
      return this.usersAll;
    }
  };
  (users_data.ListData.new = function() {
    this[usersAll] = [];
    this[usersNotAdmin] = [];
    this[usersIsAdmin] = [];
    ;
  }).prototype = users_data.ListData.prototype;
  dart.addTypeTests(users_data.ListData);
  dart.setMethodSignature(users_data.ListData, () => ({
    __proto__: dart.getMethods(users_data.ListData.__proto__),
    getAllUsers: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(users_data.ListData, "package:le30_app_web/services/users_data.dart");
  dart.setFieldSignature(users_data.ListData, () => ({
    __proto__: dart.getFields(users_data.ListData.__proto__),
    usersAll: dart.fieldType(core.List),
    usersNotAdmin: dart.fieldType(core.List),
    usersIsAdmin: dart.fieldType(core.List)
  }));
  users_data.ListDataUsers = class ListDataUsers extends framework.StatefulWidget {
    createState() {
      return new users_data._ListDataUsersState.new();
    }
  };
  (users_data.ListDataUsers.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    users_data.ListDataUsers.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = users_data.ListDataUsers.prototype;
  dart.addTypeTests(users_data.ListDataUsers);
  dart.setMethodSignature(users_data.ListDataUsers, () => ({
    __proto__: dart.getMethods(users_data.ListDataUsers.__proto__),
    createState: dart.fnType(users_data._ListDataUsersState, [])
  }));
  dart.setLibraryUri(users_data.ListDataUsers, "package:le30_app_web/services/users_data.dart");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  users_data._ListDataUsersState = class _ListDataUsersState extends framework.State$(users_data.ListDataUsers) {
    getAllUsers() {
      new users_data.UsersService.new().allUsers()[$map](core.Null, dart.fn(snapshot => {
        snapshot.catchError(dart.fn(onError => {
          core.print("error:");
          core.print(onError);
        }, dynamicToNull()));
        snapshot.then(core.Null, dart.fn(d => {
          for (let i = 0; i < dart.notNull(d.docs[$length]); i = i + 1) {
            this.usersAll[$add](d.docs[$_get](i).data());
          }
          this.setState(dart.fn(() => {
            this.usersAll = this.usersAll;
          }, VoidToNull()));
        }, QuerySnapshotToNull()));
      }, FutureOfQuerySnapshotToNull()))[$toList]();
      core.print("usersAll");
      core.print(this.usersAll);
    }
    getUsersNotAdmin() {
      new users_data.UsersService.new().usersNotAdmin()[$map](core.Null, dart.fn(snapshot => {
        snapshot.catchError(dart.fn(onError => {
          core.print("error:");
          core.print(onError);
        }, dynamicToNull()));
        snapshot.then(core.Null, dart.fn(d => {
          for (let i = 0; i < dart.notNull(d.docs[$length]); i = i + 1) {
            this.usersNotAdmin[$add](d.docs[$_get](i).data());
          }
          this.setState(dart.fn(() => {
            this.usersNotAdmin = this.usersNotAdmin;
          }, VoidToNull()));
        }, QuerySnapshotToNull()));
      }, FutureOfQuerySnapshotToNull()))[$toList]();
      core.print("usersNotAdmin");
      core.print(this.usersNotAdmin);
    }
    getUsersISAdmin() {
      new users_data.UsersService.new().usersNotAdmin()[$map](core.Null, dart.fn(snapshot => {
        snapshot.catchError(dart.fn(onError => {
          core.print("error:");
          core.print(onError);
        }, dynamicToNull()));
        snapshot.then(core.Null, dart.fn(d => {
          for (let i = 0; i < dart.notNull(d.docs[$length]); i = i + 1) {
            this.usersIsAdmin[$add](d.docs[$_get](i).data());
          }
          this.setState(dart.fn(() => {
            this.usersIsAdmin = this.usersIsAdmin;
          }, VoidToNull()));
        }, QuerySnapshotToNull()));
      }, FutureOfQuerySnapshotToNull()))[$toList]();
      core.print("usersIsAdmin");
      core.print(this.usersIsAdmin);
    }
    build(context) {
      return new container.Container.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (users_data._ListDataUsersState.new = function() {
    this.usersAll = [];
    this.usersNotAdmin = [];
    this.usersIsAdmin = [];
    users_data._ListDataUsersState.__proto__.new.call(this);
    ;
  }).prototype = users_data._ListDataUsersState.prototype;
  dart.addTypeTests(users_data._ListDataUsersState);
  dart.setMethodSignature(users_data._ListDataUsersState, () => ({
    __proto__: dart.getMethods(users_data._ListDataUsersState.__proto__),
    getAllUsers: dart.fnType(dart.void, []),
    getUsersNotAdmin: dart.fnType(dart.dynamic, []),
    getUsersISAdmin: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(users_data._ListDataUsersState, "package:le30_app_web/services/users_data.dart");
  dart.setFieldSignature(users_data._ListDataUsersState, () => ({
    __proto__: dart.getFields(users_data._ListDataUsersState.__proto__),
    usersAll: dart.fieldType(core.List),
    usersNotAdmin: dart.fieldType(core.List),
    usersIsAdmin: dart.fieldType(core.List)
  }));
  dart.trackLibraries("packages/le30_app_web/services/users_data", {
    "package:le30_app_web/services/users_data.dart": users_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["users_data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQM;;;;;;;AAEF,YAAO,sCAAC,AAAG,AAAoB,mBAAT;IACxB;;AAGE,YAAO,sCAAC,AAAG,AAAoB,AAA8B,mBAAvC,eAAe,WAAW,MAAM;IACxD;;AAGE,YAAO,sCAAC,AAAG,AAAoB,AAA6B,mBAAtC,eAAe,WAAW,MAAM;IACxD;;AAGE,YAAO,sCAAC,AAAG,AAAoB,AAAuC,mBAAhD,eAAe,WAAW,MAAc;IAChE;;;IAfI,WAAK;;EAgBX;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACH;;;;;;IACA;;;;;;;AAiBS,MAfX,AAAe,AAAW,AAevB,8DAf2B,QAAC;AAI3B,QAHF,AAAS,QAAD,YAAY,QAAC;AACJ,UAAf,WAAM;AACQ,UAAd,WAAM,OAAO;;AAWb,QARF,AAAS,QAAD,iBAAM,QAAe;AAC3B,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,AAAK,CAAN,iBAAgB,IAAF,AAAE,CAAC,GAAH;AACH,YAA9B,AAAS,oBAAI,AAAE,AAAI,AAAI,CAAT,aAAM,CAAC;;;;AAQ3B,YAAO;IACT;;;IArBO,iBAAW;IACd,sBAAgB;IAChB,qBAAe;;EAqBrB;;;;;;;;;;;;;;;AAIuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;AAyBe,MAfX,AAAe,AAAW,AAevB,8DAf2B,QAAC;AAI3B,QAHF,AAAS,QAAD,YAAY,QAAC;AACJ,UAAf,WAAM;AACQ,UAAd,WAAM,OAAO;;AAWb,QARF,AAAS,QAAD,iBAAM,QAAe;AAC3B,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,AAAK,CAAN,iBAAgB,IAAF,AAAE,CAAC,GAAH;AACH,YAA9B,AAAS,oBAAI,AAAE,AAAI,AAAI,CAAT,aAAM,CAAC;;AAKrB,UAFF,cAAS;AACY,YAAnB,gBAAW;;;;AAIA,MAAjB,WAAM;AACS,MAAf,WAAM;IACR;;AAkBa,MAfX,AAAe,AAAgB,AAe5B,mEAfgC,QAAC;AAIhC,QAHF,AAAS,QAAD,YAAY,QAAC;AACJ,UAAf,WAAM;AACQ,UAAd,WAAM,OAAO;;AAWb,QARF,AAAS,QAAD,iBAAM,QAAe;AAC3B,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,AAAK,CAAN,iBAAgB,IAAF,AAAE,CAAC,GAAH;AACE,YAAnC,AAAc,yBAAI,AAAE,AAAI,AAAI,CAAT,aAAM,CAAC;;AAK1B,UAFF,cAAS;AACsB,YAA7B,qBAAgB;;;;AAIA,MAAtB,WAAM;AACc,MAApB,WAAM;IACR;;AAkBa,MAfX,AAAe,AAAgB,AAe5B,mEAfgC,QAAC;AAIhC,QAHF,AAAS,QAAD,YAAY,QAAC;AACJ,UAAf,WAAM;AACQ,UAAd,WAAM,OAAO;;AAWb,QARF,AAAS,QAAD,iBAAM,QAAe;AAC3B,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,AAAK,CAAN,iBAAgB,IAAF,AAAE,CAAC,GAAH;AACC,YAAlC,AAAa,wBAAI,AAAE,AAAI,AAAI,CAAT,aAAM,CAAC;;AAKzB,UAFF,cAAS;AACoB,YAA3B,oBAAe;;;;AAIA,MAArB,WAAM;AACa,MAAnB,WAAM;IACR;UAK0B;AACxB,YAAO;IAGT;;;IA5EM,gBAAW;IACb,qBAAgB;IAChB,oBAAe;;;EA2ErB","file":"users_data.ddc.js"}');
  // Exports:
  return {
    services__users_data: users_data
  };
});

//# sourceMappingURL=users_data.ddc.js.map
