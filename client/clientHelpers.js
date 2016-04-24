/**
 * Created by cmt on 4/23/16.
 */
Template.listener.helpers({
    tweets : function(){
        return Tweets.find({}, {sort: {createdAt:-1}});
    }
});