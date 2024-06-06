define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/intl/date_symbol_data_local', 'packages/le30_app_web/services/users_data', 'packages/firebase_web/src/app', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/le30_app_web/news/list_news', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/firebase_web/firebase'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__intl__date_symbol_data_local, packages__le30_app_web__services__users_data, packages__firebase_web__src__app, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__le30_app_web__news__list_news, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__firebase_web__firebase) {
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
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const date_symbol_data_local = packages__intl__date_symbol_data_local.date_symbol_data_local;
  const users_data = packages__le30_app_web__services__users_data.services__users_data;
  const firestore = packages__firebase_web__src__app.src__firestore;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__material.src__material__colors;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const dialog = packages__flutter__material.src__material__dialog;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const list_news = packages__le30_app_web__news__list_news.news__list_news;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const top_level = packages__firebase_web__firebase.src__top_level;
  const news = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.QuerySnapshot])))();
  let FutureOfQuerySnapshot = () => (FutureOfQuerySnapshot = dart.constFn(async.Future$(firestore.QuerySnapshot)))();
  let FutureOfQuerySnapshotToNull = () => (FutureOfQuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [FutureOfQuerySnapshot()])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
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
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 62,
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
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 22,
        [_Location_line]: 67,
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
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 17,
        [_Location_line]: 76,
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
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 74,
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
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 78,
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
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
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
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 59,
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
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 58,
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
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 56,
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
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
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
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 107,
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
        [_Location_column]: 19,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 152,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 139,
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
        [_Location_column]: 19,
        [_Location_line]: 137,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 17,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 103,
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
        [_Location_column]: 22,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 101,
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
        [_Location_column]: 20,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 11,
        [_Location_line]: 99,
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
        [_Location_column]: 16,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/news.dart"
      });
    }
  });
  news.GetNews = class GetNews extends framework.StatefulWidget {
    createState() {
      return new news.__GetNewsState.new();
    }
  };
  (news.GetNews.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    news.GetNews.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = news.GetNews.prototype;
  dart.addTypeTests(news.GetNews);
  dart.setMethodSignature(news.GetNews, () => ({
    __proto__: dart.getMethods(news.GetNews.__proto__),
    createState: dart.fnType(news.__GetNewsState, [])
  }));
  dart.setLibraryUri(news.GetNews, "package:le30_app_web/news/news.dart");
  const _locale = dart.privateName(news, "_locale");
  const _uniqueUsersISAdmin = dart.privateName(news, "_uniqueUsersISAdmin");
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
  const _dialogCreateNews = dart.privateName(news, "_dialogCreateNews");
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
  let C34;
  let C33;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C47;
  let C44;
  let C43;
  let C50;
  let C51;
  let C49;
  let C48;
  let C54;
  let C55;
  let C56;
  let C53;
  let C52;
  let C59;
  let C60;
  let C58;
  let C57;
  let C61;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C66;
  let C65;
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
  news.__GetNewsState = class __GetNewsState extends framework.State$(news.GetNews) {
    initState() {
      this[_uniqueUsersISAdmin]();
      super.initState();
      date_symbol_data_local.initializeDateFormatting(this[_locale], null);
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
      return new container.Container.new({child: new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Column.new({children: JSArrayOfWidget().of([new text.Text.new("List New", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontWeight: ui.FontWeight.bold, fontSize: 30.0}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), this.isAdmin === "true" ? new raised_button.RaisedButton.new({color: new ui.Color.fromARGB(255, 254, 234, 12), onPressed: dart.fn(() => {
                  this[_dialogCreateNews]();
                }, VoidToNull()), child: new text.Text.new("Create News", {style: new text_style.TextStyle.new({color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}) : new container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), new list_news.ListNew.new({$creationLocationd_0dea112b090073317d4: C20 || CT.C20})]), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    [_dialogCreateNews]() {
      this.linkNewsField.text = "";
      this.linkSubscribeField.text = "";
      this.resumeField.text = "";
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({content: new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.6, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C32 || CT.C32, child: new text_form_field.TextFormField.new({autofocus: false, controller: this.linkNewsField, keyboardType: text_input.TextInputType.url, decoration: new input_decorator.InputDecoration.new({labelText: "Link News"}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new basic.Padding.new({padding: C32 || CT.C32, child: new text_form_field.TextFormField.new({controller: this.linkSubscribeField, autofocus: false, decoration: new input_decorator.InputDecoration.new({labelText: "Link Subscribe"}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new basic.Padding.new({padding: C32 || CT.C32, child: new text_form_field.TextFormField.new({controller: this.resumeField, autofocus: false, decoration: new input_decorator.InputDecoration.new({labelText: "Resume"}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new basic.Padding.new({padding: C61 || CT.C61, child: new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
                      top_level.firestore().collection("news").doc().set(new (IdentityMapOfString$dynamic()).from(["date", new core.DateTime.now(), "link_more", this.linkNewsField.text, "link_subscribe", this.linkSubscribeField.text, "resume", this.resumeField.text]));
                      navigator.Navigator.of(context).pop(core.Object);
                    }, VoidToNull()), child: new text.Text.new("Save Link", {$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), BuildContextToAlertDialog())});
    }
  };
  (news.__GetNewsState.new = function() {
    this.linkNewsField = new editable_text.TextEditingController.new();
    this.linkSubscribeField = new editable_text.TextEditingController.new();
    this.resumeField = new editable_text.TextEditingController.new();
    this[_locale] = "fr";
    this.user = null;
    this.isAdmin = "";
    news.__GetNewsState.__proto__.new.call(this);
    ;
  }).prototype = news.__GetNewsState.prototype;
  dart.addTypeTests(news.__GetNewsState);
  dart.setMethodSignature(news.__GetNewsState, () => ({
    __proto__: dart.getMethods(news.__GetNewsState.__proto__),
    [_uniqueUsersISAdmin]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_dialogCreateNews]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(news.__GetNewsState, "package:le30_app_web/news/news.dart");
  dart.setFieldSignature(news.__GetNewsState, () => ({
    __proto__: dart.getFields(news.__GetNewsState.__proto__),
    linkNewsField: dart.fieldType(editable_text.TextEditingController),
    linkSubscribeField: dart.fieldType(editable_text.TextEditingController),
    resumeField: dart.fieldType(editable_text.TextEditingController),
    [_locale]: dart.fieldType(core.String),
    user: dart.fieldType(core.Map),
    isAdmin: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/le30_app_web/news/news", {
    "package:le30_app_web/news/news.dart": news
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["news.dart"],"names":[],"mappings":"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","file":"news.ddc.js"}');
  // Exports:
  return {
    news__news: news
  };
});

//# sourceMappingURL=news.ddc.js.map
