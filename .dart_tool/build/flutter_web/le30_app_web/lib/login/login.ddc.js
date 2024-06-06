define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/firebase_web/src/app', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/firebase_web/firebase', 'packages/le30_app_web/globals/users', 'packages/le30_app_web/view/layout_template', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__firebase_web__src__app, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__firebase_web__firebase, packages__le30_app_web__globals__users, packages__le30_app_web__view__layout_template, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const firestore = packages__firebase_web__src__app.src__firestore;
  const auth = packages__firebase_web__src__app.src__auth;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const colors = packages__flutter__material.src__material__colors;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const top_level = packages__firebase_web__firebase.src__top_level;
  const users = packages__le30_app_web__globals__users.globals__users;
  const layout_template = packages__le30_app_web__view__layout_template.view__layout_template;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const login = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $add = dartx.add;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.QuerySnapshot])))();
  let FutureOfQuerySnapshot = () => (FutureOfQuerySnapshot = dart.constFn(async.Future$(firestore.QuerySnapshot)))();
  let FutureOfQuerySnapshotToNull = () => (FutureOfQuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [FutureOfQuerySnapshot()])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let UserCredentialToNull = () => (UserCredentialToNull = dart.constFn(dart.fnType(core.Null, [auth.UserCredential])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition = dart.constFn(dart.fnType(transitions.FadeTransition, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), framework.Widget])))();
  let JSArrayOfFutureOfQuerySnapshot = () => (JSArrayOfFutureOfQuerySnapshot = dart.constFn(_interceptors.JSArray$(FutureOfQuerySnapshot())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 40,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 36,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 40,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 40
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 19,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 19,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 19,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 19,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C54() {
      return C54 = dart.constList([], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 63,
        [_Location_line]: 186,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/login/login.dart"
      });
    }
  });
  login.Login = class Login extends framework.StatefulWidget {
    createState() {
      return new login._LoginState.new();
    }
  };
  (login.Login.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login.Login.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login.Login.prototype;
  dart.addTypeTests(login.Login);
  dart.setMethodSignature(login.Login, () => ({
    __proto__: dart.getMethods(login.Login.__proto__),
    createState: dart.fnType(login._LoginState, [])
  }));
  dart.setLibraryUri(login.Login, "package:le30_app_web/login/login.dart");
  const _errorMessage = dart.privateName(login, "_errorMessage");
  const _isLoading = dart.privateName(login, "_isLoading");
  const _loadingConnect = dart.privateName(login, "_loadingConnect");
  const _getUsersAuthId = dart.privateName(login, "_getUsersAuthId");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C2;
  let C1;
  let C6;
  let C7;
  let C5;
  let C4;
  let C8;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C10;
  let C9;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C21;
  let C20;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C34;
  let C32;
  let C31;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C44;
  let C43;
  let C49;
  let C48;
  let C47;
  let C52;
  let C51;
  let C50;
  let C54;
  let C53;
  let C57;
  let C56;
  let C55;
  let C60;
  let C61;
  let C59;
  let C58;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C67;
  let C66;
  let C69;
  let C70;
  let C73;
  let C72;
  let C71;
  let C76;
  let C77;
  let C78;
  let C75;
  let C74;
  let C81;
  let C82;
  let C80;
  let C79;
  login._LoginState = class _LoginState extends framework.State$(login.Login) {
    initState() {
      this[_getUsersAuthId]();
      super.initState();
    }
    [_getUsersAuthId]() {
      new login.UsersService.new().userAdmin()[$map](core.Null, dart.fn(snapshot => {
        snapshot.then(core.Null, dart.fn(d => {
          for (let i = 0; i < dart.notNull(d.docs[$length]); i = i + 1) {
            this.setState(dart.fn(() => {
              this.user = d.docs[$_get](i).data();
              this.authID = dart.toString(this.user[$_get]("auth_id"));
            }, VoidToNull()));
            this.userAuth[$add](this.authID);
          }
          this.setState(dart.fn(() => {
            this.userAuth = this.userAuth;
          }, VoidToNull()));
        }, QuerySnapshotToNull()));
      }, FutureOfQuerySnapshotToNull()))[$toList]();
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new basic.Center.new({child: new container.Container.new({width: 450.0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new image.Image.asset("assets/images/logo-le30.png", {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new basic.Padding.new({padding: C8 || CT.C8, child: new text_form_field.TextFormField.new({validator: dart.fn(value => value[$isEmpty] ? "Email cant be empty" : null, StringToString()), autofocus: false, controller: this.emailField, keyboardType: text_input.TextInputType.emailAddress, decoration: new input_decorator.InputDecoration.new({hintText: "Email"}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.Padding.new({padding: C8 || CT.C8, child: new text_form_field.TextFormField.new({validator: dart.fn(value => value[$isEmpty] ? "Password cant be empty" : null, StringToString()), controller: this.passwordField, autofocus: false, obscureText: true, decoration: new input_decorator.InputDecoration.new({hintText: "Mot de passe"}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new basic.Padding.new({padding: C8 || CT.C8, child: this.showLognInButton(), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new basic.Padding.new({padding: C8 || CT.C8, child: this.showErrorMessage(), $creationLocationd_0dea112b090073317d4: C35 || CT.C35})]), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50});
    }
    showLoading() {
      if (dart.test(this[_isLoading])) {
        return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
      }
      return new container.Container.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
    showErrorMessage() {
      if (this[_errorMessage].length > 0 && this[_errorMessage] != null) {
        return new text.Text.new(this[_errorMessage], {style: new text_style.TextStyle.new({fontSize: 13.0, color: colors.Colors.red, height: 1.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
      } else {
        return new container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
      }
    }
    showLognInButton() {
      return dart.test(this[_loadingConnect]) ? new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C69 || CT.C69}) : new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 10.0}), child: new flat_button.FlatButton.new({onPressed: dart.fn(() => {
            this.setState(dart.fn(() => {
              this[_loadingConnect] = true;
            }, VoidToNull()));
            top_level.auth().signInWithEmailAndPassword(this.emailField.text, this.passwordField.text).then(core.Null, dart.fn(result => {
              let uid = result.user.uid;
              users.authId = uid;
              navigator.Navigator.of(this.context).push(dart.dynamic, new login.FadeRoute.new({page: new layout_template.LayoutTemplate.new({$creationLocationd_0dea112b090073317d4: C70 || CT.C70})}));
            }, UserCredentialToNull())).catchError(dart.fn(error => {
              core.print(error);
              this.setState(dart.fn(() => {
                this[_errorMessage] = core.String._check(dart.dload(error, 'message'));
                this[_loadingConnect] = false;
              }, VoidToNull()));
            }, dynamicToNull()));
          }, VoidToNull()), color: new ui.Color.fromARGB(255, 254, 234, 12), child: new text.Text.new("Se connecter", {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
  };
  (login._LoginState.new = function() {
    this.emailField = new editable_text.TextEditingController.new();
    this.passwordField = new editable_text.TextEditingController.new();
    this[_errorMessage] = "";
    this[_isLoading] = false;
    this[_loadingConnect] = false;
    this.userId = "";
    this.localStorage = "";
    this.email = "";
    this.password = "";
    this.users = [];
    this.user = null;
    this.authID = "";
    this.userIsAdmin = [];
    this.userAuth = [];
    login._LoginState.__proto__.new.call(this);
    ;
  }).prototype = login._LoginState.prototype;
  dart.addTypeTests(login._LoginState);
  dart.setMethodSignature(login._LoginState, () => ({
    __proto__: dart.getMethods(login._LoginState.__proto__),
    [_getUsersAuthId]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    showLoading: dart.fnType(framework.Widget, []),
    showErrorMessage: dart.fnType(framework.Widget, []),
    showLognInButton: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(login._LoginState, "package:le30_app_web/login/login.dart");
  dart.setFieldSignature(login._LoginState, () => ({
    __proto__: dart.getFields(login._LoginState.__proto__),
    emailField: dart.fieldType(editable_text.TextEditingController),
    passwordField: dart.fieldType(editable_text.TextEditingController),
    [_errorMessage]: dart.fieldType(core.String),
    [_isLoading]: dart.fieldType(core.bool),
    [_loadingConnect]: dart.fieldType(core.bool),
    userId: dart.fieldType(core.String),
    localStorage: dart.fieldType(core.String),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String),
    users: dart.fieldType(core.List),
    user: dart.fieldType(core.Map),
    authID: dart.fieldType(core.String),
    userIsAdmin: dart.fieldType(core.List),
    userAuth: dart.fieldType(core.List)
  }));
  let C85;
  let C86;
  let C84;
  let C83;
  const page$ = dart.privateName(login, "FadeRoute.page");
  login.FadeRoute = class FadeRoute extends pages.PageRouteBuilder {
    get page() {
      return this[page$];
    }
    set page(value) {
      super.page = value;
    }
  };
  (login.FadeRoute.new = function(opts) {
    let page = opts && 'page' in opts ? opts.page : null;
    this[page$] = page;
    login.FadeRoute.__proto__.new.call(this, {pageBuilder: dart.fn((context, animation, secondaryAnimation) => page, BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionsBuilder: dart.fn((context, animation, secondaryAnimation, child) => new transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition())});
    ;
  }).prototype = login.FadeRoute.prototype;
  dart.addTypeTests(login.FadeRoute);
  dart.setLibraryUri(login.FadeRoute, "package:le30_app_web/login/login.dart");
  dart.setFieldSignature(login.FadeRoute, () => ({
    __proto__: dart.getFields(login.FadeRoute.__proto__),
    page: dart.finalFieldType(framework.Widget)
  }));
  const db = dart.privateName(login, "UsersService.db");
  login.UsersService = class UsersService extends core.Object {
    get db() {
      return this[db];
    }
    set db(value) {
      this[db] = value;
    }
    userAdmin() {
      return JSArrayOfFutureOfQuerySnapshot().of([this.db.collection("users").where("isAdmin", "==", true).get()]);
    }
  };
  (login.UsersService.new = function() {
    this[db] = top_level.firestore();
    ;
  }).prototype = login.UsersService.prototype;
  dart.addTypeTests(login.UsersService);
  dart.setMethodSignature(login.UsersService, () => ({
    __proto__: dart.getMethods(login.UsersService.__proto__),
    userAdmin: dart.fnType(core.List$(async.Future$(firestore.QuerySnapshot)), [])
  }));
  dart.setLibraryUri(login.UsersService, "package:le30_app_web/login/login.dart");
  dart.setFieldSignature(login.UsersService, () => ({
    __proto__: dart.getFields(login.UsersService.__proto__),
    db: dart.fieldType(firestore.Firestore)
  }));
  dart.trackLibraries("packages/le30_app_web/login/login", {
    "package:le30_app_web/login/login.dart": login
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["login.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAW+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCqB,MAAjB;AAGiB,MAAX;IACR;;AA8Ba,MAvBX,AAAe,AAAY,AAuBxB,0DAvB4B,QAAC;AAsB5B,QArBF,AAAS,QAAD,iBAAM,QAAe;AAC3B,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAE,AAAK,CAAN,iBAAgB,IAAF,AAAE,CAAC,GAAH;AAShC,YANF,cAAS;AACgB,cAAvB,YAAO,AAAE,AAAI,AAAI,CAAT,aAAM,CAAC;AAEoB,cAAnC,cAAyB,cAAhB,AAAI,iBAAC;;AAII,YAApB,AAAS,oBAAI;;AAKZ,UAHD,cAAS;AAEW,YAAnB,gBAAW;;;;IASnB;UAI0B;AACxB,YAAO,kCACC,6BACG,oCACE,cACA,yCACgC,yCACnB,sBAChB,oDAEe,sBAAM,8IAIrB,oDAES,kDACM,QAAC,SAAU,AAAM,KAAD,aAAW,wBAAwB,oCAEnD,mBACC,+BACgB,mDAChB,mDAA0B,2HAK1C,oDAES,kDACM,QAAC,SAAU,AAAM,KAAD,aAAW,2BAA2B,qCAErD,+BACD,oBACE,kBACD,mDAA0B,oIAG1C,oDAES,kFAGT,oDAES;IAOrB;;AAIE,oBAAI;AACF,cAAO,8BAAc;;AAEvB,YAAO,sCACG,YACD;IAEX;;AAIE,UAAI,AAAc,AAAO,6BAAE,KAAK,uBAAiB;AAC/C,cAAO,mBACL,6BACO,wCACO,aACI,2BACN,iBACe;;AAG7B,cAAO,sCACG;;IAGd;;AAGE,uBAAO,yBACD,gHACA,gCACsB,gDAAoB,eACjC,2CACM;AAGP,YAFF,cAAS;AACe,cAAtB,wBAAkB;;AAqBlB,YAjBC,AAAO,AAAgE,AAOrE,4CAPgC,AAAW,sBAAM,AAAc,yCAAW,QAAC;AACxE,wBAAM,AAAO,AAAK,MAAN;AACI,cAAZ,eAAS,GAAG;AAGwC,cAAnD,AAAY,uBAAT,iCAAc,+BAAgB;mDAE9B,QAAC;AAEH,cAAZ,WAAM,KAAK;AAIT,cAHF,cAAS;AACsB,sCAA7B,mBAAsB,WAAN,KAAK;AACE,gBAAvB,wBAAkB;;;mCASX,sBAAS,KAAK,KAAK,KAAK,YAC9B,kBAAK;IAGxB;;;IA7LsB,kBAAiB;IACjB,qBAAoB;IAEnC,sBAAgB;IAElB,mBAAa;IACb,wBAAkB;IAEhB,cAAS;IACT,oBAAe;IAEf,aAAQ;IACR,gBAAW;IAEd,aAAQ;IAER;IACG,cAAQ;IACX,mBAAc;IACd,gBAAW;;;EA2KjB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;;;QACG;;AACV,2DACe,SACE,SACK,WACA,uBAEhB,IAAI,uFACY,SACL,SACK,WACA,oBACX,UAEL,6CACO,SAAS,SACX,KAAK;;EAEf;;;;;;;;;IAIH;;;;;;;AAEF,YAAO,sCACL,AAAG,AAAoB,AAA6B,mBAAtC,eAAe,WAAW,MAAM;IAElD;;;IALI,WAAK;;EAMX","file":"login.ddc.js"}');
  // Exports:
  return {
    login__login: login
  };
});

//# sourceMappingURL=login.ddc.js.map
