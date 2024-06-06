import 'package:flutter/material.dart';
import 'package:le30_app_web/services/navigation_service.dart';
import 'package:le30_app_web/services/route_name.dart';
import 'package:le30_app_web/sidebar/sidebar.dart';
import 'package:le30_app_web/view/locator.dart';

class LayoutTemplate extends StatelessWidget {
  const LayoutTemplate({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.height,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                SideBar(),
                Expanded(
                  child: Navigator(
                    key: locator<NavigationService>().navigatorKey,
                    onGenerateRoute: generateRoute,
                    initialRoute: NewsRoute,
                  ),
                ),
              ],
            )
          )
        );
  }
}
