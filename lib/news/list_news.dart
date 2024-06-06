import 'dart:html';
import 'dart:io';

import 'package:firebase_web/firebase.dart';
import 'package:firebase_web/firestore.dart';
import 'package:flutter/material.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:le30_app_web/services/users_data.dart';
import 'package:url_launcher/url_launcher.dart';

class ListNew extends StatefulWidget {
  const ListNew({Key key}) : super(key: key);
  @override
  _ListNewState createState() => _ListNewState();
}

class _ListNewState extends State<ListNew> {
  TextEditingController linkNewsField = new TextEditingController();
  TextEditingController linkSubscribeField = new TextEditingController();
  TextEditingController resumeField = new TextEditingController();

  var listNews = [];
  Map news;
  String isAdmin = '';
  Map user;

  String _locale='fr';

     @override
   void initState() {
     _getListNews();
     _uniqueUsersISAdmin();
    super.initState(); 
    initializeDateFormatting(_locale, null);
   }

  _getListNews() {
    NewsService().allNews().then((snapshot) {
      snapshot.forEach(
        (doc) {
          listNews.add({"id": doc.id, "data": doc.data()});
          // print(doc.id +" => "+doc.data().toString())
        },
      );
      setState(() {
        listNews = listNews;
      });
    });
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

  _launchURL(url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      //controller: controller,
      scrollDirection: Axis.vertical,
      child: Padding(
        padding: EdgeInsets.all(30.0),

        // controller: controller,
        child: Column(
          children: <Widget>[
            Container(
              width: MediaQuery.of(context).size.width,

              // child: listDadaTableNews(),
             // child: cardDataNews(),
             child: isAdmin == "true" ? listDadaTableNews() : cardDataNews() 

            ),
          ],
        ),
      ),
      );
      
    
  }

  // Delete news here
  _showDialogDelete(indexNew) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: new Text("Do you want to delete link?"),
          actions: <Widget>[
            // usually buttons at the bottom of the dialog
            FlatButton(
              child: new Text("Cancel"),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            FlatButton(
                child: Text('Delete'),
                onPressed: () {
                  firestore().collection('news').doc(indexNew).delete();
                  Navigator.of(context).pop();
                })
          ],
        );
      },
    );
  }

  // Edit news here
  _showDialogEdit(indexID, indexNew) {
    linkNewsField.text = indexNew["link_more"].toString();
    linkSubscribeField.text = indexNew["link_subscribe"].toString();
    resumeField.text = indexNew["resume"].toString();

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
            content: Container(
                width: MediaQuery.of(context).size.width * 0.6,
                child:
                    Column(mainAxisSize: MainAxisSize.min, children: <Widget>[
                  //Link News
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      autofocus: false,
                      controller: linkNewsField,
                      //decoration: InputDecoration(hintText: 'Link News'),
                      decoration: InputDecoration(
                          labelText: 'Link News',
                          hintText: indexNew["link_more"].toString()),
                    ),
                  ),

                  //Link subscribe
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      controller: linkSubscribeField,
                      autofocus: false,
                      decoration: InputDecoration(
                        labelText: 'Link Subscribe',
                          hintText: indexNew["link_subscribe"].toString()),
                    ),
                  ),
                  //resumeField
                  Padding(
                    padding: const EdgeInsets.only(left: 5.0, right: 5.0),
                    child: TextFormField(
                      //resumeField.text = indexNew["resume"].toString(),
                      controller: resumeField,
                      autofocus: false,
                      decoration: InputDecoration(
                        labelText: 'Resume',
                          hintText: indexNew["resume"].toString()),
                    ),
                  ),

                  Padding(
                    padding: const EdgeInsets.all(10.0),
                    child: RaisedButton(
                        onPressed: () {
                          firestore().collection('news').doc(indexID).set({
                            'date': DateTime.now(),
                            'link_more': linkNewsField.text,
                            'link_subscribe': linkSubscribeField.text,
                            'resume': resumeField.text
                          });
                          Navigator.of(context).pop();
                          //Navigator.pushNamed(context, NewsRoute);
                        },
                        child: new Text("Save Edit")),
                  )
                ])));
      },
    );
  }

  // show list data
  Widget listDadaTableNews() {
    return DataTable(
        // sortColumnIndex: 0,
        sortAscending: true,
        columns: [
          DataColumn(
              label: Text(
            'Date',
            style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 16.0),
          )),
          DataColumn(
              label: Text(
            'Link News',
            style: TextStyle(
                color: Colors.black,
                fontWeight: FontWeight.bold,
                fontSize: 16.0),
          )),
          DataColumn(
            label: Text(
              'Link Subscribe',
              style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                  fontSize: 16.0),
            ),
          ),
          DataColumn(
            label: Text(
              'Resume',
              style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                  fontSize: 16.0),
            ),
          ),
          DataColumn(
              label: Text(
            ' ',
          )),
          DataColumn(
              label: Text(
            ' ',
          ))
        ],
        rows: listNews
            .map((itemRow) => DataRow(cells: [
                  DataCell(Text(itemRow["data"]["date"].toString())),
                  DataCell(Text(itemRow["data"]["link_more"].toString()),
                      onTap: () =>
                          _launchURL(itemRow["data"]["link_more"].toString())),
                  DataCell(Text(itemRow["data"]["link_subscribe"].toString()),
                      onTap: () =>
                          _launchURL(itemRow["data"]["link_more"].toString())),
                  DataCell(Text(itemRow["data"]["resume"].toString())),
                  DataCell(IconButton(
                      icon: Icon(Icons.edit),
                      onPressed: () {
                        _showDialogEdit(itemRow["id"], itemRow["data"]);
                      })),
                  DataCell(IconButton(
                      icon: Icon(Icons.delete),
                      onPressed: () {
                        _showDialogDelete(itemRow["id"]);
                      })),
                ]))
            .toList());
  }

  Widget cardDataNews() {
    return ListView.builder(
        scrollDirection: Axis.vertical,
        shrinkWrap: true,
        itemCount: listNews.length,
        padding: const EdgeInsets.only(top: 2.0),
        itemBuilder: (context, index) {
          return Card(
            color: Colors.white,
            child: SizedBox(
              width: 360,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Padding(
                    padding:
                        EdgeInsets.symmetric(horizontal: 15.0, vertical: 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            FlatButton(
                              onPressed: () => _launchURL(listNews[index]
                                      ['data']["link_more"]
                                  .toString()),
                              child: Text(
                                listNews[index]['data']["resume"].toString(),
                                style: TextStyle(
                                  fontWeight: FontWeight.w700,
                                  fontSize: 14,
                                ),
                                softWrap: true,
                              ),
                            ),
                            Container(
                              child: Row(
                                children: <Widget>[
                                  RaisedButton(
                                    color: Color.fromARGB(255, 235, 235, 234),
                                    onPressed: () => _launchURL(listNews[index]
                                            ['data']["link_more"]
                                        .toString()),
                                    child: Text('En savoir plus'),
                                  ),
                                  SizedBox(width: 100),
                                  RaisedButton(
                                    color: Color.fromARGB(255, 254, 234, 12),
                                    onPressed: () => _launchURL(listNews[index]
                                            ['data']["link_more"]
                                        .toString()),
                                    child: Text('S\'inscrire'),
                                  ),
                                ],
                              ),
                            )
                          ],
                        ),
                        Row(
                          children: <Widget>[
                            Padding(padding: EdgeInsets.only(left: 20.0),
                              child: /* Text( 
                                      DateFormat('EEE d MMM', _locale) 
                                        .format(listNews[index]['data']['date']
                                            .toDate()), */ Text(listNews[index]["data"]["date"].toString(),
                              
                              ),
                            )
                           
                          ],
                        )
                      ],
                    ),
                  )
                ],
              ),
            ),
          );
        });
   
  }
}

class NewsService {
  var db = firestore();
  Future<QuerySnapshot> allNews() {
    return db.collection("news").orderBy('date', 'desc').get();
  }
}
