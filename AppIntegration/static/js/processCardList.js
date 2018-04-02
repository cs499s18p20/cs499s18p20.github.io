/*A list of all card names for the drop-down menu.*/
var masterCNarray = ["AceOfSpades", "KingOfSpades", "JackOfSpades", "QueenOfSpades", "TenOfSpades", "NineOfSpades", "AceOfDiamonds", "KingOfDiamonds", "JackOfDiamonds", "QueenOfDiamonds", "TenOfDiamonds", "NineOfDiamonds", "AceOfClubs", "KingOfClubs", "JackOfClubs", "QueenOfClubs", "TenOfClubs", "NineOfClubs", "AceOfHearts", "KingOfHearts", "JackOfHearts", "QueenOfHearts", "TenOfHearts", "NineOfHearts"];
/* The following section creates a mock Euchre hand (five cards) for purposes of this placeholder, and will not actually be used in the final website.*/
//var cards = [];
//var usedCNs = [];
//var num_cards = 6;
//// add get number of cards from length of Posted cards array
//for (var i = 0; i < num_cards; i+=1) {
//  var NPpair = [];
//  var randCN = masterCNarray[ Math.floor(Math.random() * masterCNarray.length) ];
//  var randCP = Math.random();
//  while (usedCNs.includes(randCN)) { //no duplicates
//	randCN = masterCNarray[ Math.floor(Math.random() * masterCNarray.length) ];
//  }
//  NPpair.push(randCN, randCP);
//  usedCNs.push(randCN);
//  cards.push(NPpair);
//}
/*This function gets the five card names from a 2-D array of card names and probabilities.*/
function getCN(cardList, index) {
  var cardVar = (cardList[index])[0];
  var cardString = cardVar.split("Of");
  document.write(cardString[0]+" of "+cardString[1]);
  //document.write((cardList[index])[0]);
}
function getCNs(cardList){
    console.log(cardList);
	for(var card = 0; card< cardList.length; card++){
	    console.log(cardList[card][0])
		getCN(cardList, card);
	}
}
/*This function gets the requested probability associated with a card, rounded to two decimal places.*/
function getCP(index) {
  var roundedCP = Number(Math.round((cards[index])[1]+'e2')+'e-2') * 100;
  document.write(roundedCP + '%');
}
/*This section creates the drop-down menus.*/
function addOptions(i) {
	var select = document.getElementById("selectCard" + i);
	for (var i = 0; i < masterCNarray.length; i+=1) {
	  var opt = document.createElement("option");
	  opt.text = masterCNarray[i];
	  select.add(opt);
	}
}
/*This section makes the drop-down menus accessible to change card values if the 'net guessed wrong.*/
function enable_value(id){
  document.getElementById("selectCard" + id).disabled = false;
}
/*Revise the card name according to what the user has selected in the drop-down menus.*/
/*----------HAVE POTENTIAL TO CORRECTLY REVISE THE CARD NAME IF OTHER ADJUSTMENTS ARE MADE TO CODE,
 BUT DO NOT UPDATE THE WEBPAGE IN REAL TIME AS DESIRED.-----------*/
function reviseCard(dropdown, i) {
	var e = document.getElementById("selectCard" + i);
	var strUser = e.options[e.selectedIndex].text;
	(cards[0])[0] = strUser;
	document.write((cards[0])[0]);
}
/*
function loadTable(){
	var table = document.getElementById("myTable");
	var br = document.createElement('br');
	table.appendChild(br);
	var br = document.createElement('br');
	table.appendChild(br);
	for(var i = 0; i < num_cards; i += 1){
		var tr = document.createElement('tr');
		for (var j = 0; j < 3; j++) {
            var td = document.createElement('td');
			if(j == 0){
				td.id = "selectCard" + (i+1);
				td.appendChild(document.createTextNode(cards[i][0]));
				tr.
			}
			else if(j == 1){
				td.appendChild(document.createTextNode('with ' + cards[i][1] + ' %'));
			}
			else{
				td.onclick = "enable_value(" + (i+1) + ")";
				td.value = "Am I wrong?";
			}
			tr.appendChild(td);
        }
		table.appendChild(tr);
		var br = document.createElement('br');
		table.appendChild(br);
	}
}
*/
