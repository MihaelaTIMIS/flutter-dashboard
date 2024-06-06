/* import 'dart:html' as html; */


import 'package:firebase_web/firebase.dart';
import 'package:firebase_web/firestore.dart';
import 'package:flutter/material.dart';
import 'package:le30_app_web/clients/list_clients.dart';
import 'package:le30_app_web/services/route_name.dart';
import 'package:le30_app_web/services/users_data.dart';



class Clients extends StatefulWidget {
  const Clients({Key key}) : super(key: key);

  @override
  _ClientsState createState() => _ClientsState();
}

class _ClientsState extends State<Clients> {
  TextEditingController emailField = new TextEditingController();
  TextEditingController passwordField = new TextEditingController();
  TextEditingController firstNameField = new TextEditingController();
  TextEditingController descriptionField = new TextEditingController();
  TextEditingController tagsField = new TextEditingController();

  Map user;
  bool isNameValid = false;
 
  String _errorMessage = "";
   String authID ="";
  var userIsAdmin = [];
  var userAuth = [];
  var uniqueUsersISAdmin = [];
  
  String isAdmin = '';

  @override
  void initState() {
     _errorMessage = "";
    _uniqueUsersISAdmin();
    
    super.initState();
  }


  _uniqueUsersISAdmin() {
    UsersService().uniqueIsAdmin().map((snapshot) {
      snapshot.catchError((onError) {
        print('error:');
        print(onError);
      });

      snapshot.then((QuerySnapshot d) {
        for (int i = 0; i < d.docs.length; ++i) {
         user = d.docs[i].data(); // get list users in database
         isAdmin = user['isAdmin'].toString();
        }

        setState(() {
          isAdmin = isAdmin;
        });
      });
     
    }).toList();
   
  }
   

  @override
  Widget build(BuildContext context) {

   
    return Container(
      child: Padding(
        padding: const EdgeInsets.only(top: 30.0),
        child: Column(
          children: <Widget>[
            Text(
              'List Clients',
              style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                  fontSize: 30.0),
            ),
            SizedBox(
              height: 30.0,
            ),

          // checkIsAdmin(test),
           isAdmin == "true" ? RaisedButton(
              color: Color.fromARGB(255, 254, 234, 12),
              onPressed: () {
                _showFormCreateClients(context);
              },
              child: Text(
                'Create client',
                style: TextStyle(color: Colors.black),
              ),
            ) : Container(height: 0,),

            
            ListClients(),
            // showErrorMessage(),
          ],
        ),
      ),
    );
  }

  _showFormCreateClients(BuildContext context) {
    emailField.text = '';
    passwordField.text = '';
    firstNameField.text = '';
    print(_errorMessage);
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            content: Container(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  //email
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      validator: (value) =>
                          value.isEmpty ? 'Email cant be empty' : null,
                      //onSaved: (value) => emailField.text = value.trim(),

                      autofocus: false,
                      controller: emailField,
                      keyboardType: TextInputType.emailAddress,
                      decoration: InputDecoration(
                        hintText: 'Email',
                        // errorText: isNameValid ? 'Email cant be empty' : null,
                      ),
                    ),
                  ),

                  //password
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      validator: (value) =>
                          value.isEmpty ? 'Password cant be empty' : null,
                      controller: passwordField,
                      autofocus: false,
                      obscureText: true,
                      decoration: InputDecoration(hintText: 'Mot de passe'),
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      autofocus: false,
                      controller: firstNameField,
                      keyboardType: TextInputType.text,
                      decoration: InputDecoration(hintText: 'First Name'),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 20.0),
                    child: RaisedButton(
                      child: Text("Save New User"),
                      onPressed: () {
                        //validationCreate();
                        auth()
                            .createUserWithEmailAndPassword(
                                emailField.text, passwordField.text)
                            .then((userCreds) {
                          var uid = userCreds.user.uid;
                          firestore().collection('users').add({
                            'auth_id': uid,
                            'picture':
                                'https://firebasestorage.googleapis.com/v0/b/le-trente-app-mobile.appspot.com/o/Portrait_Placeholder.png?alt=media&token=21e1fe6b-7c2b-4a34-9395-886dab278a5e',
                            'first_name': firstNameField.text,
                            'email': emailField.text,
                            // 'password': passwordField.text,
                            'description': '',
                            'isAdmin': false,
                            'linkdeIn': ''
                          });
                         // Navigator.pop(context, true); //.pushNamed(ClientsRoute);
                           Navigator.of(context).popAndPushNamed(ClientsRoute);
                          print('ClientsRoute');
                          print(ClientsRoute);

                        }).catchError(
                          (e) {
                            
                            setState(() {
                              _errorMessage = e.message;
                            });
                            print('Error');
                            print(e);
                          },
                        );
                      },
                    ),
                  )
                  // showErrorMessage(),
                ],
              ),
            ),
          );
        });
  }



  //show information error
  Widget showErrorMessage() {
    print('_errorMessage in function ');
    print("_errorMessage");
    print(_errorMessage);
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
      return new Container(
        height: 0.0,
      );
    }
  }
}
