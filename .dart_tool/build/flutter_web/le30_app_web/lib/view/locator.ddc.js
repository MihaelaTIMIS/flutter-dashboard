define(['dart_sdk', 'packages/le30_app_web/services/navigation_service', 'packages/get_it/get_it'], function(dart_sdk, packages__le30_app_web__services__navigation_service, packages__get_it__get_it) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const navigation_service = packages__le30_app_web__services__navigation_service.services__navigation_service;
  const get_it = packages__get_it__get_it.get_it;
  const locator = Object.create(dart.library);
  let VoidToNavigationService = () => (VoidToNavigationService = dart.constFn(dart.fnType(navigation_service.NavigationService, [])))();
  const CT = Object.create(null);
  locator.setupLocator = function setupLocator() {
    locator.locator.registerLazySingleton(navigation_service.NavigationService, dart.fn(() => new navigation_service.NavigationService.new(), VoidToNavigationService()));
  };
  dart.defineLazy(locator, {
    /*locator.locator*/get locator() {
      return get_it.GetIt.instance;
    },
    set locator(_) {}
  });
  dart.trackLibraries("packages/le30_app_web/view/locator", {
    "package:le30_app_web/view/locator.dart": locator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["locator.dart"],"names":[],"mappings":";;;;;;;;;;;AAQ0D,IAAxD,AAAQ,4EAAsB,cAAM;EACtC;;MAJM,eAAO;YAAS","file":"locator.ddc.js"}');
  // Exports:
  return {
    view__locator: locator
  };
});

//# sourceMappingURL=locator.ddc.js.map
