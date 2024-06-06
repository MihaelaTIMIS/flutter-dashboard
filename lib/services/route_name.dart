
import 'package:flutter/material.dart';
import 'package:le30_app_web/clients/clients.dart';
import 'package:le30_app_web/news/news.dart';




const String NewsRoute = '/news';
const String ClientsRoute = '/users';
const String OneClientsRoute = '/users/user';
const String OneNewsRoute = '/news/new';


Route<dynamic> generateRoute(RouteSettings settings) {
  //print('generateRoute: ${settings.name}');
  switch (settings.name) {
    case NewsRoute:
      return _getPageRoute(GetNews(), settings);
    case ClientsRoute:
      return _getPageRoute(Clients(), settings);
   
    default:
      return _getPageRoute(GetNews(), settings);
  }
}
PageRoute _getPageRoute(Widget child, RouteSettings settings) {
  /* return MaterialPageRoute(
    builder: (context) => child,
  ); */
  return _FadeRoute(child: child, routeName: settings.name);
}


class _FadeRoute extends PageRouteBuilder {
  final Widget child;
  final String routeName;
  _FadeRoute({this.child, this.routeName})
      : super(
          settings: RouteSettings(name: routeName),
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              child,
          transitionsBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
            Widget child,
          ) =>
              FadeTransition(
            opacity: animation,
            child: child,
          ),
        );
}