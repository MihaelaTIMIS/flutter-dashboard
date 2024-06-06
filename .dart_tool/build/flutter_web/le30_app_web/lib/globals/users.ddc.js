define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const users = Object.create(dart.library);
  const CT = Object.create(null);
  const email = dart.privateName(users, "User.email");
  const password = dart.privateName(users, "User.password");
  users.User = class User extends core.Object {
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get password() {
      return this[password];
    }
    set password(value) {
      this[password] = value;
    }
  };
  (users.User.new = function() {
    this[email] = null;
    this[password] = null;
    ;
  }).prototype = users.User.prototype;
  dart.addTypeTests(users.User);
  dart.setLibraryUri(users.User, "package:le30_app_web/globals/users.dart");
  dart.setFieldSignature(users.User, () => ({
    __proto__: dart.getFields(users.User.__proto__),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String)
  }));
  dart.defineLazy(users, {
    /*users.authId*/get authId() {
      return null;
    },
    set authId(_) {},
    /*users.userID*/get userID() {
      return null;
    },
    set userID(_) {}
  });
  dart.trackLibraries("packages/le30_app_web/globals/users", {
    "package:le30_app_web/globals/users.dart": users
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["users.dart"],"names":[],"mappings":";;;;;;;;;;IACS;;;;;;IACA;;;;;;;;IADA;IACA;;EACT;;;;;;;;;MAEO,YAAM;;;;MAEN,YAAM","file":"users.ddc.js"}');
  // Exports:
  return {
    globals__users: users
  };
});

//# sourceMappingURL=users.ddc.js.map
