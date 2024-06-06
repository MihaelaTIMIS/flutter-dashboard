

import 'package:firebase_web/firebase.dart';
import 'package:firebase_web/firestore.dart';
import 'package:flutter/material.dart';
import 'package:le30_app_web/globals/users.dart' as globals;

class UsersService {
  var db = firestore();
  List<Future<QuerySnapshot>> allUsers() {
    return [db.collection('users').get()];
  }

  List<Future<QuerySnapshot>>usersNotAdmin(){
    return [db.collection('users').where('isAdmin', '==', false).get()];
  }

  List<Future<QuerySnapshot>>usersIsAdmin(){
    return [db.collection('users').where('isAdmin', '==', true).get()];
  }

  List<Future<QuerySnapshot>>uniqueIsAdmin(){
    return [db.collection('users').where('auth_id', '==', globals.authId).get()];
  }
}

 class ListData{

     var usersAll = [];
  var usersNotAdmin = [];
  var usersIsAdmin = [];
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

        /* setState(() {
          usersAll = usersAll;
        }); */
      });
    }).toList();
    return usersAll;
  }

} 

class ListDataUsers extends StatefulWidget {
  @override
  _ListDataUsersState createState() => _ListDataUsersState();
}

class _ListDataUsersState extends State<ListDataUsers> {
    var usersAll = [];
  var usersNotAdmin = [];
  var usersIsAdmin = [];



 void getAllUsers() {
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
    print('usersAll');
    print(usersAll);
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
    print('usersNotAdmin');
    print(usersNotAdmin);
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
    print('usersIsAdmin');
    print(usersIsAdmin);
  }
  
  

  @override
  Widget build(BuildContext context) {
    return Container(
      
    );
  }
}