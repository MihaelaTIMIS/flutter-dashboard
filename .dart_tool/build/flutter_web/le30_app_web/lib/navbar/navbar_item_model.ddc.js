define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const navbar_item_model = Object.create(dart.library);
  const CT = Object.create(null);
  const title$ = dart.privateName(navbar_item_model, "NavBarItemModel.title");
  const navigationPath$ = dart.privateName(navbar_item_model, "NavBarItemModel.navigationPath");
  const iconData$ = dart.privateName(navbar_item_model, "NavBarItemModel.iconData");
  navbar_item_model.NavBarItemModel = class NavBarItemModel extends core.Object {
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
    get iconData() {
      return this[iconData$];
    }
    set iconData(value) {
      super.iconData = value;
    }
  };
  (navbar_item_model.NavBarItemModel.new = function(opts) {
    let iconData = opts && 'iconData' in opts ? opts.iconData : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let navigationPath = opts && 'navigationPath' in opts ? opts.navigationPath : null;
    this[iconData$] = iconData;
    this[title$] = title;
    this[navigationPath$] = navigationPath;
    ;
  }).prototype = navbar_item_model.NavBarItemModel.prototype;
  dart.addTypeTests(navbar_item_model.NavBarItemModel);
  dart.setLibraryUri(navbar_item_model.NavBarItemModel, "package:le30_app_web/navbar/navbar_item_model.dart");
  dart.setFieldSignature(navbar_item_model.NavBarItemModel, () => ({
    __proto__: dart.getFields(navbar_item_model.NavBarItemModel.__proto__),
    title: dart.finalFieldType(core.String),
    navigationPath: dart.finalFieldType(core.String),
    iconData: dart.finalFieldType(icon_data.IconData)
  }));
  dart.trackLibraries("packages/le30_app_web/navbar/navbar_item_model", {
    "package:le30_app_web/navbar/navbar_item_model.dart": navbar_item_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navbar_item_model.dart"],"names":[],"mappings":";;;;;;;;;;;;IAIe;;;;;;IACA;;;;;;IACE;;;;;;;;QAGR;QACA;QACA;IAFA;IACA;IACA;;EACL","file":"navbar_item_model.ddc.js"}');
  // Exports:
  return {
    navbar__navbar_item_model: navbar_item_model
  };
});

//# sourceMappingURL=navbar_item_model.ddc.js.map
