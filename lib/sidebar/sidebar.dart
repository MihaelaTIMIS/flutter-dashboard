import 'package:flutter/material.dart';
import 'package:le30_app_web/navbar/navbar_item.dart';
import 'package:le30_app_web/services/route_name.dart';

class SideBar extends StatefulWidget {
  @override
  _SideBarState createState() => _SideBarState();
}

class _SideBarState extends State<SideBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
        //constraints: BoxConstraints(maxWidth: 1200),
        // width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        width: 200.0,
        decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(color: Colors.black12, blurRadius: 16),
        ],
      ),
        child: Padding(
         padding: const EdgeInsets.all(0.0),
         child: ListView(
            children: <Widget>[
              DrawerHeader(
                decoration: BoxDecoration(
                  color: Color.fromARGB(255, 254, 234, 12),
                ),
                child: Image.asset('assets/images/logo-seul.png'),
              ),

              SizedBox(height:15.0),

             NavBarItem(
                  icon: Icons.featured_play_list,
                  title: 'Actualités',
                  navigationPath: NewsRoute ),
              NavBarItem(
                  icon: Icons.list,
                  title: 'Communauté',
                  navigationPath: ClientsRoute ),
              
                          
              ListTile(
                leading: Icon(Icons.exit_to_app, color: Colors.black,),
                title: Text('Déconnection'),
                onTap: () {
                
                })
            ],
          ), 
        ));
  }
}
