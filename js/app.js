var pronoun = ['the','our',];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  var domain1 = ['.com', '.cl'];

function domain (arr1, arr2, arr3){
    let phrase = [];
    for(i = 0 ; i < pronoun.length ; i++){
          //phrase += pronoun[i];
        for(j = 0 ; j < pronoun.length ; j++){
              //phrase += pronoun[i] + adj[i];
          for(k = 0 ; k < pronoun.length; k++){
            for(l = 0; l < pronoun.length ; l++){
                phrase += pronoun[i] + adj[j] + noun[k] + domain1[l] + "\n";
                
              }
            }
            
          }
        }
        console.log(phrase);
}

domain(pronoun, adj, noun);

