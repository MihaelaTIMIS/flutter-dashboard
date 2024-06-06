define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/le30_app_web/sidebar/sidebar', 'packages/le30_app_web/view/locator', 'packages/le30_app_web/services/navigation_service', 'packages/le30_app_web/clients/clients'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__le30_app_web__sidebar__sidebar, packages__le30_app_web__view__locator, packages__le30_app_web__services__navigation_service, packages__le30_app_web__clients__clients) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const sidebar = packages__le30_app_web__sidebar__sidebar.sidebar__sidebar;
  const locator = packages__le30_app_web__view__locator.view__locator;
  const navigation_service = packages__le30_app_web__services__navigation_service.services__navigation_service;
  const route_name = packages__le30_app_web__clients__clients.services__route_name;
  const layout_template = Object.create(dart.library);
  let RouteSettingsToRoute = () => (RouteSettingsToRoute = dart.constFn(dart.fnType(navigator.Route, [navigator.RouteSettings])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
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
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/view/layout_template.dart"
      });
    },
    get C2() {
      return C2 = dart.fn(route_name.generateRoute, RouteSettingsToRoute());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 21,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 21,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "initialRoute",
        [_Location_column]: 21,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/view/layout_template.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/view/layout_template.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/view/layout_template.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/view/layout_template.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 13,
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
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/view/layout_template.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  let C10;
  let C9;
  let C8;
  let C13;
  let C14;
  let C15;
  let C16;
  let C12;
  let C11;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C23;
  let C22;
  layout_template.LayoutTemplate = class LayoutTemplate extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({body: new container.Container.new({width: media_query.MediaQuery.of(context).size.width, height: media_query.MediaQuery.of(context).size.height, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new sidebar.SideBar.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Expanded.new({child: new navigator.Navigator.new({key: locator.locator.call(navigation_service.NavigationService).navigatorKey, onGenerateRoute: C2 || CT.C2, initialRoute: "/news", $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8})]), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
  };
  (layout_template.LayoutTemplate.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    layout_template.LayoutTemplate.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = layout_template.LayoutTemplate.prototype;
  dart.addTypeTests(layout_template.LayoutTemplate);
  dart.setMethodSignature(layout_template.LayoutTemplate, () => ({
    __proto__: dart.getMethods(layout_template.LayoutTemplate.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(layout_template.LayoutTemplate, "package:le30_app_web/view/layout_template.dart");
  dart.trackLibraries("packages/le30_app_web/view/layout_template", {
    "package:le30_app_web/view/layout_template.dart": layout_template
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["layout_template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,kCACG,oCACgB,AAAY,AAAK,0BAAd,OAAO,sBACT,AAAY,AAAK,0BAAd,OAAO,sBACtB,sCACgC,4CACV,2CACY,yCACrB,sBAChB,gFACA,+BACS,kCACA,AAAO,AAAsB;IASpD;;;QAzB0B;;AAAQ,kEAAW,GAAG;;EAAC","file":"layout_template.ddc.js"}');
  // Exports:
  return {
    view__layout_template: layout_template
  };
});

//# sourceMappingURL=layout_template.ddc.js.map
