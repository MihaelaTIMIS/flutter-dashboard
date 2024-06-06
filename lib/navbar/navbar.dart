
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:le30_app_web/navbar/navbar_item.dart';
import 'package:le30_app_web/services/route_name.dart';

class Navbar extends StatelessWidget {
    const Navbar({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
     // constraints: BoxConstraints(maxWidth: 1200),
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              children: <Widget>[
                Container(
                  width: 100.0,
                  child: Image.asset('assets/images/logo-le30.png'),
                )
              ],
            ),
           
            Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                
                NavBarItem(icon: Icons.tune, title: 'Dashboard', navigationPath: ClientsRoute ),
                SizedBox(
                  width: 60,
                ),
                NavBarItem(icon: Icons.tune, title: 'Communauté', navigationPath: NewsRoute ),
                SizedBox(
                  width: 60,
                ),
                NavBarItem(icon: Icons.tune, title: 'Actualités', navigationPath: ClientsRoute ),
              
              ],
            )
          ],
        ),
      ),
    );  
  }
}


// menu for desktop
class DesktopNavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: 1200),
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Row(
              children: <Widget>[
                Container(
                  width: 100.0,
                  child: Image.asset('assets/images/logo-le30.png'),
                )
              ],
            ),
           
            Row(
              mainAxisSize: MainAxisSize.min,
              children: <Widget>[
                
                NavBarItem(),
                SizedBox(
                  width: 60,
                ),
             
              ],
            )
          ],
        ),
      ),
    );
  }
}

//menu for Mobile
class MobileNavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      
    );
  }
}