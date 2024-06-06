
import 'package:firebase_web/firebase.dart';
import 'package:firebase_web/firestore.dart';
import 'package:flutter/material.dart';
import 'package:le30_app_web/news/list_news.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:le30_app_web/services/users_data.dart';

class GetNews extends StatefulWidget {
  const GetNews({Key key}) : super(key: key);
  @override
  __GetNewsState createState() => __GetNewsState();
}

class __GetNewsState extends State<GetNews> {

  TextEditingController linkNewsField = new TextEditingController();
  TextEditingController linkSubscribeField = new TextEditingController();
  TextEditingController resumeField = new TextEditingController();

  String _locale='fr';
  Map user;
   String isAdmin = '';
    @override
   void initState() {
     _uniqueUsersISAdmin();
    super.initState(); 
    
    initializeDateFormatting(_locale, null);
   }

    _uniqueUsersISAdmin() {
    UsersService().uniqueIsAdmin().map((snapshot) {
      snapshot.catchError((onError) {
        print('error:');
        print(onError);
      });

      snapshot.then((QuerySnapshot d) {
        for (int i = 0; i < d.docs.length; ++i) {
         user = d.docs[i].data();
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
              'List New',
              style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                  fontSize: 30.0),
            ),
            SizedBox(height: 30.0,),
            // checkIsAdmin(test),
           isAdmin == "true" ? RaisedButton(
              color: Color.fromARGB(255, 254, 234, 12),
              onPressed: () {
                _dialogCreateNews();
              },
              child: Text(
                'Create News',
                style: TextStyle(color: Colors.black),
              ),
            ) : Container(height: 0,),
           
            ListNew()
          ],
        ),
      ),
    );
  }


  _dialogCreateNews(){
    
    linkNewsField.text = '';
    linkSubscribeField.text = '';
    resumeField.text = '';

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          
          content: Container(
            width: MediaQuery.of(context).size.width * 0.6 ,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  //Link News
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      autofocus: false,
                      controller: linkNewsField,
                      keyboardType: TextInputType.url,
                      decoration: InputDecoration(labelText: 'Link News'),
                    ),
                  ),

                  //Link linkSubscribeField
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      controller: linkSubscribeField,
                      autofocus: false,
                      decoration: InputDecoration(labelText: 'Link Subscribe'),
                    ),
                  ),
                  
                   //Resume
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      controller: resumeField,
                      autofocus: false,
                      decoration: InputDecoration(labelText: 'Resume',
                      ),
                    ),
                  ),
                  

                  Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: RaisedButton(
                      onPressed: (){
                        
                         firestore().collection('news').doc().set({
                            'date': DateTime.now(),
                            'link_more':linkNewsField.text,
                            'link_subscribe':linkSubscribeField.text,
                            'resume':resumeField.text
                          });
                      
                        
                        Navigator.of(context).pop();
                      }, 
                      child: new Text("Save Link")
                    ),
                  )
                  
                ]
              )
          )
         
        );
      },
    );
  }



}
