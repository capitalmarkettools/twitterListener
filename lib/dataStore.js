Tweets = new Mongo.Collection("tweets");

Meteor.methods({
    addTweet: function (userName, userTweet) {
        Tweets.insert({
            userName: userName,
            userTweet: userTweet,
            createdAt: new Date()
        })
    }
});

//addTweet = function (userName, userTweet) {
//        Tweets.insert({
//            userName: userName,
//            userTweet: userTweet,
//            createdAt: new Date()
//        })
//    };
