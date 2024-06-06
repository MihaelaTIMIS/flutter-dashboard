
import 'package:flutter/material.dart';
import 'package:le30_app_web/navbar/navbar_item_model.dart';
import 'package:le30_app_web/view/locator.dart';
import 'package:le30_app_web/services/navigation_service.dart';
import 'package:provider/provider.dart';

class NavBarItem extends StatelessWidget {
  final IconData icon;
  final String title;
  final String navigationPath;
  
  const NavBarItem({this.icon, this.title, this.navigationPath});


  @override
  Widget build(BuildContext context) {
    var model = NavBarItemModel(
      iconData: icon,
      title: title,
      navigationPath: navigationPath
    );
    return GestureDetector(
      onTap: (){
        locator<NavigationService>().navigateTo(navigationPath);
      },
      child: Provider.value(
        value: model,
        child: Padding(
          padding: EdgeInsets.only(top: 10.0, right: 10.0, left: 20.0, bottom: 10.0),
          child: Row(
             children: <Widget>[
            Icon(model.iconData),
            SizedBox(width: 10.0,),
            Text(
              model.title,
              style: TextStyle(fontSize: 18),
            )
          ], 
          ),
        ),
      ),
    );
  }
}
