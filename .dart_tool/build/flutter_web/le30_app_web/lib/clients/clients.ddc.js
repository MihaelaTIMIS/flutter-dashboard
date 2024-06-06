define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/le30_app_web/services/users_data', 'packages/firebase_web/src/app', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/le30_app_web/clients/list_clients', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/firebase_web/firebase', 'packages/flutter/src/animation/animation', 'packages/le30_app_web/news/news'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__le30_app_web__services__users_data, packages__firebase_web__src__app, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__le30_app_web__clients__list_clients, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__firebase_web__firebase, packages__flutter__src__animation__animation, packages__le30_app_web__news__news) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const users_data = packages__le30_app_web__services__users_data.services__users_data;
  const firestore = packages__firebase_web__src__app.src__firestore;
  const auth = packages__firebase_web__src__app.src__auth;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__material.src__material__colors;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const list_clients = packages__le30_app_web__clients__list_clients.clients__list_clients;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const top_level = packages__firebase_web__firebase.src__top_level;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const news = packages__le30_app_web__news__news.news__news;
  const clients = Object.create(dart.library);
  const route_name = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.QuerySnapshot])))();
  let FutureOfQuerySnapshot = () => (FutureOfQuerySnapshot = dart.constFn(async.Future$(firestore.QuerySnapshot)))();
  let FutureOfQuerySnapshotToNull = () => (FutureOfQuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [FutureOfQuerySnapshot()])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let UserCredentialToNull = () => (UserCredentialToNull = dart.constFn(dart.fnType(core.Null, [auth.UserCredential])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition = dart.constFn(dart.fnType(transitions.FadeTransition, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 30,
        [EdgeInsets_left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C21() {
      return C21 = dart.constList([], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 5
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 23,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 23,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 23,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 23,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 23,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 20,
        [EdgeInsets_left]: 0
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 167,
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
        [_Location_column]: 30,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 17,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 229,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/clients/clients.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 13,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/services/route_name.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/services/route_name.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/services/route_name.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/services/route_name.dart"
      });
    }
  });
  clients.Clients = class Clients extends framework.StatefulWidget {
    createState() {
      return new clients._ClientsState.new();
    }
  };
  (clients.Clients.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    clients.Clients.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = clients.Clients.prototype;
  dart.addTypeTests(clients.Clients);
  dart.setMethodSignature(clients.Clients, () => ({
    __proto__: dart.getMethods(clients.Clients.__proto__),
    createState: dart.fnType(clients._ClientsState, [])
  }));
  dart.setLibraryUri(clients.Clients, "package:le30_app_web/clients/clients.dart");
  const _errorMessage = dart.privateName(clients, "_errorMessage");
  const _uniqueUsersISAdmin = dart.privateName(clients, "_uniqueUsersISAdmin");
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
  let C4;
  let C2;
  let C1;
  let C7;
  let C6;
  let C5;
  const _showFormCreateClients = dart.privateName(clients, "_showFormCreateClients");
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C16;
  let C13;
  let C12;
  let C19;
  let C18;
  let C17;
  let C21;
  let C20;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  let C32;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C34;
  let C33;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C45;
  let C44;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C59;
  let C60;
  let C56;
  let C55;
  let C63;
  let C64;
  let C62;
  let C61;
  let C65;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C82;
  let C81;
  let C86;
  let C85;
  let C84;
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C92;
  let C91;
  clients._ClientsState = class _ClientsState extends framework.State$(clients.Clients) {
    initState() {
      this[_errorMessage] = "";
      this[_uniqueUsersISAdmin]();
      super.initState();
    }
    [_uniqueUsersISAdmin]() {
      new users_data.UsersService.new().uniqueIsAdmin()[$map](core.Null, dart.fn(snapshot => {
        snapshot.catchError(dart.fn(onError => {
          core.print("error:");
          core.print(onError);
        }, dynamicToNull()));
        snapshot.then(core.Null, dart.fn(d => {
          for (let i = 0; i < dart.notNull(d.docs[$length]); i = i + 1) {
            this.user = d.docs[$_get](i).data();
            this.isAdmin = dart.toString(this.user[$_get]("isAdmin"));
          }
          this.setState(dart.fn(() => {
            this.isAdmin = this.isAdmin;
          }, VoidToNull()));
        }, QuerySnapshotToNull()));
      }, FutureOfQuerySnapshotToNull()))[$toList]();
    }
    build(context) {
      return new container.Container.new({child: new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("List Clients", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontWeight: ui.FontWeight.bold, fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), this.isAdmin === "true" ? new raised_button.RaisedButton.new({color: new ui.Color.fromARGB(255, 254, 234, 12), onPressed: dart.fn(() => {
                  this[_showFormCreateClients](context);
                }, VoidToNull()), child: new text.Text.new("Create client", {style: new text_style.TextStyle.new({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}) : new container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), new list_clients.ListClients.new({$creationLocationd_0dea112b090073317d4: C20 || CT.C20})]), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    [_showFormCreateClients](context) {
      this.emailField.text = "";
      this.passwordField.text = "";
      this.firstNameField.text = "";
      core.print(this[_errorMessage]);
      dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => new dialog.AlertDialog.new({content: new container.Container.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C32 || CT.C32, child: new text_form_field.TextFormField.new({validator: dart.fn(value => value[$isEmpty] ? "Email cant be empty" : null, StringToString()), autofocus: false, controller: this.emailField, keyboardType: text_input.TextInputType.emailAddress, decoration: new input_decorator.InputDecoration.new({hintText: "Email"}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new basic.Padding.new({padding: C32 || CT.C32, child: new text_form_field.TextFormField.new({validator: dart.fn(value => value[$isEmpty] ? "Password cant be empty" : null, StringToString()), controller: this.passwordField, autofocus: false, obscureText: true, decoration: new input_decorator.InputDecoration.new({hintText: "Mot de passe"}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new basic.Padding.new({padding: C32 || CT.C32, child: new text_form_field.TextFormField.new({autofocus: false, controller: this.firstNameField, keyboardType: text_input.TextInputType.text, decoration: new input_decorator.InputDecoration.new({hintText: "First Name"}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new basic.Padding.new({padding: C65 || CT.C65, child: new raised_button.RaisedButton.new({child: new text.Text.new("Save New User", {$creationLocationd_0dea112b090073317d4: C66 || CT.C66}), onPressed: dart.fn(() => {
                      top_level.auth().createUserWithEmailAndPassword(this.emailField.text, this.passwordField.text).then(core.Null, dart.fn(userCreds => {
                        let uid = userCreds.user.uid;
                        top_level.firestore().collection("users").add(new (IdentityMapOfString$dynamic()).from(["auth_id", uid, "picture", "https://firebasestorage.googleapis.com/v0/b/le-trente-app-mobile.appspot.com/o/Portrait_Placeholder.png?alt=media&token=21e1fe6b-7c2b-4a34-9395-886dab278a5e", "first_name", this.firstNameField.text, "email", this.emailField.text, "description", "", "isAdmin", false, "linkdeIn", ""]));
                        navigator.Navigator.of(context).popAndPushNamed(core.Object, core.Object, "/users");
                        core.print("ClientsRoute");
                        core.print("/users");
                      }, UserCredentialToNull())).catchError(dart.fn(e => {
                        this.setState(dart.fn(() => {
                          this[_errorMessage] = core.String._check(dart.dload(e, 'message'));
                        }, VoidToNull()));
                        core.print("Error");
                        core.print(e);
                      }, dynamicToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73})]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), BuildContextToAlertDialog())});
    }
    showErrorMessage() {
      core.print("_errorMessage in function ");
      core.print("_errorMessage");
      core.print(this[_errorMessage]);
      if (this[_errorMessage].length > 0 && this[_errorMessage] != null) {
        return new text.Text.new(this[_errorMessage], {style: new text_style.TextStyle.new({fontSize: 13.0, color: colors.Colors.red, height: 1.0, fontWeight: ui.FontWeight.w300}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87});
      } else {
        return new container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C91 || CT.C91});
      }
    }
  };
  (clients._ClientsState.new = function() {
    this.emailField = new editable_text.TextEditingController.new();
    this.passwordField = new editable_text.TextEditingController.new();
    this.firstNameField = new editable_text.TextEditingController.new();
    this.descriptionField = new editable_text.TextEditingController.new();
    this.tagsField = new editable_text.TextEditingController.new();
    this.user = null;
    this.isNameValid = false;
    this[_errorMessage] = "";
    this.authID = "";
    this.userIsAdmin = [];
    this.userAuth = [];
    this.uniqueUsersISAdmin = [];
    this.isAdmin = "";
    clients._ClientsState.__proto__.new.call(this);
    ;
  }).prototype = clients._ClientsState.prototype;
  dart.addTypeTests(clients._ClientsState);
  dart.setMethodSignature(clients._ClientsState, () => ({
    __proto__: dart.getMethods(clients._ClientsState.__proto__),
    [_uniqueUsersISAdmin]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_showFormCreateClients]: dart.fnType(dart.dynamic, [framework.BuildContext]),
    showErrorMessage: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(clients._ClientsState, "package:le30_app_web/clients/clients.dart");
  dart.setFieldSignature(clients._ClientsState, () => ({
    __proto__: dart.getFields(clients._ClientsState.__proto__),
    emailField: dart.fieldType(editable_text.TextEditingController),
    passwordField: dart.fieldType(editable_text.TextEditingController),
    firstNameField: dart.fieldType(editable_text.TextEditingController),
    descriptionField: dart.fieldType(editable_text.TextEditingController),
    tagsField: dart.fieldType(editable_text.TextEditingController),
    user: dart.fieldType(core.Map),
    isNameValid: dart.fieldType(core.bool),
    [_errorMessage]: dart.fieldType(core.String),
    authID: dart.fieldType(core.String),
    userIsAdmin: dart.fieldType(core.List),
    userAuth: dart.fieldType(core.List),
    uniqueUsersISAdmin: dart.fieldType(core.List),
    isAdmin: dart.fieldType(core.String)
  }));
  let C96;
  let C97;
  let C95;
  let C94;
  route_name._FadeRoute = class _FadeRoute extends pages.PageRouteBuilder {};
  (route_name._FadeRoute.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let routeName = opts && 'routeName' in opts ? opts.routeName : null;
    this.child = child;
    this.routeName = routeName;
    route_name._FadeRoute.__proto__.new.call(this, {settings: new navigator.RouteSettings.new({name: routeName}), pageBuilder: dart.fn((context, animation, secondaryAnimation) => child, BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionsBuilder: dart.fn((context, animation, secondaryAnimation, child) => new transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToFadeTransition())});
    ;
  }).prototype = route_name._FadeRoute.prototype;
  dart.addTypeTests(route_name._FadeRoute);
  dart.setLibraryUri(route_name._FadeRoute, "package:le30_app_web/services/route_name.dart");
  dart.setFieldSignature(route_name._FadeRoute, () => ({
    __proto__: dart.getFields(route_name._FadeRoute.__proto__),
    child: dart.finalFieldType(framework.Widget),
    routeName: dart.finalFieldType(core.String)
  }));
  let C98;
  let C99;
  let C100;
  route_name.generateRoute = function generateRoute(settings) {
    switch (settings.name) {
      case "/news":
      {
        return route_name._getPageRoute(new news.GetNews.new({$creationLocationd_0dea112b090073317d4: C98 || CT.C98}), settings);
      }
      case "/users":
      {
        return route_name._getPageRoute(new clients.Clients.new({$creationLocationd_0dea112b090073317d4: C99 || CT.C99}), settings);
      }
      default:
      {
        return route_name._getPageRoute(new news.GetNews.new({$creationLocationd_0dea112b090073317d4: C100 || CT.C100}), settings);
      }
    }
  };
  route_name._getPageRoute = function _getPageRoute(child, settings) {
    return new route_name._FadeRoute.new({child: child, routeName: settings.name});
  };
  dart.defineLazy(route_name, {
    /*route_name.NewsRoute*/get NewsRoute() {
      return "/news";
    },
    /*route_name.ClientsRoute*/get ClientsRoute() {
      return "/users";
    },
    /*route_name.OneClientsRoute*/get OneClientsRoute() {
      return "/users/user";
    },
    /*route_name.OneNewsRoute*/get OneNewsRoute() {
      return "/news/new";
    }
  });
  dart.trackLibraries("packages/le30_app_web/clients/clients", {
    "package:le30_app_web/clients/clients.dart": clients,
    "package:le30_app_web/services/route_name.dart": route_name
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["clients.dart","../services/route_name.dart"],"names":[],"mappings":"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","file":"clients.ddc.js"}');
  // Exports:
  return {
    clients__clients: clients,
    services__route_name: route_name
  };
});

//# sourceMappingURL=clients.ddc.js.map
