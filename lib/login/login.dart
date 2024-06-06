
import 'dart:ui';
//import 'dart:html';
import 'package:firebase_web/firebase.dart';
import 'package:firebase_web/firestore.dart';
import 'package:flutter/material.dart';
import 'package:le30_app_web/globals/users.dart' as globals;
import 'package:le30_app_web/view/layout_template.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
 // final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  TextEditingController emailField = new TextEditingController();
  TextEditingController passwordField = new TextEditingController();

  String _errorMessage = "";

  bool _isLoading = false;
  bool _loadingConnect = false;

  String userId = "";
  String localStorage = "";

  String email = "";
  String password = "";

  var users = [];

  Map user;
  String authID ="";
  var userIsAdmin = [];
  var userAuth = [];

  


  @override
  void initState() {
  
    //rprint(useAdmin);
   
    _getUsersAuthId();
  
  
    super.initState();
  }

  /* _localStorage() {
    html.window.localStorage[globals.authId] = localStorage;
  } */

   _getUsersAuthId() {
    UsersService().userAdmin().map((snapshot) {
      snapshot.then((QuerySnapshot d) {
        for (int i = 0; i < d.docs.length; ++i) {
          //users.add(d.docs[i].data()); // get list users in database
         
         setState(() {
           user = d.docs[i].data();
          
           authID = user['auth_id'].toString();
         

         });
         userAuth.add(authID);
        }
         setState(() {
          
          userAuth = userAuth;
        });

       /*  print('array userAuth');
        print(userAuth); */
        
      });
    }).toList();
   
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          width: 450.0,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(bottom: 40.0),
                child: Image.asset('assets/images/logo-le30.png'),
              ),

              //email
              Padding(
                padding: const EdgeInsets.only(left: 40.0, right: 40.0),
                child: TextFormField(
                  validator: (value) => value.isEmpty ? 'Email cant be empty' : null,
                  //onSaved: (value) => emailField.text = value.trim(),
                  autofocus: false,
                  controller: emailField,
                  keyboardType: TextInputType.emailAddress,
                  decoration: InputDecoration(hintText: 'Email'),
                ),
              ),

              //password
              Padding(
                padding: const EdgeInsets.only(left: 40.0, right: 40.0),
                child: TextFormField(
                  validator: (value) => value.isEmpty ? 'Password cant be empty' : null,
                  // onSaved: (value) => emailField.text = value.trim(),
                  controller: passwordField,
                  autofocus: false,
                  obscureText: true,
                  decoration: InputDecoration(hintText: 'Mot de passe'),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 40.0, right: 40.0),
                child: showLognInButton(),
              ),

              Padding(
                padding: const EdgeInsets.only(left: 40.0, right: 40.0),
                child: showErrorMessage(),
              )
            ],
          ),
        ),
      ),
    );
  }

  //loading
  Widget showLoading() {
    if (_isLoading) {
      return Center(child: CircularProgressIndicator());
    }
    return Container(
      height: 0.0,
      width: 0.0,
    );
  }

  //show information error
  Widget showErrorMessage() {
    if (_errorMessage.length > 0 && _errorMessage != null) {
      return Text(
        _errorMessage,
        style: TextStyle(
            fontSize: 13.0,
            color: Colors.red,
            height: 1.0,
            fontWeight: FontWeight.w300),
      );
    } else {
      return Container(
        height: 0.0,
      );
    }
  }

  Widget showLognInButton() {
    return _loadingConnect
        ? CircularProgressIndicator()
        : Padding(
            padding: EdgeInsets.symmetric(vertical: 10.0),
            child: FlatButton(
              onPressed: () {
                setState(() {
                  _loadingConnect = true;
                });
               
                
                   auth().signInWithEmailAndPassword(emailField.text, passwordField.text).then((result) {
                    var uid = result.user.uid;
                    globals.authId = uid;

                 
                   Navigator.of(context).push(FadeRoute(page: LayoutTemplate()));

                  }).catchError((error) {
                  
                  print(error);
                  setState(() {
                    _errorMessage = error.message;
                    _loadingConnect = false;
                  });  
                  
                 }
                 
                 ); 
                 
                
              },
              color: Color.fromARGB(255, 254, 234, 12),
              child: Text('Se connecter'),
            ),
          );
  }
}

class FadeRoute extends PageRouteBuilder {
  final Widget page;
  FadeRoute({this.page})
      : super(
          pageBuilder: (
            BuildContext context,
            Animation<double> animation,
            Animation<double> secondaryAnimation,
          ) =>
              page,
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

class UsersService {
  var db = firestore();
  List<Future<QuerySnapshot>> userAdmin() {
    return [
      db.collection('users').where('isAdmin', '==', true).get(),
    ];
  }
}
