import 'package:flutter/material.dart';



class Dashboard extends StatefulWidget {
  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        
        decoration: BoxDecoration(),
        
        child: Column(
            
          children: <Widget>[
           Text('Content of the page Dashbord')
          ],
        ),
      ),
    );
  }
}