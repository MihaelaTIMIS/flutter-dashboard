define(['dart_sdk', 'packages/le30_app_web/navbar/navbar_item_model', 'packages/flutter/src/widgets/actions', 'packages/le30_app_web/view/locator', 'packages/le30_app_web/services/navigation_service', 'packages/provider/provider', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__le30_app_web__navbar__navbar_item_model, packages__flutter__src__widgets__actions, packages__le30_app_web__view__locator, packages__le30_app_web__services__navigation_service, packages__provider__provider, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const navbar_item_model = packages__le30_app_web__navbar__navbar_item_model.navbar__navbar_item_model;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const locator = packages__le30_app_web__view__locator.view__locator;
  const navigation_service = packages__le30_app_web__services__navigation_service.services__navigation_service;
  const provider = packages__provider__provider.src__provider;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const navbar_item = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ProviderOfNavBarItemModel = () => (ProviderOfNavBarItemModel = dart.constFn(provider.Provider$(navbar_item_model.NavBarItemModel)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 24,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 22,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 14,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 9,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 27,
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
        [_Location_column]: 12,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/le30_app_web/navbar/navbar_item.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  const icon$ = dart.privateName(navbar_item, "NavBarItem.icon");
  const title$ = dart.privateName(navbar_item, "NavBarItem.title");
  const navigationPath$ = dart.privateName(navbar_item, "NavBarItem.navigationPath");
  navbar_item.NavBarItem = class NavBarItem extends framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get navigationPath() {
      return this[navigationPath$];
    }
    set navigationPath(value) {
      super.navigationPath = value;
    }
    build(context) {
      let model = new navbar_item_model.NavBarItemModel.new({iconData: this.icon, title: this.title, navigationPath: this.navigationPath});
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          locator.locator.call(navigation_service.NavigationService).navigateTo(this.navigationPath);
        }, VoidToNull()), child: new (ProviderOfNavBarItemModel()).value({value: model, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 10.0, right: 10.0, left: 20.0, bottom: 10.0}), child: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(model.iconData, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new text.Text.new(model.title, {style: new text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
  };
  (navbar_item.NavBarItem.new = function(opts) {
    let icon = opts && 'icon' in opts ? opts.icon : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let navigationPath = opts && 'navigationPath' in opts ? opts.navigationPath : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[title$] = title;
    this[navigationPath$] = navigationPath;
    navbar_item.NavBarItem.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = navbar_item.NavBarItem.prototype;
  dart.addTypeTests(navbar_item.NavBarItem);
  dart.setMethodSignature(navbar_item.NavBarItem, () => ({
    __proto__: dart.getMethods(navbar_item.NavBarItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(navbar_item.NavBarItem, "package:le30_app_web/navbar/navbar_item.dart");
  dart.setFieldSignature(navbar_item.NavBarItem, () => ({
    __proto__: dart.getFields(navbar_item.NavBarItem.__proto__),
    icon: dart.finalFieldType(icon_data.IconData),
    title: dart.finalFieldType(core.String),
    navigationPath: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/le30_app_web/navbar/navbar_item", {
    "package:le30_app_web/navbar/navbar_item.dart": navbar_item
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navbar_item.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQiB;;;;;;IACF;;;;;;IACA;;;;;;UAMa;AACpB,kBAAQ,qDACA,kBACH,4BACS;AAElB,YAAO,kDACE;AACkD,UAAvD,AAAO,AAAsB,sEAAW;iCAE1B,gDACP,KAAK,SACL,gCACe,sCAAU,aAAa,YAAY,cAAc,eAC9D,6BACc,sBACnB,kBAAK,AAAM,KAAD,mEACV,+BAAgB,6DAChB,kBACE,AAAM,KAAD,gBACE,wCAAoB;IAOvC;;;QA/BuB;QAAW;QAAY;;IAAvB;IAAW;IAAY;AAAxC;;EAAwD","file":"navbar_item.ddc.js"}');
  // Exports:
  return {
    navbar__navbar_item: navbar_item
  };
});

//# sourceMappingURL=navbar_item.ddc.js.map
