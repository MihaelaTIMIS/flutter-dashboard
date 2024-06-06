
import 'package:firebase_web/firestore.dart';
import 'package:flutter/material.dart';
import 'package:le30_app_web/services/users_data.dart';

class ListClients extends StatefulWidget {
  const ListClients({Key key}) : super(key: key);
  @override
  __ListClientsState createState() => __ListClientsState();
}

class __ListClientsState extends State<ListClients> {
  var usersKey = [];

  String userID;
  Map user;

  int index;
  TextEditingController emailField = new TextEditingController();
  TextEditingController passwordField = new TextEditingController();

  var usersAll = [];
  var usersNotAdmin = [];
  var usersIsAdmin = [];

  @override
  void initState() {
    getAllUsers();
    getUsersNotAdmin();
    getUsersISAdmin();

    super.initState();
  }

  getAllUsers() {
    UsersService().allUsers().map((snapshot) {
      snapshot.catchError((onError) {
        print('error:');
        print(onError);
      });

      snapshot.then((QuerySnapshot d) {
        for (int i = 0; i < d.docs.length; ++i) {
          usersAll.add(d.docs[i].data()); // get list users in database
        }

        setState(() {
          usersAll = usersAll;
        });
      });
    }).toList();
  }

  getUsersNotAdmin() {
    UsersService().usersNotAdmin().map((snapshot) {
      snapshot.catchError((onError) {
        print('error:');
        print(onError);
      });

      snapshot.then((QuerySnapshot d) {
        for (int i = 0; i < d.docs.length; ++i) {
          usersNotAdmin.add(d.docs[i].data()); // get list users in database
        }

        setState(() {
          usersNotAdmin = usersNotAdmin;
        });
      });
    }).toList();
  }

  getUsersISAdmin() {
    UsersService().usersNotAdmin().map((snapshot) {
      snapshot.catchError((onError) {
        print('error:');
        print(onError);
      });

      snapshot.then((QuerySnapshot d) {
        for (int i = 0; i < d.docs.length; ++i) {
          usersIsAdmin.add(d.docs[i].data()); // get list users in database
        }

        setState(() {
          usersIsAdmin = usersIsAdmin;
        });
      });
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.vertical,
      child: Padding(
        padding: EdgeInsets.all(30.0),
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: listDataTableUsers(),
          //child: listCardUsers(),
        ),
      ),
    );
  }

  Widget listDataTableUsers() {
    return DataTable(
     
      columns: [
        DataColumn(
          label: Text(
            'Avata',
            style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 16.0),
          ),
        ),
        DataColumn(
          label: Text(
            'Name',
            style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 16.0),
          ),
        
        ),
        DataColumn(
          label: Text(
            'Mail',
            style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 16.0),
          ),
        ),
        DataColumn(
            label: Text(
          'Description',
          style: TextStyle(
              color: Colors.black, fontWeight: FontWeight.bold, fontSize: 16.0),
        )),
        DataColumn(
            label: Text(
          'Tag',
          style: TextStyle(
              color: Colors.black, fontWeight: FontWeight.bold, fontSize: 16.0),
        )),
      ],
      rows: usersAll
          .map(
            (itemRow) => DataRow(
              cells: [
                DataCell(Image.network(
                  itemRow['picture'].toString(),
                  width: 50.0,
                  fit: BoxFit.fitWidth,
                )),
                DataCell(
                  Text(itemRow['first_name'].toString()),
                ),
                DataCell(
                  Text(itemRow['email'].toString()),
                ),
                DataCell(
                  Text(itemRow['description'].toString()),
                ),
                DataCell(
                  Text(itemRow['tags'].toString()),
                ),
              ],
            ),
          )
          .toList(),
    );
  }

  Widget listCardUsers(){
    return Material(
            child: StreamBuilder<QuerySnapshot>(
         
          builder:
              (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
            return Column(
                  children: <Widget>[
                    //picture
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Padding(
                            padding: EdgeInsets.only(top: 30.0, bottom: 30.0),
                            child: Image.network(user['picture'],
                                width: 200, height: 200))
                      ],
                    ),

                    //LinkedIn
                    user['linkedIn'] == null  ? null:
                    Padding(
                        padding: EdgeInsets.symmetric(horizontal: 20.0),
                        child: 
                        InkWell(
                          child: Image.asset('assets/images/LinkedIn_logo_initials.png',
                                      height: 30.0),
                          onTap: () async {
                           
                          },
                        )),

                    //description
                    Row(
                      children: <Widget>[
                        Container(
                            width: MediaQuery.of(context).size.width * 0.85,
                            child: Padding(
                              padding: EdgeInsets.all(20.0),
                              child: Text(user['description']
                                  // overflow: TextOverflow.ellipsis,
                                  ),
                            ))
                      ],
                    ),

                    //tags label
                    Row(
                      children: <Widget>[
                        Padding(
                          padding: EdgeInsets.symmetric(horizontal: 20.0),
                          child: Text('Tags:'),
                        )
                      ],
                    ),

                   
                  ].where((child) => child != null).toList(),
                );
           
          }),
        );
  }

}
