import 'package:flutter/widgets.dart';


class NavBarItemModel {
  final String title;
  final String navigationPath;
  final IconData iconData;

  NavBarItemModel({
    this.iconData,
    this.title,
    this.navigationPath
  });
}