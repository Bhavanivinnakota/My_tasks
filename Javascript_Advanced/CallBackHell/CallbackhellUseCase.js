function UsersInformation(callback){
    //Get users from backend whenever request is sent.
    console.log("Users data Fetched!");
    callback(101);
}
function fnGetUserPosts(userid,callback){
    //SEnd request with user id and get all the posts info
    console.log("POst information of particular user is fetched.",userid);
    //Select the post and get all the comment info of particular post
    callback(3451);

}
function fnGetCommentsBasedOnPosts(postid){
       console.log("Fetched the comment information.",postid)
}

UsersInformation((userid)=>{fnGetUserPosts(userid,function(postid){fnGetCommentsBasedOnPosts(postid)})})