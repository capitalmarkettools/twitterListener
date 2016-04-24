/**
 * Created by cmt on 4/22/16.
 */
Twit = new TwitMaker({
    consumer_key:         '6S2eMZsa7ni7R26QLlDxi0eW1'
    , consumer_secret:      'IySC0LFoaGQEJnNkGNJ5ezNRqJ1kTEURBKom2XmDlsqwAy9WgG'
    , access_token:         '2520973681-igdkOeoFoLxZBfjwki4DTNdNme8wsKXPZQnsrfN'
    , access_token_secret:  'WRk9BxV8kQvkwzfRTazloPkczImf4XBW9Mmvo7LJp7RBA'
});

console.log('Before twitter get call')
//Twit.get('search/tweets', { q: 'tglauner', count: 3 }, function(err, data, response) {
//    d = JSON.parse(data.text)
    //for (el in d){
    //    console.log(el)
    //}
    //console.log(d)
    //console.log(data)
    //console.log("Error: "+err)
    //console.log(response)

//    console.log(JSON.parse(data).text)

//})
sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ];
ny = [-74,40,-73,41]
stream = Twit.stream('statuses/filter', { locations: ny, track: 'coin' })
stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
    userName = tweet.user.screen_name;
    userTweet = tweet.text;
    if (userTweet.toLowerCase().match('coin')){
        console.log(userName + " says: " + userTweet);
        Meteor.call("addTweet", userName, userTweet)
    }
}))
console.log('After twitter get call')
