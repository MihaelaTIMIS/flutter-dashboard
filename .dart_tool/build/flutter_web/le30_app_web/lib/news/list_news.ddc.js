define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/intl/date_symbol_data_local', 'packages/firebase_web/src/app', 'packages/le30_app_web/services/users_data', 'packages/url_launcher/url_launcher', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/firebase_web/firebase', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__intl__date_symbol_data_local, packages__firebase_web__src__app, packages__le30_app_web__services__users_data, packages__url_launcher__url_launcher, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__firebase_web__firebase, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const date_symbol_data_local = packages__intl__date_symbol_data_local.date_symbol_data_local;
  const firestore = packages__firebase_web__src__app.src__firestore;
  const users_data = packages__le30_app_web__services__users_data.services__users_data;
  const url_launcher = packages__url_launcher__url_launcher.url_launcher;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const data_table = packages__flutter__material.src__material__data_table;
  const colors = packages__flutter__material.src__material__colors;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const card = packages__flutter__material.src__material__card;
  const top_level = packages__firebase_web__firebase.src__top_level;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const list_news = Object.create(dart.library);
  const $add = dartx.add;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let DocumentSnapshotToNull = () => (DocumentSnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.DocumentSnapshot])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let QuerySnapshotToNull = () => (QuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.QuerySnapshot])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FutureOfQuerySnapshot = () => (FutureOfQuerySnapshot = dart.constFn(async.Future$(firestore.QuerySnapshot)))();
  let FutureOfQuerySnapshotToNull = () => (FutureOfQuerySnapshotToNull = dart.constFn(dart.fnType(core.Null, [FutureOfQuerySnapshot()])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfDataColumn = () => (JSArrayOfDataColumn = dart.constFn(_interceptors.JSArray$(data_table.DataColumn)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let JSArrayOfDataCell = () => (JSArrayOfDataCell = dart.constFn(_interceptors.JSArray$(data_table.DataCell)))();
  let dynamicToDataRow = () => (dynamicToDataRow = dart.constFn(dart.fnType(data_table.DataRow, [dart.dynamic])))();
  let BuildContextAndintToCard = () => (BuildContextAndintToCard = dart.constFn(dart.fnType(card.Card, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 14,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 5,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 5
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 164,
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
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 23,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 23,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 10,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 10
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 41,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 198,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 28,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 60,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 144,
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
        [_Location_column]: 16,
        [_Location_line]: 143,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 214,
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
        [_Location_column]: 22,
        [_Location_line]: 212,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 230,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 57,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 62,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 260,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 59,
        [_Location_line]: 263,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 265,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 266,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 40,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "sortAscending",
        [_Location_column]: 9,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "columns",
        [_Location_column]: 9,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "rows",
        [_Location_column]: 9,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 0
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 33,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 31,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 301,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 322,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 37,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 44,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 324,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 330,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 37,
        [_Location_line]: 327,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 325,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 33,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 315,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 314,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 27,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 300,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 298,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 97,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.constList([C181 || CT.C181], widget_inspector._Location);
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C180 || CT.C180,
        [_Location_name]: null,
        [_Location_column]: 60,
        [_Location_line]: 343,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 37,
        [_Location_line]: 339,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 340,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 339,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 338,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 337,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 23,
        [_Location_line]: 296,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 297,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 295,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 293,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 295,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195, C196 || CT.C196], widget_inspector._Location);
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C194 || CT.C194,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 292,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 290,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 291,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 289,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 289,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203, C204 || CT.C204], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.constList([C207 || CT.C207, C208 || CT.C208], widget_inspector._Location);
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C206 || CT.C206,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 285,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkWrap",
        [_Location_column]: 9,
        [_Location_line]: 281,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 282,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 283,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 284,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212, C213 || CT.C213, C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C210 || CT.C210,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 279,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/news/list_news.dart"
      });
    }
  });
  list_news.ListNew = class ListNew extends framework.StatefulWidget {
    createState() {
      return new list_news._ListNewState.new();
    }
  };
  (list_news.ListNew.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    list_news.ListNew.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = list_news.ListNew.prototype;
  dart.addTypeTests(list_news.ListNew);
  dart.setMethodSignature(list_news.ListNew, () => ({
    __proto__: dart.getMethods(list_news.ListNew.__proto__),
    createState: dart.fnType(list_news._ListNewState, [])
  }));
  dart.setLibraryUri(list_news.ListNew, "package:le30_app_web/news/list_news.dart");
  const _locale = dart.privateName(list_news, "_locale");
  const _getListNews = dart.privateName(list_news, "_getListNews");
  const _uniqueUsersISAdmin = dart.privateName(list_news, "_uniqueUsersISAdmin");
  const _launchURL = dart.privateName(list_news, "_launchURL");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C35;
  let C33;
  let C32;
  const _showDialogDelete = dart.privateName(list_news, "_showDialogDelete");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C36;
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C49;
  let C50;
  let C47;
  let C46;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C59;
  let C56;
  let C55;
  let C62;
  let C63;
  let C61;
  let C60;
  let C64;
  let C67;
  let C66;
  let C65;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C85;
  let C84;
  const _showDialogEdit = dart.privateName(list_news, "_showDialogEdit");
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C104;
  let C103;
  let C108;
  let C107;
  let C106;
  let C111;
  let C110;
  let C109;
  let C114;
  let C113;
  let C112;
  let C117;
  let C116;
  let C115;
  let C120;
  let C119;
  let C118;
  let C123;
  let C122;
  let C121;
  let C126;
  let C127;
  let C125;
  let C124;
  let C130;
  let C129;
  let C128;
  let C133;
  let C134;
  let C132;
  let C131;
  let C137;
  let C138;
  let C139;
  let C136;
  let C135;
  let C140;
  let C143;
  let C144;
  let C145;
  let C142;
  let C141;
  let C148;
  let C149;
  let C147;
  let C146;
  let C152;
  let C151;
  let C150;
  let C155;
  let C156;
  let C157;
  let C154;
  let C153;
  let C160;
  let C159;
  let C158;
  let C163;
  let C162;
  let C161;
  let C166;
  let C167;
  let C168;
  let C165;
  let C164;
  let C171;
  let C170;
  let C169;
  let C174;
  let C173;
  let C172;
  let C177;
  let C178;
  let C176;
  let C175;
  let C181;
  let C180;
  let C179;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C187;
  let C186;
  let C191;
  let C192;
  let C190;
  let C189;
  let C195;
  let C196;
  let C194;
  let C193;
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C204;
  let C202;
  let C201;
  let C207;
  let C208;
  let C206;
  let C205;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C210;
  let C209;
  list_news._ListNewState = class _ListNewState extends framework.State$(list_news.ListNew) {
    initState() {
      this[_getListNews]();
      this[_uniqueUsersISAdmin]();
      super.initState();
      date_symbol_data_local.initializeDateFormatting(this[_locale], null);
    }
    [_getListNews]() {
      new list_news.NewsService.new().allNews().then(core.Null, dart.fn(snapshot => {
        snapshot.forEach(dart.fn(doc => {
          this.listNews[$add](new (IdentityMapOfString$Object()).from(["id", doc.id, "data", doc.data()]));
        }, DocumentSnapshotToNull()));
        this.setState(dart.fn(() => {
          this.listNews = this.listNews;
        }, VoidToNull()));
      }, QuerySnapshotToNull()));
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
    [_launchURL](url) {
      return async.async(dart.dynamic, function* _launchURL() {
        if (dart.test(yield url_launcher.canLaunch(core.String._check(url)))) {
          yield url_launcher.launch(core.String._check(url));
        } else {
          dart.throw("Could not launch " + dart.str(url));
        }
      });
    }
    build(context) {
      return new single_child_scroll_view.SingleChildScrollView.new({scrollDirection: basic_types.Axis.vertical, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(30.0), child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({width: media_query.MediaQuery.of(context).size.width, child: this.isAdmin === "true" ? this.listDadaTableNews() : this.cardDataNews(), $creationLocationd_0dea112b090073317d4: C0 || CT.C0})]), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
    [_showDialogDelete](indexNew) {
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Do you want to delete link?", {$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Cancel", {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new flat_button.FlatButton.new({child: new text.Text.new("Delete", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), onPressed: dart.fn(() => {
                top_level.firestore().collection("news").doc(core.String._check(indexNew)).delete();
                navigator.Navigator.of(context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C28 || CT.C28})]), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), BuildContextToAlertDialog())});
    }
    [_showDialogEdit](indexID, indexNew) {
      this.linkNewsField.text = dart.toString(dart.dsend(indexNew, '_get', ["link_more"]));
      this.linkSubscribeField.text = dart.toString(dart.dsend(indexNew, '_get', ["link_subscribe"]));
      this.resumeField.text = dart.toString(dart.dsend(indexNew, '_get', ["resume"]));
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({content: new container.Container.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) * 0.6, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C36 || CT.C36, child: new text_form_field.TextFormField.new({autofocus: false, controller: this.linkNewsField, decoration: new input_decorator.InputDecoration.new({labelText: "Link News", hintText: dart.toString(dart.dsend(indexNew, '_get', ["link_more"]))}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new basic.Padding.new({padding: C36 || CT.C36, child: new text_form_field.TextFormField.new({controller: this.linkSubscribeField, autofocus: false, decoration: new input_decorator.InputDecoration.new({labelText: "Link Subscribe", hintText: dart.toString(dart.dsend(indexNew, '_get', ["link_subscribe"]))}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new basic.Padding.new({padding: C36 || CT.C36, child: new text_form_field.TextFormField.new({controller: this.resumeField, autofocus: false, decoration: new input_decorator.InputDecoration.new({labelText: "Resume", hintText: dart.toString(dart.dsend(indexNew, '_get', ["resume"]))}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), new basic.Padding.new({padding: C64 || CT.C64, child: new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
                      top_level.firestore().collection("news").doc(core.String._check(indexID)).set(new (IdentityMapOfString$dynamic()).from(["date", new core.DateTime.now(), "link_more", this.linkNewsField.text, "link_subscribe", this.linkSubscribeField.text, "resume", this.resumeField.text]));
                      navigator.Navigator.of(context).pop(core.Object);
                    }, VoidToNull()), child: new text.Text.new("Save Edit", {$creationLocationd_0dea112b090073317d4: C65 || CT.C65}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72})]), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), BuildContextToAlertDialog())});
    }
    listDadaTableNews() {
      return new data_table.DataTable.new({sortAscending: true, columns: JSArrayOfDataColumn().of([new data_table.DataColumn.new({label: new text.Text.new("Date", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontWeight: ui.FontWeight.bold, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87})}), new data_table.DataColumn.new({label: new text.Text.new("Link News", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontWeight: ui.FontWeight.bold, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91})}), new data_table.DataColumn.new({label: new text.Text.new("Link Subscribe", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontWeight: ui.FontWeight.bold, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95})}), new data_table.DataColumn.new({label: new text.Text.new("Resume", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontWeight: ui.FontWeight.bold, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99})}), new data_table.DataColumn.new({label: new text.Text.new(" ", {$creationLocationd_0dea112b090073317d4: C103 || CT.C103})}), new data_table.DataColumn.new({label: new text.Text.new(" ", {$creationLocationd_0dea112b090073317d4: C106 || CT.C106})})]), rows: this.listNews[$map](data_table.DataRow, dart.fn(itemRow => new data_table.DataRow.new({cells: JSArrayOfDataCell().of([new data_table.DataCell.new(new text.Text.new(dart.toString(dart.dsend(dart.dsend(itemRow, '_get', ["data"]), '_get', ["date"])), {$creationLocationd_0dea112b090073317d4: C109 || CT.C109})), new data_table.DataCell.new(new text.Text.new(dart.toString(dart.dsend(dart.dsend(itemRow, '_get', ["data"]), '_get', ["link_more"])), {$creationLocationd_0dea112b090073317d4: C112 || CT.C112}), {onTap: dart.fn(() => this[_launchURL](dart.toString(dart.dsend(dart.dsend(itemRow, '_get', ["data"]), '_get', ["link_more"]))), VoidTodynamic())}), new data_table.DataCell.new(new text.Text.new(dart.toString(dart.dsend(dart.dsend(itemRow, '_get', ["data"]), '_get', ["link_subscribe"])), {$creationLocationd_0dea112b090073317d4: C115 || CT.C115}), {onTap: dart.fn(() => this[_launchURL](dart.toString(dart.dsend(dart.dsend(itemRow, '_get', ["data"]), '_get', ["link_more"]))), VoidTodynamic())}), new data_table.DataCell.new(new text.Text.new(dart.toString(dart.dsend(dart.dsend(itemRow, '_get', ["data"]), '_get', ["resume"])), {$creationLocationd_0dea112b090073317d4: C118 || CT.C118})), new data_table.DataCell.new(new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.edit, {$creationLocationd_0dea112b090073317d4: C121 || CT.C121}), onPressed: dart.fn(() => {
                this[_showDialogEdit](dart.dsend(itemRow, '_get', ["id"]), dart.dsend(itemRow, '_get', ["data"]));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C124 || CT.C124})), new data_table.DataCell.new(new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.delete, {$creationLocationd_0dea112b090073317d4: C128 || CT.C128}), onPressed: dart.fn(() => {
                this[_showDialogDelete](dart.dsend(itemRow, '_get', ["id"]));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}))])}), dynamicToDataRow()))[$toList](), $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
    }
    cardDataNews() {
      return new scroll_view.ListView.builder({scrollDirection: basic_types.Axis.vertical, shrinkWrap: true, itemCount: this.listNews[$length], padding: C140 || CT.C140, itemBuilder: dart.fn((context, index) => new card.Card.new({color: colors.Colors.white, child: new basic.SizedBox.new({width: 360.0, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 15.0, vertical: 20.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new flat_button.FlatButton.new({onPressed: dart.fn(() => this[_launchURL](dart.toString(dart.dsend(dart.dsend(this.listNews[$_get](index), '_get', ["data"]), '_get', ["link_more"]))), VoidTodynamic()), child: new text.Text.new(dart.toString(dart.dsend(dart.dsend(this.listNews[$_get](index), '_get', ["data"]), '_get', ["resume"])), {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w700, fontSize: 14.0}), softWrap: true, $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({color: new ui.Color.fromARGB(255, 235, 235, 234), onPressed: dart.fn(() => this[_launchURL](dart.toString(dart.dsend(dart.dsend(this.listNews[$_get](index), '_get', ["data"]), '_get', ["link_more"]))), VoidTodynamic()), child: new text.Text.new("En savoir plus", {$creationLocationd_0dea112b090073317d4: C150 || CT.C150}), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}), new basic.SizedBox.new({width: 100.0, $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), new raised_button.RaisedButton.new({color: new ui.Color.fromARGB(255, 254, 234, 12), onPressed: dart.fn(() => this[_launchURL](dart.toString(dart.dsend(dart.dsend(this.listNews[$_get](index), '_get', ["data"]), '_get', ["link_more"]))), VoidTodynamic()), child: new text.Text.new("S'inscrire", {$creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164})]), $creationLocationd_0dea112b090073317d4: C169 || CT.C169}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172})]), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 20.0}), child: new text.Text.new(dart.toString(dart.dsend(dart.dsend(this.listNews[$_get](index), '_get', ["data"]), '_get', ["date"])), {$creationLocationd_0dea112b090073317d4: C179 || CT.C179}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182})]), $creationLocationd_0dea112b090073317d4: C186 || CT.C186})]), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), $creationLocationd_0dea112b090073317d4: C193 || CT.C193})]), $creationLocationd_0dea112b090073317d4: C197 || CT.C197}), $creationLocationd_0dea112b090073317d4: C201 || CT.C201}), $creationLocationd_0dea112b090073317d4: C205 || CT.C205}), BuildContextAndintToCard()), $creationLocationd_0dea112b090073317d4: C209 || CT.C209});
    }
  };
  (list_news._ListNewState.new = function() {
    this.linkNewsField = new editable_text.TextEditingController.new();
    this.linkSubscribeField = new editable_text.TextEditingController.new();
    this.resumeField = new editable_text.TextEditingController.new();
    this.listNews = [];
    this.news = null;
    this.isAdmin = "";
    this.user = null;
    this[_locale] = "fr";
    list_news._ListNewState.__proto__.new.call(this);
    ;
  }).prototype = list_news._ListNewState.prototype;
  dart.addTypeTests(list_news._ListNewState);
  dart.setMethodSignature(list_news._ListNewState, () => ({
    __proto__: dart.getMethods(list_news._ListNewState.__proto__),
    [_getListNews]: dart.fnType(dart.dynamic, []),
    [_uniqueUsersISAdmin]: dart.fnType(dart.dynamic, []),
    [_launchURL]: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_showDialogDelete]: dart.fnType(dart.dynamic, [dart.dynamic]),
    [_showDialogEdit]: dart.fnType(dart.dynamic, [dart.dynamic, dart.dynamic]),
    listDadaTableNews: dart.fnType(framework.Widget, []),
    cardDataNews: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(list_news._ListNewState, "package:le30_app_web/news/list_news.dart");
  dart.setFieldSignature(list_news._ListNewState, () => ({
    __proto__: dart.getFields(list_news._ListNewState.__proto__),
    linkNewsField: dart.fieldType(editable_text.TextEditingController),
    linkSubscribeField: dart.fieldType(editable_text.TextEditingController),
    resumeField: dart.fieldType(editable_text.TextEditingController),
    listNews: dart.fieldType(core.List),
    news: dart.fieldType(core.Map),
    isAdmin: dart.fieldType(core.String),
    user: dart.fieldType(core.Map),
    [_locale]: dart.fieldType(core.String)
  }));
  const db = dart.privateName(list_news, "NewsService.db");
  list_news.NewsService = class NewsService extends core.Object {
    get db() {
      return this[db];
    }
    set db(value) {
      this[db] = value;
    }
    allNews() {
      return this.db.collection("news").orderBy("date", "desc").get();
    }
  };
  (list_news.NewsService.new = function() {
    this[db] = top_level.firestore();
    ;
  }).prototype = list_news.NewsService.prototype;
  dart.addTypeTests(list_news.NewsService);
  dart.setMethodSignature(list_news.NewsService, () => ({
    __proto__: dart.getMethods(list_news.NewsService.__proto__),
    allNews: dart.fnType(async.Future$(firestore.QuerySnapshot), [])
  }));
  dart.setLibraryUri(list_news.NewsService, "package:le30_app_web/news/list_news.dart");
  dart.setFieldSignature(list_news.NewsService, () => ({
    __proto__: dart.getFields(list_news.NewsService.__proto__),
    db: dart.fieldType(firestore.Firestore)
  }));
  dart.trackLibraries("packages/le30_app_web/news/list_news", {
    "package:le30_app_web/news/list_news.dart": list_news
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["list_news.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"list_news.ddc.js"}');
  // Exports:
  return {
    news__list_news: list_news
  };
});

//# sourceMappingURL=list_news.ddc.js.map
